import React, { Component } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Route, Switch, withRouter } from 'react-router-dom';
import './pages/css/routes.css'
import Index from './pages/components/Index'
import Button from './pages/components/Button'
import PageScrollView from './pages/components/PageScrollView'
import PageAnimate from './pages/components/PageAnimate'
import PageCheckout from './pages/components/PageCheckout'
import PageToast from './pages/components/PageToast'
import PageFilePicker from './pages/components/FilePicker'
import PageInput from './pages/components/PageInput'

import PageRedux1 from './pages/containers/PageRedux1'
import PageRedux2 from './pages/containers/PageRedux2'

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
            <Route path="/PageFilePicker" component={PageFilePicker} />
            <Route path="/PageInput" component={PageInput} />
            <Route path="/PageRedux1" component={PageRedux1} />
            <Route path="/PageRedux2" component={PageRedux2} />

        </Switch>

        /* <TransitionGroup>
            <CSSTransition
                key={currentKey}
                timeout={100}
                classNames="pull"
            > */
    }


    /*  </CSSTransition></TransitionGroup> */
}

export default withRouter(Routes)