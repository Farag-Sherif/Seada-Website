import{r as a,u as R,j as t}from"./index-DweZ4P2R.js";import{C as z}from"./Container-DxkBgcFy.js";import{R as P,C as f}from"./Col-sODIRSUs.js";import{S}from"./Spinner-CgGe4pFa.js";import{C as E}from"./common-layout-5-01UT3O.js";import{u as D}from"./useLanguage-BDBuB9CT.js";import{g as M}from"./products-B_leRrge.js";import{g as q}from"./categories-D-E80POk.js";import{u as B,P as $}from"./useProductAdapter-Ds0BAzck.js";import{S as H}from"./StyleTag-D38Rn_4I.js";import"./utils-CM_BgNzX.js";import"./MasterFooter-DAjkxnfH.js";import"./NextLinkCompat-BNIdmUEC.js";import"./main-DkAwJllx.js";import"./api-LgIJUvAN.js";import"./ModalBody-D3lQNU_S.js";import"./Fade-CRC34M8N.js";import"./Transition-e1MF2nng.js";const k=u=>{if(!u||/^https?:\/\//i.test(u))return u;try{const l=typeof window<"u"?window.location.origin:"https://newstore.test.do-go.net";return new URL(u,l).toString()}catch{return u}},oe=()=>{var N;const{isRTL:u}=D(),[l,b]=a.useState(!0),[y,g]=a.useState([]),[d,x]=a.useState(1),[_,j]=a.useState(!0),o=(N=R().query)==null?void 0:N.category_id,[F,L]=a.useState([]),[n,h]=a.useState(o?Number(o)||o:null);a.useEffect(()=>{o&&(h(Number(o)||o),x(1),g([]))},[o]);const{adapt:C}=B(u);a.useEffect(()=>{let r=!0;return(async()=>{try{const e=await q();if(!r)return;const s=Array.isArray(e==null?void 0:e.data)?e.data:Array.isArray(e)?e:[];L(s)}catch(e){console.error("Failed to load categories",e)}})(),()=>{r=!1}},[]),a.useEffect(()=>{let r=!0;return(async()=>{try{b(!0);const e={page:d,per_page:24};n&&(e.sub_category_id=n);const s=await M(e);if(!r)return;s&&s.data&&(g(d===1?s.data:i=>[...i,...s.data]),(s.current_page>=s.last_page||s.data.length===0)&&j(!1))}catch(e){console.error("Failed to load products",e)}finally{r&&b(!1)}})(),()=>{r=!1}},[d,n]);const v=r=>{h(n===r?null:r),x(1),j(!0),g([])},A=a.useMemo(()=>y.map(r=>{var m,p,c;const e=C(r);if(!e)return null;const s=((p=(m=e==null?void 0:e.images)==null?void 0:m[0])==null?void 0:p.src)||(e==null?void 0:e.image)||(e==null?void 0:e.thumbnail)||((c=e==null?void 0:e.raw)==null?void 0:c.image_path)||"",i=k(s);return{...e,image:i,thumbnail:i,images:((e==null?void 0:e.images)||[]).map(w=>({...w,src:k(w.src)}))}}).filter(Boolean),[y,C]);return t.jsxs(E,{parent:"Home",title:u?"المنتجات":"Products",children:[t.jsx("div",{className:"corp-section corp-section-alt",dir:u?"rtl":"ltr",children:t.jsxs(z,{children:[t.jsxs("div",{className:"corp-section-header",children:[t.jsx("span",{className:"corp-label",children:u?"الكتالوج الشامل":"Complete Catalog"}),t.jsx("h2",{children:u?"منتجاتنا عالية الجودة":"Our Premium Products"}),t.jsx("p",{children:u?"تصفح مجموعتنا الواسعة من المنتجات المصممة لتلبية متطلبات الشركات بدقة واحترافية عالية.":"Browse our extensive range of products designed to meet corporate requirements with precision and high professionalism."}),t.jsx("div",{className:"corp-gold-line"})]}),t.jsxs(P,{className:"g-4",children:[t.jsx(f,{lg:"3",md:"4",className:"mb-4",children:t.jsxs("div",{className:"corp-card filter-sidebar p-4 sticky-sidebar",children:[t.jsx("h4",{className:"filter-title",children:u?"التصنيفات":"Categories"}),t.jsxs("ul",{className:"filter-list",children:[t.jsx("li",{className:`filter-item ${n===null?"active":""}`,children:t.jsx("button",{onClick:()=>v(null),children:u?"جميع المنتجات":"All Products"})}),F.map(r=>{var s,i,m,p;const e=u?((i=(s=r.translations)==null?void 0:s.find(c=>c.locale==="ar"))==null?void 0:i.name)||r.name:((p=(m=r.translations)==null?void 0:m.find(c=>c.locale==="en"))==null?void 0:p.name)||r.name;return t.jsx("li",{className:`filter-item ${n===r.id?"active":""}`,children:t.jsx("button",{onClick:()=>v(r.id),children:e})},r.id)})]})]})}),t.jsxs(f,{lg:"9",md:"8",children:[l&&d===1?t.jsx("div",{className:"text-center py-5",children:t.jsx(S,{color:"primary"})}):t.jsx(P,{className:"g-4",children:A.length>0?A.map((r,e)=>t.jsx(f,{lg:"4",sm:"6",xs:"12",className:"mb-4",children:t.jsx($,{product:r,isRTL:u})},r.id||e)):t.jsx(f,{xs:"12",className:"text-center py-5",children:t.jsx("div",{className:"corp-card",children:t.jsx("h4",{children:u?"لا توجد منتجات تطابق بحثك":"No products match your filter"})})})}),_&&!l&&A.length>0&&t.jsx("div",{className:"text-center mt-5",children:t.jsx("button",{className:"corp-btn corp-btn-outline-dark",onClick:()=>x(r=>r+1),children:u?"تحميل المزيد":"Load More"})}),l&&d>1&&t.jsx("div",{className:"text-center mt-5",children:t.jsx(S,{color:"primary",size:"sm"})})]})]})]})}),t.jsx(H,{global:!0,css:`
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
          transform: translateX(${u?"-4px":"4px"});
        }

        .filter-item.active button {
          background: var(--corp-accent-gradient);
          color: var(--corp-white);
          font-weight: 700;
          box-shadow: var(--corp-shadow-glow);
        }
      `})]})};export{oe as default};
