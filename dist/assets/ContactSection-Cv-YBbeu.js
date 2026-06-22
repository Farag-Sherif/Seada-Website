import{y as c,r as n,j as e}from"./index-BSLUAvK_.js";import{C as P}from"./Container-CFUkF6xZ.js";import{R as y,C as o}from"./Col-CWqVzBv2.js";import{u as W}from"./useLanguage-DKlD7w_a.js";import{a as z,b as B,c as R,d as T}from"./main-DL2261cS.js";import{S as $}from"./StyleTag-_AcOVe2g.js";import"./utils-BlDA5bAB.js";const x={success:(u,t)=>c.success(u,{theme:"light",...t}),error:(u,t)=>c.error(u,{theme:"light",...t}),info:(u,t)=>c.info(u,{theme:"light",...t}),warn:(u,t)=>c.warn(u,{theme:"light",...t}),promise:(u,t,l)=>c.promise(u,t,{theme:"light",...l})},p=u=>{var t;return Array.isArray(u)?u:Array.isArray(u==null?void 0:u.data)?u.data:Array.isArray((t=u==null?void 0:u.data)==null?void 0:t.data)?u.data.data:[]},m=u=>typeof u=="string"?u:u==null?"":String((u==null?void 0:u.value)??(u==null?void 0:u.name)??(u==null?void 0:u.title)??(u==null?void 0:u.text)??""),H=u=>m((u==null?void 0:u.mobile)??(u==null?void 0:u.phone)??(u==null?void 0:u.number)??u),I=u=>m((u==null?void 0:u.email)??(u==null?void 0:u.mail)??(u==null?void 0:u.value)??u),L=u=>m((u==null?void 0:u.full_address)??(u==null?void 0:u.address)??[u==null?void 0:u.street,u==null?void 0:u.city,u==null?void 0:u.country].filter(Boolean).join(", ")),O=()=>{const{isRTL:u}=W(),[t,l]=n.useState([]),[v,w]=n.useState([]),[C,N]=n.useState([]),[r,h]=n.useState({name:"",email:"",subject:"",message:""}),[g,f]=n.useState(!1);n.useEffect(()=>{let a=!0;return(async()=>{var s,j,A;try{const[E,D,q]=await Promise.all([(s=z)==null?void 0:s().catch(()=>null),(j=B)==null?void 0:j().catch(()=>null),(A=R)==null?void 0:A().catch(()=>null)]);if(!a)return;l(p(E).map(H).filter(Boolean)),w(p(D).map(I).filter(Boolean)),N(p(q).map(L).filter(Boolean))}catch{}})(),()=>{a=!1}},[]);const i=a=>h(s=>({...s,[a.target.name]:a.target.value})),S=async a=>{if(a.preventDefault(),!r.name||!r.email||!r.message){x.error(u?"يرجى ملء جميع الحقول المطلوبة":"Please fill in all required fields");return}f(!0);try{await x.promise(T({name:r.name,email:r.email,subject:r.subject||"Website Inquiry",message:r.message}),{pending:u?"جارٍ الإرسال...":"Sending...",success:u?"تم الإرسال بنجاح! سنتواصل معك قريبًا.":"Sent successfully! We'll get back to you soon.",error:u?"فشل الإرسال. حاول مرة أخرى.":"Failed to send. Please try again."}),h({name:"",email:"",subject:"",message:""})}catch{}finally{f(!1)}},d=t[0]||"+20 123 456 789",b=v[0]||"info@seada.com",F=C[0]||(u?"القاهرة، مصر":"Cairo, Egypt"),k=[{icon:"📍",label:u?"العنوان":"Address",value:F,href:null},{icon:"📞",label:u?"الهاتف":"Phone",value:d,href:`tel:${d.replace(/\s/g,"")}`},{icon:"✉️",label:u?"البريد الإلكتروني":"Email",value:b,href:`mailto:${b}`},{icon:"💬",label:"WhatsApp",value:u?"تواصل عبر واتساب":"Chat on WhatsApp",href:`https://wa.me/${d.replace(/[^0-9]/g,"")}`}];return e.jsxs("section",{className:"corp-section corp-section-alt",id:"contact",dir:u?"rtl":"ltr",children:[e.jsxs(P,{children:[e.jsxs("div",{className:"corp-section-header",children:[e.jsx("span",{className:"corp-label",children:u?"تواصل معنا":"Get In Touch"}),e.jsx("h2",{children:u?"نحن هنا لمساعدتك":"We're Here To Help"}),e.jsx("hr",{className:"corp-gold-line"}),e.jsx("p",{children:u?"لديك استفسار أو تريد طلب عرض سعر؟ تواصل معنا وسنرد عليك في أقرب وقت.":"Have a question or want to request a quote? Reach out and we'll get back to you promptly."})]}),e.jsxs(y,{className:"g-4",children:[e.jsx(o,{lg:"5",children:e.jsx("div",{className:"contact-info-wrap",children:k.map((a,s)=>e.jsxs("div",{className:"contact-info-card",children:[e.jsx("div",{className:"contact-info-icon",children:a.icon}),e.jsxs("div",{className:"contact-info-text",children:[e.jsx("span",{className:"contact-info-label",children:a.label}),a.href?e.jsx("a",{href:a.href,target:a.href.startsWith("http")?"_blank":void 0,rel:"noreferrer",children:a.value}):e.jsx("p",{children:a.value})]})]},s))})}),e.jsx(o,{lg:"7",children:e.jsx("form",{className:"contact-form",onSubmit:S,children:e.jsxs(y,{className:"g-3",children:[e.jsx(o,{md:"6",children:e.jsx("input",{className:"corp-input",type:"text",name:"name",placeholder:u?"الاسم الكامل *":"Full Name *",value:r.name,onChange:i,required:!0})}),e.jsx(o,{md:"6",children:e.jsx("input",{className:"corp-input",type:"email",name:"email",placeholder:u?"البريد الإلكتروني *":"Email Address *",value:r.email,onChange:i,required:!0})}),e.jsx(o,{md:"12",children:e.jsx("input",{className:"corp-input",type:"text",name:"subject",placeholder:u?"الموضوع":"Subject",value:r.subject,onChange:i})}),e.jsx(o,{md:"12",children:e.jsx("textarea",{className:"corp-input corp-textarea",name:"message",placeholder:u?"رسالتك *":"Your Message *",value:r.message,onChange:i,required:!0})}),e.jsx(o,{md:"12",children:e.jsx("button",{type:"submit",className:"corp-btn corp-btn-primary corp-btn-lg",disabled:g,style:{width:"100%"},children:g?u?"جارٍ الإرسال...":"Sending...":u?"إرسال الرسالة":"Send Message"})})]})})})]})]}),e.jsx($,{global:!0,css:`
        .contact-info-wrap {
          display: grid;
          gap: 16px;
        }
        .contact-info-card {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px 24px;
          background: var(--corp-white);
          border: 1px solid var(--corp-gray-200);
          border-radius: var(--corp-radius-lg);
          transition: all var(--corp-duration) var(--corp-ease);
        }
        .contact-info-card:hover {
          border-color: var(--corp-gold);
          box-shadow: var(--corp-shadow-md);
          transform: translateX(${u?"-6px":"6px"});
        }
        .contact-info-icon {
          width: 52px;
          height: 52px;
          min-width: 52px;
          display: grid;
          place-items: center;
          border-radius: var(--corp-radius-md);
          background: var(--corp-gold-glow);
          font-size: 24px;
        }
        .contact-info-text {
          flex: 1;
        }
        .contact-info-label {
          display: block;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--corp-text-muted);
          margin-bottom: 4px;
        }
        .contact-info-text a,
        .contact-info-text p {
          margin: 0;
          font-size: 1rem;
          font-weight: 600;
          color: var(--corp-navy);
          text-decoration: none;
          transition: color 0.3s;
        }
        .contact-info-text a:hover {
          color: var(--corp-gold-dark);
        }
        .contact-form {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: var(--corp-radius-xl);
          padding: 36px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.04);
        }
        .corp-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.5);
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: var(--corp-radius-md);
          padding: 14px 20px;
          font-size: 1rem;
          color: var(--corp-navy);
          transition: all var(--corp-duration) var(--corp-ease);
        }
        .corp-input:focus {
          outline: none;
          background: var(--corp-white);
          border-color: var(--corp-accent);
          box-shadow: 0 0 0 4px rgba(var(--corp-accent-rgba), 0.1);
        }
        .corp-textarea {
          min-height: 150px;
          resize: vertical;
        }
        @media (max-width: 991px) {
          .contact-form {
            padding: 24px;
          }
        }
      `})]})};export{O as default};
