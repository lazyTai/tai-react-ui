import React from 'react'

import { Button } from '../../components/tai.js'
class Button1 extends React.Component {
    render() {
        return (
            <div>
                <Button type="primary">primary</Button>
                <Button type="danger">danger</Button>
                <Button type="infor">infor</Button>
                <Button type="disabled">disabled</Button>
                <Button type="hollow">hollow</Button>
            </div>
        )
    }
}

export default Button1