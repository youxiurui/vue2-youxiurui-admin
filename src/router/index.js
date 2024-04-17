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
        path: '/layout',
        name: 'layout',
        component: Layout,
        children: [
            {
                path: 'home',
                name: 'home',
                component: () => import('@/pages/Home/Home.vue'),
                meta: {
                    pathName: '首页',
                    icon: 'icon-shouye',
                }
            },
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
        next({ name: 'home' })
    } else if (to.path !== '/login' && !token) {
        Message.warning('请先登录')
        next({ name: 'login' })
    } else if (to.path !== '/login' && token) {
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
    } else {
        next()
    }
})

function loadView(viewPath) {
    return () => import(`@/${viewPath}`)
}

function addRouting(routers, pathName = 'layout') {
    const processRoutes = (routes) => {
        return routes.map(route => {
            const topLevelRoute = { ...route }

            if (topLevelRoute.component) {
                topLevelRoute.component = loadView(topLevelRoute.component)
            }

            if (topLevelRoute.children && topLevelRoute.children.length > 0) {
                topLevelRoute.children = processRoutes(topLevelRoute.children)
            }

            return topLevelRoute
        })
    }
    routers.forEach(r => {
        if (r.component) {
            r.component = loadView(r.component)
        }
        if (r.children) {
            r.children = processRoutes(r.children)
        }
        router.addRoute(pathName, r)
    })
}

function getRouters() {
    const disRoutes = ['/', '*', '/login']
    return [...store.state.routes].filter(r => !disRoutes.includes(r.path))
}

export { addRouting, getRouters, resetRouter }

export default router