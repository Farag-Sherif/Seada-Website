import{r as c,j as s}from"./index-Clhqbsw3.js";import{C as h}from"./Container-CT1ljW0w.js";import{R as p,C as y}from"./Col-wKLm6A7K.js";import{u as g}from"./useLanguage-D3L0xuIp.js";import{f as m}from"./main-B1L26HUN.js";import{S as w}from"./StyleTag-BLuBRiJj.js";import"./utils-UQQFurP7.js";const x=t=>[{icon:"🕰️",title:t("why_us.generational.title"),desc:t("why_us.generational.desc")},{icon:"🤝",title:t("why_us.wholesale.title"),desc:t("why_us.wholesale.desc")},{icon:"🏭",title:t("why_us.production.title"),desc:t("why_us.production.desc")},{icon:"🏅",title:t("why_us.quality.title"),desc:t("why_us.quality.desc")},{icon:"🌍",title:t("why_us.global.title"),desc:t("why_us.global.desc")},{icon:"⭐",title:t("why_us.egypt_first.title"),desc:t("why_us.egypt_first.desc")}],f=(t,n)=>{const o=(t==null?void 0:t.translations)||[],r=o.find(a=>a.locale===n)||o.find(a=>a.locale==="en")||{};return{title:r.title||t.title||"",description:r.description||t.description||""}},N=()=>{const{t,isRTL:n,currentLanguage:o}=g(),[r,a]=c.useState(null);c.useEffect(()=>{let e=!0;return(async()=>{try{const i=await m();e&&a(Array.isArray(i)?i:[])}catch{e&&a([])}})(),()=>{e=!1}},[]);const u=c.useMemo(()=>Array.isArray(r)&&r.length?r.map(e=>{const{title:i,description:l}=f(e,o),d=e.icon_path??e.icon??"⭐";return{id:e.id,icon:d,title:i,description:l}}):x(t).map((e,i)=>({id:`adv-${i}`,icon:e.icon,title:e.title,description:e.desc})),[r,o,t]);return s.jsxs("section",{className:"corp-section corp-section-alt",id:"why-us",dir:n?"rtl":"ltr",children:[s.jsxs(h,{children:[s.jsxs("div",{className:"corp-section-header",children:[s.jsx("span",{className:"corp-label",children:t("why_us.sub_title")}),s.jsx("h2",{children:t("why_us.title")}),s.jsx("hr",{className:"corp-gold-line"}),s.jsx("p",{children:n?"نلتزم بأعلى معايير الجودة والاحترافية لضمان رضا عملائنا في كل مرة.":"We are committed to the highest standards of quality and professionalism to ensure our clients' satisfaction every time."})]}),s.jsx(p,{className:"g-4",children:u.map((e,i)=>s.jsx(y,{lg:"4",md:"6",children:s.jsxs("div",{className:"why-card corp-card",style:{animationDelay:`${i*.1}s`},children:[s.jsx("div",{className:"why-card-icon",children:typeof e.icon=="string"&&(e.icon.startsWith("http")||e.icon.startsWith("/"))?s.jsx("img",{src:e.icon,alt:"",width:40,height:40,style:{objectFit:"contain"}}):s.jsx("span",{children:e.icon||"⭐"})}),s.jsx("h4",{className:"why-card-title",children:e.title}),s.jsx("p",{className:"why-card-desc",children:e.description})]})},e.id))})]}),s.jsx(w,{global:!0,css:`
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
      `})]})};export{N as default};
