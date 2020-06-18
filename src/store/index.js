import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

//new Store的时候 首字母S一定需要大写
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
