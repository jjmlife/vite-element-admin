import {Router,createRouter,RouteRecordRaw, createWebHashHistory} from 'vue-router'

import { sysRoutes, statisRoutes } from './module/sms';

const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        redirect: '/sys',
    },
    // {
    //     path: '/login',
    //     name: 'login',
    //     component: () => import('@/views/login/index.vue'),
    //     meta: {
    //         title: 'login',
    //         role: ''
    //     }
    // },
    ...sysRoutes,
    ...statisRoutes
    // {
    //     path: '/404',
    //     name: '404',
    //     component: () => import('@/views/error-page/404.vue'),
    //     meta: {
    //         title: 'error',
    //         role: ''
    //     }
    // }
]
 

const router = createRouter({
    history: createWebHashHistory(),
    routes:constantRoutes
})

export default router;





