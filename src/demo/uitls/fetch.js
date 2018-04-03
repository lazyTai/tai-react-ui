function get(opt) {
    return ajax({
        type: 'get',
        url: opt.url,
        data: opt.data,
        success(resjson) {
            opt.success && opt.success(resjson)
        },
        error() {
            opt.error && opt.error()
        }
    })
}
export function fetch_get_lists(opt) {
    return get({
        url: '/array', success: opt.success, data: opt.data
    })
}
export function fetch_get_goods_lists(opt) {
    return get({
        url: '/set_good_lists', success: opt.success, data: opt.data
    })
}