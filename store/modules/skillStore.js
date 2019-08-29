import { API_LIST, fetchAllFromServer } from '../../api/resume';

const state = {
  data: [],
};

const getters = {
  allInformation: () => state.data,
};

const actions = {
  async fetchInformation({ commit }) {
    const response = await fetchAllFromServer(API_LIST.skill);
    commit('setSkill', response.data);
  },
};

const mutations = {
  setSkill: (passedState, responseData) => {
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
