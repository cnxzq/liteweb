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
    },
    {
        path:'/viewer',
        component:()=>import('@/views/viewer/Viewer.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router;