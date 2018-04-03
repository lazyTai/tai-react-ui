import React, { Component } from 'react';
import { Button, Layout, HeaderBack, CellGroup, CheckBox } from '../../../components/dingyi.js'
import { Map, fromJS, Set, Repeat, Iterable, List } from 'immutable'

/* 基本 map */
// const map1 = Map({ a: 1, b: 2 })
// const map2 = map1.set('a', 12);

// console.log(map1.get('a'))
// console.log(map2.get('a'))

// var a = fromJS({ a: 1, b: 2 })
// var a = fromJS({ a: { b: [10, 20, 30] }, c: 40 }, function (key, value) {
//     var isIndexed = Iterable.isIndexed(value);
//     return isIndexed ? value.toList() : value.toOrderedMap();
// });
// var a = List([1, 2, 3, 4, 5])
// var b = a.set(-1, 0)
// var c = a.set(6, 66)
// var d = a.delete(1)
// var e = a.insert(1, 111)
// console.log(a.toString())
// console.log(b.toString())
// console.log(c.toString())
// console.log(d.toString())
// console.log(e.toString())
// console.log(Map().set({},000))
// const a = Map({ a: 1 });
// const b = a.set('b', 'bbb')
// const c = a.update('b', function (val) {
//     debugger
//     return "update"
// })
const a = Repeat("123")
// const a = Set([{ a: 1, b: "sad" }, { a: 1, b: "sad" }, { a: 1, b: "sad" }]);
console.log(a.toString())
console.log(a.get(10))
// console.log(b.toString())
// console.log(c.toString())
class PageImmutable extends Component {
    constructor() {
        super();
    }
    render() {
        return <Layout>
            <HeaderBack>Immutable</HeaderBack>
            Immutable

        </Layout>
    }

}

export default PageImmutable 