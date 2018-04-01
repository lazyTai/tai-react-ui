import _ from 'lodash'
export default (state = {
    todoLists: []
}, { type, payload }) => {
    var nextState = _.cloneDeep(state) // 用到了 lodash 的深克隆
    switch (type) {
        case 'add-todo':
            nextState.todoLists.push({
                id: payload.id,
                text: payload.text
            })
            return nextState
        case 'delete-todo':
            var _index = null;
            nextState.todoLists.map((item, index) => {
                if (item.id === payload.id) {
                    _index = index
                }
            })
            nextState.todoLists.splice(_index, 1)
            return nextState
        default:
            return state
    }
}