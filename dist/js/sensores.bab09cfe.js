(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["sensores"],{"3c11":function(t,e,i){t.exports=i.p+"img/sensores-null.1644ff95.svg"},"4d05":function(t,e,i){"use strict";i("5042")},5042:function(t,e,i){},bb48:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"a",(function(){return n}));var s=i("bc3a"),a=i.n(s);const o=a.a.create({baseURL:"https://servicodados.ibge.gov.br/api/v1"});function r(t){return o.get(`/localidades/estados/${t}/municipios?orderBy=nome`)}function n(){return o.get("/localidades/estados?orderBy=nome")}},f23f:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t._self._c;return e("main",[e("div",{staticClass:"container is-fluid"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 mt-5"},[t._m(0),e("h1",{staticClass:"is-size-6 is-uppercase has-text-weight-light pb-2 mt-2 center"},[t._v(" AQUI VOCÊ PODE FILTRAR PELOS SENSORES DESEJADOS. ")]),e("div",{staticClass:"mt-5 ml-3"},[e("b-field",{attrs:{label:"Propriedade"}},[e("b-input",{attrs:{placeholder:"Identificação do sensor",rounded:"",icon:"barn"},model:{value:t.property,callback:function(e){t.property=e},expression:"property"}})],1),e("b-field",{attrs:{label:"Estado"}},[e("b-select",{attrs:{placeholder:"Selecione o estado",expanded:"",rounded:"",icon:"home-group"},on:{input:t.loadMunicipios},model:{value:t.state,callback:function(e){t.state=e},expression:"state"}},t._l(t.estados,(function(i){return e("option",{key:i.id,domProps:{value:i.sigla}},[t._v(t._s(i.nome)+" ")])})),0)],1),e("b-field",{attrs:{label:"Cidade"}},[e("b-select",{attrs:{placeholder:"Selecione a cidade",expanded:"",rounded:"",icon:"city",disabled:!t.state},model:{value:t.city,callback:function(e){t.city=e},expression:"city"}},[t.state?t._l(t.municipios,(function(i){return e("option",{key:i.id,domProps:{value:i.nome}},[t._v(t._s(i.nome)+" ")])})):e("option",{attrs:{value:""}},[t._v("Selecione o estado primeiro ")])],2)],1),e("b-field",{attrs:{label:"Produção"}},[e("b-select",{attrs:{placeholder:"Tipo de produção",expanded:"",rounded:"",icon:"sprout"},model:{value:t.typeProduction,callback:function(e){t.typeProduction=e},expression:"typeProduction"}},[e("option",{attrs:{value:"Arroz"}},[t._v("Arroz")]),e("option",{attrs:{value:"Milho"}},[t._v("Milho em grão")]),e("option",{attrs:{value:"Soja"}},[t._v("Soja")]),e("option",{attrs:{value:"Cana-de-açúcar"}},[t._v("Cana-de-açúcar")]),e("option",{attrs:{value:"Café"}},[t._v("Café")]),e("option",{attrs:{value:"Algodão"}},[t._v("Algodão herbáceo")]),e("option",{attrs:{value:"Mandioca"}},[t._v("Mandioca")]),e("option",{attrs:{value:"Laranja"}},[t._v("Laranja")]),e("option",{attrs:{value:"Trigo"}},[t._v("Trigo")]),e("option",{attrs:{value:"Banana"}},[t._v("Banana")]),e("option",{attrs:{value:"Outros"}},[t._v("Outros")])])],1),e("b-field",{attrs:{label:"Status"}},[e("b-select",{attrs:{placeholder:"Selecione o status",expanded:"",rounded:"",icon:"sort"},model:{value:t.isActive,callback:function(e){t.isActive=e},expression:"isActive"}},[e("option",{attrs:{value:"0"}},[t._v("Inativo")]),e("option",{attrs:{value:"2"}},[t._v("Em Andamento")]),e("option",{attrs:{value:"1"}},[t._v("Ativo")])])],1),e("div",{staticClass:"buttons is-justify-content-right"},[e("b-button",{attrs:{type:"is-primary"},on:{click:t.clearFilter}},[t._v(" Limpar "),e("b-icon",{staticClass:"ml-1",attrs:{icon:"filter-remove-outline",size:"is-small"}})],1)],1)],1)]),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"col-md-12 mt-3"},[e("b-pagination",{staticClass:"mr-3",attrs:{total:t.total,"range-before":t.rangeBefore,"range-after":t.rangeAfter,order:t.order,size:t.size,simple:t.isSimple,rounded:t.isRounded,"per-page":t.perPage,"icon-prev":t.prevIcon,"icon-next":t.nextIcon,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page","page-input":t.hasInput,"page-input-position":t.inputPosition,"debounce-page-input":t.inputDebounce},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}})],1),t.filteredItems?e("div",{staticClass:"col-md-12 mt-5"},[e("div",{staticClass:"row"},t._l(t.filteredItems,(function(i){return e("div",{key:i.id,staticClass:"card col-md-4"},[e("div",{staticClass:"card-header mt-2"},[e("p",{staticClass:"center is-uppercase has-text-weight-bold"},[t._v(t._s(i.property))])]),e("div",{staticClass:"card-content mt-3"},[e("h1",{staticClass:"is-size-5"},[t._v(t._s(i.lowDescription))]),e("div",[e("p",[t._v(t._s(i.city)+", "+t._s(i.state))]),e("p",[t._v("Área: "+t._s(i.area)+"ha")]),e("p",[t._v("Tipo: "+t._s(i.typeProduction))]),e("p",[t._v("Status: "),0==i.isActive?e("b-icon",{attrs:{icon:"access-point-remove",type:"is-danger"}}):1==i.isActive?e("b-icon",{attrs:{icon:"access-point-check",type:"is-success"}}):e("b-icon",{attrs:{icon:"access-point-off",type:"is-warning"}})],1)]),e("b-button",{staticClass:"info-button mt-2",attrs:{type:"is-primary",tag:"router-link",to:{path:"/detalhes/"+i.id}}},[t._v(" Informações ")]),e("p",{staticClass:"is-size-7 is-uppercase has-text-weight-light mb-1 mt-4"},[t._v("Atualizado em: "+t._s(i.updated_at.substr(0,19)))])],1)])})),0)]):e("div",{staticClass:"col-md-12 mt-5"},[t._m(1)]),e("div",{staticClass:"col-md-12 mt-5"},[e("b-pagination",{staticClass:"mr-3",attrs:{total:t.total,"range-before":t.rangeBefore,"range-after":t.rangeAfter,order:t.order,size:t.size,simple:t.isSimple,rounded:t.isRounded,"per-page":t.perPage,"icon-prev":t.prevIcon,"icon-next":t.nextIcon,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page","page-input":t.hasInput,"page-input-position":t.inputPosition,"debounce-page-input":t.inputDebounce},model:{value:t.current,callback:function(e){t.current=e},expression:"current"}})],1)])])])])},a=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"center"},[e("h1",{staticClass:"is-size-4 is-uppercase has-text-weight-light"},[e("b",[t._v("Sensores Públicos")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"center imagem"},[e("img",{attrs:{src:i("3c11")}}),e("h1",{staticClass:"is-size-5 center is-uppercase has-text-weight-light"},[t._v("Nenhum sensor disponível!")])])}],o=i("7424"),r=i("bb48"),n={data(){return{sensoresData:[],total:200,current:1,perPage:10,rangeBefore:3,rangeAfter:1,order:"",size:"",isSimple:!1,isRounded:!1,hasInput:!1,prevIcon:"chevron-left",nextIcon:"chevron-right",inputPosition:"",inputDebounce:"",property:"",state:null,city:null,estados:[],municipios:[],isActive:null,typeProduction:null}},mounted(){Object(r["a"])().then(t=>{this.estados=t.data}),this.loadSensores()},computed:{filteredItems(){if(null===this.sensoresData)return null;let t=[];return t=this.sensoresData.filter(t=>t.property.toLowerCase().indexOf(this.property.toLowerCase())>-1),t=t.filter(t=>null==this.state?t:t.state===this.state),t=t.filter(t=>null==this.city?t:t.city===this.city),t=t.filter(t=>null==this.typeProduction?t:t.typeProduction===this.typeProduction),t=t.filter(t=>null==this.isActive?t:t.isActive==this.isActive),t}},methods:{loadMunicipios(){return this.state?Object(r["b"])(this.state).then(t=>this.municipios=t.data):[]},loadSensores(){return Object(o["l"])().then(t=>{this.sensoresData=t.data}).catch(()=>{this.sensoresData=[]})},clearFilter(){this.property="",this.state=null,this.city=null,this.isActive=null,this.typeProduction=null}}},l=n,c=(i("4d05"),i("2877")),u=Object(c["a"])(l,s,a,!1,null,"b460e068",null);e["default"]=u.exports}}]);
//# sourceMappingURL=sensores.bab09cfe.js.map