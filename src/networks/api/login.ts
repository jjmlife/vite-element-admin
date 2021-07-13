import { doPost } from "../request";

const api = {
    login: '/login',
    logout: '/logout'
}

const login = function(params: any) {
    return doPost(api.login,params)
} 

const logout = function(params: any) {
    return doPost(api.logout,params)
} 


export {
    login,
    logout
}