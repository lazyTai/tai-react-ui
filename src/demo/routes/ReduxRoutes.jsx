import React, { Component } from 'react'
import { Route, Switch, withRouter } from 'react-router-dom';
import ReduxIndex from '../pages/PageRedux/Index'
import Redux1 from '../pages/PageRedux/Redux1'
import Redux2 from '../pages/PageRedux/components/Redux2'
class ReduxRoutes extends Component {
    render() {
        return <Switch>
            <Route exact path="/PageRedux" component={ReduxIndex} />
            <Route path="/PageRedux/Redux1" component={Redux1} />
            <Route path="/PageRedux/Redux2" component={Redux2} />
        </Switch>
    }
}
export default withRouter(ReduxRoutes)