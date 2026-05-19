import{r as c,j as i}from"./index-CFdUqYMq.js";import{C as j}from"./Container-wLonXKyg.js";import{R as y,C as S}from"./Col-CAedqfHP.js";import{u as N}from"./useLanguage-BWW6GnpT.js";import{g as R}from"./main-CdtAQRt-.js";import{S as k}from"./StyleTag-eNEH9FNM.js";import"./utils-CwDDfIjG.js";import"./api-LgIJUvAN.js";const d=(e,n,r)=>{var l;if(!e)return;const o=(l=e.translations)==null?void 0:l.find(s=>(s==null?void 0:s.locale)===(n?"ar":"en"));return(o==null?void 0:o[r])??(e==null?void 0:e[r])},f=(e,n)=>{if(!e)return e;const r=e.includes("?")?"&":"?",o=n||Date.now();return`${e}${r}_=${encodeURIComponent(o)}`};function C({src:e,alt:n,className:r,style:o,placeholderHeight:l=260}){const[s,g]=c.useState(!1),[p,t]=c.useState("");return c.useEffect(()=>{let a=!0;if(g(!1),t(""),!e)return;const h=new Image;return h.decoding="async",h.onload=()=>{a&&(t(e),g(!0))},h.onerror=()=>{a&&(t(e),g(!0))},h.src=e,()=>{a=!1}},[e]),s?i.jsx("img",{src:p,alt:n||"",className:r,style:o,decoding:"async"}):i.jsx("div",{className:r,style:{...o,display:"block",width:"100%",height:l,borderRadius:"var(--corp-radius-lg)",background:"var(--corp-gray-100)"},"aria-hidden":"true"})}const $=({img:e,title:n,desc:r,isRTL:o,idx:l})=>i.jsx(S,{md:"6",className:"mb-4",children:i.jsxs("div",{className:`corp-highlight-card ${o?"rtl":""}`,children:[i.jsxs("div",{className:"corp-highlight-media",children:[i.jsx(C,{src:e,alt:n||"",className:"img-fluid",style:{width:"100%",height:"100%",objectFit:"cover"},placeholderHeight:280}),i.jsx("div",{className:"corp-highlight-overlay"})]}),i.jsxs("div",{className:"corp-highlight-content",children:[n&&i.jsx("span",{className:"corp-highlight-badge",children:n}),r&&i.jsx("h3",{className:"corp-highlight-title",children:r}),i.jsx("a",{href:"#contact",className:"corp-btn corp-btn-sm corp-btn-outline",style:{marginTop:16},children:o?"طلب معلومات":"Request Info"})]})]})}),M=()=>{const{isRTL:e}=N(),[n,r]=c.useState(null),[o,l]=c.useState(!0);c.useEffect(()=>{let t=!0;return(async()=>{try{l(!0),r(null);const a=await R(),h=(a==null?void 0:a.settings)??a;t&&r(h||null)}catch{t&&r(null)}finally{t&&l(!1)}})(),()=>{t=!1}},[e]);const s=c.useMemo(()=>{const t=n||{},a=(t==null?void 0:t.updated_at)||(t==null?void 0:t.updatedAt)||void 0,h=t.offer_one_section_image_path||t.offer_section_image1_path||t.banner_image_path,x=f(h,a),m=d(t,e,"offer_section_title")||d(t,e,"banner_product_title_section")||"",u=d(t,e,"offer_section_content")||d(t,e,"banner_product_content_section")||"",_=t.offer_tow_section_image_path||t.offer_two_section_image_path||t.offer_section_image2_path,v=f(_,a),b=d(t,e,"offer_section_title2")||m,w=d(t,e,"offer_section_content2")||u;return[{img:x,title:m,desc:u},{img:v,title:b,desc:w}]},[n,e]),g=o?[{img:"",title:"",desc:""},{img:"",title:"",desc:""}]:s,p=c.useMemo(()=>o?"skeleton":s.map(t=>t.img).join("|"),[o,s]);return i.jsxs(c.Fragment,{children:[i.jsx("section",{className:"corp-section-sm",id:"highlights",dir:e?"rtl":"ltr",children:i.jsx(j,{children:i.jsx(y,{className:"g-4",children:g.map((t,a)=>i.jsx($,{img:t.img,title:t.title,desc:t.desc,isRTL:e,idx:a},`${a}-${t.img||"sk"}`))})})},p),i.jsx(k,{global:!0,css:`
        .corp-highlight-card {
          position: relative;
          border-radius: var(--corp-radius-2xl);
          overflow: hidden;
          min-height: 320px;
          display: flex;
          transition: all var(--corp-duration) var(--corp-ease);
          border: 1px solid var(--corp-gray-200);
        }
        .corp-highlight-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--corp-shadow-xl);
        }
        .corp-highlight-media {
          position: absolute;
          inset: 0;
        }
        .corp-highlight-media img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 8s ease;
        }
        .corp-highlight-card:hover .corp-highlight-media img {
          transform: scale(1.05);
        }
        .corp-highlight-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(15, 27, 45, 0.8) 0%, rgba(15, 27, 45, 0.2) 100%);
        }
        .corp-highlight-content {
          position: relative;
          z-index: 2;
          padding: 32px;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          min-height: 320px;
          width: 100%;
        }
        .corp-highlight-badge {
          display: inline-block;
          padding: 6px 16px;
          border-radius: var(--corp-radius-full);
          background: rgba(200, 163, 95, 0.2);
          color: var(--corp-gold-light);
          font-size: 0.8rem;
          font-weight: 700;
          margin-bottom: 12px;
          width: fit-content;
        }
        .corp-highlight-title {
          font-size: clamp(1.3rem, 2.5vw, 1.8rem);
          font-weight: 800;
          color: var(--corp-white);
          line-height: 1.2;
          margin: 0;
        }
        @media (max-width: 767.98px) {
          .corp-highlight-content {
            padding: 24px;
            min-height: 260px;
          }
        }
      `})]})};export{M as default};
