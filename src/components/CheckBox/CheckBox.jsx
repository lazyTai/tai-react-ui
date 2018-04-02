import React, { Component } from 'react';

import '../styles/CheckBox.css'
import PropTypes from 'prop-types';
import { Icon } from '../Icon/index'
class CheckBox extends Component {
    static defaultProps = {
        value: false,
        onChange: () => { }
    };
    constructor() {
        super();
    }
    render() {
        var { value, title, onChange } = this.props;
        return (<div className="dy-check-box"
            onClick={onChange}
        >
            {
                !value && <div className="content">
                    <Icon icon="weixuanyuanquan" className="icon" />
                    <div className="title">
                        {title}</div>

                </div>
            }
            {
                value && <div className="content">
                    <Icon icon="cc-check-circle" className="icon" />
                    <div className="title">
                        {title}</div>

                </div>
            }

        </div>)
    }
}

CheckBox.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

export default CheckBox