import React from 'react'

import { Link } from 'react-router-dom'
import { Button, Layout, Header, CellGroup } from '../../../components/dingyi.js'

import '../css/index.css'

export default class Index extends React.Component {
    render() {
        return <Layout className="index">
            <Header title="首页" />

            <CellGroup title="demo">
                <CellGroup.Cell arrow
                    leftIcon="camera"
                >
                    <Link to="/PageCart">
                        cart
                    </Link>
                </CellGroup.Cell>
            </CellGroup>

            <CellGroup title="redux">
                <CellGroup.Cell arrow
                    leftIcon="camera"
                >
                    <Link to="/PageRedux1">
                        PageRedux1
                    </Link>
                </CellGroup.Cell>
                <CellGroup.Cell arrow
                    leftIcon="camera"
                >
                    <Link to="/PageRedux2">
                        PageRedux2
                    </Link>
                </CellGroup.Cell>
                <CellGroup.Cell arrow
                    leftIcon="camera"
                >
                    <Link to="/PageImmutable">
                        PageImmutable
                    </Link>
                </CellGroup.Cell>
            </CellGroup>

            <CellGroup title="表单组件">
                <CellGroup.Cell arrow
                    leftIcon="camera"
                >
                    <Link to="/button">
                        按钮 Button
                    </Link>
                </CellGroup.Cell>
                <CellGroup.Cell
                    leftIcon="camera" arrow
                >
                    <Link to="/PageCheckout">
                        复选框 CheckBox
                    </Link>
                </CellGroup.Cell>
                <CellGroup.Cell arrow
                    leftIcon="camera"
                >
                    <Link to="/PageFilePicker">
                        文件选择器 PageFilePicker
                    </Link>
                </CellGroup.Cell>
                <CellGroup.Cell arrow
                    leftIcon="camera"
                >
                    <Link to="/PageInput">
                        文本框 Input
                    </Link>
                </CellGroup.Cell>
                <CellGroup.Cell arrow
                    leftIcon="camera"
                >
                    <Link to="/Picker_Select">
                        选择器 Picker & Select
                    </Link>
                </CellGroup.Cell>
                <CellGroup.Cell arrow
                    leftIcon="camera"
                >
                    <Link to="/DatePicker">
                        日期选择器 DatePicker & DateSelect
                    </Link>
                </CellGroup.Cell>
                <CellGroup.Cell arrow
                    leftIcon="camera"
                >
                    <Link to="/Radio">
                        单选框 Radio
                    </Link>
                </CellGroup.Cell>
                <CellGroup.Cell arrow
                    leftIcon="camera"
                >
                    <Link to="/Slider">
                        滑动输入条 Slider
                    </Link>
                </CellGroup.Cell>
                <CellGroup.Cell arrow
                    leftIcon="camera"
                >
                    <Link to="/Switch">
                        开关 Switch
                    </Link>
                </CellGroup.Cell>
            </CellGroup>


            <CellGroup title="操作反馈">
                <CellGroup.Cell arrow
                    leftIcon="camera"
                >
                    <Link to="/ActionSheet">
                        动作面板 ActionSheet
                    </Link>
                </CellGroup.Cell>
                <CellGroup.Cell
                    leftIcon="camera"
                >
                    <Link to="/Modal">
                        模态框 Modal
                    </Link>
                </CellGroup.Cell>
                <CellGroup.Cell arrow
                    leftIcon="camera"
                >
                    <Link to="/Popup">
                        弹出框 Popup
                    </Link>
                </CellGroup.Cell>
                <CellGroup.Cell arrow
                    leftIcon="camera"
                >
                    <Link to="/Pulllist">
                        上拉加载下拉刷新 Pull
                    </Link>
                </CellGroup.Cell>
                <CellGroup.Cell arrow
                    leftIcon="camera"
                >
                    <Link to="/PageToast">
                        轻提示 PageToast
                    </Link>
                </CellGroup.Cell>

                <CellGroup.Cell arrow
                    leftIcon="camera"
                >
                    <Link to="/PageScrollView">
                        动画滚动插件 PageScrollView
                    </Link>
                </CellGroup.Cell>
                <CellGroup.Cell arrow
                    leftIcon="camera"
                >
                    <Link to="/PageAnimate">
                        动画 PageAnimate
                    </Link>
                </CellGroup.Cell>
            </CellGroup>

        </Layout>
    }
}