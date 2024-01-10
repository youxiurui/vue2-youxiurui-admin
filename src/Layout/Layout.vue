<template>
    <div id="layout">
        <el-container>
            <el-header>
                <Header/>
            </el-header>
            <!-- <Header/> -->
            <el-container>
                <el-aside width="200px">

                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Header from './components/Header/Header.vue'
export default {
    components:{
        Header
    }
}

</script>

<style scoped>
#layout {
    width: 100%;
    height: 100%;
}

::v-deep .el-container {
    height: 100%;
}

::v-deep .el-aside {
    background-color: #ffffff;
    color: #333;
}
::v-deep .el-header {
    background-color: ffffff;
    color: #333;
    border-bottom: 1px solid rgb(241, 246, 254);
    min-width: 1200px;
}

::v-deep .el-main {
    background-color: #E9EEF3;
    color: #333;
}
</style>
