import{r as u,j as r}from"./index-DD-by8OP.js";import{N as h}from"./NextLinkCompat-Bh9VOnVp.js";import{M as m,a as g}from"./ModalBody-CLizz0wB.js";import{M as f,s as y}from"./size-chart-CPeZpOtE.js";import{M as v}from"./Media-Bq-29sQP.js";import{u as b}from"./useLanguage-Bz4ifLKL.js";import{S as j}from"./StyleTag-PeRYAPZW.js";import"./utils-DKGoq2xj.js";import"./Fade-B0Wcv5vN.js";import"./Transition-Pg8wTugm.js";const H=({item:a,stickyClass:c="",changeColorVar:d})=>{const{t:s,isRTL:t}=b(),[p,x]=u.useState(!1),l=()=>x(o=>!o),i=u.useMemo(()=>{const o=new Set;return((a==null?void 0:a.variants)||[]).forEach(e=>(e==null?void 0:e.size)&&o.add(e.size)),Array.from(o)},[a]),n=u.useMemo(()=>{const o=new Map;return((a==null?void 0:a.variants)||[]).forEach(e=>{e!=null&&e.color&&!o.has(e.color)&&o.set(e.color,e)}),Array.from(o.values())},[a]);return r.jsxs(r.Fragment,{children:[r.jsxs("div",{className:`seada-luxury-details product-right ${c}`,dir:t?"rtl":"ltr",children:[r.jsx("h2",{children:(a==null?void 0:a.title)||""}),r.jsx("div",{className:"product-divider"}),((i==null?void 0:i.length)??0)>0&&r.jsxs("div",{className:"luxury-variant-box",children:[r.jsxs("div",{className:"variant-header",children:[r.jsx("h6",{children:(s==null?void 0:s("select_size"))||(t?"اختر المقاس":"Select Size")}),r.jsxs("a",{href:null,onClick:l,className:"size-chart-link",children:[r.jsx("i",{className:"fa fa-bar-chart"})," ",(s==null?void 0:s("size_chart"))||(t?"دليل المقاسات":"Size chart")]})]}),r.jsxs(m,{isOpen:p,toggle:l,centered:!0,className:"luxury-modal",children:[r.jsx(f,{toggle:l,children:(s==null?void 0:s("size_chart"))||(t?"دليل المقاسات":"Size Chart")}),r.jsx(g,{children:r.jsx(v,{src:y.src,alt:"size",className:"img-fluid"})})]}),r.jsx("div",{className:"size-box",children:r.jsx("ul",{className:"luxury-size-list",children:i.map(o=>r.jsx("li",{children:r.jsx("a",{href:null,children:o})},o))})})]}),((n==null?void 0:n.length)??0)>0&&r.jsxs("div",{className:"luxury-variant-box",children:[r.jsx("h6",{children:(s==null?void 0:s("color"))||(t?"اللون":"Color")}),r.jsx("div",{className:"color-variant luxury-color-list",children:n.map((o,e)=>r.jsx("span",{onClick:()=>typeof d=="function"&&d((o==null?void 0:o.image_id)??e),style:{background:o.color},className:"color-dot"},`${o.color}-${e}`))})]}),r.jsxs("div",{className:"luxury-actions mt-4",children:[r.jsxs(h,{href:"/contact",className:"btn-luxury-buy",children:[r.jsx("i",{className:"fa fa-envelope-o"})," ",t?"طلب استفسار":"Request a Quote"]}),r.jsxs("a",{href:"#description-tab",className:"btn-luxury-cart",onClick:o=>{var e;o.preventDefault(),(e=document.getElementById("description-tab"))==null||e.scrollIntoView({behavior:"smooth"})},children:[r.jsx("i",{className:"fa fa-file-text-o"})," ",t?"التفاصيل الفنية":"View Specifications"]})]}),(a==null?void 0:a.descriptionHtml)&&r.jsxs("div",{className:"luxury-description-box mt-4",children:[r.jsx("h6",{children:(s==null?void 0:s("product_details"))||(t?"نبذة عن المنتج":"Overview")}),r.jsx("div",{dangerouslySetInnerHTML:{__html:a.descriptionHtml.length>250?a.descriptionHtml.substring(0,250)+"...":a.descriptionHtml},className:"desc-content"})]})]}),r.jsx(j,{global:!0,css:`
        .seada-luxury-details {
          position: relative;
          z-index: 5;
          padding: 32px;
          background: var(--corp-white);
          border-radius: var(--corp-radius-xl);
          border: 1px solid var(--corp-gray-200);
          box-shadow: var(--corp-shadow-sm);
        }
        .seada-luxury-details h2 {
          font-family: var(--font-heading);
          font-weight: 800;
          font-size: 2rem;
          color: var(--corp-navy);
          margin-bottom: 20px;
          line-height: 1.3;
        }
        .product-divider {
          height: 1px;
          background: var(--corp-gray-200);
          margin-bottom: 24px;
        }
        .luxury-variant-box {
          margin-bottom: 24px;
        }
        .luxury-variant-box h6 {
          font-family: var(--font-heading);
          font-weight: 700;
          color: var(--corp-slate);
          margin-bottom: 12px;
          font-size: 1.05rem;
        }
        .variant-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .size-chart-link {
          font-size: 0.9rem;
          color: var(--corp-gold-dark) !important;
          font-weight: 600;
          cursor: pointer;
        }
        .luxury-size-list {
          display: flex;
          gap: 10px;
          padding: 0;
          list-style: none;
        }
        .luxury-size-list a {
          display: grid;
          place-items: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #fff;
          border: 1px solid var(--corp-gray-300);
          color: var(--corp-navy);
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
          text-decoration: none !important;
        }
        .luxury-size-list a:hover {
          background: var(--corp-gold);
          color: var(--corp-white);
          border-color: var(--corp-gold);
        }
        .luxury-color-list {
          display: flex;
          gap: 12px;
        }
        .color-dot {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid #fff;
          box-shadow: 0 0 0 1px rgba(0,0,0,0.1);
          transition: transform 0.3s ease;
          cursor: pointer;
        }
        .color-dot:hover {
          transform: scale(1.15);
        }
        .luxury-actions {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .btn-luxury-cart {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 24px;
          background: #fff;
          border: 2px solid var(--corp-navy);
          color: var(--corp-navy) !important;
          font-family: var(--font-body);
          font-weight: 700;
          font-size: 1.05rem;
          border-radius: var(--corp-radius-md);
          transition: all 0.3s ease;
          text-decoration: none !important;
          cursor: pointer;
        }
        .btn-luxury-cart:hover {
          background: var(--corp-gray-50);
          transform: translateY(-2px);
          box-shadow: var(--corp-shadow-md);
        }
        .btn-luxury-buy {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          padding: 16px 24px;
          background: linear-gradient(135deg, var(--corp-gold) 0%, var(--corp-gold-light) 100%);
          border: none;
          color: var(--corp-navy) !important;
          font-family: var(--font-body);
          font-weight: 800;
          font-size: 1.05rem;
          border-radius: var(--corp-radius-md);
          transition: all 0.3s ease;
          text-decoration: none !important;
          box-shadow: var(--corp-shadow-gold);
          cursor: pointer;
        }
        .btn-luxury-buy:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 30px rgba(200, 163, 95, 0.35);
          filter: brightness(1.05);
        }
        .luxury-description-box {
          background: var(--corp-gray-50);
          padding: 24px;
          border-radius: var(--corp-radius-md);
          border: 1px solid var(--corp-gray-200);
        }
        .luxury-description-box h6 {
          font-family: var(--font-heading);
          font-weight: 800;
          color: var(--corp-navy);
          margin-bottom: 12px;
          font-size: 1.1rem;
        }
        .desc-content {
          color: var(--corp-text-secondary);
          line-height: 1.7;
          font-size: 0.95rem;
        }
        @media (max-width: 768px) {
          .seada-luxury-details {
            padding: 24px 16px;
          }
        }
        /* Avoid any zoom overlay covering the details */
        .zoomImg,
        .image-zoom__lens,
        .image-zoom__overlay {
          z-index: 2 !important;
        }
      `})]})};export{H as default};
