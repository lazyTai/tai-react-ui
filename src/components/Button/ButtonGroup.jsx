import React, { Component } from 'react';

import '../styles/ButtonGroup.css'
import PropTypes from 'prop-types';
class ButtonGroup extends Component {
    render() {
        var { children,  } = this.props;
        return (
            <div className="dy-button-group">
                {children}
            </div>
        )
    }
}


export default ButtonGroup