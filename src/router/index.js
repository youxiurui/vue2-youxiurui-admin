import Vue from 'vue';
import VueRouter from "vue-router";
import Layout from '@/Layout/Layout.vue'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject);
    return originalPush.call(this, location).catch(err => {
        if (err.name !== 'NavigationDuplicated') {
            throw err;
        }
    });
};

const routes = [
    {
        path: '/',
        redirect: 'login',
        // redirect: 'home',
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/Login/Login.vue')
    },
    {
        path: '/home',
        component: Layout,
        children: [
            {
                path: '',
                name: 'home',
                meta: {
                    pathName: '首页'
                },
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
                meta: {
                    pathName: '按钮权限'
                },
                component: () => import('@/pages/BtnAuth/BtnAuth.vue')
            }
        ]
    },
    {
        path: '/tables',
        meta: {
            pathName: '表格案例'
        },
        component: Layout,
        children: [
            {
                path: 'conditionTable',
                name: 'conditionTable',
                meta: {
                    pathName: '复杂表格'
                },
                component: () => import('@/pages/Tables/ConditionTable/ConditionTable.vue'),
            },
            {
                path: 'routineTable',
                name: 'routineTable',
                meta: {
                    pathName: '常规表格'
                },
                component: () => import('@/pages/Tables/RoutineTable/RoutineTable.vue'),
            }
        ]
    },
    {
        path: '/forms',
        meta: {
            pathName: '表单案例'
        },
        component: Layout,
        children: [
            {
                path: 'conditionForm',
                name: 'conditionForm',
                meta: {
                    pathName: '复杂表单'
                },
                component: () => import('@/pages/Forms/ConditionForm/ConditionForm.vue')
            },
            {
                path: 'routineForm',
                name: 'routineForm',
                meta: {
                    pathName: '常规表单'
                },
                component: () => import('@/pages/Forms/RoutineForm/RoutineForm.vue')
            }
        ]
    },
    {
        path: '/setting',
        meta: {
            pathName: '系统配置'
        },
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

router.beforeEach((to, from, next) => {
    if (to.name === 'login' && localStorage.getItem('flag') !== null) {
        next({name:'home'})
        return
    }
    if (to.name === 'login' || localStorage.getItem('flag') !== null) {
        next(); // 如果是登录页面或者用户已认证，则允许路由继续
    } else {
        next({ name: 'login' }); // 如果用户未认证且不是去往登录页面，则重定向到登录页面
    }
})

export default router