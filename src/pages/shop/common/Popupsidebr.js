import React, { useState, useContext, useEffect, useMemo, useRef, useCallback } from "react";
import { useRouter } from "@/router/useRouter";
import { Col, Row, Button, Spinner } from "reactstrap";

import FilterContext from "../../../helpers/filter/FilterContext";
import { CurrencyContext } from "../../../helpers/Currency/CurrencyContext";
import PostLoader from "../../../components/common/PostLoader";
import CartContext from "../../../helpers/cart/CartContext";
import { WishlistContext } from "../../../helpers/wishlist/WishlistContext";
import { CompareContext } from "../../../helpers/Compare/CompareContext";
import FilterPage from "./filter";

import { getCategories, getSubCafesProducts } from "../../../actions/categories";
import { getProducts } from "../../../actions/products";
import { useLanguage } from "../../../helpers/Language/useLanguage";
import { addToCart as addToCartAction } from "../../../actions/cart";

import ProductCardUnified from "../../../components/products/productCard";
import { useProductAdapter } from "../../../components/products/useProductAdapter";
import StyleTag from "@/styles/StyleTag";

const trSafe = (t, key, fallback) => {
  try {
    const v = t ? t(key) : "";
    return !v || v === key ? fallback : v;
  } catch {
    return fallback;
  }
};
const BRAND = "#0f7a37";

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

const sortToApi = (val) => {
  switch (val) {
    case "price_desc": return "high_to_low";
    case "price_asc": return "low_to_high";
    default: return undefined;
  }
};
const stripUndefined = (obj) => Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== undefined && v !== null && v !== "" && !(Array.isArray(v) && !v.length)));
const num = (v) => (v === 0 || v === "0" ? 0 : v ? Number(v) : undefined);
const firstDefined = (...vals) => vals.find((v) => v !== undefined && v !== null && v !== "");
const readNumber = (v) => (v === 0 || v === "0" ? 0 : v == null || v === "" || Number.isNaN(Number(v)) ? undefined : Number(v));
const getPrice = (p) => {
  const r = p?.raw || p || {};
  return readNumber(p?.price) ?? readNumber(p?.final_price) ?? readNumber(p?.sale_price) ?? readNumber(r?.price) ?? readNumber(r?.final_price) ?? readNumber(r?.sale_price) ?? 0;
};
const getWeight = (p) => {
  const r = p?.raw || p || {};
  return readNumber(p?.weight ?? r?.weight);
};
const localizedName = (node, isRTL) => {
  const base = node?.name || "";
  const list = Array.isArray(node?.translations) ? node.translations : [];
  const targetLocale = isRTL ? "ar" : "en";
  const byLocale = list.find((x) => x?.locale === targetLocale)?.name || list.find((x) => x?.locale)?.name || "";
  return (byLocale || base || "").trim();
};
const mapCategoriesWithNames = (arr, isRTL) => (Array.isArray(arr) ? arr : []).map((c) => ({ ...c, name: localizedName(c, isRTL) || `#${c?.id ?? ""}`, children: c?.children ? mapCategoriesWithNames(c.children, isRTL) : [] }));

const extractCategoryId = (router, fc) => {
  const r = router?.query || {};
  const cands = [r.category_id, r.sub_category_id, r.subCategoryId, r.categoryId, fc?.selectedCategoryId, fc?.selectedSubCategoryId, fc?.selectedCategory?.id, Array.isArray(fc?.selectedCategory) ? fc.selectedCategory[0] : fc?.selectedCategory, fc?.category?.id, fc?.categoryId, fc?.state?.categoryId, fc?.state?.id, typeof fc?.state === "number" || typeof fc?.state === "string" ? fc.state : undefined];
  return num(firstDefined(...cands));
};

const extractRange = (raw) => {
  if (Array.isArray(raw) && raw.length >= 2) return { min: num(raw[0]), max: num(raw[1]) };
  if (raw && (raw.min != null || raw.max != null)) return { min: num(raw.min), max: num(raw.max) };
  return { min: undefined, max: undefined };
};

