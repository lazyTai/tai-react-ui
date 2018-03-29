import React from 'react'

import { Link } from 'react-router'
import { Button, Layout, Header } from '../../components/dingyi.js'
import './css/index.css'
export default class Index extends React.Component {
    render() {
        return <Layout>
            <Header title="首页"/>
            <Link to="/button">
                <Button>hello button</Button>
            </Link>

        </Layout>
    }
}