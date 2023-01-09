import Vue from "vue";
import Vuex from "vuex";
import api, { loginUser, getUser } from "../services/api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    filters: {
      sex: null,
      size: null,
      specie: null,
    },
    sort: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    clearFilters(state) {
      state.filters = {
        sex: null,
        size: null,
        specie: null,
      };
    },
    clearFiltersAndSort(state) {
      state.filters = {
        sex: null,
        size: null,
        specie: null,
      };
      state.sort = null;
    },
    setFiltersAndSort(state, filtersAndSort) {
      state.sort = filtersAndSort.sort;
      state.filters = Object.assign({}, state.filters, filtersAndSort.filters);
    },
    setFilters(state, filters) {
      state.filters = Object.assign({}, state.filters, filters);
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