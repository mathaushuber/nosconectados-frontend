(function(e){function t(t){for(var r,o,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(s,o)&&s[o]&&d.push(s[o][0]),s[o]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var i=n[o];0!==s[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},s={app:0},a=[];function i(e){return u.p+"js/"+({"about~edit":"about~edit",about:"about",edit:"edit",administrador:"administrador","meus-sensores":"meus-sensores",sensores:"sensores"}[e]||e)+"."+{"about~edit":"8f58fce5",about:"63dfced4",edit:"d2c29cf5",administrador:"784ad779","meus-sensores":"f0f5a57a",sensores:"f4b2f756"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={about:1,edit:1,administrador:1,"meus-sensores":1,sensores:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({"about~edit":"about~edit",about:"about",edit:"edit",administrador:"administrador","meus-sensores":"meus-sensores",sensores:"sensores"}[e]||e)+"."+{"about~edit":"31d6cfe0",about:"065ab391",edit:"67082c83",administrador:"d56faca8","meus-sensores":"ec9a4f6b",sensores:"b9c8157c"}[e]+".css",s=u.p+r,a=document.getElementsByTagName("link"),i=0;i<a.length;i++){var c=a[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===s))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===r||l===s)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||s,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],f.parentNode.removeChild(f),n(a)},f.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){o[e]=0})));var r=s[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=s[e]=[t,n]}));t.push(r[2]=a);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=s[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}s[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"46ab":function(e,t,n){e.exports=n.p+"img/nosconectados.77fcba0b.svg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("div",{attrs:{id:"app"}}),n("b-navbar",{staticClass:"navbar-pesthand",scopedSlots:e._u([{key:"brand",fn:function(){return[e.user.id?n("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/dashboard"}}},[n("span",{staticClass:"pesthand-logo"},[e._v("NOSCONECTADOS")])]):n("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[n("span",{staticClass:"pesthand-logo"},[e._v("NOSCONECTADOS")])])]},proxy:!0},e.user.id?{key:"start",fn:function(){return[n("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/sobre"}}},[e._v(" INFORMAÇÕES SOBRE ")]),n("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/help"}}},[e._v(" AJUDA ")]),n("b-dropdown",{attrs:{position:"is-bottom-left","append-to-body":"","aria-role":"menu"},scopedSlots:e._u([{key:"trigger",fn:function(){return[n("a",{staticClass:"navbar-item",attrs:{role:"button"}},[n("span",[e._v("PAINEL")]),n("b-icon",{attrs:{icon:"menu-down"}})],1)]},proxy:!0}])},[n("b-dropdown-item",{attrs:{"has-link":"","aria-role":"menuitem"}},[n("router-link",{attrs:{to:"/create-sensor"}},[n("b-icon",{attrs:{icon:"plus-thick"}}),e._v(" Criar Sensor ")],1)],1),n("b-dropdown-item",{attrs:{"has-link":"","aria-role":"menuitem"}},[n("router-link",{attrs:{to:"/edit-perfil"}},[n("b-icon",{attrs:{icon:"account-edit"}}),e._v(" Editar Perfil ")],1)],1),n("b-dropdown-item",{attrs:{value:"products","aria-role":"menuitem"}},[n("b-icon",{attrs:{icon:"access-point-minus"}}),e._v(" Solicitações Enviadas ")],1),n("b-dropdown-item",{attrs:{"has-link":"",value:"blog","aria-role":"menuitem"}},[n("router-link",{attrs:{to:"/meus-sensores"}},[n("b-icon",{attrs:{icon:"lan"}}),e._v(" Meus Sensores ")],1)],1),n("hr",{staticClass:"dropdown-divider",attrs:{"aria-role":"menuitem"}}),n("b-dropdown-item",{attrs:{"has-link":"","aria-role":"menuitem"}},[n("router-link",{attrs:{to:"/sensores"}},[n("b-icon",{attrs:{icon:"account-group"}}),e._v(" Sensores Públicos ")],1)],1),1===e.user.isAdmin?n("b-dropdown-item",{attrs:{"has-link":"","aria-role":"menuitem"}},[n("router-link",{attrs:{to:"/administrador"}},[n("b-icon",{attrs:{icon:"cog"}}),e._v(" Administrador ")],1)],1):e._e()],1)]},proxy:!0}:{key:"start",fn:function(){return[n("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/sobre"}}},[e._v(" INFORMAÇÕES SOBRE ")]),n("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/help"}}},[e._v(" AJUDA ")]),n("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/sensores"}}},[e._v(" SENSORES ")])]},proxy:!0},e.user.id?{key:"end",fn:function(){return[n("p",{staticClass:"mt-3 mr-2 p-log"},[e._v("Logado como "),n("b",[e._v(e._s(e.user.firstName)+" "+e._s(e.user.lastName))])]),n("b-tooltip",{attrs:{label:"Encerrar sessão",position:"is-left"}},[n("b-button",{staticClass:"mt-1 mr-3 button-logout",attrs:{label:"Logout",type:"is-dark"},on:{click:e.doLogout}})],1)]},proxy:!0}:{key:"end",fn:function(){return[n("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/registro"}}},[n("div",{staticClass:"buttons"},[n("a",{staticClass:"button is-primary"},[n("strong",[e._v("Registrar")])])])]),n("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[n("div",{staticClass:"buttons"},[n("a",{staticClass:"button is-primary"},[n("strong",[e._v("Entrar")])])])])]},proxy:!0}],null,!0)}),n("router-view")],1)},s=[],a=n("5530"),i=n("2f62"),u={name:"App",created:function(){if(!this.user.id){var e=window.sessionStorage.getItem("token");e&&this.loginUserByToken(e)}},computed:Object(a["a"])({},Object(i["c"])(["user"])),methods:Object(a["a"])(Object(a["a"])({},Object(i["b"])(["loginUserByToken","logout"])),{},{doLogout:function(){this.logout(),this.$router.push("/")}})},c=u,l=(n("5c0b"),n("2877")),d=Object(l["a"])(c,o,s,!1,null,null,null),f=d.exports,p=n("289d"),m=(n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("main",[n("div",{staticClass:"home is-flex is-justify-content-space-around"},[n("div",[n("div",{staticClass:"card"},[n("div",{staticClass:"card-content"},[n("div",{staticClass:"content"},[e._m(0),n("p",{staticClass:"mt-2 center"},[e._v("Plataforma integrada de soluções IoT")]),n("h2",{staticClass:"center"},[e._v("Login")]),n("b-field",{attrs:{label:"Email"}},[n("b-input",{attrs:{type:"email",placeholder:"usuario@nosconectados.com"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),n("b-field",{attrs:{label:"Senha"}},[n("b-input",{attrs:{type:"password","password-reveal":"",placeholder:"********"},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.login.apply(null,arguments)}},model:{value:e.user_password,callback:function(t){e.user_password=t},expression:"user_password"}})],1),n("div",{staticClass:"center mt-5"},[n("b-button",{staticClass:"center",attrs:{type:"is-primary"},on:{click:e.login}},[e._v("Entrar")]),n("b-button",{staticClass:"ml-4",attrs:{type:"is-primary-outline"},on:{click:e.loginFacebook}},[e._v("Entrar com Facebook "),n("b-icon",{staticClass:"ml-1 content has-text-centered",attrs:{icon:"facebook",type:"is-primary"}})],1)],1)],1)])])])])])},h=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"center"},[r("img",{attrs:{src:n("46ab"),width:"250",height:"150"}})])}],g=n("7424"),v={name:"Home",components:{},data:function(){return{email:"",user_password:"",testeStatus:{status:"Não foi possível fazer login, verifique seu email e senha!"}}},methods:Object(a["a"])(Object(a["a"])({},Object(i["b"])(["loginUser","loginUserByToken"])),{},{login:function(){var e=this;this.loginUser({email:this.email,user_password:this.user_password}).then((function(){e.$router.push("/dashboard")})).catch((function(){e.$buefy.toast.open({message:"Não foi possível realizar o login. Verifique seu email e senha!",type:"is-danger"})}))},loginFacebook:function(){var e=this;window.FB.login((function(t){console.log(t),"connected"==t.status&&(t.authResponse?Object(g["loginFacebook"])(t.authResponse.accessToken).then((function(t){e.loginUserByToken(t.data.token).then((function(){window.sessionStorage.setItem("token",t.data.token),e.$router.push("/dashboard")}))})):console.log("User cancelled login or did not fully authorize."))}),{scope:"email,public_profile"})}}),computed:Object(a["a"])({},Object(i["c"])(["user"])),watch:{user:function(e){e.id&&this.$router.push("/dashboard")}}},k=v,y=(n("8459"),Object(l["a"])(k,b,h,!1,null,"bda63aa0",null)),w=y.exports,_=n("1da1");n("96cf"),n("4e82");r["a"].use(i["a"]);var O=new i["a"].Store({state:{user:{},filters:{sex:null,size:null,specie:null},sort:null},mutations:{setUser:function(e,t){e.user=t},clearFilters:function(e){e.filters={sex:null,size:null,specie:null}},clearFiltersAndSort:function(e){e.filters={sex:null,size:null,specie:null},e.sort=null},setFiltersAndSort:function(e,t){e.sort=t.sort,e.filters=Object.assign({},e.filters,t.filters)},setFilters:function(e,t){e.filters=Object.assign({},e.filters,t)}},actions:{loginUser:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function n(){var r,o,s,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.dispatch,o=t.email,s=t.user_password,n.next=4,Object(g["m"])(o,s);case 4:a=n.sent.data.token,sessionStorage.setItem("token",a),r("loginUserByToken",a);case 7:case"end":return n.stop()}}),n)})))()},loginUserByToken:function(e,t){return Object(_["a"])(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,g["a"].defaults.headers.common["Authorization"]=t,n.next=4,Object(g["i"])();case 4:o=n.sent,r("setUser",o.data);case 6:case"end":return n.stop()}}),n)})))()},logout:function(e){return Object(_["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n=e.commit,delete g["a"].defaults.headers.common["Authorization"],sessionStorage.removeItem("token"),n("setUser",{});case 4:case"end":return t.stop()}}),t)})))()}},modules:{}});r["a"].use(m["a"]);var S=function(e,t,n){if(O.state.user.id)n();else{var r=window.sessionStorage.getItem("token");r?O.dispatch("loginUserByToken",r).then((function(){n()})).catch((function(){window.sessionStorage.removeItem("token"),n({path:"/"})})):n({path:"/"})}},C=[{path:"/",name:"Home",component:w},{path:"/dashboard",name:"Dashboard",beforeEnter:S,component:function(){return Promise.all([n.e("about~edit"),n.e("about")]).then(n.bind(null,"7277"))}},{path:"/registro",name:"Registro",component:function(){return Promise.all([n.e("about~edit"),n.e("about")]).then(n.bind(null,"1e7f"))}},{path:"/create-sensor",name:"CadastroSensor",beforeEnter:S,component:function(){return Promise.all([n.e("about~edit"),n.e("about")]).then(n.bind(null,"fe13"))}},{path:"/edit-perfil",name:"EditPerfil",beforeEnter:S,component:function(){return Promise.all([n.e("about~edit"),n.e("edit")]).then(n.bind(null,"fe57"))}},{path:"/help",name:"Help",component:function(){return Promise.all([n.e("about~edit"),n.e("about")]).then(n.bind(null,"c3ef"))}},{path:"/sobre",name:"About",component:function(){return Promise.all([n.e("about~edit"),n.e("about")]).then(n.bind(null,"f820"))}},{path:"/sensores",name:"Sensores",component:function(){return n.e("sensores").then(n.bind(null,"f23f"))}},{path:"/administrador",name:"Administrador",beforeEnter:S,component:function(){return n.e("administrador").then(n.bind(null,"3530"))}},{path:"/meus-sensores",name:"MeusSensores",beforeEnter:S,component:function(){return n.e("meus-sensores").then(n.bind(null,"f07c"))}},{path:"/detalhes/:sensorId",name:"Detalhes",props:!0,component:function(){return n.e("meus-sensores").then(n.bind(null,"4504"))}}],E=new m["a"]({routes:C,scrollBehavior:function(){return{x:0,y:0}}}),j=E,x=n("b6d0"),A=n("f9d5"),P=n.n(A),T=n("bc3a"),U=n.n(T),N=n("130e"),R=n("2699"),B=n("a40a"),F=n("4e2b");n("6cc5"),n("5abe"),n("4413"),n("fce9"),n("5363"),n("15f5");r["a"].use(p["a"]),r["a"].config.productionTip=!1,r["a"].use(x["a"]),r["a"].use(P.a),r["a"].use(N["a"],U.a),r["a"].component("l-map",R["a"]),r["a"].component("l-tile-layer",B["a"]),r["a"].component("l-marker",F["a"]),new r["a"]({router:j,store:O,render:function(e){return e(f)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},7424:function(e,t,n){"use strict";n.d(t,"m",(function(){return i})),n.d(t,"i",(function(){return u})),n.d(t,"j",(function(){return d})),n.d(t,"g",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"k",(function(){return f})),n.d(t,"b",(function(){return p})),n.d(t,"e",(function(){return m})),n.d(t,"c",(function(){return b})),n.d(t,"f",(function(){return h})),n.d(t,"d",(function(){return g}));var r=n("bc3a"),o=n.n(r),s="http://localhost:8000",a=o.a.create({baseURL:"".concat(s,"/api")});function i(e,t){return a.post("/login",{email:e,user_password:t})}function u(){return a.get("/user")}function c(){return a.get("/sensor")}function l(){return a.get("/v1/sensores/lista-geral")}function d(){return a.get("/v1/usuarios/lista")}function f(){return a.get("/v1/sensores/lista")}function p(){return a.get("/v1/sensores/lista/todos")}function m(){return a.get("/v1/informacoes-sensor/lista")}function b(){return a.get("/v1/atribuicao/lista")}function h(){return a.get("/v1/localizacoes-users/lista")}function g(e){return a.get("/v1/sensores/lista/geral/"+e)}t["a"]=a},8459:function(e,t,n){"use strict";n("a284")},"9c0c":function(e,t,n){},a284:function(e,t,n){},fce9:function(e,t,n){}});
//# sourceMappingURL=app.5420594c.js.map