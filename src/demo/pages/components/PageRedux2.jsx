import React, { Component } from 'react'

import { Button, Layout, HeaderBack, CellGroup, Toast, Loadding, Animate } from '../../../components/dingyi.js'

class PageRedux2 extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        var { store, click } = this.props
        var { lists } = store.PageRedux2;
        return <Layout>
            <HeaderBack>PageRedux2 </HeaderBack>
            <CellGroup>
                <CellGroup.Cell>
                    {lists}
                </CellGroup.Cell>
            </CellGroup>
            <CellGroup>
                <Button.ButtonGroup>
                    <Button type="danger" onClick={click}>
                        ajax get 获取数据
                 </Button>
                </Button.ButtonGroup>
            </CellGroup>
        </Layout>
    }
}
export default PageRedux2


