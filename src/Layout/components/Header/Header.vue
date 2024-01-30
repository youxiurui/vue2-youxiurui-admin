<template>
    <div class="header">
        <div class="header-left">
            <div class="title">
                <span>优秀瑞</span>
            </div>
            <div class="collapsed" @click="unpack">
                <i class="el-icon-s-fold" v-if="fold"></i>
                <i class="el-icon-s-unfold" v-else></i>
            </div>
            <div class="nav">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="(tag, index) in tags" :key="index">{{ tag }}</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
        </div>
        <div class="header-right">
            <div class="item-box">
                <div class="item">
                    <i class="iconfont" :class="weatherIcon[0]"></i>
                    <span style="position: relative;top: -1px;margin-left: 3px;">12℃</span>
                </div>
                <div class="item">
                    <i class="iconfont el-icon-sunny"></i>
                    <!-- <i class="el-icon-moon"></i> -->
                </div>
                <div class="item" @click="fullScreen">
                    <i class="iconfont el-icon-full-screen"></i>
                </div>
                <div class="item">
                    <i class="iconfont icon-github"></i>
                </div>
                <div class="item">用户名</div>
                <div class="item" style="margin-left: 15px;">
                    <el-dropdown>
                        <span class="el-dropdown-link">
                            <el-avatar :src="headImg"></el-avatar>
                        </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item @click.native="exitLogin">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import headImg from '@/assets/images/head.jpg'
export default {
    data() {
        return {
            headImg: headImg,
            fold: true,
            tags: [],
            weatherIcon:['icon-qingtian','icon-duoyun','icon-xiaoyu','icon-dayu']
        };
    },
    props: {
        isCollapse: {
            type: Boolean,
            default: false
        }
    },
    watch: {
        '$route': {
            handler() {
                const { matched } = this.$route
                const tags = []
                matched.forEach(e => {
                    if (e.meta.hasOwnProperty('pathName')) {
                        tags.push(e.meta.pathName)
                        this.tags = tags
                    }
                })
            },
            immediate: true
        }
    },
    methods: {
        exitLogin(){
            console.log(123)
        },
        unpack() {
            this.fold = !this.fold
            this.$emit('upIsCollapse')
        },
        isFullscreen() {
            return document.fullscreenElement != null ||
                document.mozFullScreenElement != null ||
                document.webkitFullscreenElement != null ||
                document.msFullscreenElement != null
        },
        openFullscreen() {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
        },
        closeFullscreen() {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        },
        fullScreen() {
            if (this.isFullscreen()) {
                this.closeFullscreen()
            } else {
                this.openFullscreen()
            }
        }
    }
}

</script>

<style scoped>
.header {
    height: 100%;
    display: flex;
    /* background-color: aqua; */
}

.header-left {
    /* width: 500px; */
    height: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    align-content: center;
    /* background-color: red; */
}

.header-left .title {
    font-size: 30px;
    flex: 0 1 auto;
    margin: 0 30px;
}

.header-left .collapsed {
    font-size: 25px;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    cursor: pointer;
    flex: 0 1 auto;
    margin-right: 30px;
}

.header-left .nav {
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    flex: 1 1 auto;
}

.header-right {
    /* width: 200px; */
    height: 100%;
    margin-left: auto;
    position: relative;
    /* background-color: aqua; */
}

.header-right .item-box {
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.header-right .item-box .item {
    margin-left: 20px;
    cursor: pointer;
}

.iconfont {
    font-size: 20px;
}
</style>
