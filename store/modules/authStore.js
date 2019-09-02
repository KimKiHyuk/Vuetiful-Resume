/* eslint-disable no-unused-vars */

const state = {
  auth: null,
};

const getters = {
  // eslint-disable-next-line arrow-body-style
  loggedIn: (passedState) => {
    console.log('loggedIN ', state.auth);
    return state.auth !== null;
  },
};

const mutations = {
  setAuth(passedState, auth) {
    console.log('set auth as -> ', auth);
    state.auth = auth;
  },
};

const actions = {
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
