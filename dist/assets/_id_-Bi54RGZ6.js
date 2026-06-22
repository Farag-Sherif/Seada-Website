import{u as _,r as g,j as i}from"./index-ChhymkBp.js";import{C}from"./Container-ChqoEG-p.js";import{R as P,C as A}from"./Col-DjLCX8et.js";import{S}from"./Spinner-BoWA9ZyR.js";import{C as k}from"./common-layout-Dv1v_jY4.js";import R from"./product_section-B4166Rvh.js";import D from"./product-tab-B9ecj3Zz.js";import H from"./detail-price-D0puxCpl.js";import{a as I}from"./products-DLRSATAe.js";import{u as E}from"./useLanguage-Buya9Lac.js";import{S as L}from"./StyleTag-CEqtSeyD.js";import"./utils-hTTS5mlv.js";import"./MasterFooter-jzXcx62E.js";import"./NextLinkCompat-DdOLM1fO.js";import"./categories-C9sK9T9c.js";import"./main-C61Kjg3y.js";import"./useProductAdapter-BYYBmLiZ.js";import"./ModalBody-DAwaWgPF.js";import"./Fade-B-xtHqGD.js";import"./Transition-D5xtfJ2d.js";import"./cart-CACDPqq8.js";import"./TabPane-B9DKOZkJ.js";import"./size-chart-pXoz67wP.js";import"./Media-DeKPynsr.js";const z=t=>{var e;return(t==null?void 0:t.item)||((e=t==null?void 0:t.data)==null?void 0:e.item)||(t==null?void 0:t.data)||t||null},M=t=>{var e;return(t==null?void 0:t.related)||((e=t==null?void 0:t.data)==null?void 0:e.related)||[]},b=t=>{if(!t)return"";if(/^https?:\/\//i.test(t))return t;try{const e=typeof window<"u"?window.location.origin:"https://newstore.test.do-go.net";return new URL(t,e).toString()}catch{return t}},T=(t,e)=>{var u,l;if(!t)return null;const o=Array.isArray(t.translations)?t.translations.find(s=>s.locale===(e?"ar":"en"))||t.translations.find(s=>s.locale===(e?"en":"ar")):null,c=(o==null?void 0:o.name)||t.name||"",f=Number(t.total??t.price??0),d=Number(t.discount??0),r=[];return t.image_path&&r.push({alt:c,src:b(t.image_path)}),Array.isArray(t.media)&&t.media.forEach(s=>r.push({alt:c,src:b(s.image_path),id:s.id})),{id:t.id,title:c,price:f,discount:d,is_available:!!t.is_available,images:r,image:((u=r[0])==null?void 0:u.src)||"",thumbnail:((l=r[0])==null?void 0:l.src)||"",raw:t}},$=(t,e)=>{var l,s;if(!t)return null;const o=Array.isArray(t.translations)?t.translations.find(m=>m.locale===(e?"ar":"en"))||t.translations.find(m=>m.locale===(e?"en":"ar")):null,c=(o==null?void 0:o.name)||t.name||"",f=(o==null?void 0:o.description)||t.description||"",d=[];t.image_path&&d.push(b(t.image_path)),Array.isArray(t.media)&&t.media.forEach(m=>{const x=b(m.image_path);x&&!d.includes(x)&&d.push(x)}),d.length===0&&d.push("");const r={};t.serial_number&&(r.serial_number=t.serial_number),t.sku&&(r.stock_number=t.sku),t.weight&&(r.weight=t.weight+(t.weight_unit||" g"));const u=((l=t.sub_category)==null?void 0:l.name)||((s=t.category)==null?void 0:s.name)||"";return u&&(r.category=u),{title:c,descriptionHtml:f,images:d,details:r,price:Number(t.total??t.price??0),discount:Number(t.discount??0),is_available:!!t.is_available,variants:t.variants||[],raw:t}},pt=()=>{var j;const e=(j=_().query)==null?void 0:j.id,{isRTL:o,t:c}=E(),[f,d]=g.useState(!0),[r,u]=g.useState(null),[l,s]=g.useState([]),[m,x]=g.useState(0);g.useEffect(()=>{if(!e)return;let p=!0;return(async()=>{try{d(!0);const n=await I(Number(e));if(!p)return;u(z(n)),s(M(n)),x(0),window.scrollTo({top:0,behavior:"smooth"})}catch{p&&(u(null),s([]))}finally{p&&d(!1)}})(),()=>{p=!1}},[e]);const a=g.useMemo(()=>$(r,o),[r,o]),v=g.useMemo(()=>{if(!Array.isArray(l))return[];const p=l.map(h=>T(h,o)).filter(Boolean),n=Number(e);return p.filter(h=>h.id!==n)},[l,o,e]),N=g.useMemo(()=>a?{title:a.title,descriptionHtml:a.descriptionHtml,variants:a.variants,price:a.price,discount:a.discount}:null,[a]),y=(p,n)=>{try{const h=c==null?void 0:c(p);return h&&h!==p?h:n}catch{return n}};return i.jsxs(k,{parent:"Home",title:y("product","Product"),children:[i.jsx("section",{className:"pdp-section",dir:o?"rtl":"ltr",children:i.jsx(C,{children:f?i.jsxs("div",{className:"pdp-loading",children:[i.jsx(S,{color:"success",style:{width:"3rem",height:"3rem"}}),i.jsx("p",{children:o?"جارٍ تحميل المنتج...":"Loading product..."})]}):a?i.jsxs(i.Fragment,{children:[i.jsxs(P,{className:"g-4 g-lg-5",children:[i.jsx(A,{lg:"6",children:i.jsxs("div",{className:"pdp-gallery",children:[i.jsxs("div",{className:"pdp-main-img-wrapper",children:[i.jsx("img",{src:a.images[m]||a.images[0],alt:a.title,className:"pdp-main-img"}),a.discount>0&&i.jsxs("span",{className:"pdp-badge-discount",children:["-",a.discount,"%"]})]}),a.images.length>1&&i.jsx("div",{className:"pdp-thumbs",children:a.images.map((p,n)=>i.jsx("button",{className:`pdp-thumb ${n===m?"active":""}`,onClick:()=>x(n),children:i.jsx("img",{src:p,alt:`${a.title} ${n+1}`})},n))})]})}),i.jsx(A,{lg:"6",children:i.jsx(H,{item:N})})]}),i.jsx("div",{id:"description-tab",children:i.jsx(D,{descriptionHtml:a.descriptionHtml,details:a.details})})]}):i.jsx("div",{className:"pdp-loading",children:i.jsx("h3",{children:o?"المنتج غير موجود":"Product not found"})})})}),!f&&v.length>0&&i.jsx(R,{products:v,items:v,sectionTitle:y("related_products",o?"منتجات ذات صلة":"Related Products")}),i.jsx(L,{global:!0,css:`
        .pdp-section {
          padding: 140px 0 60px;
          background: var(--corp-bg-alt);
          min-height: 60vh;
        }
        .pdp-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          min-height: 400px;
          gap: 20px;
          color: var(--corp-text-secondary);
        }
        .pdp-gallery {
          position: sticky;
          top: 100px;
        }
        .pdp-main-img-wrapper {
          position: relative;
          background: var(--corp-white);
          border-radius: var(--corp-radius-xl);
          border: 1px solid var(--corp-gray-200);
          overflow: hidden;
          box-shadow: var(--corp-shadow-sm);
          aspect-ratio: 4 / 3;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pdp-main-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transition: transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
          padding: 24px;
        }
        .pdp-main-img-wrapper:hover .pdp-main-img {
          transform: scale(1.05);
        }
        .pdp-badge-discount {
          position: absolute;
          top: 16px;
          left: 16px;
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: #fff;
          font-weight: 800;
          font-size: 0.85rem;
          padding: 6px 14px;
          border-radius: var(--corp-radius-full);
          box-shadow: 0 4px 12px rgba(239, 68, 68, 0.3);
        }
        [dir="rtl"] .pdp-badge-discount {
          left: auto;
          right: 16px;
        }
        .pdp-thumbs {
          display: flex;
          gap: 12px;
          margin-top: 16px;
          overflow-x: auto;
          padding-bottom: 4px;
        }
        .pdp-thumb {
          flex-shrink: 0;
          width: 80px;
          height: 80px;
          border-radius: var(--corp-radius-md);
          overflow: hidden;
          border: 2px solid var(--corp-gray-200);
          background: var(--corp-white);
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 4px;
        }
        .pdp-thumb:hover {
          border-color: var(--corp-accent);
          transform: translateY(-2px);
        }
        .pdp-thumb.active {
          border-color: var(--corp-navy);
          box-shadow: 0 4px 12px rgba(22, 121, 60, 0.2);
        }
        .pdp-thumb img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
        @media (max-width: 991.98px) {
          .pdp-gallery { position: static; }
          .pdp-section { padding: 120px 0 40px; }
        }
        @media (max-width: 575.98px) {
          .pdp-thumb { width: 64px; height: 64px; }
          .pdp-section { padding: 100px 0 30px; }
        }
      `})]})};export{pt as default};
