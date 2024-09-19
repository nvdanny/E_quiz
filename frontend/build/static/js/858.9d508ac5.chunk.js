"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[858],{8590:(e,t,n)=>{n.d(t,{CB:()=>s,Dt:()=>c,I$:()=>r,JZ:()=>o,Sv:()=>a,e9:()=>l,gV:()=>p,ou:()=>u,tR:()=>d,yB:()=>h});var i=n(3565);const s=async(e,t)=>{const n={title:e.title,description:e.description,duration:e.duration,start:e.start,end:e.end,questions:e.questions},s={Authorization:`Bearer ${t}`,"Content-Type":"application/json"};return i.A.post("/api/exam/",n,{headers:s})},a=async(e,t,n)=>{const s={id:e,title:t.title,description:t.description,duration:t.duration,start:t.start,end:t.end,questions:t.questions,active:t.active},a={Authorization:`Bearer ${n}`,"Content-Type":"application/json"};return i.A.put(`/api/exam/${e}`,s,{headers:a})},r=async(e,t)=>{const n={Authorization:`Bearer ${t}`};return i.A.get(`/api/exam/${e}`,{headers:n})},o=async e=>{const t={Authorization:`Bearer ${e}`};return i.A.get("/api/exam/list",{headers:t})},c=async(e,t)=>{const n={Authorization:`Bearer ${t}`};return i.A.delete(`/api/exam/${e}`,{headers:n})},h=async(e,t,n)=>{const s={id:e,active:t},a={Authorization:`Bearer ${n}`,"Content-Type":"application/json"};return i.A.post("/api/exam/updateStatus",s,{headers:a})},d=async e=>{const t={Authorization:`Bearer ${e}`};return i.A.get("/api/submission/",{headers:t})},l=async e=>{const t={Authorization:`Bearer ${e}`};return i.A.get("/api/exam/",{headers:t})},u=async(e,t,n,s)=>{const a={id:t,answers:n,user:s},r={Authorization:`Bearer ${e}`,"Content-Type":"application/json"};return i.A.post("/api/submission/submit",a,{headers:r})},p=async(e,t)=>{const n={shift:t},s={Authorization:`Bearer ${e}`,"Content-Type":"application/json"};return i.A.post("/api/submission/shift",n,{headers:s})}},8858:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var i=n(5043),s=n(3216),a=n(8155),r=n(5566),o=n(8590),c=n(579);const h=()=>{const[e,t]=(0,i.useState)(!1),n=(0,s.Zp)(),h=()=>t(!1);return(0,c.jsxs)("div",{className:"d-flex justify-content-center align-items-center vh-100 welcomePage",style:{background:"url('/landing-page/images/blndt-2024-no-text.png'"},children:[(0,c.jsxs)("div",{className:"content text-center bg-white p-5 rounded shadow",children:[(0,c.jsx)("h3",{children:"Ch\xe0o m\u1eebng b\u1ea1n \u0111\u1ebfn v\u1edbi v\xf2ng thi Test Online"}),(0,c.jsx)("h4",{className:"mt-3",children:"CU\u1ed8C THI B\u1ea2N L\u0128NH NH\xc0 \u0110\u1ea6U T\u01af 2024"}),(0,c.jsx)("p",{className:"text-left mt-5",children:"Th\u1ec3 l\u1ec7 B\xe0i thi g\u1ed3m 20 c\xe2u tr\u1eafc nghi\u1ec7m A-B-C-D v\u1ec1 c\xe1c l\u0129nh v\u1ef1c Kinh t\u1ebf, T\xe0i ch\xednh, Ch\u1ee9ng kho\xe1n... \u1ede m\u1ed7i c\xe2u h\u1ecfi, c\xe1c th\xed sinh ch\u1ec9 \u0111\u01b0\u1ee3c l\u1ef1a ch\u1ecdn 01 \u0111\xe1p \xe1n duy nh\u1ea5t."}),(0,c.jsxs)("div",{className:"text-left ",children:[" ",(0,c.jsx)("strong",{children:"T\u1ed5ng \u0111i\u1ec3m b\xe0i thi:"})," 20 \u0111i\u1ec3m"]}),(0,c.jsxs)("p",{className:"text-left ",children:[(0,c.jsx)("strong",{children:"Th\u1eddi gian l\xe0m b\xe0i:"})," 20 ph\xfat."]}),(0,c.jsx)("p",{className:"text-left ",children:"Ch\xfac b\u1ea1n ho\xe0n th\xe0nh t\u1ed1t b\xe0i thi c\u1ee7a m\xecnh!"}),(0,c.jsx)(a.A,{variant:"primary",onClick:()=>{t(!0)},className:"mt-3 ",children:"V\xc0O THI"})]}),(0,c.jsx)(a.A,{variant:"secondary",onClick:()=>{n("/logout")},className:"position-absolute top-0 end-0 m-3",children:"\u0110\u0103ng xu\u1ea5t"}),(0,c.jsxs)(r.A,{show:e,onHide:h,centered:!0,children:[(0,c.jsx)(r.A.Header,{closeButton:!0,children:(0,c.jsx)(r.A.Title,{children:"Th\xf4ng b\xe1o"})}),(0,c.jsx)(r.A.Body,{children:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n b\u1eaft \u0111\u1ea7u b\xe0i thi kh\xf4ng? B\xe0i thi ch\u1ec9 \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n m\u1ed9t l\u1ea7n duy nh\u1ea5t trong th\u1eddi gian quy \u0111inh."}),(0,c.jsxs)(r.A.Footer,{children:[(0,c.jsx)(a.A,{variant:"secondary",onClick:h,children:"H\u1ee7y"}),(0,c.jsx)(a.A,{variant:"primary",onClick:async()=>{const e=localStorage.getItem("accessToken");try{const t=await(0,o.tR)(e);!1===t.data.success?window.location.href="/exam/error":"Failed"==t.data.msg?window.location.href="/exam/finish":window.location.href="/exam"}catch(t){t.response?window.location.href="/exam/error":console.error("Error setting up the request:",t.message)}},children:"B\u1eaft \u0111\u1ea7u thi"})]})]})]})}}}]);
//# sourceMappingURL=858.9d508ac5.chunk.js.map