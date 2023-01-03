import axios from "axios";
const api = axios.create({
    baseURL: 'http://localhost/partamon-backend/api/',
  });

  function requestUsers(){
   api.get('rd_users.php/?rq=read') 
  }

  export{
    requestUsers
  };

  export default api;