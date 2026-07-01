import{j as a,r as c,u as J}from"./index-CA7lWDRQ.js";import{C}from"./Container-eiA-tSeX.js";import{N as j}from"./NextLinkCompat-CE--4CZt.js";import{g as Z}from"./categories-D3N0f1z0.js";import{u as A}from"./useLanguage-D9UTKzGu.js";import{S as E}from"./StyleTag-BwK4lRRZ.js";import{R as ee,C as N}from"./Col-BLp7inXf.js";import{a as ae,j as re,g as oe,b as te,c as se}from"./main-Brbi_S3Y.js";const H=({logo:e})=>a.jsx(c.Fragment,{children:a.jsx(j,{href:"/",children:a.jsx("img",{src:`/assets/images/icon/${e||"logo.png"}`,alt:"",style:{height:"80px"}})})}),F=(e,r)=>{var p,t;const l=Array.isArray(e==null?void 0:e.translations)?e.translations:[],u=r?"ar":"en";return((p=l.find(n=>(n==null?void 0:n.locale)===u))==null?void 0:p.name)||((t=l.find(n=>n==null?void 0:n.locale))==null?void 0:t.name)||(e==null?void 0:e.name)||""},ne=e=>[e==null?void 0:e.sub_categories,e==null?void 0:e.subCategories,e==null?void 0:e.children,e==null?void 0:e.subs,e==null?void 0:e.sub_cats].find(Array.isArray)||[],ie=(e="")=>{const r=String(e).toLowerCase();return r.includes("fruit")||r.includes("vegetable")||r.includes("خض")?"🍎":r.includes("meat")||r.includes("poultry")||r.includes("لحوم")?"🥩":r.includes("dairy")||r.includes("egg")||r.includes("ألبان")||r.includes("بيض")?"🥛":r.includes("bakery")||r.includes("مخبوز")?"🥖":r.includes("beverage")||r.includes("مشروب")?"🥤":"•"},le=()=>{const{isRTL:e}=A(),r=c.useRef(null),[l,u]=c.useState([]),[p,t]=c.useState(!1),[n,y]=c.useState(null),b=()=>t(!1);c.useEffect(()=>{let o=!0;return(async()=>{var d;try{const h=await Z(),f=Array.isArray(h==null?void 0:h.data)?h.data:Array.isArray(h)?h:[];if(!o)return;u(f.slice(0,8)),y(((d=f[0])==null?void 0:d.id)??null)}catch{if(!o)return;u([])}})(),()=>{o=!1}},[]),c.useEffect(()=>(document.body.style.overflow=p?"hidden":"",()=>{document.body.style.overflow=""}),[p]),c.useEffect(()=>{const o=h=>h.key==="Escape"&&b(),d=()=>t(!0);return document.addEventListener("keydown",o),window.addEventListener("open-sidebar",d),()=>{document.removeEventListener("keydown",o),window.removeEventListener("open-sidebar",d)}},[]);const k=c.useMemo(()=>[{href:"/",label:e?"الرئيسية":"Home",icon:"🏠"},{href:"/about",label:e?"من نحن":"About Us",icon:"🏢"},{href:"/products",label:e?"المنتجات":"Products",icon:"📦"},{href:"/events",label:e?"الفعاليات":"Events",icon:"📅"},{href:"/consultation",label:e?"استشارة":"Consultation",icon:"🤝"},{href:"/contact",label:e?"تواصل معنا":"Contact",icon:"✉️"}],[e]),s=(o,d)=>{if(d.startsWith("/#")||d.startsWith("#")){o.preventDefault();const h=d.replace("/#","").replace("#",""),f=document.getElementById(h);f?f.scrollIntoView({behavior:"smooth",block:"start"}):window.location.href=d,b()}};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{id:"mySidenav",className:`seada-sidebar-root ${p?"open-side":""}`,dir:e?"rtl":"ltr","aria-hidden":!p,children:[a.jsx("div",{className:"seada-sidebar-backdrop",onClick:b}),a.jsxs("aside",{ref:r,className:"seada-sidebar-panel",role:"dialog","aria-modal":"true",children:[a.jsxs("div",{className:"seada-sidebar-head",children:[a.jsx("a",{href:"/",className:"seada-sidebar-logo",onClick:b,children:a.jsx("img",{src:"/assets/images/icon/logo/6.png",alt:"Seada",style:{filter:"brightness(0) invert(0)"}})}),a.jsx("button",{className:"seada-sidebar-close",onClick:b,"aria-label":e?"إغلاق":"Close sidebar",children:"×"})]}),a.jsxs("div",{className:"seada-sidebar-quicklinks",children:[a.jsx("h5",{className:"sidebar-section-title",children:e?"القائمة الرئيسية":"Main Menu"}),k.map(o=>a.jsxs("a",{href:o.href,onClick:d=>s(d,o.href),className:"seada-sidebar-link secondary",children:[a.jsx("span",{className:"seada-sidebar-emoji",children:o.icon}),a.jsx("span",{children:o.label})]},o.href))]}),a.jsxs("div",{className:"seada-sidebar-list",style:{marginTop:24},children:[a.jsx("h5",{className:"sidebar-section-title",children:e?"فئات المنتجات":"Product Categories"}),l.map(o=>{const d=F(o,e),h=ne(o),f=String(n??"")===String((o==null?void 0:o.id)??"");return a.jsxs("div",{className:"seada-sidebar-group",children:[a.jsxs("button",{className:`seada-sidebar-link ${f?"active":""}`,type:"button",onClick:()=>y(f?null:o==null?void 0:o.id),children:[a.jsx("span",{className:"seada-sidebar-emoji",children:ie(d)}),a.jsx("span",{children:d}),a.jsx("i",{className:`fa ${f?"fa-angle-up":"fa-angle-down"}`,"aria-hidden":"true"})]}),f&&h.length?a.jsx("div",{className:"seada-sidebar-children",children:h.slice(0,5).map(x=>a.jsx(j,{href:`/shop/sidebar_popup?category_id=${encodeURIComponent((x==null?void 0:x.id)||(o==null?void 0:o.id)||"")}`,onClick:b,children:F(x,e)},(x==null?void 0:x.id)||F(x,e)))}):null]},(o==null?void 0:o.id)||d)})]})]})]}),a.jsx(E,{global:!0,css:`
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
      `})]})},q=({className:e=""})=>{const{changeLanguage:r,currentLanguage:l}=A(),u=String(l).toLowerCase()==="ar",p=()=>{r(u?"en":"ar")};return a.jsxs(a.Fragment,{children:[a.jsx("div",{className:`language-switcher-direct ${e}`,children:a.jsx("button",{type:"button",className:"c-lang-btn-direct",onClick:p,"aria-label":"Change language",children:u?"EN":"ع"})}),a.jsx(E,{global:!0,css:`
        .language-switcher-direct { display: inline-flex; align-items: center; }
        .c-lang-btn-direct {
          display: inline-flex; align-items: center; justify-content: center;
          width: 44px; height: 32px;
          background: #b5bcc5; color: #ffffff;
          border: none; border-radius: 16px; cursor: pointer;
          font-family: inherit; font-weight: 700; font-size: 16px;
          transition: background 0.2s, transform 0.15s;
        }
        .c-lang-btn-direct:hover { background: #9fa7b2; transform: translateY(-1px); }
        @media (max-width: 575.98px) {
          .c-lang-btn-direct  { width: 38px; height: 28px; font-size: 14px; }
        }
      `})]})},W=[{href:"/",labelEn:"Home",labelAr:"الرئيسية"},{href:"/about",labelEn:"About Us",labelAr:"من نحن"},{href:"/products",labelEn:"Products",labelAr:"المنتجات"},{href:"/events",labelEn:"Events",labelAr:"الفعاليات"},{href:"/gallery",labelEn:"Gallery",labelAr:"المعرض"},{href:"/consultation",labelEn:"Consultation",labelAr:"استشارة"},{href:"/contact",labelEn:"Contact Us",labelAr:"تواصل معنا"}],Ae=({logoName:e,headerClass:r})=>{const l=J(),{isRTL:u}=A(),[p,t]=c.useState(!1),[n,y]=c.useState(!1);c.useEffect(()=>{const s=()=>t(window.scrollY>20);return window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[]),c.useEffect(()=>{const s=setTimeout(()=>{document.querySelectorAll(".loader-wrapper").forEach(o=>o.style.display="none")},900);return()=>clearTimeout(s)},[]),c.useEffect(()=>{if(n){const s=()=>y(!1);return window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)}},[n]);const b=(s,o)=>{if(o.startsWith("/#")||o.startsWith("#")){const d=o.replace("/#","").replace("#",""),h=document.getElementById(d);h&&(s.preventDefault(),h.scrollIntoView({behavior:"smooth",block:"start"})),y(!1)}else y(!1)},k=l.pathname!=="/";return a.jsxs("div",{children:[a.jsxs("header",{className:`corp-header ${r||""} ${p||k?"is-scrolled":""}`,children:[a.jsx(C,{children:a.jsxs("div",{className:"corp-header-inner",children:[a.jsx("div",{className:"corp-header-logo",children:a.jsx(H,{logo:e})}),a.jsx("nav",{className:"corp-nav d-none d-xl-flex",children:W.map(s=>a.jsx(j,{to:s.href,className:"corp-nav-link",onClick:o=>b(o,s.href),children:u?s.labelAr:s.labelEn},s.href))}),a.jsxs("div",{className:"corp-header-actions d-none d-xl-flex",children:[a.jsx(q,{showLabel:!1}),a.jsx(j,{to:"/contact",className:"corp-btn corp-btn-primary corp-btn-sm",onClick:s=>b(s,"/contact"),children:u?"طلب عرض سعر":"Get a Quote"})]}),a.jsxs("button",{className:"corp-mobile-toggle d-xl-none",type:"button",onClick:()=>y(s=>!s),"aria-label":u?"فتح القائمة":"Open menu",children:[a.jsx("span",{className:n?"open":""}),a.jsx("span",{className:n?"open":""}),a.jsx("span",{className:n?"open":""})]})]})}),a.jsx("div",{className:`corp-mobile-menu d-xl-none ${n?"open":""}`,children:a.jsx(C,{children:a.jsxs("nav",{className:"corp-mobile-nav",children:[W.map(s=>a.jsx(j,{to:s.href,className:"corp-mobile-nav-link",onClick:o=>b(o,s.href),children:u?s.labelAr:s.labelEn},s.href)),a.jsx("div",{style:{padding:"0 16px",marginTop:"8px",marginBottom:"8px"},children:a.jsx(q,{showLabel:!1})}),a.jsx(j,{to:"/contact",className:"corp-btn corp-btn-primary corp-btn-sm",onClick:s=>b(s,"/contact"),style:{marginTop:12,width:"100%",justifyContent:"center"},children:u?"طلب عرض سعر":"Get a Quote"})]})})})]}),a.jsx(le,{}),a.jsx(E,{global:!0,css:`
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
        `})]})},ue=(e,r,l)=>{try{const u=e?e(r):"";return!u||u===r?l:u}catch{return l}},ce=({layout:e,fluid:r})=>{var n;const l=(n=A)==null?void 0:n(),u=l==null?void 0:l.t,p=!!(l!=null&&l.isRTL),t=c.useMemo(()=>`2023–${new Date().getFullYear()}`,[]);return a.jsx(c.Fragment,{children:a.jsx("div",{className:`sub-footer ${e||""}`,dir:p?"rtl":"ltr",style:{borderTop:"1px solid rgba(255,255,255,0.08)",padding:"20px 0",textAlign:"center"},children:a.jsx(C,{fluid:typeof r=="string"?r:!!r,children:a.jsxs("p",{style:{margin:0,color:"var(--corp-text-on-dark-muted, #94A3B8)",fontSize:"0.85rem"},children:[a.jsx("i",{className:"fa fa-copyright","aria-hidden":"true"})," ",t," ",ue(u,"footer.copyright",p?"جميع الحقوق محفوظة — بدعم من Bluebrain":"All rights reserved — powered by Bluebrain")]})})})})},de="/assets/Asset%202@3x-DGXuMdOr.png",B=(e,r,l)=>{if(!e)return;const u=Array.isArray(e==null?void 0:e.translations)?e.translations:[],p=u.find(t=>(t==null?void 0:t.locale)===(r?"ar":"en"))||u.find(t=>t==null?void 0:t.locale);return p&&p[l]||e[l]},z=e=>{var r;return Array.isArray(e)?e:Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray((r=e==null?void 0:e.data)==null?void 0:r.data)?e.data.data:[]},R=e=>typeof e=="string"?e:e==null?"":String((e==null?void 0:e.value)??(e==null?void 0:e.name)??(e==null?void 0:e.title)??(e==null?void 0:e.text)??""),pe=e=>R((e==null?void 0:e.mobile)??(e==null?void 0:e.phone)??(e==null?void 0:e.number)??e),he=e=>R((e==null?void 0:e.email)??(e==null?void 0:e.mail)??(e==null?void 0:e.value)??e),me=e=>R((e==null?void 0:e.full_address)??(e==null?void 0:e.address)??[e==null?void 0:e.street,e==null?void 0:e.city,e==null?void 0:e.country].filter(Boolean).join(", ")),I=(...e)=>e.find(r=>r!=null&&r!==""),we=({containerFluid:e,logoName:r,layoutClass:l,footerClass:u,CopyRightFluid:p})=>{const{isRTL:t}=A(),[n,y]=c.useState(null),[b,k]=c.useState(""),[s,o]=c.useState([]),[d,h]=c.useState([]),[f,x]=c.useState([]),[X,G]=c.useState([]);c.useEffect(()=>{let i=!0;return(async()=>{var v,$,D,_,M;try{const[w,P,U,Y,V]=await Promise.all([(v=ae)==null?void 0:v().catch(()=>null),($=re)==null?void 0:$().catch(()=>null),(D=oe)==null?void 0:D().catch(()=>null),(_=te)==null?void 0:_().catch(()=>null),(M=se)==null?void 0:M().catch(()=>null)]);if(!i)return;const g=(w==null?void 0:w.settings)??w??null;y(g);const K=B(g,t,"about_section_introduction")||B(g,t,"about_us")||"";k(K);const O=Array.isArray(g==null?void 0:g.socials)&&g.socials||Array.isArray(g==null?void 0:g.socails)&&g.socails||Array.isArray(g==null?void 0:g.social_links)&&g.social_links||[];o(O.length?O:Array.isArray(P)?P:[]),h(z(U).map(pe).filter(Boolean)),x(z(Y).map(he).filter(Boolean)),G(z(V).map(me).filter(Boolean))}catch{}})(),()=>{i=!1}},[t]);const m=(n==null?void 0:n.store)||(n==null?void 0:n.settings)||n||{},T=X[0]||I(m==null?void 0:m.address,m==null?void 0:m.location)||"",S=d[0]||I(m==null?void 0:m.phone,m==null?void 0:m.mobile)||"",L=f[0]||I(m==null?void 0:m.email)||"",Q=[{label:t?"الرئيسية":"Home",href:"/"},{label:t?"من نحن":"About Us",href:"/about"},{label:t?"المنتجات":"Products",href:"/products"},{label:t?"الفعاليات":"Events",href:"/events"},{label:t?"المعرض":"Gallery",href:"/gallery"},{label:t?"استشارة":"Consultation",href:"/consultation"},{label:t?"تواصل معنا":"Contact",href:"/contact"}];return a.jsxs("div",{dir:t?"rtl":"ltr",children:[a.jsx("div",{className:"corp-footer-line",style:{height:"50px",margin:"20px 0",backgroundImage:`url(${de})`,backgroundRepeat:"repeat-x",backgroundPosition:"center",backgroundSize:"contain"}}),a.jsxs("footer",{className:"corp-footer",children:[a.jsx("div",{className:"corp-footer-top-bar"}),a.jsx(C,{fluid:e||"",children:a.jsxs(ee,{className:"corp-footer-grid",children:[a.jsx(N,{lg:"4",md:"6",className:"mb-4",children:a.jsxs("div",{className:"corp-footer-about",children:[a.jsx("div",{className:"corp-footer-logo",children:a.jsx(H,{logo:r})}),a.jsx("p",{className:"corp-footer-desc",children:t?"شركة رائدة في تصنيع وتوريد المنتجات عالية الجودة. نقدم مجموعة واسعة من المنتجات المصممة لتلبية متطلبات الشركات والمؤسسات.":"A leading B2B company in manufacturing and supplying premium quality products. We provide tailored solutions to meet the demands of corporate clients and institutions."}),a.jsx("div",{className:"corp-footer-social",children:s.map((i,v)=>a.jsx("a",{href:(i==null?void 0:i.url)||(i==null?void 0:i.link)||"#",target:"_blank",rel:"noreferrer","aria-label":`social-${(i==null?void 0:i.id)||v}`,children:i!=null&&i.icon_path||i!=null&&i.icon?a.jsx("img",{src:i.icon_path||i.icon,alt:"social",width:18,height:18}):a.jsx("i",{className:"fa fa-external-link","aria-hidden":"true"})},(i==null?void 0:i.id)||v))})]})}),a.jsxs(N,{lg:"2",md:"3",sm:"6",className:"mb-4",children:[a.jsx("h5",{className:"corp-footer-heading",children:t?"روابط سريعة":"Quick Links"}),a.jsx("ul",{className:"corp-footer-links",children:Q.map((i,v)=>a.jsx("li",{children:a.jsx("a",{href:i.href,children:i.label})},v))})]}),a.jsxs(N,{lg:"2",md:"3",sm:"6",className:"mb-4",children:[a.jsx("h5",{className:"corp-footer-heading",children:t?"خدماتنا":"Services"}),a.jsxs("ul",{className:"corp-footer-links",children:[a.jsx("li",{children:a.jsx("a",{href:"/products",children:t?"كتالوج المنتجات":"Product Catalog"})}),a.jsx("li",{children:a.jsx("a",{href:"/#process",children:t?"عملية التصنيع":"Manufacturing"})}),a.jsx("li",{children:a.jsx("a",{href:"/#why-us",children:t?"ضمان الجودة":"Quality Assurance"})}),a.jsx("li",{children:a.jsx("a",{href:"/contact",children:t?"طلب عرض سعر":"Request a Quote"})})]})]}),a.jsxs(N,{lg:"4",md:"6",className:"mb-4",children:[a.jsx("h5",{className:"corp-footer-heading",children:t?"معلومات التواصل":"Contact Info"}),a.jsxs("ul",{className:"corp-footer-contact",children:[T&&a.jsxs("li",{children:[a.jsx("i",{className:"fa fa-map-marker","aria-hidden":"true"}),a.jsx("span",{children:T})]}),S&&a.jsxs("li",{children:[a.jsx("i",{className:"fa fa-phone","aria-hidden":"true"}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"},children:[a.jsx("a",{href:`tel:${S.replace(/\s/g,"")}`,className:"keep-ltr",style:{display:"inline-block",direction:"ltr"},children:S}),a.jsx("span",{className:"mx-1 d-none d-sm-inline",children:"•"}),a.jsx("a",{href:"tel:0227860001",className:"keep-ltr",style:{display:"inline-block",direction:"ltr"},children:"0227860001"}),a.jsx("span",{className:"mx-1 d-none d-sm-inline",children:"•"}),a.jsx("a",{href:"tel:0227860002",className:"keep-ltr",style:{display:"inline-block",direction:"ltr"},children:"0227860002"})]})]}),a.jsxs("li",{children:[a.jsx("i",{className:"fa fa-file-text-o","aria-hidden":"true"}),a.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px",alignItems:"center"},children:[a.jsxs("span",{children:[t?"الرقم الضريبي:":"Tax ID:"," "]}),a.jsx("span",{className:"keep-ltr",style:{display:"inline-block",direction:"ltr"},children:"592-154-378"})]})]}),L&&a.jsxs("li",{children:[a.jsx("i",{className:"fa fa-envelope-o","aria-hidden":"true"}),a.jsx("a",{href:`mailto:${L}`,children:L})]})]})]})]})}),a.jsx(ce,{layout:l,fluid:p||""}),a.jsx(E,{global:!0,css:`
            .corp-footer {
              background: linear-gradient(
                180deg,
                var(--corp-navy) 0%,
                #020617 100%
              ) !important;
              color: rgba(255, 255, 255, 0.7);
              border-top: none !important;
              position: relative;
              overflow: hidden;
              margin-bottom: 0 !important;
            }
            .corp-footer::before {
              display: none;
            }
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
              box-shadow: 0 4px 15px rgba(var(--corp-accent-rgba), 0.3);
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
              transform: translateX(${t?"-6px":"6px"});
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
            .footer-theme {
              display: none !important;
            }
          `})]})]})};export{Ae as H,we as M};
