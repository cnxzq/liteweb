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
        path:'/loading',
        component:()=>import('@/views/loading/Loading.vue'),
        meta:{
            title:"加载动画", 
            icon: 'mdi-account'
        }
    },
    {
        path:'/drag',
        component:()=>import('@/views/drag/Drag.vue'),
        meta:{
            title:"拖拽", 
            icon: 'mdi-clock'
        }
    },
    {
        path:'/viewer',
        component:()=>import('@/views/viewer/Viewer.vue'),
        meta:{
            title:"查看器", 
            icon: 'mdi-flag'
        }
    },
    {
        path:'/random',
        component:()=>import('@/views/css-doodle/random.vue'),
        meta:{
            title:"Random", 
            icon: 'mdi-flag'
        }
    },
    {
        path:'/glass',
        component:()=>import('@/views/css/glass.vue'),
        meta:{
            title:"毛玻璃", 
            icon: 'mdi-flag'
        }
    },
    {
        path:'/marquee',
        component:()=>import('@/views/css/marquee.vue'),
        meta:{
            title:"跑马灯", 
            icon: 'mdi-flag'
        }
    },
    {
        path:'/loading',
        component:()=>import('@/views/AnimLoading/AnimLoading.vue'),
        meta:{
            title:"加载动画", 
            icon: 'mdi-flag'
        }
    },
    {
        path:'/p5',
        component:()=>import('@/views/p5/P5.vue'),
        meta:{
            title:"P5动画", 
            icon: 'mdi-flag'
        }
    },
    {
        path:'/device',
        component:()=>import('@/views/device/index.vue'),
        meta:{
            title:"设备", 
            icon: 'mdi-flag'
        }
    },
    {
        path:'/svg',
        component:()=>import('@/views/svg/SvgDemo.vue'),
        meta:{
            title:"SVG", 
            icon: 'mdi-flag'
        }
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes:routes as RouteRecordRaw[]
})

export default router;