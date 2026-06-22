import{g as p,r as l,j as i}from"./index-ChhymkBp.js";import{S as m}from"./index-C-xLM827.js";import{C as d}from"./Container-ChqoEG-p.js";import{N as h}from"./NextLinkCompat-DdOLM1fO.js";import{u}from"./useLanguage-Buya9Lac.js";import{S as g}from"./StyleTag-CEqtSeyD.js";import"./utils-hTTS5mlv.js";async function x(){return await p("/sliders")}function f(){const e="https://admin.bleufleur.com/api";try{const o=new URL(e);return`${o.protocol}//${o.host}`}catch{return""}}function b(e){if(e!=null&&e.image_path&&e.image_path.startsWith("http"))return e.image_path;const o=f(),t=(e==null?void 0:e.image)||"";return t?`${o}/images/${t}`:""}function v(e,o){if(!e)return{};const t=Array.isArray(e.translations)?e.translations.find(r=>{var n;return(n=r==null?void 0:r.locale)==null?void 0:n.startsWith(o)}):null;return{id:e.id,image:e.image,image_path:e.image_path,title:t&&t.title||e.title||"",description:t&&t.description||e.description||"",button_text:t&&t.button_text||e.button_text||""}}function _(){const[e,o]=l.useState([]),{currentLanguage:t,isRTL:r}=u();l.useEffect(()=>{(async()=>{try{const s=await x();Array.isArray(s)&&o(s)}catch(s){console.error("Error fetching sliders:",s)}})()},[]);const n=l.useMemo(()=>({dots:!0,arrows:!1,infinite:!0,autoplay:!0,autoplaySpeed:6e3,speed:1e3,slidesToShow:1,slidesToScroll:1,initialSlide:0,fade:!r,rtl:!1,cssEase:"cubic-bezier(0.16, 1, 0.3, 1)"}),[r]);return e.length===0?null:i.jsxs("section",{className:`premium-slider-hero ${r?"rtl":""}`,id:"home",dir:r?"rtl":"ltr",children:[i.jsx(m,{className:"premium-hero-slider",...n,children:e.map(s=>{const a=v(s,t),c=b(a)||"/assets/images/placeholder.png";return i.jsx("div",{children:i.jsxs("div",{className:"premium-hero-slide",style:{backgroundImage:`url(${c})`},children:[i.jsx("div",{className:"premium-hero-overlay"}),i.jsx(d,{className:"h-100 d-flex align-items-center justify-content-center",children:i.jsxs("div",{className:"premium-hero-content-box corp-animate-up",children:[i.jsx("span",{className:"premium-hero-badge",children:a.title||(r?"التميز في كل التفاصيل":"Excellence in Every Detail")}),i.jsx("h1",{className:"premium-hero-title",children:a.description||(r?"شريكك الموثوق في المنتجات عالية الجودة.":"Your Trusted Partner for Premium Products.")}),i.jsx("div",{className:"premium-hero-actions",children:i.jsx(h,{href:"/products",className:"corp-btn corp-btn-primary corp-btn-lg",children:a.button_text||(r?"استكشف الكتالوج":"Explore Catalog")})})]})})]})},a.id)})},r?"rtl":"ltr"),i.jsx(g,{global:!0,css:`
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
            background: rgb(15 23 42 / 24%);
            backdrop-filter: blur(2px);
            -webkit-backdrop-filter: blur(2px);
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
        `})]})}export{_ as default};
