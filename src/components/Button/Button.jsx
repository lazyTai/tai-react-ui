import React, { Component } from 'react';

import Styles from './Button.css'
import PropTypes from 'prop-types';


class Button extends Component {
    static defaultProps = {
        type: 'default'
    };
    state = {
    };
    setStyle() {
        var { children, type } = this.props;
        var style = {
            background: '#fff',
            color: '#fff'
        }
        if (type == 'primary') {
            style.background = "#12c287";
            style.color = "#fff"
        }
        return style
    }
    render() {
        var { children, type } = this.props;
        // console.log(type)
        var style = this.setStyle();
        return (
            <button className={Styles['t-button']} style={style}>
                {children}
            </button>
        )
    }
}

Button.propTypes = {
    type: PropTypes.string.isRequired
};
export default Button