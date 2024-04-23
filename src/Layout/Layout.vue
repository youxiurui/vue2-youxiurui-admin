<template>
    <div id="layout">
        <el-container>
            <el-header>
                <Header :isCollapse="isCollapse" @upIsCollapse="upIsCollapse" />
            </el-header>
            <el-container style="overflow:hidden">
                <el-aside class="hide-scrollbar el-aside-transition" :style="{ width: isCollapse ? '64px' : '200px' }">
                    <Aside :current-tag="currentTag" :isCollapse="isCollapse" />
                </el-aside>
                <el-main class="hide-scrollbar">
                    <div class="tags tags-scroll">
                        <Tags :currentTag="currentTag" @changeTag="changeTag" />
                    </div>
                    <div class="container set-scroll">
                        <transition name="slide" mode="out-in">
                            <router-view></router-view>
                        </transition>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script>
import Header from './components/Header/Header.vue'
import Aside from './components/Aside/Aside.vue'
import Tags from './components/Tags/Tags.vue'
export default {
    data() {
        return {
            isCollapse: false,
            currentTag: 'home',
        }
    },
    methods: {
        upIsCollapse() {
            this.isCollapse = !this.isCollapse
        },
        changeTag(name){
            this.currentTag=name
        }
    },
    components: {
        Header,
        Aside,
        Tags
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
    border-right: solid 1px #e6e6e6;
    transition: border-color .3s, background-color .3s, color .3s;
}

::v-deep .el-header {
    background-color: ffffff;
    color: #333;
    border-bottom: 1px solid #e6e6e6;
    min-width: 1200px;
}

::v-deep .el-main {
    background-color: rgb(240, 245, 253);
    color: #333;
    padding: 40px 10px 10px 10px;
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

.tags {
    margin: -40px 0 5px -10px;
    position: absolute;
    width: 100%;
    white-space: nowrap;
    overflow-x: auto;
    cursor: pointer;
    background-color: #ffffff;
}

.tags-scroll::-webkit-scrollbar {
    height: 5px;
}

.tags-scroll::-webkit-scrollbar-thumb {
    background-color: rgb(221, 222, 224);
    border-radius: 6px;
}


.container {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    position: relative;
    overflow-x: hidden;
    background-color: #ffffff;
    border: 1px solid #e6e6e6;
}

.slide-enter-active {
    transition: all 0.3s ease;
}

.slide-enter{
    transform: translateX(100%);
    opacity: 0;
}


.set-scroll::-webkit-scrollbar {
    width: 3px;
}

.set-scroll::-webkit-scrollbar-thumb {
    background-color: rgb(221, 222, 224);
    border-radius: 6px;
}

.el-aside-transition {
    transition: width 0.3s ease;
}

</style>
