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
                    <b-input placeholder="Identificação da propriedade" v-model="sensor.property" type="text"
                      validation-message="Entre com um nome válido" pattern="[A-ZA-z çâêîôûáéíóúàèìòùãẽĩõũ 0-9]*"
                      minlength="3" maxlength="255">
                    </b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Tipo de Produção *">
                    <b-select v-model="sensor.typeProduction" placeholder="Selecione a produção" expanded>
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
                    <b-input v-model="sensor.lowDescription" placeholder="Descreva brevemente" type="textarea"
                      validation-message="Entre com uma descrição válida" minlength="3" maxlength="255">
                    </b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Descrição Detalhada">
                    <b-input v-model="sensor.description" type="textarea" placeholder="Descreva detalhadamente"
                      validation-message="Entre com uma descrição válida" minlength="0" maxlength="500">
                    </b-input>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="Área *">
                    <b-numberinput v-model="sensor.area" min="0" placeholder="000.00" step="0.01"
                      aria-minus-label="Decrement by 0.01" aria-plus-label="Increment by 0.01" minlength="0">
                    </b-numberinput>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Status *">
                    <b-select placeholder="Selecione o status" v-model="sensor.isActive" expanded>
                      <option value="0">Inativo</option>
                      <option value="1">Em Andamento</option>
                      <option value="2">Ativo</option>
                    </b-select>
                  </b-field>
                </div>
                <div class="column">
                  <b-field grouped label="Privacidade *">
                    <b-radio-button v-model="sensor.isPublic" native-value="0" type="is-danger">
                      <b-icon icon="close"></b-icon>
                      <span>Privado</span>
                    </b-radio-button>

                    <b-radio-button v-model="sensor.isPublic" native-value="1" type="is-success">
                      <b-icon icon="check"></b-icon>
                      <span>Público</span>
                    </b-radio-button>

                    <b-radio-button v-model="sensor.isPublic" native-value="1" type="is-info">
                      Padrão
                    </b-radio-button>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="Estado *">
                    <b-select placeholder="Selecione o estado" @input="loadMunicipios" v-model="sensor.state" expanded>
                      <option v-for="estado in estados" :key="estado.id" :value="estado.sigla">{{ estado.nome }}
                      </option>
                    </b-select>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Municipio *">
                    <b-select placeholder="Selecione o municipio" :disabled="!sensor.state" v-model="sensor.city"
                      expanded>
                      <option v-if="!sensor.state" value="">Selecione o estado primeiro
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
                    <b-input type="text" v-model="sensor.latitude" minlength="3" maxlength="12" pattern="[0-9-.]*"
                      placeholder="00.00000000" validation-message="Entre com uma latitude válida">
                    </b-input>
                  </b-field>
                </div>
                <div class="column">
                  <b-field label="Longitude">
                    <b-input type="text" expanded validation-message="Entre com uma longitude válida" minlength="3"
                      maxlength="12" pattern="[0-9-.]*" v-model="sensor.longitude" placeholder="00.00000000">
                    </b-input>
                    <b-button class="button is-primary" @click="getLocation">Localizar</b-button>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field label="Administrador">
                    <b-taginput v-model="administradores" :data="filteredTags" type="is-primary" autocomplete
                      field="firstName" icon="label" placeholder="Adicionar administrador" @typing="loadNomes"
                      maxtags="1">
                      <template #empty>
                        There are no items
                      </template>
                    </b-taginput>
                  </b-field>
                  <pre style="max-height: 400px"><b>Administradores:</b>{{ administradores }}</pre>
                </div>
                <div class="column">
                  <b-field label="Patrocinadores">
                    <b-taginput v-model="patrocinadores" :data="filteredTags" type="is-info" autocomplete
                      field="firstName" icon="label" placeholder="Adicionar patrocinador" @typing="loadNomes" maxtags="3">

                      <template #empty>
                        There are no items
                      </template>
                    </b-taginput>
                  </b-field>
                  <pre style="max-height: 400px"><b>Patrocinadores:</b>{{ patrocinadores }}</pre>
                </div>
                <div class="column">
                  <b-field label="Visualizadores">
                    <b-taginput v-model="visualizadores" :data="filteredTags" type="is-warning" autocomplete
                      field="firstName" icon="label" placeholder="Adicionar visualizador" @typing="loadNomes" maxtags="5">

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
                    <b-button type="is-success" @click="doCreate">
                      Criar
                    </b-button>
                  </div>
                </div>
              </div>
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
import { getNomesUser, createSensor } from "../services/api";

export default {
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
      administradores: [],
      patrocinadores: [],
      visualizadores: [],
      sensor: {
        property: "",
        typeProduction: "",
        lowDescription: "",
        description: "",
        area: null,
        isActive: null,
        isPublic: null,
        state: null,
        city: "",
        latitude: "",
        longitude: "",
      },
      options: {
        enableHighAccuracy: true,
        timeout: 50000,
        maximumAge: 0
      },
    }
  },
  mounted() {
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
    loadMunicipios() {
      if (this.sensor.state) {
        return getMunicipios(this.sensor.state).then(
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
      this.sensor.latitude = crd.latitude
      this.sensor.longitude = crd.longitude;
    },
    error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    },
    doCreate() {
      this.isLoading = true;
      let formData = new FormData();
      formData.append("property", this.sensor.property);
      formData.append("typeProduction", this.sensor.typeProduction);
      formData.append("lowDescription", this.sensor.lowDescription);
      formData.append("description", this.sensor.description);
      formData.append("area", this.sensor.area);
      formData.append("isActive", this.sensor.isActive);
      formData.append("isPublic", this.sensor.isPublic);
      formData.append("state", this.sensor.state);
      formData.append("city", this.sensor.city);
      if (this.sensor.latitude) {
        formData.append("latitude", this.sensor.latitude);
      }
      if (this.sensor.longitude) {
        formData.append("longitude", this.sensor.longitude);
      }
      if (this.administradores) {
        const adminJson = JSON.stringify(this.administradores);
        formData.append('administradores', adminJson);
      }
      if (this.patrocinadores) {
        const patroJson = JSON.stringify(this.patrocinadores);
        formData.append('patrocinadores', patroJson);
      }
      if (this.visualizadores) {
        const visuJson = JSON.stringify(this.visualizadores);
        formData.append('visualizadores', visuJson);
      }
      console.log("administradores", JSON.stringify(this.administradores));
      console.log("patrocinadores", JSON.stringify(this.patrocinadores));
      console.log("visualizadores", JSON.stringify(this.visualizadores));
      createSensor(formData).then(() => {
        this.isLoading = false;
        this.$router.push("/dashboard");
        this.$buefy.toast.open({
          message: "Sensor cadastrado com sucesso na plataforma!",
          type: "is-success",
        });
      })
        .catch(() => {
          this.$buefy.toast.open({
            message: "Ocorreu um erro ao cadastrar o sensor, por favor cheque os campos!",
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