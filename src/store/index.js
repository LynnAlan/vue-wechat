import Vue from 'vue'
import Vuex from 'vuex'

import minions from './modules/minions'
import state from './modules/state'
import messagedetail from './modules/messageDetail'
import homepage from './modules/homePage'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        minions,
        state,
        homepage,
        messagedetail
    }
})
