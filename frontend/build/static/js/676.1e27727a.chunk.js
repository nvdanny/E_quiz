"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[676],{79183:(e,a,n)=>{n.d(a,{hG:()=>l,ho:()=>i,sr:()=>c,ul:()=>r,zi:()=>o});var t=n(58608);const l=(e,a,n)=>{const l={description:e.description,imageUrl:e.imageUrl,options:e.options,answer:e.answer},r={Authorization:"Bearer ".concat(n),"Content-Type":"application/json"};return t.A.post("/api/question/",l,{headers:r})},r=(e,a)=>{const n={Authorization:"Bearer ".concat(a)};return t.A.delete("/api/question/".concat(e),{headers:n})},i=e=>{const a={Authorization:"Bearer ".concat(e)};return t.A.get("/api/question/list",{headers:a})},c=async(e,a,n)=>{const l={id:a,description:e.description,imageUrl:e.imageUrl,options:e.options,answer:e.answer},r={Authorization:"Bearer ".concat(n),"Content-Type":"application/json"};return t.A.put("/api/question/".concat(a),l,{headers:r})},o=async(e,a)=>{const n={Authorization:"Bearer ".concat(a)};return t.A.get("/api/question/".concat(e),{headers:n})}},88676:(e,a,n)=>{n.r(a),n.d(a,{default:()=>T});var t=n(65043),l=n(73216),r=n(44101),i=n(44227),c=n(80861),o=n(25104),s=n(96105),d=n(3805),m=n(84709),p=n(22378),u=n(65173),h=n.n(u),f=n(25196),v=(0,t.forwardRef)((function(e,a){var n,l=e.children,r=e.align,i=e.className,c=e.size,o=(0,p.Tt)(e,["children","align","className","size"]);return t.createElement("nav",(0,p.Cl)({ref:a},o),t.createElement("ul",{className:(0,f.A)("pagination",(n={},n["justify-content-".concat(r)]=r,n["pagination-".concat(c)]=c,n),i)},l))}));v.propTypes={align:h().oneOf(["start","center","end"]),children:h().node,className:h().string,size:h().oneOf(["sm","lg"])},v.displayName="CPagination";var b=n(90777),g=(0,t.forwardRef)((function(e,a){var n=e.children,l=e.as,r=e.className,i=(0,p.Tt)(e,["children","as","className"]),c=null!==l&&void 0!==l?l:i.active?"span":"a";return t.createElement("li",(0,p.Cl)({className:(0,f.A)("page-item",{active:i.active,disabled:i.disabled},r)},i.active&&{"aria-current":"page"}),"a"===c?t.createElement(b.K,(0,p.Cl)({className:"page-link",as:c},i,{ref:a}),n):t.createElement(c,{className:"page-link",ref:a},n))}));g.propTypes={as:h().elementType,children:h().node,className:h().string},g.displayName="CPaginationItem";var y=n(4398),N=n(12382),C=n(16323),k=n(85968),x=n(79183),E=n(70579);const T=e=>{let{token:a}=e;const[n,p]=(0,t.useState)([]),[u,h]=(0,t.useState)(null),[f,b]=(0,t.useState)(!1),[T,A]=(0,t.useState)(1),[j]=(0,t.useState)(10),w=(0,l.Zp)();(0,t.useEffect)((()=>{B()}),[a]);const B=async()=>{try{const e=await(0,x.ho)(a);p(e.data.msg.questions)}catch(e){console.error("Error fetching questions:",e)}},F=T*j,z=F-j,_=n.slice(z,F);return(0,E.jsxs)(r.s,{children:[(0,E.jsx)(i.U,{children:(0,E.jsxs)(c.E,{children:[(0,E.jsx)(o.V,{children:"Danh s\xe1ch c\xe2u h\u1ecfi"}),(0,E.jsx)(s.W,{style:{height:"72vh",overflowY:"auto"},children:(0,E.jsx)("div",{className:"container",style:{padding:"20px 30px"},children:_.map(((e,a)=>(0,E.jsxs)("div",{style:{marginBottom:"20px"},className:"row",children:[(0,E.jsxs)("div",{className:"col-md-8 col-10",children:[(0,E.jsxs)("h5",{style:{cursor:"pointer"},onClick:()=>(e=>{w("/admin/add-question/".concat(e._id),{state:{question:e}})})(e),children:["C\xe2u ",a+1+(T-1)*j,": ",e.description]}),e.options.map(((a,n)=>{return(0,E.jsxs)("div",{style:{marginLeft:"20px",marginBottom:"10px"},children:[(0,E.jsx)(d.C,{type:"radio",name:"question-".concat(e._id),checked:e.answer._id===a._id,readOnly:!0}),(0,E.jsxs)("span",{style:{marginLeft:"10px"},children:[(t=n,["A","B","C","D"][t]||""),". ",a.text]})]},a._id);var t}))]}),(0,E.jsx)("div",{className:"col-md-4 col-2",children:(0,E.jsx)(m.Q,{color:"danger",onClick:()=>(e=>{h(e),b(!0)})(e),style:{marginLeft:"10px"},children:"X\xf3a"})})]},e._id)))})}),(0,E.jsx)(v,{"aria-label":"Page navigation example",align:"center",children:[...Array(Math.ceil(n.length/j))].map(((e,a)=>(0,E.jsx)(g,{active:a+1===T,onClick:()=>{A(a+1)},children:a+1},a)))})]})}),(0,E.jsxs)(y.z,{visible:f,onClose:()=>b(!1),children:[(0,E.jsx)(N.E,{closeButton:!0,children:"X\xe1c nh\u1eadn x\xf3a"}),(0,E.jsx)(C.T,{children:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n x\xf3a c\xe2u h\u1ecfi n\xe0y kh\xf4ng?"}),(0,E.jsxs)(k.I,{children:[(0,E.jsx)(m.Q,{color:"secondary",onClick:()=>b(!1),children:"H\u1ee7y"}),(0,E.jsx)(m.Q,{color:"danger",onClick:async()=>{try{u&&(await(0,x.ul)(u._id,a),p(n.filter((e=>e._id!==u._id))),b(!1))}catch(e){console.error("Error deleting question:",e)}},children:"X\xf3a"})]})]})]})}},80861:(e,a,n)=>{n.d(a,{E:()=>s});var t=n(22378),l=n(65043),r=n(65173),i=n.n(r),c=n(25196),o=n(75232),s=(0,l.forwardRef)((function(e,a){var n,r=e.children,i=e.className,o=e.color,s=e.textBgColor,d=e.textColor,m=(0,t.Tt)(e,["children","className","color","textBgColor","textColor"]);return l.createElement("div",(0,t.Cl)({className:(0,c.A)("card",(n={},n["bg-".concat(o)]=o,n["text-".concat(d)]=d,n["text-bg-".concat(s)]=s,n),i)},m,{ref:a}),r)}));s.propTypes={children:i().node,className:i().string,color:o.TX,textBgColor:o.TX,textColor:i().string},s.displayName="CCard"},96105:(e,a,n)=>{n.d(a,{W:()=>o});var t=n(22378),l=n(65043),r=n(65173),i=n.n(r),c=n(25196),o=(0,l.forwardRef)((function(e,a){var n=e.children,r=e.className,i=(0,t.Tt)(e,["children","className"]);return l.createElement("div",(0,t.Cl)({className:(0,c.A)("card-body",r)},i,{ref:a}),n)}));o.propTypes={children:i().node,className:i().string},o.displayName="CCardBody"},25104:(e,a,n)=>{n.d(a,{V:()=>o});var t=n(22378),l=n(65043),r=n(65173),i=n.n(r),c=n(25196),o=(0,l.forwardRef)((function(e,a){var n=e.children,r=e.as,i=void 0===r?"div":r,o=e.className,s=(0,t.Tt)(e,["children","as","className"]);return l.createElement(i,(0,t.Cl)({className:(0,c.A)("card-header",o)},s,{ref:a}),n)}));o.propTypes={as:i().elementType,children:i().node,className:i().string},o.displayName="CCardHeader"},3805:(e,a,n)=>{n.d(a,{C:()=>m});var t=n(22378),l=n(65043),r=n(65173),i=n.n(r),c=n(25196),o=n(23668),s=n(65823),d=n(94462),m=(0,l.forwardRef)((function(e,a){var n=e.className,r=e.button,i=e.feedback,m=e.feedbackInvalid,p=e.feedbackValid,u=e.floatingLabel,h=e.tooltipFeedback,f=e.hitArea,v=e.id,b=e.indeterminate,g=e.inline,y=e.invalid,N=e.label,C=e.reverse,k=e.type,x=void 0===k?"checkbox":k,E=e.valid,T=(0,t.Tt)(e,["className","button","feedback","feedbackInvalid","feedbackValid","floatingLabel","tooltipFeedback","hitArea","id","indeterminate","inline","invalid","label","reverse","type","valid"]),A=(0,l.useRef)(null),j=(0,d.E2)(a,A);(0,l.useEffect)((function(){A.current&&b&&(A.current.indeterminate=b)}),[b,A.current]);var w=function(){return l.createElement("input",(0,t.Cl)({type:x,className:(0,c.A)(r?"btn-check":"form-check-input",{"is-invalid":y,"is-valid":E,"me-2":f}),id:v},T,{ref:j}))},B=function(){return l.createElement(o._,{describedby:T["aria-describedby"],feedback:i,feedbackInvalid:m,feedbackValid:p,floatingLabel:u,invalid:y,tooltipFeedback:h,valid:E})},F=function(){var e;return l.createElement(s.A,(0,t.Cl)({customClassName:(0,c.A)(r?(0,c.A)("btn",r.variant?"btn-".concat(r.variant,"-").concat(r.color):"btn-".concat(r.color),(e={},e["btn-".concat(r.size)]=r.size,e),"".concat(r.shape)):"form-check-label")},v&&{htmlFor:v}),N)};return l.createElement((function(){return r?l.createElement(l.Fragment,null,l.createElement(w,null),N&&l.createElement(F,null),l.createElement(B,null)):N?f?l.createElement(l.Fragment,null,l.createElement(w,null),l.createElement(s.A,(0,t.Cl)({customClassName:(0,c.A)("form-check-label stretched-link",n)},v&&{htmlFor:v}),N),l.createElement(B,null)):l.createElement("div",{className:(0,c.A)("form-check",{"form-check-inline":g,"form-check-reverse":C,"is-invalid":y,"is-valid":E},n)},l.createElement(w,null),l.createElement(F,null),l.createElement(B,null)):l.createElement(w,null)}),null)}));m.propTypes=(0,t.Cl)({button:i().object,className:i().string,hitArea:i().oneOf(["full"]),id:i().string,indeterminate:i().bool,inline:i().bool,label:i().oneOfType([i().string,i().node]),reverse:i().bool,type:i().oneOf(["checkbox","radio"])},o._.propTypes),m.displayName="CFormCheck"},23668:(e,a,n)=>{n.d(a,{_:()=>s});var t=n(22378),l=n(65043),r=n(65173),i=n.n(r),c=n(25196),o=(0,l.forwardRef)((function(e,a){var n,r=e.children,i=e.as,o=void 0===i?"div":i,s=e.className,d=e.invalid,m=e.tooltip,p=e.valid,u=(0,t.Tt)(e,["children","as","className","invalid","tooltip","valid"]);return l.createElement(o,(0,t.Cl)({className:(0,c.A)((n={},n["invalid-".concat(m?"tooltip":"feedback")]=d,n["valid-".concat(m?"tooltip":"feedback")]=p,n),s)},u,{ref:a}),r)}));o.propTypes={as:i().elementType,children:i().node,className:i().string,invalid:i().bool,tooltip:i().bool,valid:i().bool},o.displayName="CFormFeedback";var s=function(e){var a=e.describedby,n=e.feedback,r=e.feedbackInvalid,i=e.feedbackValid,c=e.invalid,s=e.tooltipFeedback,d=e.valid;return l.createElement(l.Fragment,null,n&&(d||c)&&l.createElement(o,(0,t.Cl)({},c&&{id:a},{invalid:c,tooltip:s,valid:d}),n),r&&l.createElement(o,{id:a,invalid:!0,tooltip:s},r),i&&l.createElement(o,{valid:!0,tooltip:s},i))};s.propTypes={describedby:i().string,feedback:i().oneOfType([i().node,i().string]),feedbackValid:i().oneOfType([i().node,i().string]),feedbackInvalid:i().oneOfType([i().node,i().string]),invalid:i().bool,tooltipFeedback:i().bool,valid:i().bool},s.displayName="CFormControlValidation"},65823:(e,a,n)=>{n.d(a,{A:()=>o});var t=n(22378),l=n(65043),r=n(65173),i=n.n(r),c=n(25196),o=(0,l.forwardRef)((function(e,a){var n=e.children,r=e.className,i=e.customClassName,o=(0,t.Tt)(e,["children","className","customClassName"]);return l.createElement("label",(0,t.Cl)({className:null!==i&&void 0!==i?i:(0,c.A)("form-label",r)},o,{ref:a}),n)}));o.propTypes={children:i().node,className:i().string,customClassName:i().string},o.displayName="CFormLabel"},12382:(e,a,n)=>{n.d(a,{E:()=>d});var t=n(22378),l=n(65043),r=n(65173),i=n.n(r),c=n(25196),o=n(90436),s=n(4398),d=(0,l.forwardRef)((function(e,a){var n=e.children,r=e.className,i=e.closeButton,d=void 0===i||i,m=(0,t.Tt)(e,["children","className","closeButton"]),p=(0,l.useContext)(s.m).setVisible;return l.createElement("div",(0,t.Cl)({className:(0,c.A)("modal-header",r)},m,{ref:a}),n,d&&l.createElement(o.E,{onClick:function(){return p(!1)}}))}));d.propTypes={children:i().node,className:i().string,closeButton:i().bool},d.displayName="CModalHeader"}}]);
//# sourceMappingURL=676.1e27727a.chunk.js.map