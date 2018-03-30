import React, { Component } from 'react'

import { Button, Layout, HeaderBack, CellGroup, ScrollView } from '../../components/dingyi.js'

console.log(ScrollView)
class PageScrollView extends Component {
    render() {
        return <Layout>
            <HeaderBack>动画滚动插件</HeaderBack>
            <ScrollView>
                {
                    (x) => {
                        return <div
                            dangerouslySetInnerHTML={{ __html: JSON.stringify(x) }}></div>
                    }
                }
            </ScrollView>
        </Layout>
    }
}
export default PageScrollView


