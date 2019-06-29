import resume from '../../api/resume';

const state = {
  information: [],
};

const getters = {
  allInformation: () => state.information,
};

const actions = {
  async fetchInformation({ commit }) {
    const response = await resume.fetchCareerFromServer();
    commit('setCareer', response);
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
