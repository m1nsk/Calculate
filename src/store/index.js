import Vue from 'vue'
import Vuex from 'vuex'
import calculate from './modules/calculate'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    calculate
  }
})
