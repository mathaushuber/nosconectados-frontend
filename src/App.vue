<template>
  <main>
    <div id="app">
    </div>
    <b-navbar class="navbar-pesthand">
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <span class="pesthand-logo">PestHand</span>
        </b-navbar-item>
      </template>
       
      <template #start>
        <b-navbar-item tag="router-link" :to="{ path: '/sobre' }">
          INFORMAÇÕES SOBRE
        </b-navbar-item>
      </template>

      <template #end>
        <b-navbar-item tag="router-link" :to="{ path: '/registro' }">
          <div class="buttons">
            <a class="button is-success">
              <strong>Registrar</strong>
            </a>
          </div>
        </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <div class="buttons">
              <a class="button is-success is-light">
                <strong>Entrar</strong>
              </a>
            </div>
          </b-navbar-item>
      </template>
    </b-navbar>
    <router-view />
  </main>
</template>

<script>
export default {
  name: 'App'
};

</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");

.pesthand-logo {
  font-family: "Staatliches", cursive;
  color: $partamon-logo-color;
  font-size: 1.7rem;
}

.navbar-pesthand{
   border-bottom: $primary $partamon-navbar-border-height solid;
}
</style>
