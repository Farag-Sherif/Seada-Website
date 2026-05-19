import{r as p,j as t}from"./index-CFdUqYMq.js";import{C as y}from"./Container-wLonXKyg.js";import{R as _,C as f}from"./Col-CAedqfHP.js";import{M as w}from"./Media-BPXueHsr.js";import{u as N}from"./useLanguage-BWW6GnpT.js";import{g as k}from"./main-CdtAQRt-.js";import{S as A}from"./StyleTag-eNEH9FNM.js";import"./utils-CwDDfIjG.js";import"./api-LgIJUvAN.js";const e=(i,a,o)=>{var s;if(!i)return;const n=(s=i.translations)==null?void 0:s.find(l=>(l==null?void 0:l.locale)===(a?"ar":"en"));return(n==null?void 0:n[o])??i[o]},U=()=>{const{t:i,isRTL:a}=N(),[o,n]=p.useState(null),[s,l]=p.useState(!0);p.useEffect(()=>{let r=!0;return(async()=>{try{const c=await k(),j=(c==null?void 0:c.settings)??c;r&&n(j)}catch{r&&n(null)}finally{r&&l(!1)}})(),()=>{r=!1}},[]);const d=e(o,a,"about_section_sub_title")||(a?"من نحن":"About Us"),h=e(o,a,"about_section_title")||i("welcome_multi_store")||(a?"قصة شركتنا":"Our Company Story"),v=e(o,a,"about_section_introduction")||e(o,a,"about_us")||i("lorem_about_text")||"",m=e(o,a,"about_section_vision"),b=e(o,a,"about_section_apart"),g=e(o,a,"about_section_commitment"),u=(o==null?void 0:o.about_section_image_path)||(o==null?void 0:o.banner_image_path)||(o==null?void 0:o.image_logo_path)||"",x=[m&&{icon:"🎯",label:a?"رؤيتنا":"Our Vision",text:m},b&&{icon:"⭐",label:a?"ما يميزنا":"What Sets Us Apart",text:b},g&&{icon:"🤝",label:a?"التزامنا":"Our Commitment",text:g}].filter(Boolean);return t.jsxs(p.Fragment,{children:[t.jsx("section",{className:"corp-section",id:"about",dir:a?"rtl":"ltr",children:t.jsx(y,{children:t.jsxs(_,{className:"align-items-center g-5",children:[u&&t.jsx(f,{lg:"5",className:"mb-4 mb-lg-0",children:t.jsxs("div",{className:"corp-about-image",children:[t.jsx(w,{src:u,className:"img-fluid",alt:d}),t.jsx("div",{className:"corp-about-accent","aria-hidden":"true"}),t.jsxs("div",{className:"corp-about-exp-badge",children:[t.jsx("strong",{children:"15+"}),t.jsx("span",{children:a?"سنة خبرة":"Years"})]})]})}),t.jsx(f,{lg:u?"7":"10",className:u?"":"mx-auto",children:t.jsxs("div",{className:"corp-about-content",children:[t.jsx("span",{className:"corp-label",style:{display:"inline-flex"},children:s?"…":d}),t.jsx("h2",{className:"corp-about-title",children:s?"…":h}),t.jsx("hr",{className:"corp-gold-line corp-gold-line-left"}),t.jsx("p",{className:"corp-about-intro",children:s?"…":v}),x.length>0&&t.jsx("div",{className:"corp-about-features",children:x.map((r,c)=>t.jsxs("div",{className:"corp-about-feature",children:[t.jsx("div",{className:"corp-about-feature-icon",children:r.icon}),t.jsxs("div",{children:[t.jsx("strong",{children:r.label}),t.jsx("p",{children:r.text})]})]},c))}),t.jsx("a",{href:"#contact",className:"corp-btn corp-btn-navy",style:{marginTop:24},children:a?"تعرف علينا أكثر":"Learn More About Us"})]})})]})})}),t.jsx(A,{global:!0,css:`
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
          ${a?"right":"left"}: -20px;
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
          margin-left: ${a?"auto":"0"};
          margin-right: ${a?"0":"auto"};
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
          transform: translateX(${a?"-8px":"8px"});
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
          .corp-about-feature { text-align: ${a?"right":"left"}; }
          .corp-about-exp-badge { bottom: -20px; ${a?"right":"left"}: 20px; }
        }
      `})]})};export{U as default};
