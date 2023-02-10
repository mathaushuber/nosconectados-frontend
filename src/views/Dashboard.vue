<template>
  <main v-bind:id="isSwitchedCustom">
    <div class="columns"> <!--Início das colunas principais-->
      <div class="column is-two-fifths" id="menu"><!-- Início coluna de menu esquerdo-->
        <div class="logo">
          <img src="../assets/nosconectados.svg" width="200" height="130">
          <h2 class="is-size-4 is-uppercase has-text-weight-light">Bem vindo, {{ user.firstName }}</h2>
        </div>
      
    <div class="info-sensor" v-if="sensorData">
        <b-field label="Propriedade" class="mt-5" grouped label-position="on-border">
            <b-select
                placeholder="Identificação da propriedade"
                expanded
                v-model="property">
                <option 
                v-for="sensor in sensorData" :key="sensor.id">
                {{ sensor.property }}
                </option>
            </b-select>
            <p class="control" v-if="property">
                <b-button class="button is-primary" @click="clearFilter">Limpar</b-button>
            </p>
        </b-field>
      <div class="table-container" v-if="resumo == true">
       <table class="table">
        <thead>
          <tr>
            <td class="center">Status</td>
            <td class="center">Propriedade</td>
            <td class="center">Descrição</td>
            <td class="center">Área</td>
            <td class="center">Produção</td>
            <td class="center">Informações</td>
            <td class="center">Mapa</td>
          </tr>
        </thead>
        <tbody>
          <tr class="center-table" v-for="sensor in filteredItems" :key="sensor.id">
            <td>
              <b-tooltip 
              label="Inativo" type="is-danger" v-if="sensor.isActive === 0 && sensor.idSensor !== null">
                <b-icon  icon="access-point-remove" size="is-large"
                type="is-danger"></b-icon>
              </b-tooltip>
              <b-tooltip 
              label="Ativo" type="is-success" v-else-if="sensor.isActive === 1 && sensor.idSensor !== null">
                <b-icon  icon="access-point-check" size="is-large"
                type="is-success"></b-icon>
              </b-tooltip>
              <b-tooltip 
              label="Em Andamento" type="is-warning" v-else-if="sensor.isActive === 2 && sensor.idSensor !== null">
                <b-icon icon="access-point-off" size="is-large"
                type="is-warning"></b-icon>
              </b-tooltip>
              <b-tooltip 
              label="Pendente" type="is-info" v-else>
                <b-icon icon="access-point-network-off" size="is-large"
                type="is-info"></b-icon>
              </b-tooltip>
            </td>
            <td class="center">{{ sensor.property }}</td>
            <td class="center">{{ sensor.lowDescription }}</td>
            <td class="center">{{ sensor.area }} ha</td>
            <td class="center">{{ sensor.typeProduction }}</td>
            <td>
            <b-button 
            type="is-primary" tag="router-link" :to="{ path: '/detalhes/' + sensor.id}">
            Detalhes
            </b-button>

            </td>
            <td>
            <b-button
                icon-left="arrow-right" @click="updateMap(sensor.id)">
            </b-button>
            </td>
          </tr>

          </tbody>
        </table>
      </div>
      <div class="table-container" v-if="area == true">
       <table class="table">
        <thead>
          <tr>
            <td class="center">Status</td>
            <td class="center">Propriedade</td>
            <td class="center">Hectares</td>
            <td class="center">Metros</td>
            <td class="center">Acres</td>
            <td class="center">Informações</td>
            <td class="center">Mapa</td>
          </tr>
        </thead>
        <tbody>
          <tr class="center-table" v-for="sensor in filteredItems" :key="sensor.id">
            <td>
              <b-tooltip 
              label="Inativo" type="is-danger" v-if="sensor.isActive === 0 && sensor.idSensor !== null">
                <b-icon  icon="access-point-remove" size="is-large"
                type="is-danger"></b-icon>
              </b-tooltip>
              <b-tooltip 
              label="Ativo" type="is-success" v-else-if="sensor.isActive === 1 && sensor.idSensor !== null">
                <b-icon  icon="access-point-check" size="is-large"
                type="is-success"></b-icon>
              </b-tooltip>
              <b-tooltip 
              label="Em Andamento" type="is-warning" v-else-if="sensor.isActive === 2 && sensor.idSensor !== null">
                <b-icon icon="access-point-off" size="is-large"
                type="is-warning"></b-icon>
              </b-tooltip>
              <b-tooltip 
              label="Pendente" type="is-info" v-else>
                <b-icon icon="access-point-network-off" size="is-large"
                type="is-info"></b-icon>
              </b-tooltip>
            </td>
            <td class="center">{{ sensor.property }}</td>
            <td class="center">{{ sensor.area }} ha</td>
            <td class="center">{{ sensor.area*10000 }} m²</td>
            <td class="center">{{ sensor.area*2.471 }}ac</td>
            <td>
            <b-button 
            type="is-primary" tag="router-link" :to="{ path: '/detalhes/' + sensor.id}">
            Detalhes
            </b-button>

            </td>
            <td>
            <b-button
                icon-left="arrow-right" @click="updateMap(sensor.id)">
            </b-button>
            </td>
          </tr>

          </tbody>
        </table>
      </div>
      <div class="table-container" v-if="producao == true">
       <table class="table">
        <thead>
          <tr>
            <td class="center">Status</td>
            <td class="center">Propriedade</td>
            <td class="center">Tipo</td>
            <td class="center">Descrição</td>
            <td class="center">Informações</td>
            <td class="center">Mapa</td>
          </tr>
        </thead>
        <tbody>
          <tr class="center-table" v-for="sensor in filteredItems" :key="sensor.id">
            <td>
              <b-tooltip 
              label="Inativo" type="is-danger" v-if="sensor.isActive === 0 && sensor.idSensor !== null">
                <b-icon  icon="access-point-remove" size="is-large"
                type="is-danger"></b-icon>
              </b-tooltip>
              <b-tooltip 
              label="Ativo" type="is-success" v-else-if="sensor.isActive === 1 && sensor.idSensor !== null">
                <b-icon  icon="access-point-check" size="is-large"
                type="is-success"></b-icon>
              </b-tooltip>
              <b-tooltip 
              label="Em Andamento" type="is-warning" v-else-if="sensor.isActive === 2 && sensor.idSensor !== null">
                <b-icon icon="access-point-off" size="is-large"
                type="is-warning"></b-icon>
              </b-tooltip>
              <b-tooltip 
              label="Pendente" type="is-info" v-else>
                <b-icon icon="access-point-network-off" size="is-large"
                type="is-info"></b-icon>
              </b-tooltip>
            </td>
            <td class="center">{{ sensor.property }}</td>
            <td class="center">{{ sensor.typeProduction }}</td>
            <td class="center" v-if="sensor.typeProduction == 'Arroz'">Produção de arroz de tipo indeterminado, faça correção de pH e a adubação recomendada para a cultura</td>
            <td class="center" v-else-if="sensor.typeProduction == 'Milho em grão'">Produção de milho em grão. Plantio Agosto-Dezembro e Janeiro-Março; Colheita Março-Junho e Junho-Dezembro</td>
            <td class="center" v-else-if="sensor.typeProduction == 'Soja'">Produção de soja de tipo indeterminado. Plantio Outubro-Novembro; Colheita Maio</td>
            <td class="center" v-else-if="sensor.typeProduction == 'Cana-de-açúcar'">Produção de Cana-de-açúcar. Plantio Janeiro-Fevereiro; Colheita Abril-Agosto</td>
            <td class="center" v-else-if="sensor.typeProduction == 'Café'">Produção de Café. Plantio Janeiro-Março; Colheita Abril-Setembro.</td>
            <td class="center" v-else-if="sensor.typeProduction == 'Algodão herbáceo'">Produção de Algodão herbáceo. Plantio Novembro-Março; Colheita Maio-Agosto</td>
            <td class="center" v-else-if="sensor.typeProduction == 'Mandioca'">Produção de Mandioca. Plantio Agosto-Setembro; Colheita Março-Julho</td>
            <td class="center" v-else-if="sensor.typeProduction == 'Laranja'">Cultivare de Laranja de tipo indeterminado. Maturação Indeterminada</td>
            <td class="center" v-else-if="sensor.typeProduction == 'Trigo'">Produção de Trigo de tipo indeterminado. Plantio Outubro-Novembro-Dezembro; Colheita Abril-Maio</td>
            <td class="center" v-else-if="sensor.typeProduction == 'Banana'">Cultivo de Banana. Produção o ano inteiro; Colheita um ano após</td>
            <td class="center" v-else>Sensor não atribuido a nenhum tipo de produção. Utilizado para fins específicos.</td>
            <td>
            <b-button 
            type="is-primary" tag="router-link" :to="{ path: '/detalhes/' + sensor.id}">
            Detalhes
            </b-button>

            </td>
            <td>
            <b-button
                icon-left="arrow-right" @click="updateMap(sensor.id)">
            </b-button>
            </td>
          </tr>

          </tbody>
        </table>
      </div>
      <div class="table-container" v-if="localizacao == true">
       <table class="table">
        <thead>
          <tr>
            <td class="center">Status</td>
            <td class="center">Propriedade</td>
            <td class="center">Latitude</td>
            <td class="center">Longitude</td>
            <td class="center">Localidade</td>
            <td class="center">Informações</td>
            <td class="center">Mapa</td>
          </tr>
        </thead>
        <tbody>
          <tr class="center-table" v-for="sensor in filteredItems" :key="sensor.id">
            <td>
              <b-tooltip 
              label="Inativo" type="is-danger" v-if="sensor.isActive === 0 && sensor.idSensor !== null">
                <b-icon  icon="access-point-remove" size="is-large"
                type="is-danger"></b-icon>
              </b-tooltip>
              <b-tooltip 
              label="Ativo" type="is-success" v-else-if="sensor.isActive === 1 && sensor.idSensor !== null">
                <b-icon  icon="access-point-check" size="is-large"
                type="is-success"></b-icon>
              </b-tooltip>
              <b-tooltip 
              label="Em Andamento" type="is-warning" v-else-if="sensor.isActive === 2 && sensor.idSensor !== null">
                <b-icon icon="access-point-off" size="is-large"
                type="is-warning"></b-icon>
              </b-tooltip>
              <b-tooltip 
              label="Pendente" type="is-info" v-else>
                <b-icon icon="access-point-network-off" size="is-large"
                type="is-info"></b-icon>
              </b-tooltip>
            </td>
            <td class="center">{{ sensor.property }}</td>
            <td class="center">{{ sensor.latitude }}</td>
            <td class="center">{{ sensor.longitude}}</td>
            <td class="center">{{ sensor.city}}, {{ sensor.state }}</td>
            <td>
            <b-button 
            type="is-primary" tag="router-link" :to="{ path: '/detalhes/' + sensor.id}">
            Detalhes
            </b-button>

            </td>
            <td>
            <b-button
                icon-left="arrow-right" @click="updateMap(sensor.id)">
            </b-button>
            </td>
          </tr>

          </tbody>
        </table>
      </div>
    </div>
      <div v-else class="imagem">
        <img src="../assets/sensor-null.svg" />
        <h1 class="is-size-5 center is-uppercase has-text-weight-light">Nenhum sensor identificado!</h1>
      </div>
        <footer>
        <div class="buttons ml-2">
            <b-button size="is-large" v-on:click="isActiveResume">
              <b-icon
                icon="bell-plus"
                size="is-large"
                class="mr-1">
              </b-icon>
            Resumo
            </b-button>
            <b-button size="is-large" v-on:click="isActiveArea">
              <b-icon
                icon="apps"
                size="is-large"
                class="mr-1">
              </b-icon>
              Áreas
            </b-button>
            <b-button size="is-large" v-on:click="isActiveProducao">
              <b-icon
                icon="sprout"
                size="is-large"
                class="mr-1">
              </b-icon>
              Produção
            </b-button>
            <b-button size="is-large" v-on:click="isActiveLocalizacao">
              <b-icon
                icon="map-marker-outline"
                size="is-large"
                class="mr-1">
              </b-icon>
              Localização
            </b-button>
        </div>
        </footer>
        </div><!-- Fim column de menu esquerdo-->
      <div class="column"><!--Início coluna direita mapa-->
        <template id="mapa">
          <l-map ref="myMap" :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="markerLatLng">
            <l-icon
          :icon-size="iconSize"
          :icon-anchor="iconAnchor"
          :icon-url="iconUrl" >
          </l-icon>
          </l-marker>
          <l-circle-marker
          :lat-lng="circle.center"
          :radius="circle.radius"
          :color="circle.color"
          >
          </l-circle-marker>
          </l-map>
        </template>
      </div><!-- Fim column direita mapa--> 
    </div><!-- Fim columns principais -->
  </main>
