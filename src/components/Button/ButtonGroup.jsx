import React, { Component } from 'react';

import "./buttonGroup.css"
class ButtonGroup extends Component {
    render() {
        return <div className="dy-button-group">
            {this.props.children}
        </div>
    }
}

export default ButtonGroup