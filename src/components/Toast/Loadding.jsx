import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import '../styles/loadding.css'
import Mark from './Mark.js'
import PropTypes from 'prop-types';
import { Icon } from '../Icon/Index'
class Loadding extends Component {
    static defaultProps = {
        visible: false,
        time: 500,
        onChange: () => { },
        close: () => { }
    };
    static show(children, time, close) {
        ReactDOM.render(
            <Loadding visible={true} time={time} close={close}>{children}
            </Loadding>
            , window.dyLoadding);
    }
    constructor() {
        super();
        this.state = {
            _visible: false
        }
    }
    setPosition() {
        var dom_content = this.refs['dy-loadding-chldren']
        if (dom_content) {
            var _height = dom_content.offsetHeight
            var _width = dom_content.offsetWidth
            window.dyLoadding.style.marginLeft = -_width / 2
            window.dyLoadding.style.marginTop = -_height / 2
        }

    }
    render() {
        var { visible, children } = this.props
        var { _visible } = this.state
        // console.log(" this.props", this.props)
        if (_visible) {
            Mark.show(0.001, )
            return <div className="dy-loadding-chldren" ref="dy-loadding-chldren">
                <Icon icon="loading" spin={true}
                    size={22}
                />  {children}
            </div>
        }
        Mark.close()
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
        var _index = setInterval(() => {
            if (_visible) {
                self.setState({
                    _visible: false
                })
                self.props.close && self.props.close.call(self, _visible)
                window.clearInterval(_index)
            }
        }, this.props.time)
    }
}

Loadding.propTypes = {
    visible: PropTypes.bool,
};

if (!window.dyLoadding) {
    window.dyLoadding = document.createElement('div');
    window.dyLoadding.setAttribute('class', "dy-loadding")
    document.body.appendChild(window.dyLoadding);
}

ReactDOM.render(<Loadding visible={false} />, window.dyLoadding);

export default Loadding