const useNormalizedFilters = (router, fc) => {
  const subCategoryId = useMemo(() => extractCategoryId(router, fc), [router?.query, fc?.state, fc?.selectedCategory, fc?.selectedCategoryId]);
  const price = useMemo(() => extractRange(fc?.selectedPrice ?? fc?.price ?? fc?.prices ?? fc?.state?.price ?? fc?.state?.selectedPrice), [fc?.selectedPrice, fc?.price, fc?.prices, fc?.state]);
  const weightRange = useMemo(() => extractRange(fc?.selectedWeightRange ?? fc?.weightRange ?? fc?.state?.weightRange ?? fc?.state?.selectedWeightRange), [fc?.selectedWeightRange, fc?.weightRange, fc?.state]);
  return {
    subCategoryId,
    price,
    weightRange,
    priceKey: `${price.min ?? ""}|${price.max ?? ""}`,
    weightKey: `${weightRange.min ?? ""}|${weightRange.max ?? ""}`,
  };
};

const findCategoryLabel = (categories, id, isRTL) => {
  const walk = (list) => {
    for (const item of list || []) {
      if (String(item?.id ?? "") === String(id ?? "")) return localizedName(item, isRTL);
      const found = walk(item?.children || []);
      if (found) return found;
    }
    return null;
  };
  return walk(categories) || "";
};

