<template>
    <div id="layout">
        <el-container>
            <el-header>
                <Header/>
            </el-header>
            <el-container style="overflow:hidden">
                <el-aside width="200px">
                    <Aside/>
                </el-aside>
                <el-main class="hide-scrollbar">
                    <div class="container set-scroll">
                        <router-view></router-view>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Aside from './components/Aside/Aside.vue'
export default {
    components:{
        Header,
        Aside
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
    background-color: rgb(240, 245, 253);
    color: #333;
    position: relative;
    overflow-y: scroll;
}


.hide-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.container{
    width: 100%;
    height: 100%;
    border-radius: 6px;
    position: relative;
    overflow-x: hidden;
    background-color:rgb(255, 255, 255);
}

.set-scroll::-webkit-scrollbar {
    width: 3px; 
}

.set-scroll::-webkit-scrollbar-thumb {
    background-color: rgb(221, 222, 224);    
    border-radius: 6px;      
}


</style>
