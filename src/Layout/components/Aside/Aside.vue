<template>
    <div class="aside">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo menu" :collapse="isCollapse"
            :collapse-transition="false" @select="changePage">
            <el-menu-item index="home">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="btnAuth">
                <i class="el-icon-turn-off"></i>
                <span slot="title">按钮权限</span>
            </el-menu-item>
            <el-submenu index="forms">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span slot="title">表单案例</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="routineForm">
                        <i class="el-icon-document"></i>
                        <span>常规表单</span>
                    </el-menu-item>
                    <el-menu-item index="conditionForm">
                        <i class="el-icon-document"></i>
                        <span>高级表单</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="tables">
                <template slot="title">
                    <i class="el-icon-film"></i>
                    <span slot="title">表格案例</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="routineTable">
                        <i class="el-icon-film"></i>
                        <span>常规表格</span>
                    </el-menu-item>
                    <el-menu-item index="conditionTable">
                        <i class="el-icon-film"></i>
                        <span>复杂表格</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="setting">
                <i class="el-icon-setting"></i>
                <span slot="title">系统配置</span>
            </el-menu-item>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // isCollapse: false
        };
    },
    props: {
        isCollapse: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        change() {
            this.isCollapse = !this.isCollapse;
        },
        changePage(index,indexPath){
            this.$router.push({
                name:index
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

::v-deep .el-menu-item-group__title {
    display: none;
}
</style>