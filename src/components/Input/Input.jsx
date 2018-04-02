import React, { Component } from 'react';
import PropTypes from 'prop-types';

import "../styles/input.css"
class Input extends Component {
    constructor() {
        super();
        this.state = {
            defaultValue: "",
            error: [],
        }
    }

    static defaultProps = {};

    render() {
        var { defaultValue, error, validate } = this.state
        return <div className="dy-input">
            <div className="input">
                <input placeholder="请输入" defaultValue={defaultValue}
                />
            </div>
            <div className="error">{error.toString()}</div>
        </div>
    }

    componentWillReceiveProps(newv) {
    }

    componentDidMount() {
        this.setState({
            defaultValue: this.props.value
        })
    }
}

Input.propTypes = {
    /* 加入多个种类 */
    value: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    validate:String
};

export default Input