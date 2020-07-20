import Vue from "vue";
import Vuex from "vuex";
import { fetchData } from "@/services.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: false,
    apiLoaded: false,
    palletes: [
      {
        id: 1,
        name: "RGB",
        colors: ["#ff0000", "#00ff00", "#0000ff"]
      },
      {
        id: 2,
        name: "CMKY",
        colors: ["#00aaff", "#ff00d4", "#000000", "#ffff00"]
      },
      {
        id: 3,
        name: "Tons of blue",
        colors: ["#001999", "#0044cc", "#0080ff", "#3d99f5", "#75b3f0"]
      }
    ]
  },
  mutations: {
    UPDATE_PALLETES(state, payload) {
      state.palletes = payload;
    },
    UPDATE_LOADING(state, payload) {
      state.loading = payload;
    },
    UPDATE_API_LOADED(state, payload) {
      state.apiLoaded = payload;
    }
  },
  actions: {
    fetchPalletes: async function(context, payload) {
      context.commit("UPDATE_LOADING", true);
      const apiPalletes = await fetchData(payload);

      if (apiPalletes && !context.state.apiLoaded) {
        context.commit("UPDATE_PALLETES", apiPalletes);
        context.commit("UPDATE_API_LOADED", true);
      }

      context.commit("UPDATE_LOADING", false);
    }
  },
  modules: {}
});
