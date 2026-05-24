import{r as l,j as e,x as D,y as G}from"./index-DweZ4P2R.js";import{C as T}from"./common-layout-5-01UT3O.js";import{C as U}from"./Container-DxkBgcFy.js";import{R as S,C as c}from"./Col-sODIRSUs.js";import{F as J}from"./Form-BfK9H_4i.js";import{I as g}from"./Input-ClYtOVGO.js";import{L as h}from"./Label-CUfrrDzb.js";import{g as K,d as Q}from"./main-DkAwJllx.js";import{u as V}from"./useLanguage-BDBuB9CT.js";import{S as X}from"./StyleTag-D38Rn_4I.js";import"./MasterFooter-DAjkxnfH.js";import"./NextLinkCompat-BNIdmUEC.js";import"./categories-D-E80POk.js";import"./api-LgIJUvAN.js";import"./utils-CM_BgNzX.js";const Z=(r,o)=>{if(!o)return"";try{const i=r(o);return!i||i===o?o:i}catch{return o}},t=(r,o,i)=>{const b=Z(r,o);return b===o?i:b},C=r=>typeof r=="string"?r:r==null?"":String((r==null?void 0:r.value)??(r==null?void 0:r.name)??(r==null?void 0:r.title)??(r==null?void 0:r.text)??""),E=r=>{const o='<iframe title="store-map" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1605.811957341231!2d25.45976406005396!3d36.3940974010114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1550912388321" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style="width:100%;height:380px;border:0;"></iframe>';if(!r||typeof r!="string")return o;const i=r.trim();return/^<iframe[\s\S]*<\/iframe>$/.test(i)?i.includes("style=")?i:i.replace(/^<iframe/i,'<iframe style="width:100%;height:380px;border:0;"'):`<iframe title="store-map" src="${i}" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" style="width:100%;height:380px;border:0;"></iframe>`},fe=()=>{const{t:r,isRTL:o}=V(),[i,b]=l.useState(!0),[P,k]=l.useState(""),[_,A]=l.useState([]),[F,v]=l.useState([]),[z,H]=l.useState([]);l.useEffect(()=>{let a=!0;return(async()=>{var d;try{const p=await K(),s=(d=p==null?void 0:p.data)!=null&&d.settings?p.data:p,m=(s==null?void 0:s.settings)??{},j=Array.isArray(s==null?void 0:s.mobiles)?s.mobiles:[],L=Array.isArray(s==null?void 0:s.emails)?s.emails:[],u=m==null?void 0:m.location_url;a&&k(E(u));const w=j.map(x=>C(x==null?void 0:x.mobile)).filter(Boolean);a&&A(w);const N=L.map(x=>C(x==null?void 0:x.email)).filter(Boolean);a&&v(N);const q=C(s==null?void 0:s.addresse)||C(m==null?void 0:m.addresse)||"";a&&H(q?[q]:[])}catch{a&&(k(E(null)),A([]),v([]),H([]))}finally{a&&b(!1)}})(),()=>{a=!1}},[]);const I=l.useMemo(()=>[{icon:"fa-phone",title:t(r,"contact.section.contact","Contact"),desc1:_[0]||"+00 000 - 000 - 0000",desc2:_[1]||""},{icon:"fa-map-marker",title:t(r,"contact.section.address","Address"),desc1:z[0]||t(r,"contact.address_line1","Your address here"),desc2:z[1]||""},{icon:"fa-envelope-o",title:t(r,"contact.section.email","Email"),desc1:F[0]||"info@example.com",desc2:F[1]||""}],[r,_,F,z]),[n,$]=l.useState({firstName:"",lastName:"",phone:"",email:"",subject:"",message:""}),[y,M]=l.useState(!1),f=l.useCallback(a=>$(d=>({...d,[a.target.name]:a.target.value})),[]),R=async a=>{var j;if(a.preventDefault(),y)return;const d=`${n.firstName} ${n.lastName}`.replace(/\s+/g," ").trim(),p=((j=n.subject)==null?void 0:j.trim())||t(r,"contact.form.default_subject","Contact form message"),s=`Phone: ${n.phone||"-"}

${n.message||""}`,m={name:d||n.firstName||n.lastName||"User",email:n.email,subject:p,message:s};try{M(!0),await G.promise(Q(m),{pending:t(r,"contact.form.sending","Sending…"),success:t(r,"contact.form.success","Message sent successfully"),error:{render({data:L}){var w,N;const u=L;return((N=(w=u==null?void 0:u.response)==null?void 0:w.data)==null?void 0:N.message)||(u==null?void 0:u.message)||t(r,"contact.form.error","Failed to send message")}}}),$({firstName:"",lastName:"",phone:"",email:"",subject:"",message:""})}finally{M(!1)}},Y=t(r,"contact.title","Contact"),B=t(r,"Home","Home"),W=o?"top-left":"top-right";return e.jsxs(T,{parent:B,title:Y,children:[e.jsx(D,{position:W,rtl:o,theme:"colored",autoClose:3500}),e.jsx("section",{className:"seada-luxury-contact section-b-space",dir:o?"rtl":"ltr",children:e.jsxs(U,{children:[e.jsx(S,{className:"mb-5",children:e.jsx(c,{xs:"12",children:e.jsx("div",{className:"luxury-map-wrapper shadow-sm",children:e.jsx("div",{className:"map","aria-busy":i,dangerouslySetInnerHTML:{__html:P||E(null)}})})})}),e.jsx(S,{className:"g-4 mb-5 justify-content-center",children:I.map((a,d)=>e.jsx(c,{xs:"12",md:"4",children:e.jsxs("div",{className:"luxury-contact-card h-100",children:[e.jsx("div",{className:"card-icon",children:e.jsx("i",{className:`fa ${a.icon}`,"aria-hidden":"true"})}),e.jsxs("div",{className:"card-content",children:[e.jsx("h5",{children:a.title}),e.jsxs("p",{children:[a.desc1,a.desc2&&e.jsxs(e.Fragment,{children:[e.jsx("br",{}),a.desc2]})]})]})]})},d))}),e.jsx(S,{className:"justify-content-center",children:e.jsx(c,{lg:"10",children:e.jsxs("div",{className:"luxury-contact-form-wrapper",children:[e.jsxs("div",{className:"form-header",children:[e.jsx("h3",{children:t(r,"contact.form.title","Get in Touch")}),e.jsx("p",{children:t(r,"contact.form.subtitle","We'd love to hear from you. Please fill out this form.")})]}),e.jsx(J,{className:"luxury-theme-form",onSubmit:R,children:e.jsxs(S,{className:"g-4",children:[e.jsx(c,{md:"6",children:e.jsxs("div",{className:"luxury-input-group",children:[e.jsx(h,{htmlFor:"firstName",children:t(r,"contact.form.first_name","First name")}),e.jsx(g,{id:"firstName",name:"firstName",type:"text",placeholder:t(r,"contact.form.first_name_placeholder","Enter your first name"),value:n.firstName,onChange:f,required:!0})]})}),e.jsx(c,{md:"6",children:e.jsxs("div",{className:"luxury-input-group",children:[e.jsx(h,{htmlFor:"lastName",children:t(r,"contact.form.last_name","Last name")}),e.jsx(g,{id:"lastName",name:"lastName",type:"text",placeholder:t(r,"contact.form.last_name_placeholder","Enter your last name"),value:n.lastName,onChange:f,required:!0})]})}),e.jsx(c,{md:"6",children:e.jsxs("div",{className:"luxury-input-group",children:[e.jsx(h,{htmlFor:"phone",children:t(r,"contact.form.phone","Phone")}),e.jsx(g,{id:"phone",name:"phone",type:"text",placeholder:t(r,"contact.form.phone_placeholder","Enter your phone"),value:n.phone,onChange:f})]})}),e.jsx(c,{md:"6",children:e.jsxs("div",{className:"luxury-input-group",children:[e.jsx(h,{htmlFor:"email",children:t(r,"contact.form.email","Email")}),e.jsx(g,{id:"email",name:"email",type:"email",placeholder:t(r,"contact.form.email_placeholder","Enter your email"),value:n.email,onChange:f,required:!0})]})}),e.jsx(c,{md:"12",children:e.jsxs("div",{className:"luxury-input-group",children:[e.jsx(h,{htmlFor:"subject",children:t(r,"contact.form.subject","Subject")}),e.jsx(g,{id:"subject",name:"subject",type:"text",placeholder:t(r,"contact.form.subject_placeholder","How can we help?"),value:n.subject,onChange:f,required:!0})]})}),e.jsx(c,{md:"12",children:e.jsxs("div",{className:"luxury-input-group",children:[e.jsx(h,{htmlFor:"message",children:t(r,"contact.form.message","Message")}),e.jsx("textarea",{id:"message",name:"message",rows:"6",placeholder:t(r,"contact.form.message_placeholder","Write your message here…"),value:n.message,onChange:f,required:!0})]})}),e.jsx(c,{md:"12",className:"text-center mt-5",children:e.jsx("button",{className:"btn-luxury-submit",type:"submit",disabled:y,"aria-busy":y,children:y?e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"spinner-border spinner-border-sm me-2",role:"status","aria-hidden":"true"}),t(r,"contact.form.sending","Sending…")]}):t(r,"contact.form.submit","Send Message")})})]})})]})})})]})}),e.jsx(X,{global:!0,css:`
        .seada-luxury-contact {
          background: linear-gradient(180deg, #fdfdfd 0%, #f4f8f5 100%);
          padding: 120px 0 60px;
        }
        .luxury-map-wrapper {
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 15px 40px rgba(11, 107, 55, 0.08);
          border: 1px solid rgba(11, 107, 55, 0.05);
          height: 420px;
        }
        .luxury-map-wrapper .map iframe {
          width: 100%;
          height: 420px;
          border: 0;
          display: block;
        }
        .luxury-contact-card {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(16px);
          border-radius: 20px;
          padding: 32px;
          text-align: center;
          border: 1px solid rgba(11, 107, 55, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.03);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .luxury-contact-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 15px 40px rgba(11, 107, 55, 0.1);
        }
        .card-icon {
          width: 64px;
          height: 64px;
          background: linear-gradient(135deg, #0b6b37 0%, #159b53 100%);
          border-radius: 16px;
          display: grid;
          place-items: center;
          margin-bottom: 20px;
          box-shadow: 0 8px 20px rgba(11, 107, 55, 0.2);
          color: #fff;
          font-size: 24px;
        }
        .card-content h5 {
          font-size: 1.25rem;
          font-weight: 800;
          color: #1a231c;
          margin-bottom: 12px;
        }
        .card-content p {
          color: #556259;
          font-size: 1.05rem;
          line-height: 1.6;
          margin: 0;
        }
        .luxury-contact-form-wrapper {
          background: #fff;
          border-radius: 32px;
          padding: 48px;
          box-shadow: 0 20px 50px rgba(11, 107, 55, 0.05);
          border: 1px solid rgba(11, 107, 55, 0.05);
        }
        .form-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .form-header h3 {
          font-size: 2.2rem;
          font-weight: 900;
          color: #0b6b37;
          margin-bottom: 12px;
        }
        .form-header p {
          color: #647267;
          font-size: 1.1rem;
        }
        .luxury-input-group label {
          font-weight: 700;
          color: #1a231c;
          margin-bottom: 8px;
          display: block;
          font-size: 0.95rem;
        }
        .luxury-input-group input,
        .luxury-input-group textarea {
          width: 100%;
          background: #fdfdfd;
          border: 1px solid rgba(11, 107, 55, 0.15);
          border-radius: 12px;
          padding: 14px 20px;
          color: #1a231c;
          font-size: 1rem;
          transition: all 0.3s ease;
        }
        .luxury-input-group textarea {
          resize: vertical;
        }
        .luxury-input-group input:focus,
        .luxury-input-group textarea:focus {
          outline: none;
          background: #fff;
          border-color: #0b6b37;
          box-shadow: 0 0 0 4px rgba(11, 107, 55, 0.1);
        }
        .btn-luxury-submit {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 16px 48px;
          background: linear-gradient(135deg, #0b6b37 0%, #159b53 100%);
          color: #fff;
          border: none;
          border-radius: 16px;
          font-size: 1.1rem;
          font-weight: 800;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 10px 25px rgba(11, 107, 55, 0.25);
        }
        .btn-luxury-submit:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 15px 35px rgba(11, 107, 55, 0.35);
        }
        .btn-luxury-submit:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
        @media (max-width: 768px) {
          .luxury-contact-form-wrapper {
            padding: 32px 20px;
          }
          .form-header h3 {
            font-size: 1.8rem;
          }
        }
      `})]})};export{fe as default};
