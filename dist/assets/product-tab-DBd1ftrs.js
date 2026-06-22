import{R as L,j as r}from"./index-DD-by8OP.js";import{N as S,a as C,b as R,T as D,c as n}from"./TabPane-CjD58FTP.js";import{c as _}from"./utils-DKGoq2xj.js";import{u as I}from"./useLanguage-Bz4ifLKL.js";import{S as E}from"./StyleTag-PeRYAPZW.js";const F=({descriptionHtml:N="",details:d={},showVideo:c=!1,showReview:g=!1,labels:t})=>{var m,f,v,h,j,k,w,y,A;const{t:p,isRTL:o}=I(),e=(i,s)=>{try{const u=p==null?void 0:p(i);return u&&u!==i?u:s}catch{return s}},a={tabs:{details:((m=t==null?void 0:t.tabs)==null?void 0:m.details)??e("product.tabs.details",o?"التفاصيل":"Details"),description:((f=t==null?void 0:t.tabs)==null?void 0:f.description)??e("product.tabs.description",o?"الوصف":"Description"),video:((v=t==null?void 0:t.tabs)==null?void 0:v.video)??e("product.tabs.video",o?"فيديو":"Video"),review:((h=t==null?void 0:t.tabs)==null?void 0:h.review)??e("product.tabs.review",o?"اكتب مراجعة":"Write Review")},fields:{serial:((j=t==null?void 0:t.fields)==null?void 0:j.serial)??e("product.details.serial",o?"الرقم التسلسلي":"Serial"),stock:((k=t==null?void 0:t.fields)==null?void 0:k.stock)??e("product.details.stock",o?"رقم المخزون":"Stock #"),weight:((w=t==null?void 0:t.fields)==null?void 0:w.weight)??e("product.details.weight",o?"الوزن":"Weight"),category:((y=t==null?void 0:t.fields)==null?void 0:y.category)??e("product.details.category",o?"القسم":"Category")}},x=Object.values(d||{}).some(Boolean),l=[...g?[{key:"review",label:a.tabs.review}]:[],...c?[{key:"video",label:a.tabs.video}]:[],...x?[{key:"details",label:a.tabs.details}]:[],{key:"description",label:a.tabs.description}],[b,T]=L.useState(((A=l[0])==null?void 0:A.key)||"description"),z=[["serial_number",a.fields.serial],["stock_number",a.fields.stock],["weight",a.fields.weight],["category",a.fields.category]];return r.jsxs("div",{className:"product-tab mt-5",dir:o?"rtl":"ltr",children:[r.jsx(S,{tabs:!0,className:"justify-content-end justify-content-lg-start px-3 px-lg-0",children:l.map(i=>r.jsx(C,{children:r.jsx(R,{className:_({active:b===i.key}),onClick:()=>T(i.key),role:"button",children:i.label})},i.key))}),r.jsxs(D,{activeTab:b,className:"pt-4 px-3 px-lg-0",children:[g&&r.jsx(n,{tabId:"review",children:r.jsx("div",{})}),c&&r.jsx(n,{tabId:"video",children:r.jsx("div",{})}),x&&r.jsx(n,{tabId:"details",children:r.jsx("ul",{className:"prod-details",children:z.map(([i,s])=>d!=null&&d[i]?r.jsxs("li",{children:[r.jsx("strong",{children:s}),r.jsx("span",{children:d[i]})]},i):null)})}),r.jsx(n,{tabId:"description",children:r.jsx("div",{className:"prod-description",dangerouslySetInnerHTML:{__html:N}})})]}),r.jsx(E,{global:!0,css:`
        /* Tabs */
        .product-tab {
          background: #fff;
          border-radius: 24px;
          padding: 32px;
          border: 1px solid rgba(11, 107, 55, 0.05);
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.02);
        }
        .product-tab .nav-tabs {
          border-bottom: 2px solid rgba(11, 107, 55, 0.08);
          gap: 32px;
        }
        .product-tab .nav-tabs .nav-link {
          border: 0 !important;
          background: transparent !important;
          color: #556259;
          font-weight: 800;
          letter-spacing: 0.2px;
          padding: 0 0 16px;
          position: relative;
          font-size: 1.125rem;
          line-height: 1.2;
          transition: color 0.3s ease;
        }
        .product-tab .nav-tabs .nav-link:hover {
          color: #159b53;
        }
        .product-tab .nav-tabs .nav-link.active {
          color: #0b6b37;
        }
        .product-tab .nav-tabs .nav-link.active::after {
          content: "";
          position: absolute;
          height: 4px;
          background: linear-gradient(90deg, #0b6b37 0%, #159b53 100%);
          width: 100%;
          left: 0;
          bottom: -2px; /* align with border-bottom */
          border-radius: 4px;
          box-shadow: 0 -2px 10px rgba(11, 107, 55, 0.2);
        }

        /* Content */
        .product-tab .tab-content {
          padding-top: 32px;
        }

        .prod-description,
        .prod-details {
          font-size: 1.05rem; /* ~17px */
        }
        .prod-description p,
        .prod-description li {
          line-height: 1.9;
          color: #556259;
          margin-bottom: 14px;
        }
        .prod-description ul {
          padding-inline-start: 24px;
          margin-top: 8px;
        }
        .prod-description p {
          font-size: 1.05rem;
        }

        /* Details list */
        .prod-details {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 16px;
        }
        .prod-details li {
          display: flex;
          gap: 16px;
          padding: 16px;
          background: #fdfdfd;
          border: 1px solid rgba(11, 107, 55, 0.05);
          border-radius: 14px;
          align-items: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .prod-details li:hover {
          transform: translateX(4px);
          box-shadow: 0 4px 15px rgba(0,0,0,0.02);
          border-color: rgba(11, 107, 55, 0.1);
        }
        .prod-details li strong {
          min-inline-size: 160px; /* يتوافق مع RTL */
          color: #1a231c;
          font-weight: 800;
          font-size: 1.1rem;
        }
        .prod-details li span {
          color: #556259;
          font-weight: 500;
        }
        [dir="rtl"] .prod-details li {
          flex-direction: row;
          text-align: right;
        }
        [dir="rtl"] .prod-details li strong {
          text-align: start;
        }
        [dir="rtl"] .prod-details li:hover {
          transform: translateX(-4px);
        }

        /* Larger on lg+ */
        @media (min-width: 992px) {
          .product-tab .nav-tabs .nav-link {
            font-size: 1.2rem;
          }
          .prod-description {
            font-size: 1.1rem; /* 18px */
          }
          .prod-details {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `})]})};export{F as default};
