(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["administrador"],{3530:function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t._self._c;return s("main",[s("div",{staticClass:"columns"},[s("div",{staticClass:"column is-one-quarter"},[t._m(0),s("b-menu",[s("b-menu-list",{attrs:{label:"Menu"}},[s("b-menu-item",{attrs:{icon:"information-outline",label:"Info"},on:{click:t.info}}),s("b-menu-item",{attrs:{icon:"cog",active:t.isActive,expanded:""},scopedSlots:t._u([{key:"label",fn:function(a){return[t._v(" Administrador "),s("b-icon",{staticClass:"is-pulled-right",attrs:{icon:a.expanded?"menu-up":"menu-down"}})]}}])},[s("b-menu-item",{attrs:{icon:"account-multiple",label:"Usuários"},on:{click:t.users}}),s("b-menu-item",{attrs:{icon:"cellphone-link",label:"Sensores"},on:{click:t.sensoresAll}}),s("b-menu-item",{attrs:{icon:"chart-bell-curve",label:"Dados"},on:{click:t.dados}}),s("b-menu-item",{attrs:{icon:"gesture-spread",label:"Atribuições"},on:{click:t.atrib}}),s("b-menu-item",{attrs:{icon:"card-search",label:"Informações"},on:{click:t.information}}),s("b-menu-item",{attrs:{icon:"map-marker-distance",label:"Localização"},on:{click:t.local}}),s("b-menu-item",{attrs:{icon:"image-multiple",label:"Imagens",disabled:""}})],1),s("b-menu-item",{attrs:{icon:"account",label:"Minha conta"},on:{click:t.account}})],1),s("b-menu-list",[s("b-menu-item",{attrs:{label:"Exportar",icon:"link"},on:{click:t.download}})],1),s("b-menu-list",{attrs:{label:"Actions"}},[s("b-menu-item",{attrs:{label:"Logout"},on:{click:t.doLogout}})],1)],1)],1),1==t.activeUsers?s("div",{staticClass:"column"},[s("div",{staticClass:"columns"},t._l(t.usuarios,(function(a){return s("div",{key:a.id,staticClass:"column is-one-third mt-3 ml-1"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[t._m(1,!0),s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(t._s(a.firstName)+" "+t._s(a.lastName))]),s("p",{staticClass:"subtitle is-6"},[t._v(t._s(a.email))])])]),s("div",{staticClass:"content"},[s("p",[t._v("CPF: "+t._s(a.document)+" Telefone: "+t._s(a.phone))]),1===a.isAdmin?s("b-tag",{attrs:{type:"is-success",icon:"account-check"}},[t._v("Administrador")]):t._e(),"M"===a.gender?s("b-icon",{attrs:{icon:"gender-male"}}):s("b-icon",{attrs:{icon:"gender-female"}}),s("br"),s("div",{staticClass:"buttons"},[s("p",{staticClass:"mt-2"},[t._v("Criado em: "+t._s(a.created_at))]),1!==a.isAdmin?s("b-button",{staticClass:"ml-3",attrs:{type:"is-danger","icon-right":"delete"}}):t._e()],1)],1)])])])})),0)]):t._e(),1==t.activeDataSensores?s("div",{staticClass:"column"},[s("div",{staticClass:"columns"},t._l(t.sensores,(function(a){return s("div",{key:a.id,staticClass:"column is-one-third mt-3 ml-1"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"}),s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v("ID: "+t._s(a.id)+" ")])])]),s("div",{staticClass:"content"},[t._v(" TemperatureSoil: "+t._s(a.temperatureSoil)+" Luminosity: "+t._s(a.luminosity)+" TemperatureAir: "+t._s(a.temperatureAir)+" Pluviometer: "+t._s(a.pluviometer)+" TemperatureCase: "+t._s(a.temperatureCase)+" gas: "+t._s(a.gas)+" Altitude: "+t._s(a.altitude)+" Pressure: "+t._s(a.pressure)+" Ultraviolet: "+t._s(a.ultraviolet)+" rainIntensity: "+t._s(a.rainIntensity)+" WindSpeed: "+t._s(a.windSpeed)+" WindDirection: "+t._s(a.windDirection)+" HumidityAirRelative: "+t._s(a.humidityAirRelative)+" "),s("br"),s("div",{staticClass:"buttons"},[s("p",{staticClass:"mt-2"},[t._v("Criado em: "+t._s(a.created_at)+" ")]),s("b-button",{staticClass:"ml-3",attrs:{type:"is-danger","icon-right":"delete"}})],1)])])])])})),0)]):t._e(),1==t.activeSensores?s("div",{staticClass:"column"},[s("div",{staticClass:"columns"},t._l(t.sensorData,(function(a){return s("div",{key:a.id,staticClass:"column is-one-third mt-3 ml-1"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"}),s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(t._s(a.property)+" - ID: "+t._s(a.id)+" ")]),s("p",{staticClass:"subtitle is-6"},[t._v(t._s(a.lowDescription)+" ")]),s("p",[t._v(t._s(a.city)+", "+t._s(a.state))]),1===a.isPublic?s("p",[t._v("Público: "),s("b-icon",{attrs:{icon:"check",type:"is-success"}})],1):s("p",[t._v("Público: "),s("b-icon",{attrs:{icon:"remove",type:"is-danger"}})],1),s("p",[t._v("Status: "),0==a.isActive?s("b-icon",{attrs:{icon:"access-point-remove",type:"is-danger"}}):1==a.isActive?s("b-icon",{attrs:{icon:"access-point-check",type:"is-success"}}):s("b-icon",{attrs:{icon:"access-point-off",type:"is-warning"}})],1),s("p",[t._v("Altitude: "+t._s(a.altitude)+" Pressão: "+t._s(a.pressure))]),s("p",[t._v("Temperatura do ar: "+t._s(a.temperatureAir))])])]),s("div",{staticClass:"content"},[s("br"),s("div",{staticClass:"buttons"},[s("p",{staticClass:"mt-2"},[t._v("Criado em: "+t._s(a.created_at)+" ")]),s("b-button",{staticClass:"ml-3",attrs:{type:"is-danger","icon-right":"delete"}})],1)])])])])})),0)]):t._e(),1==t.activeInformation?s("div",{staticClass:"column"},[s("div",{staticClass:"columns"},t._l(t.informationData,(function(a){return s("div",{key:a.id,staticClass:"column is-one-third mt-3 ml-1"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"}),s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v(" "+t._s(a.property)+" ID: "+t._s(a.id))]),s("p",{staticClass:"subtitle is-6"},[t._v(t._s(a.lowDescription)+" ")]),s("p",[t._v(t._s(a.city)+", "+t._s(a.state))]),s("p",[t._v("Latitude "+t._s(a.latitude)+" Longitude: "+t._s(a.longitude))]),s("p",[t._v("Referência(id): "+t._s(a.idSensor)+" Produção: "+t._s(a.typeProduction))]),1===a.isPublic?s("p",[t._v("Público: "),s("b-icon",{attrs:{icon:"check",type:"is-success"}})],1):s("p",[t._v("Público: "),s("b-icon",{attrs:{icon:"remove",type:"is-danger"}})],1),s("p",[t._v("Status: "),0==a.isActive?s("b-icon",{attrs:{icon:"access-point-remove",type:"is-danger"}}):1==a.isActive?s("b-icon",{attrs:{icon:"access-point-check",type:"is-success"}}):s("b-icon",{attrs:{icon:"access-point-off",type:"is-warning"}})],1),s("p",[t._v(" Área: "+t._s(a.area))]),s("br"),s("p",[t._v(t._s(a.description))])])]),s("div",{staticClass:"content"},[s("br"),s("div",{staticClass:"buttons"},[s("p",{staticClass:"mt-2"},[t._v("Criado em: "+t._s(a.created_at)+" ")]),s("b-button",{staticClass:"ml-3",attrs:{type:"is-danger","icon-right":"delete"}})],1)])])])])})),0)]):t._e(),1==t.activeAtribuicao?s("div",{staticClass:"column"},[s("div",{staticClass:"columns"},t._l(t.atribuicao,(function(a){return s("div",{key:a.id,staticClass:"column is-one-third mt-3 ml-1"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"}),s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v("ID: "+t._s(a.id))]),s("p",[t._v("idInfoSensor: "+t._s(a.idInfoSensor))]),s("p",[t._v("idUsuario: "+t._s(a.idUsuario))]),2===a.isAdminSensor?s("b-tag",{attrs:{type:"is-success"}},[t._v("Administrador")]):t._e(),1===a.isAdminSensor?s("b-tag",{attrs:{type:"is-info"}},[t._v("Patrocinador")]):t._e(),0===a.isAdminSensor?s("b-tag",[t._v("Visualizador")]):t._e()],1)]),s("div",{staticClass:"content"},[s("br"),s("div",{staticClass:"buttons"},[s("p",{staticClass:"mt-2"},[t._v("Criado em: "+t._s(a.created_at)+" ")]),s("b-button",{staticClass:"ml-3",attrs:{type:"is-danger","icon-right":"delete"}})],1)])])])])})),0)]):t._e(),1==t.activeLocalizacao?s("div",{staticClass:"column"},[s("div",{staticClass:"columns"},t._l(t.localizacoesData,(function(a){return s("div",{key:a.id,staticClass:"column is-one-third mt-3 ml-1"},[s("div",{staticClass:"card"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"}),s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-4"},[t._v("ID: "+t._s(a.id))]),s("p",{staticClass:"subtitle is-6"},[t._v("Usuário: "+t._s(a.idUser)+" ")]),s("p",[t._v("Endereço: "+t._s(a.street)+" "+t._s(a.numberU)+" "+t._s(a.complement))]),s("p",[t._v(t._s(a.city)+", "+t._s(a.state))]),s("p",[t._v("CEP: "+t._s(a.zipcode))]),s("p",[t._v("Bairro: "+t._s(a.neighborhood))])])]),s("div",{staticClass:"content"},[s("br"),s("div",{staticClass:"buttons"},[s("p",{staticClass:"mt-2"},[t._v("Criado em: "+t._s(a.created_at)+" ")]),s("b-button",{staticClass:"ml-3",attrs:{type:"is-danger","icon-right":"delete"}})],1)])])])])})),0)]):t._e(),1==t.activeCardInfo?s("div",{staticClass:"column"},[s("div",{staticClass:"card mt-3"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-center center"},[s("p",{staticClass:"title is-4 is-uppercase"},[t._v("Painel do Administrador")]),s("p",{staticClass:"subtitle is-7 is-uppercase"},[t._v("Configure as informações da plataforma")]),s("div",{staticClass:"columns mt-4"},[s("div",{staticClass:"column"},[s("div",{staticClass:"usuarios"},[s("h1",{staticClass:"is-uppercase has-text-weight-bold"},[t._v("Usuários")]),s("p",{staticClass:"number"},[t._v(t._s(t.usuarios.length))])])]),s("div",{staticClass:"column"},[s("div",{staticClass:"sensores mt-3"},[s("h1",{staticClass:"is-uppercase has-text-weight-bold"},[t._v("Sensores")]),s("p",{staticClass:"number"},[t._v(t._s(t.sensores.length))])])])]),s("div",{staticClass:"columns mt-5"},[s("div",{staticClass:"column"},[s("b-message",{attrs:{title:"Exportação dos dados","aria-close-label":"Close message"}},[t._v(' Para exportar os dados do banco de dados da aplicação basta clicar no item do menu "Exportar"! Será gerado um arquivo .json com todas as informações atualizadas das tabelas. ')])],1),s("div",{staticClass:"column"},[s("b-message",{attrs:{title:"Gerenciando os dados","aria-close-label":"Close message"}},[t._v(' Pelo painel do administrador é possível gerenciar todos os dados do banco de dados, sem a necessidade de utilizar comandos SQL via linha de comando. Basta clicar no item "Administrador"! ')])],1)]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("b-message",{attrs:{title:"Minha conta","aria-close-label":"Close message"}},[t._v(" Como administrador só é possível remover sua conta diretamente no painel, as informações de perfil somente podem editá-las. Não é possível remover outros administradores por aqui! ")])],1),s("div",{staticClass:"column"},[s("b-message",{attrs:{type:"is-warning",title:"Atenção!","aria-close-label":"Close message"}},[t._v(" Tome cuidado ao apagar informações relevantes para a plataforma, atenção ao remover chaves estrangeiras nas tabelas referenciadas, todas as ações aqui requerem cautela! ")])],1)])])])])])]):t._e(),1==t.activeAccount?s("div",{staticClass:"column"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("div",{staticClass:"card mt-3"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-left"}),s("div",{staticClass:"media-content center"},[s("p",{staticClass:"title is-4"},[t._v(t._s(t.userData.firstName)+" "+t._s(t.userData.lastName))]),s("p",{staticClass:"subtitle is-6"},[t._v(t._s(t.userData.email))])])]),s("div",{staticClass:"content"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("b-field",{attrs:{label:"ID"}},[s("b-input",{attrs:{disabled:"",value:t.userData.id}})],1)],1),s("div",{staticClass:"column"},[s("b-field",{attrs:{label:"Telefone"}},[s("b-input",{attrs:{disabled:"",value:t.userData.phone}})],1)],1),s("div",{staticClass:"column"},[s("b-field",{attrs:{label:"CPF"}},[s("b-input",{attrs:{disabled:"",value:t.userData.document}})],1)],1)]),s("div",{staticClass:"column"},[s("b-field",{attrs:{label:"Perfil do Facebook"}},[s("b-input",{attrs:{disabled:"",value:t.userData.facebookProfile}})],1)],1),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("b-field",{attrs:{label:"Estado"}},[s("b-input",{attrs:{disabled:"",value:t.userData.state}})],1)],1),s("div",{staticClass:"column"},[s("b-field",{attrs:{label:"Cidade"}},[s("b-input",{attrs:{disabled:"",value:t.userData.city}})],1)],1)]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("b-field",{attrs:{label:"Rua"}},[s("b-input",{attrs:{disabled:"",value:t.userData.street}})],1)],1),s("div",{staticClass:"column"},[s("b-field",{attrs:{label:"Número"}},[s("b-input",{attrs:{disabled:"",value:t.userData.numberU}})],1)],1)]),s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[s("b-field",{attrs:{label:"Bairro"}},[s("b-input",{attrs:{disabled:"",value:t.userData.neighborhood}})],1)],1),s("div",{staticClass:"column"},[s("b-field",{attrs:{label:"Complemento"}},[s("b-input",{attrs:{disabled:"",value:t.userData.complement}})],1)],1),s("div",{staticClass:"column"},[s("b-field",{attrs:{label:"CEP"}},[s("b-input",{attrs:{disabled:"",value:t.userData.zipcode}})],1)],1)]),s("br"),s("p",{staticClass:"is-size-7 center is-uppercase has-text-weight-light mt-2"},[t._v("Criado em: "+t._s(t.userData.created_at_user)+" ")]),s("div",{staticClass:"buttons"},[s("div",{staticClass:"buttons"},[s("b-button",{staticClass:"ml-3",attrs:{type:"is-danger","icon-right":"delete"}},[t._v(" Excluir ")]),s("b-button",{staticClass:"ml-3",attrs:{tag:"router-link",to:{path:"/edit-perfil"},type:"is-primary","icon-right":"account-edit"}},[t._v(" Editar ")])],1)])])])])])])]):t._e()])])},e=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"menu-imagem mt-4"},[s("img",{attrs:{src:a("46ab"),width:"200",height:"130"}})])},function(){var t=this,s=t._self._c;return s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-48x48"},[s("img",{attrs:{src:"https://bulma.io/images/placeholders/96x96.png",alt:"Placeholder image"}})])])}],c=(a("14d9"),a("7424")),o=a("2f62"),n={data(){return{isActive:!1,activeAccount:!1,activeUsers:!1,activeDataSensores:!1,activeSensores:!1,activeInformation:!1,activeAtribuicao:!1,activeLocalizacao:!1,activeCardInfo:!0,usuarios:[],userData:[],sensores:[],sensorData:[],informationData:[],atribuicao:[],localizacoesData:[]}},mounted(){this.loadUsers(),this.loadUser(),this.loadSensores(),this.loadAllSensores(),this.loadAtribuicoes(),this.loadInformationSensors(),this.loadLocalizacoes()},methods:{...Object(o["b"])(["logout"]),account(){this.activeSensores=!1,this.activeAtribuicao=!1,this.activeDataSensores=!1,this.activeUsers=!1,this.activeInformation=!1,this.activeLocalizacao=!1,this.activeCardInfo=!1,this.activeAccount=!0},info(){this.activeAccount=!1,this.activeSensores=!1,this.activeAtribuicao=!1,this.activeDataSensores=!1,this.activeUsers=!1,this.activeInformation=!1,this.activeLocalizacao=!1,this.activeCardInfo=!0},local(){this.activeAccount=!1,this.activeCardInfo=!1,this.activeSensores=!1,this.activeAtribuicao=!1,this.activeDataSensores=!1,this.activeUsers=!1,this.activeInformation=!1,this.activeLocalizacao=!0},information(){this.activeAccount=!1,this.activeCardInfo=!1,this.activeLocalizacao=!1,this.activeSensores=!1,this.activeAtribuicao=!1,this.activeDataSensores=!1,this.activeUsers=!1,this.activeInformation=!0},users(){this.activeAccount=!1,this.activeCardInfo=!1,this.activeLocalizacao=!1,this.activeAtribuicao=!1,this.activeInformation=!1,this.activeSensores=!1,this.activeDataSensores=!1,this.activeUsers=!0},sensoresAll(){this.activeAccount=!1,this.activeCardInfo=!1,this.activeLocalizacao=!1,this.activeAtribuicao=!1,this.activeInformation=!1,this.activeDataSensores=!1,this.activeUsers=!1,this.activeSensores=!0},dados(){this.activeAccount=!1,this.activeCardInfo=!1,this.activeLocalizacao=!1,this.activeAtribuicao=!1,this.activeInformation=!1,this.activeUsers=!1,this.activeSensores=!1,this.activeDataSensores=!0},atrib(){this.activeAccount=!1,this.activeCardInfo=!1,this.activeLocalizacao=!1,this.activeInformation=!1,this.activeUsers=!1,this.activeSensores=!1,this.activeDataSensores=!1,this.activeAtribuicao=!0},doLogout(){this.logout(),this.$router.push("/")},loadUser(){return Object(c["m"])().then(t=>{this.userData=t.data,console.log(this.userData)}).catch(()=>{this.userData=[]})},loadUsers(){return Object(c["n"])().then(t=>{this.usuarios=t.data}).catch(()=>{this.usuarios=[]})},loadAtribuicoes(){return Object(c["e"])().then(t=>{this.atribuicao=t.data}).catch(()=>{this.atribuicao=[]})},loadLocalizacoes(){return Object(c["i"])().then(t=>{this.localizacoesData=t.data}).catch(()=>{this.localizacoesData=[]})},loadSensores(){return Object(c["o"])().then(t=>{this.sensores=t.data}).catch(()=>{this.sensores=[]})},loadAllSensores(){return Object(c["d"])().then(t=>{this.sensorData=t.data}).catch(()=>{this.sensorData=[]})},loadInformationSensors(){return Object(c["h"])().then(t=>{this.informationData=t.data}).catch(()=>{this.informationData=[]})},download(){const t=[this.usuarios,this.sensores];let s="data.json",a=document.createElement("a");a.setAttribute("href","data:application/json;charset=utf-8,"+encodeURIComponent(JSON.stringify(t))),a.setAttribute("download",s),a.style.display="none",document.body.appendChild(a),a.click(),document.body.removeChild(a)}}},l=n,r=(a("4f6f"),a("2877")),d=Object(r["a"])(l,i,e,!1,null,"662fdc84",null);s["default"]=d.exports},3777:function(t,s,a){},"4f6f":function(t,s,a){"use strict";a("3777")}}]);
//# sourceMappingURL=administrador.10cccdb5.js.map