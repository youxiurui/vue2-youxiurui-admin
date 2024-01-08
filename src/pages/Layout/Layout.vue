<template>
  <div id="layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
}

</script>

<style scoped>
#layout{
  height: 100%;
  min-width: 1200px;
}
::v-deep .el-container{
  height: 100%;
}
::v-deep .el-header {
  background-color: #B3C0D1;
  color: #333;
  min-width: 1200px;
}

::v-deep .el-aside {
  background-color: #D3DCE6;
  color: #333;
}

::v-deep .el-main {
  background-color: #E9EEF3;
  color: #333;
}

</style>
