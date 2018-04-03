import React, { Component } from 'react'

import { Button, Layout, HeaderBack, CellGroup, ScrollView } from '../../../components/dingyi.js'

console.log(ScrollView)
class PageScrollView extends Component {
    constructor() {
        super()
        this.state = {
            lists: 30
        }
        this.renderArray = this.renderArray.bind(this)
    }
    renderArray() {
        var _array = [];
        for (var i = 0; i < this.state.lists; i++) {
            _array.push(<div key={i}>{i}</div>)
        }
        return _array
    }
    render() {
        return <Layout>
            <HeaderBack>动画滚动插件</HeaderBack>
            <ScrollView style={{ height: '300px', border: '1px #eee solid' }}>
                {
                    (valueFromParent) => {
                        return <div>
                            <pre>
                                {JSON.stringify(valueFromParent)}
                            </pre>
                            {this.renderArray()}
                            <pre>
                                {JSON.stringify(valueFromParent)}
                            </pre>
                        </div>
                    }
                }
            </ScrollView>
        </Layout>
    }
}
export default PageScrollView


