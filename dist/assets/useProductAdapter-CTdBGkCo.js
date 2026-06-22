import{r as k,j as a}from"./index-BSLUAvK_.js";import{N as g}from"./NextLinkCompat-Dv7VX4fU.js";import{R as j,C as w}from"./Col-CWqVzBv2.js";import{M as N,a as A}from"./ModalBody-TlnqNvvx.js";import{S as q}from"./StyleTag-_AcOVe2g.js";import{u as z}from"./useLanguage-DKlD7w_a.js";const S=({product:o,isRTL:e,className:r=""})=>{const{t}=z(),[c,d]=k.useState(!1);if(!o)return null;const i=o.images[0].src||"";console.log("imgUrl",o);const n=o.title||"",s=`/product-details/${o.id}`,p=m=>{m&&(m.preventDefault(),m.stopPropagation()),d(!c)},u={viewDetails:t("view_details")||(e?"عرض التفاصيل":"View Details"),requestInfo:t("request_info")||(e?"طلب استفسار":"Request Info"),quickView:t("quick_view")||(e?"نظرة سريعة":"Quick View"),catalog:t("catalog")||(e?"الكتالوج":"Catalog")};return a.jsxs("div",{className:`corp-product-wrap ${r}`,dir:e?"rtl":"ltr",children:[a.jsxs("div",{className:"corp-product-card glass-card",children:[a.jsxs("div",{className:"corp-product-img-wrap",children:[a.jsx(g,{href:s,className:"corp-product-img-link",children:a.jsx("img",{src:i,alt:n,className:"img-fluid blur-up lazyload"})}),a.jsx("button",{className:"corp-product-quick-btn",onClick:p,title:u.quickView,children:a.jsx("i",{className:"fa fa-eye"})})]}),a.jsxs("div",{className:"corp-product-info",children:[a.jsx("div",{className:"corp-product-badge",children:u.catalog}),a.jsx(g,{href:s,className:"corp-product-title-link",children:a.jsx("h4",{className:"corp-product-title",children:n})}),a.jsx("div",{className:"corp-product-actions",children:a.jsx(g,{href:s,className:"corp-btn corp-btn-navy corp-btn-sm w-100",children:u.viewDetails})})]})]}),a.jsx(N,{isOpen:c,toggle:p,centered:!0,size:"lg",className:"corp-quickview-modal",children:a.jsxs(A,{className:"p-0",children:[a.jsx("button",{onClick:p,className:"corp-modal-close",children:"×"}),a.jsxs(j,{className:"g-0",children:[a.jsx(w,{lg:"6",md:"6",className:"modal-img-col",children:a.jsx("img",{src:i,alt:n,className:"img-fluid"})}),a.jsxs(w,{lg:"6",md:"6",className:"modal-content-col",children:[a.jsxs("div",{className:"modal-info-wrap",children:[a.jsx("h3",{children:n}),a.jsx("div",{className:"modal-divider"}),a.jsx("p",{className:"modal-desc",children:e?"استكشف هذا المنتج عالي الجودة المصمم لتلبية أعلى المعايير المهنية. اطلب معلومات لمعرفة المزيد.":"Explore this premium quality product designed to meet the highest professional standards. Request information to learn more."}),a.jsxs("ul",{className:"modal-features",children:[a.jsxs("li",{children:[a.jsx("i",{className:"fa fa-check-circle"})," ",e?"جودة احترافية عالية":"Premium Professional Quality"]}),a.jsxs("li",{children:[a.jsx("i",{className:"fa fa-check-circle"})," ",e?"متاح لطلبات الجملة":"Available for Bulk Orders"]}),a.jsxs("li",{children:[a.jsx("i",{className:"fa fa-check-circle"})," ",e?"دعم فني مخصص":"Dedicated Technical Support"]})]})]}),a.jsxs("div",{className:"modal-actions-wrap",children:[a.jsx(g,{href:s,className:"corp-btn corp-btn-navy w-100 mb-2",children:u.viewDetails}),a.jsx("a",{href:"/contact",className:"corp-btn corp-btn-primary w-100",children:u.requestInfo})]})]})]})]})}),a.jsx(q,{global:!0,css:`
        .corp-product-wrap { height: 100%; }
        
        .glass-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }

        .corp-product-card {
          height: 100%;
          display: flex;
          flex-direction: column;
          border-radius: var(--corp-radius-xl);
          overflow: hidden;
          transition: all var(--corp-duration) var(--corp-ease-spring);
          position: relative;
        }

        .corp-product-card:hover {
          transform: translateY(-10px);
          box-shadow: var(--corp-shadow-lg);
          background: rgba(255, 255, 255, 0.9);
        }

        .corp-product-img-wrap {
          position: relative;
          aspect-ratio: 4 / 3;
          background: var(--corp-white);
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          border-radius: var(--corp-radius-xl) var(--corp-radius-xl) 0 0;
        }

        .corp-product-img-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          height: 100%;
          z-index: 1;
        }

        .corp-product-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 24px;
          transition: transform var(--corp-duration) var(--corp-ease);
        }

        .corp-product-card:hover .corp-product-img-wrap img {
          transform: scale(1.1);
        }

        .corp-product-quick-btn {
          position: absolute;
          bottom: 16px;
          ${e?"left":"right"}: 16px;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          border: none;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          color: var(--corp-navy);
          box-shadow: var(--corp-shadow-md);
          z-index: 2;
          display: grid;
          place-items: center;
          opacity: 0;
          transform: translateY(12px);
          transition: all var(--corp-duration) var(--corp-ease-spring);
          cursor: pointer;
          font-size: 1.1rem;
        }

        .corp-product-card:hover .corp-product-quick-btn {
          opacity: 1;
          transform: translateY(0);
        }

        .corp-product-quick-btn:hover {
          background: var(--corp-accent-gradient);
          color: var(--corp-white);
        }

        .corp-product-info {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex: 1;
        }

        .corp-product-badge {
          align-self: flex-start;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: var(--corp-accent);
          background: rgba(var(--corp-accent-rgba), 0.1);
          padding: 4px 10px;
          border-radius: var(--corp-radius-sm);
        }

        .corp-product-title-link {
          text-decoration: none !important;
          flex: 1;
        }

        .corp-product-title {
          font-family: var(--font-heading);
          font-size: 1.25rem;
          font-weight: 800;
          color: var(--corp-navy);
          line-height: 1.4;
          margin: 0;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          transition: color 0.3s ease;
        }

        .corp-product-card:hover .corp-product-title {
          color: var(--corp-accent);
        }

        .corp-product-actions {
          margin-top: auto;
          opacity: 0.9;
          transition: opacity 0.3s ease;
        }

        .corp-product-card:hover .corp-product-actions {
          opacity: 1;
        }

        /* Modal Styles */
        .corp-quickview-modal .modal-content {
          border-radius: var(--corp-radius-xl);
          overflow: hidden;
          border: none;
          box-shadow: var(--corp-shadow-xl);
        }

        .corp-modal-close {
          position: absolute;
          top: 16px;
          ${e?"left":"right"}: 16px;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: var(--corp-white);
          border: 1px solid var(--corp-gray-200);
          color: var(--corp-navy);
          font-size: 1.5rem;
          line-height: 1;
          display: grid;
          place-items: center;
          cursor: pointer;
          z-index: 10;
          transition: all 0.3s ease;
        }

        .corp-modal-close:hover {
          background: #ef4444;
          color: #fff;
          border-color: #ef4444;
        }

        .modal-img-col {
          background: var(--corp-gray-50);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px;
        }

        .modal-img-col img {
          width: 100%;
          height: auto;
          max-height: 400px;
          object-fit: contain;
        }

        .modal-content-col {
          padding: 40px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .modal-info-wrap h3 {
          font-size: 1.8rem;
          font-weight: 800;
          color: var(--corp-navy);
          margin-bottom: 16px;
          line-height: 1.3;
        }

        .modal-divider {
          width: 60px;
          height: 4px;
          background: var(--corp-accent-gradient);
          border-radius: 2px;
          margin-bottom: 24px;
        }

        .modal-desc {
          font-size: 1rem;
          color: var(--corp-text-secondary);
          line-height: 1.7;
          margin-bottom: 24px;
        }

        .modal-features {
          list-style: none;
          padding: 0;
          margin: 0 0 32px 0;
        }

        .modal-features li {
          font-size: 0.95rem;
          color: var(--corp-navy);
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          gap: 10px;
          font-weight: 600;
        }

        .modal-features li i {
          color: var(--corp-accent);
          font-size: 1.1rem;
        }

        .modal-actions-wrap {
          margin-top: auto;
        }
      `})]})},y=(o,e)=>{var c,d;if(!o)return o;const r=(c=o.translations)==null?void 0:c.find(i=>i.locale==="ar"),t=(d=o.translations)==null?void 0:d.find(i=>i.locale==="en");return e?r||t||o:t||r||o},F=o=>({adapt:k.useMemo(()=>r=>{var m,h,x,f,b,v;const t=((m=r==null?void 0:r.translations)==null?void 0:m.find(l=>l.locale===(o?"ar":"en")))||((h=r==null?void 0:r.translations)==null?void 0:h[0]),c=(t==null?void 0:t.name)||(r==null?void 0:r.name)||"",d=(t==null?void 0:t.description)||(r==null?void 0:r.description)||"",i=Number((r==null?void 0:r.total)??(r==null?void 0:r.price)??0),n=Number((r==null?void 0:r.discount)??0),s=[];r!=null&&r.image_path&&s.push({id:"main",src:r.image_path,alt:c}),Array.isArray(r==null?void 0:r.media)&&r.media.forEach(l=>{l!=null&&l.image_path&&s.push({id:l.id,src:l.image_path,alt:c})});const p=((x=y(r==null?void 0:r.category,o))==null?void 0:x.name)||((f=r==null?void 0:r.category)==null?void 0:f.name)||"",u=((b=y(r==null?void 0:r.cafe,o))==null?void 0:b.name)||((v=r==null?void 0:r.cafe)==null?void 0:v.name)||(r==null?void 0:r.brand)||"";return{id:r==null?void 0:r.id,title:c,description:d,price:i,discount:n,type:(r==null?void 0:r.type)||"normal",brand:u,category:p,stock:r!=null&&r.is_available?99:0,sale:n>0,new:!1,variants:[],images:s,raw:r}},[o])});export{S as P,F as u};
