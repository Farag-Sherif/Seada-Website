import{r as a,j as t}from"./index-CFdUqYMq.js";import{C as L}from"./Container-wLonXKyg.js";import{R as w,C as p}from"./Col-CAedqfHP.js";import{S as N}from"./Spinner-saduDvnt.js";import{C as _}from"./common-layout-Dm7LfAJB.js";import{u as z}from"./useLanguage-BWW6GnpT.js";import{g as R}from"./products-B_leRrge.js";import{g as D}from"./categories-D-E80POk.js";import{u as E,P as M}from"./useProductAdapter-V7wqj2qJ.js";import{S as B}from"./StyleTag-eNEH9FNM.js";import"./utils-CwDDfIjG.js";import"./MasterFooter-CdM7-0OH.js";import"./NextLinkCompat-B3113fWD.js";import"./main-CdtAQRt-.js";import"./api-LgIJUvAN.js";import"./ModalBody-DRaqtgKk.js";import"./Fade-C2R5gqNT.js";import"./Transition-FNCedJs_.js";const P=u=>{if(!u||/^https?:\/\//i.test(u))return u;try{const c=typeof window<"u"?window.location.origin:"https://newstore.test.do-go.net";return new URL(u,c).toString()}catch{return u}},re=()=>{const{isRTL:u}=z(),[c,x]=a.useState(!0),[h,g]=a.useState([]),[l,A]=a.useState(1),[S,b]=a.useState(!0),[k,F]=a.useState([]),[i,j]=a.useState(null),{adapt:y}=E(u);a.useEffect(()=>{let r=!0;return(async()=>{try{const e=await D();if(!r)return;const s=Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray(e)?e:[];F(s)}catch(e){console.error("Failed to load categories",e)}})(),()=>{r=!1}},[]),a.useEffect(()=>{let r=!0;return(async()=>{try{x(!0);const e={page:l,per_page:24};i&&(e.sub_category_id=i);const s=await R(e);if(!r)return;s&&s.data&&(g(l===1?s.data:o=>[...o,...s.data]),(s.current_page>=s.last_page||s.data.length===0)&&b(!1))}catch(e){console.error("Failed to load products",e)}finally{r&&x(!1)}})(),()=>{r=!1}},[l,i]);const C=r=>{j(i===r?null:r),A(1),b(!0),g([])},f=a.useMemo(()=>h.map(r=>{var d,m,n;const e=y(r);if(!e)return null;const s=((m=(d=e==null?void 0:e.images)==null?void 0:d[0])==null?void 0:m.src)||(e==null?void 0:e.image)||(e==null?void 0:e.thumbnail)||((n=e==null?void 0:e.raw)==null?void 0:n.image_path)||"",o=P(s);return{...e,image:o,thumbnail:o,images:((e==null?void 0:e.images)||[]).map(v=>({...v,src:P(v.src)}))}}).filter(Boolean),[h,y]);return t.jsxs(_,{parent:"Home",title:u?"المنتجات":"Products",children:[t.jsx("div",{className:"corp-section corp-section-alt",dir:u?"rtl":"ltr",children:t.jsxs(L,{children:[t.jsxs("div",{className:"corp-section-header",children:[t.jsx("span",{className:"corp-label",children:u?"الكتالوج الشامل":"Complete Catalog"}),t.jsx("h2",{children:u?"منتجاتنا عالية الجودة":"Our Premium Products"}),t.jsx("p",{children:u?"تصفح مجموعتنا الواسعة من المنتجات المصممة لتلبية متطلبات الشركات بدقة واحترافية عالية.":"Browse our extensive range of products designed to meet corporate requirements with precision and high professionalism."}),t.jsx("div",{className:"corp-gold-line"})]}),t.jsxs(w,{className:"g-4",children:[t.jsx(p,{lg:"3",md:"4",className:"mb-4",children:t.jsxs("div",{className:"corp-card filter-sidebar p-4 sticky-sidebar",children:[t.jsx("h4",{className:"filter-title",children:u?"التصنيفات":"Categories"}),t.jsxs("ul",{className:"filter-list",children:[t.jsx("li",{className:`filter-item ${i===null?"active":""}`,children:t.jsx("button",{onClick:()=>C(null),children:u?"جميع المنتجات":"All Products"})}),k.map(r=>{var s,o,d,m;const e=u?((o=(s=r.translations)==null?void 0:s.find(n=>n.locale==="ar"))==null?void 0:o.name)||r.name:((m=(d=r.translations)==null?void 0:d.find(n=>n.locale==="en"))==null?void 0:m.name)||r.name;return t.jsx("li",{className:`filter-item ${i===r.id?"active":""}`,children:t.jsx("button",{onClick:()=>C(r.id),children:e})},r.id)})]})]})}),t.jsxs(p,{lg:"9",md:"8",children:[c&&l===1?t.jsx("div",{className:"text-center py-5",children:t.jsx(N,{color:"primary"})}):t.jsx(w,{className:"g-4",children:f.length>0?f.map((r,e)=>t.jsx(p,{lg:"4",sm:"6",xs:"12",className:"mb-4",children:t.jsx(M,{product:r,isRTL:u})},r.id||e)):t.jsx(p,{xs:"12",className:"text-center py-5",children:t.jsx("div",{className:"corp-card",children:t.jsx("h4",{children:u?"لا توجد منتجات تطابق بحثك":"No products match your filter"})})})}),S&&!c&&f.length>0&&t.jsx("div",{className:"text-center mt-5",children:t.jsx("button",{className:"corp-btn corp-btn-outline-dark",onClick:()=>A(r=>r+1),children:u?"تحميل المزيد":"Load More"})}),c&&l>1&&t.jsx("div",{className:"text-center mt-5",children:t.jsx(N,{color:"primary",size:"sm"})})]})]})]})}),t.jsx(B,{global:!0,css:`
        .g-4 {
          --bs-gutter-y: 1.5rem;
          --bs-gutter-x: 1.5rem;
        }
        
        .sticky-sidebar {
          position: sticky;
          top: 100px;
          z-index: 10;
        }

        .filter-title {
          font-family: var(--font-heading);
          font-weight: 800;
          color: var(--corp-navy);
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--corp-gray-200);
          font-size: 1.25rem;
        }

        .filter-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .filter-item button {
          width: 100%;
          text-align: left;
          background: transparent;
          border: none;
          padding: 12px 16px;
          border-radius: var(--corp-radius-sm);
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--corp-text-secondary);
          transition: all var(--corp-duration) var(--corp-ease);
          cursor: pointer;
        }
        
        [dir="rtl"] .filter-item button {
          text-align: right;
        }

        .filter-item button:hover {
          background: rgba(59, 130, 246, 0.05);
          color: var(--corp-accent);
          transform: translateX(${u?"-4px":"4px"});
        }

        .filter-item.active button {
          background: var(--corp-accent-gradient);
          color: var(--corp-white);
          font-weight: 700;
          box-shadow: var(--corp-shadow-glow);
        }
      `})]})};export{re as default};
