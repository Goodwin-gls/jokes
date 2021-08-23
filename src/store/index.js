import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jokes: []
  },
  mutations: {
    setJokes(state, jokes) {
      state.jokes = jokes
    }
  },
  actions: {
    async fetchJokes({commit}) {
      let response = await fetch('https://v2.jokeapi.dev/joke/Any?amount=10')
      let data = await response.json()
      if (!data.error) {
        commit('setJokes', data.jokes)
      }
    }
  },
  modules: {
  }
})
