import { connect } from 'react-redux'
import PageCart from '../components/PageCart'
import * as  types from '../../actions/action_page_cart'
const mapStateToProps = state => {
    return { store: state }
}
const mapDispatchToProps = dispatch => {
    return {
        init_good: () => { dispatch(types.fetch_get_good_lists()) },
        add_to_cart: (item) => {
            dispatch(types.add_into_cart(item))
        },
        delete_from_cart: (item) => {
            dispatch(types.delete_cart_item(item))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageCart)