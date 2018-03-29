import React, { Component } from 'react'

import './icon.css'
class Icon extends Component {
    render() {
        var { icon, size } = this.props;
        var style = {
            fontSize: size + "px"
        }
        return <svg className="icon" aria-hidden="true"
            style={style}
        >
            <use xlinkHref={'#icon-' + icon}></use>
        </svg >
    }
}

export default Icon