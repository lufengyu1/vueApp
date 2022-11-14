import Vue from 'vue'
import VueRouter from 'vue-router'
// 第一个页面提前加载 ， 后面的页面按需引入
import Home from '@/views/home/index.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home',
    }, {
        path: '/home',
        name: 'home',
        component: Home
    }, {
        path: '/home/search',
        name: 'search',
        component: () =>
            import ('@/views/home/search/index.vue')
    }, {
        path: '/home/newGoods/:id',
        name: 'newGoods',
        component: () =>
            import ('@/views/home/newGoods/index.vue')
    }, {
        path: '/home/city',
        name: 'city',
        component: () =>
            import ('@/views/home/city/city.vue')
    },
    {
        path: "/cart",
        name: 'cart',
        component: () =>
            import ('@/views/cart/index.vue')
    }, {
        path: "/category",
        name: 'category',
        component: () =>
            import ('@/views/category/index.vue')
    }, {
        path: '/category/list',
        name: 'categoryList',
        component: () =>
            import ('@/views/category/list/index.vue')
    }, {
        path: '/category/list/info',
        name: 'categoryListInfo',
        component: () =>
            import ('@/views/category/list/info/index.vue')
    }, {
        path: "/mine",
        name: 'mine',
        component: () =>
            import ('@/views/mine/index.vue')
    }, {
        path: "/topic",
        name: 'topic',
        component: () =>
            import ('@/views/topic/index.vue')
    }, {
        path: '/test',
        name: 'test',
        component: () =>
            import ('@/views/test.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router