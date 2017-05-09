/**
 * Created by Administrator on 2017/5/9 0009.
 */
import * as types from '../mutation-types'

// initial state
const state = {
    all: [],
    name:'alanLynn'
}

// getters
const getters = {
    name:state => state.name
}

// actions
const actions = {
    changeName({commit},name='wo'){
        commit(types.CHANGE_NAME, { name });
    }
}

// mutations
const mutations = {
    [types.CHANGE_NAME] (state, { name }) {
        state.name = name;
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
