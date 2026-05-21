import{u as w,r as p,j as t}from"./index-oP643INO.js";import{C as N}from"./Container-BMgPmImx.js";import{R as k,C as h}from"./Col-BQjds_MH.js";import{M as A}from"./Media-Cji2HjLV.js";import{u as z}from"./useLanguage-7ajMH3U4.js";import{g as S}from"./main-DkAwJllx.js";import{S as C}from"./StyleTag-DNUdhopW.js";import{N as T}from"./NextLinkCompat-BA1kJleb.js";import"./utils-BFl6qVwR.js";import"./api-LgIJUvAN.js";const i=(n,o,u)=>{var c;if(!n)return;const a=(c=n.translations)==null?void 0:c.find(e=>(e==null?void 0:e.locale)===(o?"ar":"en"));return(a==null?void 0:a[u])??n[u]},G=()=>{const{t:n,isRTL:o}=z(),u=w(),[a,c]=p.useState(null),[e,v]=p.useState(!0),d=u.pathname==="/about";p.useEffect(()=>{let r=!0;return(async()=>{try{const s=await S(),_=(s==null?void 0:s.settings)??s;r&&c(_)}catch{r&&c(null)}finally{r&&v(!1)}})(),()=>{r=!1}},[]);const m=i(a,o,"about_section_sub_title")||(o?"من نحن":"About Us"),j=i(a,o,"about_section_title")||n("welcome_multi_store")||(o?"قصة شركتنا":"Our Company Story"),y=i(a,o,"about_section_introduction")||i(a,o,"about_us")||n("lorem_about_text")||"",b=i(a,o,"about_section_vision"),g=i(a,o,"about_section_apart"),x=i(a,o,"about_section_commitment"),l=(a==null?void 0:a.about_section_image_path)||(a==null?void 0:a.banner_image_path)||(a==null?void 0:a.image_logo_path)||"",f=[b&&{icon:"🎯",label:o?"رؤيتنا":"Our Vision",text:b},g&&{icon:"⭐",label:o?"ما يميزنا":"What Sets Us Apart",text:g},x&&{icon:"🤝",label:o?"التزامنا":"Our Commitment",text:x}].filter(Boolean);return t.jsxs(p.Fragment,{children:[t.jsx("section",{className:"corp-section",id:"about",dir:o?"rtl":"ltr",children:t.jsx(N,{children:t.jsxs(k,{className:"align-items-center g-5",children:[l&&t.jsx(h,{lg:"5",className:"mb-4 mb-lg-0",children:t.jsxs("div",{className:"corp-about-image",children:[t.jsx(A,{src:l,className:"img-fluid",alt:m}),t.jsx("div",{className:"corp-about-accent","aria-hidden":"true"}),t.jsxs("div",{className:"corp-about-exp-badge",children:[t.jsx("strong",{children:"15+"}),t.jsx("span",{children:o?"سنة خبرة":"Years"})]})]})}),t.jsx(h,{lg:l?"7":"10",className:l?"":"mx-auto",children:t.jsxs("div",{className:"corp-about-content",children:[t.jsx("span",{className:"corp-label",style:{display:"inline-flex"},children:e?"…":m}),t.jsx("h2",{className:"corp-about-title",children:e?"…":j}),t.jsx("hr",{className:"corp-gold-line corp-gold-line-left"}),t.jsx("p",{className:"corp-about-intro",children:e?"…":y}),f.length>0&&t.jsx("div",{className:"corp-about-features",children:f.map((r,s)=>t.jsxs("div",{className:"corp-about-feature",children:[t.jsx("div",{className:"corp-about-feature-icon",children:r.icon}),t.jsxs("div",{children:[t.jsx("strong",{children:r.label}),t.jsx("p",{children:r.text})]})]},s))}),t.jsx(T,{to:d?"/contact":"/about",className:"corp-btn corp-btn-navy",style:{marginTop:24},children:d?o?"تواصل معنا":"Contact Us":o?"تعرف علينا أكثر":"Learn More About Us"})]})})]})})}),t.jsx(C,{global:!0,css:`
        .corp-about-image {
          position: relative;
          z-index: 1;
        }
        .corp-about-image img {
          border-radius: var(--corp-radius-xl);
          box-shadow: var(--glass-shadow);
          position: relative;
          z-index: 2;
          width: 100%;
          border: 1px solid rgba(255, 255, 255, 0.5);
          transition: transform var(--corp-duration) var(--corp-ease-spring);
        }
        .corp-about-image:hover img {
          transform: translateY(-10px) scale(1.02);
        }
        .corp-about-accent {
          position: absolute;
          inset: -20px;
          background: var(--corp-accent-gradient);
          border-radius: var(--corp-radius-xl);
          opacity: 0.15;
          filter: blur(30px);
          z-index: 0;
          animation: pulseGlow 4s ease-in-out infinite alternate;
        }
        @keyframes pulseGlow {
          0% { opacity: 0.1; filter: blur(30px); }
          100% { opacity: 0.25; filter: blur(40px); }
        }
        .corp-about-exp-badge {
          position: absolute;
          bottom: -20px;
          ${o?"right":"left"}: -20px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          padding: 24px;
          border-radius: var(--corp-radius-lg);
          box-shadow: var(--glass-shadow);
          z-index: 3;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .corp-about-exp-badge strong {
          font-family: var(--font-heading);
          font-size: 2.5rem;
          font-weight: 900;
          line-height: 1;
          background: var(--corp-accent-gradient);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .corp-about-exp-badge span {
          font-size: 0.95rem;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--corp-navy);
          margin-top: 4px;
          letter-spacing: 0.05em;
        }
        .corp-about-content {
          padding: 0 20px;
        }
        .corp-about-title {
          font-size: clamp(2rem, 4vw, 3rem);
          font-family: var(--font-heading);
          font-weight: 900;
          color: var(--corp-navy);
          margin-bottom: 20px;
          line-height: 1.2;
        }
        .corp-gold-line-left {
          margin-left: ${o?"auto":"0"};
          margin-right: ${o?"0":"auto"};
        }
        .corp-about-intro {
          font-size: 1.15rem;
          color: var(--corp-text-secondary);
          line-height: 1.8;
          margin-bottom: 30px;
        }
        .corp-about-features {
          display: flex;
          flex-direction: column;
          gap: 20px;
          margin-top: 30px;
        }
        .corp-about-feature {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          background: rgba(255, 255, 255, 0.4);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 20px;
          border-radius: var(--corp-radius-md);
          box-shadow: var(--corp-shadow-sm);
          transition: all var(--corp-duration) var(--corp-ease-spring);
        }
        .corp-about-feature:hover {
          transform: translateX(${o?"-8px":"8px"});
          background: rgba(255, 255, 255, 0.8);
          border-color: rgba(59, 130, 246, 0.2);
        }
        .corp-about-feature-icon {
          font-size: 1.5rem;
          width: 48px;
          height: 48px;
          background: rgba(59, 130, 246, 0.1);
          color: var(--corp-accent);
          display: grid;
          place-items: center;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .corp-about-feature strong {
          font-size: 1.1rem;
          font-weight: 800;
          color: var(--corp-navy);
          display: block;
          margin-bottom: 6px;
        }
        .corp-about-feature p {
          margin: 0;
          font-size: 0.95rem;
          color: var(--corp-text-secondary);
          line-height: 1.6;
        }
        @media (max-width: 991px) {
          .corp-about-content { padding: 0; text-align: center; margin-top: 40px; }
          .corp-gold-line-left { margin: 20px auto; }
          .corp-about-feature { text-align: ${o?"right":"left"}; }
          .corp-about-exp-badge { bottom: -20px; ${o?"right":"left"}: 20px; }
        }
      `})]})};export{G as default};
