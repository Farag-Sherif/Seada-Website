import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import { Container, Media } from "reactstrap";
import { useLanguage } from "../../../../helpers/Language/useLanguage";
import { getTestimonials, getSettings } from "../../../../actions/main";
import StyleTag from "@/styles/StyleTag";

const fullName = (u) =>
  [u?.fname, u?.lname].filter(Boolean).join(" ") || u?.username || "Client";

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
  if (base) return `${String(base).replace(/\/$/, "")}/${String(src).replace(/^\//, "")}`;
  return `/assets/images/${src}`;
};

const TestimonialsSection = () => {
  const { t, isRTL } = useLanguage();
  const [testimonials, setTestimonials] = useState([]);
  const [settings, setSettings] = useState(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const [tRes, sRes] = await Promise.all([
          getTestimonials(),
          getSettings(),
        ]);
        if (!alive) return;

        const tData = Array.isArray(tRes)
          ? tRes
          : Array.isArray(tRes?.data)
          ? tRes.data
          : Array.isArray(tRes?.testimonials)
          ? tRes.testimonials
          : [];
        setTestimonials(tData);

        const sData = sRes?.settings ?? sRes?.data ?? sRes ?? null;
        setSettings(sData);
      } catch {
        /* silent */
      }
    })();
    return () => { alive = false; };
  }, []);

  const items = useMemo(() => {
    return (testimonials || []).map((it) => {
      const u = it?.user || it?.users || {};
      const name = fullName(u);
      const about = it?.review || "";
      const rateRaw = Number(it?.rate);
      const rate = Number.isFinite(rateRaw) ? Math.max(0, Math.min(5, rateRaw)) : 5;
      const img = resolveImage(settings, u?.image);
      return { id: it?.id ?? name, img, name, about, rate, post: u?.username || "" };
    });
  }, [testimonials, settings]);

  const sliderSettings = useMemo(
    () => ({
      dots: true,
      arrows: false,
      infinite: items.length > 2,
      speed: 500,
      slidesToShow: Math.min(3, Math.max(1, items.length)),
      slidesToScroll: 1,
      rtl: isRTL,
      responsive: [
        { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 1 } },
        { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      ],
    }),
    [items.length, isRTL]
  );

  if (items.length === 0) return null;

  return (
    <section className="corp-section" id="testimonials" dir={isRTL ? "rtl" : "ltr"}>
      <Container>
        <div className="corp-section-header">
          <span className="corp-label">
            {isRTL ? "آراء العملاء" : "Testimonials"}
          </span>
          <h2>{isRTL ? "ماذا يقول عملاؤنا" : "What Our Clients Say"}</h2>
          <hr className="corp-gold-line" />
          <p>
            {isRTL
              ? "ثقة عملائنا هي أعظم إنجازاتنا. اطلع على تجاربهم معنا."
              : "Our clients' trust is our greatest achievement. Explore their experiences with us."}
          </p>
        </div>

        <Slider key={isRTL ? "rtl" : "ltr"} {...sliderSettings} className="testimonial-slider">
          {items.map((it) => (
            <div key={it.id} className="px-3">
              <div className="testimonial-card">
                <div className="testimonial-quote" aria-hidden="true">"</div>
                <p className="testimonial-text">{it.about}</p>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < it.rate ? "star-active" : "star-inactive"}>★</span>
                  ))}
                </div>
                <div className="testimonial-author">
                  <Media
                    src={it.img}
                    alt={it.name}
                    className="testimonial-avatar"
                  />
                  <div>
                    <strong>{it.name}</strong>
                    {it.post && <span>{it.post}</span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Container>

      <StyleTag global css={`
        .testimonial-slider .slick-dots {
          bottom: -40px;
        }
        .testimonial-slider .slick-dots li button:before {
          font-size: 10px;
          color: var(--corp-gray-400);
          transition: all 0.3s ease;
        }
        .testimonial-slider .slick-dots li.slick-active button:before {
          color: var(--corp-gold);
          font-size: 12px;
        }
        .testimonial-card {
          background: var(--corp-white);
          border: 1px solid var(--corp-gray-200);
          border-radius: var(--corp-radius-xl);
          padding: 36px 28px 28px;
          position: relative;
          transition: all var(--corp-duration) var(--corp-ease);
          height: 100%;
        }
        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--corp-shadow-lg);
          border-color: var(--corp-gold);
        }
        .testimonial-quote {
          font-family: var(--font-heading);
          font-size: 4rem;
          line-height: 1;
          color: var(--corp-gold);
          opacity: 0.3;
          position: absolute;
          top: 12px;
          right: 24px;
        }
        [dir="rtl"] .testimonial-quote {
          right: auto;
          left: 24px;
        }
        .testimonial-text {
          font-size: 1rem;
          color: var(--corp-text-secondary);
          line-height: 1.7;
          font-style: italic;
          margin-bottom: 20px;
          min-height: 80px;
        }
        .testimonial-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 20px;
        }
        .star-active { color: #F59E0B; font-size: 16px; }
        .star-inactive { color: var(--corp-gray-300); font-size: 16px; }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 16px;
          border-top: 1px solid var(--corp-gray-200);
        }
        .testimonial-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--corp-gray-200);
        }
        .testimonial-author strong {
          display: block;
          font-size: 0.95rem;
          color: var(--corp-navy);
        }
        .testimonial-author span {
          display: block;
          font-size: 0.8rem;
          color: var(--corp-text-muted);
          margin-top: 2px;
        }
      `} />
    </section>
  );
};

export default TestimonialsSection;
