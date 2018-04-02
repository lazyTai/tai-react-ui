import React, { Component } from 'react'

import { Button, Layout, HeaderBack, CellGroup, CheckBox } from '../../components/dingyi.js'

class PageCheckout extends Component {
    constructor() {
        super()
        this.state = {
            _value1: false,
            _value2: true
        }
        this.onChange1 = this.onChange1.bind(this)
        this.onChange2 = this.onChange2.bind(this)
    }
    render() {
        var { _value1, _value2 } = this.state
        return <Layout>
            <HeaderBack>PageCheckout</HeaderBack>

            <CellGroup
                title="基本"
            >
                <CellGroup.Cell>
                    <CheckBox title="普通" value={_value1}
                        onChange={this.onChange1}
                    />
                </CellGroup.Cell>
                <CellGroup.Cell>
                    <CheckBox title="默认选中" value={_value2}
                        onChange={this.onChange2}
                    />
                </CellGroup.Cell>
            </CellGroup>
        </Layout>
    }
    onChange1() {
        this.setState({
            _value1: !this.state._value1
        })
    }
    onChange2() {
        this.setState({
            _value2: !this.state._value2
        })
    }
}
export default PageCheckout


