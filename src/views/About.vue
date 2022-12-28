<template>
    <main>
        <div class="paralax">
  <h1>Tecnologia aliada à inovação!</h1>
  <p>Soluções estruturadas em auxílio a tomada de decisão com base no uso de Redes de Sensores sem Fio aplicadas a smartfarms, smartcities e smartcampus.</p>
  <b-button type="is-primary">REGISTRE-SE</b-button>
</div>

<div class="blank"></div>

<div class="paralax second">
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

<div class="blank"></div>
    </main>
</template>

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

p {
  max-width: 52ch;
  line-height: 1.5;
  padding: 1em;
}

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

</style>