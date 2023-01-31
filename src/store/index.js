import Vue from "vue";
import Vuex from "vuex";
import api, { loginUser, getUser } from "../services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async loginUser({ dispatch }, { email, user_password }) {
      let token = (await loginUser(email, user_password)).data.token;
      sessionStorage.setItem("token", token);
      dispatch("loginUserByToken", token);
    },
    async loginUserByToken({ commit }, token) {
      api.defaults.headers.common["Authorization"] = token;
      let resp = await getUser();
      commit("setUser", resp.data);
    },
    async logout({ commit }) {
      delete api.defaults.headers.common["Authorization"];
      sessionStorage.removeItem("token");
      commit("setUser", {});
    },
  },
  modules: {},
});