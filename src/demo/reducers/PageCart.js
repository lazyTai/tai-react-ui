import { set_good_lists, add_into_cart, delete_cart_item } from '../actions/action_page_cart.js';
import { Map, fromJS, Set, Repeat, Iterable, List } from 'immutable'
export default (state = fromJS({
    good_array: [],
    cart_array: []
}), { type, payload }) => {
    switch (type) {
        case set_good_lists().type:
            return state.set('good_array', payload);
        case add_into_cart().type:
            var _array = state.get("cart_array").push(payload)
            return state.set("cart_array", _array)
        case delete_cart_item().type:
            var _index = null;
            _index = state.get('cart_array').findIndex((item, index) => {
                return item.id == payload.id
            })
            return state.set("cart_array", state.get('cart_array').delete(_index))
        default:
            return state
    }
}