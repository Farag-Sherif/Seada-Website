import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "@/router/NextLinkCompat";
import { getCategories } from "../../../actions/categories";
import { useLanguage } from "../../../helpers/Language/useLanguage";
import StyleTag from "@/styles/StyleTag";

const localizedName = (node, isRTL) => {
  const list = Array.isArray(node?.translations) ? node.translations : [];
  const target = isRTL ? "ar" : "en";
  return list.find((x) => x?.locale === target)?.name || list.find((x) => x?.locale)?.name || node?.name || "";
};

const childrenOf = (node) => {
  const pools = [node?.sub_categories, node?.subCategories, node?.children, node?.subs, node?.sub_cats];
  return pools.find(Array.isArray) || [];
};

const pickIcon = (label = "") => {
  const value = String(label).toLowerCase();
  if (value.includes("fruit") || value.includes("vegetable") || value.includes("خض")) return "🍎";
  if (value.includes("meat") || value.includes("poultry") || value.includes("لحوم")) return "🥩";
  if (value.includes("dairy") || value.includes("egg") || value.includes("ألبان") || value.includes("بيض")) return "🥛";
  if (value.includes("bakery") || value.includes("مخبوز")) return "🥖";
  if (value.includes("beverage") || value.includes("مشروب")) return "🥤";
  return "•";
};