</template>

<script>
import { mapState } from "vuex";
import {LMap, LTileLayer, LMarker, LCircleMarker, LIcon} from 'vue2-leaflet';
import { getSensorFromUser } from "../services/api";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LCircleMarker,
    LIcon
  },
  data () {
    return {
      tam: 0,
      sensorData:[],
      isSwitchedCustom: 'Light',
      iconUrl: 'https://icon-library.com/images/map-png-icon/map-png-icon-17.jpg',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 14,
      center: [-31.78095019, -52.32305668],
      markerLatLng: [0,0],
      circle: {
        center: [0, 0],
        radius: 300,
        color: '#40a5f5'
      },
      iconSize: [45, 45],
      iconAnchor: [37, 37],
      options:{
      enableHighAccuracy: true,
      timeout: 50000,
      maximumAge: 0,
      },
      property: null,
      resumo: true,
      area: false,
      producao: false,
      localizacao: false,
    };
  },
  computed: {
    ...mapState(["user"]),
    filteredItems() {
        if(this.sensorData === null){
            return null;
        }
        let filterSensors = [];
        filterSensors = this.sensorData.filter((filterSensor) => {
          if (this.property == null) return filterSensor;
          return filterSensor.property === this.property;
        });

        return filterSensors;
    },
  },
  mounted(){
    this.loadSensor();
    this.getLocation();
  },
  watch: {
    selected(value) {
      if (value == 0) {
          console.log("teste");
          this.isActiveResume();
         }
      },
    selectedArea(value){
      if(value == 1){
        console.log("area");
        this.isActiveArea();
      }
    }
  },
  methods: {
    loadSensor() {
      return getSensorFromUser()
        .then((res) => {
          this.sensorData = res.data;
          this.dataMap(this.sensorData);
        })
        .catch(() => {
          this.error = true;
        });
    },
    isActiveResume(){
      this.localizacao = false;
      this.area = false;
      this.producao = false;
      this.resumo = true;
    },
    isActiveArea(){
      this.localizacao = false;
      this.producao = false;
      this.resumo = false;
      this.area = true;
    },
    isActiveProducao(){
      this.localizacao = false;
      this.resumo = false;
      this.area = false;
      this.producao = true;
    },
    isActiveLocalizacao(){
      this.resumo = false;
      this.area = false;
      this.producao = false;
      this.localizacao = true;
    },
    clearFilter(){
      this.property = null;
    },
    dataMap(data){
      return data
    },
    updateMap(id){
      var data = this.dataMap(this.sensorData);
      var tam = Object.keys(data).length;
      for(var i = 0; i < tam; i++){
        if(data[i] === undefined){
          i++;
        }
        if(id === data[i].id){
          var lat = data[i].latitude;
          var lon = data[i].longitude;
        }
      }
      this.iconUrl = 'https://cdn-icons-png.flaticon.com/512/6650/6650928.png';
      this.center = [lat, lon];
      this.markerLatLng = [lat, lon];
      this.zoom = 30;
      const desvio = 0.000300;
      this.circle.center = [lat-desvio, lon-desvio];
    },
    getLocation(){
      navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
    },
    success(pos){
      const crd = pos.coords;
      this.center = [crd.latitude, crd.longitude];
      this.markerLatLng = [crd.latitude, crd.longitude];
      this.zoom = 30;
    },
    error(err){
      console.warn(`ERROR(${err.code}): ${err.message}`);
    },


   },
}

</script>


<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
.box{
  height:100vh;
  width: auto;
}
.logo{
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  text-align: center;
}

footer{
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  top: 1;
}

.imagem{
  width: 400px;
  height: 400px;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: auto;
}

.buttons{
  margin-top: -70px;
}
#mapa{
  height: 100vh;
  position: relative;
}

#Dark .letra{
  color: #ffffff;
}
#Dark #menu{
  background-color: #000000;
  color: #ffffff;
}

#menu{
  height: 100vh;
}

.center-table{
  margin-top: auto;
  margin-left: auto;
  margin-bottom: auto;
  margin-right: auto;
}
.mode{
    position: absolute;
    color:#000000;
}
</style>
