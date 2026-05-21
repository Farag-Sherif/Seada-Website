import{r as t,F as s,j as o}from"./index-oP643INO.js";import{u as r,g as a}from"./useQuery--TTHCkEz.js";const l=a`
    query getColors($type:String)  {
        getColors(type: $type){
            colors
        }
    }
`,g=()=>{const e=t.useContext(s),[n,p]=t.useState(!1);var{loading:c,data:i}=r(l,{variables:{type:e.state}});return o.jsx("div",{className:"collection-collapse-block open"})};export{g as default};
