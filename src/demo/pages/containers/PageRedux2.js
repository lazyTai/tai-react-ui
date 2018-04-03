import { connect } from 'react-redux'
import PageRedux2 from '../components/PageRedux2'
import { fetch_get_array } from '../../actions/PageRedux2'
const mapStateToProps = state => {
    return { store: state }
}
const mapDispatchToProps = dispatch => {
    return {
        click: () => {
            dispatch(fetch_get_array())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageRedux2)