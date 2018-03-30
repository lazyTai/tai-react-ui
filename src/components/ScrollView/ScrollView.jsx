import React, { Component } from 'react';

import './scrollView.css';

function getEvent(e) {
    if (e.touches > 0) {
        return e.touches[0]
    }
    if (e.changedTouches) {
        return e.changedTouches[0]
    }
    return e
}
class ScrollView extends Component {
    constructor() {
        super();
        this.state = {
            currentScrollTop: 0,
            isOverToping: false,
            isOverTop: false,
            isOverBottoming: false,
            isOverBottom: false,
        }

        this.isStartScroll = false;
        this.currentClientY = 0;
        this.onMouseDown = this.onMouseDown.bind(this)
        this.onMouseUp = this.onMouseUp.bind(this)
        this.onMouseMove = this.onMouseMove.bind(this)
    }
    render() {
        var { onMouseDown, onMouseMove, onMouseUp } = this;
        var { currentScrollTop } = this.state
        var { children, style } = this.props;
        /*  判斷是不是函数 * / */
        if (typeof (children) == "function") {
            return <div className="dy-scroll-view container"
                ref="container"
                style={style}
                onMouseDown={onMouseDown.bind(this)}
                onMouseMove={onMouseMove.bind(this)}
                onMouseUp={onMouseUp.bind(this)}
                onMouseLeave={onMouseUp.bind(this)}
                onTouchStart={onMouseDown.bind(this)}
                onTouchMove={onMouseMove.bind(this)}
                onTouchEnd={onMouseUp.bind(this)}
            >
                <div className="content"
                    ref="content"
                    style={{
                        transform: `translate3d(0,${currentScrollTop}px,0)`
                    }}
                >
                    {
                        children && React.Children.only(children(this.state))
                    }
                </div>
            </div >
        } else {
            console.error("子元素必须是方法")
        }
    }
    componentDidMount() {

    }
    onMouseDown(e) {
        this.isStartScroll = true;
        this.currentClientY = getEvent(e).clientY;
    }
    onMouseMove(e) {
        var { currentScrollTop } = this.state
        if (this.isStartScroll) {
            currentScrollTop -= this.currentClientY - getEvent(e).clientY
            this.setState({
                currentScrollTop: currentScrollTop
            })
            this.currentClientY = getEvent(e).clientY;
            // console.log("currentScrollTop", currentScrollTop)
            // console.log("content scrollHeight", this.contentHeight)
            // console.log("container scrollHeight", this.containerHeight)
            /* 判断上面拉下 */
            if (currentScrollTop > 0) {
                this.setState({
                    isOverToping: true,
                })
            }

            /* 判读滚动到底部 */
            if (Math.abs(currentScrollTop) + this.containerHeight > this.contentHeight) {
                this.setState({
                    isOverBottom: false,
                    isOverBottoming: true
                })
            }

        }
    }
    onMouseUp(e) {
        this.isStartScroll = false;
        this.currentClientY = getEvent(e).clientY;
        var { currentScrollTop } = this.state

        /* 判断上面拉下,撤回0 
        加入动画效果的撤回
        */
        if (currentScrollTop > 0) {
            this.setState({
                isOverToping: false,
                isOverTop: true
            })
            this.setAnimateTop()
        }

        /* 判读滚动到底部 */
        if (Math.abs(currentScrollTop) + this.containerHeight > this.contentHeight) {
            this.setState({
                isOverBottom: true,
                isOverBottoming: false
            })
            this.setAnimateBottom()
        }

    }
    setAnimateBottom() {
        var self = this;
        var { currentScrollTop } = this.state
        var coords = { x: currentScrollTop } // Start at (0, 0)
        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({ x: -(this.contentHeight - this.containerHeight) }, 500) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
            .onUpdate(function () { // Called after tween.js updates 'coords'.
                self.setState({
                    currentScrollTop: coords.x
                })
            })
            .onComplete(() => {
                self.setState({
                    isOverBottom: false
                })
            })
            .start(); // Start the tween immediately. 
    }
    setAnimateTop() {
        var self = this;
        var { currentScrollTop } = this.state
        var coords = { x: currentScrollTop } // Start at (0, 0)
        var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
            .to({ x: 0 }, 500) // Move to (300, 200) in 1 second.
            .easing(TWEEN.Easing.Quadratic.Out) // Use an easing function to make the animation smooth.
            .onUpdate(function () { // Called after tween.js updates 'coords'.
                self.setState({
                    currentScrollTop: coords.x
                })
            })
            .onComplete(() => {
                self.setState({
                    isOverTop: false
                })
            })
            .start(); // Start the tween immediately. 
    }
    componentWillReceiveProps(newv) {
    }

    componentWillMount() {
        function animate(time) {
            requestAnimationFrame(animate);
            TWEEN.update(time);
        }
        requestAnimationFrame(animate);

    }
    componentDidMount() {
        this.containerHeight = this.refs.container.offsetHeight
        this.contentHeight = this.refs.content.scrollHeight
    }
}

export default ScrollView