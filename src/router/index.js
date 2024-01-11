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
                name: 'home',
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
                name: 'btnAuth',
                component: () => import('@/pages/BtnAuth/BtnAuth.vue')
            }
        ]
    },
    {
        path: '/tables',
        component: Layout,
        children: [
            {
                path: 'conditionTable',
                name: 'conditionTable',
                component: () => import('@/pages/Tables/ConditionTable/ConditionTable.vue'),
            },
            {
                path: 'routineTable',
                name: 'routineTable',
                component: () => import('@/pages/Tables/RoutineTable/RoutineTable.vue'),
            }
        ]
    },
    {
        path: '/forms',
        component: Layout,
        children: [
            {
                path: 'conditionForm',
                name: 'conditionForm',
                component: () => import('@/pages/Forms/ConditionForm/ConditionForm.vue')
            },
            {
                path: 'routineForm',
                name: 'routineForm',
                component: () => import('@/pages/Forms/RoutineForm/RoutineForm.vue')
            }
        ]
    },
    {
        path: '/setting',
        component: Layout,
        children: [
            {
                path: '',
                name: 'setting',
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

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch(err => {
        if (err.name !== 'NavigationDuplicated') {
            throw err;
        }
    });
};


export default router