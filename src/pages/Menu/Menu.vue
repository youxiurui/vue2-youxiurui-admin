<template>
  <div class="menu">
    <div class="menu-left">
      <el-tree :data="treeData" node-key="name" :expand-on-click-node="false">
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span>
            <el-button type="text" size="mini" @click="appNode(data)">
              添加
            </el-button>
            <el-button type="text" size="mini" @click="appNode(data)">
              编辑
            </el-button>
            <el-popconfirm title="确定删除吗？">
              <el-button type="text" size="mini" style="color: red; margin-left: 10px;" slot="reference">删除</el-button>
            </el-popconfirm>
          </span>
        </span>
      </el-tree>
    </div>
    <div style="flex-grow: 0.1;"></div>
    <div class="menu-right">

    </div>
  </div>
</template>

<script>
import { getRouters } from '@/router'
export default {
  data() {
    return {
      treeData: [],
    }
  },
  mounted() {
    this.treeData = this.createTreeData(getRouters())
  },
  methods: {
    createTreeData(routes) {
      return routes.map(route => {
        const node = {
          label: route.meta && route.meta.pathName,
          name: route.meta && route.meta.pathName,
        }
        if (route.children) {
          node.children = this.createTreeData(route.children)
        }
        return node
      })
    },
    appNode(data) {
      console.log(data)
    },
    remove(data) {
      console.log(data)
    }
  }
}

</script>

<style scoped>
.menu {
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.menu .menu-left {
  flex-grow: 1;
  padding: 5px;
  border-radius: 6px;
  border: 1px solid #e6e6e6
}

.menu .menu-right {
  flex-grow: 1;
  padding: 5px;
  border-radius: 6px;
  border: 1px solid #e6e6e6
}

::v-deep .el-tree-node {
  margin: 5px 0;
}

.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
</style>