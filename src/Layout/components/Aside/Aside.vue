<template>
    <!-- <div class="aside"> -->
        <el-menu default-active="1-4-1" class="el-menu-vertical-demo menu" @open="handleOpen" @close="handleClose"
            :collapse="isCollapse" :collapse-transition="false">
            <el-menu-item index="1">
                <i class="el-icon-menu"></i>
                <span slot="title">首页</span>
            </el-menu-item>
            <el-menu-item index="2">
                <i class="el-icon-turn-off"></i>
                <span slot="title">按钮权限</span>
            </el-menu-item>
            <el-submenu index="3">
                <template slot="title">
                    <i class="el-icon-document"></i>
                    <span slot="title">表单案例</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="3-1">
                        <i class="el-icon-document"></i>
                        <span>常规表单</span>
                    </el-menu-item>
                    <el-menu-item index="3-2">
                        <i class="el-icon-document"></i>
                        <span>高级表单</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
                <template slot="title">
                    <i class="el-icon-film"></i>
                    <span slot="title">表格案例</span>
                </template>
                <el-menu-item-group>
                    <el-menu-item index="4-1">
                        <i class="el-icon-film"></i>
                        <span>复杂表格</span>
                    </el-menu-item>
                    <el-menu-item index="4-2">
                        <i class="el-icon-film"></i>
                        <span>常规表格</span>
                    </el-menu-item>
                </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="5">
                <i class="el-icon-setting"></i>
                <span slot="title">系统配置</span>
            </el-menu-item>
        </el-menu>
    <!-- </div> -->
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
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        change() {
            this.isCollapse =!this.isCollapse;
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