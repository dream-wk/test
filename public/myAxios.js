import axios from 'axios'
axios.defaults.baseURL = 'http://119.23.235.237/'
//  REQUEST 请求异常拦截
// axios.interceptors.request.use(config => {
//     //==========  所有请求之前都要执行的操作  ==============
//     return config;
// }, err => {
//     //==================  错误处理  ====================
//     Message.error({ message: '请求超时!' });
//     return Promise.resolve(err);
// })

//  RESPONSE 响应异常拦截
// axios.interceptors.response.use(res => {
//     //==============  所有请求完成后都要执行的操作  ==================

//     // 第一种方式

//     // 根据返回的code值来做不同的处理（和后端约定）
//     switch (res.data.code) {
//         case 0:
//             alert("失败")
//             // 这一步保证数据返回，如果没有return则会走接下来的代码，不是未登录就是报错
//             return data;
//         case 1:
//             // 微信生产环境下授权登录
//             alert("成功")
//             break

//         default:
//     }
//     // 第二种方式，仅对200和error状态处理
//     if (data.status && data.status == 200 && data.data.status == 'error') {
//         Message.error({ message: data.data.msg });
//         return;
//     }
//     return Promise.resolve(data);
// }, err => {
//     //==============  错误处理  ====================
//     if (err && err.response) {
//         switch (err.response.status) {
//             case 400: err.message = '请求错误(400)'; break;
//             case 401: err.message = '未授权，请重新登录(401)'; break;
//             case 403: err.message = '拒绝访问(403)'; break;
//             case 404: err.message = '请求出错(404)'; break;
//             case 408: err.message = '请求超时(408)'; break;
//             case 500: err.message = '服务器错误(500)'; break;
//             case 501: err.message = '服务未实现(501)'; break;
//             case 502: err.message = '网络错误(502)'; break;
//             case 503: err.message = '服务不可用(503)'; break;
//             case 504: err.message = '网络超时(504)'; break;
//             case 505: err.message = 'HTTP版本不受支持(505)'; break;
//             default: err.message = `连接出错(${err.response.status})!`;
//         }
//     } else {
//         err.message = '连接服务器失败!'
//     }
//     Message.err({ message: err.message })
//     return Promise.resolve(err);
// })

import cookieOperation from './my.js'
export default {
    post(url, data, config, auth = false) {
        if (auth) {//需要博主权限的
            if (!cookieOperation.getCookie("token")) {
                alert("未登录或登录失效")
                return
            }
            if (config) {//需要另外传'Content-Type'配置的
                console.log(config)
                config.headers.token = cookieOperation.getCookie("token")
                return axios.post(url, data, config)
            }
            return axios.post(url, data, {
                headers: {
                    'token': cookieOperation.getCookie("token")
                }
            })
        } else {//不需要权限的
            return axios.post(url, data, config)
        }
    },
    postImg(url, data) {
        if (!cookieOperation.getCookie("token")) {
            alert("未登录或登录失效")
            return
        }
        return axios.post("http://119.23.235.237/index.php", data, {
            headers: { "Content-Type": "multipart/form-data" }
        })
    },
    get(url, data, config, auth = false) {
        if (auth) {//需要博主权限的
            if (!cookieOperation.getCookie("token")) {
                alert("未登录或登录失效")
                return
            }
            if (config) {//需要另外传'Content-Type'配置的
                console.log(config)
                config.headers.token = cookieOperation.getCookie("token")
                return axios.get(url, data, config)
            }
            return axios.get(url, data, {
                headers: {
                    'token': cookieOperation.getCookie("token")
                }
            })
        } else {//不需要权限的
            return axios.get(url, data, config)
        }
    },
    delete(url, data, config, auth = false){
        if (auth) {//需要博主权限的
            if (!cookieOperation.getCookie("token")) {
                alert("未登录或登录失效")
                return
            }
            if (config) {//需要另外传'Content-Type'配置的
                console.log(config)
                config.headers.token = cookieOperation.getCookie("token")
                return axios.delete(url, data, config)
            }
            return axios.delete(url, data, {
                headers: {
                    'token': cookieOperation.getCookie("token")
                }
            })
        } else {//不需要权限的
            return axios.delete(url, data, config)
        }
    }
}