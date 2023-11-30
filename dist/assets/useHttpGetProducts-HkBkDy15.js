import{z as C,w as I,A as t,G as m,aW as y,bl as i,D as x,E as b,F as s,aY as v,aZ as P,K as E,bm as d,bn as k,bo as A}from"./index-QepMC5JU.js";const T=C(I.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete"),$=t.div`
  border: 1px solid #ecf0f1;
  border-radius: 5px;
  overflow-y: scroll;
`,h=t.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ecf0f1;
  font-weight: bold;
  background-color: #ecf0f1;
`,j=t.div`
  display: grid;
  grid-template-columns: 2fr 1fr 0.5fr;
  align-items: center;
  padding: 10px;
  border-top: 1px solid #ecf0f1;
  font-weight: bold;
  background-color: #ecf0f1;
`,D=t.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ecf0f1;

  &:hover {
    cursor: pointer;
    background-color: #ecf0f1;
  }
`,H=t.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ecf0f1;

  &:hover {
    cursor: pointer;
    background-color: #ecf0f1;
  }
`,w=t.div`
  color: gray;
`,R=t.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
`,z=()=>{const l=m(),o=localStorage.getItem("token")||y(),f=o==null?void 0:o.replace(/['"]+/g,"");return{httpEditProductAsync:({id:u,body:p,setShow:c,show:e,refresh:r,setRefresh:n})=>async a=>{a(i(!0));try{const g=await fetch(`${x}${b.PRODUCT}/${u}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${f}`},body:JSON.stringify(p)});if(g.status===401){s.error("Sesión expirada, por favor inicie sesión nuevamente"),localStorage.clear(),a(v()),a(P()),l(E.login),a(i(!1));return}g.ok?(n&&r&&n(!r),c&&e&&c(!e),s.success("Producto editado exitosamente"),a(i(!1))):(s.error("Error al editar producto"),a(i(!1)))}catch{s.error("Error al editar producto"),a(i(!1))}}}},U=t.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 30px;
`,M=t.div`
  display: flex;
  justify-content: flex-start;
  margin: 10px;
`,B=()=>{const l=m(),o=localStorage.getItem("token")||y(),f=o==null?void 0:o.replace(/['"]+/g,"");return{httpGetProductsAsync:(u,p,c)=>async e=>{e(d(!0));try{const r=await fetch(`${x}${b.GET_PRODUCT_PAGINATED}?page=${u}&limit=${p}&search=${c}`,{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${f}`}});if(r.status===401){s.error("Sesión expirada, por favor inicie sesión nuevamente"),localStorage.clear(),e(v()),e(P()),l(E.login),e(d(!1));return}const n=await r.json();r.ok?(e(k(n.data.products)),e(A(n.data.pagination)),e(d(!1))):(s.error("Error al consultar productos"),e(d(!1)))}catch{s.error("Error al consultar productos"),e(d(!1))}}}};export{$ as C,T as D,R as E,h as H,D as I,w as a,j as b,H as c,B as d,U as e,M as f,z as u};
