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
        path: "/mine",
        name: 'mine',
        component: () =>
            import ('@/views/mine/index.vue')
    }, {
        path: "/topic",
        name: 'topic',
        component: () =>
            import ('@/views/topic/index.vue')
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router