const SideBar = () => {
  const { t, isRTL } = useLanguage();
  const panelRef = useRef(null);
  const [categories, setCategories] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [expandedId, setExpandedId] = useState(null);

  const close = () => setIsOpen(false);

  useEffect(() => {
    let mounted = true;
    (async () => {
      try {
        const res = await getCategories();
        const raw = Array.isArray(res?.data) ? res.data : Array.isArray(res) ? res : [];
        if (!mounted) return;
        setCategories(raw.slice(0, 8));
        setExpandedId(raw[0]?.id ?? null);
      } catch {
        if (!mounted) return;
        setCategories([]);
      }
    })();
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && close();
    const handleOpen = () => setIsOpen(true);
    
    document.addEventListener("keydown", onKey);
    window.addEventListener("open-sidebar", handleOpen);
    
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("open-sidebar", handleOpen);
    };
  }, []);

  // Use the new corporate navigation links
  const quickLinks = useMemo(() => ([
    { href: "/", label: isRTL ? "الرئيسية" : "Home", icon: "🏠" },
    { href: "/about", label: isRTL ? "من نحن" : "About Us", icon: "🏢" },
    { href: "/products", label: isRTL ? "المنتجات" : "Products", icon: "📦" },
    { href: "/events", label: isRTL ? "الفعاليات" : "Events", icon: "📅" },
    { href: "/consultation", label: isRTL ? "استشارة" : "Consultation", icon: "🤝" },
    { href: "/contact", label: isRTL ? "تواصل معنا" : "Contact", icon: "✉️" },
  ]), [isRTL]);

  const handleNavClick = (e, href) => {
    if (href.startsWith("/#") || href.startsWith("#")) {
      e.preventDefault();
      const id = href.replace("/#", "").replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      } else {
        window.location.href = href;
      }
      close();
    }
  };

  return (
    <>
      <div id="mySidenav" className={`seada-sidebar-root ${isOpen ? "open-side" : ""}`} dir={isRTL ? "rtl" : "ltr"} aria-hidden={!isOpen}>
        <div className="seada-sidebar-backdrop" onClick={close} />
        <aside ref={panelRef} className="seada-sidebar-panel" role="dialog" aria-modal="true">
          <div className="seada-sidebar-head">
            <a href="/" className="seada-sidebar-logo" onClick={close}>
              <img src="/assets/images/icon/logo/6.png" alt="Seada" style={{ filter: "brightness(0) invert(0)" }} />
            </a>
            <button className="seada-sidebar-close" onClick={close} aria-label={isRTL ? "إغلاق" : "Close sidebar"}>×</button>
          </div>

          <div className="seada-sidebar-quicklinks">
            <h5 className="sidebar-section-title">{isRTL ? "القائمة الرئيسية" : "Main Menu"}</h5>
            {quickLinks.map((item) => (
              <a key={item.href} href={item.href} onClick={(e) => handleNavClick(e, item.href)} className="seada-sidebar-link secondary">
                <span className="seada-sidebar-emoji">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          <div className="seada-sidebar-list" style={{ marginTop: 24 }}>
            <h5 className="sidebar-section-title">{isRTL ? "فئات المنتجات" : "Product Categories"}</h5>
            {categories.map((item) => {
              const label = localizedName(item, isRTL);
              const children = childrenOf(item);
              const open = String(expandedId ?? "") === String(item?.id ?? "");
              return (
                <div key={item?.id || label} className="seada-sidebar-group">
                  <button
                    className={`seada-sidebar-link ${open ? "active" : ""}`}
                    type="button"
                    onClick={() => setExpandedId(open ? null : item?.id)}
                  >
                    <span className="seada-sidebar-emoji">{pickIcon(label)}</span>
                    <span>{label}</span>
                    <i className={`fa ${open ? "fa-angle-up" : "fa-angle-down"}`} aria-hidden="true" />
                  </button>
                  {open && children.length ? (
                    <div className="seada-sidebar-children">
                      {children.slice(0, 5).map((child) => (
                        <Link key={child?.id || localizedName(child, isRTL)} href={`/shop/sidebar_popup?category_id=${encodeURIComponent(child?.id || item?.id || "")}`} onClick={close}>
                          {localizedName(child, isRTL)}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>

        </aside>
      </div>

      <StyleTag global css={`
        .seada-sidebar-root {
          position: fixed;
          inset: 0;
          visibility: hidden;
          pointer-events: none;
          z-index: var(--z-modal);
        }
        .seada-sidebar-root.open-side {
          visibility: visible;
          pointer-events: auto;
        }
        .seada-sidebar-backdrop {
          position: absolute;
          inset: 0;
          background: rgba(15, 27, 45, 0.5);
          backdrop-filter: blur(4px);
          opacity: 0;
          transition: opacity .3s ease;
          cursor: pointer;
        }
        .seada-sidebar-root.open-side .seada-sidebar-backdrop {
          opacity: 1;
        }
        .seada-sidebar-panel {
          position: absolute;
          top: 0;
          left: 0;
          width: min(86vw, 360px);
          height: 100%;
          background: var(--corp-white);
          transform: translateX(-100%);
          transition: transform .4s cubic-bezier(0.165, 0.84, 0.44, 1);
          box-shadow: var(--corp-shadow-xl);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
          overflow-y: auto;
        }
        [dir="rtl"] .seada-sidebar-panel {
          left: auto;
          right: 0;
          transform: translateX(100%);
        }
        .seada-sidebar-root.open-side .seada-sidebar-panel {
          transform: translateX(0);
        }
        .seada-sidebar-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          margin-bottom: 12px;
        }
        .seada-sidebar-logo img {
          height: 48px;
          width: auto;
        }
        .seada-sidebar-close {
          width: 40px;
          height: 40px;
          border-radius: var(--corp-radius-md);
          border: 1px solid var(--corp-gray-200);
          background: var(--corp-gray-50);
          font-size: 24px;
          color: var(--corp-navy);
          line-height: 1;
          transition: all 0.2s ease;
        }
        .seada-sidebar-close:hover {
          background: var(--corp-gray-200);
        }
        
        .sidebar-section-title {
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          color: var(--corp-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 12px;
          padding-inline-start: 4px;
        }

        .seada-sidebar-list,
        .seada-sidebar-quicklinks {
          display: grid;
          gap: 8px;
        }
        .seada-sidebar-group {
          border-bottom: 1px solid var(--corp-gray-100);
          padding-bottom: 8px;
        }
        .seada-sidebar-link {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 12px 14px;
          border-radius: var(--corp-radius-lg);
          border: 0;
          background: transparent;
          text-decoration: none !important;
          color: var(--corp-navy);
          font-weight: 600;
          font-size: 0.95rem;
          text-align: inherit;
          transition: all 0.2s ease;
          cursor: pointer;
        }
        .seada-sidebar-link.active,
        .seada-sidebar-link:hover {
          background: var(--corp-gold-glow);
          color: var(--corp-gold-dark);
        }
        .seada-sidebar-link.secondary {
          border-radius: var(--corp-radius-md);
        }
        .seada-sidebar-link i:last-child {
          margin-inline-start: auto;
          color: var(--corp-text-muted);
        }
        .seada-sidebar-link:hover i:last-child {
          color: var(--corp-gold-dark);
        }
        .seada-sidebar-emoji {
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border-radius: 10px;
          background: var(--corp-gray-50);
          flex-shrink: 0;
          font-size: 16px;
          transition: background 0.2s ease;
        }
        .seada-sidebar-link:hover .seada-sidebar-emoji {
          background: var(--corp-white);
          box-shadow: var(--corp-shadow-sm);
        }
        .seada-sidebar-children {
          display: grid;
          gap: 10px;
          padding: 8px 14px 8px 64px;
        }
        [dir="rtl"] .seada-sidebar-children {
          padding: 8px 64px 8px 14px;
        }
        .seada-sidebar-children a {
          text-decoration: none !important;
          color: var(--corp-text-secondary);
          font-size: 0.9rem;
          font-weight: 500;
          transition: color 0.2s ease;
        }
        .seada-sidebar-children a:hover {
          color: var(--corp-gold-dark);
        }
      `} />
    </>
  );
};

export default SideBar;
