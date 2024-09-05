"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[628],{58608:(e,n,t)=>{t.d(n,{A:()=>l});const a=t(86213).A.create({baseURL:"https://blndt-sec-bav.com/index.html"});a.interceptors.response.use((e=>e),(e=>(e.response&&401===e.response.status&&o(),Promise.reject(e))));const o=()=>{localStorage.removeItem("accessToken"),localStorage.removeItem("userInfo"),localStorage.removeItem("timeLeft"),window.location.href="/login"},l=a},79183:(e,n,t)=>{t.d(n,{hG:()=>o,ho:()=>r,sr:()=>i,ul:()=>l,zi:()=>s});var a=t(58608);const o=(e,n,t)=>{const o={description:e.description,imageUrl:e.imageUrl,options:e.options,answer:e.answer},l={Authorization:"Bearer ".concat(t),"Content-Type":"application/json"};return a.A.post("/api/question/",o,{headers:l})},l=(e,n)=>{const t={Authorization:"Bearer ".concat(n)};return a.A.delete("/api/question/".concat(e),{headers:t})},r=e=>{const n={Authorization:"Bearer ".concat(e)};return a.A.get("/api/question/list",{headers:n})},i=async(e,n,t)=>{const o={id:n,description:e.description,imageUrl:e.imageUrl,options:e.options,answer:e.answer},l={Authorization:"Bearer ".concat(t),"Content-Type":"application/json"};return a.A.put("/api/question/".concat(n),o,{headers:l})},s=async(e,n)=>{const t={Authorization:"Bearer ".concat(n)};return a.A.get("/api/question/".concat(e),{headers:t})}},7628:(e,n,t)=>{t.r(n),t.d(n,{default:()=>k});var a=t(65043),o=t(73216),l=t(44101),r=t(44227),i=t(80861),s=t(25104),c=t(96105),d=t(3805),m=t(84709),u=t(4398),f=t(12382),p=t(16323),v=t(85968),b=t(22378),h=t(65173),y=t.n(h),g=t(25196),N=(0,a.forwardRef)((function(e,n){var t,o=e.children,l=e.align,r=e.className,i=e.size,s=(0,b.Tt)(e,["children","align","className","size"]);return a.createElement("nav",(0,b.Cl)({ref:n},s),a.createElement("ul",{className:(0,g.A)("pagination",(t={},t["justify-content-".concat(l)]=l,t["pagination-".concat(i)]=i,t),r)},o))}));N.propTypes={align:y().oneOf(["start","center","end"]),children:y().node,className:y().string,size:y().oneOf(["sm","lg"])},N.displayName="CPagination";var E=t(79183),C=t(70579);const k=e=>{let{token:n}=e;const[t,b]=(0,a.useState)([]),[h,y]=(0,a.useState)(null),[g,k]=(0,a.useState)(!1),[x,T]=(0,a.useState)(1),[A]=(0,a.useState)(10),w=(0,o.Zp)();(0,a.useEffect)((()=>{j()}),[]);const j=async()=>{try{const e=await(0,E.ho)(n);b(e.data.msg.questions)}catch(e){console.error("Error fetching questions:",e)}},O=x*A,z=O-A,L=t.slice(z,O);return(0,C.jsxs)(l.s,{children:[(0,C.jsx)(r.U,{children:(0,C.jsxs)(i.E,{children:[(0,C.jsx)(s.V,{children:"Danh s\xe1ch c\xe2u h\u1ecfi"}),(0,C.jsx)(c.W,{children:(0,C.jsx)("div",{className:"container",style:{padding:"20px 30px"},children:L.map(((e,n)=>(0,C.jsxs)("div",{style:{marginBottom:"20px"},className:"row",children:[(0,C.jsxs)("div",{className:"col-md-8 col-10",children:[(0,C.jsxs)("h5",{style:{cursor:"pointer"},onClick:()=>(e=>{w("/admin/add-question/"+e._id,{state:{question:e}})})(e),children:["C\xe2u ",n+1,": ",e.description]}),e.options.map(((n,t)=>{return(0,C.jsxs)("div",{style:{marginLeft:"20px",marginBottom:"10px"},children:[(0,C.jsx)(d.C,{type:"radio",name:"question-".concat(n._id),checked:e.answer._id===n._id,readOnly:!0}),(0,C.jsxs)("span",{style:{marginLeft:"10px"},children:[(a=t,["A","B","C","D"][a]||""),". ",n.text]})]},n._id);var a}))]}),(0,C.jsx)("div",{className:"col-md-4 col-2",children:(0,C.jsx)(m.Q,{color:"danger",onClick:()=>(e=>{y(e),k(!0)})(e),style:{marginLeft:"10px"},children:"X\xf3a"})})]},e._id)))})})]})}),(0,C.jsxs)(u.z,{visible:g,onDismiss:()=>k(!1),children:[(0,C.jsx)(f.E,{closeButton:!0,children:"X\xe1c nh\u1eadn x\xf3a"}),(0,C.jsx)(p.T,{children:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a c\xe2u h\u1ecfi n\xe0y kh\xf4ng?"}),(0,C.jsxs)(v.I,{children:[(0,C.jsx)(m.Q,{color:"secondary",onClick:()=>k(!1),children:"H\u1ee7y"}),(0,C.jsx)(m.Q,{color:"danger",onClick:async()=>{try{h&&(console.log(h),await(0,E.ul)(h._id,n),b(t.filter((e=>e._id!==h._id))),k(!1))}catch(e){console.error("Error deleting question:",e)}},children:"X\xf3a"})]})]}),(0,C.jsx)(N,{activePage:x,pages:Math.ceil(t.length/A),onPageChange:e=>{T(e)}})]})}},25104:(e,n,t)=>{t.d(n,{V:()=>s});var a=t(22378),o=t(65043),l=t(65173),r=t.n(l),i=t(25196),s=(0,o.forwardRef)((function(e,n){var t=e.children,l=e.as,r=void 0===l?"div":l,s=e.className,c=(0,a.Tt)(e,["children","as","className"]);return o.createElement(r,(0,a.Cl)({className:(0,i.A)("card-header",s)},c,{ref:n}),t)}));s.propTypes={as:r().elementType,children:r().node,className:r().string},s.displayName="CCardHeader"},3805:(e,n,t)=>{t.d(n,{C:()=>m});var a=t(22378),o=t(65043),l=t(65173),r=t.n(l),i=t(25196),s=t(23668),c=t(65823),d=t(94462),m=(0,o.forwardRef)((function(e,n){var t=e.className,l=e.button,r=e.feedback,m=e.feedbackInvalid,u=e.feedbackValid,f=e.floatingLabel,p=e.tooltipFeedback,v=e.hitArea,b=e.id,h=e.indeterminate,y=e.inline,g=e.invalid,N=e.label,E=e.reverse,C=e.type,k=void 0===C?"checkbox":C,x=e.valid,T=(0,a.Tt)(e,["className","button","feedback","feedbackInvalid","feedbackValid","floatingLabel","tooltipFeedback","hitArea","id","indeterminate","inline","invalid","label","reverse","type","valid"]),A=(0,o.useRef)(null),w=(0,d.E2)(n,A);(0,o.useEffect)((function(){A.current&&h&&(A.current.indeterminate=h)}),[h,A.current]);var j=function(){return o.createElement("input",(0,a.Cl)({type:k,className:(0,i.A)(l?"btn-check":"form-check-input",{"is-invalid":g,"is-valid":x,"me-2":v}),id:b},T,{ref:w}))},O=function(){return o.createElement(s._,{describedby:T["aria-describedby"],feedback:r,feedbackInvalid:m,feedbackValid:u,floatingLabel:f,invalid:g,tooltipFeedback:p,valid:x})},z=function(){var e;return o.createElement(c.A,(0,a.Cl)({customClassName:(0,i.A)(l?(0,i.A)("btn",l.variant?"btn-".concat(l.variant,"-").concat(l.color):"btn-".concat(l.color),(e={},e["btn-".concat(l.size)]=l.size,e),"".concat(l.shape)):"form-check-label")},b&&{htmlFor:b}),N)};return o.createElement((function(){return l?o.createElement(o.Fragment,null,o.createElement(j,null),N&&o.createElement(z,null),o.createElement(O,null)):N?v?o.createElement(o.Fragment,null,o.createElement(j,null),o.createElement(c.A,(0,a.Cl)({customClassName:(0,i.A)("form-check-label stretched-link",t)},b&&{htmlFor:b}),N),o.createElement(O,null)):o.createElement("div",{className:(0,i.A)("form-check",{"form-check-inline":y,"form-check-reverse":E,"is-invalid":g,"is-valid":x},t)},o.createElement(j,null),o.createElement(z,null),o.createElement(O,null)):o.createElement(j,null)}),null)}));m.propTypes=(0,a.Cl)({button:r().object,className:r().string,hitArea:r().oneOf(["full"]),id:r().string,indeterminate:r().bool,inline:r().bool,label:r().oneOfType([r().string,r().node]),reverse:r().bool,type:r().oneOf(["checkbox","radio"])},s._.propTypes),m.displayName="CFormCheck"},23668:(e,n,t)=>{t.d(n,{_:()=>c});var a=t(22378),o=t(65043),l=t(65173),r=t.n(l),i=t(25196),s=(0,o.forwardRef)((function(e,n){var t,l=e.children,r=e.as,s=void 0===r?"div":r,c=e.className,d=e.invalid,m=e.tooltip,u=e.valid,f=(0,a.Tt)(e,["children","as","className","invalid","tooltip","valid"]);return o.createElement(s,(0,a.Cl)({className:(0,i.A)((t={},t["invalid-".concat(m?"tooltip":"feedback")]=d,t["valid-".concat(m?"tooltip":"feedback")]=u,t),c)},f,{ref:n}),l)}));s.propTypes={as:r().elementType,children:r().node,className:r().string,invalid:r().bool,tooltip:r().bool,valid:r().bool},s.displayName="CFormFeedback";var c=function(e){var n=e.describedby,t=e.feedback,l=e.feedbackInvalid,r=e.feedbackValid,i=e.invalid,c=e.tooltipFeedback,d=e.valid;return o.createElement(o.Fragment,null,t&&(d||i)&&o.createElement(s,(0,a.Cl)({},i&&{id:n},{invalid:i,tooltip:c,valid:d}),t),l&&o.createElement(s,{id:n,invalid:!0,tooltip:c},l),r&&o.createElement(s,{valid:!0,tooltip:c},r))};c.propTypes={describedby:r().string,feedback:r().oneOfType([r().node,r().string]),feedbackValid:r().oneOfType([r().node,r().string]),feedbackInvalid:r().oneOfType([r().node,r().string]),invalid:r().bool,tooltipFeedback:r().bool,valid:r().bool},c.displayName="CFormControlValidation"},65823:(e,n,t)=>{t.d(n,{A:()=>s});var a=t(22378),o=t(65043),l=t(65173),r=t.n(l),i=t(25196),s=(0,o.forwardRef)((function(e,n){var t=e.children,l=e.className,r=e.customClassName,s=(0,a.Tt)(e,["children","className","customClassName"]);return o.createElement("label",(0,a.Cl)({className:null!==r&&void 0!==r?r:(0,i.A)("form-label",l)},s,{ref:n}),t)}));s.propTypes={children:r().node,className:r().string,customClassName:r().string},s.displayName="CFormLabel"},4398:(e,n,t)=>{t.d(n,{z:()=>v,m:()=>p});var a=t(22378),o=t(65043),l=t(65173),r=t.n(l),i=t(25196),s=t(46125),c=t(372),d=(0,o.forwardRef)((function(e,n){var t=e.children,l=e.className,r=(0,a.Tt)(e,["children","className"]);return o.createElement("div",(0,a.Cl)({className:(0,i.A)("modal-content",l)},r,{ref:n}),t)}));d.propTypes={children:r().node,className:r().string},d.displayName="CModalContent";var m=(0,o.forwardRef)((function(e,n){var t,l=e.children,r=e.alignment,s=e.className,c=e.fullscreen,d=e.scrollable,m=e.size,u=(0,a.Tt)(e,["children","alignment","className","fullscreen","scrollable","size"]);return o.createElement("div",(0,a.Cl)({className:(0,i.A)("modal-dialog",(t={"modal-dialog-centered":"center"===r},t["boolean"===typeof c?"modal-fullscreen":"modal-fullscreen-".concat(c,"-down")]=c,t["modal-dialog-scrollable"]=d,t["modal-".concat(m)]=m,t),s)},u,{ref:n}),l)}));m.propTypes={alignment:r().oneOf(["top","center"]),children:r().node,className:r().string,fullscreen:r().oneOfType([r().bool,r().oneOf(["sm","md","lg","xl","xxl"])]),scrollable:r().bool,size:r().oneOf(["sm","lg","xl"])},m.displayName="CModalDialog";var u=t(94462),f=t(93789),p=(0,o.createContext)({}),v=(0,o.forwardRef)((function(e,n){var t=e.children,l=e.alignment,r=e.backdrop,v=void 0===r||r,b=e.className,h=e.duration,y=void 0===h?150:h,g=e.focus,N=void 0===g||g,E=e.fullscreen,C=e.keyboard,k=void 0===C||C,x=e.onClose,T=e.onClosePrevented,A=e.onShow,w=e.portal,j=void 0===w||w,O=e.scrollable,z=e.size,L=e.transition,R=void 0===L||L,F=e.unmountOnClose,B=void 0===F||F,S=e.visible,I=(0,a.Tt)(e,["children","alignment","backdrop","className","duration","focus","fullscreen","keyboard","onClose","onClosePrevented","onShow","portal","scrollable","size","transition","unmountOnClose","visible"]),P=(0,o.useRef)(null),_=(0,o.useRef)(null),q=(0,o.useRef)(null),V=(0,u.E2)(n,_),M=(0,o.useState)(S),U=M[0],D=M[1],H=(0,o.useState)(!1),Q=H[0],X=H[1],W={visible:U,setVisible:D};(0,o.useEffect)((function(){D(S)}),[S]),(0,o.useEffect)((function(){var e;return U?(P.current=document.activeElement,document.addEventListener("mouseup",G),document.addEventListener("keydown",Z)):null===(e=P.current)||void 0===e||e.focus(),function(){document.removeEventListener("mouseup",G),document.removeEventListener("keydown",Z)}}),[U]);var Y=function(){return"static"===v?X(!0):(D(!1),x&&x())};(0,o.useLayoutEffect)((function(){T&&T(),setTimeout((function(){return X(!1)}),y)}),[Q]),(0,o.useLayoutEffect)((function(){return U?(document.body.classList.add("modal-open"),v&&(document.body.style.overflow="hidden",document.body.style.paddingRight="0px"),setTimeout((function(){var e;N&&(null===(e=_.current)||void 0===e||e.focus())}),R?y:0)):(document.body.classList.remove("modal-open"),v&&(document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right"))),function(){document.body.classList.remove("modal-open"),v&&(document.body.style.removeProperty("overflow"),document.body.style.removeProperty("padding-right"))}}),[U]);var G=function(e){_.current&&_.current==e.target&&Y()},Z=function(e){"Escape"===e.key&&k&&Y()};return o.createElement(o.Fragment,null,o.createElement(f.Ay,{in:U,mountOnEnter:!0,nodeRef:_,onEnter:A,onExit:x,unmountOnExit:B,timeout:R?y:0},(function(e){return o.createElement(c.Y,{portal:j},o.createElement(p.Provider,{value:W},o.createElement("div",(0,a.Cl)({className:(0,i.A)("modal",{"modal-static":Q,fade:R,show:"entered"===e},b),tabIndex:-1},U?{"aria-modal":!0,role:"dialog"}:{"aria-hidden":"true"},{style:(0,a.Cl)({},"exited"!==e&&{display:"block"})},I,{ref:V}),o.createElement(m,{alignment:l,fullscreen:E,scrollable:O,size:z},o.createElement(d,{ref:q},t)))))})),v&&o.createElement(c.Y,{portal:j},o.createElement(s.W,{visible:U})))}));v.propTypes={alignment:r().oneOf(["top","center"]),backdrop:r().oneOfType([r().bool,r().oneOf(["static"])]),children:r().node,className:r().string,duration:r().number,focus:r().bool,fullscreen:r().oneOfType([r().bool,r().oneOf(["sm","md","lg","xl","xxl"])]),keyboard:r().bool,onClose:r().func,onClosePrevented:r().func,onShow:r().func,portal:r().bool,scrollable:r().bool,size:r().oneOf(["sm","lg","xl"]),transition:r().bool,unmountOnClose:r().bool,visible:r().bool},v.displayName="CModal"},16323:(e,n,t)=>{t.d(n,{T:()=>s});var a=t(22378),o=t(65043),l=t(65173),r=t.n(l),i=t(25196),s=(0,o.forwardRef)((function(e,n){var t=e.children,l=e.className,r=(0,a.Tt)(e,["children","className"]);return o.createElement("div",(0,a.Cl)({className:(0,i.A)("modal-body",l)},r,{ref:n}),t)}));s.propTypes={children:r().node,className:r().string},s.displayName="CModalBody"},85968:(e,n,t)=>{t.d(n,{I:()=>s});var a=t(22378),o=t(65043),l=t(65173),r=t.n(l),i=t(25196),s=(0,o.forwardRef)((function(e,n){var t=e.children,l=e.className,r=(0,a.Tt)(e,["children","className"]);return o.createElement("div",(0,a.Cl)({className:(0,i.A)("modal-footer",l)},r,{ref:n}),t)}));s.propTypes={children:r().node,className:r().string},s.displayName="CModalFooter"},12382:(e,n,t)=>{t.d(n,{E:()=>d});var a=t(22378),o=t(65043),l=t(65173),r=t.n(l),i=t(25196),s=t(90436),c=t(4398),d=(0,o.forwardRef)((function(e,n){var t=e.children,l=e.className,r=e.closeButton,d=void 0===r||r,m=(0,a.Tt)(e,["children","className","closeButton"]),u=(0,o.useContext)(c.m).setVisible;return o.createElement("div",(0,a.Cl)({className:(0,i.A)("modal-header",l)},m,{ref:n}),t,d&&o.createElement(s.E,{onClick:function(){return u(!1)}}))}));d.propTypes={children:r().node,className:r().string,closeButton:r().bool},d.displayName="CModalHeader"}}]);
//# sourceMappingURL=628.6627b0b8.chunk.js.map