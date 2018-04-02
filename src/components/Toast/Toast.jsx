import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/Toast.css'
import PropTypes from 'prop-types';
class Toast extends Component {
    static defaultProps = {
        visible: false,
        time: 500,
        onChange: () => { },
        close: () => { }
    };
    static show(children, time, close) {
        ReactDOM.render(
            <Toast visible={true} time={time} close={close}>{children}</Toast>
            , window.dyToast);
    }
    constructor() {
        super();
        this.state = {
            _visible: false
        }
    }
    setPosition() {
        var dom_dy_toast_chldren = this.refs['dy-toast-chldren']
        if (dom_dy_toast_chldren) {
            var _height = dom_dy_toast_chldren.offsetHeight
            var _width = dom_dy_toast_chldren.offsetWidth
            window.dyToast.style.marginLeft = -_width / 2
            window.dyToast.style.marginTop = -_height / 2
        }

    }
    render() {
        var { visible, children } = this.props
        var { _visible } = this.state
        // console.log(" this.props", this.props)
        if (_visible) {
            return <div className="dy-toast-chldren" ref="dy-toast-chldren">
                {children}
            </div>
        }
        return null
    }
    componentDidMount() {
        // console.log(" this.props", this.props)
        this.setState({
            _visible: this.props.visible
        })

    }
    componentWillReceiveProps(nextProps) {
        // console.log(" nextProps.", nextProps)
        this.setState({
            _visible: nextProps.visible
        })

    }
    componentDidUpdate() {
        var self = this;
        var { _visible } = this.state
        this.setPosition()
        setInterval(() => {
            if (_visible) {
                self.setState({
                    _visible: false
                })
                self.props.close && self.props.close.call(self, _visible)
            }
        }, this.props.time)
    }
}

Toast.propTypes = {
    visible: PropTypes.bool,
};

if (!window.dyToast) {
    window.dyToast = document.createElement('div');
    window.dyToast.setAttribute('class', "dy-toast")
    document.body.appendChild(window.dyToast);
}

ReactDOM.render(<Toast visible={false} />, window.dyToast);

export default Toast