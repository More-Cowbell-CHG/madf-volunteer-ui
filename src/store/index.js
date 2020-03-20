import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVlNzNjZWM4M2ZkZmRiMzUyN2IyYTdlZSIsIm5hbWUiOiJOaWNrIE5lbHNvbiIsImVtYWlsIjoibmlja25sc25AZ21haWwuY29tIiwicm9sZXMiOlsidm9sdW50ZWVyIiwiY2hhbXBpb24iLCJhZG1pbiJdfSwiaWF0IjoxNTg0NjQ4NzU3fQ.vpf2FY6lgSiaPk9yik29_-Fl3QcmSKfzP8vFL0dsTPs"
    },
    
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    // `getters` is localized to this module's getters
    // you can use rootGetters via 4th argument of getters
    authHeader (state) {
      return {
        headers: { Authorization: `Bearer ${state.user.token}` }
      };
    },
  },
})
