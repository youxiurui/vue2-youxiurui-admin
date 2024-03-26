<template>
  <el-submenu v-if="route.children" :index="route.name || route.pathName">
    <template #title>
      <i class="iconfont" :class="route.icon"></i>
      <span>{{ route.pathName }}</span>
    </template>
    <recursive-menu v-for="(childRoute, index) in route.children" :key="index" :route="childRoute"></recursive-menu>
  </el-submenu>
  <el-menu-item v-else :index="route.name || route.pathName">
    <i class="iconfont" :class="route.icon"></i>
    <span>{{ route.pathName }}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: 'RecursiveMenu',
  props: {
    route: {
      type: Object,
      required: true,
    },
  },
  mounted() {
  },
}
</script>
<style scoped>
.iconfont {
  display: inline-block;
  margin-right: 5px;
  width: 24px;
  text-align: center;
  font-size: 18px;
  vertical-align: middle;
}
</style>