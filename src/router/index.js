import Vue from 'vue';
import VueRouter from "vue-router";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        redirect: 'login',
    },
    {
        path: '/login',
        component: () => import('@/pages/Login/Login.vue')
    },
    // {
    //     path:'/layout',
    //     component: () => import('@/pages/Layout/Layout.vue'),
    // },
    {
        path: '*',
        component: () => import('@/pages/404/404.vue')
    }
]

const router = new VueRouter({
    mode: 'hash',
    routes
})

export default router