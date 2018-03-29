import React from 'react'
import { Router, Route, IndexRoute, hashHistory as history } from 'react-router'
import Index from '../pages/index.jsx'
import Button from '../pages/Button.jsx'


const Routes = function ({ onRouteUpdate, willEnterAdminRoute }) {
  // const currentKey = history.getCurrentLocation().pathname.split('/')[1] || '/';
  // return <TransitionGroup>
  //   <CSSTransition
  //     key={currentKey}
  //     timeout={1000}
  //     classNames="fade"
  //   >

  //   </CSSTransition></TransitionGroup>
  return <Router history={history} onUpdate={onRouteUpdate}>
    <Route path="/">
      <IndexRoute component={Index} />
      <Route path="/index1" component={Index} />
      <Route path="/button" component={Button} />
    </Route>
  </Router>
}


export default Routes
