import axios from 'axios'
import { Toast } from 'vant';
var host;
if (process.env.NODE_ENV == 'development') {
    host = 'http://shop.bufantec.com/bufan'
} else {
    host = 'http://shop.bufantec.com/bufan'
}

var instance = axios.create({
    baseURL: host,
    timeout: 5 * 1000
});

var loading;
// 请求拦截器
instance.interceptors.request.use(config => {
    loading = Toast.loading({
        message: '加载中...',
        forbidClick: true,
        duration: 0
    });
    return config
}, err => {
    return Promise.reject(err);
});
// 响应拦截器
instance.interceptors.response.use(response => {
    loading.clear();
    return response
}, err => {
    loading.clear()
    return Promise.reject(err)
})

export default instance;