import React, { Component } from 'react'

import './icon.css'
class Icon extends Component {
    render() {
        var { icon, size, spin } = this.props;
        var style = {
            fontSize: size + "px"
        }
        var _className = spin ? "spin" : '';
        return <svg className={"icon  " + _className} aria-hidden="true"
            style={style}
        >
            <use xlinkHref={'#icon-' + icon}></use>
        </svg >
    }
}

export default Icon