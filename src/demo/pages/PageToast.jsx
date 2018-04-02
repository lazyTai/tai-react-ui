import React, { Component } from 'react'

import { Button, Layout, HeaderBack, CellGroup, Toast, Animate } from '../../components/dingyi.js'

class PageToast extends Component {
    constructor() {
        super();
        this.state = {
            x: 0,
        }
        // this.changeStateUp = this.changeStateUp.bind(this)
    }
    render() {
        var { x } = this.state
        return <Layout>
            <HeaderBack>PageToast</HeaderBack>
            <Button.ButtonGroup>
                <Button onClick={() => {
                    Toast.show(<div>
                        fuck show
                </div>, 1000, (a) => {
                        })
                }}>toast 1</Button>
            </Button.ButtonGroup>
        </Layout >
    }
}
export default PageToast


