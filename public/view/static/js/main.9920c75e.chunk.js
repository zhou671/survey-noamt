(this["webpackJsonpreact-survey"]=this["webpackJsonpreact-survey"]||[]).push([[0],{102:function(e,t,n){},162:function(e,t,n){},164:function(e,t,n){},166:function(e,t,n){},479:function(e,t,n){},480:function(e,t,n){},481:function(e,t,n){"use strict";n.r(t);var c=n(7),i=n.n(c),o=n(28),r=n.n(o),s=(n(162),n(47)),a=n.n(s),l=n(70),j=n(12),u=(n(102),n(8)),b=function(e){var t=e.onRegister,n=Object(c.useState)(""),i=Object(j.a)(n,2),o=i[0],r=i[1];return Object(u.jsxs)("main",{id:"main-holder",children:[Object(u.jsx)("h1",{id:"login-header",children:"Login"}),Object(u.jsx)("p",{children:"Welcome to the perceptual similiarty on 3D shape survey!"}),Object(u.jsx)("p",{children:'Please enter your Amazon Mechanical Turk workId and click on "Enter Survey" to begin or continue. '}),Object(u.jsxs)("form",{id:"login-form",onSubmit:function(e){e.preventDefault(),o?o.length>100?alert("Please enter a userName less than 100 characters"):t(o):alert("Please input your userName")},children:[Object(u.jsx)("input",{type:"text",id:"username-field",class:"login-form-field",placeholder:"UserName",value:o,onChange:function(e){return r(e.target.value)}}),Object(u.jsx)("input",{type:"submit",value:"Continue",id:"login-form-submit"})]})]})},h=n(32),d=function(e){var t=e.text,n=e.onClick;return Object(u.jsx)("button",{onClick:n,id:"login-form-submit",children:t})},f=n(29),O=n(484),g=(n(164),function(e){var t,n=e.object,c=e.orbitRef,i=e.onClick,o=e.model,r=e.render?Object(u.jsx)(d,{text:o,onClick:i}):null,s=[],a=Object(h.a)([[.5773502691896257,-1,-1.5115226281523415],[-1.1547005383792515,0,-1.5115226281523415],[.5773502691896257,1,-1.5115226281523415],[-.9341723589627157,-1.618033988749895,-.35682208977308993],[1.8683447179254313,0,-.35682208977308993],[-.9341723589627157,1.618033988749895,-.35682208977308993],[.9341723589627157,-1.618033988749895,.35682208977308993],[-1.8683447179254313,0,.35682208977308993],[.9341723589627157,1.618033988749895,.35682208977308993],[-.5773502691896257,-1,1.5115226281523415],[1.1547005383792515,0,1.5115226281523415],[-.5773502691896257,1,1.5115226281523415]].entries());try{for(a.s();!(t=a.n()).done;){var l=Object(j.a)(t.value,2),b=(l[0],l[1]);s.push(Object(u.jsx)("pointLight",{position:b,intensity:.1}))}}catch(g){a.e(g)}finally{a.f()}return Object(u.jsxs)("div",{class:"float-child",children:[Object(u.jsxs)(f.a,{camera:{position:[0,0,1],fov:60},children:[Object(u.jsx)(O.a,{ref:c}),s,Object(u.jsxs)("mesh",{position:[0,0,0],children:[Object(u.jsx)("primitive",{object:n}),Object(u.jsx)("meshPhongMaterial",{attach:"material",color:"#ffffff"})]})]}),r]})}),p=n(156),x=[],m=(n(166),n(167),n(145)),v=function(e){var t=e.url,n=e.nextseq,i=e.userId,o=e.fileNames,r=e.choiceurl,s=e.uniqueCode,a=Object(c.useState)(0),l=Object(j.a)(a,2),b=l[0],h=l[1],d=Object(c.useState)(n),O=Object(j.a)(d,2),v=O[0],k=O[1],y=Object(c.useState)(void 0),C=Object(j.a)(y,2),w=(C[0],C[1]),S=Object(c.useState)(!1),P=Object(j.a)(S,2),I=P[0],R=P[1],q=Object(c.useCallback)((function(e){w({current:e}),function(e){e&&(x.push(e),e.addEventListener("change",(function(t){x.forEach((function(n){if(n!==e){var c=t.target.object.position;n.object.position.set(c.x,c.y,c.z);var i=t.target.object.rotation;n.object.rotation.set(i.x,i.y,i.z),n.object.zoom=t.target.object.zoom,n.target=t.target.target,n.object.updateProjectionMatrix()}}))})))}(e)}),[]),L=[];o.forEach((function(e,n,c){"null"===e&&(0!=n&&console.log(c[n-1]),n!=o.length-1&&console.log(c[n+1])),L.push(t+e+"-ori.obj"),L.push(t+e+"-1.obj"),L.push(t+e+"-2.obj")}));var T=Object(f.c)(p.a,L),z=function(e){return function(){3*b<T.length&&m.get(r+i+"/"+v+"/"+e+"/"+o[b]),k(v+1),h(b+1),console.log(b),console.log(T.length),3*b>=T.length?R(!0):(T[3*b+0].children.splice(-1),T[3*b+1].children.splice(-1),T[3*b+2].children.splice(-1))}};return I?Object(u.jsxs)("p",{children:[" You have completed all the tasks! Your unique code is ",s,". Thanks for taking this survey! "]}):Object(u.jsxs)("main",{id:"main-holder",children:[Object(u.jsxs)("h1",{id:"login-header",children:["Task ",v," / 50 "]}),Object(u.jsx)("h2",{children:"Does the left or right shape look more similar to the middle one?"}),Object(u.jsx)("p",{children:"*Please drag/zoom the shapes to compare details."}),Object(u.jsx)("div",{class:"float-container",children:[Object(u.jsx)(g,{object:T[3*b+1],orbitRef:q,onClick:z("1"),model:"Left shape",render:!0}),Object(u.jsx)(g,{object:T[3*b+0],orbitRef:q,onClick:z("3"),model:"Choose none",render:!1}),Object(u.jsx)(g,{object:T[3*b+2],orbitRef:q,onClick:z("2"),model:"Right shape",render:!0})]}),Object(u.jsxs)("p",{children:["Failed to load 3d shapes? ",Object(u.jsx)("button",{onClick:z("3"),id:"text-button",children:" Click here. "})]})]})},k=function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"Give us two minutes to prepare the shapes."}),Object(u.jsx)("img",{src:"/out.gif",alt:"loadingbar",width:"400",height:"100"})]})},y=(n(479),function(e){var t=e.onClick;return Object(u.jsxs)("main",{id:"main-holder",children:[Object(u.jsx)("h1",{id:"login-header",children:"Instruction"}),Object(u.jsx)("p",{children:" *Please watch the gif below carefully to get familiar with how to interact with 3D shapes."}),Object(u.jsx)("img",{src:"/instruction2.gif",alt:"instruction",width:"900",height:"500"}),Object(u.jsx)("img",{src:"/out.gif",alt:"loadingbar",width:"4",height:"1"}),Object(u.jsx)("button",{onClick:t,id:"btn",children:"Start Survey"})]})}),C=(n(480),n(145)),w=window.location.origin,S=w+"/api/checkuser/",P=w+"/api/getfile/",I=w+"/api/makeselection/";var R=function(){var e=Object(c.useState)(!0),t=Object(j.a)(e,2),n=(t[0],t[1]),i=Object(c.useState)(0),o=Object(j.a)(i,2),r=o[0],s=o[1],h=Object(c.useState)(""),d=Object(j.a)(h,2),f=d[0],O=d[1],g=Object(c.useState)(),p=Object(j.a)(g,2),x=p[0],m=p[1],w=Object(c.useState)(0),R=Object(j.a)(w,2),q=R[0],L=R[1],T=Object(c.useState)(""),z=Object(j.a)(T,2),E=z[0],N=z[1],D=function(){var e=Object(l.a)(a.a.mark((function e(t){var c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C.get(S+t);case 2:c=e.sent,i=c.data,O(t),s(parseInt(i.nextId)),m(i.fileName),N(i.uniqueCode),L(1),n(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return function(){try{var e=document.createElement("canvas");return!!window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl"))}catch(t){return!1}}()?0===q?Object(u.jsx)("body",{children:Object(u.jsx)(b,{onRegister:D})}):1===q?r>=50?Object(u.jsxs)("p",{children:[" You have completed all the tasks! Your unique code is ",E,". Thanks for taking this survey! "]}):Object(u.jsx)("body",{children:Object(u.jsx)(y,{onClick:function(){L(2)}})}):Object(u.jsx)("body",{children:Object(u.jsx)(c.Suspense,{fallback:Object(u.jsx)(k,{}),children:Object(u.jsx)(v,{url:P,nextseq:r,userId:f,fileNames:x,choiceurl:I,uniqueCode:E})})}):Object(u.jsx)("body",{children:"This survey needs support of webgl, please either switch a brower or enable webgl."})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,485)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};r.a.render(Object(u.jsx)(i.a.StrictMode,{children:Object(u.jsx)(R,{})}),document.getElementById("root")),q()}},[[481,1,2]]]);
//# sourceMappingURL=main.9920c75e.chunk.js.map