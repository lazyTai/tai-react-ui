import { connect } from 'react-redux'
import PageRedux2 from '../components/PageRedux2'
import { add_num, decrease_num } from '../../actions/PageRedux1'
const mapStateToProps = state => {
    return { store: state }
}
const mapDispatchToProps = dispatch => {
    return {
        add: () => { dispatch(add_num) },
        down: () => { dispatch(decrease_num) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageRedux2)