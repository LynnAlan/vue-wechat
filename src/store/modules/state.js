/**
 * Created by Administrator on 2017/5/9 0009.
 */
export default {
    state: {
        name: 'Add11lanLynn'
    },
    mutations: {
        update(state, valObj) {
          //state = Object.assign({}, state, value);
            for (let key in valObj) {
                state[key] = valObj[key];
            }
        }
    },
    actions: {

    },
    getters: {
        name1:state => state.name
    }
}
