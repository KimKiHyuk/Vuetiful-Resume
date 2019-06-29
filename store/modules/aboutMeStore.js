import resume from '../../api/resume';

const state = {
  information: {},
};

const getters = {
  allInformation: () => state.information,
};

const actions = {
  fetchInformation({ commit }) {
    const response = resume.fetchAboutMeFromServer();
    commit('setAboutme', response.information);
  },
};

const mutations = {
  setAboutme: (passedState, information) => {
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
