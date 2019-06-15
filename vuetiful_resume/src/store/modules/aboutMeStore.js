import axios from 'axios'

const state = {
  infomation: {
    job: '',
    name: '',
    greet: '',
    nation: '',
    introduce: ''
  }
}

const getters = {
  allData: () => state.infomation
}

const actions = {
  async fetchData ({ commit }) {
    const response = await axios.get('url') // mapping with env server
    commit('setData', response.data)
  }
}

const mutation = {
  setData: (state, data) => {
    state.infomation = data
  }
}

export default {
  state,
  getters,
  actions,
  mutation
}
