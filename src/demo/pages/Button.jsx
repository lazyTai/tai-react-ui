import React from 'react'

import { Button, Layout, HeaderBack } from '../../components/dingyi.js'
class Button1 extends React.Component {
    render() {
        return (
            <Layout>
                <HeaderBack>
                    按钮
                </HeaderBack>
                <div>
                    <Button type="primary">primary</Button>
                    <Button type="danger">danger</Button>
                    <Button type="infor">infor</Button>
                    <Button type="disabled">disabled</Button>
                    <Button type="hollow">hollow</Button>
                </div>

            </Layout>
        )
    }
}

export default Button1