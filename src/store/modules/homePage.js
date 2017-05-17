/**
 * Created by Administrator on 2017/5/10 0010.
 */
import * as types from '../mutation-types'
import {message} from '../model/homePage'
const state = {
    message,
    footerState: 1
}

// getters
const getters = {
    message: state => state.message,
    footerState: state => state.footerState
}

// mutations
const mutations = {

    [types.DELETE_MESSAGE] (state, id) {
        let tempArr = [];
        for (let i = 0, leng = state.message.length; i < leng; i++) {
            if (state.message[i].id == id) {
                continue;
            }
            tempArr.push(state.message[i]);
        }
        state.message = tempArr;
    },
    [types.CHANGE_FOOTER_STATE] (state, type) {
        state.footerState = type;
    }
}

export default {
    state,
    getters,
    mutations
}
