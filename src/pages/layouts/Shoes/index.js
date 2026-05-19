// pages/layouts/fashion/shoes.jsx — Company Profile Homepage
import React, { useEffect } from "react";

import Banner from "./components/Banner";
import AboutUs from "./components/About-us";
import Collections from "./components/Collections";
import Category from "./components/Category";
import WhyChooseUs from "./components/WhyChooseUs";
import ProcessSection from "./components/ProcessSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import SpecialProducts from "../../../components/common/Collections/Collection3";
import ServiceLayout from "../../../components/common/Service/service1";

import { Product4 } from "../../../services/script";
import { useLanguage } from "../../../helpers/Language/useLanguage";

const tr = (t, key, fallback) => {
  try {
    const v = t ? t(key) : "";
    return !v || v === key ? fallback : v;
  } catch {
    return fallback;
  }
};

const Shoes = () => {
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    // Set theme color to navy for corporate feel
    document.documentElement.style.setProperty("--theme-deafult", "#0F1B2D");
    document.documentElement.setAttribute("dir", isRTL ? "rtl" : "ltr");
  }, [isRTL]);

  const lblProductsTitle = tr(t, "home.collections.title", isRTL ? "منتجاتنا المميزة" : "Featured Products");
  const lblProductsSub = tr(t, "home.collections.subtitle", isRTL ? "استعراض المنتجات" : "Product Showcase");

  return (
    <>
      {/* 1. Hero / Banner */}
      <Banner />

      {/* 2. About Company */}
      <AboutUs />

      {/* 3. Featured Highlights (Collection Banners) */}
      <Collections />

      {/* 4. Product Categories */}
      <Category />

      {/* 5. Featured Products (display-only showcase) */}
      <SpecialProducts
        type="shoes"
        line
        innerClass="title3"
        inner="title-inner3"
        title={lblProductsTitle}
        subtitle={lblProductsSub}
        designClass="section-b-space p-t-0 ratio_asos"
        productSlider={Product4}
        noSlider="true"
        cartClass="cart-info"
      />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 7. Our Process */}
      <ProcessSection />

      {/* 8. Testimonials */}
      <TestimonialsSection />

      {/* 9. Contact Section */}
      <ContactSection />

      {/* 10. Services Strip */}
      <ServiceLayout sectionClass={"service border-section small-section border-top-0"} />

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/201234567890"
        target="_blank"
        rel="noreferrer"
        className="corp-whatsapp-float"
        aria-label="WhatsApp"
      >
        💬
      </a>
    </>
  );
};

export default Shoes;
