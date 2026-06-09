import{j as r}from"./index-Clhqbsw3.js";import{C as i}from"./Container-CT1ljW0w.js";import{u as n}from"./useLanguage-D3L0xuIp.js";import{S as d}from"./StyleTag-BLuBRiJj.js";import"./utils-UQQFurP7.js";const p=e=>[{num:"01",icon:"🤝",title:e("process.step1.title"),desc:e("process.step1.desc")},{num:"02",icon:"🏭",title:e("process.step2.title"),desc:e("process.step2.desc")},{num:"03",icon:"🚚",title:e("process.step3.title"),desc:e("process.step3.desc")},{num:"04",icon:"📞",title:e("process.step4.title"),desc:e("process.step4.desc")}],x=()=>{const{t:e,isRTL:o}=n(),a=p(e);return r.jsxs("section",{className:"corp-section process-section-modern",id:"process",dir:o?"rtl":"ltr",children:[r.jsxs(i,{children:[r.jsxs("div",{className:"corp-section-header",children:[r.jsx("span",{className:"corp-label",children:e("process.sub_title")}),r.jsx("h2",{children:e("process.title")}),r.jsx("div",{className:"corp-gold-line",style:{background:"var(--corp-accent-gradient)"}}),r.jsx("p",{className:"process-subtitle",style:{fontStyle:"italic",fontSize:"1.1rem",color:"var(--corp-text-secondary)",marginTop:"10px",marginBottom:"0"},children:e("process.subtitle_desc")})]}),r.jsx("div",{className:"process-timeline-modern",children:a.map((s,c)=>{const t=c===1;return r.jsx("div",{className:`process-card-modern ${t?"highlight-card":""}`,style:{animationDelay:`${c*.1}s`},children:r.jsxs("div",{className:"process-card-inner",children:[r.jsxs("div",{className:"process-card-front",children:[r.jsx("div",{className:"process-step-num-modern",children:s.num}),r.jsx("div",{className:"process-step-icon-modern",children:s.icon}),r.jsx("h4",{className:"process-step-title-modern",children:s.title}),t&&r.jsx("span",{className:"process-card-badge",children:o?"هويتنا":"OUR IDENTITY"})]}),r.jsxs("div",{className:"process-card-back",children:[r.jsx("p",{className:"process-step-desc-modern",children:s.desc}),t&&r.jsx("span",{className:"process-card-badge-back",children:o?"هويتنا":"OUR IDENTITY"})]})]})},c)})})]}),r.jsx(d,{global:!0,css:`
        .process-section-modern {
          background: var(--corp-bg-alt);
          position: relative;
          z-index: 1;
        }
        .process-subtitle {
          max-width: 600px;
          margin: 0 auto;
          color: var(--corp-text-secondary);
        }
        .process-timeline-modern {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 30px;
          perspective: 1000px;
        }
        .process-card-modern {
          width: 220px;
          height: 280px;
          perspective: 1000px;
          cursor: pointer;
        }
        .process-card-inner {
          width: 100%;
          height: 100%;
          position: relative;
          transition: transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          transform-style: preserve-3d;
          box-shadow: var(--corp-shadow-md);
          border-radius: var(--corp-radius-lg);
        }
        .process-card-modern:hover .process-card-inner {
          transform: rotateY(180deg);
          box-shadow: var(--corp-shadow-glow);
        }
        .process-card-front, .process-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          -webkit-backface-visibility: hidden;
          backface-visibility: hidden;
          border-radius: var(--corp-radius-lg);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 20px;
          text-align: center;
        }
        .process-card-front {
          background: var(--glass-bg);
          backdrop-filter: blur(20px);
          border: 1px solid var(--glass-border);
        }
        .process-card-back {
          background: var(--corp-navy);
          color: var(--corp-white);
          transform: rotateY(180deg);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .process-step-num-modern {
          font-family: var(--font-heading);
          font-size: 3.5rem;
          font-weight: 900;
          color: rgba(15, 23, 42, 0.04);
          position: absolute;
          top: 10px;
          right: 20px;
        }
        .process-step-icon-modern {
          width: 70px;
          height: 70px;
          background: var(--corp-bg);
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 32px;
          margin-bottom: 24px;
          box-shadow: var(--corp-shadow-sm);
          border: 1px solid var(--corp-gray-200);
          position: relative;
          z-index: 2;
          transition: all 0.3s ease;
        }
        .process-card-modern:hover .process-step-icon-modern {
          transform: scale(1.1);
        }
        .process-step-title-modern {
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--corp-navy);
          position: relative;
          z-index: 2;
        }
        .process-step-desc-modern {
          font-size: 1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.9);
          font-weight: 500;
        }

        /* Card 2 Highlight Styles (Dark Green Theme) */
        .process-card-modern.highlight-card .process-card-front {
          background: #0F3D26 !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
        }
        .process-card-modern.highlight-card .process-card-back {
          background: #0F3D26 !important;
          border: 1px solid rgba(255, 255, 255, 0.15) !important;
        }
        .process-card-modern.highlight-card .process-step-num-modern {
          color: rgba(255, 255, 255, 0.08) !important;
        }
        .process-card-modern.highlight-card .process-step-title-modern {
          color: #FFF !important;
        }
        .process-card-modern.highlight-card .process-step-desc-modern {
          color: rgba(255, 255, 255, 0.95) !important;
        }
        .process-card-modern.highlight-card .process-step-icon-modern {
          background: rgba(255, 255, 255, 0.1) !important;
          border: 1px solid rgba(255, 255, 255, 0.25) !important;
          color: #FFF !important;
          box-shadow: none !important;
        }
        .process-card-badge, .process-card-badge-back {
          font-family: var(--font-heading);
          font-size: 0.75rem;
          font-weight: 800;
          color: #C8A35F;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          margin-top: 15px;
          display: block;
          text-align: center;
        }
        .process-card-badge-back {
          margin-top: 20px;
          position: absolute;
          bottom: 20px;
        }
      `})]})};export{x as default};
