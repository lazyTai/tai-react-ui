import React, { Component } from 'react';

class ScrollView extends Component {
    constructor() {
        super();
        this.state = {
            top: {}
        }
    }
    render() {
        var { children } = this.props;
        /* 判断是不是函数 */
        if (typeof (children) == "function") {
            return children && React.Children.only(children(this.state))
        } else {
            console.error("子元素必须是方法")
        }
    }
}

export default ScrollView