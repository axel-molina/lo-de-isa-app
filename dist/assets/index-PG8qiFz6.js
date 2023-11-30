import{z as D,w as s,U as g,B as h,W as m,X as A,A as f,G as E,Y as C,Z as I,$ as L,K as B,F as S,a0 as V,a1 as P,a2 as j,a3 as M,I as _,Q as G,r as y}from"./index-rScBKIl1.js";import{B as u,i as O,A as H}from"./index-5LO3xjnJ.js";import{C as w,H as z,I as $,a as b,D as F,u as N,b as R,c as T,E as K,d as Q,e as U,f as W}from"./useHttpGetProducts-LZt7JUBx.js";const X=D(s.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),Y=D(s.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12 1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z"}),"DeleteForever"),Z=()=>{const t=g(),a=h(n=>n.productosEnOrdenDeVenta),o=n=>{t(m(n))},d=n=>{t(A(n))};return s.jsxs(w,{children:[s.jsxs(z,{children:[s.jsx("div",{children:"Producto"}),s.jsx("div",{children:"Eliminar"}),s.jsx("div",{children:"Eliminar todo"})]}),a.map(n=>s.jsxs($,{children:[s.jsxs("div",{children:[s.jsxs("div",{style:{display:"flex",gap:"10px"},children:[s.jsx("b",{children:n.name}),s.jsxs(b,{children:["x",n.stock]})]}),s.jsxs(b,{children:["$",n.price.toFixed(2)]})]}),s.jsx("div",{style:{},children:s.jsx(u,{variant:"contained",color:"error",onClick:()=>o(n),children:s.jsx(F,{})})}),s.jsx("div",{style:{marginLeft:"15px"},children:s.jsx(u,{variant:"contained",color:"error",onClick:()=>d(n),children:s.jsx(Y,{})})})]},n._id))]})},q=f.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  padding-right: 10px;
  font-size: 20px;
  font-weight: bold;
  color: green;
  background-color: #ecf0f1;
  border-top: 1px solid #ecf0f1;
`,J=f.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 10px;
  gap: 10px;
`,ss=({precioFinal:t})=>{const a=E(),o=g(),{httpEditProductAsync:d}=N(),n=h(r=>r.productosEnOrdenDeVenta),i=h(r=>r.products.products),l=t==null?void 0:t.toFixed(2).replace(".",","),e=()=>{o(C("clear")),a("/")},c=()=>{t!==0&&(x(),o(I(t)),o(C("clear")))},x=()=>{n.forEach(r=>{const p=i.find(v=>v._id===r._id),k=p&&p.stock-r.stock;if(k!==void 0&&p!==void 0){const v={name:r.name,stock:k,price:r.price,code:r.code};o(d({id:r._id,body:v})),console.log("corregir editar producto",v)}})};return s.jsxs("div",{children:[s.jsxs(q,{children:["Precio total $ ",l||0]}),s.jsxs(J,{children:[s.jsx(u,{variant:"contained",color:"success",onClick:c,children:"Vender"}),s.jsx(u,{variant:"contained",color:"error",onClick:()=>e(),children:"Cancelar"})]})]})},es=()=>{const t=g(),a=E(),o=h(e=>e.loadingProduct.isLoadingProducts),d=h(e=>e.productosEnOrdenDeVenta),n=h(e=>e.products.products),i=e=>{var c;return d.find(x=>x._id===e._id)&&((c=d.find(x=>x._id===e._id))==null?void 0:c.stock)===e.stock},l=e=>{if(i(e)){S.error("No hay suficiente stock disponible");return}const c={...e};c.stock=1,t(V(c)),S.success("Producto añadido")};return s.jsxs(w,{children:[s.jsxs(R,{children:[s.jsx("div",{children:"Producto"}),s.jsx("div",{children:"Precio"}),s.jsx("div",{children:"Stock"}),s.jsx("div",{})]}),o?s.jsx("div",{style:{margin:"30px 0"},children:s.jsx(L,{})}):n.map(e=>{var c;return s.jsxs(T,{onClick:()=>l(e),children:[s.jsx("div",{children:e==null?void 0:e.name}),s.jsxs("div",{style:{marginLeft:"25%"},children:["$",(c=e==null?void 0:e.price)==null?void 0:c.toFixed(2)]}),s.jsx("div",{style:{marginLeft:"48%"},children:e==null?void 0:e.stock})]},e._id)}),(n.length===0||n===null)&&!o&&s.jsxs(K,{children:[s.jsx("p",{style:{textAlign:"center"},children:"No se encuentran resultados"}),s.jsx(u,{color:"success",variant:"contained",onClick:()=>a(B.editStock),children:"Agregar productos"})]})]})},ns=f.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${t=>t.show?"flex":"none"};
`,ts=f.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 10px;
  background-color: #fff;
  width: 90%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`;f.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;const os=({show:t,setShow:a,handleSearchProduct:o,setSearch:d,search:n})=>{const i=()=>{a(!1)};return s.jsx(ns,{show:t,children:s.jsxs(ts,{children:[s.jsxs(P,{justify:"space-between",children:[s.jsx(j,{children:s.jsx(M,{id:"modal-modal-title",variant:"h6",component:"h2",children:"Seleccionar producto"})}),s.jsx(j,{style:{cursor:"pointer"},children:s.jsx(X,{onClick:i})})]}),s.jsxs(P,{gutter:[8,16],children:[s.jsx(j,{span:6,children:s.jsx(_,{type:"primary",id:"Buscar",placeholder:"Buscar",value:n,onChange:l=>d(l.target.value),onPressEnter:o})}),s.jsx(j,{span:2,children:s.jsx(G,{type:"primary",onClick:o,children:"Buscar"})}),s.jsx(j,{span:24,children:s.jsx(es,{})})]})]})})},as=()=>{const{httpGetProductsAsync:t}=Q(),a=g(),o=h(r=>r.productosEnOrdenDeVenta),[d,n]=y.useState(!1),[i,l]=y.useState(""),e=()=>{let r=0;return o.forEach(p=>{r+=p.price*p.stock}),r},c=()=>{n(!0)},x=()=>{a(t(1,10,i.toString()))};return y.useEffect(()=>{e()},[o]),s.jsxs("div",{children:[s.jsx(O,{}),s.jsxs(U,{children:[s.jsx(W,{children:s.jsxs(u,{variant:"contained",color:"success",style:{paddingLeft:"4px"},onClick:()=>{c()},children:[s.jsx(H,{}),"Añadir"]})}),s.jsx(Z,{}),s.jsx(ss,{precioFinal:e()}),s.jsx(os,{show:d,setShow:n,handleSearchProduct:x,setSearch:l,search:i})]})]})};export{as as default};
