<template>
  <main v-bind:id="isSwitchedCustom">
    <b-field class="mode">
      <b-switch v-model="isSwitchedCustom"
                class="mt-3 ml-3 letra"
                true-value="Light"
                false-value="Dark">
                {{ isSwitchedCustom }}
      </b-switch>
    </b-field>
    <section class="parallax" id="init"><!--Início seção inicial-->
      <h1>TECNOLOGIA ALIADA A INOVAÇÃO!</h1>
      <p>Soluções estruturadas em auxílio a tomada de decisão com base no uso de Redes de Sensores sem Fio aplicadas a smartfarms, smartcities e smartcampus.</p>
      <b-button type="is-primary" tag="router-link" :to="{ path: '/registro' }">REGISTRE-SE</b-button>
    </section><!--Fim seção inicial-->

    <section class="blank"><!--Início seção secundária-->
      <div class="columns"><!--Início div columns-->
        <div class="column"><!--Início div column-->
          <div class="container"><!--Início div container-->
            <h2 class="mt-5 pt-5">Quem somos?</h2>
            NOSCONECTADOS nasceu de uma iniciativa acadêmica, na Universidade Federal de Pelotas (UFPel), apoiado pelo Conselho Nacional de Desenvolvimento Científico 
            e Tecnológico (CNPq), tendo como principal objetivo fomentar o desenvolvimento tecnológico na parte sul do estado do Rio Grande do Sul, mais especificamente
            na cidade de Pelotas, visando principalmente o setor do agronegócio, desenvolvida a priori como uma plataforma de solução para o manejo integrado de pragas. 
            <h2>O que a plataforma oferece?</h2>
            <strong>Poder de decisão:</strong>
            <p>
              Através de uma análise sistemática pela qual as informações e os dados são usados como base para as escolhas, o profissional terá em mãos
              uma ferramenta que servirá de apoio para a tomada de decisões no seu dia-a-dia. Assim é possível fazer uma análise lógica e ordenada para definir qual é 
              a melhor decisão a ser tomada.
            </p>
            <strong>Dados confiáveis:</strong>
            <p>
              Contando com informações disponibilizadas através de Redes de Sensores sem Fio utilizadas para a coleta dos mais variados tipos de dados, 
              consideráveis para as tomadas de decisões. Dessa forma, contamos com uma camada segurança que opera através de protocolos sobre a camada de 
              dados que está preocupada com os dados coletados, processados, enviados, armazenados e analisados.
            </p>
            <strong>Relatórios atualizados:</strong>
            <p>
              Relatórios precisos que podem ser acessados por qualquer dispositivo com acesso a internet, disponibilizando dashboards intuitivos com a intenção
              de viabilizar um melhor entendimento dos dados pela perspectiva do usuário.
            </p>
            <h2>Intuito da plataforma:</h2>
            <p class="mb-5 pb-5">
              Trazer o melhor do software voltado à internet das coisas, capaz de fornecer dashboards e APIs, focado principalmente no mercado da agricultura digital, 
              extremamente aquecido atualmente, aplicando um conceito de smartfarm. Além da expectativa de incorporar a plataforma no mercado do agronegócio, 
              a plataforma também possibilita uma série de aplicações que podem abordar diversas áreas e finalidades como a utilização em pesquisas acadêmicas, 
              para monitoramento de diversos recursos, implementação de smartcities, smartcampus, entre outros.
            </p><br />
          </div><!--Fim div container-->
        </div><!--Fim div column-->
      </div><!--Fim div columns-->
    </section><!--Fim seção secundária-->

    <section class="parallax second" id="segundo"><!--Início seção terceária-->
      <div class="columns">
        <div class="column">
          <div class="item">
            <div class="img img-first"></div>
            <div class="card">
              <h3>Smart Cities</h3>
              <p>Cidade que usa tipos diferentes de sensores eletrônicos para coletar dados e usá-los para gerenciar recursos e ativos eficientemente.</p>
              <b-button rounded class="mb-4" @click="cityAlert()">SAIBA MAIS</b-button><br />
            </div>
          </div>
        </div>
        <div class="column">
          <div class="item">
            <div class="img img-second"></div>
            <div class="card">
              <h3>Smart Campus</h3>
              <p>Conceito que promove o desenvolvimento e implementação de soluções tecnológicas e sustentáveis focadas em áreas universitárias.</p>
              <b-button rounded class="mb-4" @click="campusAlert()">SAIBA MAIS</b-button><br />
            </div>
          </div>
        </div>
        <div class="column">
          <div class="item">
            <div class="img img-third"></div>
            <div class="card">
              <h3>Smart Farming</h3>
              <p>Agricultura inteligente, focada na otimização da produção para trazer mais eficiência e diminuir desperdícios através da tecnologia.</p>
              <b-button rounded class="mb-4" @click="farmAlert()">SAIBA MAIS</b-button>
            </div>
          </div>
        </div>
      </div>
    </section><!--Fim seção terceária-->

    <section class="blank" id="devs"><!--Início seção quaternária-->
      <div class="columns"><!--Início div columns-->
        <div class="column is-one-third"><!--Início primeira column à esquerda-->
          <div class="hero center mt-6"><!--Início Hero-->
            <div class="container is-max-desktop hero-body animated mt-6"><!--Início Hero-Body-->
              <h1 class="jt --debug mt-6">
                <span class="jt__row">
                  <span class="jt__text">NOSCONECTADOS</span>
                </span>
                <span class="jt__row jt__row--sibling" aria-hidden="true">
                  <span class="jt__text">NOSCONECTADOS</span>
                </span>
                <span class="jt__row jt__row--sibling" aria-hidden="true">
                  <span class="jt__text">NOSCONECTADOS</span>
                </span>
                <span class="jt__row jt__row--sibling" aria-hidden="true">
                  <span class="jt__text">NOSCONECTADOS</span>
                </span>
              </h1>
            </div><!--Fim Hero Body-->

            <div class="content has-text-centered buble"><!--Início div content todos os direitos reservados-->
              <span class="usechrome">All rights reserved. Copyright © 2023</span>
            </div><!--Fim div content todos os direitos reservados-->

          </div><!--Fim Hero-->
        </div><!--Fim primeira column à esquerda-->

        <div class="column"><!--Início column central-->
          <h2 class="mt-6 center">Avalie-nos!</h2>
          
          <b-field label="Email">
            <b-input type="email" placeholder="E-mail para contato"></b-input>
          </b-field>

          <b-field label="Mensagem">
            <b-input maxlength="400" type="textarea" placeholder="Descreva brevemente a sua experiência com a plataforma!"></b-input>
          </b-field>

          <b-rate 
            icon-pack="fas" 
            @change="success" 
            custom-text="Nota com base na experiência">
          </b-rate>

          <b-button type="is-primary" @click="avaliacao()">Enviar</b-button>
        </div><!--Fim column central-->

        <div class="column is-one-quarter"><!--Início última column-->
          <a>
          <div class="card mt-6 pt-6" @click="showAlert()"><!--Início div card-->
            <div class="card-content center"><!--Início div card-content-->
              <p class="title">Mathaus Huber</p>
              <p class="subtitle ellipsis mb-4 ml-6">
                HuberM1998 <b-icon icon="github"></b-icon>
              </p>
              <figure class="image dev-figure">
                <img src="../assets/mh-image.png" alt="" srcset="" />
              </figure>
            </div><!--Fim div card-content-->
          </div><!--FIm div card-->
          </a><br />
        </div><!--Fim última column-->
      </div><!--Fim columns-->
    </section><!--Fim seção quaternária-->

  </main>
