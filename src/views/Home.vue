<template>
  <main v-bind:class="isSwitchedCustom">
    <b-field>
      <b-switch v-model="isSwitchedCustom"
                class="mt-3 ml-3"
                true-value="Light"
                false-value="Dark">
                {{ isSwitchedCustom }}
      </b-switch>
    </b-field>
      <div class="container"><!-- Início container -->
        <div class="card center"><!-- Início card-->
          <div class="card-content"><!-- Início card-content -->
            <div class="content"><!-- Início content -->
              <div class="center">
                <img src="../assets/nosconectados.svg" width="250" height="150">
              </div>
                <p class="mt-2 center">Plataforma integrada de soluções IoT</p>
                <h2 class="is-justify-content-center">Login</h2>
                <b-field :type="{ 'is-danger': error }">
                 <b-input 
                 placeholder="E-mail"
                 v-model="email">
                </b-input>
                </b-field>
                <b-field :type="{ 'is-danger': error }">
                 <b-input 
                 placeholder="Senha" 
                 class="mt-5"
                 type="password"
                 v-model="user_password"
                 password-reveal></b-input>
                </b-field>
                <br>
                 <a class="center" @click="showAlert()">Esqueci minha senha</a><br>
                 <div class="buttons center is-justify-content-center">
                  <b-button 
                     type="is-success" 
                     tag="router-link"
                     @click="login"
                     :to="{ path: '/dashboard' }"
                     class="mt-5">Entrar
                  </b-button>                   
                  <b-button
                     class="mt-5"
                     type="is-warning"
                     tag="router-link"
                     :to="{ path: '/registro' }">
                     Criar conta
                  </b-button>
                 </div>

            </div><!-- Fim content -->
          </div><!-- Fim card-content-->
        </div><!-- Fim content-->
      </div><!-- Fim container -->  
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default{
  name: "Home",
  components: {},
  data() {
    return {
      isSwitchedCustom: 'Light',
      email: '',
      user_password: '',
      error: false
          }
        },
  methods: {
    ...mapActions(["loginUser", "loginUserByToken"]),
    login() {
      this.loginUser({
        email: this.email,
        user_password: this.user_password,
      })
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(() => (this.error = true));
    },
    showAlert(){
      this.$swal({
  title: 'Entre com o seu e-mail',
  subtitle: 'Enviaremos uma solicitação de nova senha por lá!',
  input: 'text',
  inputAttributes: {
    autocapitalize: 'off'
  },
  showCancelButton: true,
  confirmButtonText: 'Enviar',
  cancelButtonText: 'Cancelar',
  showLoaderOnConfirm: true,
  preConfirm: (login) => {
    return fetch(`https://nosconectados.herokuapp.com/api/users?rq=read${login}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .catch(error => {
        this.$swal.showValidationMessage(
          `Request failed: ${error}`
        )
      })
  },
  allowOutsideClick: () => !this.$swal.isLoading()
}).then((result) => {
  if (result.isConfirmed) {
    this.$swal({
      title: `${result.value.login}'s avatar`,
      imageUrl: result.value.avatar_url
    })
  }
})
    },
  },
  computed: { ...mapState(["user"]) },
  watch: {
    user(newUser) {
      if (newUser.id) this.$router.push("/dashboard");
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
.Light{
  height: 100vh;
  background-image: url(../assets/Cover.png);
}

.Dark{
  height: 100vh;
  background-image: url(../assets/Cover-dark.png);
}
@include mobile{
.card {
  margin-top: 60px;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
}
@include desktop{
  #fundo img{
  height: 50vh;
  width: 100vw;
}

img{
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.card{
  width: 500px;
  display:block;
  margin-top: 150px;
  padding-top: 100px;
  height: auto;
  padding: 30px;
  }
}

</style>
