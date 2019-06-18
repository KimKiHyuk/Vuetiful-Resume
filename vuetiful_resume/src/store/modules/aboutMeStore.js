import resume from '../../api/resume'

const state = {
  information: {}
}

const getters = {
  allInformation: () => state.information
}

const actions = {
  async fetchInformation ({ commit }) {
    const response = await resume.fetchAboutMeFromServer()
    commit('setAboutme', response.data.information)
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
