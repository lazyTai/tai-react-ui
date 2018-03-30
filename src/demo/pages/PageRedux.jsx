import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, Layout, HeaderBack, CellBlock, ScrollView } from '../../components/dingyi.js'
class PageRedux extends Component {
    constructor() {
        super()
        // this.state = {
        // }

        this.add = this.add.bind(this)
        this.down = this.down.bind(this)
    }
    render() {
        /* learn from 
        https://github.com/reactjs/redux/tree/master/examples
        */
        return <Layout>
            <HeaderBack>第一次使用redux的例子</HeaderBack>

            <Button.ButtonGroup>
                <Button onClick={this.add}>按钮+</Button>
                <Button onClick={this.down}>按钮-</Button>
            </Button.ButtonGroup>

            <CellBlock>
                store +  dispatch 都注入到props中
                <pre>
                    {JSON.stringify(this.props.store)}
                </pre>
            </CellBlock>


        </Layout>
    }
    add() {
        this.props.dispatch({ type: 'add' })
    }
    down() {
        this.props.dispatch({ type: 'down' })
    }
}
const mapStateToProps = state => ({
    store: state
})
export default connect(mapStateToProps, null)(PageRedux)


