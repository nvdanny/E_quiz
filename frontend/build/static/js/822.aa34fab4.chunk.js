"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[822],{8590:(e,t,n)=>{n.d(t,{CB:()=>o,Dt:()=>c,I$:()=>i,JZ:()=>r,Sv:()=>a,yB:()=>l});var s=n(8608);const o=async(e,t)=>{const n={title:e.title,description:e.description,duration:e.duration,start:e.start,end:e.end,questions:e.questions},o={Authorization:`Bearer ${t}`,"Content-Type":"application/json"};return s.A.post("/api/exam/",n,{headers:o})},a=async(e,t,n)=>{const o={id:e,title:t.title,description:t.description,duration:t.duration,start:t.start,end:t.end,questions:t.questions,active:t.active},a={Authorization:`Bearer ${n}`,"Content-Type":"application/json"};return s.A.put(`/api/exam/${e}`,o,{headers:a})},i=async(e,t)=>{const n={Authorization:`Bearer ${t}`};return s.A.get(`/api/exam/${e}`,{headers:n})},r=async e=>{const t={Authorization:`Bearer ${e}`};return s.A.get("/api/exam/list",{headers:t})},c=async(e,t)=>{const n={Authorization:`Bearer ${t}`};return s.A.delete(`/api/exam/${e}`,{headers:n})},l=async(e,t,n)=>{const o={id:e,active:t},a={Authorization:`Bearer ${n}`,"Content-Type":"application/json"};return s.A.post("/api/exam/updateStatus",o,{headers:a})}},3822:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var s=n(5043),o=n(5566),a=n(8155),i=n(8139),r=n.n(i),c=n(7852),l=n(579);const d={"top-start":"top-0 start-0","top-center":"top-0 start-50 translate-middle-x","top-end":"top-0 end-0","middle-start":"top-50 start-0 translate-middle-y","middle-center":"top-50 start-50 translate-middle","middle-end":"top-50 end-0 translate-middle-y","bottom-start":"bottom-0 start-0","bottom-center":"bottom-0 start-50 translate-middle-x","bottom-end":"bottom-0 end-0"},u=s.forwardRef(((e,t)=>{let{bsPrefix:n,position:s,containerPosition:o,className:a,as:i="div",...u}=e;return n=(0,c.oU)(n,"toast-container"),(0,l.jsx)(i,{ref:t,...u,className:r()(n,s&&d[s],o&&`position-${o}`,a)})}));u.displayName="ToastContainer";const h=u;var m=n(3240),x=n(8399),p=n(4830);const f={[x.ns]:"showing",[x.ze]:"showing show"},g=s.forwardRef(((e,t)=>(0,l.jsx)(p.A,{...e,ref:t,transitionClasses:f})));g.displayName="ToastFade";const v=g;var j=n(6618),y=n(5632);const b=s.createContext({onClose(){}}),A=s.forwardRef(((e,t)=>{let{bsPrefix:n,closeLabel:o="Close",closeVariant:a,closeButton:i=!0,className:d,children:u,...h}=e;n=(0,c.oU)(n,"toast-header");const m=(0,s.useContext)(b),x=(0,j.A)((e=>{null==m||null==m.onClose||m.onClose(e)}));return(0,l.jsxs)("div",{ref:t,...h,className:r()(n,d),children:[u,i&&(0,l.jsx)(y.A,{"aria-label":o,variant:a,onClick:x,"data-dismiss":"toast"})]})}));A.displayName="ToastHeader";const C=A,w=s.forwardRef(((e,t)=>{let{className:n,bsPrefix:s,as:o="div",...a}=e;return s=(0,c.oU)(s,"toast-body"),(0,l.jsx)(o,{ref:t,className:r()(n,s),...a})}));w.displayName="ToastBody";const N=w,S=s.forwardRef(((e,t)=>{let{bsPrefix:n,className:o,transition:a=v,show:i=!0,animation:d=!0,delay:u=5e3,autohide:h=!1,onClose:x,onEntered:p,onExit:f,onExiting:g,onEnter:j,onEntering:y,onExited:A,bg:C,...w}=e;n=(0,c.oU)(n,"toast");const N=(0,s.useRef)(u),S=(0,s.useRef)(x);(0,s.useEffect)((()=>{N.current=u,S.current=x}),[u,x]);const B=(0,m.A)(),T=!(!h||!i),E=(0,s.useCallback)((()=>{T&&(null==S.current||S.current())}),[T]);(0,s.useEffect)((()=>{B.set(E,N.current)}),[B,E]);const I=(0,s.useMemo)((()=>({onClose:x})),[x]),k=!(!a||!d),q=(0,l.jsx)("div",{...w,ref:t,className:r()(n,o,C&&`bg-${C}`,!k&&(i?"show":"hide")),role:"alert","aria-live":"assertive","aria-atomic":"true"});return(0,l.jsx)(b.Provider,{value:I,children:k&&a?(0,l.jsx)(a,{in:i,onEnter:j,onEntering:y,onEntered:p,onExit:f,onExiting:g,onExited:A,unmountOnExit:!0,children:q}):q})}));S.displayName="Toast";const B=Object.assign(S,{Body:N,Header:C});var T=n(3216),E=n(8590);const I=()=>{const e=(0,T.Zp)(),[t,n]=(0,s.useState)([]),[i,r]=(0,s.useState)([]),[c,d]=(0,s.useState)({}),[u,m]=(0,s.useState)((()=>{const e=localStorage.getItem("timeFinish");return e?parseInt(e):null})),[x,p]=(0,s.useState)((()=>{const e=localStorage.getItem("timeFinish");return e&&parseInt(e)-Math.floor(Date.now()/1e3)>0?parseInt(e)-Math.floor(Date.now()/1e3):0})),[f,g]=(0,s.useState)(!1),[v,j]=(0,s.useState)(!1);(0,s.useEffect)((()=>{if(null==localStorage.getItem("accessToken"))return void e("/login");0===x&&u&&e("/exam/finish");(async()=>{try{const e=localStorage.getItem("accessToken"),t=await(0,E.JZ)(e);if(n(t.data.msg.exams),t.data.msg.exams.length>0){const e=t.data.msg.exams[0];if(r(e.questions),!u){const t=Math.floor(Date.now()/1e3)+e.duration-60;m(t),localStorage.setItem("timeFinish",t)}}}catch(e){console.error("Error fetching exams:",e)}})();const t=JSON.parse(localStorage.getItem("selectedAnswers")||"{}");d(t);const s=setInterval((async()=>{const t=Math.floor(Date.now()/1e3),n=u&&u>t?u-t:0;if(p(n),n>0)60===n&&j(!0);else{clearInterval(s),j(!0);try{e("/exam/finish")}catch(o){console.error("Error submitting exam:",o)}}}),1e3);return()=>clearInterval(s)}),[e,u]);const y=()=>g(!1);return(0,l.jsxs)("div",{className:"container-fluid",children:[(0,l.jsxs)("div",{className:"row",children:[(0,l.jsx)("div",{id:"questions",className:"col-12 col-lg-8",children:(0,l.jsxs)("div",{id:"container",children:[(0,l.jsx)("h1",{children:"B\xe0i Thi"}),(0,l.jsx)("div",{id:"question-container",children:i.map(((e,t)=>(0,l.jsxs)("div",{className:"question",children:[(0,l.jsxs)("h5",{children:["C\xe2u ",t+1,": ",e.description]}),e.options.map(((e,n)=>(0,l.jsxs)("label",{children:[(0,l.jsx)("input",{type:"radio",name:`q${t}`,value:e._id,checked:c[t]===n,onChange:()=>((e,t)=>{const n={...c,[e]:t};d(n),localStorage.setItem("selectedAnswers",JSON.stringify(n))})(t,n)}),String.fromCharCode(65+n),": ",e.text]},n))),(0,l.jsx)("br",{})]},t)))})]})}),(0,l.jsx)("div",{id:"sidebar",className:"col-12 col-lg-4",children:(0,l.jsxs)("div",{id:"sidebar-content",children:[(0,l.jsxs)("div",{id:"timer",children:[(0,l.jsx)("div",{id:"timer-text",children:"Th\u1eddi gian c\xf2n l\u1ea1i:"}),(0,l.jsx)("div",{id:"timer-time",children:`${Math.floor(x/60).toString().padStart(2,"0")}:${(x%60).toString().padStart(2,"0")}`})]}),(0,l.jsx)("hr",{}),(0,l.jsx)("div",{id:"saveButton",onClick:()=>{g(!0)},children:"N\u1ed8P B\xc0I"}),(0,l.jsx)("div",{className:"note",children:"*L\u01b0u \xfd: B\u1ea1n ch\u1ec9 \u0111\u01b0\u1ee3c ho\xe0n th\xe0nh b\xe0i thi c\u1ee7a m\xecnh trong th\u1eddi gian cho ph\xe9p, qu\xe1 th\u1eddi gian quy \u0111\u1ecbnh h\u1ec7 th\u1ed1ng s\u1ebd d\xf9ng b\xe0i l\xe0m c\u1ee7a b\u1ea1n v\xe0 n\u1ed9p b\xe0i"}),(0,l.jsx)("div",{id:"question-list",children:i.map(((e,t)=>(0,l.jsx)("div",{className:"question-number "+(void 0!==c[t]?"answered":""),onClick:()=>(e=>{document.querySelectorAll(".question")[e].scrollIntoView({behavior:"smooth"})})(t),children:t+1},t)))})]})})]}),(0,l.jsx)("button",{id:"scrollToBottomBtn",title:"Cu\u1ed9n xu\u1ed1ng cu\u1ed1i trang",onClick:()=>window.scrollTo({top:document.body.scrollHeight,behavior:"smooth"}),children:"N\u1ed8P B\xc0I \u2193"}),(0,l.jsxs)(o.A,{show:f,onHide:y,children:[(0,l.jsx)(o.A.Header,{closeButton:!0,children:(0,l.jsx)(o.A.Title,{children:"X\xe1c Nh\u1eadn"})}),(0,l.jsx)(o.A.Body,{children:"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n n\u1ed9p b\xe0i kh\xf4ng?"}),(0,l.jsxs)(o.A.Footer,{children:[(0,l.jsx)(a.A,{variant:"secondary",onClick:y,children:"H\u1ee7y"}),(0,l.jsx)(a.A,{variant:"primary",onClick:()=>{g(!1),e("/exam/finish")},children:"X\xe1c Nh\u1eadn"})]})]}),(0,l.jsx)(h,{position:"top-end",className:"p-3",itemType:"info",children:(0,l.jsx)(B,{show:v,onClose:()=>j(!1),delay:5e3,autohide:!0,children:(0,l.jsx)(B.Body,{children:"S\u1eafp H\u1ebft gi\u1edd! B\u1ea1n n\xean n\u1ed9p b\xe0i ngay."})})})]})}},3240:(e,t,n)=>{n.d(t,{A:()=>c});var s=n(5043),o=n(6723),a=n(9109);const i=2**31-1;function r(e,t,n){const s=n-Date.now();e.current=s<=i?setTimeout(t,s):setTimeout((()=>r(e,t,n)),i)}function c(){const e=(0,o.A)(),t=(0,s.useRef)();return(0,a.A)((()=>clearTimeout(t.current))),(0,s.useMemo)((()=>{const n=()=>clearTimeout(t.current);return{set:function(s){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;e()&&(n(),o<=i?t.current=setTimeout(s,o):r(t,s,Date.now()+o))},clear:n,handleRef:t}}),[])}}}]);
//# sourceMappingURL=822.aa34fab4.chunk.js.map