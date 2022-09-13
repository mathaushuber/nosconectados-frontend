<template>
  <main>
<div id="fundo">
  <img src="../assets/fundo.jpg">
</div>
<div class="container">
 <div class="card center">
       <div class="card-content">
          <div class="content">
            <img src="../assets/partamon.png">
            <p>Soluções para o manejo integrado de pragas</p>
            <h2 class="is-justify-content-left">Login</h2>
             <b-input placeholder="E-mail"></b-input>
             <b-input 
             placeholder="Senha" 
             class="mt-5"
             type="password"
             password-reveal></b-input><br>
             <a href="" class="center">Esqueci minha senha</a><br>
             <div class="buttons center is-justify-content-center">
                                 <b-button 
             type="is-success" 
             tag="router-link"
             :to="{ path: '/dashboard' }"
             class="mt-5">Entrar</b-button>
                                 <b-button
                      class="mt-5"
                      type="is-warning"
                      tag="router-link"
                      :to="{ path: '/registro' }"
                      >
                      Criar conta
                    </b-button>
                  </div>
          </div>
      </div>
    </div>
  </div>  
  </main>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
main{
  height: 100vh;
}
@include mobile{
  .fundo{
    display: none;
  }
}
@include desktop{
    .fundo{
  background: url(../assets/fundo.jpg);
}
  .card{
  width: 500px;
  margin-top: -300px;
  height: auto;
  padding: 30px;
  }
}
  .center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
