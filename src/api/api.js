/**
 * Created by busyhe on 2017/8/25 下午5:46.
 * Email: 525118368@qq.com
 */
import axios from 'axios'
import qs from 'qs'
import NProgress from 'nprogress'

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    NProgress.start()
    return config
}, function (error) {
    return Promise.reject(error)
});

// 添加返回拦截器
axios.interceptors.response.use(function (res) {
    NProgress.done();
    return res
}, function (error) {
    NProgress.done();
    return Promise.reject(error)
});

let baseUrl = '/api';

export const hello = () => {
    return axios.post(baseUrl, qs.stringify({})).then(res => res.data)
}
