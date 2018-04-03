import React, { PureComponent } from 'react'

import { Button, Layout, HeaderBack, CellGroup, Toast, Loadding, Animate } from '../../../components/dingyi.js'
import { fetch_get_good_lists } from '../../actions/action_page_cart'
class PageCart extends PureComponent {
    constructor() {
        super();
        // this.changeStateUp = this.changeStateUp.bind(this)
    }
    renderGoodArray() {
        var { store, add_to_cart } = this.props;
        var good_array = store.PageCart.get('good_array')
        var _array = [];
        good_array.map((item, index) => {
            _array.push(
                <div
                    style={{ padding: 10 }}
                    key={item.id}>{item.name}
                    <button onClick={() => { add_to_cart(item) }}>add to cart</button>
                </div>
            )
        })
        return _array
    }
    renderCartArray() {
        var { store, delete_from_cart } = this.props;
        const cart_array = store.PageCart.get("cart_array")
        var _array = [];
        cart_array.map((item, index) => {
            _array.push(
                <div
                    style={{ padding: 10 }}
                    key={item.id}>{item.name}
                    <button onClick={() => { delete_from_cart(item) }}>delete</button>
                </div>
            )
        })
        return _array
    }
    render() {
        var { store } = this.props;
        return <Layout>
            <HeaderBack>PageCart</HeaderBack>
            <div>
                <h1>good lists</h1>
                <div>
                    {this.renderGoodArray()}
                </div>
            </div>
            <div>
                <h1>cart lists</h1>
                <div>
                    {this.renderCartArray()}
                </div>
            </div>
        </Layout >
    }
    componentDidMount() {
        /* 初始化数据 */
        var { init_good } = this.props
        init_good();
    }
}
export default PageCart


