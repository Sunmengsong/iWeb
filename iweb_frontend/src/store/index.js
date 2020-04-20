import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    courseTypes: [],
    sessionUser: {},
  },
  mutations: {
    setCourseTypes(state, types) {
      state.courseTypes = types;
    },
    setSessionUser(state, user) {
      sessionStorage.setItem("userInfo", JSON.stringify(user));
      state.sessionUser = user;
    },
    LOGOUT(state) {
      sessionStorage.removeItem("userInfo");
      state.sessionUser = {};
    },
  },
  actions: {},
  modules: {},
});
