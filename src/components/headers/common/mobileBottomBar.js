import { useContext, useMemo } from "react";
import Link from "@/router/NextLinkCompat";
import { useRouter } from "@/router/useRouter";
import { useLanguage } from "../../../helpers/Language/useLanguage";
import StyleTag from "@/styles/StyleTag";
import CartContext from "../../../helpers/cart";

export default function MobileBottomBar() {
  const router = useRouter();
  const { isRTL, t } = useLanguage();
  const cartCtx = useContext(CartContext);
  const cartCount = Array.isArray(cartCtx?.state) ? cartCtx.state.length : 0;

  const isLoggedIn = useMemo(() => {
    if (typeof window === "undefined") return false;
    return Boolean(localStorage.getItem("authToken"));
  }, []);

  const accountHref = isLoggedIn ? "/page/account/dashboard" : "/page/account/login-auth";

  const items = [
    { href: "/", icon: "fa-home", label: t("home") || (isRTL ? "الرئيسية" : "Home") },
    { href: "/shop/sidebar_popup", icon: "fa-th-large", label: isRTL ? "الأقسام" : "Categories" },
    { href: "/page/account/cart", icon: "fa-shopping-cart", label: t("cart") || (isRTL ? "السلة" : "Cart"), badge: cartCount },
    { href: accountHref, icon: "fa-user-o", label: t("my_account") || (isRTL ? "حسابي" : "Account") },
  ];

  return (
    <>
      <nav className="seada-mobile-bottom d-lg-none" role="navigation" aria-label="Mobile quick actions">
        <div className="seada-mobile-bottom-inner">
          {items.slice(0, 2).map((item) => (
            <Link key={item.href} href={item.href} className={`seada-mobile-tab ${router?.pathname === item.href ? "active" : ""}`}>
              <span className="seada-mobile-tab-icon"><i className={`fa ${item.icon}`} aria-hidden="true" /></span>
              <span>{item.label}</span>
            </Link>
          ))}

          <button
            type="button"
            className="seada-mobile-search-fab"
            onClick={() => window.dispatchEvent(new Event("open-search-overlay"))}
            aria-label={isRTL ? "بحث" : "Search"}
          >
            <i className="fa fa-search" aria-hidden="true" />
          </button>

          {items.slice(2).map((item) => (
            <Link key={item.href} href={item.href} className={`seada-mobile-tab ${router?.pathname === item.href ? "active" : ""}`}>
              <span className="seada-mobile-tab-icon">
                <i className={`fa ${item.icon}`} aria-hidden="true" />
                {item.badge ? <b className="seada-mobile-badge">{item.badge}</b> : null}
              </span>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
      </nav>

      <StyleTag global css={`
        @media (max-width: 991.98px) {
          body { padding-bottom: calc(88px + env(safe-area-inset-bottom, 0)); }
        }
      `} />

      <StyleTag css={`
        .seada-mobile-bottom {
          position: fixed;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1005;
          padding: 0 14px calc(10px + env(safe-area-inset-bottom, 0));
          background: transparent;
        }
        .seada-mobile-bottom-inner {
          height: 74px;
          border-radius: 24px;
          border: 1px solid #dbe9df;
          background: rgba(255,255,255,.98);
          box-shadow: 0 20px 45px rgba(22, 35, 18, .12);
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          align-items: center;
          position: relative;
          padding: 0 8px;
        }
        .seada-mobile-tab {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
          color: #5f6f63;
          text-decoration: none !important;
          font-size: 11px;
          font-weight: 600;
          height: 100%;
        }
        .seada-mobile-tab.active {
          color: #0f7a37;
        }
        .seada-mobile-tab-icon {
          position: relative;
          font-size: 19px;
          line-height: 1;
        }
        .seada-mobile-search-fab {
          width: 62px;
          height: 62px;
          border-radius: 999px;
          border: 0;
          background: linear-gradient(135deg, #16a34a 0%, #0f7a37 100%);
          color: #fff;
          display: grid;
          place-items: center;
          font-size: 24px;
          margin: -28px auto 0;
          box-shadow: 0 18px 30px rgba(22, 163, 74, .3);
        }
        .seada-mobile-badge {
          position: absolute;
          top: -9px;
          right: -10px;
          min-width: 18px;
          height: 18px;
          padding: 0 5px;
          border-radius: 999px;
          background: #ff8a1f;
          color: #fff;
          font-size: 10px;
          display: grid;
          place-items: center;
        }
        [dir="rtl"] .seada-mobile-bottom-inner {
          direction: rtl;
        }
      `} />
    </>
  );
}
