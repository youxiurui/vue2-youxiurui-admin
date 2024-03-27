<template>
    <div id="wrong-page">
        <el-button type="primary" class="btn" @click="back">返回首页</el-button>
    </div>
</template>

<script>
export default {
    methods:{
        back(){
            this.$router.replace({
                name:'home'
            })
        }
    }
}

</script>

<style scoped>
#wrong-page {
    width: 100%;
    height: 100%;
    min-width: 1200px;
    text-align: center;
    position: relative;
    background-image: url('@/assets/images/404.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
}
.btn{
    position: absolute;
    top: 70%;
    transform: translate(-50%,0);
}
</style>
