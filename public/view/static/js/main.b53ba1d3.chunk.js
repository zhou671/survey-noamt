(this["webpackJsonpreact-survey"]=this["webpackJsonpreact-survey"]||[]).push([[0],{102:function(e,t,n){},162:function(e,t,n){},164:function(e,t,n){},166:function(e,t,n){},479:function(e,t,n){},480:function(e,t,n){},481:function(e,t,n){"use strict";n.r(t);var c=n(7),i=n.n(c),o=n(28),r=n.n(o),s=(n(162),n(47)),a=n.n(s),l=n(70),u=n(12),j=(n(102),n(8)),b=function(e){var t=e.onRegister,n=Object(c.useState)(""),i=Object(u.a)(n,2),o=i[0],r=i[1];return Object(j.jsxs)("main",{id:"main-holder",children:[Object(j.jsx)("h1",{id:"login-header",children:"Login"}),Object(j.jsx)("p",{children:"Welcome to the perceptual similiarty on 3D shape survey!"}),Object(j.jsx)("p",{children:'Please enter your Amazon Machine Turk workId and click on "Enter Survey" to begin or continue. '}),Object(j.jsxs)("form",{id:"login-form",onSubmit:function(e){e.preventDefault(),o?o.length>100?alert("Please enter a userName less than 100 characters"):t(o):alert("Please input your userName")},children:[Object(j.jsx)("input",{type:"text",id:"username-field",class:"login-form-field",placeholder:"UserName",value:o,onChange:function(e){return r(e.target.value)}}),Object(j.jsx)("input",{type:"submit",value:"Continue",id:"login-form-submit"})]})]})},h=n(32),d=function(e){var t=e.text,n=e.onClick;return Object(j.jsx)("button",{onClick:n,id:"login-form-submit",children:t})},f=n(29),O=n(484),g=(n(164),function(e){var t,n=e.object,c=e.orbitRef,i=e.onClick,o=e.model,r=e.render?Object(j.jsx)(d,{text:o,onClick:i}):null,s=[],a=Object(h.a)([[.5773502691896257,-1,-1.5115226281523415],[-1.1547005383792515,0,-1.5115226281523415],[.5773502691896257,1,-1.5115226281523415],[-.9341723589627157,-1.618033988749895,-.35682208977308993],[1.8683447179254313,0,-.35682208977308993],[-.9341723589627157,1.618033988749895,-.35682208977308993],[.9341723589627157,-1.618033988749895,.35682208977308993],[-1.8683447179254313,0,.35682208977308993],[.9341723589627157,1.618033988749895,.35682208977308993],[-.5773502691896257,-1,1.5115226281523415],[1.1547005383792515,0,1.5115226281523415],[-.5773502691896257,1,1.5115226281523415]].entries());try{for(a.s();!(t=a.n()).done;){var l=Object(u.a)(t.value,2),b=(l[0],l[1]);s.push(Object(j.jsx)("pointLight",{position:b,intensity:.1}))}}catch(g){a.e(g)}finally{a.f()}return Object(j.jsxs)("div",{class:"float-child",children:[Object(j.jsxs)(f.a,{camera:{position:[0,0,1],fov:60},children:[Object(j.jsx)(O.a,{ref:c}),s,Object(j.jsxs)("mesh",{position:[0,0,0],children:[Object(j.jsx)("primitive",{object:n}),Object(j.jsx)("meshPhongMaterial",{attach:"material",color:"#ffffff"})]})]}),r]})}),p=n(156),x=[],m=(n(166),n(167),n(145)),v=function(e){var t=e.url,n=e.nextseq,i=e.userId,o=e.fileNames,r=e.choiceurl,s=e.uniqueurl,a=Object(c.useState)(0),l=Object(u.a)(a,2),b=l[0],h=l[1],d=Object(c.useState)(n),O=Object(u.a)(d,2),v=O[0],k=O[1],C=Object(c.useState)(void 0),y=Object(u.a)(C,2),w=(y[0],y[1]),S=Object(c.useState)(!1),q=Object(u.a)(S,2),P=q[0],I=q[1],R=Object(c.useCallback)((function(e){w({current:e}),function(e){e&&(x.push(e),e.addEventListener("change",(function(t){x.forEach((function(n){if(n!==e){var c=t.target.object.position;n.object.position.set(c.x,c.y,c.z);var i=t.target.object.rotation;n.object.rotation.set(i.x,i.y,i.z),n.object.zoom=t.target.object.zoom,n.target=t.target.target,n.object.updateProjectionMatrix()}}))})))}(e)}),[]),L=Object(c.useState)("0"),z=Object(u.a)(L,2),E=z[0],N=z[1],T=[];o.forEach((function(e,n,c){"null"===e&&(0!=n&&console.log(c[n-1]),n!=o.length-1&&console.log(c[n+1])),T.push(t+e+"-ori.obj"),T.push(t+e+"-1.obj"),T.push(t+e+"-2.obj")})),n>=20&&m.get(s+i).then((function(e){var t=e.data;console.log(t.uniqueCode),N(t.uniqueCode),I(!0)}));var D=Object(f.c)(p.a,T),F=function(e){return function(){3*b<D.length-3&&m.get(r+i+"/"+v+"/"+e+"/"+o[b]),k(v+1),h(b+1),console.log(b),console.log(D.length),3*b==D.length-3?m.get(s+i).then((function(e){var t=e.data;console.log(t.uniqueCode),N(t.uniqueCode),I(!0)})):(D[3*b+0].children.splice(-1),D[3*b+1].children.splice(-1),D[3*b+2].children.splice(-1))}};return P?Object(j.jsxs)("p",{children:[" You have completed all the tasks! Your unique code is ",E,". Thanks for taking this survey! "]}):Object(j.jsxs)("main",{id:"main-holder",children:[Object(j.jsxs)("h1",{id:"login-header",children:["Task ",v," / 20 "]}),Object(j.jsx)("h2",{children:"Does the left or right shape look more similar to the middle one?"}),Object(j.jsx)("p",{children:"*Please drag/zoom the shapes to compare details."}),Object(j.jsx)("div",{class:"float-container",children:[Object(j.jsx)(g,{object:D[3*b+1],orbitRef:R,onClick:F("1"),model:"Left shape",render:!0}),Object(j.jsx)(g,{object:D[3*b+0],orbitRef:R,onClick:F("3"),model:"Choose none",render:!1}),Object(j.jsx)(g,{object:D[3*b+2],orbitRef:R,onClick:F("2"),model:"Right shape",render:!0})]}),Object(j.jsxs)("p",{children:["Failed to load 3d shapes? ",Object(j.jsx)("button",{onClick:F("3"),id:"text-button",children:" Click here. "})]})]})},k=function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Give us a couple of seconds to prepare the shapes."}),Object(j.jsx)("img",{src:"/spinning_loading.gif",alt:"instruction",width:"50",height:"50"})]})},C=(n(479),function(e){var t=e.onClick;return Object(j.jsxs)("main",{id:"main-holder",children:[Object(j.jsx)("h1",{id:"login-header",children:"Instruction"}),Object(j.jsx)("p",{children:" *Please watch the gif below carefully to get familiar with how to interact with 3D shapes."}),Object(j.jsx)("img",{src:"/instruction2.gif",alt:"instruction",width:"900",height:"500"}),Object(j.jsx)("button",{onClick:t,id:"btn",children:"Start Survey"})]})}),y=(n(480),n(145)),w=window.location.origin,S=w+"/api/checkuser/",q=w+"/api/getfile/",P=w+"/api/makeselection/",I=w+"/api/getuniquecode/";var R=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=(t[0],t[1]),i=Object(c.useState)(0),o=Object(u.a)(i,2),r=o[0],s=o[1],h=Object(c.useState)(""),d=Object(u.a)(h,2),f=d[0],O=d[1],g=Object(c.useState)(),p=Object(u.a)(g,2),x=p[0],m=p[1],w=Object(c.useState)(0),R=Object(u.a)(w,2),L=R[0],z=R[1],E=function(){var e=Object(l.a)(a.a.mark((function e(t){var c,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get(S+t);case 2:c=e.sent,i=c.data,O(t),s(parseInt(i.nextId)),m(i.fileName),z(1),n(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return function(){try{var e=document.createElement("canvas");return!!window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl"))}catch(t){return!1}}()?0===L?Object(j.jsx)("body",{children:Object(j.jsx)(b,{onRegister:E})}):1===L?Object(j.jsx)("body",{children:Object(j.jsx)(C,{onClick:function(){z(2)}})}):Object(j.jsx)("body",{children:Object(j.jsx)(c.Suspense,{fallback:Object(j.jsx)(k,{}),children:Object(j.jsx)(v,{url:q,nextseq:r,userId:f,fileNames:x,choiceurl:P,uniqueurl:I})})}):Object(j.jsx)("body",{children:"This survey needs support of webgl, please either switch a brower or enable webgl."})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,485)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),c(e),i(e),o(e),r(e)}))};r.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(R,{})}),document.getElementById("root")),L()}},[[481,1,2]]]);
//# sourceMappingURL=main.b53ba1d3.chunk.js.map