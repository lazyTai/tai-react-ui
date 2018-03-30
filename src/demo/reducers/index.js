export default (state = 0, action) => {
    switch (action.type) {
        case 'add':
            state = state + 1;
            return state
        case 'down':
            state = state - 1;
            return state
        default:
            return state
    }
}