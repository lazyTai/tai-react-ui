import React, { Component } from 'react';

import '../styles/Filepicker.css'
import PropTypes from 'prop-types';
import { IsPicture } from '../utils/util'
import { Icon } from '../Icon/index'
import _ from 'lodash'
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
        this.deleteImage = this.deleteImage.bind(this)
    }
    deleteImage(i) {
        var _array = this.state.imageLists;
        var _newarray = [];
        _.each(_array, (item, index) => {
            if (index != i) {
                _newarray.push(item)
            }
        })
        this.setState({
            imageLists: _newarray
        })
    }
    renderArray() {
        var _array = [];
        var { imageLists } = this.state
        for (let i = 0; i < imageLists.length; i++) {
            var imgFile = imageLists[i];
            var src = window.URL.createObjectURL(imgFile)//这里传一个文件对象 例如：file.files[0]
            _array.push(<div className="image" key={Math.random()} >
                <div
                    className="cuo"
                    onClick={() => {
                        this.deleteImage(i)
                    }}><Icon icon="cuowu" size={26} /></div>
                <img src={src} />
            </div >)
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
        /* 过滤不是图片的 */
        var image_files = _.filter(files, (item) => {
            return IsPicture(item.name)
        })
        onSelect && onSelect.call(this, image_files)
        this.setState({
            imageLists: image_files
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