<template>
  <main v-bind:id="isSwitchedCustom">
    <div class="columns"> <!--Início das colunas principais-->
      <div class="column is-two-fifths" id="menu"><!-- Início coluna de menu esquerdo-->
        <div class="logo">
          <img src="../assets/nosconectados.svg" width="200" height="130">
          <h2 class="is-size-4 is-uppercase has-text-weight-light">Bem vindo, {{ user.firstName }}</h2>
        </div>
        
        <b-field label="Propriedade" class="mt-5">
            <b-select
                placeholder="Fazenda São Cristóvão"
                expanded>
                <option value="flint">Fazenda Aracajú</option>
                <option value="silver">Fazenda Guarapó</option>
            </b-select>
        </b-field>
<div class="table-container">
       <table class="table">
        <thead>
          <tr>
            <td class="center">Status</td>
            <td class="center">Propriedade</td>
            <td class="center">Descrição</td>
            <td class="center">Área</td>
            <td class="center">Produção</td>
            <td class="center">Informações</td>
          </tr>
        </thead>
        <tbody>
          <tr class="center-table">
            <td>
          <b-icon v-if="sensorData.isActive === 0" icon="bug-check" size="is-large"
          type="is-danger"></b-icon>
          <b-icon v-else-if="sensorData.isActive === 1" icon="bug-check" size="is-large"
          type="is-success"></b-icon>
          <b-icon v-else icon="bug-check" size="is-large"
          type="is-alert"></b-icon>
            </td>
            <td class="center">{{ sensorData.property }}</td>
            <td class="center">{{ sensorData.lowDescription }}</td>
            <td class="center">{{ sensorData.area }} ha</td>
            <td class="center">{{ sensorData.typeProduction }}</td>
            <td><b-button type="is-primary">Detalhes</b-button></td>
          </tr>

          <tr>
            <td>
          <b-icon v-if="sensorData.isActive === 0" icon="bug-check" size="is-large"
          type="is-danger"></b-icon>
          <b-icon v-else-if="sensorData.isActive === 1" icon="bug-check" size="is-large"
          type="is-success"></b-icon>
          <b-icon v-else icon="bug-check" size="is-large"
          type="is-alert"></b-icon>
            </td>
            <td>{{ sensorData.property }}</td>
            <td>{{ sensorData.lowDescription }}</td>
            <td>{{ sensorData.area }} ha</td>
            <td>{{ sensorData.typeProduction }}</td>
            <td><b-button type="is-primary">Detalhes</b-button></td>
          </tr>

          </tbody>
        </table>
      </div>
        <footer>
        <b-tabs size="is-large" class="block">
            <b-tab-item label="Resumo" icon="bell-plus"></b-tab-item>
            <b-tab-item label="Áreas" icon="apps"></b-tab-item>
            <b-tab-item label="Safra" icon="sprout"></b-tab-item>
            <b-tab-item label="Tempo" icon="cloud"></b-tab-item>
        </b-tabs>
        </footer>
        </div><!-- Fim column de menu esquerdo-->
      <div class="column"><!--Início coluna direita mapa-->
        <template id="mapa">
          <l-map :zoom="zoom" :center="center">
          <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
          <l-marker :lat-lng="markerLatLng"></l-marker>
          </l-map>
        </template>
      </div><!-- Fim column direita mapa--> 
    </div><!-- Fim columns principais -->
  </main>
</template>

<script>
import { mapState } from "vuex";
import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';
import { getSensorFromUser } from "../services/api";

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      sensorData:{},
      isSwitchedCustom: 'Light',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 30,
      center: [-31.765399, -52.337589],
      markerLatLng: [-31.765399, -52.337589]
    };
  },
  teste(){
  },
  mounted(){
    this.loadSensor();
  },
  methods: {
    loadSensor() {
      return getSensorFromUser()
        .then((res) => {
          this.sensorData = res.data;
          console.log(this.sensorData.data)
        })
        .catch(() => {
          this.error = true;
        });
    },
   },
  computed: {
    ...mapState(["user"]),
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
