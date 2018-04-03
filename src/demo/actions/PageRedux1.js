function createAction(type, payload) {
    return (payload) => {
        return {
            type,
            payload
        }
    }
}

export const add_num = createAction("add_num")
export const decrease_num = createAction("decrease_num")