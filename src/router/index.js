import Vue from 'vue';
import VueRouter from "vue-router";
import store from '@/store'
import Layout from '@/Layout/Layout.vue'
import { reqMenu } from '@/api'

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
        redirect: 'home',
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
    // {
    //     path: '/authManage',
    //     name: 'authManage',
    //     meta: {
    //         pathName: '权限管理'
    //     },
    //     component: Layout,
    //     children: [
    //         {
    //             path: 'btnAuth',
    //             name: 'btnAuth',
    //             meta: {
    //                 pathName: '按钮权限'
    //             },
    //             component: () => import('@/pages/BtnAuth/BtnAuth.vue')
    //         }
    //     ]
    // },
    // {
    //     path: '/tables',
    //     meta: {
    //         pathName: '表格案例'
    //     },
    //     component: Layout,
    //     children: [
    //         {
    //             path: 'conditionTable',
    //             name: 'conditionTable',
    //             meta: {
    //                 pathName: '复杂表格'
    //             },
    //             component: () => import('@/pages/Tables/ConditionTable/ConditionTable.vue'),
    //         },
    //         {
    //             path: 'routineTable',
    //             name: 'routineTable',
    //             meta: {
    //                 pathName: '常规表格'
    //             },
    //             component: () => import('@/pages/Tables/RoutineTable/RoutineTable.vue'),
    //         }
    //     ]
    // },
    // {
    //     path: '/forms',
    //     meta: {
    //         pathName: '表单案例'
    //     },
    //     component: Layout,
    //     children: [
    //         {
    //             path: 'conditionForm',
    //             name: 'conditionForm',
    //             meta: {
    //                 pathName: '复杂表单'
    //             },
    //             component: () => import('@/pages/Forms/ConditionForm/ConditionForm.vue')
    //         },
    //         {
    //             path: 'routineForm',
    //             name: 'routineForm',
    //             meta: {
    //                 pathName: '常规表单'
    //             },
    //             component: () => import('@/pages/Forms/RoutineForm/RoutineForm.vue')
    //         }
    //     ]
    // },
    // {
    //     path: '/setting',
    //     meta: {
    //         pathName: '系统配置'
    //     },
    //     component: Layout,
    //     children: [
    //         {
    //             path: '',
    //             name: 'setting',
    //             component: () => import('@/pages/Setting/Setting.vue')
    //         }
    //     ]
    // },
    {
        path: '*',
        component: () => import('@/pages/404/404.vue')
    }
]

function loadComponent(path) {
    return () => import(`@/${path}`);
}

function addRoutesFromServerData(serverRoutes) {
    serverRoutes.forEach(route => {
        let routeConfig = {
            path: route.path,
            name: route.name,
            component: route.component === 'Layout' ? Layout : () => import(`@/${path}`),
            children: [],
            meta: route.meta
        };
        if (route.children) {
            route.children.forEach(child => {
                routeConfig.children.push({
                    path: child.path,
                    name: child.name,
                    component: loadComponent(child.component),
                    meta: child.meta
                });
            });
        }
        router.addRoute(routeConfig);
    });
}

let isDynamicRoutesAdded = false;

function addDynamicRoutes() {
    if (isDynamicRoutesAdded) {
        return Promise.resolve();
    }

    return reqMenu().then(response => {
        const serverRoutes = response.data;
        store.dispatch('setRoutes',{routes:serverRoutes})
        addRoutesFromServerData(serverRoutes);
        isDynamicRoutesAdded = true;
    }).catch(error => {
        console.error("Failed to load dynamic routes:", error);
    });
}


const router = new VueRouter({
    mode: 'hash',
    routes
})


router.beforeEach((to, from, next) => {
    if (!isDynamicRoutesAdded) {
        addDynamicRoutes().then(() => {
            next({ ...to, replace: true });
        });
    } else {
        next();
    }
});


export default router