<template>
  <div class="btn-auth">
    <div class="user-btn">
      <span>普通用户</span>
      <el-button class="btn" type="primary">Button</el-button>
    </div>
    <el-divider></el-divider>
    <div class="admin-btn">
      <span>管理员</span>
      <el-button class="btn" type="primary">Button</el-button>
    </div>
    <el-divider></el-divider>
    <span>使用方式：管理员按钮普通用户无法点击</span>
  </div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  }
}

</script>

<style scoped>
.btn-auth {
  width: 100%;
  height: 1400px;
  padding: 10px;
}
.btn-auth span{
  display: block;
  margin-bottom: 10px;
}
.btn-auth .btn{
  width: 100px;
}
</style>
