import React, { Fragment, useEffect, useMemo, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useLanguage } from "../../../../helpers/Language/useLanguage";
import { getSettings } from "../../../../actions/main";
import StyleTag from "@/styles/StyleTag";

const pickTr = (settings, isRTL, keyg) => {
  if (!settings) return undefined;
  const tr = settings.translations?.find((x) => x?.locale === (isRTL ? "ar" : "en"));
  return tr?.[keyg] ?? settings?.[keyg];
};

const withBust = (url, version) => {
  if (!url) return url;
  const sep = url.includes("?") ? "&" : "?";
  const v = version || Date.now();
  return `${url}${sep}_=${encodeURIComponent(v)}`;
};

function ImageSwap({ src, alt, className, style, placeholderHeight = 260 }) {
  const [ready, setReady] = useState(false);
  const [showSrc, setShowSrc] = useState("");

  useEffect(() => {
    let alive = true;
    setReady(false);
    setShowSrc("");
    if (!src) return;
    const img = new Image();
    img.decoding = "async";
    img.onload = () => { if (alive) { setShowSrc(src); setReady(true); } };
    img.onerror = () => { if (alive) { setShowSrc(src); setReady(true); } };
    img.src = src;
    return () => { alive = false; };
  }, [src]);

  if (!ready) {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          width: "100%",
          height: placeholderHeight,
          borderRadius: "var(--corp-radius-lg)",
          background: "var(--corp-gray-100)",
        }}
        aria-hidden="true"
      />
    );
  }
  return <img src={showSrc} alt={alt || ""} className={className} style={style} decoding="async" />;
}

const HighlightCard = ({ img, title, desc, isRTL, idx }) => (
  <Col md="6" className="mb-4">
    <div className={`corp-highlight-card ${isRTL ? "rtl" : ""}`}>
      <div className="corp-highlight-media">
        <ImageSwap
          src={img}
          alt={title || ""}
          className="img-fluid"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          placeholderHeight={280}
        />
        <div className="corp-highlight-overlay" />
      </div>
      <div className="corp-highlight-content">
        {title && <span className="corp-highlight-badge">{title}</span>}
        {desc && <h3 className="corp-highlight-title">{desc}</h3>}
        <a href="#contact" className="corp-btn corp-btn-sm corp-btn-outline" style={{ marginTop: 16 }}>
          {isRTL ? "طلب معلومات" : "Request Info"}
        </a>
      </div>
    </div>
  </Col>
);

const Collections = () => {
  const { isRTL } = useLanguage();
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        setSettings(null);
        const res = await getSettings();
        const s = res?.settings ?? res;
        if (mounted) setSettings(s || null);
      } catch {
        if (mounted) setSettings(null);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [isRTL]);

  const offers = useMemo(() => {
    const s = settings || {};
    const ver = s?.updated_at || s?.updatedAt || undefined;

    const img1Raw = s.offer_one_section_image_path || s.offer_section_image1_path || s.banner_image_path;
    const img1 = withBust(img1Raw, ver);
    const title1 = pickTr(s, isRTL, "offer_section_title") || pickTr(s, isRTL, "banner_product_title_section") || "";
    const desc1 = pickTr(s, isRTL, "offer_section_content") || pickTr(s, isRTL, "banner_product_content_section") || "";

    const img2Raw = s.offer_tow_section_image_path || s.offer_two_section_image_path || s.offer_section_image2_path;
    const img2 = withBust(img2Raw, ver);
    const title2 = pickTr(s, isRTL, "offer_section_title2") || title1;
    const desc2 = pickTr(s, isRTL, "offer_section_content2") || desc1;

    return [
      { img: img1, title: title1, desc: desc1 },
      { img: img2, title: title2, desc: desc2 },
    ];
  }, [settings, isRTL]);

  const data = loading
    ? [{ img: "", title: "", desc: "" }, { img: "", title: "", desc: "" }]
    : offers;

  const listKey = useMemo(
    () => (loading ? "skeleton" : offers.map((o) => o.img).join("|")),
    [loading, offers]
  );

  return (
    <Fragment>
      <section className="corp-section-sm" id="highlights" key={listKey} dir={isRTL ? "rtl" : "ltr"}>
        <Container>
          <Row className="g-4">
            {data.map((d, i) => (
              <HighlightCard
                key={`${i}-${d.img || "sk"}`}
                img={d.img}
                title={d.title}
                desc={d.desc}
                isRTL={isRTL}
                idx={i}
              />
            ))}
          </Row>
        </Container>
      </section>

      <StyleTag global css={`
        .corp-highlight-card {
          position: relative;
          border-radius: var(--corp-radius-2xl);
          overflow: hidden;
          min-height: 320px;
          display: flex;
          transition: all var(--corp-duration) var(--corp-ease);
          border: 1px solid var(--corp-gray-200);
        }
        .corp-highlight-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--corp-shadow-xl);
        }
        .corp-highlight-media {
          position: absolute;
          inset: 0;
        }
        .corp-highlight-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 8s ease;
        }
        .corp-highlight-card:hover .corp-highlight-media img {
          transform: scale(1.05);
        }
        .corp-highlight-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(15, 27, 45, 0.8) 0%, rgba(15, 27, 45, 0.2) 100%);
        }
        .corp-highlight-content {
          position: relative;
          z-index: 2;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          min-height: 320px;
          width: 100%;
        }
        .corp-highlight-badge {
          display: inline-block;
          padding: 6px 16px;
          border-radius: var(--corp-radius-full);
          background: rgba(200, 163, 95, 0.2);
          color: var(--corp-gold-light);
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 12px;
          width: fit-content;
        }
        .corp-highlight-title {
          font-size: clamp(1.3rem, 2.5vw, 1.8rem);
          font-weight: 800;
          color: var(--corp-white);
          line-height: 1.2;
          margin: 0;
        }
        @media (max-width: 767.98px) {
          .corp-highlight-content {
            padding: 24px;
            min-height: 260px;
          }
        }
      `} />
    </Fragment>
  );
};

export default Collections;
