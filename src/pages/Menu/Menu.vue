<template>
  <div class="menu">
    <div class="menu-left">
      <el-tree :data="treeData" node-key="name" :expand-on-click-node="false" @node-click="handleNodeClick">
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>{{ node.label }}</span>
          <span>
            <el-button type="text" size="mini" @click="() => append(data)">
              添加
            </el-button>
            <el-button type="text" size="mini" @click="() => append(data)">
              编辑
            </el-button>
            <el-popconfirm title="确定删除吗？" >
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
export default {
  data() {
    return {
      treeData: [
        {
          label: '首页',
          name: '首页',
          stair: true,
        },
        {
          label: '权限管理',
          name: '权限管理',
          stair: true,
          children: [
            {
              label: '按钮权限',
              name: '按钮权限',
              stair: false,
            }
          ]
        },
        {
          label: '表格案例',
          name: '表格案例',
          stair: true,
          children: [
            {
              label: '复杂表格',
              name: '复杂表格',
              stair: false,
            },
            {
              label: '简单表格',
              name: '简单表格',
              stair: false,
            }
          ]
        },
        {
          label: '表单案例',
          name: '表单案例',
          stair: true,
          children: [
            {
              label: '复杂表单',
              name: '复杂表单',
              stair: false,
            },
            {
              label: '简单表单',
              name: '简单表单',
              stair: false,
            }
          ]
        },
        {
          label: '系统配置',
          name: '系统配置',
          stair: true,
        },
        {
          label: '菜单管理',
          name: '菜单管理',
          stair: true,
        },
      ],
    }
  },
  mounted() {

  },
  methods: {
    handleNodeClick(data) {
      console.log(data);
    },
    append(data) {
      console.log(data)
    },
    remove(data) { }
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
  