import React, { Component } from 'react';

import Styles from './Button.css'

export default class Button extends Component {
    static defaultProps = {
        name: 'Runoob'
    };
    render() {
        var { children } = this.props;
        return (
            <div className={Styles['t-button']}>
                <button>
                    {this.props.name}
                    {children}
                </button>
            </div>
        )
    }
}