import Vue from 'vue';
import VueRouter from "vue-router";
import Layout from '@/Layout/Layout.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        // redirect: 'login',
        redirect: 'home',
    },
    {
        path: '/login',
        component: () => import('@/pages/Login/Login.vue')
    },
    {
        path: '/home',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/pages/Home/Home.vue')
            }
        ]
    },
    {
        path: '/btnAuth',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/pages/BtnAuth/BtnAuth.vue')
            }
        ]
    },
    {
        path: '/tables',
        component: Layout,
        children: [
            {
                path: 'condition',
                component: () => import('@/pages/Tables/ConditionTable/ConditionTable.vue'),
            },
            {
                path: 'routine',
                component: () => import('@/pages/Tables/RoutineTable/RoutineTable.vue'),
            }
        ]
    },
    {
        path: '/forms',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/pages/Forms/Forms.vue')
            }
        ]
    },
    {
        path: '/setting',
        component: Layout,
        children: [
            {
                path: '',
                component: () => import('@/pages/Setting/Setting.vue')
            }
        ]
    },
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