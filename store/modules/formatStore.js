import { API_LIST, fetchAllFromServer } from '../../api/resume';

const state = {
  data: [],
};

const getters = {
  allInformation: () => state.data,
  getInformationLength: () => Object.keys(state.data).length,
};

const actions = {
  async fetchInformation({ commit }) {
    const response = await fetchAllFromServer(API_LIST.format);
    commit('setFormat', response.data);
  },
};

const mutations = {
  setFormat: (passedState, responseData) => {
    state.data = responseData;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
