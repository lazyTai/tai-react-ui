import React, { Component } from 'react';

import './Button.css'
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
        switch (type) {
            case "primary":
                style.background = "#12c287";
                style.color = "#fff";
                break;
            case "danger":
                style.background = "#e55546";
                style.color = "#fff";
                break;
            case "infor":
                style.background = "#eca632";
                style.color = "#fff";
                break;
            case "disabled":
                style.background = "#eee";
                style.color = "#ccc";
                break;
            case "hollow":
                style.background = "#fff";
                style.color = "black";
                style.border = "1px solid ";
                break;
            default:
                style.background = "#fff";
                style.color = "black";
                style.border = "1px solid ";
                break;

        }
        return style
    }
    render() {
        var { children, type } = this.props;
        // console.log(type)
        var style = this.setStyle();
        return (
            <button className="dy-button" style={style}
                disabled={type == "disabled" ? true : false}
            >
                {children}
            </button>
        )
    }
}

Button.propTypes = {
    type: PropTypes.string.isRequired
};
export default Button