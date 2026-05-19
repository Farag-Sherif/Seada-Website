import React, { Fragment, useEffect, useState } from "react";
import { Container, Row, Col, Media } from "reactstrap";
import { useLanguage } from "../../../../helpers/Language/useLanguage";
import { getSettings } from "../../../../actions/main";
import StyleTag from "@/styles/StyleTag";

const pickTr = (settings, isRTL, key) => {
  if (!settings) return undefined;
  const tr = settings.translations?.find((x) => x?.locale === (isRTL ? "ar" : "en"));
  return tr?.[key] ?? settings[key];
};

const AboutUs = () => {
  const { t, isRTL } = useLanguage();
  const [settings, setSettings] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await getSettings();
        const s = res?.settings ?? res;
        if (mounted) setSettings(s);
      } catch {
        if (mounted) setSettings(null);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, []);

  const smallTitle = pickTr(settings, isRTL, "about_section_sub_title") || (isRTL ? "من نحن" : "About Us");
  const bigTitle = pickTr(settings, isRTL, "about_section_title") || t("welcome_multi_store") || (isRTL ? "قصة شركتنا" : "Our Company Story");
  const intro = pickTr(settings, isRTL, "about_section_introduction") || pickTr(settings, isRTL, "about_us") || t("lorem_about_text") || "";
  const vision = pickTr(settings, isRTL, "about_section_vision");
  const apart = pickTr(settings, isRTL, "about_section_apart");
  const commitment = pickTr(settings, isRTL, "about_section_commitment");
  const imageSrc = settings?.about_section_image_path || settings?.banner_image_path || settings?.image_logo_path || "";

  const features = [
    vision && { icon: "🎯", label: isRTL ? "رؤيتنا" : "Our Vision", text: vision },
    apart && { icon: "⭐", label: isRTL ? "ما يميزنا" : "What Sets Us Apart", text: apart },
    commitment && { icon: "🤝", label: isRTL ? "التزامنا" : "Our Commitment", text: commitment },
  ].filter(Boolean);

  return (
    <Fragment>
      <section className="corp-section" id="about" dir={isRTL ? "rtl" : "ltr"}>
        <Container>
          <Row className="align-items-center g-5">
            {imageSrc && (
              <Col lg="5" className="mb-4 mb-lg-0">
                <div className="corp-about-image">
                  <Media src={imageSrc} className="img-fluid" alt={smallTitle} />
                  <div className="corp-about-accent" aria-hidden="true" />
                  <div className="corp-about-exp-badge">
                    <strong>15+</strong>
                    <span>{isRTL ? "سنة خبرة" : "Years"}</span>
                  </div>
                </div>
              </Col>
            )}

            <Col lg={imageSrc ? "7" : "10"} className={imageSrc ? "" : "mx-auto"}>
              <div className="corp-about-content">
                <span className="corp-label" style={{ display: "inline-flex" }}>
                  {loading ? "…" : smallTitle}
                </span>
                <h2 className="corp-about-title">
                  {loading ? "…" : bigTitle}
                </h2>
                <hr className="corp-gold-line corp-gold-line-left" />
                <p className="corp-about-intro">
                  {loading ? "…" : intro}
                </p>

                {features.length > 0 && (
                  <div className="corp-about-features">
                    {features.map((f, i) => (
                      <div className="corp-about-feature" key={i}>
                        <div className="corp-about-feature-icon">{f.icon}</div>
                        <div>
                          <strong>{f.label}</strong>
                          <p>{f.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <a href="#contact" className="corp-btn corp-btn-navy" style={{ marginTop: 24 }}>
                  {isRTL ? "تعرف علينا أكثر" : "Learn More About Us"}
                </a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <StyleTag global css={`
        .corp-about-image {
          position: relative;
          z-index: 1;
        }
        .corp-about-image img {
          border-radius: var(--corp-radius-xl);
          box-shadow: var(--glass-shadow);
          position: relative;
          z-index: 2;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.5);
          transition: transform var(--corp-duration) var(--corp-ease-spring);
        }
        .corp-about-image:hover img {
          transform: translateY(-10px) scale(1.02);
        }
        .corp-about-accent {
          position: absolute;
          inset: -20px;
          background: var(--corp-accent-gradient);
          border-radius: var(--corp-radius-xl);
          opacity: 0.15;
          filter: blur(30px);
          z-index: 0;
          animation: pulseGlow 4s ease-in-out infinite alternate;
        }
        @keyframes pulseGlow {
          0% { opacity: 0.1; filter: blur(30px); }
          100% { opacity: 0.25; filter: blur(40px); }
        }
        .corp-about-exp-badge {
          position: absolute;
          bottom: -20px;
          ${isRTL ? "right" : "left"}: -20px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          padding: 24px;
          border-radius: var(--corp-radius-lg);
          box-shadow: var(--glass-shadow);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .corp-about-exp-badge strong {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1;
          background: var(--corp-accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .corp-about-exp-badge span {
          font-size: 0.95rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--corp-navy);
          margin-top: 4px;
          letter-spacing: 0.05em;
        }
        .corp-about-content {
          padding: 0 20px;
        }
        .corp-about-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-family: var(--font-heading);
          font-weight: 900;
          color: var(--corp-navy);
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .corp-gold-line-left {
          margin-left: ${isRTL ? "auto" : "0"};
          margin-right: ${isRTL ? "0" : "auto"};
        }
        .corp-about-intro {
          font-size: 1.15rem;
          color: var(--corp-text-secondary);
          line-height: 1.8;
          margin-bottom: 30px;
        }
        .corp-about-features {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 30px;
        }
        .corp-about-feature {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 20px;
          border-radius: var(--corp-radius-md);
          box-shadow: var(--corp-shadow-sm);
          transition: all var(--corp-duration) var(--corp-ease-spring);
        }
        .corp-about-feature:hover {
          transform: translateX(${isRTL ? "-8px" : "8px"});
          background: rgba(255, 255, 255, 0.8);
          border-color: rgba(59, 130, 246, 0.2);
        }
        .corp-about-feature-icon {
          font-size: 1.5rem;
          width: 48px;
          height: 48px;
          background: rgba(59, 130, 246, 0.1);
          color: var(--corp-accent);
          display: grid;
          place-items: center;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .corp-about-feature strong {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--corp-navy);
          display: block;
          margin-bottom: 6px;
        }
        .corp-about-feature p {
          margin: 0;
          font-size: 0.95rem;
          color: var(--corp-text-secondary);
          line-height: 1.6;
        }
        @media (max-width: 991px) {
          .corp-about-content { padding: 0; text-align: center; margin-top: 40px; }
          .corp-gold-line-left { margin: 20px auto; }
          .corp-about-feature { text-align: ${isRTL ? "right" : "left"}; }
          .corp-about-exp-badge { bottom: -20px; ${isRTL ? "right" : "left"}: 20px; }
        }
      `} />
    </Fragment>
  );
};

export default AboutUs;
