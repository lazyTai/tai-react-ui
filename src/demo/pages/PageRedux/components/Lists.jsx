import React, { Component } from 'react'

export default class todoForm extends Component {
    constructor() {
        super();
    }
    renderArray() {
        var self = this;
        var { todoLists } = this.props.store.todos
        var { onClickDelete } = this.props
        var _array = [];
        for (var i = 0; i < todoLists.length; i++) {
            _array.push(<div
                key={Math.random(0)}
            >
                {todoLists[i].id}
                {todoLists[i].text}

                <button onClick={
                    onClickDelete.bind(self, todoLists[i].id)
                }>delete</button>
            </div>)
        }
        return _array
    }
    render() {
        return (
            <div>
                {this.renderArray()}
            </div>
        )
    }
}
