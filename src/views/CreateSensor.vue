<template>
  <main v-bind:id="isSwitchedCustom">
    <b-field class="mode mt-1">
      <b-switch v-model="isSwitchedCustom"
                class="mt-2 ml-3 letra"
                true-value="Light"
                false-value="Dark">
                {{ isSwitchedCustom }}
      </b-switch>
    </b-field>
    <div class="container pt-6 pb-4"><!-- Início container -->
      <div class="columns"><!-- Início columns -->
        <div class="column is-10 is-offset-1"><!--Início column-->
          <div class="card mt-4 "><!--Início card-->
            <div class="card-content"><!--Início card-content-->
              <div class="columns">
                <div class="column">
                   <b-field label="Nome *">
                      <b-input 
                      placeholder="Identificação da propriedade"
                      type="text"
                      validation-message="Entre com um nome válido"
                      pattern="[A-ZA-z çâêîôûáéíóúàèìòùãẽĩõũ]*"
                      minlength="3"
                      maxlength="255">
                      </b-input>
                   </b-field>
                </div>
                <div class="column">
                  <b-field
                    label="Tipo de Produção *">
                    <b-select
                      placeholder="Selecione a produção"
                      expanded>
                      <option value="A">Arroz</option>
                      <option value="M">Milho em grão</option>
                      <option value="S">Soja</option>
                      <option value="D">Cana-de-açúcar</option>
                      <option value="C">Café</option>
                      <option value="H">Algodão herbáceo</option>
                      <option value="I">Mandioca</option>
                      <option value="L">Laranja</option>
                      <option value="T">Trigo</option>
                      <option value="B">Banana</option>
                      <option value="O">Outro</option>
                    </b-select>
                  </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                 <b-field label="Descreva Breve *">
                     <b-input 
                      placeholder="Descreva brevemente"
                      type="textarea"
                      validation-message="Entre com uma descrição válida"
                      minlength="3"
                      maxlength="255">
                    </b-input>
                  </b-field>                  
                </div>
                <div class="column">
                  <b-field
                    label="Descrição Detalhada">
                    <b-input
                      type="textarea"
                      placeholder="Descreva detalhadamente"
                      validation-message="Entre com uma descrição válida" 
                      minlength="0"
                      maxlength="500">                    
                    </b-input>
                  </b-field>
                </div>
              </div>
                <div class="columns">
                  <div class="column">
                  <b-field
                    label="Área *">
                    <b-input
                      placeholder="00.000"
                      type="number"
                      minlength="0">
                    </b-input>
                  </b-field>
                  </div>
                  <div class="column">
                    <b-field
                      label="Status *">
                      <b-select
                        placeholder="Selecione a produção"
                        expanded>
                        <option value="0">Inativo</option>
                        <option value="1">Em Andamento</option>
                        <option value="2">Ativo</option>
                      </b-select>
                    </b-field>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                  <b-field
                    label="Estado *">
                    <b-select
                      placeholder="Selecione o estado"
                      @input="loadMunicipios"
                      v-model="estadoTemp"
                      expanded>
                      <option
                        v-for="estado in estados"
                        :key="estado.id"
                        :value="estado.sigla"
                        >{{ estado.nome }}
                      </option>
                    </b-select>
                  </b-field>
                  </div>
                  <div class="column">
                  <b-field
                    label="Municipio *">
                    <b-select
                      placeholder="Selecione o municipio"
                      :disabled="!estadoTemp"
                      expanded>
                      <option v-if="!estadoTemp" value=""
                        >Selecione o estado primeiro
                      </option>
                      <option
                        v-else
                        v-for="municipio in municipios"
                        :key="municipio.id"
                        :value="municipio.nome"
                        >{{ municipio.nome }}
                      </option>
                    </b-select>
                  </b-field>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <b-field
                    label="Latitude">
                    <b-input
                      type="text"
                      placeholder="00.00000000"
                      validation-message="Entre com uma latitude válida"
                      >
                    </b-input>
                  </b-field>
                  </div>
                  <div class="column">
                  <b-field
                    label="Longitude">
                    <b-input
                      type="text"
                      validation-message="Entre com uma longitude válida"
                      placeholder="00.00000000">
                    </b-input>
                  </b-field>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <div class="buttons is-justify-content-right">
                    <b-button
                      type="is-success">
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
export default{
  name: "CadastroSensor",
  directives: {
    mask(el, binding) {
      binding.value ? mask(el, binding) : (el.oninput = null);
    },
  },
  data() {
        return {
            estados: [],
            isSwitchedCustom: 'Light',
            estadoTemp: [],
            municipios: [],
            selected: null
        }
    },
  mounted() {
    getEstados().then((resp) => {
      this.estados = resp.data;
      console.log("carregou estados");
    });
  },
   methods: {
    loadMunicipios() {
      if (this.estadoTemp) {
        return getMunicipios(this.estadoTemp).then(
          (resp) => (this.municipios = resp.data)
        );
      } else return [];
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

.mode{
    position: absolute;
    color:#ffffff;
  }

#Light .card .card-content{
  background-color: rgb(255, 255, 255);
  color: #000000;
}

#Dark .card{
  background-color: rgb(0, 0, 0);
  color: #ffffff;
}

@include tablet {
  .img-avatar {
    margin-right: 3rem;
  }
}
@include desktop{
   .img-avatar {
    margin-right: 3rem;
}
}

main {
  background: url("../assets/capa.png"), url("../assets/ruido.png"),
    linear-gradient(110deg, $primary, #7c26f8);
  background-attachment: fixed;
  height: 100vh;
}
</style>