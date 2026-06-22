import{u as k,r as p,j as t}from"./index-BSLUAvK_.js";import{C as A}from"./Container-CFUkF6xZ.js";import{R as z,C as f}from"./Col-CWqVzBv2.js";import{M as S}from"./Media-BepcHx1U.js";import{u as C}from"./useLanguage-DKlD7w_a.js";import{g as B}from"./main-DL2261cS.js";import{S as T}from"./StyleTag-_AcOVe2g.js";import{N as $}from"./NextLinkCompat-Dv7VX4fU.js";import"./utils-BlDA5bAB.js";const i=(r,o,l)=>{var c;if(!r)return;const a=(c=r.translations)==null?void 0:c.find(n=>(n==null?void 0:n.locale)===(o?"ar":"en"));return(a==null?void 0:a[l])??r[l]},H=()=>{const{t:r,isRTL:o}=C(),l=k(),[a,c]=p.useState(null),[n,h]=p.useState(!0),d=l.pathname==="/about";p.useEffect(()=>{let e=!0;return(async()=>{try{const s=await B(),N=(s==null?void 0:s.settings)??s;e&&c(N)}catch{e&&c(null)}finally{e&&h(!1)}})(),()=>{e=!1}},[]);const b=i(a,o,"about_section_sub_title")||r("about.sub_title"),v=i(a,o,"about_section_title")||r("about.title"),j=t.jsxs("div",{className:"about-intro-paragraphs",children:[t.jsx("p",{style:{marginBottom:"12px"},children:r("about.intro_p1")}),t.jsx("p",{style:{marginBottom:"12px"},children:r("about.intro_p2")}),t.jsx("p",{style:{marginBottom:0},children:r("about.intro_p3")})]}),_=i(a,o,"about_section_introduction")||i(a,o,"about_us")||j,y=i(a,o,"about_section_vision")||r("about.vision_desc"),w=i(a,o,"about_section_mission")||r("about.mission_desc"),m=i(a,o,"about_section_apart"),g=i(a,o,"about_section_commitment"),u=(a==null?void 0:a.about_section_image_path)||(a==null?void 0:a.banner_image_path)||(a==null?void 0:a.image_logo_path)||"",x=[{icon:"⭐",label:o?"رؤيتنا":"Our Vision",text:y},{icon:"🏅",label:o?"رسالتنا":"Our Mission",text:w},m&&{icon:"⭐",label:o?"ما يميزنا":"What Sets Us Apart",text:m},g&&{icon:"🤝",label:o?"التزامنا":"Our Commitment",text:g}].filter(Boolean);return t.jsxs(p.Fragment,{children:[t.jsx("section",{className:"corp-section",id:"about",dir:o?"rtl":"ltr",children:t.jsx(A,{children:t.jsxs(z,{className:"align-items-center g-5",children:[u&&t.jsx(f,{lg:"5",className:"mb-4 mb-lg-0",children:t.jsxs("div",{className:"corp-about-image",children:[t.jsx(S,{src:u,className:"img-fluid",alt:b}),t.jsx("div",{className:"corp-about-accent","aria-hidden":"true"}),t.jsxs("div",{className:"corp-about-exp-badge",children:[t.jsx("strong",{children:"70+"}),t.jsx("span",{children:r("about.badge_label")})]})]})}),t.jsx(f,{lg:u?"7":"10",className:u?"":"mx-auto",children:t.jsxs("div",{className:"corp-about-content",children:[t.jsx("span",{className:"corp-label",style:{display:"inline-flex"},children:n?"…":b}),t.jsx("h2",{className:"corp-about-title",children:n?"…":v}),t.jsx("hr",{className:"corp-gold-line corp-gold-line-left"}),t.jsx("div",{className:"corp-about-intro",children:n?"…":_}),x.length>0&&t.jsx("div",{className:"corp-about-features",children:x.map((e,s)=>t.jsxs("div",{className:"corp-about-feature",children:[t.jsx("div",{className:"corp-about-feature-icon",children:e.icon}),t.jsxs("div",{children:[t.jsx("strong",{children:e.label}),t.jsx("p",{children:e.text})]})]},s))}),t.jsx("p",{className:"about-founder-footer",style:{fontStyle:"italic",fontSize:"0.95rem",color:"var(--corp-text-secondary)",marginTop:"24px",lineHeight:"1.6"},children:r("about.footer_note")}),t.jsx($,{to:d?"/contact":"/about",className:"corp-btn corp-btn-navy",style:{marginTop:24},children:d?o?"تواصل معنا":"Contact Us":o?"تعرف علينا أكثر":"Learn More About Us"})]})})]})})}),t.jsx(T,{global:!0,css:`
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
          border-color: rgba(var(--corp-accent-rgba), 0.2);
        }
        .corp-about-feature-icon {
          font-size: 1.5rem;
          width: 48px;
          height: 48px;
          background: rgba(var(--corp-accent-rgba), 0.1);
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
      `})]})};export{H as default};
