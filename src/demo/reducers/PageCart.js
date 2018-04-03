import _ from 'lodash'
import { set_good_lists, add_into_cart, delete_cart_item } from '../actions/action_page_cart.js';

export default (state = {
    good_array: [],
    cart_array: []
}, { type, payload }) => {
    var nextState = _.cloneDeep(state) // 用到了 lodash 的深克隆
    switch (type) {
        case set_good_lists().type:
            nextState.good_array = payload;
            return nextState;
        case add_into_cart().type:
            nextState.cart_array.push(payload);
            return nextState
        case delete_cart_item().type:
            var _index = null;
            nextState.cart_array.map((item, index )=> {
                if (item.id == payload.id) {
                    _index = index
                }
            })
            nextState.cart_array.splice(_index, 1)
            return nextState

        default:
            return state
    }
}