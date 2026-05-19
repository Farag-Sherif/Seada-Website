import React, { useEffect } from "react";
import CommonLayout from "../components/shop/common-layout";
import { useLanguage } from "../helpers/Language/useLanguage";

// Import the components we built for the corporate homepage
import AboutUsSection from "./layouts/Shoes/components/About-us";
import ProcessSection from "./layouts/Shoes/components/ProcessSection";
import WhyChooseUs from "./layouts/Shoes/components/WhyChooseUs";
import TestimonialsSection from "./layouts/Shoes/components/TestimonialsSection";

const AboutPage = () => {
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <CommonLayout parent="Home" title={isRTL ? "من نحن" : "About Us"}>
      {/* 
        We reuse the beautifully redesigned corporate components 
        but remove their top padding/margin if they had an ID for homepage anchors.
      */}
      <div className="about-page-wrapper" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
        
        {/* Intro */}
        <AboutUsSection />

        {/* Process */}
        <ProcessSection />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Testimonials */}
        <TestimonialsSection />
      </div>
    </CommonLayout>
  );
};

export default AboutPage;
