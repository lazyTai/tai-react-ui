import React from 'react'
import ReactDOM from 'react-dom';
import Routes from './Routes'

import { Provider } from 'react-redux'

/* 加入redux */
import { createStore } from 'redux'
import Reducers from './reducers/index'

import { Router } from 'react-router'
import createHashHistory from 'history/createHashHistory'
const history = createHashHistory()



let store = createStore(Reducers)
ReactDOM.render(
    <Provider store={store} >
        <Router history={history}>
            <Routes />
        </Router>
    </Provider>
    , document.getElementById('root'))