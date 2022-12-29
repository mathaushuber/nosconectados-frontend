<template>
    <main>
        <div class="paralax" id="init">
  <h1>Tecnologia aliada a inovação!</h1>
  <p>Soluções estruturadas em auxílio a tomada de decisão com base no uso de Redes de Sensores sem Fio aplicadas a smartfarms, smartcities e smartcampus.</p>
  <b-button type="is-primary" tag="router-link" :to="{ path: '/registro' }">REGISTRE-SE</b-button>
</div>

<div class="blank">
  <div class="container">
    <h2 class="mt-5">Quem somos?</h2>
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
    <p>
      Trazer o melhor do software voltado à internet das coisas, capaz de fornecer dashboards e APIs, focado principalmente no mercado da agricultura digital, 
      extremamente aquecido atualmente, aplicando um conceito de smartfarm. Além da expectativa de incorporar a plataforma no mercado do agronegócio, 
      a plataforma também possibilita uma série de aplicações que podem abordar diversas áreas e finalidades como a utilização em pesquisas acadêmicas, 
      para monitoramento de diversos recursos, implementação de smartcities, smartcampus, entre outros.
    </p>
  </div>
</div>

<div class="paralax second" id="segundo">
  <div class="item">
    <div class="img img-first"></div>
    <div class="card">
      <h3>Smart Cities</h3>
      <p>Cidade que usa tipos diferentes de sensores eletrônicos para coletar dados e usá-los para gerenciar recursos e ativos eficientemente.</p>
      <b-button rounded class="mb-4">SAIBA MAIS</b-button><br />
    </div>
  </div>
  <div class="item">
    <div class="img img-second"></div>
    <div class="card">
      <h3>Smart Campus</h3>
      <p>Conceito que promove o desenvolvimento e implementação de soluções tecnológicas e sustentáveis focadas em áreas universitárias.</p>
      <b-button rounded class="mb-4">SAIBA MAIS</b-button><br />
    </div>
  </div>
  <div class="item">
    <div class="img img-third"></div>
    <div class="card">
      <h3>Smart Farming</h3>
      <p>Agricultura inteligente, focada na otimização da produção para trazer mais eficiência e diminuir desperdícios através da tecnologia.</p>
      <b-button rounded class="mb-4">SAIBA MAIS</b-button>
    </div>
  </div>
</div>

<div class="blank" id="devs">
  <div class="columns">
    <div class="column is-one-quarter">
      <a>
      <div class="card mt-4" @click="showAlert()">
        <div class="card-content">
          <p class="title">Mathaus Huber</p>
          <p class="subtitle ellipsis mb-4 ml-6">
            HuberM1998 <b-icon icon="github"></b-icon>
          </p>
          <figure class="image dev-figure">
            <img src="../assets/mh-image.png" alt="" srcset="" />
          </figure>
        </div>
      </div>
      </a>
    </div>
  </div>
</div>
    </main>
</template>

<script>
export default {
  methods: {
    showAlert() {
      this.$swal({
      title: 'Desenvolvido por Mathaus Huber',
      text: 'Entusiasta de software livre, desenvolvedor web Full Stack com experiência atuando no front-end e back-end. Em processo de graduação em Ciência da Computação pela Universidade Federal de Pelotas.',
      imageUrl: 'https://mathaushuber.com/Imagens/perfil.jpg',
      imageWidth: 300,
      imageHeight: 300,
      imageAlt: 'Mathaus Huber: @HuberM1998',
      })
    },
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

.paralax {
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
  
/*  this is where the magic happens:  */
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

#init p{
  max-width: 52ch;
  line-height: 1.5;
  padding: 1em;
}
/*
a {
  display: inline-block;
  padding: 1em 3.5em;
  background-color: var(--color);
  color: white;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 0.3em;
  font-weight: 700;
  letter-spacing: .5px;
  font-size: .875rem;
}
*/

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


</style>