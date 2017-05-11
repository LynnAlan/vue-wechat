/**
 * Created by Administrator on 2017/5/9 0009.
 */
import * as types from '../mutation-types'

// state
const state = {
    all: [],
    name:'alanLynn'
}

// getters
const getters = {
    name:state => state.name,

}


// mutations
const mutations = {
    [types.CHANGE_NAME] (state, { data }) {
        state.name = {...state.name, ...data};
        state.name = data;
    }
}

export default {
    state,
    getters,
    mutations
}
