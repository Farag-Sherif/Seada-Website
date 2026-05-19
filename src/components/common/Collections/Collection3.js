// components/home/TopCollection.jsx — Product Showcase Section
import React, { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import { Row, Col, Container } from "reactstrap";

import PostLoader from "../PostLoader";
import { getProducts } from "../../../actions/products";
import { useLanguage } from "../../../helpers/Language/useLanguage";

import ProductCardUnified from "../../../components/products/productCard";
import { useProductAdapter } from "../../../components/products/useProductAdapter";
import StyleTag from "@/styles/StyleTag";

/* ---- i18n safe helper ---- */
const tr = (t, key, fallback) => {
  try {
    const v = t ? t(key) : "";
    return !v || v === key ? fallback : v;
  } catch {
    return fallback;
  }
};

/* -------- stable key + strong de-dupe -------- */
const productKey = (p) => {
  const raw = p?.raw || p;
  const id = raw?.id ?? raw?.sku ?? raw?.code ?? raw?.slug ?? raw?.uuid;
  const mainImg = raw?.image_path || p?.images?.[0]?.src || "";
  return String(id ?? "") + "|" + String(mainImg ?? "");
};

const uniqueProducts = (arr) => {
  const seen = new Set();
  const out = [];
  for (const p of arr || []) {
    const k = productKey(p);
    if (!k || seen.has(k)) continue;
    seen.add(k);
    out.push(p);
  }
  return out;
};

const TopCollection = ({
  type,
  title,
  subtitle,
  designClass,
  noSlider,
  cartClass,
  productSlider,
  titleClass,
  noTitle,
  innerClass,
  inner,
  backImage,
}) => {
  const { t, isRTL } = useLanguage();

  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const { adapt } = useProductAdapter(isRTL);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const res = await getProducts({ page: 1, per_page: 50 });
        const list =
          (Array.isArray(res?.data) && res.data) ||
          (Array.isArray(res) && res) ||
          [];
        const adapted = list.map((p) => adapt(p));
        const unique = uniqueProducts(adapted);
        if (mounted) setItems(unique);
      } catch {
        if (mounted) setItems([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => {
      mounted = false;
    };
  }, [adapt, isRTL]);

  const gridItems = useMemo(() => items.slice(0, 8), [items]);

  const noProductsFound = tr(
    t,
    "collection.no_products_found",
    isRTL ? "لا توجد منتجات." : "No products found."
  );

  const sectionTitle = title || (isRTL ? "منتجاتنا المميزة" : "Featured Products");
  const sectionSubtitle = subtitle || (isRTL ? "استعراض المنتجات" : "Product Showcase");

  return (
    <section className="corp-section" id="products" dir={isRTL ? "rtl" : "ltr"}>
      <Container>
        {/* Corporate section header */}
        <div className="corp-section-header">
          <span className="corp-label">{sectionSubtitle}</span>
          <h2>{sectionTitle}</h2>
          <hr className="corp-gold-line" />
          <p>
            {isRTL
              ? "اكتشف مجموعتنا المتنوعة من المنتجات عالية الجودة المصممة لتلبية احتياجات عملك."
              : "Discover our diverse range of premium quality products designed to meet your business needs."}
          </p>
        </div>

        {/* Product Grid */}
        {loading ? (
          <div className="row mx-0">
            <div className="col-xl-12">
              <PostLoader />
            </div>
          </div>
        ) : gridItems.length === 0 ? (
          <div className="text-center py-4">{noProductsFound}</div>
        ) : (
          <Row className="g-4">
            {gridItems.map((p) => (
              <Col xl="3" lg="4" md="6" sm="6" key={productKey(p)}>
                <ProductCardUnified product={p} isRTL={isRTL} />
              </Col>
            ))}
          </Row>
        )}

        {/* View All Link */}
        {!loading && gridItems.length > 0 && (
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <a href="#contact" className="corp-btn corp-btn-outline-dark">
              {isRTL ? "طلب الكتالوج الكامل" : "Request Full Catalog"}
            </a>
          </div>
        )}
      </Container>
    </section>
  );
};

export default TopCollection;
