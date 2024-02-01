<template>
  <div class="setting">
    <div class="set-info">
      <el-descriptions title="系统信息" :column="1" border>
        <el-descriptions-item label="主机名称">yunbianriluo</el-descriptions-item>
        <el-descriptions-item label="操作系统">Linux 3.10.0-1160.71.1.el7.x86_64 #1 SMP Tue Jun 28 15:37:28 UTC 2022</el-descriptions-item>
        <el-descriptions-item label="系统架构">Unix X64</el-descriptions-item>
        <el-descriptions-item label="CPU核数">4 核</el-descriptions-item>
        <el-descriptions-item label="运行时长">464 天 01 小时 46 分 28 秒</el-descriptions-item>
        <el-descriptions-item label="外网地址">106.52.31.189 |中国 广东 广州 电信</el-descriptions-item>
      </el-descriptions>
    </div>
    <div style="flex-grow: 0.1;"></div>
    <div class="use-info">
      <el-descriptions title="使用信息" :column="1" border>
        <el-descriptions-item label="启动时间">2024-01-18 13:50:39</el-descriptions-item>
        <el-descriptions-item label="运行时长">13 天 23 小时 40 分 45 秒</el-descriptions-item>
        <el-descriptions-item label="网站目录">/www/wwwroot/api.qinzhi.xyz/wwwroot</el-descriptions-item>
        <el-descriptions-item label="开发环境">Production</el-descriptions-item>
        <el-descriptions-item label="环境变量">非Stage环境</el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
export default {
}

</script>

<style scoped>
.setting {
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.setting .set-info {
  flex-grow: 1;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
  padding: 5px;
}

.setting .use-info {
  flex-grow: 1;
  border-radius: 6px;
  border: 1px solid #e6e6e6;
  padding: 5px;
}
</style>
