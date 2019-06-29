import resume from '../../api/resume';

const state = {
  information: [],
};

const getters = {
  allInformation: () => state.information,
};

const actions = {
  fetchInformation({ commit }) {
    const informationFromServer = resume.fetchCareerFromServer();
    commit('setCareer', informationFromServer.information);
  },
};

const mutations = {
  setCareer: (passedState, information) => {
    state.information = information;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
