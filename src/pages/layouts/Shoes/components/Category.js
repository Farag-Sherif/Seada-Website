import React, { useEffect, useMemo, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { getCategories } from "./../../../../actions/categories";
import { useLanguage } from "../../../../helpers/Language/useLanguage";
import { useRouter } from "@/router/useRouter";
import StyleTag from "@/styles/StyleTag";

const pickTranslatedName = (item, want = "en") => {
  const translations = Array.isArray(item?.translations) ? item.translations : [];
  const primary = translations.find((t) => t?.locale === want)?.name;
  const fallback = translations.find((t) => t?.locale && t.locale !== want)?.name;
  return primary || fallback || item?.name || "";
};

const inferBaseOrigin = (list) => {
  const url = list?.find(
    (x) => typeof x?.logo_path === "string" && /^https?:\/\//i.test(x.logo_path)
  )?.logo_path;
  try {
    return url ? new URL(url).origin : (typeof window !== "undefined" ? window.location.origin : "");
  } catch {
    return typeof window !== "undefined" ? window.location.origin : "";
  }
};

const toAbsolute = (maybeUrl, baseOrigin) => {
  if (!maybeUrl) return null;
  if (/^https?:\/\//i.test(maybeUrl)) return maybeUrl;
  if (maybeUrl.startsWith("/")) return `${baseOrigin}${maybeUrl}`;
  return `${baseOrigin}/images/${maybeUrl}`;
};

const pickImage = (item, baseOrigin) => {
  if (item?.logo_path) return item.logo_path;
  if (item?.meta?.image_path) return toAbsolute(item.meta.image_path, baseOrigin);
  if (item?.meta?.image) return toAbsolute(item.meta.image, baseOrigin);
  return null;
};

const extractSubs = (cat) => {
  const pools = [cat?.sub_categories, cat?.subCategories, cat?.children, cat?.subs, cat?.sub_cats]
    .filter(Array.isArray);
  return pools[0] || [];
};

const looksLikeFlatSubs = (arr) =>
  Array.isArray(arr) && arr.length > 0 && arr.every((x) => x?.meta?.type === "sub_sub_category");

const dedupe = (items) => {
  const seen = new Set();
  const out = [];
  for (const it of items || []) {
    const idKey = it?.id != null ? `id:${it.id}` : null;
    const slugKey = it?.slug ? `slug:${String(it.slug).toLowerCase()}` : null;
    const key = idKey || slugKey;
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(it);
  }
  return out;
};

const CategoryCard = ({ img, name, parentName, linkId, isRTL, onClick }) => (
  <Col lg="3" md="4" sm="6" className="mb-4">
    <div
      className="corp-category-card"
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && onClick()}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="corp-category-img">
        <img src={img} alt={name} loading="lazy" />
      </div>
      <div className="corp-category-info">
        <h4>{name}</h4>
        {parentName && <span className="corp-category-parent">{parentName}</span>}
      </div>
      <div className="corp-category-arrow" aria-hidden="true">→</div>
    </div>
  </Col>
);

const Category = () => {
  const [subs, setSubs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { currentLanguage, isRTL } = useLanguage();
  const router = useRouter();
  const want = (currentLanguage || "en").toLowerCase().startsWith("ar") ? "ar" : "en";

  useEffect(() => {
    let mounted = true;
    (async () => {
      setLoading(true);
      try {
        const res = await getCategories();
        const payload = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];

        let allSubs;
        if (looksLikeFlatSubs(payload)) {
          allSubs = payload.map((s) => ({ ...s, __parentName: "" }));
        } else {
          allSubs = (payload || []).flatMap((cat) => {
            const parentName = pickTranslatedName(cat, want);
            return extractSubs(cat).map((s) => ({
              ...s,
              __parentId: cat?.id,
              __parentName: parentName,
            }));
          });
        }

        const base = inferBaseOrigin(allSubs);
        const deDuped = dedupe(allSubs);

        const mapped = deDuped
          .map((it) => {
            const img = pickImage(it, base);
            const subName = pickTranslatedName(it, want);
            const parentName = it.__parentName || "";
            return {
              id: it?.id ?? it?.slug,
              img,
              subName,
              parentName,
              linkId: it?.id ?? "",
            };
          })
          .filter((x) => !!x.img);

        if (mounted) setSubs(mapped);
      } catch {
        if (mounted) setSubs([]);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [currentLanguage, want]);

  const handleNavigate = (linkId) => {
    router.push({ pathname: "/products", query: { category_id: linkId } });
  };

  return (
    <section className="corp-section corp-section-alt" id="categories" dir={isRTL ? "rtl" : "ltr"}>
      <Container>
        <div className="corp-section-header">
          <span className="corp-label">
            {isRTL ? "أقسامنا" : "Our Categories"}
          </span>
          <h2>{isRTL ? "تصفح فئات المنتجات" : "Browse Product Categories"}</h2>
          <hr className="corp-gold-line" />
          <p>
            {isRTL
              ? "اكتشف مجموعتنا الواسعة من المنتجات المصنفة بعناية لتسهيل تجربة التصفح."
              : "Discover our wide range of carefully categorized products for an easy browsing experience."}
          </p>
        </div>

        <Row>
          {loading && subs.length === 0
            ? Array.from({ length: 8 }).map((_, i) => (
                <Col lg="3" md="4" sm="6" className="mb-4" key={`sk-${i}`}>
                  <div className="corp-category-card corp-skeleton">
                    <div className="corp-category-img">
                      <div style={{ width: "100%", paddingTop: "100%", background: "var(--corp-gray-100)", borderRadius: "var(--corp-radius-lg)" }} />
                    </div>
                    <div className="corp-category-info">
                      <div style={{ width: "60%", height: 14, background: "var(--corp-gray-200)", borderRadius: 6 }} />
                    </div>
                  </div>
                </Col>
              ))
            : subs.map((d) => (
                <CategoryCard
                  key={d.id}
                  img={d.img}
                  name={d.subName}
                  parentName={d.parentName}
                  linkId={d.linkId}
                  isRTL={isRTL}
                  onClick={() => handleNavigate(d.linkId)}
                />
              ))}
        </Row>
      </Container>

      <StyleTag global css={`
        .corp-category-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: var(--corp-radius-xl);
          padding: 24px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all var(--corp-duration) var(--corp-ease-spring);
          height: 100%;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        .corp-category-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--corp-accent-gradient);
          opacity: 0;
          transition: opacity var(--corp-duration) var(--corp-ease);
          z-index: 0;
        }
        .corp-category-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--corp-shadow-lg);
          border-color: rgba(255, 255, 255, 0.8);
        }
        .corp-category-card:hover::after {
          opacity: 0.03;
        }
        .corp-category-img {
          width: 100%;
          padding-top: 100%;
          position: relative;
          border-radius: var(--corp-radius-lg);
          overflow: hidden;
          background: var(--corp-white);
          margin-bottom: 16px;
          z-index: 1;
        }
        .corp-category-img img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 20px;
          transition: transform var(--corp-duration-slow) var(--corp-ease-spring);
        }
        .corp-category-card:hover .corp-category-img img {
          transform: scale(1.15) rotate(5deg);
        }
        .corp-category-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          z-index: 1;
        }
        .corp-category-info h4 {
          font-size: 1.1rem;
          font-family: var(--font-heading);
          font-weight: 800;
          color: var(--corp-navy);
          margin: 0;
          transition: color 0.3s ease;
        }
        .corp-category-card:hover .corp-category-info h4 {
          color: var(--corp-accent);
        }
        .corp-category-parent {
          font-size: 0.8rem;
          color: var(--corp-text-muted);
          font-weight: 600;
        }
        .corp-category-arrow {
          position: absolute;
          bottom: 16px;
          ${isRTL ? "left" : "right"}: 16px;
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: var(--corp-gray-100);
          color: var(--corp-navy);
          font-size: 14px;
          opacity: 0;
          transform: translateX(${isRTL ? "8px" : "-8px"});
          transition: all var(--corp-duration) var(--corp-ease-spring);
          z-index: 1;
        }
        .corp-category-card:hover .corp-category-arrow {
          opacity: 1;
          background: var(--corp-accent-gradient);
          color: var(--corp-white);
          transform: translateX(0);
        }
        .corp-skeleton { pointer-events: none; }
      `} />
    </section>
  );
};

export default Category;
