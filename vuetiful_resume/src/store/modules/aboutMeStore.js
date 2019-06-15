// import axios from 'axios'
import resume from '../../api/resume'

const state = {
  information: {}
}

const getters = {
  allData: () => state.information
}

const actions = {
  fetchData ({ commit }) {
    console.log('actions')
    // const response = await axios.get('url') // mapping with env server
    const fetched = resume.fetchDataFromServer()
    console.log(fetched.information)
    commit('setAboutme', fetched.information)
  }
}

const mutations = {
  setAboutme: (state, data) => {
    state.information = data
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
