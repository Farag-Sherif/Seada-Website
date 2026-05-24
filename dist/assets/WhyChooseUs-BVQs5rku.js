import{r as o,j as e}from"./index-DweZ4P2R.js";import{C as d}from"./Container-DxkBgcFy.js";import{R as p,C as h}from"./Col-sODIRSUs.js";import{u as A}from"./useLanguage-BDBuB9CT.js";import{f as g}from"./main-DkAwJllx.js";import{S as m}from"./StyleTag-D38Rn_4I.js";import"./utils-CM_BgNzX.js";import"./api-LgIJUvAN.js";const y=u=>[{icon:"🏭",title:u?"تصنيع عالي الجودة":"Premium Manufacturing",desc:u?"مرافق إنتاج حديثة تضمن أعلى معايير الجودة في كل منتج.":"State-of-the-art production facilities ensuring the highest quality standards in every product."},{icon:"🌍",title:u?"خبرة في التصدير":"Global Export Experience",desc:u?"سنوات من الخبرة في الشحن والتصدير إلى أسواق عالمية متعددة.":"Years of experience in shipping and exporting to multiple international markets."},{icon:"✅",title:u?"ضمان الجودة":"Quality Assurance",desc:u?"فحوصات جودة صارمة في كل مرحلة من مراحل الإنتاج.":"Rigorous quality checks at every stage of the production process."},{icon:"🤝",title:u?"شراكة موثوقة":"Trusted Partnership",desc:u?"بناء علاقات طويلة الأمد مع عملائنا من خلال الشفافية والموثوقية.":"Building long-term relationships with our clients through transparency and reliability."},{icon:"📦",title:u?"حلول مخصصة":"Customized Solutions",desc:u?"نقدم حلول تغليف ومنتجات مخصصة تلبي احتياجات عملائنا.":"We offer customized packaging and product solutions tailored to your business needs."},{icon:"⚡",title:u?"تسليم سريع":"Fast Turnaround",desc:u?"عمليات مبسطة تضمن التسليم في الوقت المحدد في كل مرة.":"Streamlined operations ensuring on-time delivery, every time."}],f=(u,n)=>{const i=(u==null?void 0:u.translations)||[],s=i.find(a=>a.locale===n)||i.find(a=>a.locale==="en")||{};return{title:s.title||u.title||"",description:s.description||u.description||""}},E=()=>{const{isRTL:u,currentLanguage:n}=A(),[i,s]=o.useState(null);o.useEffect(()=>{let t=!0;return(async()=>{try{const r=await g();t&&s(Array.isArray(r)?r:[])}catch{t&&s([])}})(),()=>{t=!1}},[]);const a=o.useMemo(()=>Array.isArray(i)&&i.length?i.map(t=>{const{title:r,description:c}=f(t,n),l=t.icon_path??t.icon??"⭐";return{id:t.id,icon:l,title:r,description:c}}):y(u).map((t,r)=>({id:`adv-${r}`,icon:t.icon,title:t.title,description:t.desc})),[i,n,u]);return e.jsxs("section",{className:"corp-section corp-section-alt",id:"why-us",dir:u?"rtl":"ltr",children:[e.jsxs(d,{children:[e.jsxs("div",{className:"corp-section-header",children:[e.jsx("span",{className:"corp-label",children:u?"لماذا نحن":"Why Choose Us"}),e.jsx("h2",{children:u?"ما يميزنا عن غيرنا":"What Sets Us Apart"}),e.jsx("hr",{className:"corp-gold-line"}),e.jsx("p",{children:u?"نلتزم بأعلى معايير الجودة والاحترافية لضمان رضا عملائنا في كل مرة.":"We are committed to the highest standards of quality and professionalism to ensure our clients' satisfaction every time."})]}),e.jsx(p,{className:"g-4",children:a.map((t,r)=>e.jsx(h,{lg:"4",md:"6",children:e.jsxs("div",{className:"why-card corp-card",style:{animationDelay:`${r*.1}s`},children:[e.jsx("div",{className:"why-card-icon",children:typeof t.icon=="string"&&(t.icon.startsWith("http")||t.icon.startsWith("/"))?e.jsx("img",{src:t.icon,alt:"",width:40,height:40,style:{objectFit:"contain"}}):e.jsx("span",{children:t.icon||"⭐"})}),e.jsx("h4",{className:"why-card-title",children:t.title}),e.jsx("p",{className:"why-card-desc",children:t.description})]})},t.id))})]}),e.jsx(m,{global:!0,css:`
        .why-card {
          text-align: center;
          padding: 40px 28px;
        }
        .why-card-icon {
          width: 80px;
          height: 80px;
          margin: 0 auto 24px;
          display: grid;
          place-items: center;
          border-radius: 20px;
          background: linear-gradient(135deg, var(--corp-gold-glow) 0%, rgba(200, 163, 95, 0.08) 100%);
          font-size: 36px;
          transition: all var(--corp-duration) var(--corp-ease);
        }
        .why-card:hover .why-card-icon {
          transform: scale(1.1) rotate(5deg);
          background: linear-gradient(135deg, var(--corp-gold) 0%, var(--corp-gold-light) 100%);
        }
        .why-card:hover .why-card-icon img {
          filter: brightness(0) invert(1);
        }
        .why-card-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: var(--corp-navy);
          margin-bottom: 12px;
        }
        .why-card-desc {
          font-size: 0.95rem;
          color: var(--corp-text-secondary);
          line-height: 1.7;
          margin: 0;
        }
      `})]})};export{E as default};
