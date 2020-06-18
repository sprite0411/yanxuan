import Vue from 'vue'
import App from './App'
import VueLazyload from 'vue-lazyload'

import router from './router'
import './mock/mockServer'
import store from './store'

Vue.use(VueLazyload,{
  preLoad: 1.3,
  error: '../static/images/lazy-err.gif',
  loading: '../static/images/lazy.gif',
  attempt: 2
})
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store
})
