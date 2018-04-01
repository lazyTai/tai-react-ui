import React from 'react'
import { Button, Layout, HeaderBack, CellBlock } from '../../components/dingyi.js'
class Button1 extends React.Component {
    render() {
        return (
            <Layout style={{ background: '#eee' }}>
                <HeaderBack>
                    按钮
                </HeaderBack>

                <CellBlock title="基本">
                    <Button type="primary">primary</Button>
                    <Button type="danger">danger</Button>
                    <Button type="infor">infor</Button>
                    <Button type="disabled">disabled</Button>
                    <Button type="hollow">hollow</Button>
                </CellBlock>


                <CellBlock title="块按钮">
                    <Button type="primary" block>primary</Button>
                    <Button type="danger" block>danger</Button>
                    <Button type="infor" block>infor</Button>
                    <Button type="disabled" block>disabled</Button>
                    <Button type="hollow" block>hollow</Button>
                </CellBlock>



            </Layout>
        )
    }
}

export default Button1