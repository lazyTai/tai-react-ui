import React, { Component } from 'react'

import Com_todoForm from '../components/todoForm'

import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../actions'

const mapStateToProps = (state) => ({
    store: state
})

const mapDispatchToProps = (dispatch) => ({
    onClick(text) {
        if (text) {
            dispatch({
                type: 'add-todo',
                payload: {
                    id: Math.random(),
                    text
                }
            })
        }
    }

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Com_todoForm)

