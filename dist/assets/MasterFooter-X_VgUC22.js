import{j as a,r as l,u as J}from"./index-Clhqbsw3.js";import{C}from"./Container-CT1ljW0w.js";import{N as j}from"./NextLinkCompat-C5NK6QnK.js";import{g as Z}from"./categories-Bq1NbgoQ.js";import{u as k}from"./useLanguage-D3L0xuIp.js";import{S as R}from"./StyleTag-BLuBRiJj.js";import{R as ee,C as N}from"./Col-wKLm6A7K.js";import{g as ae,j as re,a as oe,b as te,c as se}from"./main-B1L26HUN.js";const Q=({logo:e})=>a.jsx(l.Fragment,{children:a.jsx(j,{href:"/",children:a.jsx("img",{src:`/assets/images/icon/${e||"logo.png"}`,alt:"",style:{height:"80px"}})})}),S=(e,o)=>{var d,r;const u=Array.isArray(e==null?void 0:e.translations)?e.translations:[],c=o?"ar":"en";return((d=u.find(n=>(n==null?void 0:n.locale)===c))==null?void 0:d.name)||((r=u.find(n=>n==null?void 0:n.locale))==null?void 0:r.name)||(e==null?void 0:e.name)||""},ne=e=>[e==null?void 0:e.sub_categories,e==null?void 0:e.subCategories,e==null?void 0:e.children,e==null?void 0:e.subs,e==null?void 0:e.sub_cats].find(Array.isArray)||[],ie=(e="")=>{const o=String(e).toLowerCase();return o.includes("fruit")||o.includes("vegetable")||o.includes("خض")?"🍎":o.includes("meat")||o.includes("poultry")||o.includes("لحوم")?"🥩":o.includes("dairy")||o.includes("egg")||o.includes("ألبان")||o.includes("بيض")?"🥛":o.includes("bakery")||o.includes("مخبوز")?"🥖":o.includes("beverage")||o.includes("مشروب")?"🥤":"•"},ue=()=>{const{isRTL:e}=k(),o=l.useRef(null),[u,c]=l.useState([]),[d,r]=l.useState(!1),[n,v]=l.useState(null),b=()=>r(!1);l.useEffect(()=>{let t=!0;return(async()=>{var p;try{const h=await Z(),f=Array.isArray(h==null?void 0:h.data)?h.data:Array.isArray(h)?h:[];if(!t)return;c(f.slice(0,8)),v(((p=f[0])==null?void 0:p.id)??null)}catch{if(!t)return;c([])}})(),()=>{t=!1}},[]),l.useEffect(()=>(document.body.style.overflow=d?"hidden":"",()=>{document.body.style.overflow=""}),[d]),l.useEffect(()=>{const t=h=>h.key==="Escape"&&b(),p=()=>r(!0);return document.addEventListener("keydown",t),window.addEventListener("open-sidebar",p),()=>{document.removeEventListener("keydown",t),window.removeEventListener("open-sidebar",p)}},[]);const A=l.useMemo(()=>[{href:"/",label:e?"الرئيسية":"Home",icon:"🏠"},{href:"/about",label:e?"من نحن":"About Us",icon:"🏢"},{href:"/products",label:e?"المنتجات":"Products",icon:"📦"},{href:"/events",label:e?"الفعاليات":"Events",icon:"📅"},{href:"/consultation",label:e?"استشارة":"Consultation",icon:"🤝"},{href:"/contact",label:e?"تواصل معنا":"Contact",icon:"✉️"}],[e]),s=(t,p)=>{if(p.startsWith("/#")||p.startsWith("#")){t.preventDefault();const h=p.replace("/#","").replace("#",""),f=document.getElementById(h);f?f.scrollIntoView({behavior:"smooth",block:"start"}):window.location.href=p,b()}};return a.jsxs(a.Fragment,{children:[a.jsxs("div",{id:"mySidenav",className:`seada-sidebar-root ${d?"open-side":""}`,dir:e?"rtl":"ltr","aria-hidden":!d,children:[a.jsx("div",{className:"seada-sidebar-backdrop",onClick:b}),a.jsxs("aside",{ref:o,className:"seada-sidebar-panel",role:"dialog","aria-modal":"true",children:[a.jsxs("div",{className:"seada-sidebar-head",children:[a.jsx("a",{href:"/",className:"seada-sidebar-logo",onClick:b,children:a.jsx("img",{src:"/assets/images/icon/logo/6.png",alt:"Seada",style:{filter:"brightness(0) invert(0)"}})}),a.jsx("button",{className:"seada-sidebar-close",onClick:b,"aria-label":e?"إغلاق":"Close sidebar",children:"×"})]}),a.jsxs("div",{className:"seada-sidebar-quicklinks",children:[a.jsx("h5",{className:"sidebar-section-title",children:e?"القائمة الرئيسية":"Main Menu"}),A.map(t=>a.jsxs("a",{href:t.href,onClick:p=>s(p,t.href),className:"seada-sidebar-link secondary",children:[a.jsx("span",{className:"seada-sidebar-emoji",children:t.icon}),a.jsx("span",{children:t.label})]},t.href))]}),a.jsxs("div",{className:"seada-sidebar-list",style:{marginTop:24},children:[a.jsx("h5",{className:"sidebar-section-title",children:e?"فئات المنتجات":"Product Categories"}),u.map(t=>{const p=S(t,e),h=ne(t),f=String(n??"")===String((t==null?void 0:t.id)??"");return a.jsxs("div",{className:"seada-sidebar-group",children:[a.jsxs("button",{className:`seada-sidebar-link ${f?"active":""}`,type:"button",onClick:()=>v(f?null:t==null?void 0:t.id),children:[a.jsx("span",{className:"seada-sidebar-emoji",children:ie(p)}),a.jsx("span",{children:p}),a.jsx("i",{className:`fa ${f?"fa-angle-up":"fa-angle-down"}`,"aria-hidden":"true"})]}),f&&h.length?a.jsx("div",{className:"seada-sidebar-children",children:h.slice(0,5).map(x=>a.jsx(j,{href:`/shop/sidebar_popup?category_id=${encodeURIComponent((x==null?void 0:x.id)||(t==null?void 0:t.id)||"")}`,onClick:b,children:S(x,e)},(x==null?void 0:x.id)||S(x,e)))}):null]},(t==null?void 0:t.id)||p)})]})]})]}),a.jsx(R,{global:!0,css:`
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
      `})]})},le=[{lang:"English",val:"en"},{lang:"العربية",val:"ar"}],q=({className:e="",showLabel:o=!0})=>{const{currentLanguage:u,changeLanguage:c,isRTL:d}=k();return a.jsxs("div",{className:`language-switcher ${e}`,children:[o&&a.jsx("span",{className:"language-label",style:{marginRight:d?0:"10px",marginLeft:d?"10px":0},children:d?"اللغة:":"Language:"}),a.jsx("select",{value:u,onChange:r=>c(r.target.value),className:"language-select",style:{direction:d?"rtl":"ltr"},children:le.map(r=>a.jsx("option",{value:r.val,children:r.lang},r.val))})]})},B=[{href:"/",labelEn:"Home",labelAr:"الرئيسية"},{href:"/about",labelEn:"About Us",labelAr:"من نحن"},{href:"/products",labelEn:"Products",labelAr:"المنتجات"},{href:"/events",labelEn:"Events",labelAr:"الفعاليات"},{href:"/gallery",labelEn:"Gallery",labelAr:"المعرض"},{href:"/consultation",labelEn:"Consultation",labelAr:"استشارة"},{href:"/contact",labelEn:"Contact Us",labelAr:"تواصل معنا"}],ke=({logoName:e,headerClass:o})=>{const u=J(),{isRTL:c}=k(),[d,r]=l.useState(!1),[n,v]=l.useState(!1);l.useEffect(()=>{const s=()=>r(window.scrollY>20);return window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)},[]),l.useEffect(()=>{const s=setTimeout(()=>{document.querySelectorAll(".loader-wrapper").forEach(t=>t.style.display="none")},900);return()=>clearTimeout(s)},[]),l.useEffect(()=>{if(n){const s=()=>v(!1);return window.addEventListener("scroll",s,{passive:!0}),()=>window.removeEventListener("scroll",s)}},[n]);const b=(s,t)=>{if(t.startsWith("/#")||t.startsWith("#")){const p=t.replace("/#","").replace("#",""),h=document.getElementById(p);h&&(s.preventDefault(),h.scrollIntoView({behavior:"smooth",block:"start"})),v(!1)}else v(!1)},A=u.pathname!=="/";return a.jsxs("div",{children:[a.jsxs("header",{className:`corp-header ${o||""} ${d||A?"is-scrolled":""}`,children:[a.jsx(C,{children:a.jsxs("div",{className:"corp-header-inner",children:[a.jsx("div",{className:"corp-header-logo",children:a.jsx(Q,{logo:e})}),a.jsx("nav",{className:"corp-nav d-none d-xl-flex",children:B.map(s=>a.jsx(j,{to:s.href,className:"corp-nav-link",onClick:t=>b(t,s.href),children:c?s.labelAr:s.labelEn},s.href))}),a.jsxs("div",{className:"corp-header-actions d-none d-xl-flex",children:[a.jsx(q,{showLabel:!1}),a.jsx(j,{to:"/contact",className:"corp-btn corp-btn-primary corp-btn-sm",onClick:s=>b(s,"/contact"),children:c?"طلب عرض سعر":"Get a Quote"})]}),a.jsxs("button",{className:"corp-mobile-toggle d-xl-none",type:"button",onClick:()=>v(s=>!s),"aria-label":c?"فتح القائمة":"Open menu",children:[a.jsx("span",{className:n?"open":""}),a.jsx("span",{className:n?"open":""}),a.jsx("span",{className:n?"open":""})]})]})}),a.jsx("div",{className:`corp-mobile-menu d-xl-none ${n?"open":""}`,children:a.jsx(C,{children:a.jsxs("nav",{className:"corp-mobile-nav",children:[B.map(s=>a.jsx(j,{to:s.href,className:"corp-mobile-nav-link",onClick:t=>b(t,s.href),children:c?s.labelAr:s.labelEn},s.href)),a.jsx("div",{style:{padding:"0 16px",marginTop:"8px",marginBottom:"8px"},children:a.jsx(q,{showLabel:!1})}),a.jsx(j,{to:"/contact",className:"corp-btn corp-btn-primary corp-btn-sm",onClick:s=>b(s,"/contact"),style:{marginTop:12,width:"100%",justifyContent:"center"},children:c?"طلب عرض سعر":"Get a Quote"})]})})})]}),a.jsx(ue,{}),a.jsx(R,{global:!0,css:`
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
        `})]})},ce=(e,o,u)=>{try{const c=e?e(o):"";return!c||c===o?u:c}catch{return u}},de=({layout:e,fluid:o})=>{var n;const u=(n=k)==null?void 0:n(),c=u==null?void 0:u.t,d=!!(u!=null&&u.isRTL),r=l.useMemo(()=>`2023–${new Date().getFullYear()}`,[]);return a.jsx(l.Fragment,{children:a.jsx("div",{className:`sub-footer ${e||""}`,dir:d?"rtl":"ltr",style:{borderTop:"1px solid rgba(255,255,255,0.08)",padding:"20px 0",textAlign:"center"},children:a.jsx(C,{fluid:typeof o=="string"?o:!!o,children:a.jsxs("p",{style:{margin:0,color:"var(--corp-text-on-dark-muted, #94A3B8)",fontSize:"0.85rem"},children:[a.jsx("i",{className:"fa fa-copyright","aria-hidden":"true"})," ",r," ",ce(c,"footer.copyright",d?"جميع الحقوق محفوظة — بدعم من Bluebrain":"All rights reserved — powered by Bluebrain")]})})})})},H=(e,o,u)=>{if(!e)return;const c=Array.isArray(e==null?void 0:e.translations)?e.translations:[],d=c.find(r=>(r==null?void 0:r.locale)===(o?"ar":"en"))||c.find(r=>r==null?void 0:r.locale);return d&&d[u]||e[u]},F=e=>{var o;return Array.isArray(e)?e:Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray((o=e==null?void 0:e.data)==null?void 0:o.data)?e.data.data:[]},T=e=>typeof e=="string"?e:e==null?"":String((e==null?void 0:e.value)??(e==null?void 0:e.name)??(e==null?void 0:e.title)??(e==null?void 0:e.text)??""),pe=e=>T((e==null?void 0:e.mobile)??(e==null?void 0:e.phone)??(e==null?void 0:e.number)??e),he=e=>T((e==null?void 0:e.email)??(e==null?void 0:e.mail)??(e==null?void 0:e.value)??e),me=e=>T((e==null?void 0:e.full_address)??(e==null?void 0:e.address)??[e==null?void 0:e.street,e==null?void 0:e.city,e==null?void 0:e.country].filter(Boolean).join(", ")),z=(...e)=>e.find(o=>o!=null&&o!==""),we=({containerFluid:e,logoName:o,layoutClass:u,footerClass:c,CopyRightFluid:d})=>{const{isRTL:r}=k(),[n,v]=l.useState(null),[b,A]=l.useState(""),[s,t]=l.useState([]),[p,h]=l.useState([]),[f,x]=l.useState([]),[U,W]=l.useState([]);l.useEffect(()=>{let i=!0;return(async()=>{var y,$,_,D,M;try{const[w,P,G,V,Y]=await Promise.all([(y=ae)==null?void 0:y().catch(()=>null),($=re)==null?void 0:$().catch(()=>null),(_=oe)==null?void 0:_().catch(()=>null),(D=te)==null?void 0:D().catch(()=>null),(M=se)==null?void 0:M().catch(()=>null)]);if(!i)return;const g=(w==null?void 0:w.settings)??w??null;v(g);const K=H(g,r,"about_section_introduction")||H(g,r,"about_us")||"";A(K);const O=Array.isArray(g==null?void 0:g.socials)&&g.socials||Array.isArray(g==null?void 0:g.socails)&&g.socails||Array.isArray(g==null?void 0:g.social_links)&&g.social_links||[];t(O.length?O:Array.isArray(P)?P:[]),h(F(G).map(pe).filter(Boolean)),x(F(V).map(he).filter(Boolean)),W(F(Y).map(me).filter(Boolean))}catch{}})(),()=>{i=!1}},[r]);const m=(n==null?void 0:n.store)||(n==null?void 0:n.settings)||n||{},I=U[0]||z(m==null?void 0:m.address,m==null?void 0:m.location)||"",E=p[0]||z(m==null?void 0:m.phone,m==null?void 0:m.mobile)||"",L=f[0]||z(m==null?void 0:m.email)||"",X=[{label:r?"الرئيسية":"Home",href:"/"},{label:r?"من نحن":"About Us",href:"/about"},{label:r?"المنتجات":"Products",href:"/products"},{label:r?"الفعاليات":"Events",href:"/events"},{label:r?"المعرض":"Gallery",href:"/gallery"},{label:r?"استشارة":"Consultation",href:"/consultation"},{label:r?"تواصل معنا":"Contact",href:"/contact"}];return a.jsx("div",{dir:r?"rtl":"ltr",children:a.jsxs("footer",{className:"corp-footer",children:[a.jsx("div",{className:"corp-footer-top-bar"}),a.jsx(C,{fluid:e||"",children:a.jsxs(ee,{className:"corp-footer-grid",children:[a.jsx(N,{lg:"4",md:"6",className:"mb-4",children:a.jsxs("div",{className:"corp-footer-about",children:[a.jsx("div",{className:"corp-footer-logo",children:a.jsx(Q,{logo:o})}),a.jsx("p",{className:"corp-footer-desc",children:r?"شركة رائدة في تصنيع وتوريد المنتجات عالية الجودة. نقدم مجموعة واسعة من المنتجات المصممة لتلبية متطلبات الشركات والمؤسسات.":"A leading B2B company in manufacturing and supplying premium quality products. We provide tailored solutions to meet the demands of corporate clients and institutions."}),a.jsx("div",{className:"corp-footer-social",children:s.map((i,y)=>a.jsx("a",{href:(i==null?void 0:i.url)||(i==null?void 0:i.link)||"#",target:"_blank",rel:"noreferrer","aria-label":`social-${(i==null?void 0:i.id)||y}`,children:i!=null&&i.icon_path||i!=null&&i.icon?a.jsx("img",{src:i.icon_path||i.icon,alt:"social",width:18,height:18}):a.jsx("i",{className:"fa fa-external-link","aria-hidden":"true"})},(i==null?void 0:i.id)||y))})]})}),a.jsxs(N,{lg:"2",md:"3",sm:"6",className:"mb-4",children:[a.jsx("h5",{className:"corp-footer-heading",children:r?"روابط سريعة":"Quick Links"}),a.jsx("ul",{className:"corp-footer-links",children:X.map((i,y)=>a.jsx("li",{children:a.jsx("a",{href:i.href,children:i.label})},y))})]}),a.jsxs(N,{lg:"2",md:"3",sm:"6",className:"mb-4",children:[a.jsx("h5",{className:"corp-footer-heading",children:r?"خدماتنا":"Services"}),a.jsxs("ul",{className:"corp-footer-links",children:[a.jsx("li",{children:a.jsx("a",{href:"/products",children:r?"كتالوج المنتجات":"Product Catalog"})}),a.jsx("li",{children:a.jsx("a",{href:"/#process",children:r?"عملية التصنيع":"Manufacturing"})}),a.jsx("li",{children:a.jsx("a",{href:"/#why-us",children:r?"ضمان الجودة":"Quality Assurance"})}),a.jsx("li",{children:a.jsx("a",{href:"/contact",children:r?"طلب عرض سعر":"Request a Quote"})})]})]}),a.jsxs(N,{lg:"4",md:"6",className:"mb-4",children:[a.jsx("h5",{className:"corp-footer-heading",children:r?"معلومات التواصل":"Contact Info"}),a.jsxs("ul",{className:"corp-footer-contact",children:[I&&a.jsxs("li",{children:[a.jsx("i",{className:"fa fa-map-marker","aria-hidden":"true"}),a.jsx("span",{children:I})]}),E&&a.jsxs("li",{children:[a.jsx("i",{className:"fa fa-phone","aria-hidden":"true"}),a.jsx("a",{href:`tel:${E.replace(/\s/g,"")}`,children:E})]}),L&&a.jsxs("li",{children:[a.jsx("i",{className:"fa fa-envelope-o","aria-hidden":"true"}),a.jsx("a",{href:`mailto:${L}`,children:L})]})]})]})]})}),a.jsx(de,{layout:u,fluid:d||""}),a.jsx(R,{global:!0,css:`
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
            transform: translateX(${r?"-6px":"6px"});
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
        `})]})})};export{ke as H,we as M};
