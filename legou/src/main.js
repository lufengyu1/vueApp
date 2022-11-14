import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import "@/assets/css/global.css"
// 按需引入vant
import vant from './plugin/index'
import axios from 'axios'
// 引入swiper
import "swiper/swiper.min.css"


Vue.config.productionTip = false
Vue.prototype.$http = axios
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')