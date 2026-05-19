import { useEffect, useMemo, useState } from "react";
import Slider from "react-slick";
import { Container } from "reactstrap";
import Link from "@/router/NextLinkCompat";
import { getSlider } from "./../../../../actions/slider";
import { useLanguage } from "../../../../helpers/Language/useLanguage";
import StyleTag from "@/styles/StyleTag";

function apiOrigin() {
  const base = import.meta.env.VITE_API_URL || "";
  try {
    const u = new URL(base);
    return `${u.protocol}//${u.host}`;
  } catch {
    return "";
  }
}

function resolveSliderImage(item) {
  if (item?.image_path && item.image_path.startsWith("http")) return item.image_path;
  const origin = apiOrigin();
  const file = item?.image || "";
  return file ? `${origin}/images/${file}` : "";
}

function localizeHomeBanner(item, currentLanguage) {
  if (!item) return {};
  const tr = Array.isArray(item.translations)
    ? item.translations.find((x) => x?.locale?.startsWith(currentLanguage))
    : null;
  return {
    id: item.id,
    image: item.image,
    image_path: item.image_path,
    title: (tr && tr.title) || item.title || "",
    description: (tr && tr.description) || item.description || "",
    button_text: (tr && tr.button_text) || item.button_text || "",
  };
}

export default function Banner() {
  const [items, setItems] = useState([]);
  const { currentLanguage, isRTL } = useLanguage();

  useEffect(() => {
    (async () => {
      try {
        const res = await getSlider();
        if (Array.isArray(res)) setItems(res);
      } catch (e) {
        console.error("Error fetching sliders:", e);
      }
    })();
  }, []);

  const sliderSettings = useMemo(
    () => ({
      dots: true,
      arrows: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 6000,
      speed: 1000,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
      // ✅ FIX: fade:false في RTL لأن react-slick عنده bug معروف
      // مع fade:true في RTL بيحسب height بـ JS ويفشل لما الـ component
      // يكون mounted في RTL من الأول فبيخلي كل الـ slides بـ opacity:0
      fade: !isRTL,
      rtl: false, // مش بنستخدم rtl prop (buggy) — RTL بيتعمل عن طريق CSS dir بس
      cssEase: "cubic-bezier(0.16, 1, 0.3, 1)",
    }),
    [isRTL]
  );

  if (items.length === 0) return null;

  return (
    <section
      className={`premium-slider-hero ${isRTL ? "rtl" : ""}`}
      id="home"
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/*
        key بيتغير عشان الـ slider يتعمل remount لما fade يتغير (RTL ↔ LTR)
        لأن react-slick مش بيحدث fade prop بعد الـ mount
      */}
      <Slider
        key={isRTL ? "rtl" : "ltr"}
        className="premium-hero-slider"
        {...sliderSettings}
      >
        {items.map((item) => {
          const localized = localizeHomeBanner(item, currentLanguage);
          const img =
            resolveSliderImage(localized) || "/assets/images/placeholder.png";
          return (
            <div key={localized.id}>
              <div
                className="premium-hero-slide"
                style={{ backgroundImage: `url(${img})` }}
              >
                <div className="premium-hero-overlay" />
                <Container className="h-100 d-flex align-items-center justify-content-center">
                  <div className="premium-hero-content-box corp-animate-up">
                    <span className="premium-hero-badge">
                      {localized.title ||
                        (isRTL
                          ? "التميز في كل التفاصيل"
                          : "Excellence in Every Detail")}
                    </span>
                    <h1 className="premium-hero-title">
                      {localized.description ||
                        (isRTL
                          ? "شريكك الموثوق في المنتجات عالية الجودة."
                          : "Your Trusted Partner for Premium Products.")}
                    </h1>
                    <div className="premium-hero-actions">
                      <Link
                        href="/products"
                        className="corp-btn corp-btn-primary corp-btn-lg"
                      >
                        {localized.button_text ||
                          (isRTL ? "استكشف الكتالوج" : "Explore Catalog")}
                      </Link>
                    </div>
                  </div>
                </Container>
              </div>
            </div>
          );
        })}
      </Slider>

      <StyleTag
        global
        css={`
          .premium-slider-hero {
            position: relative;
            overflow: hidden;
            background: var(--corp-navy);
            height: 100vh;
            min-height: 600px;
          }

          .premium-hero-slider {
            height: 100vh;
            min-height: 600px;
          }

          .premium-hero-slider .slick-list,
          .premium-hero-slider .slick-track {
            height: 100% !important;
          }

          .premium-hero-slider .slick-slide > div {
            height: 100vh;
            min-height: 600px;
          }

          /* ✅ ضمان إن الـ active slide دايماً يظهر في RTL و LTR */
          .premium-hero-slider .slick-slide.slick-active {
            visibility: visible !important;
            opacity: 1 !important;
          }

          .premium-hero-slide {
            position: relative;
            height: 100vh;
            min-height: 600px;
            background-size: cover;
            background-position: center;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .premium-hero-overlay {
            position: absolute;
            inset: 0;
            background: rgba(15, 23, 42, 0.4);
            z-index: 1;
          }

          .premium-hero-slide .container {
            position: relative;
            z-index: 2;
          }

          .premium-hero-content-box {
            background: rgba(15, 23, 42, 0.65);
            backdrop-filter: blur(16px);
            -webkit-backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.15);
            border-radius: var(--corp-radius-xl);
            padding: 60px 40px;
            max-width: 800px;
            text-align: center;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          }

          .premium-hero-badge {
            display: inline-block;
            font-family: var(--font-heading);
            font-size: 0.95rem;
            font-weight: 800;
            letter-spacing: 0.15em;
            text-transform: uppercase;
            color: var(--corp-accent-light);
            margin-bottom: 24px;
          }

          .premium-hero-title {
            font-family: var(--font-heading);
            font-size: clamp(2.5rem, 5vw, 4rem);
            font-weight: 900;
            color: var(--corp-white);
            line-height: 1.2;
            margin-bottom: 40px;
          }

          .premium-hero-actions {
            display: flex;
            justify-content: center;
            gap: 20px;
          }

          .premium-slider-hero .slick-dots {
            bottom: 40px;
            z-index: 3;
          }
          .premium-slider-hero .slick-dots li {
            margin: 0 8px;
          }
          .premium-slider-hero .slick-dots li button:before {
            content: '';
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            opacity: 1;
            transition: all 0.3s ease;
          }
          .premium-slider-hero .slick-dots li.slick-active button:before {
            background: var(--corp-white);
            transform: scale(1.3);
          }

          @media (max-width: 768px) {
            .premium-hero-content-box {
              padding: 40px 20px;
              margin: 0 20px;
            }
          }
        `}
      />
    </section>
  );
}