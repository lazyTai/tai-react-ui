import _ from 'lodash'
import { add_num, decrease_num } from '../actions/PageRedux1';

export default (state = {
    num: 0
}, { type, payload }) => {
    var nextState = _.cloneDeep(state) // 用到了 lodash 的深克隆
    switch (type) {
        case add_num().type:
            nextState.num += 1;
            return nextState
        case decrease_num().type:
            nextState.num -= 1;
            return nextState
        default:
            return state
    }
}