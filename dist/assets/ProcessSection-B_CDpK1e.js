import{j as u}from"./index-CFdUqYMq.js";import{C as t}from"./Container-wLonXKyg.js";import{u as i}from"./useLanguage-BWW6GnpT.js";import{S as a}from"./StyleTag-eNEH9FNM.js";import"./utils-CwDDfIjG.js";const c=e=>[{num:"01",icon:"📋",title:e?"الاستفسار":"Inquiry",desc:e?"تواصل معنا لمناقشة متطلباتك واحتياجاتك.":"Reach out to us to discuss your requirements and needs."},{num:"02",icon:"💬",title:e?"الاستشارة":"Consultation",desc:e?"فريقنا المختص يقدم لك الحلول والتوصيات المناسبة.":"Our expert team provides tailored solutions and recommendations."},{num:"03",icon:"🏭",title:e?"الإنتاج":"Production",desc:e?"تصنيع منتجاتك وفق أعلى معايير الجودة والدقة.":"Manufacturing your products with the highest quality and precision."},{num:"04",icon:"🔍",title:e?"فحص الجودة":"Quality Check",desc:e?"فحوصات صارمة لضمان مطابقة المنتج للمواصفات.":"Rigorous inspections to ensure products meet all specifications."},{num:"05",icon:"🚚",title:e?"التوصيل":"Delivery",desc:e?"شحن آمن وسريع إلى وجهتك في أي مكان بالعالم.":"Safe and fast shipping to your destination anywhere in the world."}],h=()=>{const{isRTL:e}=i(),o=c(e);return u.jsxs("section",{className:"corp-section process-section-modern",id:"process",dir:e?"rtl":"ltr",children:[u.jsxs(t,{children:[u.jsxs("div",{className:"corp-section-header",children:[u.jsx("span",{className:"corp-label",children:e?"آلية العمل":"Our Process"}),u.jsx("h2",{children:e?"كيف نعمل":"How We Work"}),u.jsx("div",{className:"corp-gold-line",style:{background:"var(--corp-accent-gradient)"}}),u.jsx("p",{className:"process-subtitle",children:e?"نتبع منهجية واضحة ومنظمة لضمان تقديم أفضل النتائج لعملائنا عبر خمس خطوات استراتيجية.":"We follow a clear and organized methodology to deliver the best results for our clients through five strategic steps."})]}),u.jsx("div",{className:"process-timeline-modern",children:o.map((r,s)=>u.jsx("div",{className:"process-card-modern",style:{animationDelay:`${s*.1}s`},children:u.jsxs("div",{className:"process-card-inner",children:[u.jsxs("div",{className:"process-card-front",children:[u.jsx("div",{className:"process-step-num-modern",children:r.num}),u.jsx("div",{className:"process-step-icon-modern",children:r.icon}),u.jsx("h4",{className:"process-step-title-modern",children:r.title})]}),u.jsx("div",{className:"process-card-back",children:u.jsx("p",{className:"process-step-desc-modern",children:r.desc})})]})},s))})]}),u.jsx(a,{global:!0,css:`
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
      `})]})};export{h as default};
