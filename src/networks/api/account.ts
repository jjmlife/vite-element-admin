import { doPost } from "../request";

const api = {
    account_create: '/account/create',
    account_detail: '/account/detail'
}

const account_create = function(params: any) {
    return doPost(api.account_create,params)
} 

const account_detail = function(id: number) {
    return doPost(api.account_detail, {id})
} 


export {
    account_create,
    account_detail
}