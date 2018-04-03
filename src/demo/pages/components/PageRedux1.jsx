import React, { Component } from 'react'

import { Button, Layout, HeaderBack, CellGroup, Toast, Loadding, Animate } from '../../../components/dingyi.js'

class PageRedux1 extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        var { store, add, down } = this.props
        var { num } = store.PageRedux1;
        return <Layout>
            <HeaderBack>PageRedux1 </HeaderBack>
            <CellGroup>
                <CellGroup.Cell>
                    num:{num}
                </CellGroup.Cell>
            </CellGroup>
            <CellGroup>
                <Button.ButtonGroup>
                    <Button type="danger" onClick={add}>
                        up
                 </Button>
                    <Button type="infor" onClick={down}>
                        down
                 </Button>
                </Button.ButtonGroup>
            </CellGroup>
        </Layout>
    }
}
export default PageRedux1


