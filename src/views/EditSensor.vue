<template>
  <main>
    <div class="container pt-6 pb-4"><!-- Início container -->
      <div class="columns"><!-- Início columns -->
        <div class="column is-10 is-offset-1"><!--Início column-->
          <div class="card mt-4 "><!--Início card-->
            <div class="card-content"><!--Início card-content-->
              <div class="columns">
                <div class="column">
                  <b-field label="Nome *">
                    <b-input placeholder="Identificação da propriedade" v-model="sensorData.property" type="text"
                      validation-message="Entre com um nome válido" pattern="[A-ZA-z çâêîôûáéíóúàèìòùãẽĩõũ 0-9]*"
                      minlength="3" maxlength="255">
                    </b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Tipo de Produção *">
                    <b-select v-model="sensorData.typeProduction" placeholder="Selecione a produção" expanded>
                      <option value="Arroz">Arroz</option>
                      <option value="Milho">Milho em grão</option>
                      <option value="Soja">Soja</option>
                      <option value="Cana-de-açúcar">Cana-de-açúcar</option>
                      <option value="Café">Café</option>
                      <option value="Algodão">Algodão herbáceo</option>
                      <option value="Mandioca">Mandioca</option>
                      <option value="Laranja">Laranja</option>
                      <option value="Trigo">Trigo</option>
                      <option value="Banana">Banana</option>
                      <option value="Outros">Outros</option>
                    </b-select>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="Descrição Breve *">
                    <b-input v-model="sensorData.lowDescription" placeholder="Descreva brevemente" type="textarea"
                      validation-message="Entre com uma descrição válida" minlength="3" maxlength="255">
                    </b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Descrição Detalhada">
                    <b-input v-model="sensorData.description" type="textarea" placeholder="Descreva detalhadamente"
                      validation-message="Entre com uma descrição válida" minlength="0" maxlength="500">
                    </b-input>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="Área *">
                    <b-numberinput v-model="sensorData.area" min="0" placeholder="000.00" step="0.01"
                      aria-minus-label="Decrement by 0.01" aria-plus-label="Increment by 0.01" minlength="0">
                    </b-numberinput>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Status *">
                    <b-select placeholder="Selecione o status" v-model="sensorData.isActive" expanded>
                      <option value="0">Inativo</option>
                      <option value="1">Em Andamento</option>
                      <option value="2">Ativo</option>
                    </b-select>
                  </b-field>
                </div>
                <div class="column">
                  <b-field grouped label="Privacidade *">
                    <b-radio-button v-model="sensorData.isPublic" native-value="0" type="is-danger">
                      <b-icon icon="close"></b-icon>
                      <span>Privado</span>
                    </b-radio-button>

                    <b-radio-button v-model="sensorData.isPublic" native-value="1" type="is-success">
                      <b-icon icon="check"></b-icon>
                      <span>Público</span>
                    </b-radio-button>

                    <b-radio-button v-model="sensorData.isPublic" native-value="1" type="is-info">
                      Padrão
                    </b-radio-button>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="Estado *">
                    <b-select placeholder="Selecione o estado" @input="loadMunicipios" v-model="sensorData.state"
                      expanded>
                      <option v-for="estado in estados" :key="estado.id" :value="estado.sigla">{{ estado.nome }}
                      </option>
                    </b-select>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Municipio *">
                    <b-select placeholder="Selecione o municipio" :disabled="!sensorData.state" v-model="sensorData.city"
                      expanded>
                      <option v-if="!sensorData.state" value="">Selecione o estado primeiro
                      </option>
                      <option v-else v-for="municipio in municipios" :key="municipio.id" :value="municipio.nome">{{
                        municipio.nome }}
                      </option>
                    </b-select>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="Latitude">
                    <b-input type="text" v-model="sensorData.latitude" minlength="3" maxlength="12" pattern="[0-9-.]*"
                      placeholder="00.00000000" validation-message="Entre com uma latitude válida">
                    </b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Longitude">
                    <b-input type="text" expanded validation-message="Entre com uma longitude válida" minlength="3"
                      maxlength="12" pattern="[0-9-.]*" v-model="sensorData.longitude" placeholder="00.00000000">
                    </b-input>
                    <b-button class="button is-primary" @click="getLocation">Localizar</b-button>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="Administrador">
                    <b-taginput :data="filteredTags" type="is-primary" autocomplete field="firstName" icon="label"
                      placeholder="Adicionar administrador" @typing="loadNomes" maxtags="1">
                      <template #empty>
                        There are no items
                      </template>
                    </b-taginput>
                  </b-field>
                  <pre style="max-height: 400px"><b>Administradores:</b>{{ administradores }}</pre>
                </div>
                <div class="column">
                  <b-field label="Patrocinadores">
                    <b-taginput :data="filteredTags" type="is-info" autocomplete field="firstName" icon="label"
                      placeholder="Adicionar patrocinador" @typing="loadNomes" maxtags="3">

                      <template #empty>
                        There are no items
                      </template>
                    </b-taginput>
                  </b-field>
                  <pre style="max-height: 400px"><b>Patrocinadores:</b>{{ patrocinadores }}</pre>
                </div>
                <div class="column">
                  <b-field label="Visualizadores">
                    <b-taginput :data="filteredTags" type="is-warning" autocomplete field="firstName" icon="label"
                      placeholder="Adicionar visualizador" @typing="loadNomes" maxtags="5">

                      <template #empty>
                        There are no items
                      </template>
                    </b-taginput>
                  </b-field>
                  <pre style="max-height: 400px"><b>Visualizadores:</b>{{ visualizadores }}</pre>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <div class="buttons is-justify-content-right">
                    <b-button type="is-success" @click="doUpdate">
                      Atualizar
                    </b-button>
                  </div>
                </div>
              </div>
              <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="false"></b-loading>
            </div><!--Fim card-content-->
          </div><!--Fim card-->
        </div><!--Fim column-->
      </div><!--Fim columns-->
    </div><!--Fim container-->
  </main>
