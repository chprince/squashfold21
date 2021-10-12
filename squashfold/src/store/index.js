import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    themeSettings: {
      palette: {
        bg1: {hex: 'FBE8DE'},
        bg2: {hex: 'CBF4EB'},
        accent: {hex: 'FF846C'},
        accent2: {hex: '7FD1AE'},
      }
    },
  },
  getters: {
    getThemeSettings: (state) => {
      return state.themeSettings;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
