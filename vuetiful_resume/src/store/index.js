import Vuex from 'vuex'
import Vue from 'vue'
import aboutMeStore from './modules/aboutMeStore'
import careerStore from './modules/careerStore'
import educationStore from './modules/educationStore'
import projectStore from './modules/projectStore'
import skillStore from './modules/skillStore'

// Load Vuex
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    aboutMeStore,
    careerStore,
    educationStore,
    projectStore,
    skillStore
  }
})
