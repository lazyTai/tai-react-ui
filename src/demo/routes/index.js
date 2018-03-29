import React from 'react'
import { Router, Route, IndexRoute, hashHistory as history } from 'react-router'

import Index1 from '../pages/index1.jsx'
import Index2 from '../pages/index2.jsx'


const Routes = ({ onRouteUpdate, willEnterAdminRoute }) => (
  <Router history={history} onUpdate={onRouteUpdate}>
    <Route path="/">
      <IndexRoute component={Index1} />
      <Route path="index1" component={Index1} />
      <Route path="index2" component={Index2} />
    </Route>
  </Router>
)

export default Routes
