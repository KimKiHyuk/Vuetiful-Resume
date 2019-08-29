import Vuex from 'vuex';
import Vue from 'vue';
import aboutMeStore from './modules/aboutMeStore';
import careerStore from './modules/careerStore';
import educationStore from './modules/educationStore';
import projectStore from './modules/projectStore';
import skillStore from './modules/skillStore';
// import resume from '../api/resume';

// Load Vuex
Vue.use(Vuex);

const createStore = () => new Vuex.Store({
  actions: {
    // eslint-disable-next-line no-unused-vars
    nuxtServerInit({ commit }) {
      console.log('server init');
    },
  },
  modules: {
    aboutMeStore,
    careerStore,
    educationStore,
    projectStore,
    skillStore,
  },
});

export default createStore;
