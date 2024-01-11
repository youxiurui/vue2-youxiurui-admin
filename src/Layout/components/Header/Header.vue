<template>
    <div class="header">
        <div class="header-left">
            <div class="title" @click="demo">
                <span>优秀瑞</span>
            </div>
            <div class="collapsed" @click="unpack">
                <i class="el-icon-s-fold" v-if="fold"></i>
                <i class="el-icon-s-unfold" v-else></i>
            </div>
            <div class="nav">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item v-for="(tag, index) in tags" :key="index">{{ tag }}</el-breadcrumb-item>
                    <!-- <el-breadcrumb-item>首页</el-breadcrumb-item> -->
                    <!-- <el-breadcrumb-item>活动管理</el-breadcrumb-item>
                    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
                    <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
                </el-breadcrumb>
            </div>
        </div>
        <div class="header-right">
            <div class="item-box">
                <div class="item">
                    <i class="iconfont el-icon-sunny"></i>
                    <!-- <i class="el-icon-moon"></i> -->
                </div>
                <div class="item">
                    <i class="iconfont el-icon-full-screen"></i>
                </div>
                <div class="item">
                    <i class="iconfont icon-github"></i>
                </div>
                <div class="item">用户名</div>
                <div class="item">
                    <el-avatar :src="headImg"></el-avatar>
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
            tags: []
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
                this.demo()
            },
            immediate: true
        }
    },
    methods: {
        unpack() {
            this.fold = !this.fold
            this.$emit('upIsCollapse')
        },
        demo() {
            const { matched } = this.$route
            const tags = []
            matched.forEach(e => {
                if (e.meta.hasOwnProperty('pathName')) {
                    tags.push(e.meta.pathName)
                    this.tags = tags
                }
            })
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
    margin:0 30px;
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
    margin-left: 15px;
    cursor: pointer;
}

.iconfont {
    font-size: 20px;
}
</style>
