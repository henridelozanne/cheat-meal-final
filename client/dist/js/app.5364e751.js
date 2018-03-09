webpackJsonp([1],{0:function(t,e,n){t.exports=n("NHnr")},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("/5sW"),a=n("MMSg"),s=n.n(a),o=(n("doPI"),n("EuXz"),n("mtWM")),i=n.n(o),c=i.a.create({baseURL:"/api"}),u=function(t){throw console.error(t.response.data),t.response.data},l={signup:function(t){return c.post("/signup",t).then(function(t){return t.data}).catch(u)},login:function(t,e){return c.post("/login",{username:t,password:e}).then(function(t){var e=t.data;return localStorage.setItem("user",JSON.stringify(e)),i.a.defaults.headers.common["Authorization"]="Bearer "+e.token,e}).catch(u)},getSecret:function(){return c.get("/secret").then(function(t){return t.data}).catch(u)},logout:function(){delete i.a.defaults.headers.common["Authorization"],localStorage.removeItem("user")},loadUser:function(){var t=localStorage.getItem("user");if(!t)return!1;var e=JSON.parse(t);return!(!e.token||!e.name)&&(i.a.defaults.headers.common["Authorization"]="Bearer "+e.token,e)}},v={data:function(){return{isActive:!1}},methods:{logout:function(){l.logout(),this.$root.user=null,this.$router.push("/login")}}},p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar is-transparent"},[n("div",{staticClass:"navbar-brand"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[n("img",{attrs:{src:"https://bulma.io/images/bulma-logo.png",alt:"Bulma: a modern CSS framework based on Flexbox",width:"112",height:"28"}})]),t._v(" "),n("div",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},on:{click:function(e){t.isActive=!t.isActive}}},[n("span"),t._v(" "),n("span"),t._v(" "),n("span")])],1),t._v(" "),n("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive}},[n("div",{staticClass:"navbar-start"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/about"},nativeOn:{click:function(e){t.isActive=!1}}},[t._v("\n        About\n      ")])],1),t._v(" "),n("div",{staticClass:"navbar-end"},[n("div",{staticClass:"navbar-item"},[t.$root.user?n("div",{staticClass:"field is-grouped"},[n("p",{staticClass:"control"},[t._v("\n            Hi "+t._s(t.$root.user.name)+"\n          ")]),t._v(" "),n("p",{staticClass:"control"},[n("a",{staticClass:"navbar-item",on:{click:t.logout}},[t._v("\n              Logout\n            ")])])]):n("div",{staticClass:"field is-grouped"},[n("p",{staticClass:"control"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/login"},nativeOn:{click:function(e){t.isActive=!1}}},[t._v("\n              Login\n            ")])],1),t._v(" "),n("p",{staticClass:"control"},[n("router-link",{staticClass:"navbar-item",attrs:{to:"/signup"},nativeOn:{click:function(e){t.isActive=!1}}},[t._v("\n              Signup\n            ")])],1)])])])])])},m=[],d=n("XyMi"),f=!1,h=null,b=null,g=null,_=Object(d["a"])(v,p,m,f,h,b,g),C=_.exports,w={components:{NavBar:C},created:function(){var t=l.loadUser();t&&(this.$root.user=t)}},k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar"),t._v(" "),n("section",{staticClass:"section"},[n("router-view")],1),t._v(" "),t._m(0)],1)},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer"},[n("div",{staticClass:"container"},[n("div",{staticClass:"content has-text-centered"},[n("p",[n("strong",[t._v("Tweeter")]),t._v(" by Ironhack WebDev Cohort (c) 2018")])])])])}],$=!1,S=null,E=null,y=null,A=Object(d["a"])(w,k,x,$,S,E,y),O=A.exports,j=n("/ocq"),N={data:function(){return{secret:null}},methods:{getSecret:function(){var t=this;l.getSecret().then(function(e){t.secret=e})}}},I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("Can you get the secret?")]),t._v(" "),n("p",{staticClass:"content"},[n("button",{staticClass:"button is-success",on:{click:t.getSecret}},[t._v("Secret")]),t._v(" "),n("pre",[t._v(t._s(t.secret))])])])},U=[],q=!1,B=null,M=null,P=null,z=Object(d["a"])(N,I,U,q,B,M,P),L=z.exports,D=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},H=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h1",[t._v("This is an about page")])])}],J=null,T=!1,W=null,X=null,F=null,R=Object(d["a"])(J,D,H,T,W,X,F),G=R.exports,K={data:function(){return{name:"",username:"",password:"",error:null}},methods:{signup:function(){var t=this;this.error=null,l.signup({name:this.name,username:this.username,password:this.password}).then(function(){t.$router.push("/login")}).catch(function(e){t.error=e})}},computed:{usernameError:function(){return this.error?"UserExistsError"===this.error.name?this.error.message:void 0:null}}},Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("form",{on:{submit:function(e){e.preventDefault(),t.signup(e)}}},[n("b-field",{attrs:{label:"Name"}},[n("b-input",{model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),n("b-field",{attrs:{label:"Username",type:t.usernameError&&"is-danger",message:t.usernameError}},[n("b-input",{attrs:{maxlength:"30",required:"",icon:"account"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),n("b-field",{attrs:{label:"Password"}},[n("b-input",{attrs:{type:"password",required:"",icon:"lock","password-reveal":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("button",{staticClass:"button is-primary"},[t._v("Signup")])],1)])},V=[],Y=!1,Z=null,tt=null,et=null,nt=Object(d["a"])(K,Q,V,Y,Z,tt,et),rt=nt.exports,at={data:function(){return{username:"",password:"",error:null}},methods:{login:function(){var t=this;this.error=null,l.login(this.username,this.password).then(function(e){t.$root.user=e,t.$router.push("/")}).catch(function(e){t.error=e})}}},st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[t.error?n("b-notification",{attrs:{type:"is-danger","has-icon":""}},[t._v("\n    "+t._s(t.error.error)+"\n  ")]):t._e(),t._v(" "),n("form",{on:{submit:function(e){e.preventDefault(),t.login(e)}}},[n("b-field",{attrs:{label:"Username"}},[n("b-input",{attrs:{maxlength:"30",required:"",icon:"account"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),n("b-field",{attrs:{label:"Password"}},[n("b-input",{attrs:{type:"password",required:"",icon:"lock","password-reveal":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),n("button",{staticClass:"button is-primary"},[t._v("Login")])],1)],1)},ot=[],it=!1,ct=null,ut=null,lt=null,vt=Object(d["a"])(at,st,ot,it,ct,ut,lt),pt=vt.exports;r["a"].use(j["a"]);var mt=new j["a"]({mode:"history",routes:[{path:"/",name:"home",component:L},{path:"/about",name:"about",component:G},{path:"/signup",component:rt},{path:"/login",component:pt}]});r["a"].use(s.a),r["a"].config.productionTip=!1,new r["a"]({router:mt,data:{user:null},render:function(t){return t(O)}}).$mount("#app")},doPI:function(t,e){}},[0]);
//# sourceMappingURL=app.5364e751.js.map