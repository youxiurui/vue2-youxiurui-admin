import Vue from 'vue';
import VueRouter from "vue-router";
import { Message } from 'element-ui'
import Layout from '@/Layout/Layout.vue'
import store from '@/store'
import { reqMenu } from '@/api'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location, onResolve, onReject) {
    if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
    return originalPush.call(this, location).catch(err => {
        if (err.name !== 'NavigationDuplicated') {
            throw err
        }
    })
}

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
            pathName: '首页',
            icon:'icon-shouye',
            stair: true
        },
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('@/pages/Home/Home.vue')
            }
        ]
    },
    {
        path: '*',
        component: () => import('@/pages/404/404.vue')
    }
]

function createRouter() {
    return new VueRouter({
        mode: 'hash',
        routes: routes
    })
}

function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

const router = createRouter()


router.beforeEach(async (to, from, next) => {
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
            localStorage.clear()
            sessionStorage.clear()
            next('/login')
        } else {
            if (store.state.routes.length === 0) {
                try {
                    const res = await reqMenu()
                    store.commit('SETROUTES', res.data)
                    resetRouter()
                    addRouting(res.data)
                    next({ ...to, replace: true })
                } catch (error) {
                    console.log(error)
                }
            } else {
                next()
            }
        }
    } else {
        next()
    }
})

function loadView(viewPath) {
    return () => import(`@/${viewPath}`)
}


function addRouting(routers) {
    const processRoutes = (routes) => {
        return routes.map(route => {
            const topLevelRoute = { ...route }

            if (topLevelRoute.component) {
                topLevelRoute.component = loadView(topLevelRoute.component)
            }

            if (topLevelRoute.children && topLevelRoute.children.length > 0) {
                topLevelRoute.children = processRoutes(topLevelRoute.children)
            }
            return topLevelRoute;
        })
    }

    routers.forEach(r => {
        const topLevelRoute = {
            ...r,
            component: Layout,
        };

        if (topLevelRoute.children && topLevelRoute.children.length > 0) {
            topLevelRoute.children = processRoutes(topLevelRoute.children)
        }

        router.addRoute(topLevelRoute)
    })
}


function getRouters() {
    const disRoutes = ['/', '*', '/login','/home']
    return [...routes, ...store.state.routes].filter(r => !disRoutes.includes(r.path))
}

export { addRouting, getRouters, resetRouter }

export default router