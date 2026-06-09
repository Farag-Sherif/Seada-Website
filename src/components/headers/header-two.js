import React, { useEffect, useState } from "react";
import { Container } from "reactstrap";
import Link from "@/router/NextLinkCompat";
import { useRouter } from "@/router/useRouter";

import { logout } from "../../actions/auth";
import LogoImage from "./common/logo";
import SideBar from "./common/sidebar";
import StyleTag from "@/styles/StyleTag";
import { useLanguage } from "../../helpers/Language/useLanguage";
import LanguageSwitcher from "../common/LanguageSwitcher";

const readAuthUser = () => {
  if (typeof window === "undefined") return null;
  try {
    const raw =
      localStorage.getItem("authUser") || localStorage.getItem("user");
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
};

const NAV_LINKS = [
  { href: "/", labelEn: "Home", labelAr: "الرئيسية" },
  { href: "/about", labelEn: "About Us", labelAr: "من نحن" },
  { href: "/products", labelEn: "Products", labelAr: "المنتجات" },
  { href: "/events", labelEn: "Events", labelAr: "الفعاليات" },
  { href: "/gallery", labelEn: "Gallery", labelAr: "المعرض" },
  { href: "/consultation", labelEn: "Consultation", labelAr: "استشارة" },
  { href: "/contact", labelEn: "Contact Us", labelAr: "تواصل معنا" },
];

const HeaderTwo = ({ logoName, headerClass }) => {
  const router = useRouter();
  const { isRTL } = useLanguage();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      document
        .querySelectorAll(".loader-wrapper")
        .forEach((el) => (el.style.display = "none"));
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  // Close mobile menu on scroll
  useEffect(() => {
    if (mobileOpen) {
      const close = () => setMobileOpen(false);
      window.addEventListener("scroll", close, { passive: true });
      return () => window.removeEventListener("scroll", close);
    }
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    if (href.startsWith("/#") || href.startsWith("#")) {
      const id = href.replace("/#", "").replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setMobileOpen(false);
    } else {
      setMobileOpen(false);
    }
  };

  const isInternal = router.pathname !== "/";

  return (
    <div>
      <header
        className={`corp-header ${headerClass || ""} ${scrolled || isInternal ? "is-scrolled" : ""}`}>
        <Container>
          <div className="corp-header-inner">
            {/* Logo */}
            <div className="corp-header-logo">
              <LogoImage logo={logoName} />
            </div>

            {/* Desktop Navigation — hidden below xl */}
            <nav className="corp-nav d-none d-xl-flex">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="corp-nav-link"
                  onClick={(e) => handleNavClick(e, item.href)}>
                  {isRTL ? item.labelAr : item.labelEn}
                </Link>
              ))}
            </nav>

            {/* Desktop Actions — hidden below xl */}
            <div className="corp-header-actions d-none d-xl-flex">
              <LanguageSwitcher showLabel={false} />
              <Link
                to="/contact"
                className="corp-btn corp-btn-primary corp-btn-sm"
                onClick={(e) => handleNavClick(e, "/contact")}>
                {isRTL ? "طلب عرض سعر" : "Get a Quote"}
              </Link>
            </div>

            {/* Hamburger — visible below xl */}
            <button
              className="corp-mobile-toggle d-xl-none"
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={isRTL ? "فتح القائمة" : "Open menu"}>
              <span className={mobileOpen ? "open" : ""} />
              <span className={mobileOpen ? "open" : ""} />
              <span className={mobileOpen ? "open" : ""} />
            </button>
          </div>
        </Container>

        {/* Mobile / Tablet dropdown */}
        <div
          className={`corp-mobile-menu d-xl-none ${mobileOpen ? "open" : ""}`}>
          <Container>
            <nav className="corp-mobile-nav">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="corp-mobile-nav-link"
                  onClick={(e) => handleNavClick(e, item.href)}>
                  {isRTL ? item.labelAr : item.labelEn}
                </Link>
              ))}
              <div
                style={{
                  padding: "0 16px",
                  marginTop: "8px",
                  marginBottom: "8px",
                }}>
                <LanguageSwitcher showLabel={false} />
              </div>
              <Link
                to="/contact"
                className="corp-btn corp-btn-primary corp-btn-sm"
                onClick={(e) => handleNavClick(e, "/contact")}
                style={{
                  marginTop: 12,
                  width: "100%",
                  justifyContent: "center",
                }}>
                {isRTL ? "طلب عرض سعر" : "Get a Quote"}
              </Link>
            </nav>
          </Container>
        </div>
      </header>

      <SideBar />

      <StyleTag
        global
        css={`
          /* ── Language Switcher (desktop) ── */
          .corp-header-actions .language-switcher,
          .corp-header-actions .language-switcher select,
          .corp-header-actions .language-switcher button {
            color: rgba(15, 23, 42, 0.8) !important;
            background: transparent !important;
            border: 1px solid rgba(15, 23, 42, 0.2) !important;
            border-radius: var(--corp-radius-full) !important;
            font-size: 0.85rem !important;
            padding: 6px 14px !important;
          }

          /* ── Hamburger button ── */
          .corp-mobile-toggle {
            width: 44px;
            height: 44px;
            display: inline-flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 6px;
            background: rgba(15, 23, 42, 0.05);
            border: 1px solid rgba(15, 23, 42, 0.1);
            border-radius: var(--corp-radius-md);
            padding: 10px;
            cursor: pointer;
            transition: background 0.2s ease;
          }
          .corp-mobile-toggle:hover {
            background: rgba(15, 23, 42, 0.1);
          }
          .corp-mobile-toggle span {
            display: block;
            width: 20px;
            height: 2px;
            background: var(--corp-navy);
            border-radius: 2px;
            transition: all 0.3s ease;
          }
          .corp-mobile-toggle span.open:nth-child(1) {
            transform: rotate(45deg) translate(5px, 5px);
          }
          .corp-mobile-toggle span.open:nth-child(2) {
            opacity: 0;
            transform: scaleX(0);
          }
          .corp-mobile-toggle span.open:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -5px);
          }

          /* ── Mobile / Tablet dropdown menu ── */
          .corp-mobile-menu {
            max-height: 0;
            overflow: hidden;
            background: linear-gradient(
              135deg,
              var(--corp-navy-light) 0%,
              var(--corp-navy) 100%
            );
            backdrop-filter: blur(20px);
            transition:
              max-height 0.4s var(--corp-ease),
              padding 0.4s var(--corp-ease);
            padding: 0;
          }
          .corp-mobile-menu.open {
            max-height: 700px;
            padding: 16px 0 28px;
          }

          /* ── Nav links inside dropdown ── */
          .corp-mobile-nav {
            display: flex;
            flex-direction: column;
            gap: 2px;
          }
          .corp-mobile-nav-link {
            display: block;
            padding: 14px 16px;
            color: rgba(255, 255, 255, 0.85) !important;
            font-weight: 600;
            font-size: 1rem;
            text-decoration: none !important;
            border-radius: var(--corp-radius-md);
            transition:
              background 0.25s ease,
              color 0.25s ease;
            border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          }
          .corp-mobile-nav-link:last-of-type {
            border-bottom: none;
          }
          .corp-mobile-nav-link:hover,
          .corp-mobile-nav-link:focus {
            background: rgba(255, 255, 255, 0.1);
            color: var(--corp-white) !important;
            padding-inline-start: 22px;
          }

          /* ── Tablet: slightly larger nav links ── */
          @media (min-width: 576px) and (max-width: 1199px) {
            .corp-mobile-nav-link {
              font-size: 1.05rem;
              padding: 16px 20px;
            }
            .corp-mobile-menu.open {
              padding: 20px 0 32px;
            }
          }

          /* ── Mobile Language Switcher ── */
          .corp-mobile-nav .language-switcher select {
            color: rgba(255, 255, 255, 0.9) !important;
            background: rgba(255, 255, 255, 0.1) !important;
            border: 1px solid rgba(255, 255, 255, 0.2) !important;
            border-radius: var(--corp-radius-full) !important;
            font-size: 0.9rem !important;
            padding: 8px 16px !important;
            width: 100%;
          }
          .corp-mobile-nav .language-switcher option {
            color: #000 !important;
          }

          /* ── Misc ── */
          body {
            padding-top: 0 !important;
          }
          .seada-header {
            display: none !important;
          }
          .seada-utility-bar {
            display: none !important;
          }
          .seada-main-bar {
            display: none !important;
          }
        `}
      />
    </div>
  );
};

export default HeaderTwo;
