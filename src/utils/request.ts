import axios from "axios";
import {ElLoading, ElMessage} from "element-plus";


let request = axios.create({
    timeout: 5000,
})


request.interceptors.request.use((config) => {
    //loading.fullscreen
    return config
})

request.interceptors.response.use((response) => {
    //loading.close()
    return response.data
},(error) => {
    let message = ''
    let status = error.response.status
    switch (status) {
        case 401:
            message = 'TOKEN过期'
            break
        case 403:
            message = '无权限'
            break
        case 404:
            message = '请求地址错误'
            break
        case 500:
            message = '服务器出错'
            break
        default:
            message = '未知错误'
            break
    }

    ElMessage({
        type:"error",
        message:message
    })
    return Promise.reject(error)
})

export default request
