import React, { Component } from 'react';

export default class Button extends Component {
    render() {
        var { children } = this.props;
        return (
            <div>
                <button>
                    {children} 
                </button>
            </div>
        )
    }
}