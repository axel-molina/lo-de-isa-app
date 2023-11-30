import{A as r,O as o,I as p,Q as h,G as y,S as x,D as I,E as S,F as l,K as f,U as v,B as C,w as e,V as L}from"./index-QepMC5JU.js";const b=r(o)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    margin-right: 60px;
  }
`,i=r.p`
  margin: 0;
`,g=r.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 120px;
  }
`,A=r.div`
  @media (min-width: 768px) {
    display: flex;
    gap: 100px;
  }
`,a=r.div`
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`,u=r(p)`
  @media (min-width: 768px) {
    width: 150%;
  }
`,j=r(o.Item)`
  @media (min-width: 768px) {
    width: 136%;
  }
`;r(h)`
  width: 183%;
  @media (min-width: 768px) {
    width: 177%;
  }
`;const E=r.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    width: 115%;
  }
`,T=()=>{const d=y();return{httpRegisterAsync:s=>async n=>{n(x(!0));try{const t=await fetch(`${I}${S.REGISTER}`,{method:"POST",body:JSON.stringify({email:s.email,password:s.password,bank:0,avatar:s.avatar,name:s.name,lastname:s.lastname}),headers:{"Content-Type":"application/json"}});if(!t.ok){l.error("Ya existe un usuario registrado con ese email"),n(x(!1));return}t.status===200&&(l.success("Usuario registrado con éxito"),n(x(!1)),d(f.login))}catch{l.error("Error de registro"),n(x(!1))}}}},P=()=>{const{httpRegisterAsync:d}=T(),c=v(),s=y();return{register:async m=>{if(m.password.length<8){l.error("La contraseña debe tener al menos 8 caracteres");return}const{passwordConfirm:w,...R}=m;if(m.password!==w){l.error("Las contraseñas no coinciden");return}if(!/\S+@\S+\.\S+/.test(m.email)){l.error("El email no es válido");return}c(d(R))},handleReturnToLogin:()=>{s(f.login)}}},k=()=>{const{register:d,handleReturnToLogin:c}=P(),s=C(t=>t.loadingAuth.isLoadingRegister),n=t=>{d(t)};return e.jsx(b,{initialValues:{remember:!0},autoComplete:"off",onFinish:n,children:e.jsxs("div",{children:[e.jsxs(g,{children:[e.jsxs(a,{children:[e.jsx(i,{children:"Nombre"}),e.jsx(o.Item,{name:"name",rules:[{required:!0,message:"Ingrese su nombre"}],children:e.jsx(u,{placeholder:"Nombre"})})]}),e.jsxs(a,{children:[e.jsx(i,{children:"Apellido"}),e.jsx(o.Item,{name:"lastName",children:e.jsx(u,{placeholder:"Apellido"})})]})]}),e.jsxs(g,{children:[e.jsxs(a,{children:[e.jsx(i,{children:"Email"}),e.jsx(o.Item,{name:"email",rules:[{required:!0,message:"Ingrese su email"}],children:e.jsx(u,{placeholder:"Email"})})]}),e.jsxs(a,{children:[e.jsx(i,{children:"Avatar (url)"}),e.jsx(o.Item,{name:"avatar",children:e.jsx(u,{placeholder:"url",type:"url"})})]})]}),e.jsxs(A,{children:[e.jsxs(a,{children:[e.jsx(i,{children:"Contraseña"}),e.jsx(j,{name:"password",rules:[{required:!0,message:"Ingrese su contraseña"}],children:e.jsx(p.Password,{placeholder:"Contraseña"})})]}),e.jsxs(a,{children:[e.jsx(i,{children:"Reingresar contraseña"}),e.jsx(j,{name:"passwordConfirm",rules:[{required:!0,message:"Ingrese su contraseña"}],children:e.jsx(p.Password,{placeholder:"Contraseña",style:{maxWidth:"100%"}})})]})]}),e.jsxs(E,{children:[e.jsx(h,{type:"default",block:!0,onClick:()=>c(),children:"Ya tengo cuenta"}),e.jsx(h,{type:"primary",htmlType:"submit",block:!0,loading:s,children:"Registrarme"})]})]})})},q=()=>e.jsxs("div",{style:{marginTop:"6%"},children:[e.jsx(L,{}),e.jsx(k,{})]});export{q as default};
