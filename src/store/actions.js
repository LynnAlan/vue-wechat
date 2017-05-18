import * as types from './mutation-types'

const addMessage = ({commit}, data) => {
    commit(types.ADD_MESSAGE, data)
}
const changeName = ({dispatch}, name = 'wo') => {
    dispatch(types.CHANGE_NAME, {name});
}
const changeMessageStatus = ({commit}, {id,status}) => {
    commit(types.CHANGE_MESSAGE_STATUS, {id,status})
}
const changeFooterState = ({commit}, value) => {
    commit(types.CHANGE_FOOTER_STATE, value);
}

export {addMessage, changeName, changeMessageStatus, changeFooterState}
