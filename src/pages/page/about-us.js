import React, { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
import CommonLayout from "../../components/shop/common-layout";
import { Container, Row, Col, Media, Spinner, Alert } from "reactstrap";
import { Slider2 } from "../../services/script";
import ServiceLayout from "../../components/common/Service/service1.js";
import { useLanguage } from "../../helpers/Language/useLanguage.js";

// lazy-load react-slick on client only
const Slick = dynamic(() => import("react-slick"), { ssr: false });

// actions
import { getSettings, getTestimonials } from "../../actions/main";

import StyleTag from "@/styles/StyleTag";
/* ---------------- helpers ---------------- */
const pickTr = (settings, key, isRTL) => {
  if (!settings) return "";
  const locale = isRTL ? "ar" : "en";
  const tr = settings?.translations?.find((t) => t?.locale === locale);
  return (tr && tr[key]) || settings[key] || "";
};

const fullName = (u) =>
  [u?.fname, u?.lname].filter(Boolean).join(" ") || u?.username || "User";

const resolveImage = (settings, src) => {
  if (!src) return "/assets/images/avtar.jpg";
  if (/^https?:\/\//i.test(src)) return src;

  let base =
    settings?.user_image_path ||
    settings?.users_image_path ||
    settings?.offer_image_path;

  if (!base) {
    const sampleAbs =
      settings?.image_logo_path ||
      settings?.banner_image_path ||
      settings?.about_section_image_path ||
      "";
    try {
      if (sampleAbs) {
        const u = new URL(sampleAbs);
        base = `${u.origin}/images`;
      }
    } catch {}
  }

  if (base) {
    return `${String(base).replace(/\/$/, "")}/${String(src).replace(/^\//, "")}`;
  }
  return `/assets/images/${src}`;
};

/* ---------------- Testimonial Card ---------------- */
const TestimonialCard = ({ img, name, post, about, rate }) => {
  return (
    <div className="h-100">
      <div className="card h-100 shadow-sm border-0 rounded-3">
        <div className="card-body d-flex" style={{ gap: 16 }}>
          <div className="text-center" style={{ minWidth: 84 }}>
            <Media
              src={img}
              alt={name}
              className="rounded-circle"
              style={{ width: 72, height: 72, objectFit: "cover" }}
            />
            <h6 className="mt-2 mb-0 text-capitalize">{name}</h6>
            {post ? <small className="text-muted">{post}</small> : null}
          </div>
          <div className="flex-grow-1">
            <p className="mb-2 text-muted" style={{ lineHeight: 1.6 }}>
              {about}
            </p>
            <div className="d-flex" style={{ gap: 4, fontSize: 18 }}>
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  style={i < rate ? { color: "#b98848" } : { color: "#e2e2e2" }}
                  aria-hidden="true"
                >
                  ★
                </span>
              ))}
              <span className="visually-hidden">{rate} / 5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ============================== PAGE ============================== */
const AboutUs = () => {
  const { t, isRTL } = useLanguage();
  const [loading, setLoading] = useState(true);
  const [apiError, setApiError] = useState(null);
  const [settings, setSettings] = useState(null);
  const [testimonials, setTestimonials] = useState([]);

  const dirStyle = useMemo(
    () => ({
      direction: isRTL ? "rtl" : "ltr",
      textAlign: isRTL ? "right" : "left",
    }),
    [isRTL]
  );

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      setApiError(null);
      try {
        const [sRes, tRes] = await Promise.all([getSettings(), getTestimonials()]);
        if (!mounted) return;

        const sData =
          sRes?.settings || sRes?.data?.settings || sRes?.data || sRes || null;
        if (!sData) throw new Error("Failed to load settings");
        setSettings(sData);

        const tData = Array.isArray(tRes)
          ? tRes
          : Array.isArray(tRes?.data)
          ? tRes.data
          : Array.isArray(tRes?.data?.data)
          ? tRes.data.data
          : Array.isArray(tRes?.testimonials)
          ? tRes.testimonials
          : [];
        setTestimonials(tData);
      } catch (err) {
        if (mounted)
          setApiError(err?.message || t("something_wrong") || "Something went wrong");
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [t]);

  /* ---------- About copy ---------- */
  const aboutTitle =
    pickTr(settings, "about_section_sub_title", isRTL) ||
    pickTr(settings, "about_section_title", isRTL) ||
    t("about_subtitle");

  const p1 =
    pickTr(settings, "about_section_introduction", isRTL) ||
    pickTr(settings, "about_us", isRTL) ||
    t("about_description");

  const p2 = [
    pickTr(settings, "about_section_vision", isRTL),
    pickTr(settings, "about_section_apart", isRTL),
    pickTr(settings, "about_section_commitment", isRTL),
  ]
    .filter(Boolean)
    .join(" ");

  const aboutImg =
    settings?.about_section_image_path

  /* ---------- Normalize testimonials ---------- */
  const items = useMemo(() => {
    return (testimonials || []).map((it) => {
      const u = it?.user || it?.users || {};
      const name = fullName(u);
      const post = u?.username || t("customer");
      const about = it?.review || "";
      const rateRaw = Number(it?.rate);
      const rate = Number.isFinite(rateRaw) ? Math.max(0, Math.min(5, rateRaw)) : 0;
      const img = resolveImage(settings, u?.image);
      return {
        id: it?.id ?? `${name}-${about?.slice(0, 8)}`,
        img,
        name,
        post,
        about,
        rate,
      };
    });
  }, [testimonials, settings, t]);

  /* ---------- Slider settings (cleaned) ---------- */
  const sliderSettings = useMemo(() => {
    const base = (typeof Slider2 === "object" && Slider2) || {};
    return {
      dots: true,
      arrows: false,
      infinite: items.length > 2,
      speed: 500,
      slidesToShow: Math.min(2, Math.max(1, items.length)),
      slidesToScroll: 1,
      rtl: isRTL,
      responsive: [{ breakpoint: 992, settings: { slidesToShow: 1, slidesToScroll: 1 } }],
      ...base,
      rtl: isRTL,
      slidesToShow: Math.min(2, Math.max(1, items.length)),
    };
  }, [items.length, isRTL]);

  return (
    <CommonLayout parent="home" title="About-us">
      <section className="seada-luxury-about section-b-space" style={dirStyle}>
        <Container>
          {/* Hero Banner */}
          <Row>
            <Col lg="12">
              <div className="luxury-hero-banner">
                {/* image / skeleton */}
                {loading ? (
                  <div
                    className="w-100"
                    style={{
                      height: 480,
                      background: "linear-gradient(90deg, #f3f3f3 25%, #ecebeb 37%, #f3f3f3 63%)",
                      backgroundSize: "400% 100%",
                      animation: "shimmer 1.4s ease-in-out infinite",
                    }}
                  />
                ) : (
                  <Media
                    src={aboutImg}
                    className="img-fluid banner-img"
                    alt={pickTr(settings, "about_section_title", isRTL) || "About"}
                  />
                )}

                {/* soft gradient overlay */}
                <div className="banner-overlay" />

                {/* headline */}
                <div className="banner-content">
                  <h2>
                    {pickTr(settings, "about_section_title", isRTL) || t("about_title") || "About Us"}
                  </h2>
                </div>
              </div>
            </Col>
          </Row>

          {/* About Content */}
          <Row className="mt-5 g-4 justify-content-center">
            <Col lg="10">
              {apiError ? (
                <Alert color="danger" className="mt-2">
                  {apiError}
                </Alert>
              ) : (
                <div className="luxury-about-content">
                  <h4>{aboutTitle}</h4>
                  <p className="lead-text">{p1}</p>
                  {!!p2 && <p className="secondary-text">{p2}</p>}
                </div>
              )}
            </Col>
          </Row>

          {/* Testimonials */}
          {items.length > 0 && (
            <Row className="mt-5 pt-4">
              <Col lg="12">
                <div className="luxury-section-title">
                  <h4>{t("what_customers_say") || "What our customers say"}</h4>
                </div>

                <div className="position-relative">
                  <Slick {...sliderSettings}>
                    {items.map((it) => (
                      <div key={it.id} className="px-3 py-4">
                        <div className="luxury-testimonial-card h-100">
                          <div className="card-inner">
                            <div className="author-info">
                              <Media src={it.img} alt={it.name} className="author-img" />
                              <div>
                                <h6>{it.name}</h6>
                                {it.post && <small>{it.post}</small>}
                              </div>
                            </div>
                            <div className="rating-stars">
                              {[...Array(5)].map((_, i) => (
                                <i key={i} className={`fa fa-star ${i < it.rate ? "active" : "inactive"}`} />
                              ))}
                            </div>
                            <p className="review-text">{it.about}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slick>
                </div>
              </Col>
            </Row>
          )}
        </Container>
      </section>

      {/* Services strip */}
      <div className="section-b-space bg-light-green">
        <ServiceLayout sectionClass={"service border-section small-section"} />
      </div>

      <StyleTag global css={`
        @keyframes shimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: -135% 0%; }
        }
        .seada-luxury-about {
          background: linear-gradient(180deg, #fdfdfd 0%, #f4f8f5 100%);
          padding-top: 60px;
        }
        .luxury-hero-banner {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(11, 107, 55, 0.1);
          height: 480px;
        }
        .luxury-hero-banner .banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 10s ease;
        }
        .luxury-hero-banner:hover .banner-img {
          transform: scale(1.05);
        }
        .banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(11, 107, 55, 0.6) 0%, rgba(0, 0, 0, 0.1) 100%);
        }
        .banner-content {
          position: absolute;
          bottom: 40px;
          left: 40px;
          right: 40px;
          z-index: 2;
        }
        [dir="rtl"] .banner-content {
          text-align: right;
        }
        .banner-content h2 {
          color: #fff;
          font-size: 3.5rem;
          font-weight: 900;
          margin: 0;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          letter-spacing: -0.5px;
        }
        .luxury-about-content {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          border-radius: 24px;
          padding: 48px;
          border: 1px solid rgba(11, 107, 55, 0.08);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
          text-align: center;
        }
        .luxury-about-content h4 {
          font-size: 2rem;
          font-weight: 900;
          color: #0b6b37;
          margin-bottom: 24px;
        }
        .lead-text {
          font-size: 1.25rem;
          color: #1a231c;
          line-height: 1.8;
          font-weight: 500;
          margin-bottom: 24px;
        }
        .secondary-text {
          font-size: 1.05rem;
          color: #647267;
          line-height: 1.8;
        }
        .luxury-section-title {
          text-align: center;
          margin-bottom: 30px;
        }
        .luxury-section-title h4 {
          font-size: 2.2rem;
          font-weight: 900;
          color: #1a231c;
        }
        .luxury-testimonial-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(11, 107, 55, 0.05);
          border: 1px solid rgba(11, 107, 55, 0.05);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .luxury-testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(11, 107, 55, 0.1);
        }
        .card-inner {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .author-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .author-img {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #eef6f1;
        }
        .author-info h6 {
          margin: 0 0 4px;
          font-size: 1.1rem;
          font-weight: 800;
          color: #1a231c;
        }
        .author-info small {
          color: #8c9c91;
          font-weight: 600;
        }
        .rating-stars {
          display: flex;
          gap: 4px;
        }
        .rating-stars i.active {
          color: #ffb100;
        }
        .rating-stars i.inactive {
          color: #e2e8e4;
        }
        .review-text {
          color: #556259;
          font-size: 1.05rem;
          line-height: 1.7;
          margin: 0;
          font-style: italic;
        }
        .bg-light-green {
          background: linear-gradient(180deg, #f4f8f5 0%, #fff 100%);
        }
        @media (max-width: 768px) {
          .banner-content h2 { font-size: 2.2rem; }
          .luxury-about-content { padding: 32px 20px; }
          .luxury-hero-banner { height: 360px; border-radius: 20px; }
        }
      `} />
    </CommonLayout>
  );
};

export default AboutUs;
