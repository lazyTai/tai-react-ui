import { fetch_get_goods_lists } from '../uitls/fetch'
function createAction(type, payload) {
    return (payload) => {
        return {
            type,
            payload
        }
    }
}
export const add_into_cart = createAction("add_into_cart")
export const delete_cart_item = createAction("delete_cart_item")
export const set_good_lists = createAction("set_good_lists")
export const fetch_get_good_lists = (params) => (dispath) => {
    fetch_get_goods_lists({
        data: params, success(res) {
            dispath(set_good_lists(JSON.parse(res)))
        }
    })
}
