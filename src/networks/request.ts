import axios, { Method, AxiosRequestConfig} from 'axios';

let baseURL = '';

function configHeaders() {
    return {
        'Content-Type': 'application/json'
    }
}

const request = function(url: string, method: Method, params?: any) {
    let config: AxiosRequestConfig = {
        url: baseURL + url,
        method: method,
        headers: configHeaders()
    }
    if(method == 'get') {
        config.params = params
    }else if(method == 'post') {
        config.data = params
    }
    return new Promise((resolve,reject) => {
        axios(config).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

const doPost = function(url:string, params?: any) {
    return request(url,'post', params)
}

const doGet = function(url:string, params: any) {
    return request(url,'get', params)
}

export {
    request,
    doGet,
    doPost
}