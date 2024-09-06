"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[432],{58608:(e,a,t)=>{t.d(a,{A:()=>l});const n=t(86213).A.create({baseURL:"http://localhost:5000",withCredentials:!0});n.interceptors.response.use((e=>e),(e=>(e.response&&401===e.response.status&&i(),Promise.reject(e))));const i=()=>{localStorage.removeItem("accessToken"),localStorage.removeItem("userInfo"),localStorage.removeItem("timeLeft"),window.location.href="/login"},l=n},18590:(e,a,t)=>{t.d(a,{CB:()=>i,Dt:()=>s,I$:()=>r,JZ:()=>o,Sv:()=>l,yB:()=>c});var n=t(58608);const i=async(e,a)=>{const t={title:e.title,description:e.description,duration:e.duration,start:e.start,end:e.end,questions:e.questions},i={Authorization:"Bearer ".concat(a),"Content-Type":"application/json"};return n.A.post("/api/exam/",t,{headers:i})},l=async(e,a,t)=>{const i={id:e,title:a.title,description:a.description,duration:a.duration,start:a.start,end:a.end,questions:a.questions},l={Authorization:"Bearer ".concat(t),"Content-Type":"application/json"};return n.A.put("/api/exam/".concat(e),i,{headers:l})},r=async(e,a)=>{const t={Authorization:"Bearer ".concat(a)};return n.A.get("/api/exam/".concat(e),{headers:t})},o=async e=>{const a={Authorization:"Bearer ".concat(e)};return n.A.get("/api/exam/list",{headers:a})},s=async(e,a)=>{const t={Authorization:"Bearer ".concat(a)};return n.A.delete("/api/exam/".concat(e),{headers:t})},c=async(e,a,t)=>{const i={id:e,active:a},l={Authorization:"Bearer ".concat(t),"Content-Type":"application/json"};return n.A.post("/api/exam/updateStatus",i,{headers:l})}},79183:(e,a,t)=>{t.d(a,{hG:()=>i,ho:()=>r,sr:()=>o,ul:()=>l,zi:()=>s});var n=t(58608);const i=(e,a,t)=>{const i={description:e.description,imageUrl:e.imageUrl,options:e.options,answer:e.answer},l={Authorization:"Bearer ".concat(t),"Content-Type":"application/json"};return n.A.post("/api/question/",i,{headers:l})},l=(e,a)=>{const t={Authorization:"Bearer ".concat(a)};return n.A.delete("/api/question/".concat(e),{headers:t})},r=e=>{const a={Authorization:"Bearer ".concat(e)};return n.A.get("/api/question/list",{headers:a})},o=async(e,a,t)=>{const i={id:a,description:e.description,imageUrl:e.imageUrl,options:e.options,answer:e.answer},l={Authorization:"Bearer ".concat(t),"Content-Type":"application/json"};return n.A.put("/api/question/".concat(a),i,{headers:l})},s=async(e,a)=>{const t={Authorization:"Bearer ".concat(a)};return n.A.get("/api/question/".concat(e),{headers:t})}},99432:(e,a,t)=>{t.r(a),t.d(a,{default:()=>I});var n=t(65043),i=t(44101),l=t(44227),r=t(80861),o=t(25104),s=t(96105),c=t(10825),d=t(64231),m=t(85504),p=t(65823),u=t(30347),f=t(65173),h=t.n(f),b=t(25196),v=(0,n.forwardRef)((function(e,a){var t,i=e.children,l=e.as,r=void 0===l?"ul":l,o=e.className,s=e.flush,c=e.layout;return n.createElement(r,{className:(0,b.A)("list-group",(t={"list-group-flush":s},t["list-group-".concat(c)]=c,t),o),ref:a},i)}));v.propTypes={as:h().elementType,children:h().node,className:h().string,flush:h().bool,layout:h().oneOf(["horizontal","horizontal-sm","horizontal-md","horizontal-lg","horizontal-xl","horizontal-xxl"])},v.displayName="CListGroup";var g=t(22378),y=t(90777),N=t(75232),x=(0,n.forwardRef)((function(e,a){var t,i=e.children,l=e.active,r=e.as,o=void 0===r?"li":r,s=e.className,c=e.disabled,d=e.color,m=(0,g.Tt)(e,["children","active","as","className","disabled","color"]),p="a"===o||"button"===o?y.K:o;return m=(0,g.Cl)((0,g.Cl)((0,g.Cl)((0,g.Cl)({},("a"===o||"button"===o)&&{active:l,disabled:c,as:o,ref:a}),l&&{"aria-current":!0}),c&&{"aria-disabled":!0}),m),n.createElement(p,(0,g.Cl)({className:(0,b.A)("list-group-item",(t={},t["list-group-item-".concat(d)]=d,t["list-group-item-action"]="a"===o||"button"===o,t.active=l,t.disabled=c,t),s)},m),i)}));x.propTypes={active:h().bool,as:h().elementType,children:h().node,className:h().string,color:N.TX,disabled:h().bool},x.displayName="CListGroupItem";var C=t(3805),k=t(84709),T=t(73216),E=t(6145),A=t(34653),j=t(18590),F=t(79183),w=t(70579);const I=()=>{const{examId:e}=(0,T.g)(),[a,t]=(0,n.useState)(""),[f,h]=(0,n.useState)(""),[b,g]=(0,n.useState)(""),[y,N]=(0,n.useState)([]),[I,z]=(0,n.useState)([]),[O,L]=(0,n.useState)(""),B=localStorage.getItem("accessToken");(0,n.useEffect)((()=>{if((async()=>{try{const e=(await(0,F.ho)(B)).data.msg.questions;console.log(e),N(e)}catch(e){console.error("Error fetching questions:",e)}})(),e){(async()=>{try{const a=await(0,j.I$)(e,B);console.log(a);const n=a.data.msg.foundExam;t(n.title),h(n.description),g(n.duration),z(n.questions)}catch(a){console.error("Error fetching exam details:",a)}})()}}),[e]);const V=y.filter((e=>e.description.toLowerCase().includes(O.toLowerCase())));return(0,w.jsx)(i.s,{children:(0,w.jsx)(l.U,{children:(0,w.jsxs)(r.E,{children:[(0,w.jsx)(o.V,{className:"text-primary",children:e?"Ch\u1ec9nh s\u1eeda b\xe0i thi":"T\u1ea1o b\xe0i thi m\u1edbi"}),(0,w.jsxs)(s.W,{children:[(0,w.jsxs)(i.s,{className:"mb-3",children:[(0,w.jsx)(l.U,{sm:"2",className:"mt-2",children:(0,w.jsx)("h5",{children:"T\xean b\xe0i thi:"})}),(0,w.jsx)(l.U,{sm:"6",children:(0,w.jsx)(c.O,{type:"text",placeholder:"Nh\u1eadp t\xean b\xe0i thi",value:a,onChange:e=>t(e.target.value)})})]}),(0,w.jsxs)(i.s,{className:"mb-3",children:[(0,w.jsx)(l.U,{sm:"2",className:"mt-2",children:(0,w.jsx)("h5",{children:"M\xf4 t\u1ea3:"})}),(0,w.jsx)(l.U,{sm:"6",children:(0,w.jsx)(d.I,{placeholder:"Nh\u1eadp m\xf4 t\u1ea3 b\xe0i thi",value:f,onChange:e=>h(e.target.value)})})]}),(0,w.jsxs)(i.s,{className:"mb-3",children:[(0,w.jsx)(l.U,{sm:"2",className:"mt-2",children:(0,w.jsx)("h5",{children:"Th\u1eddi gian thi:"})}),(0,w.jsx)(l.U,{sm:"6",children:(0,w.jsx)(c.O,{type:"number",placeholder:"Nh\u1eadp th\u1eddi gian thi (ph\xfat)",value:b,onChange:e=>g(e.target.value)})})]}),(0,w.jsx)(i.s,{className:"mb-3",children:(0,w.jsx)(l.U,{sm:"6",children:(0,w.jsxs)(m.B,{children:[(0,w.jsx)(p.A,{className:"mt-2",children:(0,w.jsx)("h5",{children:"T\xecm ki\u1ebfm: \xa0\xa0\xa0"})}),(0,w.jsx)(u.s,{style:{maxHeight:"38px"},children:(0,w.jsx)(E.A,{icon:A.B})}),(0,w.jsx)(c.O,{type:"text",placeholder:"Nh\u1eadp t\u1eeb kh\xf3a",value:O,onChange:e=>L(e.target.value)})]})})}),(0,w.jsx)(v,{children:V.map((e=>{return(0,w.jsx)(x,{children:(0,w.jsx)(C.C,{type:"checkbox",label:e.description,checked:(a=e._id,I.some((e=>e._id===a))),onChange:()=>(e=>{z((a=>a.find((a=>a._id===e._id))?a.filter((a=>a._id!==e._id)):[...a,e]))})(e)})},e._id);var a}))}),(0,w.jsx)("h4",{className:"my-3",children:"C\xe2u h\u1ecfi \u0111\xe3 ch\u1ecdn:"}),(0,w.jsx)(v,{children:I.map(((e,a)=>(0,w.jsxs)(x,{children:["C\xe2u ",a+1,": ",e.description]},e._id)))}),(0,w.jsx)(k.Q,{color:"primary",onClick:async()=>{const t={title:a,description:f,duration:b,questions:I.map((e=>e._id))};try{e?(await(0,j.Sv)(e,t,B),alert("C\u1eadp nh\u1eadt thanh c\xf4ng!")):(await(0,j.CB)(t,B),alert("T\u1ea1o m\u1edbi th\xe0nh c\xf4ng!"))}catch(n){console.error("Error saving exam:",n),alert("An error occurred while saving the exam.")}},className:"mt-3",children:e?"C\u1eadp nh\u1eadt b\xe0i thi":"L\u01b0u b\xe0i thi"})]})]})})})}},25104:(e,a,t)=>{t.d(a,{V:()=>s});var n=t(22378),i=t(65043),l=t(65173),r=t.n(l),o=t(25196),s=(0,i.forwardRef)((function(e,a){var t=e.children,l=e.as,r=void 0===l?"div":l,s=e.className,c=(0,n.Tt)(e,["children","as","className"]);return i.createElement(r,(0,n.Cl)({className:(0,o.A)("card-header",s)},c,{ref:a}),t)}));s.propTypes={as:r().elementType,children:r().node,className:r().string},s.displayName="CCardHeader"},3805:(e,a,t)=>{t.d(a,{C:()=>m});var n=t(22378),i=t(65043),l=t(65173),r=t.n(l),o=t(25196),s=t(23668),c=t(65823),d=t(94462),m=(0,i.forwardRef)((function(e,a){var t=e.className,l=e.button,r=e.feedback,m=e.feedbackInvalid,p=e.feedbackValid,u=e.floatingLabel,f=e.tooltipFeedback,h=e.hitArea,b=e.id,v=e.indeterminate,g=e.inline,y=e.invalid,N=e.label,x=e.reverse,C=e.type,k=void 0===C?"checkbox":C,T=e.valid,E=(0,n.Tt)(e,["className","button","feedback","feedbackInvalid","feedbackValid","floatingLabel","tooltipFeedback","hitArea","id","indeterminate","inline","invalid","label","reverse","type","valid"]),A=(0,i.useRef)(null),j=(0,d.E2)(a,A);(0,i.useEffect)((function(){A.current&&v&&(A.current.indeterminate=v)}),[v,A.current]);var F=function(){return i.createElement("input",(0,n.Cl)({type:k,className:(0,o.A)(l?"btn-check":"form-check-input",{"is-invalid":y,"is-valid":T,"me-2":h}),id:b},E,{ref:j}))},w=function(){return i.createElement(s._,{describedby:E["aria-describedby"],feedback:r,feedbackInvalid:m,feedbackValid:p,floatingLabel:u,invalid:y,tooltipFeedback:f,valid:T})},I=function(){var e;return i.createElement(c.A,(0,n.Cl)({customClassName:(0,o.A)(l?(0,o.A)("btn",l.variant?"btn-".concat(l.variant,"-").concat(l.color):"btn-".concat(l.color),(e={},e["btn-".concat(l.size)]=l.size,e),"".concat(l.shape)):"form-check-label")},b&&{htmlFor:b}),N)};return i.createElement((function(){return l?i.createElement(i.Fragment,null,i.createElement(F,null),N&&i.createElement(I,null),i.createElement(w,null)):N?h?i.createElement(i.Fragment,null,i.createElement(F,null),i.createElement(c.A,(0,n.Cl)({customClassName:(0,o.A)("form-check-label stretched-link",t)},b&&{htmlFor:b}),N),i.createElement(w,null)):i.createElement("div",{className:(0,o.A)("form-check",{"form-check-inline":g,"form-check-reverse":x,"is-invalid":y,"is-valid":T},t)},i.createElement(F,null),i.createElement(I,null),i.createElement(w,null)):i.createElement(F,null)}),null)}));m.propTypes=(0,n.Cl)({button:r().object,className:r().string,hitArea:r().oneOf(["full"]),id:r().string,indeterminate:r().bool,inline:r().bool,label:r().oneOfType([r().string,r().node]),reverse:r().bool,type:r().oneOf(["checkbox","radio"])},s._.propTypes),m.displayName="CFormCheck"},23668:(e,a,t)=>{t.d(a,{_:()=>c});var n=t(22378),i=t(65043),l=t(65173),r=t.n(l),o=t(25196),s=(0,i.forwardRef)((function(e,a){var t,l=e.children,r=e.as,s=void 0===r?"div":r,c=e.className,d=e.invalid,m=e.tooltip,p=e.valid,u=(0,n.Tt)(e,["children","as","className","invalid","tooltip","valid"]);return i.createElement(s,(0,n.Cl)({className:(0,o.A)((t={},t["invalid-".concat(m?"tooltip":"feedback")]=d,t["valid-".concat(m?"tooltip":"feedback")]=p,t),c)},u,{ref:a}),l)}));s.propTypes={as:r().elementType,children:r().node,className:r().string,invalid:r().bool,tooltip:r().bool,valid:r().bool},s.displayName="CFormFeedback";var c=function(e){var a=e.describedby,t=e.feedback,l=e.feedbackInvalid,r=e.feedbackValid,o=e.invalid,c=e.tooltipFeedback,d=e.valid;return i.createElement(i.Fragment,null,t&&(d||o)&&i.createElement(s,(0,n.Cl)({},o&&{id:a},{invalid:o,tooltip:c,valid:d}),t),l&&i.createElement(s,{id:a,invalid:!0,tooltip:c},l),r&&i.createElement(s,{valid:!0,tooltip:c},r))};c.propTypes={describedby:r().string,feedback:r().oneOfType([r().node,r().string]),feedbackValid:r().oneOfType([r().node,r().string]),feedbackInvalid:r().oneOfType([r().node,r().string]),invalid:r().bool,tooltipFeedback:r().bool,valid:r().bool},c.displayName="CFormControlValidation"},64557:(e,a,t)=>{t.d(a,{O:()=>p});var n=t(22378),i=t(65043),l=t(65173),r=t.n(l),o=t(23668),s=t(25196),c=(0,i.forwardRef)((function(e,a){var t=e.children,l=e.className,r=(0,n.Tt)(e,["children","className"]);return i.createElement("div",(0,n.Cl)({className:(0,s.A)("form-floating",l)},r,{ref:a}),t)}));c.propTypes={children:r().node,className:r().string},c.displayName="CFormFloating";var d=t(65823),m=(0,i.forwardRef)((function(e,a){var t=e.children,l=e.as,r=void 0===l?"div":l,o=e.className,c=(0,n.Tt)(e,["children","as","className"]);return i.createElement(r,(0,n.Cl)({className:(0,s.A)("form-text",o)},c,{ref:a}),t)}));m.propTypes={as:r().elementType,children:r().node,className:r().string},m.displayName="CFormText";var p=function(e){var a=e.children,t=e.describedby,n=e.feedback,l=e.feedbackInvalid,r=e.feedbackValid,s=e.floatingClassName,p=e.floatingLabel,u=e.id,f=e.invalid,h=e.label,b=e.text,v=e.tooltipFeedback,g=e.valid,y=function(){return i.createElement(o._,{describedby:t,feedback:n,feedbackInvalid:l,feedbackValid:r,floatingLabel:p,invalid:f,tooltipFeedback:v,valid:g})};return p?i.createElement(c,{className:s},a,i.createElement(d.A,{htmlFor:u},h||p),b&&i.createElement(m,{id:t},b),i.createElement(y,null)):i.createElement(i.Fragment,null,h&&i.createElement(d.A,{htmlFor:u},h),a,b&&i.createElement(m,{id:t},b),i.createElement(y,null))};p.propTypes=(0,n.Cl)({children:r().node,floatingClassName:r().string,floatingLabel:r().oneOfType([r().node,r().string]),label:r().oneOfType([r().node,r().string]),text:r().oneOfType([r().node,r().string])},o._.propTypes),p.displayName="CFormControlWrapper"},10825:(e,a,t)=>{t.d(a,{O:()=>c});var n=t(22378),i=t(65043),l=t(65173),r=t.n(l),o=t(25196),s=t(64557),c=(0,i.forwardRef)((function(e,a){var t,l=e.children,r=e.className,c=e.delay,d=void 0!==c&&c,m=e.feedback,p=e.feedbackInvalid,u=e.feedbackValid,f=e.floatingClassName,h=e.floatingLabel,b=e.id,v=e.invalid,g=e.label,y=e.onChange,N=e.plainText,x=e.size,C=e.text,k=e.tooltipFeedback,T=e.type,E=void 0===T?"text":T,A=e.valid,j=(0,n.Tt)(e,["children","className","delay","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","id","invalid","label","onChange","plainText","size","text","tooltipFeedback","type","valid"]),F=(0,i.useState)(),w=F[0],I=F[1];return(0,i.useEffect)((function(){var e=setTimeout((function(){return w&&y&&y(w)}),"number"===typeof d?d:500);return function(){return clearTimeout(e)}}),[w]),i.createElement(s.O,{describedby:j["aria-describedby"],feedback:m,feedbackInvalid:p,feedbackValid:u,floatingClassName:f,floatingLabel:h,id:b,invalid:v,label:g,text:C,tooltipFeedback:k,valid:A},i.createElement("input",(0,n.Cl)({className:(0,o.A)(N?"form-control-plaintext":"form-control",(t={},t["form-control-".concat(x)]=x,t["form-control-color"]="color"===E,t["is-invalid"]=v,t["is-valid"]=A,t),r),id:b,type:E,onChange:function(e){return d?I(e):y&&y(e)}},j,{ref:a}),l))}));c.propTypes=(0,n.Cl)({className:r().string,id:r().string,delay:r().oneOfType([r().bool,r().number]),plainText:r().bool,size:r().oneOf(["sm","lg"]),type:r().oneOfType([r().oneOf(["color","file","text"]),r().string])},s.O.propTypes),c.displayName="CFormInput"},65823:(e,a,t)=>{t.d(a,{A:()=>s});var n=t(22378),i=t(65043),l=t(65173),r=t.n(l),o=t(25196),s=(0,i.forwardRef)((function(e,a){var t=e.children,l=e.className,r=e.customClassName,s=(0,n.Tt)(e,["children","className","customClassName"]);return i.createElement("label",(0,n.Cl)({className:null!==r&&void 0!==r?r:(0,o.A)("form-label",l)},s,{ref:a}),t)}));s.propTypes={children:r().node,className:r().string,customClassName:r().string},s.displayName="CFormLabel"},64231:(e,a,t)=>{t.d(a,{I:()=>c});var n=t(22378),i=t(65043),l=t(65173),r=t.n(l),o=t(25196),s=t(64557),c=(0,i.forwardRef)((function(e,a){var t=e.children,l=e.className,r=e.feedback,c=e.feedbackInvalid,d=e.feedbackValid,m=e.floatingClassName,p=e.floatingLabel,u=e.id,f=e.invalid,h=e.label,b=e.plainText,v=e.text,g=e.tooltipFeedback,y=e.valid,N=(0,n.Tt)(e,["children","className","feedback","feedbackInvalid","feedbackValid","floatingClassName","floatingLabel","id","invalid","label","plainText","text","tooltipFeedback","valid"]);return i.createElement(s.O,{describedby:N["aria-describedby"],feedback:r,feedbackInvalid:c,feedbackValid:d,floatingClassName:m,floatingLabel:p,id:u,invalid:f,label:h,text:v,tooltipFeedback:g,valid:y},i.createElement("textarea",(0,n.Cl)({className:(0,o.A)(b?"form-control-plaintext":"form-control",{"is-invalid":f,"is-valid":y},l),id:u},N,{ref:a}),t))}));c.propTypes=(0,n.Cl)({className:r().string,id:r().string,plainText:r().bool},s.O.propTypes),c.displayName="CFormTextarea"},85504:(e,a,t)=>{t.d(a,{B:()=>s});var n=t(22378),i=t(65043),l=t(65173),r=t.n(l),o=t(25196),s=(0,i.forwardRef)((function(e,a){var t,l=e.children,r=e.className,s=e.size,c=(0,n.Tt)(e,["children","className","size"]);return i.createElement("div",(0,n.Cl)({className:(0,o.A)("input-group",(t={},t["input-group-".concat(s)]=s,t),r)},c,{ref:a}),l)}));s.propTypes={children:r().node,className:r().string,size:r().oneOf(["sm","lg"])},s.displayName="CInputGroup"},30347:(e,a,t)=>{t.d(a,{s:()=>s});var n=t(22378),i=t(65043),l=t(65173),r=t.n(l),o=t(25196),s=(0,i.forwardRef)((function(e,a){var t=e.children,l=e.as,r=void 0===l?"span":l,s=e.className,c=(0,n.Tt)(e,["children","as","className"]);return i.createElement(r,(0,n.Cl)({className:(0,o.A)("input-group-text",s)},c,{ref:a}),t)}));s.propTypes={as:r().elementType,children:r().node,className:r().string},s.displayName="CInputGroupText"}}]);
//# sourceMappingURL=432.fe192ab2.chunk.js.map