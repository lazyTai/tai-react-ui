import React, { Component } from 'react'

import { Button, Layout, HeaderBack, CellRightGroup, Toast, Loadding, Input } from '../../../components/dingyi.js'

class PageInput extends Component {
    constructor() {
        super();
        this.state = {}
        // this.changeStateUp = this.changeStateUp.bind(this)
    }

    render() {
        return <Layout>
            <HeaderBack>输入框</HeaderBack>
            <CellRightGroup
                title="输入框"
            >
                <CellRightGroup.Cell left={<span>名字</span>} right={<Input />} />
                <CellRightGroup.Cell left={<span>密码</span>} right={<Input />} />
            </CellRightGroup>

        </Layout>
    }
}

export default PageInput


