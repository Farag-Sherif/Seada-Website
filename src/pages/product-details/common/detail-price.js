// components/common/detail-price.jsx
import React, { useMemo, useState } from "react";
import Link from "@/router/NextLinkCompat";
import { Modal, ModalBody, ModalHeader, Media } from "reactstrap";
import sizeChart from "@/assets/images/size-chart.jpg";
import { useLanguage } from "../../../helpers/Language/useLanguage";
import StyleTag from "@/styles/StyleTag";

const DetailsWithPrice = ({ item, stickyClass = "", changeColorVar }) => {
  const { t, isRTL } = useLanguage();
  const [sizeModal, setSizeModal] = useState(false);
  const toggleSize = () => setSizeModal((v) => !v);

  // unique sizes/colors if variants exist
  const uniqueSize = useMemo(() => {
    const set = new Set();
    (item?.variants || []).forEach((v) => v?.size && set.add(v.size));
    return Array.from(set);
  }, [item]);

  const uniqueColor = useMemo(() => {
    const seen = new Map();
    (item?.variants || []).forEach((v) => {
      if (v?.color && !seen.has(v.color)) seen.set(v.color, v);
    });
    return Array.from(seen.values());
  }, [item]);

  return (
    <>
      <div className={`seada-luxury-details product-right ${stickyClass}`} dir={isRTL ? "rtl" : "ltr"}>
        <h2>{item?.title || ""}</h2>

        <div className="product-divider"></div>

        {/* sizes (only if variants have size) */}
        {(uniqueSize?.length ?? 0) > 0 && (
          <div className="luxury-variant-box">
            <div className="variant-header">
              <h6>{t?.("select_size") || (isRTL ? "اختر المقاس" : "Select Size")}</h6>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href={null} onClick={toggleSize} className="size-chart-link">
                <i className="fa fa-bar-chart" /> {t?.("size_chart") || (isRTL ? "دليل المقاسات" : "Size chart")}
              </a>
            </div>

            <Modal isOpen={sizeModal} toggle={toggleSize} centered className="luxury-modal">
              <ModalHeader toggle={toggleSize}>
                {t?.("size_chart") || (isRTL ? "دليل المقاسات" : "Size Chart")}
              </ModalHeader>
              <ModalBody>
                <Media src={sizeChart.src} alt="size" className="img-fluid" />
              </ModalBody>
            </Modal>

            <div className="size-box">
              <ul className="luxury-size-list">
                {uniqueSize.map((sz) => (
                  <li key={sz}>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href={null}>{sz}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* colors (if exist) */}
        {(uniqueColor?.length ?? 0) > 0 && (
          <div className="luxury-variant-box">
            <h6>{t?.("color") || (isRTL ? "اللون" : "Color")}</h6>
            <div className="color-variant luxury-color-list">
              {uniqueColor.map((c, i) => (
                <span
                  key={`${c.color}-${i}`}
                  onClick={() => typeof changeColorVar === "function" && changeColorVar(c?.image_id ?? i)}
                  style={{ background: c.color }}
                  className="color-dot"
                />
              ))}
            </div>
          </div>
        )}

        {/* actions */}
        <div className="luxury-actions mt-4">
          <Link
            href="/contact"
            className="btn-luxury-buy"
          >
            <i className="fa fa-envelope-o" /> {isRTL ? "طلب استفسار" : "Request a Quote"}
          </Link>
          
          <a
            href="#description-tab"
            className="btn-luxury-cart"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("description-tab")?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <i className="fa fa-file-text-o" /> {isRTL ? "التفاصيل الفنية" : "View Specifications"}
          </a>
        </div>

        {/* description snippet */}
        {item?.descriptionHtml && (
          <div className="luxury-description-box mt-4">
            <h6>{t?.("product_details") || (isRTL ? "نبذة عن المنتج" : "Overview")}</h6>
            <div 
               dangerouslySetInnerHTML={{ __html: item.descriptionHtml.length > 250 ? item.descriptionHtml.substring(0, 250) + '...' : item.descriptionHtml }} 
               className="desc-content" 
            />
          </div>
        )}
      </div>

      <StyleTag global css={`
        .seada-luxury-details {
          position: relative;
          z-index: 5;
          padding: 32px;
          background: var(--corp-white);
          border-radius: var(--corp-radius-xl);
          border: 1px solid var(--corp-gray-200);
          box-shadow: var(--corp-shadow-sm);
        }
        .seada-luxury-details h2 {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 2rem;
          color: var(--corp-navy);
          margin-bottom: 20px;
          line-height: 1.3;
        }
        .product-divider {
          height: 1px;
          background: var(--corp-gray-200);
          margin-bottom: 24px;
        }
        .luxury-variant-box {
          margin-bottom: 24px;
        }
        .luxury-variant-box h6 {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--corp-slate);
          margin-bottom: 12px;
          font-size: 1.05rem;
        }
        .variant-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .size-chart-link {
          font-size: 0.9rem;
          color: var(--corp-gold-dark) !important;
          font-weight: 600;
          cursor: pointer;
        }
        .luxury-size-list {
          display: flex;
          gap: 10px;
          padding: 0;
          list-style: none;
        }
        .luxury-size-list a {
          display: grid;
          place-items: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #fff;
          border: 1px solid var(--corp-gray-300);
          color: var(--corp-navy);
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none !important;
        }
        .luxury-size-list a:hover {
          background: var(--corp-gold);
          color: var(--corp-white);
          border-color: var(--corp-gold);
        }
        .luxury-color-list {
          display: flex;
          gap: 12px;
        }
        .color-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid #fff;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        .color-dot:hover {
          transform: scale(1.15);
        }
        .luxury-actions {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .btn-luxury-cart {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 24px;
          background: #fff;
          border: 2px solid var(--corp-navy);
          color: var(--corp-navy) !important;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 1.05rem;
          border-radius: var(--corp-radius-md);
          transition: all 0.3s ease;
          text-decoration: none !important;
          cursor: pointer;
        }
        .btn-luxury-cart:hover {
          background: var(--corp-gray-50);
          transform: translateY(-2px);
          box-shadow: var(--corp-shadow-md);
        }
        .btn-luxury-buy {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 24px;
          background: linear-gradient(135deg, var(--corp-gold) 0%, var(--corp-gold-light) 100%);
          border: none;
          color: var(--corp-navy) !important;
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 1.05rem;
          border-radius: var(--corp-radius-md);
          transition: all 0.3s ease;
          text-decoration: none !important;
          box-shadow: var(--corp-shadow-gold);
          cursor: pointer;
        }
        .btn-luxury-buy:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(200, 163, 95, 0.35);
          filter: brightness(1.05);
        }
        .luxury-description-box {
          background: var(--corp-gray-50);
          padding: 24px;
          border-radius: var(--corp-radius-md);
          border: 1px solid var(--corp-gray-200);
        }
        .luxury-description-box h6 {
          font-family: var(--font-heading);
          font-weight: 800;
          color: var(--corp-navy);
          margin-bottom: 12px;
          font-size: 1.1rem;
        }
        .desc-content {
          color: var(--corp-text-secondary);
          line-height: 1.7;
          font-size: 0.95rem;
        }
        @media (max-width: 768px) {
          .seada-luxury-details {
            padding: 24px 16px;
          }
        }
        /* Avoid any zoom overlay covering the details */
        .zoomImg,
        .image-zoom__lens,
        .image-zoom__overlay {
          z-index: 2 !important;
        }
      `} />
    </>
  );
};

export default DetailsWithPrice;
