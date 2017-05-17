/**
 * Created by Administrator on 2017/5/17 0017.
 */
import * as types from '../mutation-types'
import {maillist} from '../model/mailList'
const state = {
  maillist
}
// getters
const getters = {
  maillist:state => state.maillist
}

export default {
  state,
  getters
}
