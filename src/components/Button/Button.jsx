import React, { Component } from 'react';

import '../styles/Button.css'
import PropTypes from 'prop-types';
import ButtonGroup from './ButtonGroup'
import { Icon } from '../Icon/index'
class Button extends Component {
    static defaultProps = {
        type: 'default',
        onClick: () => { }
    };
    state = {
    };
    setStyle() {
        var { children, type, block } = this.props;
        var style = {
            background: '#fff',
            color: '#fff'
        }
        /* 设置样色 */
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
                style.border = "1px solid #eee";
                break;
            default:
                style.background = "#fff";
                style.color = "black";
                style.border = "1px solid #eee";
                break;

        }
        /* 设置 大小 block */
        if (block) {
            style.width = "100%";
        }
        return style
    }
    render() {
        var { children, type, onClick, icon } = this.props;
        var style = this.setStyle();
        return (
            <button className="dy-button" style={style}
                disabled={type == "disabled" ? true : false}
                onClick={onClick}
            >
                <span className="_icon">
                    {icon && <Icon icon={icon} size="15" />}
                </span >
                {children}
            </button>
        )
    }
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    block: PropTypes.bool,
    icon: PropTypes.string,
};

Button.ButtonGroup = ButtonGroup;
export default Button