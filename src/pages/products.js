import React, { useEffect, useState, useMemo } from "react";
import { Container, Row, Col, Spinner } from "reactstrap";
import CommonLayout from "../components/shop/common-layout";
import { useLanguage } from "../helpers/Language/useLanguage";
import { getProducts } from "../actions/products";
import { getCategories } from "../actions/categories";

import ProductCardUnified from "../components/products/productCard";
import { useProductAdapter } from "../components/products/useProductAdapter";
import StyleTag from "@/styles/StyleTag";
import { useRouter } from "@/router/useRouter";

const absolutize = (url) => {
  if (!url) return url;
  if (/^https?:\/\//i.test(url)) return url;
  try {
    const base = typeof window !== "undefined" ? window.location.origin : "https://newstore.test.do-go.net";
    return new URL(url, base).toString();
  } catch {
    return url;
  }
};

const ProductsPage = () => {
  const { t, isRTL } = useLanguage();
  
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  
  const router = useRouter();
  const queryCatId = router.query?.category_id;
  
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(
    queryCatId ? (Number(queryCatId) || queryCatId) : null
  );

  useEffect(() => {
    if (queryCatId) {
      setSelectedCategory(Number(queryCatId) || queryCatId);
      setPage(1);
      setProducts([]);
    }
  }, [queryCatId]);

  const { adapt } = useProductAdapter(isRTL);

  // Fetch Categories
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await getCategories();
        if (!mounted) return;
        const catArray = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
        setCategories(catArray);
      } catch (e) {
        console.error("Failed to load categories", e);
      }
    })();
    return () => { mounted = false; };
  }, []);

  // Fetch Products
  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        setLoading(true);
        const params = { page, per_page: 24 };
        if (selectedCategory) {
          params.sub_category_id = selectedCategory;
        }
        
        const res = await getProducts(params);
        if (!mounted) return;
        
        if (res && res.data) {
          if (page === 1) {
            setProducts(res.data);
          } else {
            setProducts(prev => [...prev, ...res.data]);
          }
          if (res.current_page >= res.last_page || res.data.length === 0) {
            setHasMore(false);
          }
        }
      } catch (e) {
        console.error("Failed to load products", e);
      } finally {
        if (mounted) setLoading(false);
      }
    })();
    return () => { mounted = false; };
  }, [page, selectedCategory]);

  // Handle filter change
  const handleCategoryClick = (catId) => {
    if (selectedCategory === catId) {
      setSelectedCategory(null); // toggle off
    } else {
      setSelectedCategory(catId);
    }
    setPage(1);
    setHasMore(true);
    setProducts([]);
  };

  const adaptedCards = useMemo(() => {
    let filteredProducts = products;
    
    if (selectedCategory) {
      filteredProducts = products.filter(p => {
        const catId = p.cafe_id || p.category?.id || p.raw?.cafe_id || p.raw?.category?.id;
        return Number(catId) === Number(selectedCategory);
      });
    }

    return filteredProducts.map(p => {
      const a = adapt(p);
      if (!a) return null;
      const first = a?.images?.[0]?.src || a?.image || a?.thumbnail || a?.raw?.image_path || "";
      const img = absolutize(first);
      return {
        ...a,
        image: img,
        thumbnail: img,
        images: (a?.images || []).map((im) => ({ ...im, src: absolutize(im.src) })),
      };
    }).filter(Boolean);
  }, [products, adapt, selectedCategory]);

  return (
    <CommonLayout parent="Home" title={isRTL ? "المنتجات" : "Products"}>
      <div className="corp-section corp-section-alt" dir={isRTL ? "rtl" : "ltr"}>
        <Container>
          <div className="corp-section-header">
            <span className="corp-label">{isRTL ? "الكتالوج الشامل" : "Complete Catalog"}</span>
            <h2>{isRTL ? "منتجاتنا عالية الجودة" : "Our Premium Products"}</h2>
            <p>
              {isRTL 
                ? "تصفح مجموعتنا الواسعة من المنتجات المصممة لتلبية متطلبات الشركات بدقة واحترافية عالية." 
                : "Browse our extensive range of products designed to meet corporate requirements with precision and high professionalism."}
            </p>
            <div className="corp-gold-line"></div>
          </div>

          <Row className="g-4">
            {/* Filter Sidebar */}
            <Col lg="3" md="4" className="mb-4">
              <div className="corp-card filter-sidebar p-4 sticky-sidebar">
                <h4 className="filter-title">{isRTL ? "التصنيفات" : "Categories"}</h4>
                <ul className="filter-list">
                  <li className={`filter-item ${selectedCategory === null ? "active" : ""}`}>
                    <button onClick={() => handleCategoryClick(null)}>
                      {isRTL ? "جميع المنتجات" : "All Products"}
                    </button>
                  </li>
                  {categories.map((cat) => {
                    const name = isRTL 
                      ? cat.translations?.find(t => t.locale === 'ar')?.name || cat.name
                      : cat.translations?.find(t => t.locale === 'en')?.name || cat.name;
                    
                    return (
                      <li key={cat.id} className={`filter-item ${selectedCategory === cat.id ? "active" : ""}`}>
                        <button onClick={() => handleCategoryClick(cat.id)}>{name}</button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Col>

            {/* Product Grid */}
            <Col lg="9" md="8">
              {loading && page === 1 ? (
                <div className="text-center py-5">
                  <Spinner color="primary" />
                </div>
              ) : (
                <Row className="g-4">
                  {adaptedCards.length > 0 ? (
                    adaptedCards.map((product, i) => (
                      <Col lg="4" sm="6" xs="12" key={product.id || i} className="mb-4">
                        <ProductCardUnified product={product} isRTL={isRTL} />
                      </Col>
                    ))
                  ) : (
                    <Col xs="12" className="text-center py-5">
                      <div className="corp-card">
                        <h4>{isRTL ? "لا توجد منتجات تطابق بحثك" : "No products match your filter"}</h4>
                      </div>
                    </Col>
                  )}
                </Row>
              )}

              {hasMore && !loading && adaptedCards.length > 0 && (
                <div className="text-center mt-5">
                  <button 
                    className="corp-btn corp-btn-outline-dark"
                    onClick={() => setPage(p => p + 1)}
                  >
                    {isRTL ? "تحميل المزيد" : "Load More"}
                  </button>
                </div>
              )}
              
              {loading && page > 1 && (
                <div className="text-center mt-5">
                  <Spinner color="primary" size="sm" />
                </div>
              )}
            </Col>
          </Row>
        </Container>
      </div>

      <StyleTag global css={`
        .g-4 {
          --bs-gutter-y: 1.5rem;
          --bs-gutter-x: 1.5rem;
        }
        
        .sticky-sidebar {
          position: sticky;
          top: 100px;
          z-index: 10;
        }

        .filter-title {
          font-family: var(--font-heading);
          font-weight: 800;
          color: var(--corp-navy);
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--corp-gray-200);
          font-size: 1.25rem;
        }

        .filter-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .filter-item button {
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          padding: 12px 16px;
          border-radius: var(--corp-radius-sm);
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--corp-text-secondary);
          transition: all var(--corp-duration) var(--corp-ease);
          cursor: pointer;
        }
        
        [dir="rtl"] .filter-item button {
          text-align: right;
        }

        .filter-item button:hover {
          background: rgba(var(--corp-accent-rgba), 0.05);
          color: var(--corp-accent);
          transform: translateX(${isRTL ? '-4px' : '4px'});
        }

        .filter-item.active button {
          background: var(--corp-accent-gradient);
          color: var(--corp-white);
          font-weight: 700;
          box-shadow: var(--corp-shadow-glow);
        }
      `} />
    </CommonLayout>
  );
};

export default ProductsPage;
