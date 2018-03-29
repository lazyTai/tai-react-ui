import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { hashHistory as history } from 'react-router'
import Routes from './routes/index.js'
class App extends Component {
    render() {
        const currentKey = history.getCurrentLocation().pathname.split('/')[1] || '/';
        console.log("currentKey", currentKey)
        return <TransitionGroup>
            <CSSTransition
                key={currentKey}
                timeout={1000}
                classNames="fade"
            >
                <Routes />
            </CSSTransition></TransitionGroup>
    }
}

export default App