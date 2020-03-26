import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import './plugins/vuelidate'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  created () {
    const userString = localStorage.getItem('user')
    const userToken = localStorage.getItem('token')
    if(userString) {
      const userData = JSON.parse(userString);
      this.$store.commit('SET_USER', userData)
      this.$store.commit('SET_USER_TOKEN', JSON.parse(userToken))

    }
  },
  render: h => h(App)
}).$mount('#app')
