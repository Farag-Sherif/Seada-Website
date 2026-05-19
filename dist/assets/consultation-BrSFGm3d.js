import{r as m,j as u,y as h}from"./index-CFdUqYMq.js";import{C as g}from"./common-layout-Dm7LfAJB.js";import{u as y}from"./useLanguage-BWW6GnpT.js";import{C as j}from"./Container-wLonXKyg.js";import{R as d,C as a}from"./Col-CAedqfHP.js";import{F as A}from"./Form-BPJ7oC2D.js";import{I as n}from"./Input-_T0WC1tw.js";import{L as t}from"./Label-DXx7edk0.js";import{s as b}from"./main-CdtAQRt-.js";import{S as N}from"./StyleTag-eNEH9FNM.js";import"./MasterFooter-CdM7-0OH.js";import"./NextLinkCompat-B3113fWD.js";import"./categories-D-E80POk.js";import"./api-LgIJUvAN.js";import"./utils-CwDDfIjG.js";const L=()=>{const{isRTL:e}=y(),[r,l]=m.useState({companyName:"",contactName:"",email:"",phone:"",industry:"",inquiryType:"general",message:""}),[i,p]=m.useState(!1),s=o=>{l(c=>({...c,[o.target.name]:o.target.value}))},x=async o=>{if(o.preventDefault(),i)return;const c={name:r.contactName,email:r.email,subject:`Consultation Request: ${r.companyName||r.contactName} - ${r.inquiryType}`,message:`Phone: ${r.phone}
Company: ${r.companyName}
Industry: ${r.industry}
Type: ${r.inquiryType}

Message:
${r.message}`};try{p(!0),await h.promise(b(c),{pending:e?"جاري الإرسال...":"Sending...",success:e?"تم استلام طلب الاستشارة بنجاح":"Consultation request sent successfully!",error:e?"فشل في إرسال الطلب":"Failed to send request. Please try again."}),l({companyName:"",contactName:"",email:"",phone:"",industry:"",inquiryType:"general",message:""})}catch{}finally{p(!1)}};return u.jsxs(g,{parent:"Home",title:e?"طلب استشارة":"Request Consultation",children:[u.jsx("section",{className:"corp-section corp-section-alt",dir:e?"rtl":"ltr",children:u.jsx(j,{children:u.jsx(d,{className:"justify-content-center",children:u.jsx(a,{lg:"8",children:u.jsxs("div",{className:"corp-consultation-wrapper",children:[u.jsxs("div",{className:"corp-section-header",children:[u.jsx("h2",{children:e?"اطلب استشارة أعمال":"Request a Business Consultation"}),u.jsx("p",{children:e?"نقدم خدمات استشارية متخصصة وحلول مخصصة لاحتياجات أعمالك. يرجى ملء النموذج أدناه وسيتواصل معك فريق الخبراء لدينا قريباً.":"We provide specialized consulting services and tailored solutions for your business needs. Please fill out the form below and our expert team will contact you shortly."})]}),u.jsx("div",{className:"glass-card corp-consultation-form",children:u.jsx(A,{onSubmit:x,children:u.jsxs(d,{className:"g-4",children:[u.jsxs(a,{md:"6",children:[u.jsx(t,{children:e?"اسم الشركة":"Company Name"}),u.jsx(n,{className:"corp-input",name:"companyName",value:r.companyName,onChange:s,placeholder:e?"أدخل اسم الشركة":"Enter company name"})]}),u.jsxs(a,{md:"6",children:[u.jsxs(t,{children:[e?"اسم جهة الاتصال":"Contact Name"," ",u.jsx("span",{className:"text-danger",children:"*"})]}),u.jsx(n,{className:"corp-input",name:"contactName",value:r.contactName,onChange:s,required:!0,placeholder:e?"الاسم الكامل":"Full Name"})]}),u.jsxs(a,{md:"6",children:[u.jsxs(t,{children:[e?"البريد الإلكتروني":"Email Address"," ",u.jsx("span",{className:"text-danger",children:"*"})]}),u.jsx(n,{className:"corp-input",type:"email",name:"email",value:r.email,onChange:s,required:!0,placeholder:"email@example.com"})]}),u.jsxs(a,{md:"6",children:[u.jsxs(t,{children:[e?"رقم الهاتف":"Phone Number"," ",u.jsx("span",{className:"text-danger",children:"*"})]}),u.jsx(n,{className:"corp-input",name:"phone",value:r.phone,onChange:s,required:!0,placeholder:e?"رقم الجوال":"Phone number"})]}),u.jsxs(a,{md:"6",children:[u.jsx(t,{children:e?"مجال العمل / الصناعة":"Industry / Sector"}),u.jsx(n,{className:"corp-input",name:"industry",value:r.industry,onChange:s,placeholder:e?"مثال: تجزئة، تصنيع، إلخ":"e.g. Retail, Manufacturing, etc."})]}),u.jsxs(a,{md:"6",children:[u.jsx(t,{children:e?"نوع الاستفسار":"Inquiry Type"}),u.jsxs(n,{type:"select",className:"corp-input",name:"inquiryType",value:r.inquiryType,onChange:s,children:[u.jsx("option",{value:"general",children:e?"استفسار عام":"General Inquiry"}),u.jsx("option",{value:"bulk_order",children:e?"طلبات الجملة":"Bulk Orders"}),u.jsx("option",{value:"partnership",children:e?"شراكة استراتيجية":"Strategic Partnership"}),u.jsx("option",{value:"custom_product",children:e?"تصنيع منتج مخصص":"Custom Product Manufacturing"})]})]}),u.jsxs(a,{md:"12",children:[u.jsxs(t,{children:[e?"تفاصيل الطلب / الرسالة":"Request Details / Message"," ",u.jsx("span",{className:"text-danger",children:"*"})]}),u.jsx("textarea",{className:"corp-input corp-textarea",name:"message",value:r.message,onChange:s,required:!0,placeholder:e?"اكتب تفاصيل طلبك هنا...":"Write your request details here..."})]}),u.jsx(a,{md:"12",className:"text-center mt-4",children:u.jsx("button",{type:"submit",className:"corp-btn corp-btn-primary corp-btn-lg",disabled:i,children:i?e?"جاري الإرسال...":"Sending...":e?"إرسال طلب الاستشارة":"Submit Consultation Request"})})]})})})]})})})})}),u.jsx(N,{global:!0,css:`
        .corp-consultation-wrapper {
          padding-top: 40px;
        }
        .corp-consultation-wrapper .corp-section-header {
          margin-bottom: 40px;
        }
        .corp-consultation-form {
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.4);
          border-radius: var(--corp-radius-xl);
          padding: 40px;
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
          font-weight: 500;
          transition: all var(--corp-duration) var(--corp-ease);
        }
        .corp-input:focus {
          outline: none;
          background: var(--corp-white);
          border-color: var(--corp-accent);
          box-shadow: 0 0 0 4px rgba(59, 130, 246, 0.1);
        }
        .corp-textarea {
          min-height: 150px;
          resize: vertical;
        }
        label {
          font-weight: 700;
          color: var(--corp-navy);
          margin-bottom: 8px;
          display: block;
        }
        @media (max-width: 768px) {
          .corp-consultation-form {
            padding: 24px;
          }
        }
      `})]})};export{L as default};
