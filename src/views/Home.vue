<template>
  <main>
    <div class="container">
      <div class="col-md-12">
        <div class="home is-flex is-justify-content-space-around">
          <div>
            <div class="card">
              <div class="card-content">
                <div class="content">
                  <div class="center">
                    <img src="../assets/nosconectados.svg" width="250" height="150">
                  </div>
                  <p class="mt-2 center">Plataforma integrada de soluções IoT</p>
                  <h2 class="center">Login</h2>
                  <b-field label="Email">
                    <b-input type="email" placeholder="usuario@nosconectados.com" v-model="email">
                    </b-input>
                  </b-field>

                  <b-field label="Senha">
                    <b-input type="password" password-reveal placeholder="********" v-model="user_password"
                      @keyup.enter="login">
                    </b-input>
                  </b-field>
                  <div class="center mt-5">
                    <b-button @click="login" type="is-primary" class="center">Entrar
                      <b-loading :is-full-page="true" v-model="isLoading" :can-cancel="false"></b-loading>
                    </b-button>
                    <b-button tag="router-link" :to="{ path: '/registro' }" class="ml-4" type="is-warning">Criar conta
                    </b-button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Home",
  components: {},
  data() {
    return {
      isLoading: false,
      email: "",
      user_password: "",
      testeStatus: {
        status: "Não foi possível fazer login, verifique seu email e senha!"
      },
    };
  },
  methods: {
    ...mapActions(["loginUser", "loginUserByToken"]),
    login() {
      this.isLoading = true;
      this.loginUser({
        email: this.email,
        user_password: this.user_password,
      })
        .then(() => {
          this.$router.push("/dashboard");
          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
          this.$buefy.toast.open({
            message: 'Não foi possível realizar o login. Verifique seu email e senha!',
            type: 'is-danger'
          });
        });
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
@include tablet {
  .home {
    height: 100vh;
  }
}

@include touch {
  .home {
    min-width: 100vw;
  }
  .card{
    width: 100%;
    margin-left: -10px;
    margin-top: 20px;
  }
}
@include desktop{
.card {
  width: 500px;
  display: block;
  margin-top: 150px;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
  height: auto;
  padding: 30px;
  background-color: rgba(255, 255, 255, 1);
}
}
main {
  background-image: url(../assets/Cover.png);
}
</style>