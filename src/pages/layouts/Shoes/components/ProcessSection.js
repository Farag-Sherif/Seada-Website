import React from "react";
import { Container } from "reactstrap";
import { useLanguage } from "../../../../helpers/Language/useLanguage";
import StyleTag from "@/styles/StyleTag";

const steps = (isRTL) => [
  {
    num: "01",
    icon: "📋",
    title: isRTL ? "الاستفسار" : "Inquiry",
    desc: isRTL
      ? "تواصل معنا لمناقشة متطلباتك واحتياجاتك."
      : "Reach out to us to discuss your requirements and needs.",
  },
  {
    num: "02",
    icon: "💬",
    title: isRTL ? "الاستشارة" : "Consultation",
    desc: isRTL
      ? "فريقنا المختص يقدم لك الحلول والتوصيات المناسبة."
      : "Our expert team provides tailored solutions and recommendations.",
  },
  {
    num: "03",
    icon: "🏭",
    title: isRTL ? "الإنتاج" : "Production",
    desc: isRTL
      ? "تصنيع منتجاتك وفق أعلى معايير الجودة والدقة."
      : "Manufacturing your products with the highest quality and precision.",
  },
  {
    num: "04",
    icon: "🔍",
    title: isRTL ? "فحص الجودة" : "Quality Check",
    desc: isRTL
      ? "فحوصات صارمة لضمان مطابقة المنتج للمواصفات."
      : "Rigorous inspections to ensure products meet all specifications.",
  },
  {
    num: "05",
    icon: "🚚",
    title: isRTL ? "التوصيل" : "Delivery",
    desc: isRTL
      ? "شحن آمن وسريع إلى وجهتك في أي مكان بالعالم."
      : "Safe and fast shipping to your destination anywhere in the world.",
  },
];

const ProcessSection = () => {
  const { isRTL } = useLanguage();
  const data = steps(isRTL);

  return (
    <section className="corp-section process-section-modern" id="process" dir={isRTL ? "rtl" : "ltr"}>
      <Container>
        <div className="corp-section-header">
          <span className="corp-label">
            {isRTL ? "آلية العمل" : "Our Process"}
          </span>
          <h2>{isRTL ? "كيف نعمل" : "How We Work"}</h2>
          <div className="corp-gold-line" style={{ background: "var(--corp-accent-gradient)" }} />
          <p className="process-subtitle">
            {isRTL
              ? "نتبع منهجية واضحة ومنظمة لضمان تقديم أفضل النتائج لعملائنا عبر خمس خطوات استراتيجية."
              : "We follow a clear and organized methodology to deliver the best results for our clients through five strategic steps."}
          </p>
        </div>

        <div className="process-timeline-modern">
          {data.map((step, idx) => (
            <div
              className="process-card-modern"
              key={idx}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="process-card-inner">
                <div className="process-card-front">
                  <div className="process-step-num-modern">{step.num}</div>
                  <div className="process-step-icon-modern">{step.icon}</div>
                  <h4 className="process-step-title-modern">{step.title}</h4>
                </div>
                <div className="process-card-back">
                  <p className="process-step-desc-modern">{step.desc}</p>
                </div>
              </div>
            </div>
          ))}
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
      `} />
    </section>
  );
};

export default ProcessSection;
