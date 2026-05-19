// components/product-details/common/product-tab.jsx
import React from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";
import { useLanguage } from "../../../helpers/Language/useLanguage";

import StyleTag from "@/styles/StyleTag";
const ProductTab = ({
  descriptionHtml = "",
  details = {},
  showVideo = false,
  showReview = false,
  /** اختياري: تمرير تسميات من الخارج
   * {
   *   tabs: { details, description, video, review },
   *   fields: { serial, stock, weight, category }
   * }
   */
  labels,
}) => {
  const { t, isRTL } = useLanguage();

  // i18n helper
  const L = (key, fallback) => {
    try {
      const v = t?.(key);
      return v && v !== key ? v : fallback;
    } catch {
      return fallback;
    }
  };

  // --- Labels (merge props.labels -> i18n -> fallback) ---
  const labelsSafe = {
    tabs: {
      details:
        labels?.tabs?.details ??
        L("product.tabs.details", isRTL ? "التفاصيل" : "Details"),
      description:
        labels?.tabs?.description ??
        L("product.tabs.description", isRTL ? "الوصف" : "Description"),
      video:
        labels?.tabs?.video ??
        L("product.tabs.video", isRTL ? "فيديو" : "Video"),
      review:
        labels?.tabs?.review ??
        L("product.tabs.review", isRTL ? "اكتب مراجعة" : "Write Review"),
    },
    fields: {
      serial:
        labels?.fields?.serial ??
        L("product.details.serial", isRTL ? "الرقم التسلسلي" : "Serial"),
      stock:
        labels?.fields?.stock ??
        L("product.details.stock", isRTL ? "رقم المخزون" : "Stock #"),
      weight:
        labels?.fields?.weight ??
        L("product.details.weight", isRTL ? "الوزن" : "Weight"),
      category:
        labels?.fields?.category ??
        L("product.details.category", isRTL ? "القسم" : "Category"),
    },
  };

  // Tabs (dynamic)
  const hasDetails = Object.values(details || {}).some(Boolean);

  const tabs = [
    ...(showReview ? [{ key: "review", label: labelsSafe.tabs.review }] : []),
    ...(showVideo ? [{ key: "video", label: labelsSafe.tabs.video }] : []),
    ...(hasDetails ? [{ key: "details", label: labelsSafe.tabs.details }] : []),
    { key: "description", label: labelsSafe.tabs.description },
  ];

  const [active, setActive] = React.useState(tabs[0]?.key || "description");

  // Ordered fields mapping
  const fieldOrder = [
    ["serial_number", labelsSafe.fields.serial],
    ["stock_number", labelsSafe.fields.stock],
    ["weight", labelsSafe.fields.weight],
    ["category", labelsSafe.fields.category],
  ];

  return (
    <div className="product-tab mt-5" dir={isRTL ? "rtl" : "ltr"}>
      {/* Tabs header */}
      <Nav tabs className="justify-content-end justify-content-lg-start px-3 px-lg-0">
        {tabs.map((tItem) => (
          <NavItem key={tItem.key}>
            <NavLink
              className={classnames({ active: active === tItem.key })}
              onClick={() => setActive(tItem.key)}
              role="button"
            >
              {tItem.label}
            </NavLink>
          </NavItem>
        ))}
      </Nav>

      {/* Tabs content */}
      <TabContent activeTab={active} className="pt-4 px-3 px-lg-0">
        {showReview && (
          <TabPane tabId="review">
            {/* ضع ويدجت المراجعات هنا */}
            <div />
          </TabPane>
        )}

        {showVideo && (
          <TabPane tabId="video">
            {/* ضع مشغل الفيديو هنا عند توفر الرابط من الـ API */}
            <div />
          </TabPane>
        )}

        {hasDetails && (
          <TabPane tabId="details">
            <ul className="prod-details">
              {fieldOrder.map(([key, label]) =>
                details?.[key] ? (
                  <li key={key}>
                    <strong>{label}</strong>
                    <span>{details[key]}</span>
                  </li>
                ) : null
              )}
            </ul>
          </TabPane>
        )}

        <TabPane tabId="description">
          <div
            className="prod-description"
            // HTML من الـ API
            dangerouslySetInnerHTML={{ __html: descriptionHtml }}
          />
        </TabPane>
      </TabContent>

      {/* Styles */}
      <StyleTag global css={`
        /* Tabs */
        .product-tab {
          background: #fff;
          border-radius: 24px;
          padding: 32px;
          border: 1px solid rgba(11, 107, 55, 0.05);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.02);
        }
        .product-tab .nav-tabs {
          border-bottom: 2px solid rgba(11, 107, 55, 0.08);
          gap: 32px;
        }
        .product-tab .nav-tabs .nav-link {
          border: 0 !important;
          background: transparent !important;
          color: #556259;
          font-weight: 800;
          letter-spacing: 0.2px;
          padding: 0 0 16px;
          position: relative;
          font-size: 1.125rem;
          line-height: 1.2;
          transition: color 0.3s ease;
        }
        .product-tab .nav-tabs .nav-link:hover {
          color: #159b53;
        }
        .product-tab .nav-tabs .nav-link.active {
          color: #0b6b37;
        }
        .product-tab .nav-tabs .nav-link.active::after {
          content: "";
          position: absolute;
          height: 4px;
          background: linear-gradient(90deg, #0b6b37 0%, #159b53 100%);
          width: 100%;
          left: 0;
          bottom: -2px; /* align with border-bottom */
          border-radius: 4px;
          box-shadow: 0 -2px 10px rgba(11, 107, 55, 0.2);
        }

        /* Content */
        .product-tab .tab-content {
          padding-top: 32px;
        }

        .prod-description,
        .prod-details {
          font-size: 1.05rem; /* ~17px */
        }
        .prod-description p,
        .prod-description li {
          line-height: 1.9;
          color: #556259;
          margin-bottom: 14px;
        }
        .prod-description ul {
          padding-inline-start: 24px;
          margin-top: 8px;
        }
        .prod-description p {
          font-size: 1.05rem;
        }

        /* Details list */
        .prod-details {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 16px;
        }
        .prod-details li {
          display: flex;
          gap: 16px;
          padding: 16px;
          background: #fdfdfd;
          border: 1px solid rgba(11, 107, 55, 0.05);
          border-radius: 14px;
          align-items: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .prod-details li:hover {
          transform: translateX(4px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
          border-color: rgba(11, 107, 55, 0.1);
        }
        .prod-details li strong {
          min-inline-size: 160px; /* يتوافق مع RTL */
          color: #1a231c;
          font-weight: 800;
          font-size: 1.1rem;
        }
        .prod-details li span {
          color: #556259;
          font-weight: 500;
        }
        [dir="rtl"] .prod-details li {
          flex-direction: row;
          text-align: right;
        }
        [dir="rtl"] .prod-details li strong {
          text-align: start;
        }
        [dir="rtl"] .prod-details li:hover {
          transform: translateX(-4px);
        }

        /* Larger on lg+ */
        @media (min-width: 992px) {
          .product-tab .nav-tabs .nav-link {
            font-size: 1.2rem;
          }
          .prod-description {
            font-size: 1.1rem; /* 18px */
          }
          .prod-details {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `} />
    </div>
  );
};

export default ProductTab;
