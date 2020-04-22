import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/scss/reset.scss'

Vue.config.productionTip = false

Vue.filter('formatYi', (value) => {
  if (value.toString().length >= 9) {
    return `${(Math.round(value / 10 ** 8 * 100) / 100).toFixed(2)}亿`
  } else if (value.toString().length >= 5) {
    return `${(value / 10000).toFixed(2)}万`
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
