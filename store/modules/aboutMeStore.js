import { API_LIST, fetchAllFromServer } from '../../api/resume';

const state = {
  information: {},
};

const getters = {
  allInformation: () => state.information,
};

const actions = {
  async fetchInformation({ commit }) {
    const response = await fetchAllFromServer(API_LIST.aboutme);
    commit('setAboutme', response.data.information);
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
