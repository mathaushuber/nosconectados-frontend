import axios from "axios";
  const API_URL = process.env.VUE_APP_API_URL;
  const api = axios.create({
    baseURL: `${API_URL}/api`,
  });

  function loginUser(email, user_password) {
    return api.post("/login", { email, user_password });
  }

  function getUser() {
    return api.get("/user");
  }

  function getSensorFromUser() {
    return api.get("/sensor");
  }

  function getToken() {
    return api.get("/token");
  }

  function registerUser(formData){
    return api.post("/v1/usuarios/cadastro", formData);
  }

  function createSensor(formData){
    return api.post("/v1/informacoes-sensor/adiciona", formData)
  }

  function getSensores() {
    return api.get("/v1/sensores/lista-geral");
  }

  function getUsers(){
    return api.get("/v1/usuarios/lista");
  }

  function getNomesUser(){
    return api.get("/v1/usuarios/nomes")
  }

  function listaSensores(){
    return api.get("/v1/sensores/lista")
  }

  function getAllSensores(){
    return api.get("/v1/sensores/lista/todos")
  }

  function getInformationSensors(){
    return api.get("/v1/informacoes-sensor/lista")
  }

  function getAtribuicoes(){
    return api.get("/v1/atribuicao/lista")
  }

  function getLocalizacoes(){
    return api.get("/v1/localizacoes-users/lista")
  }

  function getDetalheSensor(sensorId){
    return api.get("/v1/sensores/lista/geral/" + sensorId)
  }

  function getData(sensorId){
    return api.get("/v1/sensores/data/" + sensorId)
  }

  function getAdmins(sensorId){
    return api.get("/v1/atribuicao/lista-geral/" + sensorId)
  }

  function removeSensor(sensorId){
    return api.delete("/v1/informacoes-sensor/remove/" + sensorId)
  }

  function removeUsuario(usuarioId){
    return api.delete("/v1/usuarios/remove/" + usuarioId)
  }

  function removeDadoSensor(sensorId){
    return api.delete("/v1/sensores/remove/" + sensorId)
  }

  function removeAtribuicao(sensorId){
    return api.delete("/v1/atribuicao/remove/" + sensorId)
  }

  function removeLocalizacao(usuarioId){
    return api.delete("/v1/localizacoes-users/remove/" + usuarioId);
  }

  function sensoresSolicitados(){
    return api.get("/v1/sensores/solicitados")
  }

  export{
    loginUser,
    getUser,
    getUsers,
    getSensorFromUser,
    getSensores,
    listaSensores,
    getAllSensores,
    getInformationSensors,
    getAtribuicoes,
    getLocalizacoes,
    getDetalheSensor,
    getData,
    getAdmins,
    registerUser,
    getNomesUser,
    createSensor,
    removeSensor,
    removeUsuario,
    removeDadoSensor,
    removeAtribuicao,
    removeLocalizacao,
    sensoresSolicitados,
    getToken,
  };

  export default api;