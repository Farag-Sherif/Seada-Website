// pages/product-details/[id].js
import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import { useRouter } from "@/router/useRouter";
import CommonLayout from "../../components/shop/common-layout";
import ProductSection from "./common/product_section";
import ProductTab from "./common/product-tab";
import DetailsWithPrice from "./common/detail-price";
import { getProduct } from "../../actions/products";
import { useLanguage } from "../../helpers/Language/useLanguage";
import StyleTag from "@/styles/StyleTag";

/* -------- helpers -------- */
const unwrapItem = (res) =>
  res?.item || res?.data?.item || res?.data || res || null;
const unwrapRelated = (res) =>
  res?.related || res?.data?.related || [];

const absolutize = (url) => {
  if (!url) return "";
  if (/^https?:\/\//i.test(url)) return url;
  try {
    const base =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://newstore.test.do-go.net";
    return new URL(url, base).toString();
  } catch {
    return url;
  }
};

const adaptCardItem = (raw, isRTL) => {
  if (!raw) return null;
  const tr = Array.isArray(raw.translations)
    ? raw.translations.find((t) => t.locale === (isRTL ? "ar" : "en")) ||
      raw.translations.find((t) => t.locale === (isRTL ? "en" : "ar"))
    : null;
  const title = tr?.name || raw.name || "";
  const price = Number(raw.total ?? raw.price ?? 0);
  const discount = Number(raw.discount ?? 0);
  const images = [];
  if (raw.image_path) images.push({ alt: title, src: absolutize(raw.image_path) });
  if (Array.isArray(raw.media)) {
    raw.media.forEach((m) =>
      images.push({ alt: title, src: absolutize(m.image_path), id: m.id })
    );
  }
  return {
    id: raw.id, title, price, discount,
    is_available: !!raw.is_available, images,
    image: images[0]?.src || "", thumbnail: images[0]?.src || "", raw,
  };
};

const buildDisplayData = (raw, isRTL) => {
  if (!raw) return null;
  const tr = Array.isArray(raw.translations)
    ? raw.translations.find((t) => t.locale === (isRTL ? "ar" : "en")) ||
      raw.translations.find((t) => t.locale === (isRTL ? "en" : "ar"))
    : null;
  const title = tr?.name || raw.name || "";
  const descriptionHtml = tr?.description || raw.description || "";
  const images = [];
  if (raw.image_path) images.push(absolutize(raw.image_path));
  if (Array.isArray(raw.media)) {
    raw.media.forEach((m) => {
      const url = absolutize(m.image_path);
      if (url && !images.includes(url)) images.push(url);
    });
  }
  if (images.length === 0) images.push("");
  const details = {};
  if (raw.serial_number) details.serial_number = raw.serial_number;
  if (raw.sku) details.stock_number = raw.sku;
  if (raw.weight) details.weight = raw.weight + (raw.weight_unit || " g");
  const catName = raw.sub_category?.name || raw.category?.name || "";
  if (catName) details.category = catName;
  return {
    title, descriptionHtml, images, details,
    price: Number(raw.total ?? raw.price ?? 0),
    discount: Number(raw.discount ?? 0),
    is_available: !!raw.is_available,
    variants: raw.variants || [], raw,
  };
};

/* ============ Component ============ */
const ProductDetailsPage = () => {
  const router = useRouter();
  const idParam = router.query?.id;
  const { isRTL, t } = useLanguage();

  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    if (!idParam) return;
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const res = await getProduct(Number(idParam));
        if (!mounted) return;
        setProduct(unwrapItem(res));
        setRelated(unwrapRelated(res));
        setActiveImg(0);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } catch {
        if (mounted) { setProduct(null); setRelated([]); }
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [idParam]);

  const display = useMemo(() => buildDisplayData(product, isRTL), [product, isRTL]);

  const relatedCards = useMemo(() => {
    if (!Array.isArray(related)) return [];
    const cards = related.map((r) => adaptCardItem(r, isRTL)).filter(Boolean);
    const currentId = Number(idParam);
    return cards.filter((c) => c.id !== currentId);
  }, [related, isRTL, idParam]);

  const detailItem = useMemo(() => {
    if (!display) return null;
    return {
      title: display.title,
      descriptionHtml: display.descriptionHtml,
      variants: display.variants,
      price: display.price,
      discount: display.discount,
    };
  }, [display]);

  const tr = (key, fallback) => {
    try { const v = t?.(key); return v && v !== key ? v : fallback; }
    catch { return fallback; }
  };

  return (
    <CommonLayout parent="Home" title={tr("product", "Product")}>
      <section className="pdp-section" dir={isRTL ? "rtl" : "ltr"}>
        <Container>
          {loading ? (
            <div className="pdp-loading">
              <Spinner color="success" style={{ width: "3rem", height: "3rem" }} />
              <p>{isRTL ? "جارٍ تحميل المنتج..." : "Loading product..."}</p>
            </div>
          ) : !display ? (
            <div className="pdp-loading">
              <h3>{isRTL ? "المنتج غير موجود" : "Product not found"}</h3>
            </div>
          ) : (
            <>
              <Row className="g-4 g-lg-5">
                {/* ===== Image Gallery ===== */}
                <Col lg="6">
                  <div className="pdp-gallery">
                    <div className="pdp-main-img-wrapper">
                      <img
                        src={display.images[activeImg] || display.images[0]}
                        alt={display.title}
                        className="pdp-main-img"
                      />
                      {display.discount > 0 && (
                        <span className="pdp-badge-discount">-{display.discount}%</span>
                      )}
                    </div>

                    {display.images.length > 1 && (
                      <div className="pdp-thumbs">
                        {display.images.map((img, idx) => (
                          <button
                            key={idx}
                            className={`pdp-thumb ${idx === activeImg ? "active" : ""}`}
                            onClick={() => setActiveImg(idx)}
                          >
                            <img src={img} alt={`${display.title} ${idx + 1}`} />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </Col>

                {/* ===== Product Info ===== */}
                <Col lg="6">
                  <DetailsWithPrice item={detailItem} />
                </Col>
              </Row>

              {/* ===== Product Tabs ===== */}
              <div id="description-tab">
                <ProductTab
                  descriptionHtml={display.descriptionHtml}
                  details={display.details}
                />
              </div>
            </>
          )}
        </Container>
      </section>

      {/* ===== Related Products ===== */}
      {!loading && relatedCards.length > 0 && (
        <ProductSection
          products={relatedCards}
          items={relatedCards}
          sectionTitle={tr("related_products", isRTL ? "منتجات ذات صلة" : "Related Products")}
        />
      )}

      <StyleTag global css={`
        .pdp-section {
          padding: 140px 0 60px;
          background: var(--corp-bg-alt);
          min-height: 60vh;
        }
        .pdp-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          gap: 20px;
          color: var(--corp-text-secondary);
        }
        .pdp-gallery {
          position: sticky;
          top: 100px;
        }
        .pdp-main-img-wrapper {
          position: relative;
          background: var(--corp-white);
          border-radius: var(--corp-radius-xl);
          border: 1px solid var(--corp-gray-200);
          overflow: hidden;
          box-shadow: var(--corp-shadow-sm);
          aspect-ratio: 4 / 3;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pdp-main-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          padding: 24px;
        }
        .pdp-main-img-wrapper:hover .pdp-main-img {
          transform: scale(1.05);
        }
        .pdp-badge-discount {
          position: absolute;
          top: 16px;
          left: 16px;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: #fff;
          font-weight: 800;
          font-size: 0.85rem;
          padding: 6px 14px;
          border-radius: var(--corp-radius-full);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
        }
        [dir="rtl"] .pdp-badge-discount {
          left: auto;
          right: 16px;
        }
        .pdp-thumbs {
          display: flex;
          gap: 12px;
          margin-top: 16px;
          overflow-x: auto;
          padding-bottom: 4px;
        }
        .pdp-thumb {
          flex-shrink: 0;
          width: 80px;
          height: 80px;
          border-radius: var(--corp-radius-md);
          overflow: hidden;
          border: 2px solid var(--corp-gray-200);
          background: var(--corp-white);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 4px;
        }
        .pdp-thumb:hover {
          border-color: var(--corp-accent);
          transform: translateY(-2px);
        }
        .pdp-thumb.active {
          border-color: var(--corp-navy);
          box-shadow: 0 4px 12px rgba(22, 121, 60, 0.2);
        }
        .pdp-thumb img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        @media (max-width: 991.98px) {
          .pdp-gallery { position: static; }
          .pdp-section { padding: 120px 0 40px; }
        }
        @media (max-width: 575.98px) {
          .pdp-thumb { width: 64px; height: 64px; }
          .pdp-section { padding: 100px 0 30px; }
        }
      `} />
    </CommonLayout>
  );
};

export default ProductDetailsPage;
