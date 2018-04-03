import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers/'
import thunk from 'redux-thunk'
import { Iterable } from 'immutable';
import { createLogger } from 'redux-logger'
const stateTransformer = (state) => {
    let newState = {};
    for (var i of Object.keys(state)) {
        if (Iterable.isIterable(state[i])) {
            newState[i] = state[i].toJS();
        } else {
            newState[i] = state[i];
        }
    };
    return newState;
};

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger({ stateTransformer }))
}

const store = createStore(reducers, applyMiddleware(...middleware))

console.log("store", store)
export default store