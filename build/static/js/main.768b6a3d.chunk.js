(this.webpackJsonpenvy=this.webpackJsonpenvy||[]).push([[0],{250:function(e,t){},260:function(e,t,c){},290:function(e,t,c){},477:function(e,t,c){"use strict";c.r(t);var n=c(31),a=c(3),r=c.n(a),s=c(41),j=c.n(s),i=c(39),o=(c(260),c(261),c(18)),l=c(30),b=c(478),d=c(479),h=c(480),O=c(481),u=c(482),x=c(483),p=c(484),m=c(492),f=c(493),g=c(494),v=c(485),y=c(247),w=c(5),N=function(e){var t=Object(a.useState)(!1),c=Object(l.a)(t,2),n=c[0],r=c[1];return Object(w.jsx)("div",{children:Object(w.jsxs)(b.a,{light:!0,color:"light",expand:"md",children:[Object(w.jsx)(d.a,{href:"/",children:"E N V Y"}),Object(w.jsx)(h.a,{onClick:function(){return r(!n)}}),Object(w.jsxs)(O.a,{isOpen:n,navbar:!0,children:[Object(w.jsxs)(u.a,{className:"nav-items mr-auto",navbar:!0,children:[Object(w.jsx)(x.a,{children:Object(w.jsx)(p.a,{children:"Home"})}),Object(w.jsx)(x.a,{children:Object(w.jsx)(p.a,{children:"Collection"})}),Object(w.jsxs)(m.a,{nav:!0,inNavbar:!0,children:[Object(w.jsx)(f.a,{nav:!0,caret:!0,children:"Notes"}),Object(w.jsxs)(g.a,{left:!0,children:[Object(w.jsx)(v.a,{children:Object(w.jsx)(i.b,{className:"no-decor",to:"/notes/important",children:"Important"})}),Object(w.jsx)(v.a,{divider:!0}),Object(w.jsx)(v.a,{children:Object(w.jsx)(i.b,{className:"no-decor",to:"/notes/notimportant",children:"Not Important"})})]})]})]}),Object(w.jsx)(i.b,{to:"/signin",children:Object(w.jsx)(y.a,{className:"button-margin",outline:!0,color:"success",children:"Sign In"})}),Object(w.jsx)(i.b,{to:"/signup",children:Object(w.jsx)(y.a,{className:"button-margin",outline:!0,color:"success",children:"Sign Up"})})]})]})})},R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(a.useState)(e),c=Object(l.a)(t,2),n=c[0],r=c[1],s=function(){r(e)},j={value:n,onchange:function(e){r(e.target.value)}};return[n,j,s]},S=c(486),F=c(487),E=c(488),I=c(489),P=c(490),k=(c(290),function(){var e=R(),t=Object(l.a)(e,3),c=(t[0],t[1]),a=(t[2],R()),r=Object(l.a)(a,3),s=(r[0],r[1]);r[2];return Object(w.jsx)("div",{children:Object(w.jsxs)(S.a,{className:"card-component",body:!0,children:[Object(w.jsx)(F.a,{tag:"h5",children:"Note"}),Object(w.jsxs)(E.a,{children:[Object(w.jsx)(I.a,{children:Object(w.jsx)(P.a,Object(n.a)(Object(n.a)({type:"text"},c),{},{placeholder:"Enter Title"}))}),Object(w.jsx)(I.a,{children:Object(w.jsx)(P.a,Object(n.a)(Object(n.a)({},s),{},{className:"card-textarea",placeholder:"Body",type:"textarea"}))}),Object(w.jsx)(I.a,{children:Object(w.jsx)(y.a,{children:"Submit"})})]})]})})}),C=c(250),A=c.n(C),D=c(491),T=c(495),U=c(80),B=(c(295),{apiKey:"AIzaSyCQmt1v24SU0cxerozjPm0ubT5yCD8Gqiw",authDomain:"envy-e9d82.firebaseapp.com",projectId:"envy-e9d82",storageBucket:"envy-e9d82.appspot.com",messagingSenderId:"147023038686",appId:"1:147023038686:web:dd0e67a8d8fa514d9d9a4f",measurementId:"G-TP0PDWJGYS"});U.a.initializeApp(B),U.a.analytics();U.a.firestore();var z=U.a.auth(),G=B,J=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),c=Object(a.useState)(""),n=Object(l.a)(c,2),r=n[0],s=n[1];return Object(w.jsxs)(E.a,{className:"container",children:[Object(w.jsx)("h1",{children:"Sign In"}),Object(w.jsxs)(I.a,{children:[Object(w.jsx)(D.a,{children:"Email"}),Object(w.jsx)(P.a,{type:"email",innerRef:e,placeholder:"Enter Email"})]}),Object(w.jsxs)(I.a,{children:[Object(w.jsx)(D.a,{for:"examplePassword",children:"Password"}),Object(w.jsx)(P.a,{type:"password",innerRef:t,placeholder:"Enter Password"})]}),Object(w.jsx)(I.a,{children:Object(w.jsxs)(D.a,{className:"remember-me",children:[Object(w.jsx)(P.a,{type:"checkbox"}),Object(w.jsx)(D.a,{children:" Remember Me"})]})}),r.length?Object(w.jsx)(I.a,{children:Object(w.jsxs)(T.a,{color:"danger",children:[Object(w.jsx)("strong",{children:"Error!"})," ",r,"."]})}):null,Object(w.jsxs)(I.a,{children:[Object(w.jsx)(y.a,{onClick:function(c){c.preventDefault(),s(""),z.signInWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e)})).catch((function(e){s(e.message),console.log(e,e.message)}))},type:"submit",block:!0,color:"success",children:"Submit"}),Object(w.jsxs)("p",{className:"forgot-password text-right",children:["Forgot ",Object(w.jsx)("a",{href:"#",children:"password?"})]})]})]})},W=c(160),L=c.n(W),Y=c(251),q=function(){var e=Object(a.useRef)(null),t=Object(a.useRef)(null),c=Object(a.useRef)(null),n=Object(a.useRef)(null),r=Object(a.useState)(""),s=Object(l.a)(r,2),j=s[0],i=s[1],o=function(){var a=Object(Y.a)(L.a.mark((function a(r){return L.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r.preventDefault(),i(""),t.current.value===c.current.value){a.next=5;break}return i("The passwords donot match"),a.abrupt("return");case 5:return a.next=7,z.createUserWithEmailAndPassword(e.current.value,t.current.value).then((function(e){console.log(e,"Registered")})).catch((function(e){i(e.message),console.log(e,e.message)}));case 7:return a.next=9,z.currentUser.updateProfile({displayName:"".concat(n.current.value)}).then((function(e){console.log(e,"Name Added")})).catch((function(e){console.log(e)}));case 9:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return Object(w.jsxs)(E.a,{className:"container",children:[Object(w.jsx)("h1",{children:"Sign Up"}),Object(w.jsxs)(I.a,{children:[Object(w.jsx)(D.a,{children:"Full Name"}),Object(w.jsx)(P.a,{innerRef:n,type:"text",placeholder:"Full name"})]}),Object(w.jsxs)(I.a,{children:[Object(w.jsx)(D.a,{children:"Email address"}),Object(w.jsx)(P.a,{innerRef:e,type:"email",placeholder:"Enter email"})]}),Object(w.jsxs)(I.a,{children:[Object(w.jsx)(D.a,{children:"Password"}),Object(w.jsx)(P.a,{innerRef:t,type:"password",placeholder:"Enter password"})]}),Object(w.jsxs)(I.a,{children:[Object(w.jsx)(D.a,{children:"Confirm Password"}),Object(w.jsx)(P.a,{innerRef:c,type:"password",placeholder:"Confirm Password"})]}),j.length?Object(w.jsx)(I.a,{children:Object(w.jsxs)(T.a,{color:"danger",children:[Object(w.jsx)("strong",{children:"Error!"})," ",j,"."]})}):null,Object(w.jsxs)(I.a,{children:[Object(w.jsx)(y.a,{block:!0,color:"success",onClick:o,children:"Sign Up"}),Object(w.jsxs)("p",{className:"forgot-password text-right",children:["Already registered ",Object(w.jsx)("a",{href:"#",children:"Sign In?"})]})]})]})};var H=function(){return Object(w.jsxs)(i.a,{children:[Object(w.jsx)(N,{}),Object(w.jsxs)(o.c,{children:[Object(w.jsx)(o.a,{exact:!0,path:"/",component:J}),Object(w.jsx)(o.a,{path:"/signin",component:J}),Object(w.jsx)(o.a,{path:"/signup",component:q}),Object(w.jsx)(o.a,{path:"/notes/notimportant",component:k}),Object(w.jsx)(o.a,{path:"/notes/important",component:A.a})]})]})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,496)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))},M=c(65),Q=c(79),V=c(64),X=Object(M.b)({firebase:Q.firebaseReducer,firestore:V.firestoreReducer}),Z=c(255),$=c(253),_=c(254),ee=Object(M.d)(X,Object(M.c)(Object(M.a)(_.a.withExtraArgument({getFirebase:Q.getFirebase,getFirestore:V.getFirestore}),Object(V.reduxFirestore)(G)))),te={firebase:$.a,config:G,dispatch:ee.dispatch,createFirestoreInstance:V.createFirestoreInstance};j.a.render(Object(w.jsx)(Z.a,{store:ee,children:Object(w.jsx)(Q.ReactReduxFirebaseProvider,Object(n.a)(Object(n.a)({},te),{},{children:Object(w.jsx)(r.a.Fragment,{children:Object(w.jsx)(i.a,{children:Object(w.jsx)(H,{})})})}))}),document.getElementById("root")),K()}},[[477,1,2]]]);
//# sourceMappingURL=main.768b6a3d.chunk.js.map