</template>

<script>
export default {
  data() {
    return {
      isSwitchedCustom: 'Light'
          }
        },
  methods: {
    success() {
                this.$buefy.toast.open({
                    message: 'Obrigado pela sua avaliação!',
                    type: 'is-success'
                })
            },
    showAlert() {
      this.$swal({
      title: 'Desenvolvido por Mathaus Huber',
      text: 'Entusiasta de software livre. Desenvolvedor Web Full Stack com experiência atuando no front-end e back-end. Em processo de graduação em Ciência da Computação pela Universidade Federal de Pelotas.',
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: '<a href="https://www.mathaushuber.com" target="_blank">Site</a>',
      cancelButtonText: '<a href="https://www.github.com/HuberM1998" target="_blank">Github</a>',
      imageUrl: 'https://mathaushuber.com/Imagens/perfil.jpg',
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: 'Mathaus Huber: @HuberM1998',
      })
    },
    cityAlert(){
      this.$swal({
        title: 'Smart City',
        text: 'Uma smart city é uma cidade eficiente, conectada e sustentável. Por meio de inovações tecnológicas, os projetos dessas cidades buscam proporcionar um ambiente urbano que promova o desenvolvimento humano, use os recursos naturais de forma sustentável e impulsione a economia local. O conceito das smart cities proporciona uma verdadeira revolução na perspectiva sobre o espaço urbano. Muito mais do que um local para abrigar pessoas, as cidades são vistas como um ambiente que, se bem-planejado, pode favorecer a sociedade em diversos níveis. Por exemplo, por meio da Internet das Coisas (IoT), é possível utilizar dados para conectar sistemas, produtos e usuários, garantindo maior produtividade e eficiência energética. ',
        icon: 'question',
      })
    },
    campusAlert(){
      this.$swal({
        title: 'Smart Campus',
        text: 'Utiliza o conceito de Smart Cities, que promove o desenvolvimento e implementação de soluções tecnológicas e sustentáveis em diversas áreas de uma cidade. As soluções são pensadas para melhorias nas áreas de Educação, Recursos Naturais, Conectividade, Mobilidade e Segurança, Qualidade de Vida e Uso da Energia. A ideia inovadora, que envolve a adoção de práticas de uma cidade inteligente dentro de uma universidade, por meio da conexão de dados, sistemas e pessoas é um conceito que embora ainda pouco utilizado na prática, irá auxiliar na qualidade e no desempenho dos serviços em um Campus Universitário',
        icon: 'question',
      })
    },
    farmAlert(){
      this.$swal({
        title: 'Smart Farming',
        text: 'Smart farming ou agricultura inteligente é um conceito que busca conciliar a gestão agrícola à tecnologias de dados, de modo a otimizar os complexos sistemas e voláteis dinâmicas da agricultura. O smart farming está dentro de um guarda-chuva de revoluções que fazem parte da Agricultura 4.0 e Agricultura 5.0, como o digital farming e a agricultura de precisão. Assim, é possível se utilizar de dispositivos, sistemas e recursos tecnológicos para captar dados aprofundados sobre a plantação, possibilitando melhor rastreio, monitoramento, automatização e análise das operações. O principal exemplo, e a grande força-motriz desse movimento, é a Internet das Coisas (IoT). Com recursos de automação e o acesso a dados atualizados em tempo real, os agricultores têm um melhor controle sobre o processo de produção e as variáveis que podem impactá-lo.',
        icon: 'question',
      })
    },
    avaliacao(){
      this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Você não está conectado, faça login na plataforma para concluir a avaliação!'
      })
    }
  },
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Text:wght@400;700&display=swap');

