/**
 * Created by Administrator on 2017/5/10 0010.
 */
import * as types from '../mutation-types'
import {message} from '../model/homePage'
const state = {
   message,
   footerState:true
}

// getters
const getters = {
    message:state => state.message,
    footerState:state => state.footerState
}

// mutations
const mutations = {
  [types.DELETE_MESSAGE] (state, { id }) {
      for(let i = 0,leng = state.message.length; i< leng;i++){
          if(state.message[i].id = id){
              state.message.splice(i,1);
          }
      }
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
