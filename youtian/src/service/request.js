import api from './api';
import request from './http'

const service = {
    // 注册
    register: (option = {}) => {
        request('post', api.register, {...option})
    },
    // 登录
    login: (option = {}) => {
        request('post', api.login, {...option})
    },
    // 忘记密码
    forgetPassword: (option = {}) => {
        request('post', api.forgetPassword, {...option})
    },
}

export default service;