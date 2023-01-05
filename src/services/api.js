import axios from "axios";
  const API_URL = process.env.VUE_APP_API_URL;
  const api = axios.create({
    baseURL: `${API_URL}/api/v1`,
  });

  function loginUser(email, password) {
    return api.post("/login", { email, password });
  }

  function getUser() {
    return api.get("/user");
  }
  export{
    loginUser,
    getUser,
  };

  export default api;