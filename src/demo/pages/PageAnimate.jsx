import React, { Component } from 'react'

import { Button, Layout, HeaderBack, CellGroup, ScrollView, Animate } from '../../components/dingyi.js'

class PageAnimate extends Component {
    constructor() {
        super();
        this.state = {
            x: 0,
        }
        this.changeStateUp = this.changeStateUp.bind(this)
        this.changeStateDown = this.changeStateDown.bind(this)
    }
    render() {
        var { x } = this.state
        return <Layout>
            <HeaderBack>动画插件</HeaderBack>
            <Button.ButtonGroup>
                <Button onClick={this.changeStateUp}>右</Button>
                <Button onClick={this.changeStateDown}>左 </Button>
            </Button.ButtonGroup>

            <Animate to={{ x }}>
                {
                    (value_from_parent) => {
                        return <div style={{ transform: `translate3d(${value_from_parent.animateStyle.x}px,0,0)` }}>
                            这是动画效果哦
                            <pre>
                                {JSON.stringify(value_from_parent)}
                            </pre>
                        </div>
                    }
                }
            </Animate>
        </Layout >
    }
    changeStateUp() {
        this.setState({
            x: this.state.x + 100
        })
    }
    changeStateDown() {
        this.setState({
            x: this.state.x - 100
        })
    }
}
export default PageAnimate


