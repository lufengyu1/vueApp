import request from '@/tools/request.js'

// 首页
export function index() {
    return request({
        method: 'get',
        url: '/index/index'
    })
}

// 新品
export function goodsList(params) {
    return request({
        method: 'get',
        url: '/goods/goodsList',
        params: params
    })
}

// 获取搜索页信息
export function indexaction(val) {
    return request({
        method: 'get',
        url: "/search/indexaction",
        params: val
    })
}
// 获取搜素结果
export function helperaction(val) {
    return request({
        method: 'get',
        url: "/search/helperaction",
        params: val
    })
}
// 添加历史搜素
export function addhistoryaction(val) {
    return request({
        url: "/search/addhistoryaction",
        method: "post",
        data: val
    })
}
// 清除历史搜素哦
export function clearhistoryAction(val) {
    return request({
        url: "/search/clearhistoryAction",
        method: "post",
        data: val
    })
}