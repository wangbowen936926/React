import axios from 'axios';
//import qs from 'querystring';

// 创建 axios 实例
const request = axios.create({
    // 配置项
    baseURL: 'http://192.168.0.112:8000',
    // 跨域请求时是否需要使用凭证(Cookie)与服务端"Access-Control-Allow-Credentials": true 使用(保持一致性)
    //withCredentials: true,
    // 请求 30s 超时
    timeout: 30000,
    // 在向服务器发送请求前，序列化请求数据
    transformRequest: [function (data) {
        data = JSON.stringify(data)
        return data
    }],
    // 在传递给 then/catch 前，修改响应数据
    // transformResponse: [function (data) {
    //     if (typeof data === 'string' && data.startsWith('{')) {
    //         data = JSON.parse(data)
    //     }
    //     return data
    // }]
})

// request.defaults.headers.common['Authorization'] = 'AUTH_TOKE';
//request.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';


//请求拦截器
request.interceptors.request.use(config => {
    // if(config.method === 'post') {
    //     config.data = qs.stringify(config.data);
    // }
    return config
}, error => {
    // 错误抛到业务代码
    error.data = {}
    error.data.msg = '服务器异常，请联系管理员！'
    return Promise.resolve(error)
})

//响应拦截器
request.interceptors.response.use(response => {

    let message = '';
    let status = response.status;

    if (status < 200 || status >= 300) {
        // 处理http错误，抛到业务代码
        message = showStatus(status)
        if (typeof response.data === 'string') {
            response.data = { message }
        } else {
            response.data.msg = message
        }
    }

    return response;

}, error => {
    // 错误抛到业务代码
    error.data = {}
    error.data.msg = '请求超时或服务器异常，请检查网络或联系管理员！'
    return Promise.resolve(error)
})

// 状态码
const showStatus = (status) => {
    let message = '';
    switch (status) {
        case 400:
            message = '请求错误(400)'
            break
        case 401:
            message = '未授权，请重新登录(401)'
            break
        case 403:
            message = '拒绝访问(403)'
            break
        case 404:
            message = '请求出错(404)'
            break
        case 408:
            message = '请求超时(408)'
            break
        case 500:
            message = '服务器错误(500)'
            break
        case 501:
            message = '服务未实现(501)'
            break
        case 502:
            message = '网络错误(502)'
            break
        case 503:
            message = '服务不可用(503)'
            break
        case 504:
            message = '网络超时(504)'
            break
        case 505:
            message = 'HTTP版本不受支持(505)'
            break
        default:
            message = `连接出错(${status})!`
    }
    return `${message}，请检查网络或联系管理员！`
}

const service = (method, url, {data, headers}) => {

    let param = [url, data];

    const type = method.toLowerCase();

    if(type === 'post' || type === 'put') param.push({headers: headers});

    return new Promise((resolve, reject) => {
        request[type](...param).then(res => resolve(res.data)).catch(err => reject(err));
    }) 
    
}

export default service;


