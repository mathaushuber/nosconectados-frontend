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

  function getSensores() {
    return api.get("/v1/sensores/lista-geral");
  }

  function getUsers(){
    return api.get("/v1/usuarios/lista");
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
  };

  export default api;