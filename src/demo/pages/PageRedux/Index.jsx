import React, { Component } from 'react'
import { Button, Layout, HeaderBack, CellBlock, CellGroup, ScrollView } from '../../../components/dingyi.js'
import { Link } from 'react-router-dom'
class PageRedux extends Component {
    constructor() {
        super()
    }
    render() {
        /* learn from 
        https://github.com/reactjs/redux/tree/master/examples
        */
        return <Layout>
            <HeaderBack>第一次使用redux的例子</HeaderBack>

            <CellGroup>
                <CellGroup.Cell>
                    <Link to="/PageRedux/Redux1">
                        Redux1
                    </Link>
                </CellGroup.Cell>
            </CellGroup>



        </Layout>
    }
}
export default (PageRedux)


