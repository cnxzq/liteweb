import { createRouter, createWebHashHistory,RouteRecordRaw } from 'vue-router'

export const routes:AppRouteRecordRaw[]= [
    {
        path:'/',
        redirect:'/main',
        meta:{
            hidden:true
        }
    },
    {
        path:'/main',
        name: 'main-parent',
        component:async ()=>(await import('@/layout')).Layout,
        meta:{
            hidden:true
        },
        children:[
            {
                path:'',
                redirect:'/main/loading',
                meta:{
                    hidden:true
                }
            },
            {
                path:'/main/loading',
                name:'lading',
                component:()=>import('@/views/loading/Loading.vue'),
                meta:{
                    title:"加载动画", 
                    icon: 'mdi-account'
                }
            },
            {
                path:'/main/drag',
                name:'drag',
                component:()=>import('@/views/drag/Drag.vue'),
                meta:{
                    title:"拖拽", 
                    icon: 'mdi-clock'
                }
            },
            {
                path:'/main/viewer',
                name:'viewer',
                component:()=>import('@/views/viewer/Viewer.vue'),
                meta:{
                    title:"查看器", 
                    icon: 'mdi-flag'
                }
            },
            {
                path:'/main/random',
                name:'random',
                component:()=>import('@/views/css-doodle/random.vue'),
                meta:{
                    title:"Random", 
                    icon: 'mdi-flag'
                }
            },
            {
                path:'/main/glass',
                name:'glass',
                component:()=>import('@/views/css/glass.vue'),
                meta:{
                    title:"毛玻璃", 
                    icon: 'mdi-flag'
                }
            },
            {
                path:'/main/marquee',
                name:'marquee',
                component:()=>import('@/views/css/marquee.vue'),
                meta:{
                    title:"跑马灯", 
                    icon: 'mdi-flag'
                }
            }
        ],
    },
    {
        path:'/main/storage',
        name:'storage',
        component:()=>import('@/views/storage/index.vue'),
        meta:{
            title:"本地存储", 
            icon: 'mdi-account'
        }
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes:routes as RouteRecordRaw[]
})

export default router;