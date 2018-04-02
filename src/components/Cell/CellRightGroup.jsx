import React, { Component } from 'react';
import "../styles/CellRightGroup.css"

import RightCell from './rightCell'
class CellRightGroup extends Component {
    render() {
        var { title, children } = this.props
        return <div className="dy-cell-right">
            <div className="title">{title}</div>
            <div className="down">
                {children}
            </div>
        </div>
    }
}
CellRightGroup.Cell = RightCell

export default CellRightGroup