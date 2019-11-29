import Vue from 'vue'
import Vuex from 'vuex'
import { pageRoutes } from '@/router'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { pageroutes: pageRoutes },
  mutations: {},
  actions: {},
  modules: {}
})
