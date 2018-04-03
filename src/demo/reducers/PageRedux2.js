import _ from 'lodash'
import { get_array } from '../actions/PageRedux2';

export default (state = {
    lists: []
}, { type, payload }) => {
    var nextState = _.cloneDeep(state) // 用到了 lodash 的深克隆
    switch (type) {
        case get_array().type:
            nextState.lists = payload
            return nextState
        default:
            return state
    }
}