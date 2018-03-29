import React, { Component } from 'react';

import './cellBlock.css'
class CellBlock extends Component {
    render() {
        var { title, children } = this.props
        return <div className="dy-cell-block">
            <div className="title">
                {title}
            </div>
            <div className="center">
                {children}
            </div>

        </div>
    }
}

export default CellBlock