</template>
  
<script>
import { mask } from "vue-the-mask";
import { getEstados, getMunicipios } from "../services/ibge";
import { getNomesUser, updateSensor, getDetalheSensor } from "../services/api";

export default {
  props: ["sensorId"],
  name: "CadastroSensor",
  directives: {
    mask(el, binding) {
      binding.value ? mask(el, binding) : (el.oninput = null);
    },
  },
  data() {
    return {
      isLoading: false,
      estados: [],
      municipios: [],
      filteredTags: [],
      selected: null,
      administradores: null,
      patrocinadores: null,
      visualizadores: null,
      sensorData: [],
      options: {
        enableHighAccuracy: true,
        timeout: 50000,
        maximumAge: 0
      },
    }
  },
  mounted() {
    this.loadSensor();
    getEstados().then((resp) => {
      this.estados = resp.data;
    });
    this.loadNomes();
  },
  methods: {
    loadNomes() {
      return getNomesUser()
        .then((res) => {
          this.filteredTags = res.data;
        })
        .catch(() => {
          this.filteredTags = [];
        });
    },
    loadSensor() {
      return getDetalheSensor(this.sensorId)
        .then((res) => {
          this.sensorData = res.data;
        })
        .catch(() => {
          this.sensorData = [];
        });
    },
    loadMunicipios() {
      if (this.sensorData.state) {
        return getMunicipios(this.sensorData.state).then(
          (resp) => (this.municipios = resp.data)
        );
      } else return [];
    },
    transformValue(isSwitched) {
      let sizes = {
        "0": "Privado",
        "1": "Público",
      };
      return sizes[isSwitched];
    },
    getLocation() {
      navigator.geolocation.getCurrentPosition(this.success, this.error, this.options);
    },
    success(pos) {
      const crd = pos.coords;
      this.sensorData.latitude = crd.latitude
      this.sensorData.longitude = crd.longitude;
    },
    error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    },
    doUpdate() {
      this.isLoading = true;
      let formData = new FormData();
      if (this.sensorData.property) {
        formData.set("property", this.sensorData.property);
      }
      if (this.sensorData.typeProduction) {
        formData.set("typeProduction", this.sensorData.typeProduction);
      }
      if (this.sensorData.lowDescription) {
        formData.set("lowDescription", this.sensorData.lowDescription);
      }
      if (this.sensorData.description) {
        formData.set("description", this.sensorData.description);
      }
      if (this.sensorData.area) {
        formData.set("area", this.sensorData.area);
      }
      if (this.sensorData.isActive) {
        formData.set("isActive", this.sensorData.isActive);
      }
      if (this.sensorData.isPublic) {
        formData.set("isPublic", this.sensorData.isPublic);
      }
      if (this.sensorData.state) {
        formData.set("state", this.sensorData.state)
      }
      if (this.sensorData.city) {
        formData.set("city", this.sensorData.city);
      }
      if (this.sensorData.latitude) {
        formData.set("latitude", this.sensorData.latitude);
      }
      if (this.sensorData.longitude) {
        formData.set("longitude", this.sensorData.longitude);
      }
      if (this.administradores !== null) {
        formData.set("administradores", this.administradores)
      }
      if (this.patrocinadores !== null) {
        formData.set("patrocinadores", this.patrocinadores)
      }
      if (this.visualizadores !== null) {
        formData.set("visualizadores", this.visualizadores)
      }
      updateSensor(formData, this.sensorId).then(() => {
        this.isLoading = false;
        this.$router.push("/dashboard");
        this.$buefy.toast.open({
          message: "Sensor atualizado com sucesso na plataforma!",
          type: "is-success",
        });
      })
        .catch(() => {
          this.isLoading = false;
          this.$buefy.toast.open({
            message: "Ocorreu um erro ao atualizar o sensor, por favor cheque os campos!",
            type: "is-danger",
          });
        })
    },
  },
  watch: {
    computed: {
      selectedString() {
        return this.selected ? this.selected.toDateString() : ''
      }
    },
  },
};

</script>
  
<style lang="scss" scoped>
.img-avatar {
  max-width: 280px;
}

@include tablet {
  .img-avatar {
    margin-right: 3rem;
  }
}

@include desktop {
  .img-avatar {
    margin-right: 3rem;
  }
}

main {
  background: url("../assets/capa.png"), url("../assets/ruido.png"),
    linear-gradient(110deg, $primary, #7c26f8);
  background-attachment: fixed;
  height: 100%;
}

.card {
  margin-bottom: 50px;
}
</style>