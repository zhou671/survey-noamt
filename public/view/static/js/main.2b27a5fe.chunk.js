(this["webpackJsonpreact-survey"]=this["webpackJsonpreact-survey"]||[]).push([[0],{161:function(e,t,n){},162:function(e,t,n){},164:function(e,t,n){},166:function(e,t,n){},479:function(e,t,n){},480:function(e,t,n){"use strict";n.r(t);var c=n(7),i=n.n(c),r=n(28),o=n.n(r),a=(n(161),n(47)),s=n.n(a),l=n(70),u=n(12),j=(n(162),n(10)),b=function(e){var t=e.onRegister,n=Object(c.useState)(""),i=Object(u.a)(n,2),r=i[0],o=i[1];return Object(j.jsxs)("main",{id:"main-holder",children:[Object(j.jsx)("h1",{id:"login-header",children:"Login"}),Object(j.jsx)("p",{children:"Welcome to the perceptual similiarty on 3D shape survey!"}),Object(j.jsx)("p",{children:'Please enter your Amazon Machine Turk workId and click on "Enter Survey" to begin or continue. '}),Object(j.jsxs)("form",{id:"login-form",onSubmit:function(e){e.preventDefault(),r?r.length>100?alert("Please enter a userName less than 100 characters"):t(r):alert("Please input your userName")},children:[Object(j.jsx)("input",{type:"text",id:"username-field",class:"login-form-field",placeholder:"UserName",value:r,onChange:function(e){return o(e.target.value)}}),Object(j.jsx)("input",{type:"submit",value:"Enter Survey",id:"login-form-submit"})]})]})},h=n(32),d=function(e){var t=e.text,n=e.onClick;return Object(j.jsx)("button",{onClick:n,id:"login-form-submit",children:t})},f=n(29),O=n(483),p=(n(164),function(e){var t,n=e.object,c=e.orbitRef,i=e.onClick,r=e.model,o=e.render?Object(j.jsx)(d,{text:r,onClick:i}):null,a=[],s=Object(h.a)([[.5773502691896257,-1,-1.5115226281523415],[-1.1547005383792515,0,-1.5115226281523415],[.5773502691896257,1,-1.5115226281523415],[-.9341723589627157,-1.618033988749895,-.35682208977308993],[1.8683447179254313,0,-.35682208977308993],[-.9341723589627157,1.618033988749895,-.35682208977308993],[.9341723589627157,-1.618033988749895,.35682208977308993],[-1.8683447179254313,0,.35682208977308993],[.9341723589627157,1.618033988749895,.35682208977308993],[-.5773502691896257,-1,1.5115226281523415],[1.1547005383792515,0,1.5115226281523415],[-.5773502691896257,1,1.5115226281523415]].entries());try{for(s.s();!(t=s.n()).done;){var l=Object(u.a)(t.value,2),b=(l[0],l[1]);a.push(Object(j.jsx)("pointLight",{position:b,intensity:.1}))}}catch(p){s.e(p)}finally{s.f()}return Object(j.jsxs)("div",{class:"float-child",children:[Object(j.jsxs)(f.a,{camera:{position:[0,0,1],fov:60},children:[Object(j.jsx)(O.a,{ref:c}),a,Object(j.jsxs)("mesh",{position:[0,0,0],children:[Object(j.jsx)("primitive",{object:n}),Object(j.jsx)("meshPhongMaterial",{attach:"material",color:"#ffffff"})]})]}),o]})}),x=n(155),m=[],g=(n(166),n(167),n(144)),v=function(e){var t=e.url,n=e.nextseq,i=e.userId,r=e.fileNames,o=e.choiceurl,a=e.uniqueurl,s=Object(c.useState)(0),l=Object(u.a)(s,2),b=l[0],h=l[1],d=Object(c.useState)(n),O=Object(u.a)(d,2),v=O[0],k=O[1],y=Object(c.useState)(void 0),S=Object(u.a)(y,2),C=(S[0],S[1]),w=Object(c.useState)(!1),I=Object(u.a)(w,2),P=I[0],q=I[1],R=Object(c.useState)(!1),E=Object(u.a)(R,2),L=E[0],N=E[1],z=Object(c.useState)(0),T=Object(u.a)(z,2),F=T[0],M=T[1],D=Object(c.useCallback)((function(e){C({current:e}),function(e){e&&(m.push(e),e.addEventListener("change",(function(t){m.forEach((function(n){if(n!==e){var c=t.target.object.position;n.object.position.set(c.x,c.y,c.z);var i=t.target.object.rotation;n.object.rotation.set(i.x,i.y,i.z),n.object.zoom=t.target.object.zoom,n.target=t.target.target,n.object.updateProjectionMatrix()}}))})))}(e)}),[]),B=Object(c.useState)("0"),J=Object(u.a)(B,2),Y=J[0],A=J[1],U=[];r.forEach((function(e,n,c){"null"===e&&(0!=n&&console.log(c[n-1]),n!=r.length-1&&console.log(c[n+1])),U.push(t+e+"-ori.obj"),U.push(t+e+"-1.obj"),U.push(t+e+"-2.obj")}));var W=Object(f.c)(x.a,U),G=function(e){return function(){F===b&&(M(F+1),g.get(o+i+"/"+v+"/"+e+"/"+r[b]).then((function(e){"ok"===e?(k(v+1),h(b+1),3*b==W.length-3?(g.get(a+i).then((function(e){var t=e.data;A(t.uniqueCode)})),q(!0)):(W[3*b+0].children.splice(-1),W[3*b+1].children.splice(-1),W[3*b+2].children.splice(-1))):N(!0)})))}};return Object(j.jsxs)("main",{id:"main-holder",children:[Object(j.jsx)("h1",{id:"login-header",children:"Survey"}),Object(j.jsx)("p",{children:"Please click the left or right shape button that you think which is more similar to the middle one."}),Object(j.jsx)("p",{children:'In the case of failing to load shape or it is too close to determine, please click "Choose none"'}),Object(j.jsx)("div",{class:"float-container",children:L?Object(j.jsx)("p",{children:" There is some problem with the server, please refresh page or try this survey later."}):P?Object(j.jsxs)("p",{children:[" You have completed all the tasks! Your unique code is ",Y,". Thanks for taking this survey!"]}):[Object(j.jsx)(p,{object:W[3*b+1],orbitRef:D,onClick:G("1"),model:"Left shape",render:!0}),Object(j.jsx)(p,{object:W[3*b+0],orbitRef:D,onClick:G("3"),model:"Choose none",render:!0}),Object(j.jsx)(p,{object:W[3*b+2],orbitRef:D,onClick:G("2"),model:"Right shape",render:!0})]})]})},k=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"loading.."})})},y=(n(479),n(144)),S=window.location.origin,C=S+"/api/checkuser/",w=S+"/api/getfile/",I=S+"/api/makeselection/",P=S+"/api/getuniquecode/";var q=function(){var e=Object(c.useState)(!0),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(0),o=Object(u.a)(r,2),a=o[0],h=o[1],d=Object(c.useState)(""),f=Object(u.a)(d,2),O=f[0],p=f[1],x=Object(c.useState)(),m=Object(u.a)(x,2),g=m[0],S=m[1],q=function(){var e=Object(l.a)(s.a.mark((function e(t){var n,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,y.get(C+t);case 2:n=e.sent,c=n.data,p(t),h(parseInt(c.nextId)),S(c.fileName),i(!1);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(j.jsx)("body",{children:n?Object(j.jsx)(b,{onRegister:q}):Object(j.jsx)(c.Suspense,{fallback:Object(j.jsx)(k,{}),children:Object(j.jsx)(v,{url:w,nextseq:a,userId:O,fileNames:g,choiceurl:I,uniqueurl:P})})})},R=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,484)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),r(e),o(e)}))};o.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(q,{})}),document.getElementById("root")),R()}},[[480,1,2]]]);
//# sourceMappingURL=main.2b27a5fe.chunk.js.map