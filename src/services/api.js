import axios from "axios";
  const API_URL = process.env.VUE_APP_API_URL;
  const api = axios.create({
    baseURL: `${API_URL}/api/v1`,
  });

  function loginUser(email, user_password) {
    return api.post("/login", { email, user_password });
  }

  function getUser() {
    return api.get("/user");
  }
  export{
    loginUser,
    getUser,
  };

  export default api;