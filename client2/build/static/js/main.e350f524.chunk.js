(this.webpackJsonpclient2=this.webpackJsonpclient2||[]).push([[0],{54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/jasonFiltered.0a5f2dd6.png"},57:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/rayFiltered.b3cbcdf3.png"},58:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/jLauFiltered.10d452f8.png"},59:function(e,t,n){"use strict";n.r(t),t.default=n.p+"static/media/mazFiltered.6626e3b3.png"},61:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(19),i=n.n(r),s=n(13),o=n(32),l=(n(42),o.a.initializeApp({apiKey:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_API_KEY,authDomain:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_AUTH_DOMAIN,projectId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_PROJECT_ID,storageBucket:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_STORAGE_BUCKET,messagingSenderId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_MESSENGER_SENDER_ID,appId:Object({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_FIREBASE_APP_ID})),j=l.auth(),d=n(1),u=c.a.createContext();function b(){return Object(a.useContext)(u)}function O(e){var t=e.children,n=Object(a.useState)(),c=Object(s.a)(n,2),r=c[0],i=c[1],o=Object(a.useState)(!0),l=Object(s.a)(o,2),b=l[0],O=l[1];Object(a.useEffect)((function(){return j.onAuthStateChanged((function(e){i(e),O(!1)}))}),[]);var h={currentUser:r,login:function(e,t){return j.signInWithEmailAndPassword(e,t)},signup:function(e,t){j.createUserWithEmailAndPassword(e,t)},logout:function(){return j.signOut()}};return Object(d.jsx)(u.Provider,{value:h,children:!b&&t})}var h=n(15),p=n.n(h),x=n(18),m=n(67),f=n(65),g=n(66),S=n(63),v=n(7);function _(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=Object(a.useRef)(),c=Object(a.useRef)(),r=Object(a.useRef)(),i=b().signup,o=b().login,l=Object(a.useState)(""),j=Object(s.a)(l,2),u=j[0],O=j[1],h=Object(a.useState)(!1),_=Object(s.a)(h,2),E=_[0],w=_[1],T=Object(v.g)();function C(){return(C=Object(x.a)(p.a.mark((function a(c){return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(c.preventDefault(),t.current.value===n.current.value){a.next=3;break}return a.abrupt("return",O("Passwords don't match"));case 3:return a.prev=3,O(""),w(!0),a.next=8,i(e.current.value,t.current.value);case 8:o(e.current.value,t.current.value),T.push("/"),a.next=15;break;case 12:a.prev=12,a.t0=a.catch(3),O("Failed to create an account");case 15:w(!1);case 16:case"end":return a.stop()}}),a,null,[[3,12]])})))).apply(this,arguments)}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m.a,{children:Object(d.jsxs)(m.a.Body,{children:[Object(d.jsx)("h2",{className:"text-center mb-4",children:"Sign up!"}),u&&Object(d.jsx)(f.a,{variant:"danger",children:u}),Object(d.jsxs)(g.a,{onSubmit:function(e){return C.apply(this,arguments)},children:[Object(d.jsxs)(g.a.Group,{id:"email",children:[Object(d.jsx)(g.a.Label,{children:"Email"}),Object(d.jsx)(g.a.Control,{type:"email",ref:e,required:!0})]}),Object(d.jsxs)(g.a.Group,{id:"password",children:[Object(d.jsx)(g.a.Label,{children:"Password"}),Object(d.jsx)(g.a.Control,{type:"password",ref:t,required:!0})]}),Object(d.jsxs)(g.a.Group,{id:"password-confirm",children:[Object(d.jsx)(g.a.Label,{children:"Password Confirmation"}),Object(d.jsx)(g.a.Control,{type:"password",ref:n,required:!0})]}),Object(d.jsxs)(g.a.Group,{id:"full-name",children:[Object(d.jsx)(g.a.Label,{children:"Full Name"}),Object(d.jsx)(g.a.Control,{type:"name",ref:c,required:!0})]}),Object(d.jsxs)(g.a.Group,{id:"postal",children:[Object(d.jsx)(g.a.Label,{children:"Postal Code"}),Object(d.jsx)(g.a.Control,{type:"postalCode",ref:r,required:!0})]}),Object(d.jsx)(S.a,{disabled:E,className:"w-100",type:"submit",children:"Sign Up"})]})]})}),Object(d.jsx)("div",{className:"w-100 text-center mt-2",children:"Lets make a stand, together."})]})}var E=n(64),w=n(17);function T(){var e=b(),t=(e.currentUser,e.logout),n=Object(a.useState)(""),c=Object(s.a)(n,2),r=c[0],i=c[1],o=Object(v.g)();function l(){return(l=Object(x.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i(""),e.prev=1,e.next=4,t();case 4:o.pushState("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),i("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m.a,{children:Object(d.jsxs)(m.a.Body,{children:[r&&Object(d.jsx)(f.a,{variant:"danger",children:r}),Object(d.jsx)("strong",{children:"ObjectID: "})," ",j.currentUser.uid]})}),Object(d.jsx)("div",{className:"w-100 text-center mt-2",children:Object(d.jsx)(S.a,{onClick:function(){return l.apply(this,arguments)},children:"Log Out"})})]})}function C(){var e=Object(a.useRef)(),t=Object(a.useRef)(),n=b().login,c=Object(a.useState)(""),r=Object(s.a)(c,2),i=r[0],o=r[1],l=Object(a.useState)(!1),j=Object(s.a)(l,2),u=j[0],O=j[1],h=Object(v.g)();function _(){return(_=Object(x.a)(p.a.mark((function a(c){return p.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c.preventDefault(),a.prev=1,o(""),O(!0),a.next=6,n(e.current.value,t.current.value);case 6:h.push("/"),a.next=12;break;case 9:a.prev=9,a.t0=a.catch(1),o("Failed to log in");case 12:O(!1);case 13:case"end":return a.stop()}}),a,null,[[1,9]])})))).apply(this,arguments)}return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(m.a,{children:Object(d.jsxs)(m.a.Body,{children:[Object(d.jsx)("h2",{className:"text-center mb-4",children:"Log In!"}),i&&Object(d.jsx)(f.a,{variant:"danger",children:i}),Object(d.jsxs)(g.a,{onSubmit:function(e){return _.apply(this,arguments)},children:[Object(d.jsxs)(g.a.Group,{id:"email",children:[Object(d.jsx)(g.a.Label,{children:"Email"}),Object(d.jsx)(g.a.Control,{type:"email",ref:e,required:!0})]}),Object(d.jsxs)(g.a.Group,{id:"password",children:[Object(d.jsx)(g.a.Label,{children:"Password"}),Object(d.jsx)(g.a.Control,{type:"password",ref:t,required:!0})]}),Object(d.jsx)(S.a,{disabled:u,className:"w-100",type:"submit",children:"Log In"})]}),Object(d.jsx)(S.a,{disabled:u,className:"w-100",onClick:function(){h.push("/signup")},children:"Sign Up"})]})}),Object(d.jsx)("div",{className:"w-100 text-center mt-2",children:"Start saving the world"}),Object(d.jsx)("div",{className:"w-100 text-center mt-2",children:"Making an impact, one bottle at a time."})]})}var R=n(23),k=n(36);function y(e){var t=e.component,n=Object(k.a)(e,["component"]),a=b().currentUser;return Object(d.jsx)(v.b,Object(R.a)(Object(R.a)({},n),{},{render:function(e){return a?Object(d.jsx)(t,Object(R.a)({},e)):Object(d.jsx)(v.a,{to:"/login"})}}))}n(54),n(55);function A(){var e=b(),t=(e.currentUser,e.logout),n=Object(a.useState)(""),c=Object(s.a)(n,2),r=(c[0],c[1]),i=Object(v.g)();function o(){return(o=Object(x.a)(p.a.mark((function e(){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(""),e.prev=1,e.next=4,t();case 4:i.pushState("/"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),r("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(d.jsxs)("nav",{className:"NavbarItems",children:[Object(d.jsx)("h1",{className:"navbar-logo",children:"WeCycle"}),Object(d.jsxs)("ul",{children:[Object(d.jsx)(S.a,{variant:"link",onClick:function(){i.push("/")},children:"Home"}),Object(d.jsx)(S.a,{variant:"link",onClick:function(){i.push("/aboutUs")},children:"About Us!"}),Object(d.jsx)(S.a,{variant:"link",onClick:function(){i.push("/login")},children:"Log in!"}),Object(d.jsx)(S.a,{variant:"link",onClick:function(){i.push("/signup")},children:"Sign up!"}),Object(d.jsx)(S.a,{variant:"link",onClick:function(){return o.apply(this,arguments)},children:"Log Out"})]})]})}var P=n(56),D=n(57),F=n(58),L=n(59);function N(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(A,{}),Object(d.jsxs)(E.a,{children:[Object(d.jsxs)(m.a,{children:[Object(d.jsx)("a",{href:"https://www.linkedin.com/in/rwong97/",children:Object(d.jsx)("img",{src:D,class:"card-img-top",alt:"https://www.linkedin.com/in/rwong97/"})}),Object(d.jsxs)(m.a.Body,{children:[Object(d.jsx)(m.a.Title,{children:"Raymond Wong"}),Object(d.jsx)(m.a.Text,{children:"Ray is a business graduate pursuing a tech career. His specializations are HTML/CSS and JavaScript. He has a passion for giving back and works with Burnaby Neighbourhood House as a digital literacy volunteer."})]})]}),Object(d.jsxs)(m.a,{children:[Object(d.jsx)("a",{href:"https://www.linkedin.com/in/jasonja-ahn/",children:Object(d.jsx)("img",{src:P,class:"card-img-top",alt:"https://www.linkedin.com/in/jasonja-ahn/"})}),Object(d.jsxs)(m.a.Body,{children:[Object(d.jsx)(m.a.Title,{children:"Jason Ahn"}),Object(d.jsx)(m.a.Text,{children:"Jason Ahn is an aspiring software engineer with a Bachelor's degree in Criminology from Simon Fraser University. Born in South Korea and raised in British Columbia, Canada, Jason currently resides in Vancouver. In his free time, he enjoys eating lasagna like Garfield."})]})]}),Object(d.jsxs)(m.a,{children:[Object(d.jsx)("a",{href:"https://www.linkedin.com/in/johnsonlau/",children:Object(d.jsx)("img",{src:F,class:"card-img-top",alt:"https://www.linkedin.com/in/johnsonlau/"})}),Object(d.jsxs)(m.a.Body,{children:[Object(d.jsx)(m.a.Title,{children:"Johnson Lau"}),Object(d.jsx)(m.a.Text,{children:"Johnson Lau is a young software developer looking to improve his skills in the field. Fresh from highschool, he is ready to make a lasting impact through his work. Johnson loves to play volleyball, and cook during his free time."})]})]}),Object(d.jsxs)(m.a,{children:[Object(d.jsx)("a",{href:"https://www.linkedin.com/in/mazin-marwan-0b3409154/",children:Object(d.jsx)("img",{src:L,class:"card-img-top",alt:"https://www.linkedin.com/in/mazin-marwan-0b3409154/"})}),Object(d.jsxs)(m.a.Body,{children:[Object(d.jsx)(m.a.Title,{children:"Mazin Marwan"}),Object(d.jsx)(m.a.Text,{children:"Mazin Marwan is a software developer from Vancouver BC seeking to create interesting and interactive applications focused on simplifying workflows for himself and those around him. Mazin loves to play various roleplaying games such as Dungeons and Dragons and write when he has the time."})]})]})]})]})}var B=function(){return Object(d.jsx)(E.a,{children:Object(d.jsx)(w.a,{children:Object(d.jsx)(O,{children:Object(d.jsxs)(v.d,{children:[Object(d.jsx)(y,{exact:!0,path:"/",component:T}),Object(d.jsx)(v.b,{path:"/signup",component:_}),Object(d.jsx)(v.b,{path:"/login",component:C}),Object(d.jsx)(v.b,{path:"/aboutUs",component:N})]})})})})};n(60);i.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root"))}},[[61,1,2]]]);
//# sourceMappingURL=main.e350f524.chunk.js.map