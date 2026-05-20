// components/footers/common/MasterFooter.js — Corporate Footer
import React, { useEffect, useState } from "react";
import Link from "@/router/NextLinkCompat";
import { Container, Row, Col } from "reactstrap";
import LogoImage from "../../headers/common/logo";
import CopyRight from "./copyright";
import { useLanguage } from "../../../helpers/Language/useLanguage";
import {
  getSocialLinks,
  getSettings,
  getPhone,
  getEmail,
  getAddress,
} from "../../../actions/main";
import StyleTag from "@/styles/StyleTag";

const tr = (t, key, fallback) => {
  try {
    const v = t ? t(key) : "";
    return !v || v === key ? fallback : v;
  } catch {
    return fallback;
  }
};

const pickTrFromSettings = (settings, isRTL, key) => {
  if (!settings) return undefined;
  const trans = Array.isArray(settings?.translations) ? settings.translations : [];
  const m = trans.find((x) => x?.locale === (isRTL ? "ar" : "en")) || trans.find((x) => x?.locale);
  return (m && m[key]) || settings[key];
};

const asArray = (res) =>
  Array.isArray(res) ? res : Array.isArray(res?.data) ? res.data : Array.isArray(res?.data?.data) ? res.data.data : [];
const pickStr = (v) => (typeof v === "string" ? v : v == null ? "" : String(v?.value ?? v?.name ?? v?.title ?? v?.text ?? ""));
const extractPhone = (x) => pickStr(x?.mobile ?? x?.phone ?? x?.number ?? x);
const extractEmail = (x) => pickStr(x?.email ?? x?.mail ?? x?.value ?? x);
const extractAddress = (x) => pickStr(x?.full_address ?? x?.address ?? [x?.street, x?.city, x?.country].filter(Boolean).join(", "));
const coalesce = (...vals) => vals.find((v) => v !== undefined && v !== null && v !== "");

