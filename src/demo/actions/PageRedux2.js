function createAction(type, payload) {
    return (payload) => {
        return {
            type,
            payload
        }
    }
}
const get_array = createAction("get_array")
export const fetch_get_array = ()=>dispatch=>{
    return 
}