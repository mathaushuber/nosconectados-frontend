<template>
  <main v-bind:id="isSwitchedCustom">
    <b-field class="mode mt-4 letra">
      <b-switch v-model="isSwitchedCustom"
                class="mt-2 ml-3"
                true-value="Light"
                false-value="Dark">
                {{ isSwitchedCustom }}
      </b-switch>
    </b-field>
    <div class="columns"> <!--Início das colunas principais-->
      <div class="column is-two-fifths" id="menu"><!-- Início coluna de menu esquerdo-->
        <div class="logo">
          <img src="../assets/nosconectados.svg" width="200" height="130">
          <h2 class="is-size-4 is-uppercase has-text-weight-light">Bem vindo, $USUÁRIO</h2>
        </div>
        
        <b-field label="Propriedade" class="mt-5">
            <b-select
                placeholder="Fazenda São Cristóvão"
                expanded>
                <option value="flint">Fazenda Aracajú</option>
                <option value="silver">Fazenda Guarapó</option>
            </b-select>
        </b-field>

       <table class="table">
        <tbody>
          <tr>
            <td>
          <b-icon icon="bug-check" size="is-large"
          type="is-success"></b-icon>
            </td>
            <td>Talhão de café 1A</td>
            <td>Lorem ipsum doler atmum specter</td>
            <td>23 ha</td>
            <td>Café</td>
            <td>Ativo</td>
          </tr>
           <tr>
            <td>
          <b-icon icon="bug" size="is-large"
          type="is-warning"></b-icon>
            </td>
            <td>Talhão de café 1B</td>
            <td>Lorem ipsum doler atmum specter</td>
            <td>10 ha</td>
            <td>Café</td>
            <td>Em andamento</td>
          </tr>
           <tr>
            <td>
          <b-icon icon="bug" size="is-large"
          type="is-danger"></b-icon>
            </td>
            <td>Talhão de café 1C</td>
            <td>Lorem ipsum doler atmum specter</td>
            <td>43 ha</td>
            <td>Café</td>
            <td>Inativo</td>
          </tr>
             <tr>
            <td>
          <b-icon icon="bug" size="is-large"
          type="is-danger"></b-icon>
            </td>
            <td>Talhão de café 1E</td>
            <td>Lorem ipsum doler atmum specter</td>
            <td>16 ha</td>
            <td>Café</td>
            <td>Inativo</td>
          </tr>
             <tr>
            <td>
          <b-icon icon="bug" size="is-large"
          type="is-warning"></b-icon>
            </td>
            <td>Talhão de Arroz 1A</td>
            <td>Lorem ipsum doler atmum specter</td>
            <td>20 ha</td>
            <td>Arroz</td>
            <td>Em andamento</td>
          </tr>
               <tr>
            <td>
          <b-icon icon="bug-check" size="is-large"
          type="is-success"></b-icon>
            </td>
            <td>Talhão de Arroz 1B</td>
            <td>Lorem ipsum doler atmum specter</td>
            <td>17 ha</td>
            <td>Arroz</td>
            <td>Ativo</td>
          </tr>
              <tr>
            <td>
          <b-icon icon="bug-check" size="is-large"
          type="is-success"></b-icon>
            </td>
            <td>Talhão de Café 1G</td>
            <td>Lorem ipsum doler atmum specter</td>
            <td>22 ha</td>
            <td>Café</td>
            <td>Ativo</td>
          </tr>

          </tbody>
        </table>
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

import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker
  },
  data () {
    return {
      isSwitchedCustom: 'Light',
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution:
        '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 30,
      center: [-31.765399, -52.337589],
      markerLatLng: [-31.765399, -52.337589]
    };
  }
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
}

#mapa{
  height: 100vh;
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

.mode{
    position: absolute;
    color:#000000;
}
</style>
