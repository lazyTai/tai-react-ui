import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch, withRouter } from 'react-router-dom';
import './pages/css/routes.css'
import Index from './pages/Index'
import Button from './pages/Button'
import PageScrollView from './pages/PageScrollView'
import PageAnimate from './pages/PageAnimate'
import PageCheckout from './pages/PageCheckout'
import PageToast from './pages/PageToast'
class Routes extends Component {
    render() {
        const { history, location, match } = this.props;
        const currentKey = location.pathname.split('/')[1] || '/';
        // console.log("currentKey", currentKey)
        return <Switch>
            <Route exact path="/" component={Index} />
            <Route path="/index1" component={Index} />
            <Route path="/button" component={Button} />
            <Route path="/PageScrollView" component={PageScrollView} />
            <Route path="/PageAnimate" component={PageAnimate} />
            <Route path="/PageCheckout" component={PageCheckout} />
            <Route path="/PageToast" component={PageToast} />
            
        </Switch>

        /* <TransitionGroup>
            <CSSTransition
                key={currentKey}
                timeout={100}
                classNames="pull"
            > */}


    /*  </CSSTransition></TransitionGroup> */
}

export default withRouter(Routes)