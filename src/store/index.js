import Vue from 'vue'
import Vuex from 'vuex'

import minions from './modules/minions'
import state from './modules/state'
Vue.use(Vuex)
export default new Vuex.Store({
    actions:{},
    getters:{},
    modules: {
        minions,
        state
    }
})
