import request from '@/tools/request.js'

export function index() {
    return request({
        method: 'get',
        url: '/index/index'
    })
}