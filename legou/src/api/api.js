import request from '@/tools/request.js'

// 获取专题页详情
export function listaction(val) {
    return request({
        url: "/topic/listaction",
        params: val,
        method: 'get'
    })
}

// 分类
export function indexaction() {
    return request({
        url: "/category/indexaction",
        method: 'get'
    })
}

export function currentaction(val) {
    return request({
        url: "/category/currentaction",
        method: 'get',
        params: val
    })
}
export function categoryNav(val) {
    return request({
        url: "/category/categoryNav",
        method: 'get',
        params: val
    })
}
export function goodsList(val) {
    return request({
        url: "/goods/goodsList",
        method: 'get',
        params: val
    })
}
export function detailaction(val) {
    return request({
        url: '/goods/detailaction',
        method: 'get',
        params: val
    })
}


export function addcollect(val) {
    return request({
        url: "/collect/addcollect",
        method: 'post',
        data: val
    })
}

export function addcart(val) {
    return request({
        url: "/cart/addcart",
        method: 'post',
        data: val
    })
}

// 购物车
export function cartlist(val) {
    return request({
        url: "/cart/cartlist",
        method: 'get',
        params: val
    })
}