const MasterFooter = ({
  containerFluid,
  logoName,
  layoutClass,
  footerClass,
  CopyRightFluid,
}) => {
  const { t, isRTL } = useLanguage();

  const [appSettings, setAppSettings] = useState(null);
  const [aboutIntro, setAboutIntro] = useState("");
  const [socials, setSocials] = useState([]);
  const [phones, setPhones] = useState([]);
  const [emails, setEmails] = useState([]);
  const [addresses, setAddresses] = useState([]);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const [sRes, slRes, phRes, emRes, adRes] = await Promise.all([
          getSettings?.().catch(() => null),
          getSocialLinks?.().catch(() => null),
          getPhone?.().catch(() => null),
          getEmail?.().catch(() => null),
          getAddress?.().catch(() => null),
        ]);
        if (!mounted) return;

        const settings = sRes?.settings ?? sRes ?? null;
        setAppSettings(settings);

        const intro =
          pickTrFromSettings(settings, isRTL, "about_section_introduction") ||
          pickTrFromSettings(settings, isRTL, "about_us") ||
          "";
        setAboutIntro(intro);

        const sFromSettings =
          (Array.isArray(settings?.socials) && settings.socials) ||
          (Array.isArray(settings?.socails) && settings.socails) ||
          (Array.isArray(settings?.social_links) && settings.social_links) ||
          [];
        setSocials(sFromSettings.length ? sFromSettings : Array.isArray(slRes) ? slRes : []);

        setPhones(asArray(phRes).map(extractPhone).filter(Boolean));
        setEmails(asArray(emRes).map(extractEmail).filter(Boolean));
        setAddresses(asArray(adRes).map(extractAddress).filter(Boolean));
      } catch { /* silent */ }
    })();
    return () => { mounted = false; };
  }, [isRTL]);

  const storeBlob = appSettings?.store || appSettings?.settings || appSettings || {};
  const storeAddress = addresses[0] || coalesce(storeBlob?.address, storeBlob?.location) || "";
  const storePhone = phones[0] || coalesce(storeBlob?.phone, storeBlob?.mobile) || "";
  const storeEmail = emails[0] || coalesce(storeBlob?.email) || "";

  const quickLinks = [
    { label: isRTL ? "الرئيسية" : "Home", href: "/" },
    { label: isRTL ? "من نحن" : "About Us", href: "/about" },
    { label: isRTL ? "المنتجات" : "Products", href: "/products" },
    { label: isRTL ? "استشارة" : "Consultation", href: "/consultation" },
    { label: isRTL ? "تواصل معنا" : "Contact", href: "/contact" },
  ];

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <footer className="corp-footer">
        <div className="corp-footer-top-bar" />
        <Container fluid={containerFluid || ""}>
          <Row className="corp-footer-grid">
            {/* Company Info */}
            <Col lg="4" md="6" className="mb-4">
              <div className="corp-footer-about">
                <div className="corp-footer-logo">
                  <LogoImage logo={logoName} />
                </div>
                <p className="corp-footer-desc">
                  {isRTL
                    ? "شركة رائدة في تصنيع وتوريد المنتجات عالية الجودة. نقدم مجموعة واسعة من المنتجات المصممة لتلبية متطلبات الشركات والمؤسسات."
                    : "A leading B2B company in manufacturing and supplying premium quality products. We provide tailored solutions to meet the demands of corporate clients and institutions."}
                </p>
                <div className="corp-footer-social">
                  {socials.map((s, i) => (
                    <a
                      key={s?.id || i}
                      href={s?.url || s?.link || "#"}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`social-${s?.id || i}`}
                    >
                      {s?.icon_path || s?.icon ? (
                        <img src={s.icon_path || s.icon} alt="social" width={18} height={18} />
                      ) : (
                        <i className="fa fa-external-link" aria-hidden="true" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </Col>

            {/* Quick Links */}
            <Col lg="2" md="3" sm="6" className="mb-4">
              <h5 className="corp-footer-heading">{isRTL ? "روابط سريعة" : "Quick Links"}</h5>
              <ul className="corp-footer-links">
                {quickLinks.map((l, i) => (
                  <li key={i}>
                    <a href={l.href}>{l.label}</a>
                  </li>
                ))}
              </ul>
            </Col>

            {/* Services */}
            <Col lg="2" md="3" sm="6" className="mb-4">
              <h5 className="corp-footer-heading">{isRTL ? "خدماتنا" : "Services"}</h5>
              <ul className="corp-footer-links">
                <li><a href="/products">{isRTL ? "كتالوج المنتجات" : "Product Catalog"}</a></li>
                <li><a href="/#process">{isRTL ? "عملية التصنيع" : "Manufacturing"}</a></li>
                <li><a href="/#why-us">{isRTL ? "ضمان الجودة" : "Quality Assurance"}</a></li>
                <li><a href="/contact">{isRTL ? "طلب عرض سعر" : "Request a Quote"}</a></li>
              </ul>
            </Col>

            {/* Contact Info */}
            <Col lg="4" md="6" className="mb-4">
              <h5 className="corp-footer-heading">{isRTL ? "معلومات التواصل" : "Contact Info"}</h5>
              <ul className="corp-footer-contact">
                {storeAddress && (
                  <li>
                    <i className="fa fa-map-marker" aria-hidden="true" />
                    <span>{storeAddress}</span>
                  </li>
                )}
                {storePhone && (
                  <li>
                    <i className="fa fa-phone" aria-hidden="true" />
                    <a href={`tel:${storePhone.replace(/\s/g, "")}`}>{storePhone}</a>
                  </li>
                )}
                {storeEmail && (
                  <li>
                    <i className="fa fa-envelope-o" aria-hidden="true" />
                    <a href={`mailto:${storeEmail}`}>{storeEmail}</a>
                  </li>
                )}
              </ul>
            </Col>
          </Row>
        </Container>

        <CopyRight layout={layoutClass} fluid={CopyRightFluid || ""} />

        <StyleTag global css={`
          .corp-footer {
            background: linear-gradient(180deg, var(--corp-navy) 0%, #020617 100%) !important;
            color: rgba(255, 255, 255, 0.7);
            border-top: none !important;
            position: relative;
            overflow: hidden;
            margin-bottom: 0 !important;
          }
          .corp-footer::before { display: none; }
          .corp-footer-top-bar {
            height: 4px;
            background: var(--corp-accent-gradient);
          }
          .corp-footer-grid {
            padding: 80px 0 60px;
          }
          .corp-footer-logo {
            margin-bottom: 24px;
          }
          .corp-footer-logo img {
            height: 50px !important;
            width: auto;
            filter: brightness(0) invert(1);
          }
          .corp-footer-desc {
            font-size: 0.95rem;
            line-height: 1.8;
            color: rgba(255, 255, 255, 0.6);
            margin-bottom: 30px;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
          .corp-footer-social {
            display: flex;
            gap: 12px;
          }
          .corp-footer-social a {
            width: 44px;
            height: 44px;
            display: grid;
            place-items: center;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.1);
            color: rgba(255, 255, 255, 0.8);
            transition: all var(--corp-duration) var(--corp-ease-spring);
            font-size: 16px;
            text-decoration: none !important;
          }
          .corp-footer-social a:hover {
            background: var(--corp-accent-gradient);
            color: var(--corp-white);
            border-color: transparent;
            transform: translateY(-4px);
            box-shadow: 0 4px 15px rgba(59, 130, 246, 0.3);
          }
          .corp-footer-social a img {
            width: 18px;
            height: 18px;
            filter: brightness(0) invert(0.8);
            transition: filter 0.3s ease;
          }
          .corp-footer-social a:hover img {
            filter: brightness(0) invert(1);
          }
          .corp-footer-heading {
            font-family: var(--font-heading);
            font-size: 1.1rem;
            font-weight: 800;
            color: var(--corp-white);
            margin-bottom: 24px;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }
          .corp-footer-links {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
          .corp-footer-links li a {
            color: rgba(255, 255, 255, 0.6) !important;
            text-decoration: none !important;
            font-size: 0.95rem;
            transition: all 0.3s ease;
            position: relative;
            display: inline-block;
          }
          .corp-footer-links li a:hover {
            color: var(--corp-white) !important;
            transform: translateX(${isRTL ? "-6px" : "6px"});
          }
          .corp-footer-contact {
            list-style: none;
            padding: 0;
            margin: 0;
          }
          .corp-footer-contact li {
            display: flex;
            align-items: flex-start;
            gap: 16px;
            margin-bottom: 20px;
            font-size: 0.95rem;
            color: rgba(255, 255, 255, 0.7);
            line-height: 1.6;
          }
          .corp-footer-contact li i {
            color: var(--corp-accent);
            font-size: 1.2rem;
            margin-top: 2px;
            min-width: 20px;
          }
          .corp-footer-contact li a {
            color: rgba(255, 255, 255, 0.7) !important;
            text-decoration: none !important;
            transition: color 0.3s ease;
          }
          .corp-footer-contact li a:hover {
            color: var(--corp-white) !important;
          }
          /* Copyright area */
          .corp-footer .sub-footer,
          .corp-footer .footer-end {
            border-top: 1px solid rgba(255, 255, 255, 0.1) !important;
            background: transparent !important;
            padding: 20px 0;
          }
          .corp-footer .sub-footer p,
          .corp-footer .footer-end p,
          .corp-footer .sub-footer a,
          .corp-footer .footer-end a {
            color: rgba(255, 255, 255, 0.5) !important;
            font-size: 0.85rem;
          }
          /* Old footer overrides */
          footer.footer-light {
            background: transparent !important;
          }
          .light-layout {
            background: transparent !important;
          }
          .partition-f {
            display: none !important;
          }
          .footer-theme { display: none !important; }
        `} />
      </footer>
    </div>
  );
};

export default MasterFooter;
