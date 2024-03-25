<template>
    <div class="aside">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo menu" :collapse="isCollapse"
            :collapse-transition="false" @select="changePage">
            <el-menu-item index="home">
                <i class="iconfont icon-shouye"></i>
                <span slot="title">首页</span>
            </el-menu-item>

            <!-- <template v-for="(route, index) in routes">
                <el-submenu v-if="route.children" :index="route.name">
                    <template slot="title">
                        <i class="iconfont" :class="route.icon"></i>
                        <span slot="title">{{ route.pathName }}</span>
                    </template>
                    <el-menu-item-group v-for="(r, index) in route.children" :key="index + r.name">
                        <el-menu-item :index="r.name">
                            <i class="iconfont" :class="r.icon"></i>
                            <span>{{ r.pathName }}</span>
                        </el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-menu-item v-else :index="route.name">
                    <i class="iconfont" :class="route.icon"></i>
                    <span slot="title">{{ route.pathName }}</span>
                </el-menu-item>
            </template> -->

            <recursive-menu v-for="(route, index) in routes" :key="index" :route="route"></recursive-menu>


            <!-- <el-submenu index="authManage">
                <template slot="title">
                    <i class="iconfont icon-quanxian"></i>
                    <span slot="title">权限管理</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="btnAuth">
                        <i class="iconfont el-icon-turn-off"></i>
                        <span slot="title">按钮权限</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="forms">
                <template slot="title">
                    <i class="iconfont el-icon-document"></i>
                    <span slot="title">表单案例</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="routineForm">
                        <i class="iconfont el-icon-document"></i>
                        <span>常规表单</span>
                    </el-menu-item>
                    <el-menu-item index="conditionForm">
                        <i class="iconfont el-icon-document"></i>
                        <span>高级表单</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="tables">
                <template slot="title">
                    <i class="iconfont el-icon-film"></i>
                    <span slot="title">表格案例</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="routineTable">
                        <i class="iconfont el-icon-film"></i>
                        <span>常规表格</span>
                    </el-menu-item>
                    <el-menu-item index="conditionTable">
                        <i class="iconfont el-icon-film"></i>
                        <span>复杂表格</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="setting">
                <i class="iconfont el-icon-setting"></i>
                <span slot="title">系统配置</span>
            </el-menu-item>
            <el-menu-item index="menu">
                <i class="iconfont el-icon-s-operation"></i>
                <span slot="title">菜单管理</span>
            </el-menu-item> -->
        </el-menu>
    </div>
</template>

<script>
import RecursiveMenu  from './RecursiveMenu/RecursiveMenu.vue'
import { getRouters } from '@/router'
export default {
    data() {
        return {
            routes: []
        }
    },
    components:{
        RecursiveMenu
    },
    props: {
        isCollapse: {
            type: Boolean,
            default: false
        }
    },
    created() {
        // const routes = this.$store.state.routes
        // routes.forEach(route => {
        //     const r = {
        //         pathName: '',
        //         name: '',
        //         icon: '',
        //     }
        //     if (route.meta.stair) {
        //         r.pathName = route.meta.pathName
        //         r.name = route.children[0].name
        //         r.icon = route.meta.icon
        //     } else {
        //         r.pathName = route.meta.pathName
        //         r.name = route.name
        //         r.icon = route.meta.icon
        //         r.children = []
        //         route.children.forEach(c => {
        //             r.children.push({
        //                 name: c.name,
        //                 icon: c.meta.icon,
        //                 pathName: c.meta.pathName
        //             })
        //         })
        //     }
        //     this.routes.push(r)
        // })

        // this.routes = this.$store.state.routes.map(({ meta, name, children }) => ({
        //     pathName: meta.pathName,
        //     name: meta.stair ? children[0].name : name,
        //     icon: meta.icon,
        //     ...(children && !meta.stair && {
        //         children: children.map(({ name, meta }) => ({
        //             name,
        //             icon: meta.icon,
        //             pathName: meta.pathName,
        //         }))
        //     })
        // }))

        // this.routes=this.mapRoutes(this.$store.state.routes)
        this.routes=this.mapRoutes(getRouters())
    },
    mounted() { },
    methods: {
        change() {
            this.isCollapse = !this.isCollapse
        },
        changePage(index, indexPath) {
            this.$router.push({
                name: index
            })
        },
        mapRoutes(routes) {
            return routes.map(({ meta, name, children }) => {
                const routeObject = {
                    name: meta.stair ? (children && children[0].name) : name,
                    pathName: meta.pathName,
                    icon: meta.icon,
                }

                if (children && !meta.stair) {
                    routeObject.children = this.mapRoutes(children)
                }

                return routeObject
            })
        }
    }
}

</script>

<style scoped>
.aside {
    height: 100%;
}

.menu {
    height: 100%;
    border-right: initial;
}

.iconfont {
    display: inline-block;
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
}

::v-deep .el-menu-item-group__title {
    display: none;
}
</style>