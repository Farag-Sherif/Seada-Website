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
                      <img src={step.icon} alt={step.title} style={{ width: '40px', height: '40px', objectFit: 'contain' }} />
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
        }
        .process-card-modern {
          width: 220px;
          height: 280px;
          perspective: 1000px;
          cursor: pointer;
        }
        .process-card-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
          box-shadow: var(--corp-shadow-md);
          border-radius: var(--corp-radius-lg);
        }
        .process-card-modern:hover .process-card-inner {
          transform: rotateY(180deg);
          box-shadow: var(--corp-shadow-glow);
        }
        .process-card-front, .process-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: var(--corp-radius-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
        }
        .process-card-front {
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
        }
        .process-card-back {
          background: var(--corp-navy);
          color: var(--corp-white);
          transform: rotateY(180deg);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .process-step-num-modern {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 900;
          color: rgba(15, 23, 42, 0.04);
          position: absolute;
          top: 10px;
          right: 20px;
        }
        .process-step-icon-modern {
          width: 70px;
          height: 70px;
          background: var(--corp-bg);
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 32px;
          margin-bottom: 24px;
          box-shadow: var(--corp-shadow-sm);
          border: 1px solid var(--corp-gray-200);
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }
        .process-card-modern:hover .process-step-icon-modern {
          transform: scale(1.1);
        }
        .process-step-title-modern {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--corp-navy);
          position: relative;
          z-index: 2;
        }
        .process-step-desc-modern {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        /* Card 2 Highlight Styles (Dark Green Theme) */
        .process-card-modern.highlight-card .process-card-front {
          background: #0F3D26 !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
        }
        .process-card-modern.highlight-card .process-card-back {
          background: #0F3D26 !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
        }
        .process-card-modern.highlight-card .process-step-num-modern {
          color: rgba(255, 255, 255, 0.08) !important;
        }
        .process-card-modern.highlight-card .process-step-title-modern {
          color: #FFF !important;
        }
        .process-card-modern.highlight-card .process-step-desc-modern {
          color: rgba(255, 255, 255, 0.95) !important;
        }
        .process-card-modern.highlight-card .process-step-icon-modern {
          background: rgba(255, 255, 255, 0.1) !important;
          border: 1px solid rgba(255, 255, 255, 0.25) !important;
          color: #FFF !important;
          box-shadow: none !important;
        }
        .process-card-badge, .process-card-badge-back {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 800;
          color: #C8A35F;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-top: 15px;
          display: block;
          text-align: center;
        }
        .process-card-badge-back {
          margin-top: 20px;
          position: absolute;
          bottom: 20px;
        }
      `} />
    </section>
  );
};

export default ProcessSection;
