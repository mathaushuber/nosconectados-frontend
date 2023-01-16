<template>
  <main>
    <div class="container pt-6 pb-4"><!-- Início container -->
      <div class="columns"><!-- Início columns -->
        <div class="column is-10 is-offset-1"><!--Início column-->
          <div class="card mt-4 "><!--Início card-->
            <div class="card-content"><!--Início card-content-->
              <div class="container"><!--Início container secundario-->
                <div class="is-flex is-flex-wrap-wrap is-justify-content-center mt-5 mb-6"><!--Início flex-wrap-->
                  <div class="is-relative">
                    <div
                      style="position: absolute;
                      z-index: 1;">
                      <b-button
                          type="is-danger"
                          @click="removePhoto"
                          v-if="imageData">
                          <b-icon icon="close"/>  
                      </b-button>
                    </div>
                    <figure class="image ">
                      <img
                        class="img-avatar is-rounded"
                        v-if="imageData"
                        :src="imageData"
                        alt=""
                      />
                      <img v-else class="img-avatar" src="~assets/avatar.png" />
                    </figure>
                  </div>

                <!--Início formulário-->
                <b-field label="Foto Pessoal" class=" has-text-centered">
                  <b-upload
                    v-model="avatar"
                    accept="image/png,  image/jpeg"
                    drag-drop>
                    <section class="section">
                      <div class="content has-text-centered">
                        <p>
                        <b-icon icon="upload" size="is-large"> </b-icon>
                        </p>
                        <p>Arraste a foto aqui</p>
                      </div>
                    </section>
                  </b-upload>
                </b-field>
                </div><!--Fim flex-wrap-->
              </div><!--Fim container secundario-->
              <div class="columns">
                <div class="column">
                   <b-field label="Nome">
                      <b-input 
                      placeholder="Nome"
                      type="text"
                      validation-message="Entre com um nome válido"
                      pattern="[A-ZA-z çâêîôûáéíóúàèìòùãẽĩõũ]*"
                      minlength="3"
                      maxlength="255">
                      </b-input>
                   </b-field>
                </div>
                <div class="column">
                  <b-field label="Sobrenome">
                      <b-input 
                      placeholder="Sobrenome"
                      type="text"
                      validation-message="Entre com um nome válido"
                      pattern="[A-ZA-z çâêîôûáéíóúàèìòùãẽĩõũ]*"
                      minlength="3"
                      maxlength="255">
                      </b-input>
                   </b-field>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                  <b-field
                    label="CPF *">
                    <b-input
                      type="text"
                      placeholder="CPF"
                      validation-message="Entre com um documento válido"
                      v-mask.raw="['###.###.###-##']">                      
                    </b-input>
                  </b-field>
                </div>
                <div class="column">
                   <b-field
                    label="Gênero *">
                    <b-select
                      placeholder="Selecione o gênero"
                      expanded>
                      <option value="M">Masculino</option>
                      <option value="F">Feminino</option>
                      <option value="N">Outro</option>
                    </b-select>
                  </b-field>
                </div>
              </div>
                <div class="columns">
                  <div class="column">
                  <b-field
                    label="Email *">
                    <b-input
                      placeholder="Email"
                      type="email">                      
                    </b-input>
                  </b-field>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <b-field
                    label="Perfil do Facebook">
                    <b-input
                      placeholder="URL"
                      type="url">
                    </b-input>
                    </b-field>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <b-field label="Data de Nascimento" grouped>
                    <b-datepicker
                      ref="datepicker"
                      expanded
                      placeholder="Selecione uma data"
                      v-model="selected">
                    </b-datepicker>
                    <b-button
                      @click="$refs.datepicker.toggle()"
                      icon-left="calendar-today"
                      type="is-primary"/>
                    </b-field>
                  </div>
                  <div class="column">
                    <b-field
                    label="Telefone">
                    <b-input
                      type="text"
                      placeholder="Fone"
                      validation-message="Entre com um telefone válido"
                      v-mask.raw="['+55 (##) # ####-####']">
                    </b-input>
                    </b-field>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <b-field
                    label="CEP">
                    <b-input
                      type="text"
                      placeholder="CEP"
                      validation-message="Entre com um CEP válido"
                      v-mask="['#####-###']">
                    </b-input>
                  </b-field>
                  </div>
                  <div class="column">
                  <b-field
                    label="Bairro">
                    <b-input
                      type="text"
                      maxlength="64"
                      minlength="3"
                      placeholder="Bairro">
                    </b-input>
                  </b-field>
                  </div>
                </div>
                <div class="columns">
                  <div class="column is-6">
                  <b-field
                    label="Rua">
                    <b-input
                      type="text"
                      maxlength="64"
                      minlength="3"
                      placeholder="Rua">
                    </b-input>
                  </b-field>
                  </div>
                  <div class="column">
                  <b-field
                    label="Número">
                    <b-input
                      type="text"
                      maxlength="64"
                      minlength="3"
                      placeholder="Número"
                      validation-message="Entre com um número"
                      pattern="[0-9]*">
                    </b-input>
                  </b-field>
                  </div>
                  <div class="column">
                  <b-field
                    label="Complemento">
                    <b-input
                      type="text"
                      maxlength="64"
                      minlength="3"
                      placeholder="Complemento">
                    </b-input>
                  </b-field>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                  <b-field
                    label="Estado">
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
                    label="Municipio">
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
                      label="Senha">
                      <password
                        maxlength="60"
                        v-model="passwordTemp"
                        :secureLength="8">
                      </password>
                    </b-field>
                  </div>
                  <div class="column">
                    <b-field
                      label="Confirmação de senha"
                      :type="{ 'is-danger': !errors.passwordConfirmed }"
                      :message="{
                        'Senha diferente da inserida anteriormente': !errors.passwordConfirmed,
                      }">
                      <b-input
                        type="password"
                        v-model="passwordConfirm"
                        @input="
                          errors.passwordConfirmed =
                            passwordTemp == passwordConfirm">
                      </b-input>
                    </b-field>
                  </div>
                </div>
                <div class="columns">
                  <div class="column">
                    <div class="buttons is-justify-content-right">
                    <b-button
                      type="is-success">
                      Registrar
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
import Password from "vue-password-strength-meter";
import { getEstados, getMunicipios } from "../services/ibge";
export default{
  name: "Registro",
  components: { Password },
  directives: {
    mask(el, binding) {
      binding.value ? mask(el, binding) : (el.oninput = null);
    },
  },
  data() {
        return {
            avatar: null,
            imageData: null,
            errors: {
              passwordConfirmed: true,
            },
            passwordConfirm: null,
            estados: [],
            estadoTemp: [],
            passwordTemp: null,
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
    removePhoto(){
      if (this.isEdit) {
        if (this.imageData && this.imageData.startsWith("http")) {
              this.avatar = null;
              this.imageData = "";
              this.$buefy.toast.open({
                message: "Foto removida com sucesso!.",
                type: "is-primary",
              });
              this.$buefy.toast.open({
                message: "Ocorreu um erro ao remover a foto.",
                type: "is-danger",
              });
              return Promise.reject();
      }
      else{
        this.avatar = null;
        this.imageData = "";
        return Promise.resolve;
      }
      } 
      else{
      this.avatar = null;
      this.imageData = "";
      return Promise.resolve();
      }
    },
    loadMunicipios(){
      if (this.estadoTemp) {
        return getMunicipios(this.estadoTemp).then(
          (resp) => (this.municipios = resp.data)
        );
      } else return [];
    },
    deleteDropFile(){
      this.avatar = null;
    },
    previewImage: function(){
    if (this.avatar){
      // criando um novo FileReader para ler a imagem e converter para o formato base64
      var reader = new FileReader();
      // Definindo uma função de retorno de chamada para executar quando o FileReader terminar a execução
      reader.onload = (e) => {
        // Observação: arrow function usada aqui, de modo que "this.imageData" se refira ao componente imageData do Vue
        // Lendo a imagem como base64 e definindo como imageData
        this.imageData = e.target.result;
      };
      // Iniciando o trabalho do leitor - lendo o arquivo como um URL de dados (formato base64)
      reader.readAsDataURL(this.avatar);
    }
    },
  },
  watch:{
    avatar(newAvatar){
      if (newAvatar){
        this.previewImage();
      }
    },
    computed:{
        selectedString(){
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
@include desktop{
   .img-avatar {
    margin-right: 3rem;
  }
}

main {
  background: url("../assets/capa.png"), url("../assets/ruido.png"),
    linear-gradient(110deg, $primary, #7c26f8);
  background-attachment: fixed;
}

</style>