import{r as o,F as m,j as e}from"./index-ChhymkBp.js";import{I as p}from"./Input-D3oNu221.js";import{C as h}from"./Collapse-CP-uPS_8.js";import{u as x,g as u}from"./useQuery-W08cp04U.js";import"./utils-hTTS5mlv.js";import"./Transition-D5xtfJ2d.js";const g=u`
  query getBrands($type: String) {
    getBrands(type: $type) {
      brand
    }
  }
`,N=()=>{const s=o.useContext(m),a=s.isChecked;s.filterChecked;const[l,n]=o.useState(!1),r=()=>n(!l);var{loading:i,data:t}=x(g,{variables:{type:s.state}});return e.jsxs("div",{className:"collection-collapse-block open",children:[e.jsx("h3",{className:"collapse-block-title",onClick:r,children:"brand"}),e.jsx(h,{isOpen:l,children:e.jsx("div",{className:"collection-collapse-block-content",children:e.jsx("div",{className:"collection-brand-filter",children:!t||!t.getBrands||t.getBrands.length===0||i?"loading":t&&t.getBrands.brand.map((c,d)=>e.jsxs("div",{className:"form-check custom-checkbox collection-filter-checkbox",children:[e.jsx(p,{checked:s.selectedBrands.includes(c),onChange:()=>{s.handleBrands(c,a)},type:"checkbox",className:"custom-control-input",id:c}),e.jsx("label",{className:"custom-control-label",htmlFor:c,children:c})]},d))})})})]})};export{N as default};
