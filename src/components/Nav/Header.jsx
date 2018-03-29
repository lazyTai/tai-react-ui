import React, { Component } from 'react'

import './theader.css'
class THeader extends Component {
    render() {
        var { title } = this.props
        return <div className="dy-header">
            <div className="left"></div>
            <div className="center">
                {title}
            </div>
            <div className="right"></div>
        </div>
    }
}
export default THeader