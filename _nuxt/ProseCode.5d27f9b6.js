import{a as r}from"./index.d71b559c.js";import{f as i,j as c,_ as p,o as s,c as a,a3 as d,a as u,l as f}from"./entry.621f318c.js";import"./index.2936f79d.js";const m=i({props:{code:{type:String,default:""},language:{type:String,default:null},filename:{type:String,default:null},highlights:{type:Array,default:()=>[]},meta:{type:String,default:null}},setup(e){const{copy:t,isSupported:n}=r({legacy:!0}),o=c(!1);function l(){t(e.code),o.value=!0,setTimeout(()=>{o.value=!1},1e3)}return{isSupported:n,copyCode:l,copied:o}}}),y={class:"code-wrap"},_={key:0,class:"code-tools"},g={key:0,class:"i-icon-park-outline-check"};function k(e,t,n,o,l,v){return s(),a("div",y,[d(e.$slots,"default"),e.isSupported?(s(),a("div",_,[u("button",null,[e.copied?(s(),a("div",g)):(s(),a("div",{key:1,class:"i-icon-park-outline-copy",onClick:t[0]||(t[0]=S=>e.copyCode())}))])])):f("",!0)])}const B=p(m,[["render",k]]);export{B as default};
