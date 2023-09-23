import { createRouter, createWebHashHistory,RouteRecordRaw } from 'vue-router'

const routes:RouteRecordRaw[]= [
    {
        path:'/',
        redirect:'/loading'
    },
    {
        path:'/loading',
        component:()=>import('@/views/loading/Loading.vue')
    },
    {
        path:'/drag',
        component:()=>import('@/views/drag/Drag.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;