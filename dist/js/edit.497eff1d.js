(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["edit"],{6963:function(t,e,a){},"9ce4":function(t,e,a){"use strict";a("6963")},fe57:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t._self._c;return e("main",{attrs:{id:t.isSwitchedCustom}},[e("div",{staticClass:"container pt-6 pb-4"},[e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-10 is-offset-1"},[e("div",{staticClass:"card mt-4"},[e("div",{staticClass:"card-content"},[e("div",{staticClass:"container"},[e("div",{staticClass:"is-flex is-flex-wrap-wrap is-justify-content-center mt-5 mb-6"},[e("div",{staticClass:"is-relative"},[e("div",{staticClass:"foto"},[t.imageData?e("b-button",{attrs:{type:"is-danger"},on:{click:t.removePhoto}},[e("b-icon",{attrs:{icon:"close"}})],1):t._e()],1),e("figure",{staticClass:"image"},[t.imageData?e("img",{staticClass:"img-avatar is-rounded",attrs:{src:t.imageData,alt:""}}):e("img",{staticClass:"img-avatar",attrs:{src:a("1195")}})])]),e("b-field",{staticClass:"has-text-centered",attrs:{label:"Foto Pessoal"}},[e("b-upload",{attrs:{accept:"image/png,  image/jpeg","drag-drop":""},model:{value:t.avatar,callback:function(e){t.avatar=e},expression:"avatar"}},[e("section",{staticClass:"section"},[e("div",{staticClass:"content has-text-centered"},[e("p",[e("b-icon",{attrs:{icon:"upload",size:"is-large"}})],1),e("p",[t._v("Arraste a foto aqui")])])])])],1)],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Nome"}},[e("b-input",{attrs:{placeholder:"Nome",value:t.userData.firstName,type:"text","validation-message":"Entre com um nome válido",pattern:"[A-ZA-z çâêîôûáéíóúàèìòùãẽĩõũ]*",minlength:"3",maxlength:"255"}})],1)],1),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Sobrenome"}},[e("b-input",{attrs:{placeholder:"Sobrenome",value:t.userData.lastName,type:"text","validation-message":"Entre com um nome válido",pattern:"[A-ZA-z çâêîôûáéíóúàèìòùãẽĩõũ]*",minlength:"3",maxlength:"255"}})],1)],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"CPF *"}},[e("b-input",{directives:[{name:"mask",rawName:"v-mask.raw",value:["###.###.###-##"],expression:"['###.###.###-##']",modifiers:{raw:!0}}],attrs:{disabled:"",type:"text",value:t.userData.document,placeholder:"CPF","validation-message":"Entre com um documento válido"}})],1)],1),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Gênero *"}},[e("b-select",{attrs:{value:t.userData.gender,placeholder:"Selecione o gênero",expanded:""}},[e("option",{attrs:{value:"M"}},[t._v("Masculino")]),e("option",{attrs:{value:"F"}},[t._v("Feminino")]),e("option",{attrs:{value:"N"}},[t._v("Outro")])])],1)],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Email *"}},[e("b-input",{attrs:{value:t.userData.email,placeholder:"Email",type:"email"}})],1),t.tagEmail&&0===t.userData.registerConfirmed?e("b-tag",{attrs:{"close-type":"is-danger",attached:"",closable:"","aria-close-label":"Close tag"},on:{close:function(e){t.tagEmail=!1}}},[t._v(" Você ainda não confirmou seu email! ")]):t._e()],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Perfil do Facebook"}},[e("b-input",{attrs:{value:t.userData.facebookProfile,placeholder:"URL",type:"url"}})],1)],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Data de Nascimento",grouped:""}},[e("b-datepicker",{ref:"datepicker",attrs:{expanded:"",placeholder:"Selecione uma data"},model:{value:t.selected,callback:function(e){t.selected=e},expression:"selected"}}),e("b-button",{attrs:{"icon-left":"calendar-today",type:"is-primary"},on:{click:function(e){return t.$refs.datepicker.toggle()}}})],1)],1),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Telefone"}},[e("b-input",{directives:[{name:"mask",rawName:"v-mask.raw",value:["(##) # ####-####"],expression:"['(##) # ####-####']",modifiers:{raw:!0}}],attrs:{value:t.userData.phone,type:"text",placeholder:"Fone","validation-message":"Entre com um telefone válido"}})],1)],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"CEP"}},[e("b-input",{directives:[{name:"mask",rawName:"v-mask",value:["#####-###"],expression:"['#####-###']"}],attrs:{type:"text",value:t.userData.zipcode,placeholder:"CEP","validation-message":"Entre com um CEP válido"}})],1)],1),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Bairro"}},[e("b-input",{attrs:{type:"text",value:t.userData.neighborhood,maxlength:"64",minlength:"3",placeholder:"Bairro"}})],1)],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column is-6"},[e("b-field",{attrs:{label:"Rua"}},[e("b-input",{attrs:{value:t.userData.street,type:"text",maxlength:"64",minlength:"3",placeholder:"Rua"}})],1)],1),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Número"}},[e("b-input",{attrs:{type:"text",maxlength:"64",minlength:"3",value:t.userData.numberU,placeholder:"Número","validation-message":"Entre com um número",pattern:"[0-9]*"}})],1)],1),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Complemento"}},[e("b-input",{attrs:{type:"text",maxlength:"64",minlength:"3",placeholder:"Complemento"}})],1)],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Estado"}},[e("b-select",{attrs:{placeholder:"Selecione o estado",expanded:""},on:{input:t.loadMunicipios},model:{value:t.estadoTemp,callback:function(e){t.estadoTemp=e},expression:"estadoTemp"}},t._l(t.estados,(function(a){return e("option",{key:a.id,domProps:{value:a.sigla}},[t._v(t._s(a.nome)+" ")])})),0)],1)],1),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Municipio"}},[e("b-select",{attrs:{placeholder:"Selecione o municipio",disabled:!t.estadoTemp,expanded:""}},[t.estadoTemp?t._l(t.municipios,(function(a){return e("option",{key:a.id,domProps:{value:a.nome}},[t._v(t._s(a.nome)+" ")])})):e("option",{attrs:{value:""}},[t._v("Selecione o estado primeiro ")])],2)],1)],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Senha"}},[e("password",{attrs:{maxlength:"60",secureLength:8},model:{value:t.passwordTemp,callback:function(e){t.passwordTemp=e},expression:"passwordTemp"}})],1)],1),e("div",{staticClass:"column"},[e("b-field",{attrs:{label:"Confirmação de senha",type:{"is-danger":!t.errors.passwordConfirmed},message:{"Senha diferente da inserida anteriormente":!t.errors.passwordConfirmed}}},[e("b-input",{attrs:{type:"password"},on:{input:function(e){t.errors.passwordConfirmed=t.passwordTemp==t.passwordConfirm}},model:{value:t.passwordConfirm,callback:function(e){t.passwordConfirm=e},expression:"passwordConfirm"}})],1)],1)]),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[e("div",{staticClass:"buttons is-justify-content-right"},[e("b-button",{attrs:{type:"is-success"}},[t._v(" Atualizar ")]),0==t.userData.isAdmin?e("b-button",{attrs:{type:"is-danger"}},[t._v(" Excluir ")]):t._e()],1)])])])])])])])])},i=[],l=a("3a60"),o=a("f20a"),r=a.n(o),n=a("bb48"),c=a("7424"),d={name:"Registro",components:{Password:r.a},directives:{mask(t,e){e.value?Object(l["mask"])(t,e):t.oninput=null}},data(){return{avatar:null,tagEmail:!0,isSwitchedCustom:"Light",imageData:null,errors:{passwordConfirmed:!0},userData:{},passwordConfirm:null,estados:[],estadoTemp:[],passwordTemp:null,municipios:[],selected:null}},mounted(){Object(n["a"])().then(t=>{this.estados=t.data,console.log(this.estados)}),this.loadUser()},methods:{loadUser(){return Object(c["n"])().then(t=>{this.userData=t.data}).catch(()=>{this.error=!0})},removePhoto(){return this.isEdit?this.imageData&&this.imageData.startsWith("http")?(this.avatar=null,this.imageData="",this.$buefy.toast.open({message:"Foto removida com sucesso!.",type:"is-primary"}),this.$buefy.toast.open({message:"Ocorreu um erro ao remover a foto.",type:"is-danger"}),Promise.reject()):(this.avatar=null,this.imageData="",Promise.resolve):(this.avatar=null,this.imageData="",Promise.resolve())},loadMunicipios(){return this.estadoTemp?Object(n["b"])(this.estadoTemp).then(t=>this.municipios=t.data):[]},deleteDropFile(){this.avatar=null},previewImage:function(){if(this.avatar){var t=new FileReader;t.onload=t=>{this.imageData=t.target.result},t.readAsDataURL(this.avatar)}}},watch:{avatar(t){t&&this.previewImage()},computed:{selectedString(){return this.selected?this.selected.toDateString():""}}}},m=d,u=(a("9ce4"),a("2877")),p=Object(u["a"])(m,s,i,!1,null,"0f7358d4",null);e["default"]=p.exports}}]);
//# sourceMappingURL=edit.497eff1d.js.map