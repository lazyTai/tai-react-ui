import React, { Component } from 'react'

import { Button, Layout, HeaderBack, CellBlock, ScrollView } from '../../../../components/dingyi.js'
import TodoForm from '../containers/todoForm'
import Lists from '../containers/Lists'
class Redux2 extends Component {
    render() {
        /* learn from 
        https://github.com/reactjs/redux/tree/master/examples
        */
        return <Layout>
            <HeaderBack>redux的todo例子</HeaderBack>
            {/* 添加表单 */}
            <TodoForm />
            <Lists />
        </Layout>
    }
}
export default Redux2


