// components/products/productCard.js
import React, { useState } from "react";
import Link from "@/router/NextLinkCompat";
import { Modal, ModalBody, Row, Col } from "reactstrap";
import StyleTag from "@/styles/StyleTag";
import { useLanguage } from "../../helpers/Language/useLanguage";

const ProductCardUnified = ({ product, isRTL, className = "" }) => {
  const { t } = useLanguage();
  const [modalOpen, setModalOpen] = useState(false);

  if (!product) return null;

  // Use absolute URL from adapted product
  const imgUrl = product.images[0].src || "";
  console.log("imgUrl", product);
  const title = product.title || "";
  const href = `/product-details/${product.id}`;

  const toggleModal = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setModalOpen(!modalOpen);
  };

  const labels = {
    viewDetails: t("view_details") || (isRTL ? "عرض التفاصيل" : "View Details"),
    requestInfo: t("request_info") || (isRTL ? "طلب استفسار" : "Request Info"),
    quickView: t("quick_view") || (isRTL ? "نظرة سريعة" : "Quick View"),
    catalog: t("catalog") || (isRTL ? "الكتالوج" : "Catalog"),
  };

  return (
    <div className={`corp-product-wrap ${className}`} dir={isRTL ? "rtl" : "ltr"}>
      <div className="corp-product-card glass-card">
        {/* Top Image Section */}
        <div className="corp-product-img-wrap">
          <Link href={href} className="corp-product-img-link">
            <img src={imgUrl} alt={title} className="img-fluid blur-up lazyload" />
          </Link>

          {/* Quick View Floating Button */}
          <button 
            className="corp-product-quick-btn" 
            onClick={toggleModal}
            title={labels.quickView}
          >
            <i className="fa fa-eye"></i>
          </button>
        </div>

        {/* Content Section */}
        <div className="corp-product-info">
          <div className="corp-product-badge">{labels.catalog}</div>
          <Link href={href} className="corp-product-title-link">
            <h4 className="corp-product-title">{title}</h4>
          </Link>
          
          <div className="corp-product-actions">
            <Link href={href} className="corp-btn corp-btn-navy corp-btn-sm w-100">
              {labels.viewDetails}
            </Link>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <Modal isOpen={modalOpen} toggle={toggleModal} centered size="lg" className="corp-quickview-modal">
        <ModalBody className="p-0">
          <button onClick={toggleModal} className="corp-modal-close">×</button>
          <Row className="g-0">
            <Col lg="6" md="6" className="modal-img-col">
              <img src={imgUrl} alt={title} className="img-fluid" />
            </Col>
            <Col lg="6" md="6" className="modal-content-col">
              <div className="modal-info-wrap">
                <h3>{title}</h3>
                <div className="modal-divider"></div>
                <p className="modal-desc">
                  {isRTL 
                    ? "استكشف هذا المنتج عالي الجودة المصمم لتلبية أعلى المعايير المهنية. اطلب معلومات لمعرفة المزيد."
                    : "Explore this premium quality product designed to meet the highest professional standards. Request information to learn more."}
                </p>
                <ul className="modal-features">
                  <li><i className="fa fa-check-circle"></i> {isRTL ? "جودة احترافية عالية" : "Premium Professional Quality"}</li>
                  <li><i className="fa fa-check-circle"></i> {isRTL ? "متاح لطلبات الجملة" : "Available for Bulk Orders"}</li>
                  <li><i className="fa fa-check-circle"></i> {isRTL ? "دعم فني مخصص" : "Dedicated Technical Support"}</li>
                </ul>
              </div>
              <div className="modal-actions-wrap">
                <Link href={href} className="corp-btn corp-btn-navy w-100 mb-2">{labels.viewDetails}</Link>
                <a href="/contact" className="corp-btn corp-btn-primary w-100">{labels.requestInfo}</a>
              </div>
            </Col>
          </Row>
        </ModalBody>
      </Modal>

      <StyleTag global css={`
        .corp-product-wrap { height: 100%; }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .corp-product-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: var(--corp-radius-xl);
          overflow: hidden;
          transition: all var(--corp-duration) var(--corp-ease-spring);
          position: relative;
        }

        .corp-product-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--corp-shadow-lg);
          background: rgba(255, 255, 255, 0.9);
        }

        .corp-product-img-wrap {
          position: relative;
          aspect-ratio: 4 / 3;
          background: var(--corp-white);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: var(--corp-radius-xl) var(--corp-radius-xl) 0 0;
        }

        .corp-product-img-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .corp-product-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 24px;
          transition: transform var(--corp-duration) var(--corp-ease);
        }

        .corp-product-card:hover .corp-product-img-wrap img {
          transform: scale(1.1);
        }

        .corp-product-quick-btn {
          position: absolute;
          bottom: 16px;
          ${isRTL ? "left" : "right"}: 16px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          color: var(--corp-navy);
          box-shadow: var(--corp-shadow-md);
          z-index: 2;
          display: grid;
          place-items: center;
          opacity: 0;
          transform: translateY(12px);
          transition: all var(--corp-duration) var(--corp-ease-spring);
          cursor: pointer;
          font-size: 1.1rem;
        }

        .corp-product-card:hover .corp-product-quick-btn {
          opacity: 1;
          transform: translateY(0);
        }

        .corp-product-quick-btn:hover {
          background: var(--corp-accent-gradient);
          color: var(--corp-white);
        }

        .corp-product-info {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .corp-product-badge {
          align-self: flex-start;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--corp-accent);
          background: rgba(59, 130, 246, 0.1);
          padding: 4px 10px;
          border-radius: var(--corp-radius-sm);
        }

        .corp-product-title-link {
          text-decoration: none !important;
          flex: 1;
        }

        .corp-product-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--corp-navy);
          line-height: 1.4;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.3s ease;
        }

        .corp-product-card:hover .corp-product-title {
          color: var(--corp-accent);
        }

        .corp-product-actions {
          margin-top: auto;
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }

        .corp-product-card:hover .corp-product-actions {
          opacity: 1;
        }

        /* Modal Styles */
        .corp-quickview-modal .modal-content {
          border-radius: var(--corp-radius-xl);
          overflow: hidden;
          border: none;
          box-shadow: var(--corp-shadow-xl);
        }

        .corp-modal-close {
          position: absolute;
          top: 16px;
          ${isRTL ? "left" : "right"}: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--corp-white);
          border: 1px solid var(--corp-gray-200);
          color: var(--corp-navy);
          font-size: 1.5rem;
          line-height: 1;
          display: grid;
          place-items: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .corp-modal-close:hover {
          background: #ef4444;
          color: #fff;
          border-color: #ef4444;
        }

        .modal-img-col {
          background: var(--corp-gray-50);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }

        .modal-img-col img {
          width: 100%;
          height: auto;
          max-height: 400px;
          object-fit: contain;
        }

        .modal-content-col {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .modal-info-wrap h3 {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--corp-navy);
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .modal-divider {
          width: 60px;
          height: 4px;
          background: var(--corp-accent-gradient);
          border-radius: 2px;
          margin-bottom: 24px;
        }

        .modal-desc {
          font-size: 1rem;
          color: var(--corp-text-secondary);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .modal-features {
          list-style: none;
          padding: 0;
          margin: 0 0 32px 0;
        }

        .modal-features li {
          font-size: 0.95rem;
          color: var(--corp-navy);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
        }

        .modal-features li i {
          color: var(--corp-accent);
          font-size: 1.1rem;
        }

        .modal-actions-wrap {
          margin-top: auto;
        }
      `} />
    </div>
  );
};

export default ProductCardUnified;
