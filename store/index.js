import Vuex from 'vuex';
import Vue from 'vue';
import aboutMeStore from './modules/aboutMeStore';
import careerStore from './modules/careerStore';
// import resume from '../api/resume';

// Load Vuex
Vue.use(Vuex);

const createStore = () => new Vuex.Store({
  actions: {
    // eslint-disable-next-line no-unused-vars
    nuxtServerInit({ commit }) {
      console.log('server init');
      // commit('aboutMeStore/setAboutme', resume.fetchAboutMeFromServer().information);
    },
  },
  modules: {
    aboutMeStore,
    careerStore,
  },
});

export default createStore;
