<template>
    <div class="aside">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo menu" :collapse="isCollapse"
            :collapse-transition="false" @select="changePage">
            <el-menu-item index="home">
                <i class="iconfont icon-shouye"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <recursive-menu v-for="(route, index) in routes" :key="index" :route="route"></recursive-menu>
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
                    name: name,
                    pathName: meta.pathName,
                    icon: meta.icon,
                }
                if (children) {
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