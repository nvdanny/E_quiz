"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[4],{58608:(e,a,l)=>{l.d(a,{A:()=>r});const n=l(86213).A.create({baseURL:"https://blndt-sec-bav.com/index.html"});n.interceptors.response.use((e=>e),(e=>(e.response&&401===e.response.status&&t(),Promise.reject(e))));const t=()=>{localStorage.removeItem("accessToken"),localStorage.removeItem("userInfo"),localStorage.removeItem("timeLeft"),window.location.href="/login"},r=n},5004:(e,a,l)=>{l.r(a),l.d(a,{default:()=>w});var n=l(65043),t=l(73216),r=l(35475),s=l(3526),i=l(44101),o=l(44227),c=l(22378),d=l(65173),m=l.n(d),p=l(25196),f=(0,n.forwardRef)((function(e,a){var l=e.children,t=e.className,r=(0,c.Tt)(e,["children","className"]);return n.createElement("div",(0,c.Cl)({className:(0,p.A)("card-group",t)},r,{ref:a}),l)}));f.propTypes={children:m().node,className:m().string},f.displayName="CCardGroup";var u=l(80861),v=l(96105),h=l(81917),b=l(25917),g=l(85504),N=l(30347),y=l(10825),x=l(84709),k=l(6145),C=l(3550),T=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"],E=l(58608);var j=l(70579);const w=()=>{const[e,a]=(0,n.useState)(""),[l,c]=(0,n.useState)(""),[d,m]=(0,n.useState)(""),p=(0,t.Zp)();return(0,n.useEffect)((()=>{if(d){const e=setTimeout((()=>{m("")}),3e3);return()=>clearTimeout(e)}}),[d]),(0,n.useEffect)((()=>{if(localStorage.getItem("accessToken")){const e=JSON.parse(localStorage.getItem("userInfo"));"admin"===(null===e||void 0===e?void 0:e.role)?p("/admin/dashboard"):p("/welcome")}}),[p]),(0,j.jsx)("div",{className:"bg-body-tertiary min-vh-100 d-flex flex-row align-items-center",children:(0,j.jsx)(s.T,{children:(0,j.jsx)(i.s,{className:"justify-content-center",children:(0,j.jsx)(o.U,{md:5,children:(0,j.jsx)(f,{children:(0,j.jsx)(u.E,{className:"p-4",children:(0,j.jsx)(v.W,{children:(0,j.jsxs)(h.q,{children:[(0,j.jsx)("h1",{children:"\u0110\u0103ng nh\u1eadp"}),(0,j.jsx)("p",{className:"text-body-secondary",children:"\u0110\u0103ng nh\u1eadp v\xe0o t\xe0i kho\u1ea3n c\u1ee7a b\u1ea1n"}),d&&(0,j.jsx)(b.k,{color:"danger",children:d}),(0,j.jsxs)(g.B,{className:"mb-3",children:[(0,j.jsx)(N.s,{children:(0,j.jsx)(k.A,{icon:C.o})}),(0,j.jsx)(y.O,{placeholder:"Email",autoComplete:"email",value:e,onChange:e=>a(e.target.value)})]}),(0,j.jsxs)(g.B,{className:"mb-2",children:[(0,j.jsx)(N.s,{children:(0,j.jsx)(k.A,{icon:T})}),(0,j.jsx)(y.O,{type:"password",placeholder:"Password",autoComplete:"current-password",value:l,onChange:e=>c(e.target.value)})]}),(0,j.jsxs)(i.s,{children:[(0,j.jsx)(o.U,{xs:6,className:"text-left",children:(0,j.jsx)(r.N_,{to:"/register",children:(0,j.jsx)(x.Q,{color:"link",active:!0,tabIndex:-1,children:"\u0110\u0103ng k\xfd t\u1ea1i \u0111\xe2y"})})}),(0,j.jsx)(o.U,{xs:6,className:"text-right text-end",children:(0,j.jsx)(r.N_,{to:"/resetPassword",children:(0,j.jsx)(x.Q,{color:"link",active:!0,tabIndex:-1,children:"Qu\xean m\u1eadt kh\u1ea9u?"})})})]}),(0,j.jsx)(i.s,{className:"justify-content-md-center",children:(0,j.jsx)(o.U,{xs:4,className:"text-right mt-4",children:(0,j.jsx)(x.Q,{color:"primary",className:"px-4",onClick:async()=>{if((e=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e))(e))if(l.length<5)m("Vui l\xf2ng nh\u1eadp m\u1eadt kh\u1ea9u h\u01a1p l\u1ec7.");else try{const a=await(async(e,a)=>{const l={email:e,password:a};return E.A.post("/api/auth/sign-in",l)})(e,l),{data:n,accessToken:t}=a.data;localStorage.setItem("accessToken",t),localStorage.setItem("userInfo",JSON.stringify(n)),"admin"===n.role?p("/admin/dashboard"):p("/welcome")}catch(a){a.response&&a.response.data&&a.response.data.msg?"Invalid password"==a.response.data.msg?m("T\xe0i kho\u1ea3n ho\u1eb7c m\u1eadt kh\u1ea9u sai. Vui l\xf2ng nh\u1eadp l\u1ea1i!."):"Email not found"==a.response.data.msg&&m("Email kh\xf4ng t\u1ed3n t\u1ea1i ho\u1eb7c ch\u01b0a \u0111\u0103ng k\xfd."):m("\u0110\u0103ng nh\u1eadp th\u1ea5t b\u1ea1i. Vui l\xf2ng th\u1eed l\u1ea1i.")}else m("Vui l\xf2ng nh\u1eadp m\u1ed9t \u0111\u1ecba ch\u1ec9 email h\u1ee3p l\u1ec7.")},children:"\u0110\u0103ng nh\u1eadp"})})})]})})})})})})})})}},25917:(e,a,l)=>{l.d(a,{k:()=>p});var n=l(22378),t=l(65043),r=l(65173),s=l.n(r),i=l(25196),o=l(90436),c=l(94462),d=l(75232),m=l(93789),p=(0,t.forwardRef)((function(e,a){var l=e.children,r=e.className,s=e.color,d=void 0===s?"primary":s,p=e.dismissible,f=e.variant,u=e.visible,v=void 0===u||u,h=e.onClose,b=(0,n.Tt)(e,["children","className","color","dismissible","variant","visible","onClose"]),g=(0,t.useRef)(null),N=(0,c.E2)(a,g),y=(0,t.useState)(v),x=y[0],k=y[1];return(0,t.useEffect)((function(){k(v)}),[v]),t.createElement(m.Ay,{in:x,mountOnEnter:!0,nodeRef:g,onExit:h,timeout:150,unmountOnExit:!0},(function(e){return t.createElement("div",(0,n.Cl)({className:(0,i.A)("alert","solid"===f?"bg-".concat(d," text-white"):"alert-".concat(d),{"alert-dismissible fade":p,show:"entered"===e},r),role:"alert"},b,{ref:N}),l,p&&t.createElement(o.E,{onClick:function(){return k(!1)}}))}))}));p.propTypes={children:s().node,className:s().string,color:d.TX.isRequired,dismissible:s().bool,onClose:s().func,variant:s().string,visible:s().bool},p.displayName="CAlert"},81917:(e,a,l)=>{l.d(a,{q:()=>o});var n=l(22378),t=l(65043),r=l(65173),s=l.n(r),i=l(25196),o=(0,t.forwardRef)((function(e,a){var l=e.children,r=e.className,s=e.validated,o=(0,n.Tt)(e,["children","className","validated"]);return t.createElement("form",(0,n.Cl)({className:(0,i.A)({"was-validated":s},r)||void 0},o,{ref:a}),l)}));o.propTypes={children:s().node,className:s().string,validated:s().bool},o.displayName="CForm"},23668:(e,a,l)=>{l.d(a,{_:()=>c});var n=l(22378),t=l(65043),r=l(65173),s=l.n(r),i=l(25196),o=(0,t.forwardRef)((function(e,a){var l,r=e.children,s=e.as,o=void 0===s?"div":s,c=e.className,d=e.invalid,m=e.tooltip,p=e.valid,f=(0,n.Tt)(e,["children","as","className","invalid","tooltip","valid"]);return t.createElement(o,(0,n.Cl)({className:(0,i.A)((l={},l["invalid-".concat(m?"tooltip":"feedback")]=d,l["valid-".concat(m?"tooltip":"feedback")]=p,l),c)},f,{ref:a}),r)}));o.propTypes={as:s().elementType,children:s().node,className:s().string,invalid:s().bool,tooltip:s().bool,valid:s().bool},o.displayName="CFormFeedback";var c=function(e){var a=e.describedby,l=e.feedback,r=e.feedbackInvalid,s=e.feedbackValid,i=e.invalid,c=e.tooltipFeedback,d=e.valid;return t.createElement(t.Fragment,null,l&&(d||i)&&t.createElement(o,(0,n.Cl)({},i&&{id:a},{invalid:i,tooltip:c,valid:d}),l),r&&t.createElement(o,{id:a,invalid:!0,tooltip:c},r),s&&t.createElement(o,{valid:!0,tooltip:c},s))};c.propTypes={describedby:s().string,feedback:s().oneOfType([s().node,s().string]),feedbackValid:s().oneOfType([s().node,s().string]),feedbackInvalid:s().oneOfType([s().node,s().string]),invalid:s().bool,tooltipFeedback:s().bool,valid:s().bool},c.displayName="CFormControlValidation"},64557:(e,a,l)=>{l.d(a,{O:()=>p});var n=l(22378),t=l(65043),r=l(65173),s=l.n(r),i=l(23668),o=l(25196),c=(0,t.forwardRef)((function(e,a){var l=e.children,r=e.className,s=(0,n.Tt)(e,["children","className"]);return t.createElement("div",(0,n.Cl)({className:(0,o.A)("form-floating",r)},s,{ref:a}),l)}));c.propTypes={children:s().node,className:s().string},c.displayName="CFormFloating";var d=l(65823),m=(0,t.forwardRef)((function(e,a){var l=e.children,r=e.as,s=void 0===r?"div":r,i=e.className,c=(0,n.Tt)(e,["children","as","className"]);return t.createElement(s,(0,n.Cl)({className:(0,o.A)("form-text",i)},c,{ref:a}),l)}));m.propTypes={as:s().elementType,children:s().node,className:s().string},m.displayName="CFormText";var p=function(e){var a=e.children,l=e.describedby,n=e.feedback,r=e.feedbackInvalid,s=e.feedbackValid,o=e.floatingClassName,p=e.floatingLabel,f=e.id,u=e.invalid,v=e.label,h=e.text,b=e.tooltipFeedback,g=e.valid,N=function(){return t.createElement(i._,{describedby:l,feedback:n,feedbackInvalid:r,feedbackValid:s,floatingLabel:p,invalid:u,tooltipFeedback:b,valid:g})};return p?t.createElement(c,{className:o},a,t.createElement(d.A,{htmlFor:f},v||p),h&&t.createElement(m,{id:l},h),t.createElement(N,null)):t.createElement(t.Fragment,null,v&&t.createElement(d.A,{htmlFor:f},v),a,h&&t.createElement(m,{id:l},h),t.createElement(N,null))};p.propTypes=(0,n.Cl)({children:s().node,floatingClassName:s().string,floatingLabel:s().oneOfType([s().node,s().string]),label:s().oneOfType([s().node,s().string]),text:s().oneOfType([s().node,s().string])},i._.propTypes),p.displayName="CFormControlWrapper"},10825:(e,a,l)=>{l.d(a,{O:()=>c});var n=l(22378),t=l(65043),r=l(65173),s=l.n(r),i=l(25196),o=l(64557),c=(0,t.forwardRef)((function(e,a){var l,r=e.children,s=e.className,c=e.delay,d=void 0!==c&&c,m=e.feedback,p=e.feedbackInvalid,f=e.feedbackValid,u=e.floatingClassName,v=e.floatingLabel,h=e.id,b=e.invalid,g=e.label,N=e.onChange,y=e.plainText,x=e.size,k=e.text,C=e.tooltipFeedback,T=e.type,E=void 0===T?"text":T,j=e.valid,w=(0,n.Tt)(e,["children","className","delay","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","id","invalid","label","onChange","plainText","size","text","tooltipFeedback","type","valid"]),I=(0,t.useState)(),F=I[0],O=I[1];return(0,t.useEffect)((function(){var e=setTimeout((function(){return F&&N&&N(F)}),"number"===typeof d?d:500);return function(){return clearTimeout(e)}}),[F]),t.createElement(o.O,{describedby:w["aria-describedby"],feedback:m,feedbackInvalid:p,feedbackValid:f,floatingClassName:u,floatingLabel:v,id:h,invalid:b,label:g,text:k,tooltipFeedback:C,valid:j},t.createElement("input",(0,n.Cl)({className:(0,i.A)(y?"form-control-plaintext":"form-control",(l={},l["form-control-".concat(x)]=x,l["form-control-color"]="color"===E,l["is-invalid"]=b,l["is-valid"]=j,l),s),id:h,type:E,onChange:function(e){return d?O(e):N&&N(e)}},w,{ref:a}),r))}));c.propTypes=(0,n.Cl)({className:s().string,id:s().string,delay:s().oneOfType([s().bool,s().number]),plainText:s().bool,size:s().oneOf(["sm","lg"]),type:s().oneOfType([s().oneOf(["color","file","text"]),s().string])},o.O.propTypes),c.displayName="CFormInput"},65823:(e,a,l)=>{l.d(a,{A:()=>o});var n=l(22378),t=l(65043),r=l(65173),s=l.n(r),i=l(25196),o=(0,t.forwardRef)((function(e,a){var l=e.children,r=e.className,s=e.customClassName,o=(0,n.Tt)(e,["children","className","customClassName"]);return t.createElement("label",(0,n.Cl)({className:null!==s&&void 0!==s?s:(0,i.A)("form-label",r)},o,{ref:a}),l)}));o.propTypes={children:s().node,className:s().string,customClassName:s().string},o.displayName="CFormLabel"},85504:(e,a,l)=>{l.d(a,{B:()=>o});var n=l(22378),t=l(65043),r=l(65173),s=l.n(r),i=l(25196),o=(0,t.forwardRef)((function(e,a){var l,r=e.children,s=e.className,o=e.size,c=(0,n.Tt)(e,["children","className","size"]);return t.createElement("div",(0,n.Cl)({className:(0,i.A)("input-group",(l={},l["input-group-".concat(o)]=o,l),s)},c,{ref:a}),r)}));o.propTypes={children:s().node,className:s().string,size:s().oneOf(["sm","lg"])},o.displayName="CInputGroup"},30347:(e,a,l)=>{l.d(a,{s:()=>o});var n=l(22378),t=l(65043),r=l(65173),s=l.n(r),i=l(25196),o=(0,t.forwardRef)((function(e,a){var l=e.children,r=e.as,s=void 0===r?"span":r,o=e.className,c=(0,n.Tt)(e,["children","as","className"]);return t.createElement(s,(0,n.Cl)({className:(0,i.A)("input-group-text",o)},c,{ref:a}),l)}));o.propTypes={as:s().elementType,children:s().node,className:s().string},o.displayName="CInputGroupText"}}]);
//# sourceMappingURL=4.63be85d1.chunk.js.map