import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Animate extends Component {
    constructor() {
        super();
        this.state = {
            animateStyle: {}
        }
    }
    static defaultProps = {
        to: {}
    };
    render() {
        var { children, to } = this.props;
        /* 判断是不是函数 */
        if (typeof (children) == "function") {
            return children && React.Children.only(children(this.state))
        } else {
            console.error("子元素必须是方法")
        }
    }
    componentWillReceiveProps(newv) {
        // console.log("to", this.props.to)
        // console.log('newv', newv)
        var self = this;
        var coords = this.props.to // Start at (0, 0)
        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to(newv.to, 1000) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
            .onUpdate(function () { // Called after tween.js updates 'coords'.
                // Move 'box' to the position described by 'coords' with a CSS translation.
                self.setState({
                    animateStyle: coords
                })
            })
            .start(); // Start the tween immediately. 
    }
    componentDidMount() {
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);
    }
}

Animate.propTypes = {
    /* 加入多个种类 */
    to: PropTypes.oneOfType([
        PropTypes.object,
        PropTypes.number,
    ]),
};

export default Animate