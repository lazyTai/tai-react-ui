import React, { Component } from 'react';

import '../styles/Filepicker.css'
import PropTypes from 'prop-types';
import { Icon } from '../Icon/index'
class FilePicker extends Component {
    static defaultProps = {
        multiple: false,
        onSelect: () => { }
    };
    constructor() {
        super();
        this.state = {
            imageLists: []
        }
        this.onClick = this.onClick.bind(this)
        this.selectFile = this.selectFile.bind(this)
    }
    renderArray() {
        var _array = [];
        var { imageLists } = this.state
        for (var i = 0; i < imageLists.length; i++) {
            var imgFile = imageLists[i];
            var src = window.URL.createObjectURL(imgFile)//这里传一个文件对象 例如：file.files[0]
            _array.push(<div className="image" key={Math.random()} >
                <img src={src} />
            </div>)
        }
        return _array
    }
    render() {
        var { multiple } = this.props;
        return <div className="dy-file-picker">
            <div className="image-show">
                {this.renderArray()}
            </div>
            <div className="content" onClick={this.onClick}>
                <Icon icon="add" size="30" />
            </div>
            <input type="file"
                ref="input"
                multiple={multiple} style={{ display: 'none' }} />
        </div>
    }
    onClick() {
        this.dom_input.click()
    }
    selectFile(e) {
        var { onSelect } = this.props
        var files = e.target.files
        onSelect && onSelect.call(this, files)
        this.setState({
            imageLists: files
        })
    }
    componentDidMount() {
        this.dom_input = this.refs['input']
        this.dom_input.addEventListener('change', this.selectFile)
    }
}

FilePicker.propTypes = {
    multiple: PropTypes.bool,
    onSelect: PropTypes.func
};

export default FilePicker