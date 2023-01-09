<template>
  <main v-bind:id="isSwitchedCustom">
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
              <b-input
                type="email"
                placeholder="jon@arbuckle.com"
                v-model="email"
              >
              </b-input>
            </b-field>

            <b-field label="Senha">
              <b-input
                type="password"
                password-reveal
                placeholder="********"
                v-model="user_password"
                @keyup.enter="login"
              >
              </b-input>
            </b-field>
            <div class="center mt-5">
            <b-button @click="login" type="is-primary" class="center">Entrar</b-button>
            <b-button
              class="ml-4"
              @click="loginFacebook"
              type="is-primary-outline"
              >Entrar com Facebook
              <b-icon
                icon="facebook"
                class="ml-1 content has-text-centered"
                type="is-primary"
              >
              </b-icon>
            </b-button>
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
import { loginFacebook } from "../services/api";
export default {
  name: "Home",
  components: {},
  data() {
    return { email: "", user_password: "", error: false };
  },
  methods: {
    ...mapActions(["loginUser", "loginUserByToken"]),
    toast(error) {
        if(error === true){
            this.$buefy.toast.open({
              message: 'Não foi possível realizar o login. Verifique seu email e senha!',
              type: 'is-danger'});
        }
            },
    login() {
      this.loginUser({
        email: this.email,
        user_password: this.user_password,
      })
        .then(() => {
          this.$router.push("/dashboard");
        })
        .catch(() => (this.error = true));
        this.toast(this.error);
    },
    loginFacebook() {
      window.FB.login(
        (response) => {
          console.log(response);
          if (response.status == "connected")
            if (response.authResponse) {
              loginFacebook(response.authResponse.accessToken).then((res) => {
                this.loginUserByToken(res.data.token).then(() => {
                  window.sessionStorage.setItem("token", res.data.token);
                  this.$router.push("/dashboard");
                });
              });
            } else {
              console.log("User cancelled login or did not fully authorize.");
            }
        },
        { scope: "email,public_profile" }
      );
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
.card-login {
  margin-top: 7rem;
}

#Light{
  height: 100vh;
  background-image: url(../assets/Cover.png);
  color: rgb(0, 0, 0);
}
#Dark{
  height: 100vh;
  background-image: url(../assets/Cover-dark.png);
  color: rgb(255, 255, 255);
}

@include tablet {
  .home {
    height: 100vh;
  }
}
@include touch {
  .home {
    min-height: 100vh;
  }

}

.card{
  width: 500px;
  display:block;
  margin-top: 150px;
  margin-bottom: auto;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
  height: auto;
  padding: 30px;
  background-color: rgba(255, 255, 255, 1);
  }

  main{
    background-image: url(../assets/Cover.png);
  }
</style>