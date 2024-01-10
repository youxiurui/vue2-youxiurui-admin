<template>
    <div class="aside">
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo menu" @open="handleOpen" @close="handleClose"
            :collapse="isCollapse">
            <el-menu-item index="1" @click="change">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">按钮权限</span>
            </el-menu-item>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">表单案例</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">选项1</el-menu-item>
                    <el-menu-item index="3-2">选项2</el-menu-item>
                    <el-menu-item index="3-3">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-location"></i>
                    <span slot="title">表格案例</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="4-1">选项1</el-menu-item>
                    <el-menu-item index="4-2">选项2</el-menu-item>
                    <el-menu-item index="4-3">选项2</el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="5">
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
            isCollapse: false
        };
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        change(){
            // this.isCollapse =!this.isCollapse;
        }
    }
}

</script>

<style scoped>
.aside{
    height: 100%;
}
.menu{
    height: 100%;
}
/* ::v-deep .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
} */
</style>