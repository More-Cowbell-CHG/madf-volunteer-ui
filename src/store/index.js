import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVlNzNjZWM4M2ZkZmRiMzUyN2IyYTdlZSIsIm5hbWUiOiJOaWNrIE5lbHNvbiIsImVtYWlsIjoibmlja25sc25AZ21haWwuY29tIiwicm9sZXMiOlsidm9sdW50ZWVyIiwiY2hhbXBpb24iLCJhZG1pbiJdfSwiaWF0IjoxNTg0NjQ4NzU3fQ.vpf2FY6lgSiaPk9yik29_-Fl3QcmSKfzP8vFL0dsTPs"
    },
    
  },
  mutations: {
    SET_USER_TOKEN(state, payload) {
      state.user.token = payload.token
    },
    SET_USER(state, payload) {
      state.user = payload.user
    }
  },
  actions: {
    handleCreateAccount(context, reqBody) {
      axios
        .post(
          "https://making-a-difference-foundation-volunteer-l6xs.onrender.com/user",
          reqBody
        )
        .then(response => {
          context.commit("SET_USER_TOKEN", response.data)
          router.push("/opportunities");
        });
      },
      handleLogin(context, reqBody) {
        axios
        .post(
          "https://making-a-difference-foundation-volunteer-l6xs.onrender.com/login",
          reqBody
          )
          .then(response => {
            context.commit("SET_USER", response.data)
            router.push("/opportunities");
        });
    }
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
