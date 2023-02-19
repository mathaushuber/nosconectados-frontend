(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["edit-sensor"],{"3a60":function(t,e,a){(function(e,a){t.exports=a()})(0,(function(){return function(t){function e(s){if(a[s])return a[s].exports;var n=a[s]={i:s,l:!1,exports:{}};return t[s].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,s){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:s})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p=".",e(e.s=10)}([function(t,e){t.exports={"#":{pattern:/\d/},X:{pattern:/[0-9a-zA-Z]/},S:{pattern:/[a-zA-Z]/},A:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleUpperCase()}},a:{pattern:/[a-zA-Z]/,transform:function(t){return t.toLocaleLowerCase()}},"!":{escape:!0}}},function(t,e,a){"use strict";function s(t){var e=document.createEvent("Event");return e.initEvent(t,!0,!0),e}var n=a(2),i=a(0),o=a.n(i);e.a=function(t,e){var i=e.value;if((Array.isArray(i)||"string"==typeof i)&&(i={mask:i,tokens:o.a}),"INPUT"!==t.tagName.toLocaleUpperCase()){var r=t.getElementsByTagName("input");if(1!==r.length)throw new Error("v-mask directive requires 1 input, found "+r.length);t=r[0]}t.oninput=function(e){if(e.isTrusted){var o=t.selectionEnd,r=t.value[o-1];for(t.value=a.i(n.a)(t.value,i.mask,!0,i.tokens);o<t.value.length&&t.value.charAt(o-1)!==r;)o++;t===document.activeElement&&(t.setSelectionRange(o,o),setTimeout((function(){t.setSelectionRange(o,o)}),0)),t.dispatchEvent(s("input"))}};var l=a.i(n.a)(t.value,i.mask,!0,i.tokens);l!==t.value&&(t.value=l,t.dispatchEvent(s("input")))}},function(t,e,a){"use strict";var s=a(6),n=a(5);e.a=function(t,e){var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=arguments[3];return Array.isArray(e)?a.i(n.a)(s.a,e,o)(t,e,i,o):a.i(s.a)(t,e,i,o)}},function(t,e,a){"use strict";function s(t){t.component(l.a.name,l.a),t.directive("mask",o.a)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(0),i=a.n(n),o=a(1),r=a(7),l=a.n(r);a.d(e,"TheMask",(function(){return l.a})),a.d(e,"mask",(function(){return o.a})),a.d(e,"tokens",(function(){return i.a})),a.d(e,"version",(function(){return c}));var c="0.11.1";e.default=s,"undefined"!=typeof window&&window.Vue&&window.Vue.use(s)},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),n=a(0),i=a.n(n),o=a(2);e.default={name:"TheMask",props:{value:[String,Number],mask:{type:[String,Array],required:!0},masked:{type:Boolean,default:!1},tokens:{type:Object,default:function(){return i.a}}},directives:{mask:s.a},data:function(){return{lastValue:null,display:this.value}},watch:{value:function(t){t!==this.lastValue&&(this.display=t)},masked:function(){this.refresh(this.display)}},computed:{config:function(){return{mask:this.mask,tokens:this.tokens,masked:this.masked}}},methods:{onInput:function(t){t.isTrusted||this.refresh(t.target.value)},refresh:function(t){this.display=t;t=a.i(o.a)(t,this.mask,this.masked,this.tokens);t!==this.lastValue&&(this.lastValue=t,this.$emit("input",t))}}}},function(t,e,a){"use strict";function s(t,e,a){return e=e.sort((function(t,e){return t.length-e.length})),function(s,n){for(var i=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],o=0;o<e.length;){var r=e[o];o++;var l=e[o];if(!(l&&t(s,l,!0,a).length>r.length))return t(s,r,i,a)}return""}}e.a=s},function(t,e,a){"use strict";function s(t,e){var a=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],s=arguments[3];t=t||"",e=e||"";for(var n=0,i=0,o="";n<e.length&&i<t.length;){var r=e[n],l=s[r],c=t[i];l&&!l.escape?(l.pattern.test(c)&&(o+=l.transform?l.transform(c):c,n++),i++):(l&&l.escape&&(n++,r=e[n]),a&&(o+=r),c===r&&i++,n++)}for(var u="";n<e.length&&a;){r=e[n];if(s[r]){u="";break}u+=r,n++}return o+u}e.a=s},function(t,e,a){var s=a(8)(a(4),a(9),null,null);t.exports=s.exports},function(t,e){t.exports=function(t,e,a,s){var n,i=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(n=t,i=t.default);var r="function"==typeof i?i.options:i;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),a&&(r._scopeId=a),s){var l=r.computed||(r.computed={});Object.keys(s).forEach((function(t){var e=s[t];l[t]=function(){return e}}))}return{esModule:n,exports:i,options:r}}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("input",{directives:[{name:"mask",rawName:"v-mask",value:t.config,expression:"config"}],attrs:{type:"text"},domProps:{value:t.display},on:{input:t.onInput}})},staticRenderFns:[]}},function(t,e,a){t.exports=a(3)}])}))},"4b49":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("main",[e("div",{staticClass:"container pt-6 pb-4"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-10 is-offset-1"},[e("div",{staticClass:"card mt-4"},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Nome *"}},[e("b-input",{attrs:{placeholder:"Identificação da propriedade",type:"text","validation-message":"Entre com um nome válido",pattern:"[A-ZA-z çâêîôûáéíóúàèìòùãẽĩõũ 0-9]*",minlength:"3",maxlength:"255"},model:{value:t.sensorData.property,callback:function(e){t.$set(t.sensorData,"property",e)},expression:"sensorData.property"}})],1)],1),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Tipo de Produção *"}},[e("b-select",{attrs:{placeholder:"Selecione a produção",expanded:""},model:{value:t.sensorData.typeProduction,callback:function(e){t.$set(t.sensorData,"typeProduction",e)},expression:"sensorData.typeProduction"}},[e("option",{attrs:{value:"Arroz"}},[t._v("Arroz")]),e("option",{attrs:{value:"Milho"}},[t._v("Milho em grão")]),e("option",{attrs:{value:"Soja"}},[t._v("Soja")]),e("option",{attrs:{value:"Cana-de-açúcar"}},[t._v("Cana-de-açúcar")]),e("option",{attrs:{value:"Café"}},[t._v("Café")]),e("option",{attrs:{value:"Algodão"}},[t._v("Algodão herbáceo")]),e("option",{attrs:{value:"Mandioca"}},[t._v("Mandioca")]),e("option",{attrs:{value:"Laranja"}},[t._v("Laranja")]),e("option",{attrs:{value:"Trigo"}},[t._v("Trigo")]),e("option",{attrs:{value:"Banana"}},[t._v("Banana")]),e("option",{attrs:{value:"Outros"}},[t._v("Outros")])])],1)],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Descrição Breve *"}},[e("b-input",{attrs:{placeholder:"Descreva brevemente",type:"textarea","validation-message":"Entre com uma descrição válida",minlength:"3",maxlength:"255"},model:{value:t.sensorData.lowDescription,callback:function(e){t.$set(t.sensorData,"lowDescription",e)},expression:"sensorData.lowDescription"}})],1)],1),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Descrição Detalhada"}},[e("b-input",{attrs:{type:"textarea",placeholder:"Descreva detalhadamente","validation-message":"Entre com uma descrição válida",minlength:"0",maxlength:"500"},model:{value:t.sensorData.description,callback:function(e){t.$set(t.sensorData,"description",e)},expression:"sensorData.description"}})],1)],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Área *"}},[e("b-numberinput",{attrs:{min:"0",placeholder:"000.00",step:"0.01","aria-minus-label":"Decrement by 0.01","aria-plus-label":"Increment by 0.01",minlength:"0"},model:{value:t.sensorData.area,callback:function(e){t.$set(t.sensorData,"area",e)},expression:"sensorData.area"}})],1)],1),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Status *"}},[e("b-select",{attrs:{placeholder:"Selecione o status",expanded:""},model:{value:t.sensorData.isActive,callback:function(e){t.$set(t.sensorData,"isActive",e)},expression:"sensorData.isActive"}},[e("option",{attrs:{value:"0"}},[t._v("Inativo")]),e("option",{attrs:{value:"1"}},[t._v("Em Andamento")]),e("option",{attrs:{value:"2"}},[t._v("Ativo")])])],1)],1),e("div",{staticClass:"column"},[e("b-field",{attrs:{grouped:"",label:"Privacidade *"}},[e("b-radio-button",{attrs:{"native-value":"0",type:"is-danger"},model:{value:t.sensorData.isPublic,callback:function(e){t.$set(t.sensorData,"isPublic",e)},expression:"sensorData.isPublic"}},[e("b-icon",{attrs:{icon:"close"}}),e("span",[t._v("Privado")])],1),e("b-radio-button",{attrs:{"native-value":"1",type:"is-success"},model:{value:t.sensorData.isPublic,callback:function(e){t.$set(t.sensorData,"isPublic",e)},expression:"sensorData.isPublic"}},[e("b-icon",{attrs:{icon:"check"}}),e("span",[t._v("Público")])],1),e("b-radio-button",{attrs:{"native-value":"1",type:"is-info"},model:{value:t.sensorData.isPublic,callback:function(e){t.$set(t.sensorData,"isPublic",e)},expression:"sensorData.isPublic"}},[t._v(" Padrão ")])],1)],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Estado *"}},[e("b-select",{attrs:{placeholder:"Selecione o estado",expanded:""},on:{input:t.loadMunicipios},model:{value:t.sensorData.state,callback:function(e){t.$set(t.sensorData,"state",e)},expression:"sensorData.state"}},t._l(t.estados,(function(a){return e("option",{key:a.id,domProps:{value:a.sigla}},[t._v(t._s(a.nome)+" ")])})),0)],1)],1),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Municipio *"}},[e("b-select",{attrs:{placeholder:"Selecione o municipio",disabled:!t.sensorData.state,expanded:""},model:{value:t.sensorData.city,callback:function(e){t.$set(t.sensorData,"city",e)},expression:"sensorData.city"}},[t.sensorData.state?t._l(t.municipios,(function(a){return e("option",{key:a.id,domProps:{value:a.nome}},[t._v(t._s(a.nome)+" ")])})):e("option",{attrs:{value:""}},[t._v("Selecione o estado primeiro ")])],2)],1)],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Latitude"}},[e("b-input",{attrs:{type:"text",minlength:"3",maxlength:"12",pattern:"[0-9-.]*",placeholder:"00.00000000","validation-message":"Entre com uma latitude válida"},model:{value:t.sensorData.latitude,callback:function(e){t.$set(t.sensorData,"latitude",e)},expression:"sensorData.latitude"}})],1)],1),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Longitude"}},[e("b-input",{attrs:{type:"text",expanded:"","validation-message":"Entre com uma longitude válida",minlength:"3",maxlength:"12",pattern:"[0-9-.]*",placeholder:"00.00000000"},model:{value:t.sensorData.longitude,callback:function(e){t.$set(t.sensorData,"longitude",e)},expression:"sensorData.longitude"}}),e("b-button",{staticClass:"button is-primary",on:{click:t.getLocation}},[t._v("Localizar")])],1)],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Administrador"}},[e("b-taginput",{attrs:{data:t.filteredTags,type:"is-primary",autocomplete:"",field:"firstName",icon:"label",placeholder:"Adicionar administrador",maxtags:"1"},on:{typing:t.loadNomes},scopedSlots:t._u([{key:"empty",fn:function(){return[t._v(" There are no items ")]},proxy:!0}])})],1),e("pre",{staticStyle:{"max-height":"400px"}},[e("b",[t._v("Administradores:")]),t._v(t._s(t.administradores))])],1),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Patrocinadores"}},[e("b-taginput",{attrs:{data:t.filteredTags,type:"is-info",autocomplete:"",field:"firstName",icon:"label",placeholder:"Adicionar patrocinador",maxtags:"3"},on:{typing:t.loadNomes},scopedSlots:t._u([{key:"empty",fn:function(){return[t._v(" There are no items ")]},proxy:!0}])})],1),e("pre",{staticStyle:{"max-height":"400px"}},[e("b",[t._v("Patrocinadores:")]),t._v(t._s(t.patrocinadores))])],1),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Visualizadores"}},[e("b-taginput",{attrs:{data:t.filteredTags,type:"is-warning",autocomplete:"",field:"firstName",icon:"label",placeholder:"Adicionar visualizador",maxtags:"5"},on:{typing:t.loadNomes},scopedSlots:t._u([{key:"empty",fn:function(){return[t._v(" There are no items ")]},proxy:!0}])})],1),e("pre",{staticStyle:{"max-height":"400px"}},[e("b",[t._v("Visualizadores:")]),t._v(t._s(t.visualizadores))])],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"buttons is-justify-content-right"},[e("b-button",{attrs:{type:"is-success"},on:{click:t.doUpdate}},[t._v(" Atualizar ")])],1)])]),e("b-loading",{attrs:{"is-full-page":!0,"can-cancel":!1},model:{value:t.isLoading,callback:function(e){t.isLoading=e},expression:"isLoading"}})],1)])])])])])},n=[],i=(a("14d9"),a("3a60")),o=a("bb48"),r=a("7424"),l={props:["sensorId"],name:"CadastroSensor",directives:{mask(t,e){e.value?Object(i["mask"])(t,e):t.oninput=null}},data(){return{isLoading:!1,estados:[],municipios:[],filteredTags:[],selected:null,administradores:null,patrocinadores:null,visualizadores:null,sensorData:[],options:{enableHighAccuracy:!0,timeout:5e4,maximumAge:0}}},mounted(){this.loadSensor(),Object(o["a"])().then(t=>{this.estados=t.data}),this.loadNomes()},methods:{loadNomes(){return Object(r["j"])().then(t=>{this.filteredTags=t.data}).catch(()=>{this.filteredTags=[]})},loadSensor(){return Object(r["g"])(this.sensorId).then(t=>{this.sensorData=t.data}).catch(()=>{this.sensorData=[]})},loadMunicipios(){return this.sensorData.state?Object(o["b"])(this.sensorData.state).then(t=>this.municipios=t.data):[]},transformValue(t){let e={0:"Privado",1:"Público"};return e[t]},getLocation(){navigator.geolocation.getCurrentPosition(this.success,this.error,this.options)},success(t){const e=t.coords;this.sensorData.latitude=e.latitude,this.sensorData.longitude=e.longitude},error(t){console.warn(`ERROR(${t.code}): ${t.message}`)},doUpdate(){this.isLoading=!0;let t=new FormData;this.sensorData.property&&t.set("property",this.sensorData.property),this.sensorData.typeProduction&&t.set("typeProduction",this.sensorData.typeProduction),this.sensorData.lowDescription&&t.set("lowDescription",this.sensorData.lowDescription),this.sensorData.description&&t.set("description",this.sensorData.description),this.sensorData.area&&t.set("area",this.sensorData.area),this.sensorData.isActive&&t.set("isActive",this.sensorData.isActive),this.sensorData.isPublic&&t.set("isPublic",this.sensorData.isPublic),this.sensorData.state&&t.set("state",this.sensorData.state),this.sensorData.city&&t.set("city",this.sensorData.city),this.sensorData.latitude&&t.set("latitude",this.sensorData.latitude),this.sensorData.longitude&&t.set("longitude",this.sensorData.longitude),null!==this.administradores&&t.set("administradores",this.administradores),null!==this.patrocinadores&&t.set("patrocinadores",this.patrocinadores),null!==this.visualizadores&&t.set("visualizadores",this.visualizadores),Object(r["y"])(t,this.sensorId).then(()=>{this.isLoading=!1,this.$router.push("/dashboard"),this.$buefy.toast.open({message:"Sensor atualizado com sucesso na plataforma!",type:"is-success"})}).catch(()=>{this.isLoading=!1,this.$buefy.toast.open({message:"Ocorreu um erro ao atualizar o sensor, por favor cheque os campos!",type:"is-danger"})})}},watch:{computed:{selectedString(){return this.selected?this.selected.toDateString():""}}}},c=l,u=(a("af30"),a("2877")),d=Object(u["a"])(c,s,n,!1,null,"20e8b241",null);e["default"]=d.exports},"8f58":function(t,e,a){},af30:function(t,e,a){"use strict";a("8f58")},bb48:function(t,e,a){"use strict";a.d(e,"b",(function(){return o})),a.d(e,"a",(function(){return r}));var s=a("bc3a"),n=a.n(s);const i=n.a.create({baseURL:"https://servicodados.ibge.gov.br/api/v1"});function o(t){return i.get(`/localidades/estados/${t}/municipios?orderBy=nome`)}function r(){return i.get("/localidades/estados?orderBy=nome")}}}]);
//# sourceMappingURL=edit-sensor.26db6c51.js.map