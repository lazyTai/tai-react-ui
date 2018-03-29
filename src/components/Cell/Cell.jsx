import React, { Component } from 'react'

import './cell.css'
import { Icon } from '../Icon/index'
class Cell extends Component {
    render() {
        var { children,
            leftIcon,
            arrow
        } = this.props;
        return <div className="dy-cell">
            <div className="left_icon">
                {leftIcon && <Icon icon={leftIcon} size="22"></Icon>}
            </div>
            <div className="center">
                {children}
            </div>
            <div className="right_icon">
                {arrow && <Icon icon="right"></Icon>}
            </div>
        </div>
    }
}


export default Cell