:root{
--color: #333; 
}

body {
  font-family: 'Red Hat Text', sans-serif;
}

.mode{
  text-align:left;
  display:grid;
  justify-content:left;
  align-items: flex-start;
  position: absolute;
  top: -10;
  left: -10;
}
#Light{
    background-color: rgb(255, 255, 255);
  }

#Light .mode{
  color: rgb(255, 255, 255);
}

#Dark{
    background-color: rgb(0, 0, 0);
    color: rgb(255, 255, 255);
}

#Dark .mode{
  color: rgb(0, 0, 0);
}

#Dark #segundo .card{
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}

#Dark #segundo .item{
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}

#Dark #init h1{
  color: rgb(5, 5, 5);
  -webkit-text-stroke-width: 0.5px;
  -webkit-text-stroke-color: rgb(255, 255, 255);
}

#Dark #init p{
  color: rgb(252, 249, 249);
}

@include mobile{
  #segundo{
    padding-top: 200px;
    padding-bottom: 100px;
  }
}

.parallax {
  text-align: center;
  color: white;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image:url(../assets/background-about.jpg);
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

h1 {
  font-weight: 700;
  font-size: 3rem;
}

h2{
  font-weight: 500;
  font-size: 2rem;
}

#segundo p{
  max-width: 52ch;
  line-height: 1.5;
  padding: 1em;
}

