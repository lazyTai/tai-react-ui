import React from 'react'
import ReactDOM from 'react-dom';
import Routes from './Routes'

import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'

/* 加入redux */
import { createStore } from 'redux'
import Reducers from './reducers/index'

let store = createStore(Reducers)
ReactDOM.render(
    <Provider store={store}>
        <HashRouter>
            <Routes />
        </HashRouter>
    </Provider>
    , document.getElementById('root'))