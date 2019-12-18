import { API_LIST, fetchAllFromServer } from '../../api/resume';

const state = {
  data: undefined,
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

const sortField = 'proficiency';

const mutations = {
  setSkill: (passedState, responseData) => {
    state.data = responseData.sort(
      (paramLeft, paramRight) => paramRight.fields[sortField] - paramLeft.fields[sortField],
    );
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
