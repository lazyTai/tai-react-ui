import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Layout, HeaderBack, CellBlock, ScrollView } from '../../../components/dingyi.js'
class Redux2 extends Component {
    constructor() {
        super()
        // this.state = {
        // }
    }
    render() {
        /* learn from 
        https://github.com/reactjs/redux/tree/master/examples
        */
        return <Layout>
            <HeaderBack>redux的todo例子</HeaderBack>
        </Layout>
    }
}
const mapStateToProps = state => ({
    store: state
})
export default connect(mapStateToProps, null)(Redux2)


