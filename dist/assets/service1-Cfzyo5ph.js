import{r as c,j as e,R as f}from"./index-CA7lWDRQ.js";import{C as u}from"./Container-eiA-tSeX.js";import{R as w,C as p}from"./Col-BLp7inXf.js";import{M as b,s as y,a as k,b as j}from"./script-dNasFfng.js";import{u as N}from"./useLanguage-D9UTKzGu.js";import{f as C}from"./main-Brbi_S3Y.js";import{S as _}from"./StyleTag-BwK4lRRZ.js";const S=i=>[{link:y,title:i("free_shipping"),service:i("free_shipping_worldwide")},{link:k,title:i("24x7_service"),service:i("online_service_24x7")},{link:j,title:i("festival_offer"),service:i("new_online_special_festival_offer")}],z=(i,a)=>{const o=(i==null?void 0:i.translations)||[],n=o.find(t=>t.locale===a)||o.find(t=>t.locale==="en")||{};return{title:n.title||i.title||"",description:n.description||i.description||""}},E=({src:i,alt:a})=>f.isValidElement(i)?e.jsx("span",{className:"svc-icon-wrap",children:i}):typeof i=="string"&&i.trim()?e.jsx("span",{className:"svc-icon-wrap",children:e.jsx("img",{src:i,alt:a||"",width:56,height:56,loading:"lazy",style:{objectFit:"contain",display:"block"}})}):e.jsx("span",{className:"svc-icon-wrap svc-fallback","aria-hidden":"true",children:"★"}),F=()=>e.jsxs("div",{className:"svc-card svc-skeleton",children:[e.jsx("div",{className:"svc-icon-wrap"}),e.jsxs("div",{className:"svc-text",children:[e.jsx("div",{className:"svc-line svc-line-lg"}),e.jsx("div",{className:"svc-line"})]})]}),T=({sectionClass:i=""})=>{const{t:a,isRTL:o,currentLanguage:n}=N(),[t,l]=c.useState(null),[d,v]=c.useState(null);c.useEffect(()=>{let s=!0;return(async()=>{try{const r=await C();if(!s)return;l(Array.isArray(r)?r:[])}catch(r){if(!s)return;v((r==null?void 0:r.message)||"Failed to load choices"),l([])}})(),()=>{s=!1}},[]);const g=t===null,x=c.useMemo(()=>Array.isArray(t)&&t.length?t.map(s=>{const{title:r,description:m}=z(s,n),h=s.icon_path??s.icon??null;return{id:s.id??`${r}-${Math.random()}`,icon:h,title:r,description:m}}):S(a).map((s,r)=>({id:`legacy-${r}`,icon:s.link,title:s.title,description:s.service})),[t,n,a]);return e.jsxs(u,{className:"section-b-space section-t-space",children:[e.jsxs("section",{className:`service-section  ${i}`,style:{direction:o?"rtl":"ltr"},children:[e.jsx(w,{className:"gx-4 gy-4",children:g?Array.from({length:3}).map((s,r)=>e.jsx(p,{md:"4",sm:"6",xs:"12",children:e.jsx(F,{})},`skeleton-${r}`)):x.map(s=>e.jsx(p,{md:"4",sm:"6",xs:"12",children:e.jsxs("div",{className:"svc-card",children:[e.jsx(E,{src:s.icon,alt:s.title}),e.jsx("div",{className:"svc-text",children:e.jsx(b,{link:null,title:e.jsx("span",{className:"svc-title",children:s.title}),service:e.jsx("span",{className:"svc-desc",children:s.description})})})]})},s.id))}),d&&!1]}),e.jsx(_,{global:!0,css:`
        /* Layout container */
        .service-section {
          padding-block: 40px;
          position: relative;
        }

        /* Corporate Card */
        .svc-card {
          display: grid;
          grid-template-columns: 64px 1fr;
          gap: 20px;
          align-items: center;
          padding: 24px 20px;
          border: 1px solid var(--corp-gray-200, #E9ECEF);
          border-radius: var(--corp-radius-xl, 24px);
          background: var(--corp-white, #fff);
          min-height: 120px;
          box-shadow: var(--corp-shadow-sm, 0 2px 8px rgba(0,0,0,0.06));
          transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
          position: relative;
          overflow: hidden;
        }
        .svc-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; width: 100%; height: 3px;
          background: linear-gradient(90deg, var(--corp-gold, #C8A35F), var(--corp-gold-light, #D4B876));
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .svc-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--corp-shadow-lg, 0 16px 48px rgba(0,0,0,0.12));
          border-color: var(--corp-gold, #C8A35F);
        }
        .svc-card:hover::before {
          opacity: 1;
        }

        /* Icon Wrapper */
        .svc-icon-wrap {
          width: 64px;
          height: 64px;
          min-width: 64px;
          display: grid;
          place-items: center;
          background: var(--corp-gold-glow, rgba(200,163,95,0.15));
          border-radius: 20px;
          color: var(--corp-gold-dark, #B8923E);
          font-size: 24px;
          transition: all 0.4s ease;
        }
        .svc-card:hover .svc-icon-wrap {
          transform: scale(1.1) rotate(5deg);
          background: linear-gradient(135deg, var(--corp-gold, #C8A35F), var(--corp-gold-light, #D4B876));
          color: var(--corp-navy, #0F1B2D);
        }
        .svc-icon-wrap img {
          display: block;
          width: 36px;
          height: 36px;
          object-fit: contain;
          transition: filter 0.4s ease;
        }
        .svc-card:hover .svc-icon-wrap img {
          filter: brightness(0);
        }

        /* Text */
        .svc-text {
          display: grid;
          align-content: center;
          gap: 6px;
          position: relative;
          z-index: 2;
        }
        .svc-title {
          font-family: var(--font-heading, 'Outfit', sans-serif);
          font-size: 1.15rem;
          font-weight: 800;
          line-height: 1.2;
          margin: 0;
          color: var(--corp-navy, #0F1B2D);
        }
        .svc-desc {
          margin: 0;
          color: var(--corp-text-secondary, #64748B);
          line-height: 1.6;
          font-size: 0.95rem;
        }

        /* Skeletons */
        .svc-skeleton {
          pointer-events: none;
          border-color: var(--corp-gray-200);
        }
        .svc-skeleton .svc-icon-wrap,
        .svc-line {
          background: linear-gradient(90deg, #f3f4f6 25%, #e5e7eb 37%, #f3f4f6 63%);
          background-size: 400% 100%;
          animation: svc-shimmer 1.2s ease-in-out infinite;
        }
        .svc-line {
          height: 12px;
          border-radius: 8px;
          width: 100%;
        }
        .svc-line + .svc-line {
          margin-top: 8px;
          width: 80%;
        }
        .svc-line-lg {
          height: 14px;
          width: 60%;
        }
        @keyframes svc-shimmer {
          0% { background-position: 100% 50%; }
          100% { background-position: 0 50%; }
        }

        /* Responsive tweaks */
        @media (max-width: 767px) {
          .svc-card {
            grid-template-columns: 56px 1fr;
            gap: 16px;
            padding: 20px 16px;
            min-height: 100px;
          }
          .svc-icon-wrap {
            width: 56px;
            height: 56px;
            min-width: 56px;
            border-radius: 16px;
          }
          .svc-icon-wrap img {
            width: 32px;
            height: 32px;
          }
          .svc-title {
            font-size: 1.05rem;
          }
          .svc-desc {
            font-size: 0.9rem;
          }
        }
      `})]})};export{T as S};
