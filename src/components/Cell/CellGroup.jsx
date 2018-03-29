import React, { Component } from 'react';

import "./cellGroup.css"
import Cell from './Cell.jsx'
class CellGroup extends Component {
    render() {
        var { children, title } = this.props
        return <div className="dy-cellgroup">
            <div className="title">{title}</div>
            {children}
        </div>
    }
}
CellGroup.Cell = Cell
export default CellGroup