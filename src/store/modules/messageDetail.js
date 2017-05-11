/**
 * Created by Administrator on 2017/5/10 0010.
 */
import {message} from '../model/messageDetail'
import * as types from '../mutation-types'

const state = {
  message
}
// getters
const getters = {
  itemMessage:state => state.message
}

// mutations
const mutations = {
  [types.MESSAGE_DETAIL] (state, { id }) {
    for(let i = 0,leng = state.message.length; i< leng;i++){
      if(state.message[i].id = id){
        state.message.splice(i,1);
      }
    }
  },
  [types.ADD_MESSAGE] (state,data){
   state.message = {...state.message,...data};
  }
}


export default {
  state,
  getters,
  mutations
}
