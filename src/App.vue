<template>
  <main>
    <div id="app">
    </div>
    <b-navbar class="navbar-pesthand">
      <template #brand>
        <b-navbar-item v-if="!user.id" tag="router-link" :to="{ path: '/' }">
          <span class="pesthand-logo">NOSCONECTADOS</span>
        </b-navbar-item>
        <b-navbar-item v-else tag="router-link" :to="{ path: '/dashboard' }">
          <span class="pesthand-logo">NOSCONECTADOS</span>
        </b-navbar-item>
      </template>

      <template #start v-if="!user.id">
        <b-navbar-item tag="router-link" :to="{ path: '/sobre' }">
          INFORMAÇÕES SOBRE
        </b-navbar-item>

        <b-navbar-item tag="router-link" :to="{ path: '/help' }">
          AJUDA
        </b-navbar-item>

        <b-navbar-item tag="router-link" :to="{ path: '/sensores' }">
          SENSORES
        </b-navbar-item>
      </template>

      <template #start v-else>
        <b-navbar-item tag="router-link" :to="{ path: '/sobre' }">
          INFORMAÇÕES SOBRE
        </b-navbar-item>

        <b-navbar-item tag="router-link" :to="{ path: '/help' }">
          AJUDA
        </b-navbar-item>
        <b-dropdown position="is-bottom-left" append-to-body aria-role="menu">
          <template #trigger>
            <a class="navbar-item" role="button">
              <span>PAINEL</span>
              <b-icon icon="menu-down"></b-icon>
            </a>
          </template>

          <b-dropdown-item has-link aria-role="menuitem">
            <router-link to="/create-sensor">
              <b-icon icon="plus-thick"></b-icon>
              Criar Sensor
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item has-link aria-role="menuitem">
            <router-link to="/edit-perfil">
              <b-icon icon="account-edit"></b-icon>
              Editar Perfil
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item has-link aria-role="menuitem">
            <router-link to="solicitacoes">
              <b-icon icon="access-point-minus"></b-icon>
              Solicitações Enviadas
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item has-link value="blog" aria-role="menuitem">
            <router-link to="/meus-sensores">
              <b-icon icon="lan"></b-icon>
              Meus Sensores
            </router-link>
          </b-dropdown-item>
          <hr class="dropdown-divider" aria-role="menuitem">
          <b-dropdown-item has-link aria-role="menuitem">
            <router-link to="/sensores">
              <b-icon icon="account-group"></b-icon>
              Sensores Públicos
            </router-link>
          </b-dropdown-item>
          <b-dropdown-item has-link aria-role="menuitem" v-if="user.isAdmin === 1">
            <router-link to="/administrador">
              <b-icon icon="cog"></b-icon>
              Administrador
            </router-link>
          </b-dropdown-item>
        </b-dropdown>
      </template>

      <template #end v-if="!user.id">
        <b-navbar-item tag="router-link" :to="{ path: '/registro' }">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Registrar</strong>
            </a>
          </div>
        </b-navbar-item>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Entrar</strong>
            </a>
          </div>
        </b-navbar-item>
      </template>

      <template #end v-else>
        <p class="mt-3 mr-2 p-log">Logado como <b>{{ user.firstName }} {{ user.lastName }}</b></p>
        <b-tooltip label="Encerrar sessão" position="is-left">
          <b-button label="Logout" @click="doLogout" class="mt-1 mr-3 button-logout" type="is-dark" />
        </b-tooltip>
      </template>
    </b-navbar>
    <router-view />
  </main>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: 'App',
  created() {
    if (!this.user.id) {
      let token = window.sessionStorage.getItem("token");
      if (token) this.loginUserByToken(token);
    }
  },
  computed: {
    ...mapState(["user"]),
  },
  methods: {
    ...mapActions(["loginUserByToken", "logout"]),
    doLogout() {
      this.logout();
      this.$router.push("/");
    },
  }
};

</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");

.pesthand-logo {
  font-family: "Arial", cursive;
  color: $partamon-logo-color;
  font-size: 1.1rem;
}

.navbar-pesthand {
  border-bottom: $primary $partamon-navbar-border-height solid;
}

@include mobile {

  .button-logout,
  .p-log {
    margin-left: 14px;
  }
}

main {
  overflow-x: auto;
  /* Barra de rolagem horizontal */
}
</style>
