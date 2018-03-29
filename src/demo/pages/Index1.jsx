import React from 'react'

import { Button } from '../../components/tai'
import { Link } from 'react-router'
export default class Index extends React.Component {
    render() {
        return <div>
            <div>
                首页
            </div>
            <Link to="/button">
                <Button>hello button</Button>
            </Link>

        </div>
    }
}