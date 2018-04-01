import React, { Component } from 'react'

import Com_Lists from '../components/Lists'

import { connect } from 'react-redux'
// import { setVisibilityFilter } from '../actions'

const mapStateToProps = (state) => ({
    store: state
})

const mapDispatchToProps = (dispatch) => ({
    onClickDelete(id) {
        dispatch({
            type: 'delete-todo',
            payload: {
                id
            }
        })
    }

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Com_Lists)

