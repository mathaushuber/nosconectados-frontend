<template>
    <main v-bind:id="isSwitchedCustom">
  
      <div class="has-text-centered textWhite pb-6">
          <h1 class="is-size-3 is-uppercase has-text-weight-bold pt-6 text-center help">
              Ajuda com a aplicação
          </h1>
          <h2 class="help mt-1 pb-4">
              Dicas para utilizar a plataforma da maneira correta!
          </h2>
  
      </div>

  <div style="visibility: hidden; position: absolute; width: 0px; height: 0px;">
    <svg xmlns="http://www.w3.org/2000/svg">
      <symbol viewBox="0 0 24 24" id="expand-more">
        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/><path d="M0 0h24v24H0z" fill="none"/>
      </symbol>
      <symbol viewBox="0 0 24 24" id="close">
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/><path d="M0 0h24v24H0z" fill="none"/>
      </symbol>
    </svg>
  </div>
  
  <details class="mt-6">
    <summary>
      Devo me cadastrar como administrador?
      <svg class="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expand-more" /></svg>
      <svg class="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close" /></svg>
    </summary>
    <p>Ao efetuar o cadastro automaticamente o usuário é definido como um administrador podendo assim solicitar a instalação de novos sensores
       a sua propriedade.<br /> <br />
        
      Após o cadastro também é possível adicionar usuários patrocinadores e visualizadores que serão aliados a determinados sensores.
        </p>
  </details>
  
  <details>
  
    <summary>
      Quais as diferenças entre administrador, patrocinador e visualizador?
      <svg class="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expand-more" /></svg>
      <svg class="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close" /></svg>
    </summary>
    <p>Um administrador é responsável pela criação, modificação e visualização de sensores e respectivos usuários que estejam colaborando para 
       a gestão da propriedade.  <br /><br />
       Um patrocinador, por sua vez, poderá ser responsável pela modificação e visualização de respectivos sensores que lhe forem atribuidos por um administrador. <br /><br />
       Já um usuário do tipo visualizador, somente é possível a visualização dos sensores respectivamente atribuidos a si. </p>
  </details>
  
  <details>
    <summary>
      Como adicionar um sensor para a minha propriedade?    
      <svg class="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expand-more" /></svg>
      <svg class="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close" /></svg>
    </summary>
    <p>Ao fazer a solicitação para instalação de sensores em sua propriedade, o sistema terá um prazo de 30 dias para coleta das informações relevantes
       e envio de agentes de campo.
    </p>
  </details>
  
  <details>
    <summary>
      Onde ver as minhas solicitações de sensores? 
      <svg class="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expand-more" /></svg>
      <svg class="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close" /></svg>
    </summary>
    <p>Já na sua conta, você deve acessar o menu superior direito e selecionar o botão "Solicitações"!</p>
  </details>
  
  <details>
    <summary>
      Como funciona a geolocalização dentro da aplicação?    
      <svg class="control-icon control-icon-expand" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#expand-more" /></svg>
      <svg class="control-icon control-icon-close" width="24" height="24" role="presentation"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#close" /></svg>
    </summary>
    <p>Já na sua conta, logo após efetuar login, o usuário é direcionado ao dashboard, onde é possível ver as informações geolocalizadas dos determinados 
       sensores que estão relacionados a sua conta. Os dados referentes a localização dos sensores são feitos dentro da aplicação.
    </p>
  </details>

  <br /><br />
   
    </main>
  </template>
  
<script>
export default{
  data() {
    return {
      isSwitchedCustom: 'Light'
          }
        },
};
</script>
  <style lang="scss" scoped>
  #Light{
    background-color: rgb(255, 255, 255);
  }

  #Dark{
    background-color: rgb(0, 0, 0);
  }

  #Dark details{
    background-color: rgb(255, 255, 255);
  }

  #Dark .letra{
    color: rgb(255, 255, 255);
  }

  #Dark .help{
    color: #2b2c2c;
  }

  #Dark .mode{
    color: #2b2c2c;
  }

  body {
    font-family: "IBM Plex Sans", sans-serif;
    background-color: rgba(0,0,0,.1);
  }
  
  .help{
    color: #ffffff;
  }

  .mode{
    position: absolute;
    color:#ffffff;
  }

  h2 {
    font-size: 15px;
    font-weight: 100px;
    text-align: center;
    letter-spacing: 2px;
    line-height: 1.5;
  }
  
  details {
    width: 75%;
    min-height: 5px;
    max-width: 700px;
    padding: 45px 70px 45px 45px;
    margin: 0 auto;
    position: relative;
    font-size: 22px;
    border: 1px solid rgba(0,0,0,.1);
    border-radius: 15px;
    box-sizing: border-box;
    transition: all .3s;
  }
  
  details + details {
    margin-top: 20px;
  }
  
  details[open] {
    min-height: 50px;
    background-color: #f6f7f8;
    box-shadow: 2px 2px 20px rgba(0,0,0,.2);
  }
  
  details p {
    color: #96999d;
    font-weight: 300;
  }
  
  summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 500;
    cursor: pointer;
  }
  
  summary:focus {
    outline: none;
    
  }
  
  summary:focus::after {
    content: "";
    height: 100%;
    width: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 0 0 5px rebeccapurple;
  }
  
  summary::-webkit-details-marker {
    display: none
  }
  
  .control-icon {
    fill: rebeccapurple;
    transition: .3s ease;
    pointer-events: none;
  }
  
  .control-icon-close {
    display: none;
  }
  
  details[open] .control-icon-close {
    display: initial;
    transition: .3s ease;
  }
  
  details[open] .control-icon-expand {
    display: none;
  }
  
  .textWhite {
      color: white;
      background: url("../assets/capa.png"), url("../assets/ruido.png"),
      linear-gradient(110deg, $primary, #7c26f8); 
  }
  
  </style>