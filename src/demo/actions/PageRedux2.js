import { fetch_get_lists } from '../uitls/fetch'
function createAction(type, payload) {
    return (payload) => {
        return {
            type,
            payload
        }
    }
}
export const get_array = createAction("get_array")

export const fetch_get_array = (params) => dispatch => {
    return fetch_get_lists({
        success(res) {
            dispatch(get_array(res))
        }
    })
}