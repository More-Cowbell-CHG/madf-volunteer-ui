import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';
import router from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: null,
    token: null,
    isAdmin: false,
    isChampion: false
  },
  mutations: {
    SET_USER_TOKEN(state, payload) {
      state.token = payload;
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        payload
      }` 
    },
    SET_USER(state, payload) {
      state.user = payload
    },
    SET_IS_ADMIN(state, payload) {
      state.isAdmin = payload;
    },
    SET_IS_CHAMPION(state, payload) {
      state.isAdmin = payload;
    },
    CLEAR_DATA() {
      console.log("GOT HERE")
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      location.reload()
    }
  },
  actions: {
    handleCreateAccount({dispatch}, reqBody) {
      let {email, password} = reqBody;
      axios
        .post(
          "https://making-a-difference-foundation-volunteer-l6xs.onrender.com/user",
          reqBody
        )
        .then(() => {
          dispatch("handleLogin", { email, password })
        });
      },
      handleLogin({commit, state}, reqBody) {
        axios
        .post(
          "https://making-a-difference-foundation-volunteer-l6xs.onrender.com/login",
          reqBody
          )
          .then(response => {
            commit("SET_USER", response.data.user)
            commit("SET_USER_TOKEN", response.data.token)
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('token', JSON.stringify(response.data.token))
            
            if(state.user.roles.indexOf("admin") >= 0) {
              commit("SET_IS_ADMIN", true)
            }
            if(state.user.roles.indexOf("champioin") >= 0) {
              commit("SET_IS_CHAMPION", true)
            }
            router.push("/opportunities");
        });
    },
    logout({commit}) {
      commit("CLEAR_DATA")
    }
  },
  modules: {
  },
  getters: {
    // `getters` is localized to this module's getters
    // you can use rootGetters via 4th argument of getters
    authHeader: (state) => {
      return {
        headers: { Authorization: `Bearer ${state.user.token}` }
      };
    },
    isLoggedIn: (state) => {
      return !!state.user
    }
  },
})
