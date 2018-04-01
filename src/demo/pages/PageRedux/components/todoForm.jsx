import React, { Component } from 'react'

export default class todoForm extends Component {
    constructor() {
        super();
        this.state = {
            inputValue: "",
        }
    }
    render() {
        var { onClick } = this.props;
        var { inputValue } = this.state
        return (
            <div>
                <input type="text"
                    defaultValue={this.state.inputValue}
                    onInput={({ target }) => {
                        if (target.value) {
                            this.setState({
                                inputValue: target.value
                            })
                        }
                    }}
                />
                <button
                    onClick={() => {
                        onClick(inputValue)
                    }}
                > 添加</button>
            </div>
        )
    }
}
