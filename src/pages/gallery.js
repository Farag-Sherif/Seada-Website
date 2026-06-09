import React, { useState, useEffect, useCallback } from "react";
import { Helmet } from "react-helmet-async";
import CommonLayout from "../components/shop/common-layout";
import { useLanguage } from "../helpers/Language/useLanguage";
import { get } from "../server/api";

/* ─── API helpers ────────────────────────────────────────── */
async function fetchImages() {
  return get("new-images");
}

/* ─── Component ─────────────────────────────────────────── */
const GalleryPage = () => {
  const { isRTL } = useLanguage();

  const [activeTab, setActiveTab] = useState("all");
  const [images, setImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [imagesLoading, setImagesLoading] = useState(true);
  const [imagesError, setImagesError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 992);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 992);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  /* ── Fetch all images on mount ── */
  useEffect(() => {
    const load = async () => {
      setImagesLoading(true);
      setImagesError(null);
      try {
        const data = await fetchImages();
        const imgs = Array.isArray(data) ? data : (data.images ?? []);
        const cats = Array.isArray(data) ? [] : (data.categories ?? []);
        setImages(imgs);
        if (cats.length) setCategories(cats);
      } catch (err) {
        setImagesError(
          isRTL
            ? "فشل تحميل الصور. يرجى المحاولة مجدداً."
            : "Failed to load images. Please try again.",
        );
      } finally {
        setImagesLoading(false);
      }
    };
    load();
  }, []);

  /* ── Open modal from local images array (no extra API call) ── */
  const handleViewDetails = (id) => {
    const img = images.find((i) => i.id === id);
    if (img) setSelectedImage(img);
  };

  /* ── i18n helpers ── */
  const getTitle = (img) =>
    isRTL
      ? (img?.title?.ar ?? img?.title ?? "")
      : (img?.title?.en ?? img?.title ?? "");
  const getCategory = (img) =>
    isRTL
      ? (img?.category?.ar ?? img?.category ?? "")
      : (img?.category?.en ?? img?.category ?? "");
  const getSrc = (img) =>
    img?.image_path ?? img?.url ?? img?.imageUrl ?? img?.src ?? "";

  /* ── Filter tabs built from categories ── */
  const allTabs = [
    { key: "all", en: "All Images", ar: "كل الصور" },
    ...categories.map((c) =>
      typeof c === "string" ? { key: c, en: c, ar: c } : c,
    ),
  ];

  const filteredImages = images.filter((img) => {
    if (activeTab === "all") return true;
    const cat = img?.category?.en ?? img?.category ?? "";
    return cat === activeTab;
  });

  /* ── Modal nav helpers ── */
  const currentIdx = selectedImage?.id
    ? filteredImages.findIndex((img) => img.id === selectedImage.id)
    : -1;
  const hasPrev = currentIdx > 0;
  const hasNext = currentIdx < filteredImages.length - 1;

  /* ── Lightbox keyboard nav ── */
  const handleKey = useCallback(
    (e) => {
      if (!selectedImage) return;
      const idx = filteredImages.findIndex(
        (img) => img.id === selectedImage.id,
      );
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        const next = filteredImages[(idx + 1) % filteredImages.length];
        if (next) handleViewDetails(next.id);
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        const prev =
          filteredImages[
            (idx - 1 + filteredImages.length) % filteredImages.length
          ];
        if (prev) handleViewDetails(prev.id);
      }
      if (e.key === "Escape") setSelectedImage(null);
    },
    [selectedImage, filteredImages],
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  useEffect(() => {
    document.body.style.overflow = selectedImage !== null ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  /* ── Auto-scroll active thumbnail into view ── */
  useEffect(() => {
    if (selectedImage?.id) {
      const thumb = document.getElementById(`thumb-${selectedImage.id}`);
      if (thumb) {
        thumb.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [selectedImage?.id]);

  /* ─────────────────────────────────────────────────────── */
  return (
    <CommonLayout
      parent={isRTL ? "الرئيسية" : "Home"}
      title={isRTL ? "المعرض" : "Gallery"}>
      <Helmet>
        <title>{isRTL ? "معرض الصور | سعده" : "Photo Gallery | Seada"}</title>
        <meta
          name="description"
          content={
            isRTL
              ? "استكشف معرض سعده للأغذية العضوية الفاخرة والمنتجات الطازجة."
              : "Explore Seada's gallery of premium organic foods, fresh produce, and culinary artistry."
          }
        />
      </Helmet>

      <section
        className="seada-events-section"
        style={{ direction: isRTL ? "rtl" : "ltr" }}>
        <div className="container">
          {/* ── Header ── */}
          <div className="events-header-title">
            <h2>{isRTL ? "معرض صور سعده" : "Seada Photo Gallery"}</h2>
            <p>
              {isRTL
                ? "استكشف لحظات من الطبيعة، فن الطهي، وجمال الأغذية العضوية الفاخرة."
                : "Explore moments of nature, culinary artistry, and the beauty of premium organic living."}
            </p>
          </div>

          {/* ── Filter Tabs ── */}
          {allTabs.length > 1 && (
            <div className="events-filter-tabs">
              {allTabs.map((tab) => (
                <button
                  key={tab.key}
                  className={`filter-btn ${activeTab === tab.key ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.key)}>
                  {isRTL ? tab.ar : tab.en}
                </button>
              ))}
            </div>
          )}

          {/* ── Loading ── */}
          {imagesLoading && (
            <div className="text-center py-5">
              <div className="spinner-border" role="status">
                <span className="sr-only">
                  {isRTL ? "جاري التحميل..." : "Loading..."}
                </span>
              </div>
            </div>
          )}

          {/* ── Error ── */}
          {imagesError && (
            <div className="alert alert-danger text-center" role="alert">
              {imagesError}
            </div>
          )}

          {/* ── Empty ── */}
          {!imagesLoading && !imagesError && filteredImages.length === 0 && (
            <div className="alert alert-secondary text-center" role="alert">
              {isRTL
                ? "لا توجد صور في هذه الفئة حالياً."
                : "No images found in this category."}
            </div>
          )}

          {/* ── Two-Column Grid ── */}
          {!imagesLoading && !imagesError && filteredImages.length > 0 && (
            <div
              className="events-timeline-container"
              style={{
                display: "grid",
                gridTemplateColumns: isDesktop ? "1fr 1fr" : "1fr",
                gap: isDesktop ? "24px" : "16px",
              }}>
              {filteredImages.map((img) => (
                <div key={img.id} className="timeline-item">
                  <div className="timeline-node"></div>
                  <div
                    className="timeline-media-col"
                    style={{
                      maxWidth: "100%",
                      width: "100%",
                    }}>
                    <div className="timeline-media-container">
                      <div className="timeline-media-wrapper">
                        <img
                          src={getSrc(img)}
                          alt={getTitle(img) || (isRTL ? "صورة" : "Image")}
                          loading="lazy"
                          style={{ width: "100%", display: "block" }}
                        />
                        <div
                          className="video-play-overlay"
                          style={{ background: "rgba(0,0,0,0.28)" }}
                          onClick={() => handleViewDetails(img.id)}>
                          <div className="play-button-icon">
                            <i className="fa fa-search-plus"></i>
                          </div>
                        </div>
                      </div>
                      {getCategory(img) && (
                        <div className="timeline-date-badge-wrapper">
                          <div className="timeline-date-badge">
                            <i className="fa fa-tag"></i>
                            <span>{getCategory(img)}</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Fullscreen Lightbox Modal ── */}
      {selectedImage !== null && (
        <div
          onClick={() => setSelectedImage(null)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 99999999999999999,
            background: "rgba(0,0,0,0.93)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}>
          {/* Close */}
          <button
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              top: 16,
              right: isRTL ? "unset" : 16,
              left: isRTL ? 16 : "unset",
              width: 42,
              height: 42,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.35)",
              background: "rgba(0,0,0,0.5)",
              color: "#fff",
              fontSize: 18,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 10001,
            }}>
            <i className="fa fa-times"></i>
          </button>

          {/* Counter */}
          {currentIdx >= 0 && (
            <div
              style={{
                position: "fixed",
                top: 20,
                left: "50%",
                transform: "translateX(-50%)",
                color: "rgba(255,255,255,0.75)",
                fontSize: 13,
                zIndex: 10001,
                background: "rgba(0,0,0,0.45)",
                padding: "4px 14px",
                borderRadius: 20,
                direction: "ltr",
              }}>
              {currentIdx + 1} / {filteredImages.length}
            </div>
          )}

          {/* Main image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}>
            <img
              src={getSrc(selectedImage)}
              alt={getTitle(selectedImage) || (isRTL ? "صورة" : "Image")}
              style={{
                maxWidth: "100%",
                maxHeight: "calc(100vh - 130px)",
                objectFit: "contain",
                display: "block",
                userSelect: "none",
              }}
            />

            {/* Arrow Prev */}
            {hasPrev && (
              <button
                onClick={() =>
                  handleViewDetails(filteredImages[currentIdx - 1].id)
                }
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 16,
                  transform: "translateY(-50%)",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.35)",
                  background: "rgba(0,0,0,0.5)",
                  color: "#fff",
                  fontSize: 20,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10001,
                }}>
                <i
                  className={`fa ${isRTL ? "fa-angle-right" : "fa-angle-left"}`}></i>
              </button>
            )}

            {/* Arrow Next */}
            {hasNext && (
              <button
                onClick={() =>
                  handleViewDetails(filteredImages[currentIdx + 1].id)
                }
                style={{
                  position: "absolute",
                  top: "50%",
                  right: 16,
                  transform: "translateY(-50%)",
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  border: "1px solid rgba(255,255,255,0.35)",
                  background: "rgba(0,0,0,0.5)",
                  color: "#fff",
                  fontSize: 20,
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 10001,
                }}>
                <i
                  className={`fa ${isRTL ? "fa-angle-left" : "fa-angle-right"}`}></i>
              </button>
            )}
          </div>

          {/* Thumbnail Scroll Row */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              overflowX: "auto",
              display: "flex",
              gap: 8,
              padding: "10px 16px",
              background: "rgba(0,0,0,0.6)",
              flexShrink: 0,
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(255,255,255,0.3) transparent",
              direction: "ltr",
            }}>
            {filteredImages.map((img) => (
              <img
                key={img.id}
                id={`thumb-${img.id}`}
                src={getSrc(img)}
                alt={getTitle(img) || ""}
                onClick={() => handleViewDetails(img.id)}
                style={{
                  width: 72,
                  height: 52,
                  objectFit: "cover",
                  borderRadius: 6,
                  flexShrink: 0,
                  cursor: "pointer",
                  border:
                    selectedImage?.id === img.id
                      ? "2px solid #fff"
                      : "2px solid transparent",
                  opacity: selectedImage?.id === img.id ? 1 : 0.5,
                  transition: "opacity 0.2s, border-color 0.2s",
                }}
              />
            ))}
          </div>
        </div>
      )}
    </CommonLayout>
  );
};

export default GalleryPage;
