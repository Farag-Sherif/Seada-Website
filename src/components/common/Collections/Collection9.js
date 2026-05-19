// components/home/ProductSlider.jsx
import React, { Fragment, useContext, useEffect, useMemo, useState, useRef } from "react";
import Slider from "react-slick";
import { useRouter } from "@/router/useRouter";
import { Media, Container, Col, Row } from "reactstrap";
import { getProducts } from "../../../actions/products";
import { useLanguage } from "../../../helpers/Language/useLanguage";
import StyleTag from "@/styles/StyleTag";

/* ---------- i18n helper ---------- */
const tr = (t, key, fallback) => {
  try {
    const v = t ? t(key) : "";
    return !v || v === key ? fallback : v;
  } catch {
    return fallback;
  }
};

/* ---------- helpers ---------- */
const adapt = (p, isRTL) => {
  const trn =
    (Array.isArray(p?.translations) &&
      (p.translations.find((x) => x.locale === (isRTL ? "ar" : "en")) ||
        p.translations[0])) ||
    null;

  const title = trn?.name || p?.name || "";
  const images = [];
  if (p?.image_path) images.push({ src: p.image_path });
  (p?.media || []).forEach((m) => m?.image_path && images.push({ src: m.image_path }));

  return {
    id: p?.id,
    title,
    images,
    created_at: p?.created_at,
    is_featured: Number(p?.is_featured) === 1,
    raw: p,
  };
};

const chunk3 = (arr) => {
  const out = [];
  for (let i = 0; i < arr.length; i += 3) out.push(arr.slice(i, i + 3));
  return out.slice(0, 2);
};

/* ---------- column card ---------- */

const ColumnCard = ({ title, items, isRTL }) => {
  const slides = useMemo(() => chunk3(items), [items]);
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current?.innerSlider?.onWindowResized) {
      sliderRef.current.innerSlider.onWindowResized();
    }
    sliderRef.current?.slickGoTo?.(0, true);
  }, [slides.length, isRTL]);

  if (!items || items.length === 0) return null;

  return (
    <Col lg="3" sm="6" className="mb-4">
      <div className="corp-column-card" dir={isRTL ? "rtl" : "ltr"}>
        <h5 className="corp-column-title">{title}</h5>
        <Slider
          key={`${isRTL}-${slides.length}`}
          className="corp-column-slider"
          ref={sliderRef}
          rtl={isRTL}
          arrows={false}
          dots={true}
          infinite={false}
          slidesToShow={1}
          slidesToScroll={1}
          adaptiveHeight
        >
          {slides.map((chunk, chunkIdx) => (
            <div key={`chunk-${chunkIdx}`}>
              <div className="corp-column-grid">
                {chunk.map((item, i) => {
                  const img = item.images?.[0]?.src || "/assets/images/placeholder.png";
                  return (
                    <div className="corp-column-item" key={item.id ?? i}>
                      <div className="corp-column-img">
                        <img src={img} alt={item.title} loading="lazy" />
                      </div>
                      <div className="corp-column-info">
                        <h6>
                          <a href={`/product-details/${item.id}`} style={{ color: "inherit", textDecoration: "none" }}>
                            {item.title}
                          </a>
                        </h6>
                        <a href="#contact" className="corp-column-link">
                          {isRTL ? "طلب معلومات" : "Request Info"}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <StyleTag global css={`
        .corp-column-card {
          background: var(--corp-white);
          border: 1px solid var(--corp-gray-200);
          border-radius: var(--corp-radius-xl);
          padding: 24px;
          height: 100%;
        }
        .corp-column-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--corp-navy);
          margin-bottom: 24px;
          position: relative;
          padding-bottom: 12px;
          text-transform: capitalize;
        }
        .corp-column-title::after {
          content: '';
          position: absolute;
          bottom: 0;
          ${isRTL ? "right" : "left"}: 0;
          width: 40px;
          height: 3px;
          background: var(--corp-gold);
          border-radius: 2px;
        }
        .corp-column-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .corp-column-item {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .corp-column-img {
          width: 80px;
          height: 80px;
          border-radius: var(--corp-radius-md);
          background: var(--corp-gray-50);
          padding: 8px;
          display: grid;
          place-items: center;
        }
        .corp-column-img img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }
        .corp-column-info {
          flex: 1;
        }
        .corp-column-info h6 {
          margin: 0 0 6px 0;
          font-size: 0.95rem;
          font-weight: 700;
          color: var(--corp-navy);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.3s;
        }
        .corp-column-info h6:hover {
          color: var(--corp-gold-dark);
        }
        .corp-column-link {
          font-size: 0.8rem;
          font-weight: 600;
          color: var(--corp-text-secondary);
          text-decoration: underline;
          transition: color 0.3s;
        }
        .corp-column-link:hover {
          color: var(--corp-gold);
        }
        .corp-column-slider .slick-dots {
          bottom: -30px;
        }
      `} />
    </Col>
  );
};

/* ---------- main ---------- */
const ProductSlider = () => {
  const { t, isRTL } = useLanguage();
  const [items, setItems] = useState([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      const res = await getProducts({ page: 1, per_page: 50 }).catch(() => null);
      const list = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
      const mapped = list.map((p) => adapt(p, isRTL));
      if (mounted) setItems(mapped);
    })();
    return () => {
      mounted = false;
    };
  }, [isRTL]);

  const newProducts = useMemo(
    () => [...items].sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).slice(0, 6),
    [items]
  );

  const featureProducts = useMemo(() => {
    const featured = items.filter((p) => p.is_featured);
    return (featured.length ? featured : items).slice(0, 6);
  }, [items]);

  const bestSeller = useMemo(() => items.slice(0, 6), [items]);
  const onSell = useMemo(() => items.slice(6, 12), [items]);

  const titleNew = tr(t, "home.products.new", isRTL ? "منتجات جديدة" : "New Products");
  const titleFeat = tr(t, "home.products.featured", isRTL ? "منتجات مميزة" : "Featured Products");
  const titleBest = tr(t, "home.products.bestSeller", isRTL ? "الأكثر مبيعًا" : "Top Products");
  const titleSale = tr(t, "home.products.onSale", isRTL ? "عروض" : "Special Offers");

  return (
    <Fragment>
      <section className="corp-section corp-section-alt" dir={isRTL ? "rtl" : "ltr"}>
        <Container>
          <Row className="g-4">
            <ColumnCard title={titleNew} items={newProducts} isRTL={isRTL} />
            <ColumnCard title={titleFeat} items={featureProducts} isRTL={isRTL} />
            <ColumnCard title={titleBest} items={bestSeller} isRTL={isRTL} />
            <ColumnCard title={titleSale} items={onSell} isRTL={isRTL} />
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default ProductSlider;
