<template>
    <div class="aside">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo menu" :collapse="isCollapse"
            :collapse-transition="false" @select="changePage">
            <el-menu-item index="home">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>

            <template v-for="(route, index) in routes">
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
            </template>


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
import { addRouting } from '@/router'
import { reqMenu } from "@/api"
import { decrypt } from '@/utils/crypto'
export default {
    data() {
        return {
            routes: []
        };
    },
    props: {
        isCollapse: {
            type: Boolean,
            default: false
        }
    },
    async created() {
        try {
            const res=await reqMenu()
            addRouting(res.data)
            res.data.forEach(route => {
                const r = {
                    pathName: '',
                    name: '',
                    icon: '',
                }
                if (route.meta.stair) {
                    r.pathName = route.meta.pathName
                    r.name = route.children[0].name
                    r.icon = route.meta.icon
                } else {
                    r.pathName = route.meta.pathName
                    r.name = route.name
                    r.icon = route.meta.icon
                    r.children = []
                    route.children.forEach(c => {
                        r.children.push({
                            name: c.name,
                            icon: c.meta.icon,
                            pathName: c.meta.pathName
                        })
                    })
                }
                this.routes.push(r)
            })
        } catch (error) {
            console.log(error)
        }
    },
    mounted() { },
    methods: {
        change() {
            this.isCollapse = !this.isCollapse;
        },
        changePage(index, indexPath) {
            this.$router.push({
                name: index
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