import React, { Component } from 'react';

import './headerBack.css'
import { Icon } from '../Icon/index'
import createHashHistory from 'history/createHashHistory'
const history = createHashHistory()
class HeaderBack extends Component {
    render() {
        return <div className="dy-header-back">
            <div className="left" onClick={() => { history.go(-1) }}>
                <Icon icon="left" size="30" />
            </div>
            <div className="center">
                {this.props.children}
            </div>
            <div className="right"></div>
        </div>
    }
    componentDidMount() {

    }
}
export default HeaderBack