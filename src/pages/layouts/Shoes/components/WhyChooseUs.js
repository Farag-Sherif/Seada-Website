import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { useLanguage } from "../../../../helpers/Language/useLanguage";
import { getChoices } from "../../../../actions/main";
import StyleTag from "@/styles/StyleTag";

const defaultAdvantages = (isRTL) => [
  {
    icon: "🏭",
    title: isRTL ? "تصنيع عالي الجودة" : "Premium Manufacturing",
    desc: isRTL
      ? "مرافق إنتاج حديثة تضمن أعلى معايير الجودة في كل منتج."
      : "State-of-the-art production facilities ensuring the highest quality standards in every product.",
  },
  {
    icon: "🌍",
    title: isRTL ? "خبرة في التصدير" : "Global Export Experience",
    desc: isRTL
      ? "سنوات من الخبرة في الشحن والتصدير إلى أسواق عالمية متعددة."
      : "Years of experience in shipping and exporting to multiple international markets.",
  },
  {
    icon: "✅",
    title: isRTL ? "ضمان الجودة" : "Quality Assurance",
    desc: isRTL
      ? "فحوصات جودة صارمة في كل مرحلة من مراحل الإنتاج."
      : "Rigorous quality checks at every stage of the production process.",
  },
  {
    icon: "🤝",
    title: isRTL ? "شراكة موثوقة" : "Trusted Partnership",
    desc: isRTL
      ? "بناء علاقات طويلة الأمد مع عملائنا من خلال الشفافية والموثوقية."
      : "Building long-term relationships with our clients through transparency and reliability.",
  },
  {
    icon: "📦",
    title: isRTL ? "حلول مخصصة" : "Customized Solutions",
    desc: isRTL
      ? "نقدم حلول تغليف ومنتجات مخصصة تلبي احتياجات عملائنا."
      : "We offer customized packaging and product solutions tailored to your business needs.",
  },
  {
    icon: "⚡",
    title: isRTL ? "تسليم سريع" : "Fast Turnaround",
    desc: isRTL
      ? "عمليات مبسطة تضمن التسليم في الوقت المحدد في كل مرة."
      : "Streamlined operations ensuring on-time delivery, every time.",
  },
];

const pickTranslation = (choice, locale) => {
  const list = choice?.translations || [];
  const tr =
    list.find((x) => x.locale === locale) ||
    list.find((x) => x.locale === "en") ||
    {};
  return {
    title: tr.title || choice.title || "",
    description: tr.description || choice.description || "",
  };
};

const WhyChooseUs = () => {
  const { isRTL, currentLanguage } = useLanguage();
  const [choices, setChoices] = useState(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await getChoices();
        if (alive) setChoices(Array.isArray(data) ? data : []);
      } catch {
        if (alive) setChoices([]);
      }
    })();
    return () => { alive = false; };
  }, []);

  const items = useMemo(() => {
    if (Array.isArray(choices) && choices.length) {
      return choices.map((c) => {
        const { title, description } = pickTranslation(c, currentLanguage);
        const icon = c.icon_path ?? c.icon ?? "⭐";
        return { id: c.id, icon, title, description };
      });
    }
    return defaultAdvantages(isRTL).map((a, i) => ({
      id: `adv-${i}`,
      icon: a.icon,
      title: a.title,
      description: a.desc,
    }));
  }, [choices, currentLanguage, isRTL]);

  return (
    <section className="corp-section corp-section-alt" id="why-us" dir={isRTL ? "rtl" : "ltr"}>
      <Container>
        <div className="corp-section-header">
          <span className="corp-label">
            {isRTL ? "لماذا نحن" : "Why Choose Us"}
          </span>
          <h2>{isRTL ? "ما يميزنا عن غيرنا" : "What Sets Us Apart"}</h2>
          <hr className="corp-gold-line" />
          <p>
            {isRTL
              ? "نلتزم بأعلى معايير الجودة والاحترافية لضمان رضا عملائنا في كل مرة."
              : "We are committed to the highest standards of quality and professionalism to ensure our clients' satisfaction every time."}
          </p>
        </div>

        <Row className="g-4">
          {items.map((item, idx) => (
            <Col lg="4" md="6" key={item.id}>
              <div
                className="why-card corp-card"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="why-card-icon">
                  {typeof item.icon === "string" && (item.icon.startsWith("http") || item.icon.startsWith("/")) ? (
                    <img src={item.icon} alt="" width={40} height={40} style={{ objectFit: "contain" }} />
                  ) : (
                    <span>{item.icon || "⭐"}</span>
                  )}
                </div>
                <h4 className="why-card-title">{item.title}</h4>
                <p className="why-card-desc">{item.description}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <StyleTag global css={`
        .why-card {
          text-align: center;
          padding: 40px 28px;
        }
        .why-card-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 24px;
          display: grid;
          place-items: center;
          border-radius: 20px;
          background: linear-gradient(135deg, var(--corp-gold-glow) 0%, rgba(200, 163, 95, 0.08) 100%);
          font-size: 36px;
          transition: all var(--corp-duration) var(--corp-ease);
        }
        .why-card:hover .why-card-icon {
          transform: scale(1.1) rotate(5deg);
          background: linear-gradient(135deg, var(--corp-gold) 0%, var(--corp-gold-light) 100%);
        }
        .why-card:hover .why-card-icon img {
          filter: brightness(0) invert(1);
        }
        .why-card-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--corp-navy);
          margin-bottom: 12px;
        }
        .why-card-desc {
          font-size: 0.95rem;
          color: var(--corp-text-secondary);
          line-height: 1.7;
          margin: 0;
        }
      `} />
    </section>
  );
};

export default WhyChooseUs;
