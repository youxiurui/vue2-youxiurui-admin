<template>
  <div class="setting">
    <div class="set-info">
      <el-descriptions title="系统信息" :column="1" border>
        <el-descriptions-item label="主机名称">{{ info.system.hostname }}</el-descriptions-item>
        <el-descriptions-item label="操作系统">{{ info.system.type+' '+info.system.platform }}</el-descriptions-item>
        <el-descriptions-item label="系统架构">{{ info.system.platform+' '+info.system.arch }}</el-descriptions-item>
        <el-descriptions-item label="CPU核数">{{ info.system.cpu }}</el-descriptions-item>
        <el-descriptions-item label="运行时长">{{ info.system.runTime }}天</el-descriptions-item>
        <el-descriptions-item label="外网地址">{{ info.system.ip }}</el-descriptions-item>
      </el-descriptions>
    </div>
    <div style="flex-grow: 0.1;"></div>
    <div class="use-info">
      <el-descriptions title="使用信息" :column="1" border>
        <el-descriptions-item label="启动时间">{{ info.node.startTime }}</el-descriptions-item>
        <el-descriptions-item label="运行时长">{{ info.node.runTime }}</el-descriptions-item>
        <el-descriptions-item label="网站目录">{{ info.node.dirname }}</el-descriptions-item>
        <el-descriptions-item label="开发环境">{{ info.node.environment }}</el-descriptions-item>
      </el-descriptions>
    </div>
  </div>
</template>

<script>
import { reqSetting } from '@/api'
export default {
  data() {
    return {
      info: {
        system: {},
        node: {}
      }
    }
  },
  mounted() {
    this.getSetting()
  },
  methods: {
    async getSetting() {
      const res = await reqSetting()
      if(res.code===200){
        this.info = res.data
      }
    }
  }
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
