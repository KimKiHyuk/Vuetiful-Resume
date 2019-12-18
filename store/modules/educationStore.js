import { API_LIST, fetchAllFromServer } from '../../api/resume';

const state = {
  data: undefined,
};

const getters = {
  allInformation: () => state.data,
};

const actions = {
  async fetchInformation({ commit }) {
    const response = await fetchAllFromServer(API_LIST.education);
    commit('setEducation', response.data);
  },
};

const mutations = {
  setEducation: (passedState, responseData) => {
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
