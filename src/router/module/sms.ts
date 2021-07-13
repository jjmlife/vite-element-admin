import {RouteRecordRaw} from 'vue-router'

const layout = () => import('@/layout/index.vue')


const sysRoutes: Array<RouteRecordRaw> = [
    {
        path: '/sys',
        name: 'sys',
        redirect:'/sys/account',
        component: layout,
        children:[
            {
                path: 'account',
                name: 'account',
                component: () => import('@/views/sys/account/index.vue'),
                meta: {
                    role: ''
                }
            },
            {
                path: 'tenant',
                name: 'tenant',
                component: () => import('@/views/sys/tenant/index.vue'),
                meta: {
                    role: ''
                }
            }
        ]
    }
]

// const businessRoutes: Array<RouteRecordRaw> = [
//     {
//         path: '/business',
//         name: 'business',
//         redirect:'/business/product',
//         component: layout,
//         children:[
//             {
//                 path: 'product',
//                 name: 'product',
//                 component: () => import('@/views/business/product/index.vue'),
//                 meta: {
//                     role: ''
//                 }
//             }
//         ]
//     }
// ]


const statisRoutes: Array<RouteRecordRaw> = [
    {
        path: '/statis',
        name: 'statis',
        redirect:'/statis/account',
        component: layout,
        children:[
            {
                path: 'recorde',
                name: 'recorde',
                component: () => import('@/views/statis/recorde/index.vue'),
                meta: {
                    role: ''
                }
            },
            {
                path: 'cost',
                name: 'cost',
                component: () => import('@/views/statis/cost/index.vue'),
                meta: {
                    role: ''
                }
            }
        ]
    }
]

export {
    sysRoutes,
    statisRoutes
}