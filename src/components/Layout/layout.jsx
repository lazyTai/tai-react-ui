import React, { Component } from 'react';

import './Layout.css'
class Layout extends Component {
    componentDidMount() {
        /* 修复body不够大的问题 */
        document.body.style.height = document.body.scrollHeight + 'px'
    }
    render() {
        var { className, children, style } = this.props
        return <div className={'dy-layout ' + className}
            style={style}
        >
            {children}
        </div>
    }
}
export default Layout