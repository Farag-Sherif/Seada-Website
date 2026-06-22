import{r as y,u as A,j as e}from"./index-BSLUAvK_.js";import{C as N}from"./Container-CFUkF6xZ.js";import{R as _,C as v}from"./Col-CWqVzBv2.js";import{g as C}from"./categories-CNT7kbeJ.js";import{u as S}from"./useLanguage-DKlD7w_a.js";import{S as z}from"./StyleTag-_AcOVe2g.js";import"./utils-BlDA5bAB.js";const m=(r,o="en")=>{var t,u;const s=Array.isArray(r==null?void 0:r.translations)?r.translations:[],a=(t=s.find(i=>(i==null?void 0:i.locale)===o))==null?void 0:t.name,l=(u=s.find(i=>(i==null?void 0:i.locale)&&i.locale!==o))==null?void 0:u.name;return a||l||(r==null?void 0:r.name)||""},$=r=>{var s;const o=(s=r==null?void 0:r.find(a=>typeof(a==null?void 0:a.logo_path)=="string"&&/^https?:\/\//i.test(a.logo_path)))==null?void 0:s.logo_path;try{return o?new URL(o).origin:typeof window<"u"?window.location.origin:""}catch{return typeof window<"u"?window.location.origin:""}},x=(r,o)=>r?/^https?:\/\//i.test(r)?r:r.startsWith("/")?`${o}${r}`:`${o}/images/${r}`:null,I=(r,o)=>{var s,a;return r!=null&&r.logo_path?r.logo_path:(s=r==null?void 0:r.meta)!=null&&s.image_path?x(r.meta.image_path,o):(a=r==null?void 0:r.meta)!=null&&a.image?x(r.meta.image,o):null},L=r=>[r==null?void 0:r.sub_categories,r==null?void 0:r.subCategories,r==null?void 0:r.children,r==null?void 0:r.subs,r==null?void 0:r.sub_cats].filter(Array.isArray)[0]||[],R=r=>Array.isArray(r)&&r.length>0&&r.every(o=>{var s;return((s=o==null?void 0:o.meta)==null?void 0:s.type)==="sub_sub_category"}),D=r=>{const o=new Set,s=[];for(const a of r||[]){const l=(a==null?void 0:a.id)!=null?`id:${a.id}`:null,t=a!=null&&a.slug?`slug:${String(a.slug).toLowerCase()}`:null,u=l||t;!u||o.has(u)||(o.add(u),s.push(a))}return s},E=({img:r,name:o,parentName:s,linkId:a,isRTL:l,onClick:t})=>e.jsx(v,{lg:"3",md:"4",sm:"6",className:"mb-4",children:e.jsxs("div",{className:"corp-category-card",role:"button",tabIndex:0,onClick:t,onKeyDown:u=>(u.key==="Enter"||u.key===" ")&&t(),dir:l?"rtl":"ltr",children:[e.jsx("div",{className:"corp-category-img",children:e.jsx("img",{src:r,alt:o,loading:"lazy"})}),e.jsxs("div",{className:"corp-category-info",children:[e.jsx("h4",{children:o}),s&&e.jsx("span",{className:"corp-category-parent",children:s})]}),e.jsx("div",{className:"corp-category-arrow","aria-hidden":"true",children:"→"})]})}),P=()=>{const[r,o]=y.useState([]),[s,a]=y.useState(!0),{currentLanguage:l,isRTL:t}=S(),u=A(),i=l.toLowerCase().startsWith("ar")?"ar":"en";y.useEffect(()=>{let c=!0;return(async()=>{a(!0);try{const d=await C(),g=Array.isArray(d==null?void 0:d.data)?d.data:Array.isArray(d)?d:[];let p;R(g)?p=g.map(n=>({...n,__parentName:""})):p=(g||[]).flatMap(n=>{const h=m(n,i);return L(n).map(f=>({...f,__parentId:n==null?void 0:n.id,__parentName:h}))});const w=$(p),j=D(p).map(n=>{const h=I(n,w),f=m(n,i),k=n.__parentName||"";return{id:(n==null?void 0:n.id)??(n==null?void 0:n.slug),img:h,subName:f,parentName:k,linkId:(n==null?void 0:n.id)??""}}).filter(n=>!!n.img);c&&o(j)}catch{c&&o([])}finally{c&&a(!1)}})(),()=>{c=!1}},[l,i]);const b=c=>{u.push({pathname:"/products",query:{category_id:c}})};return e.jsxs("section",{className:"corp-section corp-section-alt",id:"categories",dir:t?"rtl":"ltr",children:[e.jsxs(N,{children:[e.jsxs("div",{className:"corp-section-header",children:[e.jsx("span",{className:"corp-label",children:t?"أقسامنا":"Our Categories"}),e.jsx("h2",{children:t?"تصفح فئات المنتجات":"Browse Product Categories"}),e.jsx("hr",{className:"corp-gold-line"}),e.jsx("p",{children:t?"اكتشف مجموعتنا الواسعة من المنتجات المصنفة بعناية لتسهيل تجربة التصفح.":"Discover our wide range of carefully categorized products for an easy browsing experience."})]}),e.jsx(_,{children:s&&r.length===0?Array.from({length:8}).map((c,d)=>e.jsx(v,{lg:"3",md:"4",sm:"6",className:"mb-4",children:e.jsxs("div",{className:"corp-category-card corp-skeleton",children:[e.jsx("div",{className:"corp-category-img",children:e.jsx("div",{style:{width:"100%",paddingTop:"100%",background:"var(--corp-gray-100)",borderRadius:"var(--corp-radius-lg)"}})}),e.jsx("div",{className:"corp-category-info",children:e.jsx("div",{style:{width:"60%",height:14,background:"var(--corp-gray-200)",borderRadius:6}})})]})},`sk-${d}`)):r.map(c=>e.jsx(E,{img:c.img,name:c.subName,parentName:c.parentName,linkId:c.linkId,isRTL:t,onClick:()=>b(c.linkId)},c.id))})]}),e.jsx(z,{global:!0,css:`
        .corp-category-card {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: var(--corp-radius-xl);
          padding: 24px;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          transition: all var(--corp-duration) var(--corp-ease-spring);
          height: 100%;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        .corp-category-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: var(--corp-accent-gradient);
          opacity: 0;
          transition: opacity var(--corp-duration) var(--corp-ease);
          z-index: 0;
        }
        .corp-category-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--corp-shadow-lg);
          border-color: rgba(255, 255, 255, 0.8);
        }
        .corp-category-card:hover::after {
          opacity: 0.03;
        }
        .corp-category-img {
          width: 100%;
          padding-top: 100%;
          position: relative;
          border-radius: var(--corp-radius-lg);
          overflow: hidden;
          background: var(--corp-white);
          margin-bottom: 16px;
          z-index: 1;
        }
        .corp-category-img img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 20px;
          transition: transform var(--corp-duration-slow) var(--corp-ease-spring);
        }
        .corp-category-card:hover .corp-category-img img {
          transform: scale(1.15) rotate(5deg);
        }
        .corp-category-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          z-index: 1;
        }
        .corp-category-info h4 {
          font-size: 1.1rem;
          font-family: var(--font-heading);
          font-weight: 800;
          color: var(--corp-navy);
          margin: 0;
          transition: color 0.3s ease;
        }
        .corp-category-card:hover .corp-category-info h4 {
          color: var(--corp-accent);
        }
        .corp-category-parent {
          font-size: 0.8rem;
          color: var(--corp-text-muted);
          font-weight: 600;
        }
        .corp-category-arrow {
          position: absolute;
          bottom: 16px;
          ${t?"left":"right"}: 16px;
          width: 36px;
          height: 36px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: var(--corp-gray-100);
          color: var(--corp-navy);
          font-size: 14px;
          opacity: 0;
          transform: translateX(${t?"8px":"-8px"});
          transition: all var(--corp-duration) var(--corp-ease-spring);
          z-index: 1;
        }
        .corp-category-card:hover .corp-category-arrow {
          opacity: 1;
          background: var(--corp-accent-gradient);
          color: var(--corp-white);
          transform: translateX(0);
        }
        .corp-skeleton { pointer-events: none; }
      `})]})};export{P as default};
