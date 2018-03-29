import React, { Component } from 'react';

import  css from './Button.css'

console.log(css)
export default class Button extends Component {
    render() {
        var { children } = this.props;
        return (
            <div className={css['t-button']}>
                <button>
                    {children} 
                </button>
            </div>
        )
    }
}