<template>
    <div class="aside">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo menu" :collapse="isCollapse"
            :collapse-transition="false" @select="changePage">
            <el-menu-item index="home">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="authManage">
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
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            routes:[]
        };
    },
    props: {
        isCollapse: {
            type: Boolean,
            default: false
        }
    },
    mounted(){
        this.routes=this.$store.state.routes
        console.log(this.routes)
    },
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