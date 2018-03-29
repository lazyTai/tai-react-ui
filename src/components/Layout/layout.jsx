import React, { Component } from 'react';

import './Layout.css'
class Layout extends Component {
    render() {
        return <div className="dy-layout">
            {this.props.children}
        </div>
    }
}
export default Layout