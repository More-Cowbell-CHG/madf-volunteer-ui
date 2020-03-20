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
    isLoggedIn: !!localStorage.getItem("token"),
  },
  mutations: {
    SET_USER_TOKEN(state, payload) {
      state.user.token = payload.token
    },
    SET_USER(state, payload) {
      state.user = payload.user
    },
    LOGIN_SUCCESS (state) {
      state.isLoggedIn = true;
    },
    LOGOUT(state) {
      state.isLoggedIn = false;
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
            localStorage.setItem("token", response.data.user._id);
            context.commit("LOGIN_SUCCESS");
        });
    },
    logout(context) {
      localStorage.removeItem("token");
      context.commit("LOGOUT");
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
    isLoggedIn: state => {
      return state.isLoggedIn
     }
  },
})
