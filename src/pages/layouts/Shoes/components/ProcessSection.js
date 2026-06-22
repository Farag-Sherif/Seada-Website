import React from "react";
import { Container } from "reactstrap";
import { useLanguage } from "../../../../helpers/Language/useLanguage";
import StyleTag from "@/styles/StyleTag";

const steps = (t) => [
  {
    num: "01",
    icon: "/assets/icon/SHA-01.png",
    title: t("process.step1.title"),
    desc: t("process.step1.desc"),
  },
  {
    num: "02",
    icon: "/assets/icon/SHA-03.png",
    title: t("process.step2.title"),
    desc: t("process.step2.desc"),
  },
  {
    num: "03",
    icon: "/assets/icon/SHA-05.png",
    title: t("process.step3.title"),
    desc: t("process.step3.desc"),
  },
  {
    num: "04",
    icon: "/assets/icon/SHA-04.png",
    title: t("process.step4.title"),
    desc: t("process.step4.desc"),
  },
];

const ProcessSection = () => {
  const { t, isRTL } = useLanguage();
  const data = steps(t);

  return (
    <section className="corp-section process-section-modern" id="process" dir={isRTL ? "rtl" : "ltr"}>
      <Container>
        <div className="corp-section-header">
          <span className="corp-label">
            {t("process.sub_title")}
          </span>
          <h2>{t("process.title")}</h2>
          <div className="corp-gold-line" style={{ background: "var(--corp-accent-gradient)" }} />
          <p className="process-subtitle" style={{
            fontStyle: "italic",
            fontSize: "1.1rem",
            color: "var(--corp-text-secondary)",
            marginTop: "10px",
            marginBottom: "0"
          }}>
            {t("process.subtitle_desc")}
          </p>
        </div>

        <div className="process-timeline-modern">
          {data.map((step, idx) => {
            const isHighlight = idx === 1;
            return (
              <div
                className={`process-card-modern ${isHighlight ? "highlight-card" : ""}`}
                key={idx}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="process-card-inner">
                  <div className="process-card-front">
                    <div className="process-step-num-modern">{step.num}</div>
                    <div className="process-step-icon-modern">
                      <img className="process-icon-img" src={step.icon} alt={step.title} />
                    </div>
                    <h4 className="process-step-title-modern">{step.title}</h4>
                    {isHighlight && (
                      <span className="process-card-badge">
                        {isRTL ? "هويتنا" : "OUR IDENTITY"}
                      </span>
                    )}
                  </div>
                  <div className="process-card-back">
                    <p className="process-step-desc-modern">{step.desc}</p>
                    {isHighlight && (
                      <span className="process-card-badge-back">
                        {isRTL ? "هويتنا" : "OUR IDENTITY"}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>

      <StyleTag global css={`
        .process-section-modern {
          background: var(--corp-bg-alt);
          position: relative;
          z-index: 1;
          padding-bottom: 60px;
        }
        .process-subtitle {
          max-width: 600px;
          margin: 0 auto;
          color: var(--corp-text-secondary);
        }
        .process-timeline-modern {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          perspective: 1000px;
          padding-top: 20px;
        }
        .process-card-modern {
          width: 240px;
          height: 300px;
          perspective: 1000px;
          cursor: pointer;
        }
        .process-card-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.3s ease;
          transform-style: preserve-3d;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
          border-radius: var(--corp-radius-xl);
        }
        .process-card-modern:hover .process-card-inner {
          transform: rotateY(180deg) translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }
        .process-card-front, .process-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: var(--corp-radius-xl);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          text-align: center;
          transition: background 0.3s ease;
        }
        .process-card-front {
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.04);
        }
        .process-card-back {
          background: linear-gradient(135deg, var(--corp-navy) 0%, #0F3D26 100%);
          color: var(--corp-white);
          transform: rotateY(180deg);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .process-step-num-modern {
          font-family: var(--font-heading);
          font-size: 4rem;
          font-weight: 900;
          color: rgba(15, 23, 42, 0.03);
          position: absolute;
          top: -5px;
          right: 15px;
          transition: color 0.3s ease;
        }
        .process-step-icon-modern {
          width: 80px;
          height: 80px;
          background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
          border-radius: 50%;
          display: grid;
          place-items: center;
          margin-bottom: 24px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          border: 1px solid rgba(0, 0, 0, 0.03);
          position: relative;
          z-index: 2;
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .process-icon-img {
          width: 42px;
          height: 42px;
          object-fit: contain;
          transition: filter 0.3s ease, transform 0.4s ease;
        }
        .process-card-modern:hover .process-step-icon-modern {
          transform: scale(1.15) translateY(-5px);
          box-shadow: 0 12px 25px rgba(200, 163, 95, 0.25);
          border-color: rgba(200, 163, 95, 0.3);
        }
        .process-card-modern:hover .process-icon-img {
          transform: scale(1.05);
        }
        .process-step-title-modern {
          font-size: 1.3rem;
          font-weight: 800;
          color: var(--corp-navy);
          position: relative;
          z-index: 2;
          margin-top: 5px;
        }
        .process-step-desc-modern {
          font-size: 1.05rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.95);
          font-weight: 500;
        }

        /* Card 2 Highlight Styles (Dark Green Theme) */
        .process-card-modern.highlight-card .process-card-front {
          background: linear-gradient(135deg, #0F3D26 0%, #165c3a 100%) !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
        }
        .process-card-modern.highlight-card .process-card-back {
          background: linear-gradient(135deg, #0a291a 0%, #0F3D26 100%) !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
        }
        .process-card-modern.highlight-card .process-step-num-modern {
          color: rgba(255, 255, 255, 0.05) !important;
        }
        .process-card-modern.highlight-card .process-step-title-modern {
          color: #FFF !important;
        }
        .process-card-modern.highlight-card .process-step-desc-modern {
          color: rgba(255, 255, 255, 0.95) !important;
        }
        .process-card-modern.highlight-card .process-step-icon-modern {
          background: rgba(255, 255, 255, 0.1) !important;
          border: 1px solid rgba(255, 255, 255, 0.2) !important;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15) !important;
        }
        /* Make the dark green icon white when inside the highlight card so it's visible */
        .process-card-modern.highlight-card .process-icon-img {
          filter: brightness(0) invert(1);
        }
        .process-card-modern.highlight-card:hover .process-step-icon-modern {
          box-shadow: 0 12px 30px rgba(255, 255, 255, 0.2) !important;
          border-color: rgba(255, 255, 255, 0.4) !important;
        }
        
        .process-card-badge, .process-card-badge-back {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          font-weight: 800;
          color: #C8A35F;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-top: 15px;
          display: inline-block;
          text-align: center;
          background: rgba(200, 163, 95, 0.1);
          padding: 4px 12px;
          border-radius: 20px;
          border: 1px solid rgba(200, 163, 95, 0.2);
        }
        .process-card-badge-back {
          margin-top: 20px;
          position: absolute;
          bottom: 25px;
        }
      `} />
    </section>
  );
};

export default ProcessSection;