#segundo{
  position:relative;
}

#init p{
  max-width: 52ch;
  line-height: 1.5;
  padding: 1em;
}

.blank,
.other {
  width: 100%;
  min-height: 60vh;
  background-color: var(--color);
}

.second {
  background-image:url(../assets/background-about2.jpg);
  background-attachment: fixed;
  height: 1200px;
}

h3 {
  font-weight: 700;
  font-size: 1.6rem;
  margin-top: 1em;
}

.card > a {
  margin-bottom: 2em;
}

.item {
  display: flex;
  max-width: 320px;
  background-color: white;;
  flex-direction: column;
  align-items: center;
  border-radius: .5em;
  -webkit-box-shadow: 0px 29px 38px -15px rgba(0,0,0,0.43);
  -moz-box-shadow: 0px 29px 38px -15px rgba(0,0,0,0.43);
  box-shadow: 0px 29px 38px -15px rgba(0,0,0,0.43);
}

.img {
  width: 90%;
  height: 200px;
  background-color: lightgrey;
  background-size: cover;
  background-position: center;
  margin-top: 20px;
  border-radius: .3em;;
}

.img-first {
  background-image:url(../assets/smartcities.png);
}

.img-second {
  background-image: url(../assets/smartcampus.jpg);
}

.img-third {
  background-image: url(../assets/smartfarm.jpg);
}

.second {
  flex-direction: row;
  gap: 1.6em;
}

.dev-figure img {
  max-height: 250px;
  width: auto;
}

#devs .ellipsis{
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}


#devs .card {
  width: fit-content;
  margin: 0 auto;
}

.center {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}

.jt {
  @include mobile{
    font-size:13.1vmin;
  }
  position: relative;
  font-size: 8.1vmin;
  font-family: 'Staatliches', sans-serif;
  text-transform: uppercase;
  font-display: swap;
  text-shadow: 0 0 10px $primary;
  margin-bottom: -50px;
}

.jt__row {
  display: block;
}
.jt__row:nth-child(1) {
  clip-path: polygon(-10% 75%, 110% 75%, 110% 110%, -10% 110%);
}
.jt__row:nth-child(2) {
  clip-path: polygon(-10% 50%, 110% 50%, 110% 75.3%, -10% 75.3%);
}
.jt__row:nth-child(3) {
  clip-path: polygon(-10% 25%, 110% 25%, 110% 50.3%, -10% 50.3%);
}
.jt__row:nth-child(4) {
  clip-path: polygon(-10% 0%, 110% 0%, 110% 25.3%, -10% 25.3%);
}
.jt__row.jt__row--sibling {
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
}
.jt__text {
  display: block;
  transform-origin: bottom left;
  animation: moveIn 2s 0s cubic-bezier(.36,0,.06,1) alternate infinite ;
}
.jt__row:nth-child(1) .jt__text {
  transform: translateY(-0.1em);
}
.jt__row:nth-child(2) .jt__text {
  transform: translateY(-0.3em) scaleY(1.1);
}
.jt__row:nth-child(3) .jt__text {
  transform: translateY(-0.5em) scaleY(1.2) ;
}
.jt__row:nth-child(4) .jt__text {
  transform: translateY(-0.7em) scaleY(1.3) ;
}
.jt__row:nth-child(5) .jt__text {
  transform: translateY(-0.9em) scaleY(1.4) ;
}
.jt__row:nth-child(6) .jt__text {
  transform: translateY(-1.1em) scaleY(1.5) ;
}

@keyframes moveIn {
  50%, 100% { 
    transform: translateY(0em)
  }
  0%   { 
  opacity: 0; 
  filter: blur(10px);
  
  }
  100% { 
  opacity: 1; 
  filter: blur(0px);
  }
}

.debug .jt__row:nth-child(even) {
  color: black;
  background: white;
}

.debug .jt__row:nth-child(odd) {
  color: white;
  background: black;
}

* { box-sizing: border-box }

.animated h1{
  color: $partamon-logo-color;
}

.usechrome{
  font-size: 10px;
  color: rgb(78, 77, 77);
  font-family: helvetica, arial;
  position: relative;
  margin-top: -50px;
  text-align: center;
  left: 0;
}

</style>