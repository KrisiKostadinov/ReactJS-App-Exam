(this.webpackJsonpusers_app=this.webpackJsonpusers_app||[]).push([[0],{58:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a.n(n),r=a(33),s=a.n(r),l=a(12),i=(a(47),a(7)),o=a(19),u=a(15),j=a(30),b=a(2);function d(e){var t=e.component,a=e.authed,n=Object(j.a)(e,["component","authed"]);return Object(b.jsx)(i.b,Object(u.a)(Object(u.a)({},n),{},{render:function(e){return!0===a?Object(b.jsx)(t,Object(u.a)({},e)):Object(b.jsx)(i.a,{to:{pathname:"/login",state:{from:e.location}}})}}))}function p(e){var t=e.component,a=e.authed,n=Object(j.a)(e,["component","authed"]);return Object(b.jsx)(i.b,Object(u.a)(Object(u.a)({},n),{},{render:function(e){return!1===a?Object(b.jsx)(t,Object(u.a)({},e)):Object(b.jsx)(i.a,{to:{pathname:"/",state:{from:e.location}}})}}))}var m=a(25);a(53);0===m.a.apps.length&&m.a.initializeApp({apiKey:"AIzaSyCnrm2ZWUiOOX5NO0w6ll9kINuHjcmUNWM",authDomain:"reactjs-app---cads.firebaseapp.com",projectId:"reactjs-app---cads",storageBucket:"reactjs-app---cads.appspot.com",messagingSenderId:"593133242516",appId:"1:593133242516:web:fcbd52fa1b6e20aed1cc81",measurementId:"G-3QRM84PM7V"});var h=m.a.auth();function O(e){localStorage.setItem("user",JSON.stringify(e))}function x(){return JSON.parse(localStorage.getItem("user"))}function f(e){var t=e.user,a=e.isAuth,n=Object(i.g)();return Object(b.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Cards App"}),Object(b.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(b.jsx)("span",{className:"navbar-toggler-icon"})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNav",children:Object(b.jsx)("ul",{className:"navbar-nav",children:a?Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{className:"nav-link",to:"/add",children:"Add Card"})}):""})}),Object(b.jsx)("div",{className:"collapse navbar-collapse",children:a?Object(b.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsxs)(o.b,{className:"nav-link",to:"/account",children:["Hello, ",t.email]})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{className:"nav-link text-danger",to:"#",onClick:function(){m.a.auth().signOut().then((function(){localStorage.removeItem("user"),n.push("/")})).catch((function(e){console.log(e)}))},children:"Logout"})})]}):Object(b.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{className:"nav-link",to:"/register",children:"Register"})}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)(o.b,{className:"nav-link",to:"/login",children:"Login"})})]})})]})})}var v=a(59),g=a(60),N=a(61),y=function(e){var t=e.history,a=Object(n.useState)(!1),c=Object(l.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(""),o=Object(l.a)(i,2),u=o[0],j=o[1];return Object(b.jsxs)("div",{className:"w-50 mx-auto",children:[Object(b.jsx)("title",{children:"Login"}),Object(b.jsx)("h2",{children:"Login"}),Object(b.jsxs)(v.a,{onSubmit:function(e){e.preventDefault();var a=e.target.email.value,n=e.target.password.value;s(!0),function(e,t){return m.a.auth().signInWithEmailAndPassword(e,t)}(a,n).then((function(e){O(e),t.push("/")})).catch((function(e){j(e.message),s(!1)}))},className:"form",children:[r?Object(b.jsx)(g.a,{}):"",u?Object(b.jsx)("div",{className:"alert alert-danger",children:u}):"",Object(b.jsxs)(N.a,{className:"form-group",children:[Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{autoFocus:!0,disabled:r,className:"form-control",type:"email",name:"email"})]}),Object(b.jsxs)(N.a,{className:"form-group",children:[Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{disabled:r,className:"form-control",type:"password",name:"password"})]}),Object(b.jsx)("button",{disabled:r,className:"btn btn-primary",type:"submit",children:"Login"})]})]})},w=function(e){var t=e.history,a=Object(n.useState)(!1),c=Object(l.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(""),o=Object(l.a)(i,2),u=o[0],j=o[1];return Object(b.jsxs)("div",{className:"w-50 mx-auto",children:[Object(b.jsx)("title",{children:"Register"}),Object(b.jsx)("h2",{children:"Register"}),Object(b.jsxs)(v.a,{onSubmit:function(e){e.preventDefault();var a=e.target.email.value,n=e.target.password.value;if(n!==e.target.confirmPassword.value)return j("Password don't match!");s(!0),function(e,t){return m.a.auth().createUserWithEmailAndPassword(e,t)}(a,n).then((function(e){O(e),t.push("/")})).catch((function(e){j(e.message),s(!1)}))},className:"form",children:[r?Object(b.jsx)(g.a,{}):"",u?Object(b.jsx)("div",{className:"alert alert-danger",children:u}):"",Object(b.jsxs)(N.a,{className:"form-group",children:[Object(b.jsx)("label",{children:"Email"}),Object(b.jsx)("input",{autoFocus:!0,disabled:r,className:"form-control",type:"email",name:"email"})]}),Object(b.jsxs)(N.a,{className:"form-group",children:[Object(b.jsx)("label",{children:"Password"}),Object(b.jsx)("input",{disabled:r,className:"form-control",type:"password",name:"password"})]}),Object(b.jsxs)(N.a,{className:"form-group",children:[Object(b.jsx)("label",{children:"Confirm Password"}),Object(b.jsx)("input",{disabled:r,className:"form-control",type:"password",name:"confirmPassword"})]}),Object(b.jsx)("button",{disabled:r,className:"btn btn-primary",type:"submit",children:"Register"})]})]})},k=a(8),S=a.n(k),C=a(14),I=a(62),A=a(26),E=(a(57),A.a.firestore()),P=A.a.storage(),D=E.collection("cards");function U(){return B.apply(this,arguments)}function B(){return(B=Object(C.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.get();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function L(e){return R.apply(this,arguments)}function R(){return(R=Object(C.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.add(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function F(e,t){return M.apply(this,arguments)}function M(){return(M=Object(C.a)(S.a.mark((function e(t,a){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.doc(t).set(a);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function V(e){return J.apply(this,arguments)}function J(){return(J=Object(C.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.doc(t).get();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function W(e){return H.apply(this,arguments)}function H(){return(H=Object(C.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.doc(t).delete();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return _.apply(this,arguments)}function _(){return(_=Object(C.a)(S.a.mark((function e(t){var a,n,c;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=A.a.storage(),n=a.ref(),c=n.child("images/"+t),e.abrupt("return",c.delete());case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function q(e){return z.apply(this,arguments)}function z(){return(z=Object(C.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",D.where("userId","==",t).get());case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Y(e){var t=e.history,a=Object(n.useState)(!1),c=Object(l.a)(a,2),r=c[0],s=c[1],i=Object(n.useState)(""),o=Object(l.a)(i,2),u=o[0],j=o[1],d=Object(n.useState)(!1),p=Object(l.a)(d,2),m=p[0],h=p[1],O=Object(n.useState)(""),f=Object(l.a)(O,2),y=f[0],w=f[1];function k(){return(k=Object(C.a)(S.a.mark((function e(t){var a,n,c,r,l;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),s(!0),n=t.target.title.value,c=t.target.subtitle.value,r=t.target.content.value,l=null===(a=t.target.url)||void 0===a?void 0:a.value,""!==n&&""!==r){e.next=9;break}return s(!1),e.abrupt("return",j("All fields is required!"));case 9:y?P.ref("/images/".concat(y.name)).put(y).on("state_changed",(function(e){console.log(e)}),(function(e){console.log(e)}),(function(){P.ref("images").child(y.name).getDownloadURL().then(function(){var e=Object(C.a)(S.a.mark((function e(t){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A({title:n,subtitle:c,content:r},y.name,t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())})):A({title:n,subtitle:c,content:r,url:l});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function A(e){return E.apply(this,arguments)}function E(){return(E=Object(C.a)(S.a.mark((function e(a){var n,c,r,s,l=arguments;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=l.length>1&&void 0!==l[1]?l[1]:"",c=l.length>2&&void 0!==l[2]?l[2]:"",r=x(),e.next=5,L({title:a.title,subtitle:a.subtitle,content:a.content,url:a.url?a.url:c||"https://thumbs.dreamstime.com/b/default-avatar-profile-trendy-style-social-media-user-icon-187599373.jpg",imagePath:n,userId:r.user.uid});case 5:s=e.sent,t.push("/details/"+s.id);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)("div",{className:"w-50 mx-auto",children:[Object(b.jsx)("title",{children:"Create a new card!"}),Object(b.jsx)("h2",{children:"Add Card"}),r?Object(b.jsx)(g.a,{}):"",Object(b.jsxs)(v.a,{onSubmit:function(e){return k.apply(this,arguments)},className:"form",children:[u?Object(b.jsx)("div",{className:"alert alert-danger",children:u}):"",Object(b.jsxs)(N.a,{className:"form-group",children:[Object(b.jsx)("label",{children:"Title"}),Object(b.jsx)("input",{autoFocus:!0,disabled:r,className:"form-control",type:"text",name:"title"})]}),Object(b.jsxs)(N.a,{className:"form-group",children:[Object(b.jsx)("label",{children:"Subtitle"}),Object(b.jsx)("input",{disabled:r,className:"form-control",type:"text",name:"subtitle"})]}),Object(b.jsxs)(N.a,{className:"form-group",children:[Object(b.jsx)("label",{children:"Content"}),Object(b.jsx)("textarea",{disabled:r,className:"form-control",type:"text",name:"content"})]}),Object(b.jsxs)(N.a,{className:"form-group",children:[Object(b.jsxs)("div",{className:"d-flex justify-content-between",children:[Object(b.jsx)("label",{children:"Image URL"}),Object(b.jsx)(I.a,{type:"button",onClick:function(){h(!m)},className:"btn",children:m?"Upload":"Url"})]}),m?Object(b.jsx)("input",{disabled:r,className:"form-control",type:"text",name:"url"}):Object(b.jsx)("input",{type:"file",onChange:function(e){var t=e.target.files[0];w((function(e){return t}))},disabled:r,className:"form-control",name:"file"})]}),Object(b.jsx)(I.a,{disabled:r,type:"submit",children:"Add Card"})]})]})})}var G=function(e){var t=e.card;return Object(b.jsxs)("div",{className:"card col-md-4 d-flex justify-content-center my-2",children:[Object(b.jsx)("img",{className:"card-img-top w-100",src:t.url,alt:"Card image cap"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"card-title",children:t.title}),Object(b.jsx)("p",{className:"card-text",children:t.content.length>100?t.content.slice(0,100)+"...":t.content}),Object(b.jsx)(o.b,{to:"/details/".concat(t.id),className:"btn btn-primary",children:"Details"})]})]})};function K(e){var t=e.userId,a=void 0===t?null:t,c=Object(n.useState)([]),r=Object(l.a)(c,2),s=r[0],i=r[1],o=Object(n.useState)(!0),j=Object(l.a)(o,2),d=j[0],p=j[1];return Object(n.useEffect)((function(){function e(){return(e=Object(C.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!a){e.next=7;break}return e.next=4,q(a);case 4:t=e.sent,e.next=10;break;case 7:return e.next=9,U();case 9:t=e.sent;case 10:return e.abrupt("return",t);case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))).apply(this,arguments)}(function(){return e.apply(this,arguments)})().then((function(e){p(!1);var t=[];e.docs.map((function(e){return t.push(Object(u.a)(Object(u.a)({},e.data()),{},{id:e.id}))})),i(t)}))}),[a]),Object(b.jsxs)("div",{className:"container my-4",children:[Object(b.jsx)("title",{children:"All Cards"}),Object(b.jsx)("div",{className:"row",children:s.length>0?s.map((function(e){return Object(b.jsx)(G,{card:e},e.id)})):Object(b.jsx)("div",{children:d?Object(b.jsx)(g.a,{}):Object(b.jsx)("h2",{children:"No Cards"})})})]})}var Q=a(42),X=function(e){var t=e.history,a=Object(i.h)().id,c=Object(n.useState)({title:"",content:"",url:"",imagePath:""}),r=Object(l.a)(c,2),s=r[0],j=r[1],d=Object(n.useState)(!1),p=Object(l.a)(d,2),m=p[0],h=p[1],O=Object(n.useState)(!0),f=Object(l.a)(O,2),v=f[0],N=f[1];return Object(n.useEffect)((function(){var e=x();function t(){return(t=Object(C.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V(a);case 3:return t=e.sent,e.abrupt("return",t);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}(function(){return t.apply(this,arguments)})().then((function(t){N(!1),t.exists?(j(Object(u.a)(Object(u.a)({},t.data()),{},{id:t.id})),h(t.data().userId===(null===e||void 0===e?void 0:e.user.uid))):console.log("No such document!")}))}),[a]),Object(b.jsxs)("div",{className:"container",children:[v?Object(b.jsx)(g.a,{}):"",Object(b.jsx)("title",{children:s.title}),Object(b.jsx)("div",{className:"card w-100 mt-4",children:Object(b.jsxs)("div",{className:"row",children:[Object(b.jsx)("img",{className:"card-img-top col-md-4",src:s.url,alt:"Card image cap"}),Object(b.jsxs)("div",{className:"card-body col-md-8",children:[Object(b.jsx)("h5",{className:"card-title",children:s.title}),Object(b.jsx)("h6",{className:"card-subtitle text-muted my-2",children:s.subtitle}),Object(b.jsx)("p",{className:"card-text",children:s.content}),m?Object(b.jsxs)("div",{className:"btn-group",children:[Object(b.jsx)(o.b,{className:"btn btn-warning",to:"/edit/".concat(s.id),children:"Edit"}),Object(b.jsx)("button",{className:"btn btn-danger",onClick:function(){function e(){return(e=Object(C.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,N(!0),e.next=4,W(a,s.url);case 4:return e.next=6,T(s.imagePath);case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:t.push("/");case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}Object(Q.confirmAlert)({customUI:function(t){var a=t.onClose;return Object(b.jsxs)("div",{className:"fixed-top bg-light w-25 mx-auto p-4 shadow",children:[Object(b.jsx)("h1",{children:"Are you sure?"}),Object(b.jsx)("p",{children:"You want to delete this card?"}),Object(b.jsx)("button",{className:"btn btn-primary",onClick:a,children:"No"}),Object(b.jsx)("button",{className:"mx-2 btn btn-danger",onClick:function(){!function(){e.apply(this,arguments)}(),a()},children:"Yes, Delete it!"})]})}})},children:"Delete"})]}):"",Object(b.jsx)("button",{className:"mx-2 btn btn-light",onClick:function(){t.goBack()},children:"Cancel"})]})]})})]})},Z=function(){var e=Object(i.g)(),t=Object(i.h)().id,a=Object(n.useState)(!0),c=Object(l.a)(a,2),r=c[0],s=c[1],o=Object(n.useState)(""),j=Object(l.a)(o,2),d=j[0],p=j[1],m=Object(n.useState)({title:"",subtitle:"",content:"",url:""}),h=Object(l.a)(m,2),O=h[0],f=h[1],y=Object(n.useState)(!0),w=Object(l.a)(y,2),k=w[0],A=w[1];function E(){return(E=Object(C.a)(S.a.mark((function a(n){var c,r,l,i,o;return S.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(n.preventDefault(),c=n.target.title.value,r=n.target.content.value,l=n.target.url.value,i=n.target.subtitle.value,""!==c&&""!==r&&""!==l){a.next=7;break}return a.abrupt("return",p("All fields is required!"));case 7:return s(!0),o=x(),a.prev=9,a.next=12,F(t,{title:c,subtitle:i,content:r,url:l,userId:o.user.uid});case 12:e.push("/details/"+t),a.next=21;break;case 15:a.prev=15,a.t0=a.catch(9),s(!1),p(a.t0.message),console.log(a.t0),p(a.t0.message);case 21:case"end":return a.stop()}}),a,null,[[9,15]])})))).apply(this,arguments)}return Object(n.useEffect)((function(){function e(){return(e=Object(C.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,V(t);case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}s(!1),function(){return e.apply(this,arguments)}().then((function(e){A(!1),e.exists?f(Object(u.a)(Object(u.a)({},e.data()),{},{id:e.id})):console.log("No such document!")}))}),[t]),Object(b.jsxs)("div",{className:"w-50 mx-auto",children:[Object(b.jsxs)("title",{children:["Edit Card - ",O.title]}),k?Object(b.jsx)(g.a,{}):"",Object(b.jsx)("h2",{children:"Edit Card"}),Object(b.jsxs)(v.a,{onSubmit:function(e){return E.apply(this,arguments)},className:"form",children:[d?Object(b.jsx)("div",{className:"alert alert-danger",children:d}):"",r?Object(b.jsx)(g.a,{}):"",Object(b.jsxs)(N.a,{className:"form-group",children:[Object(b.jsx)("label",{children:"Title"}),Object(b.jsx)("input",{autoFocus:!0,disabled:r,className:"form-control",defaultValue:O.title,type:"text",name:"title"})]}),Object(b.jsxs)(N.a,{className:"form-group",children:[Object(b.jsx)("label",{children:"Subtitle"}),Object(b.jsx)("input",{disabled:r,className:"form-control",type:"text",defaultValue:O.subtitle,name:"subtitle"})]}),Object(b.jsxs)(N.a,{className:"form-group",children:[Object(b.jsx)("label",{children:"Content"}),Object(b.jsx)("textarea",{disabled:r,className:"form-control",defaultValue:O.content,type:"text",name:"content"})]}),Object(b.jsxs)(N.a,{className:"form-group",children:[Object(b.jsx)("label",{children:"Image URL"}),Object(b.jsx)("input",{disabled:r,className:"form-control",defaultValue:O.url,type:"text",name:"url"})]}),Object(b.jsxs)("div",{className:"btn-group",children:[Object(b.jsx)(I.a,{className:"btn btn-warning",disabled:r,type:"submit",children:"Edit Card"}),Object(b.jsx)(I.a,{className:"btn btn-danger",onClick:function(){e.goBack()},children:"Cancel"})]})]})]})},$=function(){var e=x();return Object(b.jsxs)("div",{className:"container",children:[Object(b.jsxs)("title",{children:["Hello, ",e.user.email]}),Object(b.jsx)("h2",{className:"text-center",children:"My Cards"}),Object(b.jsx)("div",{className:"row mt-4",children:Object(b.jsx)(K,{userId:e.user.uid})})]})};var ee=function(){var e=Object(n.useState)(null),t=Object(l.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){h.onAuthStateChanged(c)}),[]),Object(b.jsx)("div",{className:"App",children:Object(b.jsxs)(o.a,{children:[Object(b.jsx)(f,{isAuth:!!a,user:a}),Object(b.jsxs)(i.d,{children:[Object(b.jsx)(i.b,{exact:!0,path:"/",component:K}),Object(b.jsx)(i.b,{exact:!0,path:"/all",component:K}),Object(b.jsx)(d,{authed:Boolean(a),path:"/add",component:Y}),Object(b.jsx)(i.b,{exact:!0,path:"/edit/:id",component:Z}),Object(b.jsx)(i.b,{exact:!0,path:"/details/:id",component:X}),Object(b.jsx)(p,{authed:Boolean(a),path:"/login",component:y}),Object(b.jsx)(p,{authed:Boolean(a),path:"/register",component:w}),Object(b.jsx)(d,{authed:Boolean(a),path:"/account",component:$})]})]})})};s.a.render(Object(b.jsx)(c.a.StrictMode,{children:Object(b.jsx)(ee,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.4b290ac4.chunk.js.map