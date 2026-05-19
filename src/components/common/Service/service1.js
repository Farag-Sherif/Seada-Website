// components/home/ServiceLayout.jsx
import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import MasterServiceContent from "./MasterServiceConternt";
import { useLanguage } from "../../../helpers/Language/useLanguage";
import { getChoices } from "../../../actions/main";

import { svgFreeShipping, svgservice, svgoffer } from "../../../services/script";

import StyleTag from "@/styles/StyleTag";
/* --- legacy fallback if API returns nothing --- */
const legacy = (t) => [
  { link: svgFreeShipping, title: t("free_shipping"), service: t("free_shipping_worldwide") },
  { link: svgservice,      title: t("24x7_service"),   service: t("online_service_24x7") },
  { link: svgoffer,        title: t("festival_offer"), service: t("new_online_special_festival_offer") },
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

/** Safe icon renderer that accepts: URL string | JSX node | null */
const Icon = ({ src, alt }) => {
  if (React.isValidElement(src)) {
    return <span className="svc-icon-wrap">{src}</span>;
  }
  if (typeof src === "string" && src.trim()) {
    return (
      <span className="svc-icon-wrap">
        <img
          src={src}
          alt={alt || ""}
          width={56}
          height={56}
          loading="lazy"
          style={{ objectFit: "contain", display: "block" }}
        />
      </span>
    );
  }
  return <span className="svc-icon-wrap svc-fallback" aria-hidden="true">★</span>;
};

const ServiceSkeleton = () => (
  <div className="svc-card svc-skeleton">
    <div className="svc-icon-wrap" />
    <div className="svc-text">
      <div className="svc-line svc-line-lg" />
      <div className="svc-line" />
    </div>
  </div>
);

const ServiceItem = ({ icon, title, description }) => (
  <div className="svc-card">
    <Icon src={icon} alt={title} />
    <div className="svc-text">
      <h4 className="svc-title">{title}</h4>
      <p className="svc-desc">{description}</p>
    </div>
  </div>
);

const ServiceLayout = ({ sectionClass = "" }) => {
  const { t, isRTL, currentLanguage } = useLanguage();
  const [choices, setChoices] = useState(null); // null = not loaded yet
  const [error, setError] = useState(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const data = await getChoices();
        if (!alive) return;
        setChoices(Array.isArray(data) ? data : []);
      } catch (e) {
        if (!alive) return;
        setError(e?.message || "Failed to load choices");
        setChoices([]);
      }
    })();
    return () => { alive = false; };
  }, []);

  const isLoading = choices === null;

  const serviceData = useMemo(() => {
    if (Array.isArray(choices) && choices.length) {
      return choices.map((c) => {
        const { title, description } = pickTranslation(c, currentLanguage);
        const icon = c.icon_path ?? c.icon ?? null;
        return { id: c.id ?? `${title}-${Math.random()}`, icon, title, description };
      });
    }
    // fallback (while loading or empty/error)
    return legacy(t).map((it, i) => ({
      id: `legacy-${i}`,
      icon: it.link,
      title: it.title,
      description: it.service,
    }));
  }, [choices, currentLanguage, t]);

  return (
    <Container className={"section-b-space section-t-space"}>
      <section
        className={`service-section  ${sectionClass}`}
        style={{ direction: isRTL ? "rtl" : "ltr" }}
      >
        <Row className="gx-4 gy-4">
          {isLoading
            ? Array.from({ length: 3 }).map((_, i) => (
                <Col md="4" sm="6" xs="12" key={`skeleton-${i}`}>
                  <ServiceSkeleton />
                </Col>
              ))
            : serviceData.map((data) => (
                <Col md="4" sm="6" xs="12" key={data.id}>
                  {/* MasterServiceContent remains for compatibility, but now wrapped in a styled card */}
                  <div className="svc-card">
                    <Icon src={data.icon} alt={data.title} />
                    <div className="svc-text">
                      <MasterServiceContent
                        link={null}
                        title={<span className="svc-title">{data.title}</span>}
                        service={<span className="svc-desc">{data.description}</span>}
                      />
                    </div>
                  </div>
                </Col>
              ))}
        </Row>

        {error && import.meta.env.MODE !== "production" && (
          <div style={{ color: "#b91c1c", marginTop: 8, fontSize: 12 }}>{error}</div>
        )}
      </section>

      <StyleTag global css={`
        /* Layout container */
        .service-section {
          padding-block: 40px;
          position: relative;
        }

        /* Corporate Card */
        .svc-card {
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 20px;
          align-items: center;
          padding: 24px 20px;
          border: 1px solid var(--corp-gray-200, #E9ECEF);
          border-radius: var(--corp-radius-xl, 24px);
          background: var(--corp-white, #fff);
          min-height: 120px;
          box-shadow: var(--corp-shadow-sm, 0 2px 8px rgba(0,0,0,0.06));
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          overflow: hidden;
        }
        .svc-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 3px;
          background: linear-gradient(90deg, var(--corp-gold, #C8A35F), var(--corp-gold-light, #D4B876));
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .svc-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--corp-shadow-lg, 0 16px 48px rgba(0,0,0,0.12));
          border-color: var(--corp-gold, #C8A35F);
        }
        .svc-card:hover::before {
          opacity: 1;
        }

        /* Icon Wrapper */
        .svc-icon-wrap {
          width: 64px;
          height: 64px;
          min-width: 64px;
          display: grid;
          place-items: center;
          background: var(--corp-gold-glow, rgba(200,163,95,0.15));
          border-radius: 20px;
          color: var(--corp-gold-dark, #B8923E);
          font-size: 24px;
          transition: all 0.4s ease;
        }
        .svc-card:hover .svc-icon-wrap {
          transform: scale(1.1) rotate(5deg);
          background: linear-gradient(135deg, var(--corp-gold, #C8A35F), var(--corp-gold-light, #D4B876));
          color: var(--corp-navy, #0F1B2D);
        }
        .svc-icon-wrap img {
          display: block;
          width: 36px;
          height: 36px;
          object-fit: contain;
          transition: filter 0.4s ease;
        }
        .svc-card:hover .svc-icon-wrap img {
          filter: brightness(0);
        }

        /* Text */
        .svc-text {
          display: grid;
          align-content: center;
          gap: 6px;
          position: relative;
          z-index: 2;
        }
        .svc-title {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: 1.15rem;
          font-weight: 800;
          line-height: 1.2;
          margin: 0;
          color: var(--corp-navy, #0F1B2D);
        }
        .svc-desc {
          margin: 0;
          color: var(--corp-text-secondary, #64748B);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        /* Skeletons */
        .svc-skeleton {
          pointer-events: none;
          border-color: var(--corp-gray-200);
        }
        .svc-skeleton .svc-icon-wrap,
        .svc-line {
          background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 37%, #f3f4f6 63%);
          background-size: 400% 100%;
          animation: svc-shimmer 1.2s ease-in-out infinite;
        }
        .svc-line {
          height: 12px;
          border-radius: 8px;
          width: 100%;
        }
        .svc-line + .svc-line {
          margin-top: 8px;
          width: 80%;
        }
        .svc-line-lg {
          height: 14px;
          width: 60%;
        }
        @keyframes svc-shimmer {
          0% { background-position: 100% 50%; }
          100% { background-position: 0 50%; }
        }

        /* Responsive tweaks */
        @media (max-width: 767px) {
          .svc-card {
            grid-template-columns: 56px 1fr;
            gap: 16px;
            padding: 20px 16px;
            min-height: 100px;
          }
          .svc-icon-wrap {
            width: 56px;
            height: 56px;
            min-width: 56px;
            border-radius: 16px;
          }
          .svc-icon-wrap img {
            width: 32px;
            height: 32px;
          }
          .svc-title {
            font-size: 1.05rem;
          }
          .svc-desc {
            font-size: 0.9rem;
          }
        }
      `} />
    </Container>
  );
};

export default ServiceLayout;
