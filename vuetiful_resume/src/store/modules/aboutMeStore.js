// import axios from 'axios'
import resume from '../../api/resume'

const state = {
  information: {}
}

const getters = {
  allInformation: () => state.information
}

const actions = {
  fetchInformation ({ commit }) {
    console.log('fetch aboutme')
    // const response = await axios.get('url') // mapping with env server
    const informationFromServer = resume.fetchAboutMeFromServer()
    console.log(informationFromServer.information)
    commit('setAboutme', informationFromServer.information)
  }
}

const mutations = {
  setAboutme: (state, information) => {
    state.information = information
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
