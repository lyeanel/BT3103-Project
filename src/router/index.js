import Vue from 'vue'
import VueRouter from 'vue-router'

//import Chat from '../Chat.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/home',
        name: 'home',
        component: () => import('../views/Home'),
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: () => import('../views/Dashboard/Layout'),
        children: [
            {
                path: 'indicators',
                name: 'dashboard.indicators',
                component: () => import('../views/Dashboard/Indicators')
            },
            {
                path: 'backup',
                name: 'dashboard.backup',
                component: () => import('../views/Dashboard/Backup')
            },
            {
                path: 'logs',
                name: 'dashboard.logs',
                component: () => import('../views/Dashboard/Logs')
            }
        ]
    },
    {
        path: '/chat',
        name: 'Chat',
        component: () => import('../Chat.vue'),
        // meta: { requiresAuth: true },
        props: true,
        // beforeEnter: (to,from,next) => {
        //         next({name: 'Chat', params: {name: user.data.displayName}});
        // }
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../loginuser.vue'),
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../Register.vue'),
    },
    {
        path: '/',
        name: 'landing',
        component: () => import('../Landing.vue'),
    },
    {
        path: '/search',
        name: 'search',
        component: () => import('../views/Search.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

  export default router
