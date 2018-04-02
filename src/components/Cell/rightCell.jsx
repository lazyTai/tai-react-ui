import React, { Component } from 'react'
import  '../styles/RightCell.css'
class RightCell extends Component {
    render() {
        var { left, right } = this.props
        return <div className="dy-right-group-item">
            <div className="left">{left}</div>
            <div className="right">{right}</div>
        </div>
    }
}

export default RightCell