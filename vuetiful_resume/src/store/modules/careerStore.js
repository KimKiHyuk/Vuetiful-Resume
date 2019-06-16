import resume from "../../api/resume";

const state = {
  information: []
}

const getters = {
  allInformation: () => state.information
}

const actions = {
  fetchInformation ({ commit }) {
    console.log("fetch career")
    const informationFromServer = resume.fetchCareerFromServer()
    console.log(informationFromServer.information)
    commit("setCareer", informationFromServer.information)
  }
}

const mutations = {
  setCareer: (state, information) => {
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
