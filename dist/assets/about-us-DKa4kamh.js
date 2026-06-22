const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-Cv6TkaMP.js","assets/index-DD-by8OP.js","assets/index-Coe7CkEM.css","assets/utils-DKGoq2xj.js"])))=>i.map(i=>d[i]);
import{r as m,j as a,_ as L}from"./index-DD-by8OP.js";import{C as E}from"./common-layout-imGcD5V_.js";import{C as $}from"./Container-xN4zmrJj.js";import{R as g,C as y}from"./Col-QfpgP249.js";import{M as v}from"./Media-Bq-29sQP.js";import{A as D}from"./Alert-BjdWZEfg.js";import{S as w}from"./script-cmDmSaYK.js";import{S as U}from"./service1-M6T16ziN.js";import{u as I}from"./useLanguage-Bz4ifLKL.js";import{g as P,e as B}from"./main-CWbEfGwG.js";import{S as F}from"./StyleTag-PeRYAPZW.js";import"./MasterFooter-CXGUFAFc.js";import"./NextLinkCompat-Bh9VOnVp.js";import"./categories-DUlNTARx.js";import"./utils-DKGoq2xj.js";import"./Fade-B0Wcv5vN.js";import"./Transition-Pg8wTugm.js";function O(e,t={}){const l=m.lazy(async()=>{const d=await e();return{default:d.default||d}}),c=t.loading;return function(x){return a.jsx(m.Suspense,{fallback:c?a.jsx(c,{...x}):null,children:a.jsx(l,{...x})})}}const V=O(()=>L(()=>import("./index-Cv6TkaMP.js").then(e=>e.i),__vite__mapDeps([0,1,2,3])),{}),u=(e,t,l)=>{var x;if(!e)return"";const c=l?"ar":"en",d=(x=e==null?void 0:e.translations)==null?void 0:x.find(n=>(n==null?void 0:n.locale)===c);return d&&d[t]||e[t]||""},W=e=>[e==null?void 0:e.fname,e==null?void 0:e.lname].filter(Boolean).join(" ")||(e==null?void 0:e.username)||"User",Y=(e,t)=>{if(!t)return"/assets/images/avtar.jpg";if(/^https?:\/\//i.test(t))return t;let l=(e==null?void 0:e.user_image_path)||(e==null?void 0:e.users_image_path)||(e==null?void 0:e.offer_image_path);if(!l){const c=(e==null?void 0:e.image_logo_path)||(e==null?void 0:e.banner_image_path)||(e==null?void 0:e.about_section_image_path)||"";try{c&&(l=`${new URL(c).origin}/images`)}catch{}}return l?`${String(l).replace(/\/$/,"")}/${String(t).replace(/^\//,"")}`:`/assets/images/${t}`},le=()=>{const{t:e,isRTL:t}=I(),[l,c]=m.useState(!0),[d,x]=m.useState(null),[n,N]=m.useState(null),[j,S]=m.useState([]),A=m.useMemo(()=>({direction:t?"rtl":"ltr",textAlign:t?"right":"left"}),[t]);m.useEffect(()=>{let r=!0;return(async()=>{var s,h;c(!0),x(null);try{const[i,o]=await Promise.all([P(),B()]);if(!r)return;const f=(i==null?void 0:i.settings)||((s=i==null?void 0:i.data)==null?void 0:s.settings)||(i==null?void 0:i.data)||i||null;if(!f)throw new Error("Failed to load settings");N(f);const b=Array.isArray(o)?o:Array.isArray(o==null?void 0:o.data)?o.data:Array.isArray((h=o==null?void 0:o.data)==null?void 0:h.data)?o.data.data:Array.isArray(o==null?void 0:o.testimonials)?o.testimonials:[];S(b)}catch(i){r&&x((i==null?void 0:i.message)||e("something_wrong")||"Something went wrong")}finally{r&&c(!1)}})(),()=>{r=!1}},[e]);const k=u(n,"about_section_sub_title",t)||u(n,"about_section_title",t)||e("about_subtitle"),z=u(n,"about_section_introduction",t)||u(n,"about_us",t)||e("about_description"),_=[u(n,"about_section_vision",t),u(n,"about_section_apart",t),u(n,"about_section_commitment",t)].filter(Boolean).join(" "),T=n==null?void 0:n.about_section_image_path,p=m.useMemo(()=>(j||[]).map(r=>{const s=(r==null?void 0:r.user)||(r==null?void 0:r.users)||{},h=W(s),i=(s==null?void 0:s.username)||e("customer"),o=(r==null?void 0:r.review)||"",f=Number(r==null?void 0:r.rate),b=Number.isFinite(f)?Math.max(0,Math.min(5,f)):0,C=Y(n,s==null?void 0:s.image);return{id:(r==null?void 0:r.id)??`${h}-${o==null?void 0:o.slice(0,8)}`,img:C,name:h,post:i,about:o,rate:b}}),[j,n,e]),M=m.useMemo(()=>{const r=typeof w=="object"&&w||{};return{dots:!0,arrows:!1,infinite:p.length>2,speed:500,slidesToShow:Math.min(2,Math.max(1,p.length)),slidesToScroll:1,rtl:t,responsive:[{breakpoint:992,settings:{slidesToShow:1,slidesToScroll:1}}],...r,rtl:t,slidesToShow:Math.min(2,Math.max(1,p.length))}},[p.length,t]);return a.jsxs(E,{parent:"home",title:"About-us",children:[a.jsx("section",{className:"seada-luxury-about section-b-space",style:A,children:a.jsxs($,{children:[a.jsx(g,{children:a.jsx(y,{lg:"12",children:a.jsxs("div",{className:"luxury-hero-banner",children:[l?a.jsx("div",{className:"w-100",style:{height:480,background:"linear-gradient(90deg, #f3f3f3 25%, #ecebeb 37%, #f3f3f3 63%)",backgroundSize:"400% 100%",animation:"shimmer 1.4s ease-in-out infinite"}}):a.jsx(v,{src:T,className:"img-fluid banner-img",alt:u(n,"about_section_title",t)||"About"}),a.jsx("div",{className:"banner-overlay"}),a.jsx("div",{className:"banner-content",children:a.jsx("h2",{children:u(n,"about_section_title",t)||e("about_title")||"About Us"})})]})})}),a.jsx(g,{className:"mt-5 g-4 justify-content-center",children:a.jsx(y,{lg:"10",children:d?a.jsx(D,{color:"danger",className:"mt-2",children:d}):a.jsxs("div",{className:"luxury-about-content",children:[a.jsx("h4",{children:k}),a.jsx("p",{className:"lead-text",children:z}),!!_&&a.jsx("p",{className:"secondary-text",children:_})]})})}),p.length>0&&a.jsx(g,{className:"mt-5 pt-4",children:a.jsxs(y,{lg:"12",children:[a.jsx("div",{className:"luxury-section-title",children:a.jsx("h4",{children:e("what_customers_say")||"What our customers say"})}),a.jsx("div",{className:"position-relative",children:a.jsx(V,{...M,children:p.map(r=>a.jsx("div",{className:"px-3 py-4",children:a.jsx("div",{className:"luxury-testimonial-card h-100",children:a.jsxs("div",{className:"card-inner",children:[a.jsxs("div",{className:"author-info",children:[a.jsx(v,{src:r.img,alt:r.name,className:"author-img"}),a.jsxs("div",{children:[a.jsx("h6",{children:r.name}),r.post&&a.jsx("small",{children:r.post})]})]}),a.jsx("div",{className:"rating-stars",children:[...Array(5)].map((s,h)=>a.jsx("i",{className:`fa fa-star ${h<r.rate?"active":"inactive"}`},h))}),a.jsx("p",{className:"review-text",children:r.about})]})})},r.id))})})]})})]})}),a.jsx("div",{className:"section-b-space bg-light-green",children:a.jsx(U,{sectionClass:"service border-section small-section"})}),a.jsx(F,{global:!0,css:`
        @keyframes shimmer {
          0% { background-position: 0% 0%; }
          100% { background-position: -135% 0%; }
        }
        .seada-luxury-about {
          background: linear-gradient(180deg, #fdfdfd 0%, #f4f8f5 100%);
          padding-top: 60px;
        }
        .luxury-hero-banner {
          position: relative;
          border-radius: 32px;
          overflow: hidden;
          box-shadow: 0 20px 50px rgba(11, 107, 55, 0.1);
          height: 480px;
        }
        .luxury-hero-banner .banner-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 10s ease;
        }
        .luxury-hero-banner:hover .banner-img {
          transform: scale(1.05);
        }
        .banner-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(0deg, rgba(11, 107, 55, 0.6) 0%, rgba(0, 0, 0, 0.1) 100%);
        }
        .banner-content {
          position: absolute;
          bottom: 40px;
          left: 40px;
          right: 40px;
          z-index: 2;
        }
        [dir="rtl"] .banner-content {
          text-align: right;
        }
        .banner-content h2 {
          color: #fff;
          font-size: 3.5rem;
          font-weight: 900;
          margin: 0;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          letter-spacing: -0.5px;
        }
        .luxury-about-content {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          border-radius: 24px;
          padding: 48px;
          border: 1px solid rgba(11, 107, 55, 0.08);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.03);
          text-align: center;
        }
        .luxury-about-content h4 {
          font-size: 2rem;
          font-weight: 900;
          color: #0b6b37;
          margin-bottom: 24px;
        }
        .lead-text {
          font-size: 1.25rem;
          color: #1a231c;
          line-height: 1.8;
          font-weight: 500;
          margin-bottom: 24px;
        }
        .secondary-text {
          font-size: 1.05rem;
          color: #647267;
          line-height: 1.8;
        }
        .luxury-section-title {
          text-align: center;
          margin-bottom: 30px;
        }
        .luxury-section-title h4 {
          font-size: 2.2rem;
          font-weight: 900;
          color: #1a231c;
        }
        .luxury-testimonial-card {
          background: #fff;
          border-radius: 20px;
          padding: 32px;
          box-shadow: 0 10px 30px rgba(11, 107, 55, 0.05);
          border: 1px solid rgba(11, 107, 55, 0.05);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .luxury-testimonial-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(11, 107, 55, 0.1);
        }
        .card-inner {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .author-info {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .author-img {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #eef6f1;
        }
        .author-info h6 {
          margin: 0 0 4px;
          font-size: 1.1rem;
          font-weight: 800;
          color: #1a231c;
        }
        .author-info small {
          color: #8c9c91;
          font-weight: 600;
        }
        .rating-stars {
          display: flex;
          gap: 4px;
        }
        .rating-stars i.active {
          color: #ffb100;
        }
        .rating-stars i.inactive {
          color: #e2e8e4;
        }
        .review-text {
          color: #556259;
          font-size: 1.05rem;
          line-height: 1.7;
          margin: 0;
          font-style: italic;
        }
        .bg-light-green {
          background: linear-gradient(180deg, #f4f8f5 0%, #fff 100%);
        }
        @media (max-width: 768px) {
          .banner-content h2 { font-size: 2.2rem; }
          .luxury-about-content { padding: 32px 20px; }
          .luxury-hero-banner { height: 360px; border-radius: 20px; }
        }
      `})]})};export{le as default};
