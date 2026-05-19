import React, { useEffect } from "react";
import CommonLayout from "../components/shop/common-layout";
import { useLanguage } from "../helpers/Language/useLanguage";

import ContactSection from "./layouts/Shoes/components/ContactSection";

const ContactPage = () => {
  const { t, isRTL } = useLanguage();

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <CommonLayout parent="Home" title={isRTL ? "تواصل معنا" : "Contact Us"}>
      <div className="contact-page-wrapper" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
        <ContactSection />
      </div>
    </CommonLayout>
  );
};

export default ContactPage;
