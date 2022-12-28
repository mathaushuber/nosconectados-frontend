<template>
  <main>
    <div id="fundo">
      <img src="../assets/fundo.jpg">
    </div>
      <div class="container"><!-- Início container -->
        <div class="card center"><!-- Início card-->
          <div class="card-content"><!-- Início card-content -->
            <div class="content"><!-- Início content -->

                <img src="../assets/nosconectados.svg" width="250" height="150">
                <p class="mt-2">Soluções para o manejo integrado de pragas</p>
                <h2 class="is-justify-content-center">Login</h2>
                
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

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");
main{
  height: 100vh;
}
@include mobile{
}
@include desktop{
  #fundo img{
  height: 50vh;
  width: 100vw;
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