const Popupsidebar = ({ colClass = "col-lg-4", layoutList = "" }) => {
  const router = useRouter();
  const cartContext = useContext(CartContext);
  const wishlistContext = useContext(WishlistContext);
  const compareContext = useContext(CompareContext);
  const curContext = useContext(CurrencyContext);
  const symbol = curContext?.state?.symbol || "E£";

  const { t, isRTL } = useLanguage();
  const filterContext = useContext(FilterContext);

  const [limit, setLimit] = useState(12);
  const [grid, setGrid] = useState(colClass);
  const [layout, setLayout] = useState(layoutList);
  const [sidebarView, setSidebarView] = useState(false);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [hasMore, setHasMore] = useState(false);
  const [sortBy, setSortBy] = useState("price_asc");
  const [categories, setCategories] = useState([]);

  const refetchTimer = useRef(null);
  const { subCategoryId, price, weightRange, priceKey, weightKey } = useNormalizedFilters(router, filterContext);
  const { adapt } = useProductAdapter(isRTL);

  useEffect(() => {
    let on = true;
    (async () => {
      try {
        const res = await getCategories().catch(() => null);
        const raw = (Array.isArray(res?.data) && res.data) || (Array.isArray(res?.categories) && res.categories) || (Array.isArray(res) && res) || [];
        const withNames = mapCategoriesWithNames(raw, isRTL);
        if (on) setCategories(withNames);
      } catch {
        if (on) setCategories([]);
      }
    })();
    return () => { on = false; };
  }, [isRTL]);

  const applyLocalFilters = (arr) => arr.filter((p) => {
    const pr = getPrice(p);
    const wt = getWeight(p);
    if (price.min != null && pr < Number(price.min)) return false;
    if (price.max != null && pr > Number(price.max)) return false;
    if (weightRange.min != null && wt != null && wt < Number(weightRange.min)) return false;
    if (weightRange.max != null && wt != null && wt > Number(weightRange.max)) return false;
    return true;
  });

  const fetchPage = async ({ pageToLoad = 1, append = false }) => {
    const firstLoad = pageToLoad === 1 && !append;
    if (firstLoad) setLoading(true); else setLoadingMore(true);
    try {
      let list = [];
      if (subCategoryId) {
        const res = await getSubCafesProducts(subCategoryId, pageToLoad);
        list = (Array.isArray(res?.data) && res.data) || (Array.isArray(res?.items) && res.items) || (Array.isArray(res?.data?.data) && res.data.data) || (Array.isArray(res) && res) || [];
      } else {
        const params = stripUndefined({
          page: pageToLoad,
          per_page: limit,
          sort: sortToApi(sortBy),
          min_price: price.min ?? 0,
          max_price: price.max,
          min_weight: weightRange.min,
          max_weight: weightRange.max,
          q: filterContext?.search ?? filterContext?.keyword ?? filterContext?.q ?? undefined,
        });
        const res = await getProducts(params);
        list = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
      }
      const adapted = list.map((p) => adapt(p));
      const filtered = subCategoryId ? applyLocalFilters(adapted) : applyLocalFilters(adapted);
      const clean = uniqueProducts(filtered);
      let sorted = clean;
      if (sortBy === "price_desc") sorted = [...clean].sort((a, b) => getPrice(b) - getPrice(a));
      else if (sortBy === "price_asc") sorted = [...clean].sort((a, b) => getPrice(a) - getPrice(b));
      setItems((prev) => (append ? uniqueProducts([...prev, ...sorted]) : sorted));
      const current = pageToLoad;
      const last = sorted.length === limit ? current + 1 : current;
      setHasMore(current < last);
      setPage(current);
    } catch {
      setHasMore(false);
      if (!append) setItems([]);
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    fetchPage({ pageToLoad: 1, append: false });
  }, []);

  useEffect(() => {
    if (refetchTimer.current) clearTimeout(refetchTimer.current);
    refetchTimer.current = setTimeout(() => {
      fetchPage({ pageToLoad: 1, append: false });
    }, 150);
    return () => clearTimeout(refetchTimer.current);
  }, [limit, sortBy, subCategoryId, priceKey, weightKey, isRTL, filterContext?.search, filterContext?.keyword, filterContext?.q]);

  const addToCartBoth = useCallback(async (product, qty = 1) => {
    cartContext?.addToCart?.(product, qty);
    try {
      const weight = product?.raw?.weight || "";
      await addToCartAction(product.id, qty, weight);
      cartContext?.refetch?.();
    } catch (err) {
      console.warn("Server cart sync failed (non-critical):", err);
    }
  }, [cartContext]);

  const clearCategory = () => {
    filterContext?.setSelectedCategoryId?.(undefined);
    filterContext?.setSelectedSubCategoryId?.(undefined);
    filterContext?.setSelectedCategory?.(undefined);
    filterContext?.setState?.(undefined);
    router.push("/shop/sidebar_popup");
  };
  const clearPrice = () => filterContext?.setSelectedPrice?.({ min: undefined, max: undefined });
  const clearWeight = () => filterContext?.setSelectedWeightRange?.({ min: undefined, max: undefined });

  const activeCategoryLabel = findCategoryLabel(categories, subCategoryId, isRTL);
  const activeChips = [
    activeCategoryLabel ? { label: activeCategoryLabel, onRemove: clearCategory } : null,
    price.min != null || price.max != null ? { label: `${price.min ?? 0} - ${price.max ?? 500}`, onRemove: clearPrice } : null,
    weightRange.min != null || weightRange.max != null ? { label: `${weightRange.min ?? 0}g - ${weightRange.max ?? "∞"}g`, onRemove: clearWeight } : null,
  ].filter(Boolean);

  return (
    <>
      <Col lg="3" className="d-none d-lg-block">
        <FilterPage sidebarView={true} closeSidebar={() => setSidebarView(false)} categories={categories} />
      </Col>

      <Col lg="9" xs="12" className="collection-content">
        <div className="page-main-content">
          <div className="collection-product-wrapper">
            <div className="product-top-filter">
              <div className="seada-toolbar-inner">
                <div className="d-flex align-items-center flex-wrap gap-2">
                  <button type="button" className="btn btn-outline d-lg-none" onClick={() => setSidebarView(true)}>
                    <i className="fa fa-filter" aria-hidden="true" /> {trSafe(t, "filter", isRTL ? "تصفية" : "Filter")}
                  </button>
                  <div className="seada-view-toggle d-flex align-items-center gap-2">
                    <button type="button" className={layout === "" ? "active" : ""} onClick={() => { setLayout(""); setGrid("col-xl-4 col-md-6 col-grid-box"); }}>
                      <i className="fa fa-th" aria-hidden="true" />
                    </button>
                    <button type="button" className={layout === "list-view" ? "active" : ""} onClick={() => { setLayout("list-view"); setGrid("col-lg-12"); }}>
                      <i className="fa fa-list-ul" aria-hidden="true" />
                    </button>
                  </div>
                  {activeChips.length ? (
                    <div className="active-filter-chips ms-lg-2">
                      {activeChips.map((chip, idx) => (
                        <span key={`${chip.label}-${idx}`} className="chip">
                          {chip.label}
                          <button type="button" onClick={chip.onRemove}>×</button>
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <div className="d-flex align-items-center flex-wrap gap-2">
                  <div className="product-page-per-view">
                    <select value={limit} onChange={(e) => setLimit(parseInt(e.target.value, 10))}>
                      <option value="12">12 {isRTL ? "منتج" : "Products"}</option>
                      <option value="18">18 {isRTL ? "منتج" : "Products"}</option>
                      <option value="24">24 {isRTL ? "منتج" : "Products"}</option>
                    </select>
                  </div>
                  <div className="product-page-filter">
                    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                      <option value="price_asc">{isRTL ? "السعر: من الأقل للأعلى" : "Price: Low to High"}</option>
                      <option value="price_desc">{isRTL ? "السعر: من الأعلى للأقل" : "Price: High to Low"}</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className={`product-wrapper-grid ${layout}`}>
              <Row className="g-4">
                {loading ? (
                  Array.from({ length: 6 }).map((_, idx) => (
                    <div key={`loader-${idx}`} className="col-xl-4 col-md-6 col-6"><PostLoader /></div>
                  ))
                ) : items.length === 0 ? (
                  <Col xs="12">
                    <div className="col-sm-12 empty-cart-cls text-center">
                      <img src="/assets/images/empty-search.jpg" className="img-fluid mb-4 mx-auto" alt="" />
                      <h3><strong>{trSafe(t, "no_results_found", isRTL ? "لا توجد نتائج" : "No results found")}</strong></h3>
                      <h4>{isRTL ? "استكشف الأقسام أو عدّل عوامل التصفية." : "Explore categories or adjust your filters."}</h4>
                    </div>
                  </Col>
                ) : (
                  items.map((product) => (
                    <Col key={productKey(product)} className={grid} xl={grid === "col-lg-12" ? "12" : undefined}>
                      <ProductCardUnified
                        product={product}
                        isRTL={isRTL}
                        currencySymbol={symbol}
                        onAddToCart={(qty = 1) => addToCartBoth(product, qty)}
                        onAddToWishlist={() => wishlistContext?.addToWish?.(product)}
                        onAddToCompare={() => compareContext?.addToCompare?.(product)}
                      />
                    </Col>
                  ))
                )}
              </Row>
            </div>

            <div className="section-t-space">
              <div className="text-center">
                {hasMore && (
                  <Button className="load-more" onClick={() => fetchPage({ pageToLoad: page + 1, append: true })} disabled={loadingMore} style={{ background: BRAND, borderColor: BRAND, paddingInline: 22, fontWeight: 800, borderRadius: 999 }}>
                    {loadingMore && <Spinner size="sm" style={{ marginInlineEnd: 8 }} />}
                    {loadingMore ? trSafe(t, "loading", isRTL ? "جاري التحميل..." : "Loading...") : trSafe(t, "load_more", isRTL ? "تحميل المزيد" : "Load More")}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </Col>

      {sidebarView ? (
        <div className="seada-filter-mobile-backdrop d-lg-none" onClick={() => setSidebarView(false)}>
          <div className="seada-filter-mobile-panel" onClick={(e) => e.stopPropagation()}>
            <FilterPage sidebarView={sidebarView} closeSidebar={() => setSidebarView(false)} categories={categories} />
          </div>
        </div>
      ) : null}

      <StyleTag global css={`
        .active-filter-chips .chip button {
          width: 20px;
          height: 20px;
          border: 0;
          border-radius: 999px;
          background: rgba(15,122,55,.12);
          color: #0f7a37;
          display: grid;
          place-items: center;
          line-height: 1;
          padding: 0;
        }
        .seada-filter-mobile-backdrop {
          position: fixed;
          inset: 0;
          z-index: 1007;
          background: rgba(17, 24, 17, .34);
          display: flex;
          justify-content: flex-start;
        }
        .seada-filter-mobile-panel {
          width: min(88vw, 360px);
          height: 100%;
          background: #fff;
          padding: 18px;
          overflow-y: auto;
          box-shadow: 0 24px 40px rgba(22, 35, 18, .16);
        }
        .seada-filter-close {
          width: 40px;
          height: 40px;
          border-radius: 14px;
          border: 1px solid #e2ece5;
          background: #f7faf8;
          font-size: 24px;
          line-height: 1;
        }
        .product-page-per-view select,
        .product-page-filter select {
          min-width: 170px;
          background: #fff;
        }
        @media (max-width: 991.98px) {
          .product-page-per-view,
          .product-page-filter {
            width: calc(50% - 4px);
          }
          .product-page-per-view select,
          .product-page-filter select {
            width: 100%;
            min-width: 0;
          }
        }
        @media (max-width: 575.98px) {
          .active-filter-chips {
            width: 100%;
          }
          .product-page-per-view,
          .product-page-filter {
            width: 100%;
          }
        }
      `} />
    </>
  );
};

export default Popupsidebar;
