import Vue from 'vue';
import VueRouter from "vue-router";
import { Message } from 'element-ui'
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
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/pages/Login/Login.vue')
    },
    {
        path: '/home',
        component: Layout,
        meta: {
            pathName: '首页'
        },
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/pages/Home/Home.vue')
            }
        ]
    },
    // {
    //     path: "/authManage",
    //     name: "authManage",
    //     meta: {
    //         pathName: "权限管理",
    //         icon: "icon-quanxian",
    //         stair: false
    //     },
    //     component: Layout,
    //     children: [
    //         {
    //             path: "btnAuth",
    //             name: "btnAuth",
    //             meta: {
    //                 pathName: "按钮权限",
    //                 icon: "el-icon-turn-off"
    //             },
    //             component: ()=>import("@/pages/BtnAuth/BtnAuth")
    //         }
    //     ]
    // },
    // {
    //     path: "/tables",
    //     name: "tables",
    //     meta: {
    //         pathName: "表格案例",
    //         icon: "el-icon-film",
    //         stair: false
    //     },
    //     component: Layout,
    //     children: [
    //         {
    //             path: "conditionTable",
    //             name: "conditionTable",
    //             meta: {
    //                 pathName: "复杂表格",
    //                 icon: "el-icon-film"
    //             },
    //             component: ()=>import("@/pages/Tables/ConditionTable/ConditionTable")
    //         },
    //         {
    //             path: "routineTable",
    //             name: "routineTable",
    //             meta: {
    //                 pathName: "常规表格",
    //                 icon: "el-icon-film"
    //             },
    //             component: ()=>import("@/pages/Tables/RoutineTable/RoutineTable")
    //         }
    //     ]
    // },
    // {
    //     path: "/forms",
    //     name: "forms",
    //     meta: {
    //         pathName: "表单案例",
    //         icon: "el-icon-document",
    //         stair: false
    //     },
    //     component: Layout,
    //     children: [
    //         {
    //             path: "conditionForm",
    //             name: "conditionForm",
    //             meta: {
    //                 pathName: "复杂表单",
    //                 icon: "el-icon-document"
    //             },
    //             component: ()=>import("@/pages/Forms/ConditionForm/ConditionForm")
    //         },
    //         {
    //             path: "routineForm",
    //             name: "routineForm",
    //             meta: {
    //                 pathName: "常规表单",
    //                 icon: "el-icon-document"
    //             },
    //             component: ()=>import("@/pages/Forms/RoutineForm/RoutineForm")
    //         }
    //     ]
    // },
    // {
    //     path: "/setting",
    //     meta: {
    //         pathName: "系统配置",
    //         icon: "el-icon-setting",
    //         stair: true
    //     },
    //     component: Layout,
    //     children: [
    //         {
    //             path: "",
    //             name: "setting",
    //             component: ()=>import("@/pages/Setting/Setting")
    //         }
    //     ]
    // },
    // {
    //     path: "/menu",
    //     meta: {
    //         pathName: "菜单管理",
    //         icon: "el-icon-s-operation",
    //         stair: true
    //     },
    //     component: Layout,
    //     children: [
    //         {
    //             path: "",
    //             name: "menu",
    //             component: ()=>import("@/pages/Menu/Menu")
    //         }
    //     ]
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

router.beforeEach((to, from, next) => {
    let token = localStorage.getItem('token') || sessionStorage.getItem('token')
    if (to.path === '/login' && token) {
        next('/home')
    } else if (to.path !== '/login' && !token) {
        Message.warning('请先登录')
        next('/login')
    } else if (to.path !== '/login' && token) {
        const base64Url = token.split('.')[1]
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        const payload = JSON.parse(atob(base64))
        const exp = payload.exp
        const now = Math.floor(Date.now() / 1000)
        if (now > exp) {
            Message.warning('登录过期，请重新登录')
            localStorage.removeItem('token')
            sessionStorage.removeItem('token')
            next('/login')
        } else {
            // window.addEventListener('beforeunload', function (e) {
            //     console.log(456)
            // })
            next()
        }
    } else {
        next()
    }
})

function loadView(viewPath) {
    return () => import(`@/${viewPath}`)
}


function addRouting(routers) {
    routers.forEach(r => {
        const topLevelRoute = {
            ...r,
            component: Layout
        }
        if (topLevelRoute.children && topLevelRoute.children.length > 0) {
            topLevelRoute.children = topLevelRoute.children.map(child => ({
                ...child,
                component: loadView(child.component)
            }))
        }
        router.addRoute(topLevelRoute)
    })
}

export { addRouting }

export default router