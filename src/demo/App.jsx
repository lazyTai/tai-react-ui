import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
class App extends React.Component {
    render() {
        const { history, location, match } = this.props;
        return <Switch key={location.pathname} location={location}>
            <Route exact path="/" component={require('./index.jsx').default} />
        </Switch>
    }
}

export default withRouter(App)