import{r as c,j as e}from"./index-CFdUqYMq.js";import{S as f}from"./index-CagCqMIo.js";import{C as v}from"./Container-wLonXKyg.js";import{M as g}from"./Media-BPXueHsr.js";import{u as b}from"./useLanguage-BWW6GnpT.js";import{d as y,g as j}from"./main-CdtAQRt-.js";import{S}from"./StyleTag-eNEH9FNM.js";import"./utils-CwDDfIjG.js";import"./api-LgIJUvAN.js";const N=a=>[a==null?void 0:a.fname,a==null?void 0:a.lname].filter(Boolean).join(" ")||(a==null?void 0:a.username)||"Client",_=(a,s)=>{if(!s)return"/assets/images/avtar.jpg";if(/^https?:\/\//i.test(s))return s;let i=(a==null?void 0:a.user_image_path)||(a==null?void 0:a.users_image_path)||(a==null?void 0:a.offer_image_path);if(!i){const l=(a==null?void 0:a.image_logo_path)||(a==null?void 0:a.banner_image_path)||(a==null?void 0:a.about_section_image_path)||"";try{l&&(i=`${new URL(l).origin}/images`)}catch{}}return i?`${String(i).replace(/\/$/,"")}/${String(s).replace(/^\//,"")}`:`/assets/images/${s}`},q=()=>{const{isRTL:a}=b(),[s,i]=c.useState([]),[l,p]=c.useState(null);c.useEffect(()=>{let r=!0;return(async()=>{try{const[o,t]=await Promise.all([y(),j()]);if(!r)return;const m=Array.isArray(o)?o:Array.isArray(o==null?void 0:o.data)?o.data:Array.isArray(o==null?void 0:o.testimonials)?o.testimonials:[];i(m);const u=(t==null?void 0:t.settings)??(t==null?void 0:t.data)??t??null;p(u)}catch{}})(),()=>{r=!1}},[]);const n=c.useMemo(()=>(s||[]).map(r=>{const o=(r==null?void 0:r.user)||(r==null?void 0:r.users)||{},t=N(o),m=(r==null?void 0:r.review)||"",u=Number(r==null?void 0:r.rate),h=Number.isFinite(u)?Math.max(0,Math.min(5,u)):5,x=_(l,o==null?void 0:o.image);return{id:(r==null?void 0:r.id)??t,img:x,name:t,about:m,rate:h,post:(o==null?void 0:o.username)||""}}),[s,l]),d=c.useMemo(()=>({dots:!0,arrows:!1,infinite:n.length>2,speed:500,slidesToShow:Math.min(3,Math.max(1,n.length)),slidesToScroll:1,rtl:a,responsive:[{breakpoint:992,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:576,settings:{slidesToShow:1,slidesToScroll:1}}]}),[n.length,a]);return n.length===0?null:e.jsxs("section",{className:"corp-section",id:"testimonials",dir:a?"rtl":"ltr",children:[e.jsxs(v,{children:[e.jsxs("div",{className:"corp-section-header",children:[e.jsx("span",{className:"corp-label",children:a?"آراء العملاء":"Testimonials"}),e.jsx("h2",{children:a?"ماذا يقول عملاؤنا":"What Our Clients Say"}),e.jsx("hr",{className:"corp-gold-line"}),e.jsx("p",{children:a?"ثقة عملائنا هي أعظم إنجازاتنا. اطلع على تجاربهم معنا.":"Our clients' trust is our greatest achievement. Explore their experiences with us."})]}),e.jsx(f,{...d,className:"testimonial-slider",children:n.map(r=>e.jsx("div",{className:"px-3",children:e.jsxs("div",{className:"testimonial-card",children:[e.jsx("div",{className:"testimonial-quote","aria-hidden":"true",children:'"'}),e.jsx("p",{className:"testimonial-text",children:r.about}),e.jsx("div",{className:"testimonial-stars",children:[...Array(5)].map((o,t)=>e.jsx("span",{className:t<r.rate?"star-active":"star-inactive",children:"★"},t))}),e.jsxs("div",{className:"testimonial-author",children:[e.jsx(g,{src:r.img,alt:r.name,className:"testimonial-avatar"}),e.jsxs("div",{children:[e.jsx("strong",{children:r.name}),r.post&&e.jsx("span",{children:r.post})]})]})]})},r.id))},a?"rtl":"ltr")]}),e.jsx(S,{global:!0,css:`
        .testimonial-slider .slick-dots {
          bottom: -40px;
        }
        .testimonial-slider .slick-dots li button:before {
          font-size: 10px;
          color: var(--corp-gray-400);
          transition: all 0.3s ease;
        }
        .testimonial-slider .slick-dots li.slick-active button:before {
          color: var(--corp-gold);
          font-size: 12px;
        }
        .testimonial-card {
          background: var(--corp-white);
          border: 1px solid var(--corp-gray-200);
          border-radius: var(--corp-radius-xl);
          padding: 36px 28px 28px;
          position: relative;
          transition: all var(--corp-duration) var(--corp-ease);
          height: 100%;
        }
        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--corp-shadow-lg);
          border-color: var(--corp-gold);
        }
        .testimonial-quote {
          font-family: var(--font-heading);
          font-size: 4rem;
          line-height: 1;
          color: var(--corp-gold);
          opacity: 0.3;
          position: absolute;
          top: 12px;
          right: 24px;
        }
        [dir="rtl"] .testimonial-quote {
          right: auto;
          left: 24px;
        }
        .testimonial-text {
          font-size: 1rem;
          color: var(--corp-text-secondary);
          line-height: 1.7;
          font-style: italic;
          margin-bottom: 20px;
          min-height: 80px;
        }
        .testimonial-stars {
          display: flex;
          gap: 3px;
          margin-bottom: 20px;
        }
        .star-active { color: #F59E0B; font-size: 16px; }
        .star-inactive { color: var(--corp-gray-300); font-size: 16px; }
        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 16px;
          border-top: 1px solid var(--corp-gray-200);
        }
        .testimonial-avatar {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid var(--corp-gray-200);
        }
        .testimonial-author strong {
          display: block;
          font-size: 0.95rem;
          color: var(--corp-navy);
        }
        .testimonial-author span {
          display: block;
          font-size: 0.8rem;
          color: var(--corp-text-muted);
          margin-top: 2px;
        }
      `})]})};export{q as default};
