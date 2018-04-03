export function fetch_get_lists(opt) {
    return ajax({
        type: 'get',
        url: '/array',
        data: { a: 1 },
        success(resjson) {
            opt.success && opt.success(resjson)
        }
    })
}