import Vuex from 'vuex';
import Vue from 'vue';
import aboutMeStore from './modules/aboutMeStore';
import careerStore from './modules/careerStore';
import educationStore from './modules/educationStore';
import projectStore from './modules/projectStore';
import skillStore from './modules/skillStore';
import authStore from './modules/authStore';

const cookieparser = process.server ? require('cookieparser') : undefined;
// import resume from '../api/resume';

// Load Vuex
Vue.use(Vuex);

const createStore = () => new Vuex.Store({
  actions: {
    nuxtServerInit({ commit }, { req }) {
      let auth = null;
      if (req.headers.cookie) {
        const parsed = cookieparser.parse(req.headers.cookie);
        try {
          auth = JSON.parse(parsed.auth);
        } catch (err) {
          // No valid cookie found
        }
      }
      commit('authStore/setAuth', auth);
    },
  },
  modules: {
    aboutMeStore,
    careerStore,
    educationStore,
    projectStore,
    skillStore,
    authStore,
  },
});

export default createStore;
