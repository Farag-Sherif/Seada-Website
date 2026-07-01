import{r as a,u as z,j as t}from"./index-CA7lWDRQ.js";import{C as E}from"./Container-eiA-tSeX.js";import{R as S,C as f}from"./Col-BLp7inXf.js";import{S as k}from"./Spinner-6EG722rs.js";import{C as D}from"./common-layout-Dg8x28CU.js";import{u as M}from"./useLanguage-D9UTKzGu.js";import{g as q}from"./products-ClK3Pf0z.js";import{g as B}from"./categories-D3N0f1z0.js";import{u as $,P as H}from"./useProductAdapter-Vr_xaRe7.js";import{S as T}from"./StyleTag-BwK4lRRZ.js";import"./utils-dkOE3gQL.js";import"./MasterFooter-DEDPrMHE.js";import"./NextLinkCompat-CE--4CZt.js";import"./main-Brbi_S3Y.js";import"./ModalBody-D8sfG5dh.js";import"./Fade-9DJSvoLi.js";import"./Transition-COaoNEJ_.js";const _=s=>{if(!s||/^https?:\/\//i.test(s))return s;try{const m=typeof window<"u"?window.location.origin:"https://newstore.test.do-go.net";return new URL(s,m).toString()}catch{return s}},oe=()=>{var N;const{isRTL:s}=M(),[m,A]=a.useState(!0),[x,g]=a.useState([]),[p,h]=a.useState(1),[F,j]=a.useState(!0),d=(N=z().query)==null?void 0:N.category_id,[L,R]=a.useState([]),[o,b]=a.useState(d?Number(d)||d:null);a.useEffect(()=>{d&&(b(Number(d)||d),h(1),g([]))},[d]);const{adapt:C}=$(s);a.useEffect(()=>{let r=!0;return(async()=>{try{const u=await B();if(!r)return;const e=Array.isArray(u==null?void 0:u.data)?u.data:Array.isArray(u)?u:[];R(e)}catch(u){console.error("Failed to load categories",u)}})(),()=>{r=!1}},[]),a.useEffect(()=>{let r=!0;return(async()=>{try{A(!0);const u={page:p,per_page:24};o&&(u.sub_category_id=o);const e=await q(u);if(!r)return;e&&e.data&&(g(p===1?e.data:i=>[...i,...e.data]),(e.current_page>=e.last_page||e.data.length===0)&&j(!1))}catch(u){console.error("Failed to load products",u)}finally{r&&A(!1)}})(),()=>{r=!1}},[p,o]);const v=r=>{b(o===r?null:r),h(1),j(!0),g([])},y=a.useMemo(()=>{let r=x;return o&&(r=x.filter(u=>{var i,c,l,n;const e=u.cafe_id||((i=u.category)==null?void 0:i.id)||((c=u.raw)==null?void 0:c.cafe_id)||((n=(l=u.raw)==null?void 0:l.category)==null?void 0:n.id);return Number(e)===Number(o)})),r.map(u=>{var l,n,w;const e=C(u);if(!e)return null;const i=((n=(l=e==null?void 0:e.images)==null?void 0:l[0])==null?void 0:n.src)||(e==null?void 0:e.image)||(e==null?void 0:e.thumbnail)||((w=e==null?void 0:e.raw)==null?void 0:w.image_path)||"",c=_(i);return{...e,image:c,thumbnail:c,images:((e==null?void 0:e.images)||[]).map(P=>({...P,src:_(P.src)}))}}).filter(Boolean)},[x,C,o]);return t.jsxs(D,{parent:"Home",title:s?"المنتجات":"Products",children:[t.jsx("div",{className:"corp-section corp-section-alt",dir:s?"rtl":"ltr",children:t.jsxs(E,{children:[t.jsxs("div",{className:"corp-section-header",children:[t.jsx("span",{className:"corp-label",children:s?"الكتالوج الشامل":"Complete Catalog"}),t.jsx("h2",{children:s?"منتجاتنا عالية الجودة":"Our Premium Products"}),t.jsx("p",{children:s?"تصفح مجموعتنا الواسعة من المنتجات المصممة لتلبية متطلبات الشركات بدقة واحترافية عالية.":"Browse our extensive range of products designed to meet corporate requirements with precision and high professionalism."}),t.jsx("div",{className:"corp-gold-line"})]}),t.jsxs(S,{className:"g-4",children:[t.jsx(f,{lg:"3",md:"4",className:"mb-4",children:t.jsxs("div",{className:"corp-card filter-sidebar p-4 sticky-sidebar",children:[t.jsx("h4",{className:"filter-title",children:s?"التصنيفات":"Categories"}),t.jsxs("ul",{className:"filter-list",children:[t.jsx("li",{className:`filter-item ${o===null?"active":""}`,children:t.jsx("button",{onClick:()=>v(null),children:s?"جميع المنتجات":"All Products"})}),L.map(r=>{var e,i,c,l;const u=s?((i=(e=r.translations)==null?void 0:e.find(n=>n.locale==="ar"))==null?void 0:i.name)||r.name:((l=(c=r.translations)==null?void 0:c.find(n=>n.locale==="en"))==null?void 0:l.name)||r.name;return t.jsx("li",{className:`filter-item ${o===r.id?"active":""}`,children:t.jsx("button",{onClick:()=>v(r.id),children:u})},r.id)})]})]})}),t.jsxs(f,{lg:"9",md:"8",children:[m&&p===1?t.jsx("div",{className:"text-center py-5",children:t.jsx(k,{color:"primary"})}):t.jsx(S,{className:"g-4",children:y.length>0?y.map((r,u)=>t.jsx(f,{lg:"4",sm:"6",xs:"12",className:"mb-4",children:t.jsx(H,{product:r,isRTL:s})},r.id||u)):t.jsx(f,{xs:"12",className:"text-center py-5",children:t.jsx("div",{className:"corp-card",children:t.jsx("h4",{children:s?"لا توجد منتجات تطابق بحثك":"No products match your filter"})})})}),F&&!m&&y.length>0&&t.jsx("div",{className:"text-center mt-5",children:t.jsx("button",{className:"corp-btn corp-btn-outline-dark",onClick:()=>h(r=>r+1),children:s?"تحميل المزيد":"Load More"})}),m&&p>1&&t.jsx("div",{className:"text-center mt-5",children:t.jsx(k,{color:"primary",size:"sm"})})]})]})]})}),t.jsx(T,{global:!0,css:`
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
          background: rgba(var(--corp-accent-rgba), 0.05);
          color: var(--corp-accent);
          transform: translateX(${s?"-4px":"4px"});
        }

        .filter-item.active button {
          background: var(--corp-accent-gradient);
          color: var(--corp-white);
          font-weight: 700;
          box-shadow: var(--corp-shadow-glow);
        }
      `})]})};export{oe as default};
