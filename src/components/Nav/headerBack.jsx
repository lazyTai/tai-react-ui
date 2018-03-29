import React, { Component } from 'react';

import './headerBack.css'
import { Icon } from '../Icon/index'
import { Link } from 'react-router'
class HeaderBack extends Component {
    render() {
        return <div className="dy-header-back">
            <div className="left">
                <Link to="/" className="linka">
                    <Icon icon="left" size="30" />
                </Link>
            </div>
            <div className="center">
                {this.props.children}
            </div>
            <div className="right"></div>
        </div>
    }
}
export default HeaderBack