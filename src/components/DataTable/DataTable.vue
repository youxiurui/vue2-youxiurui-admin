<template>
  <div class="data-table set-scroll">
    <div class="title">
      <el-button v-for="(btn, index) in tableTitleBtn" :plain="btn.plain" :icon="btn.icon" :size="btn.size"
        :type="btn.type" @click="titleClick(btn.name)">{{ btn.label }}</el-button>
    </div>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column align="center" label="序号" type="index" width="60">
        </el-table-column>
        <el-table-column v-for="(column, index) in tableColumn" :min-width="column.minWidth" :key="column.prop"
          :fixed="column.fixed" :show-overflow-tooltip="column.showTooltip" :prop="column.prop" :label="column.label"
          align="center">
          <template v-if="column.prop === 'btn'" v-slot="scope">
            <el-button class="btn" v-for="(btn, index) in column.btns" :size='btn.size' :icon="btn.icon"
              :plain="btn.plain" :type="btn.type" @click="dataClick(scope.row, btn.name)">
              {{ btn.label }}
            </el-button>
          </template>
          <template v-else v-slot="scope">
            {{ scope.row[column.prop] }}
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <div class="icon">
        <el-tooltip v-for="(btn, index) in bottomBtn" class="item" effect="dark" :content="btn.content" placement="top">
          <i class="iconfont" :class="btn.icon" @click="bottomBtnClick(btn.name)"></i>
        </el-tooltip>
      </div>
      <el-pagination :page-sizes="pagination.pageSizes" :page-size="pagination.pageSize"
        layout="sizes, prev, pager, next,jumper" :total="pagination.total" @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
      </el-pagination>
      <div class="total">
        <span>共{{ pagination.total }}条记录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      pageSize: 10
    }
  },
  props: {
    tableTitleBtn: {
      type: Array,
      default: () => []
    },
    tableColumn: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    },
    pagination: {
      type: Object,
      default: () => ({})
    },
    bottomBtn: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    titleClick(name) {
      this.callBackTable({
        type: name,
      })
    },
    dataClick(data, name) {
      this.callBackTable({
        type: name,
        data
      })
    },
    bottomBtnClick(name) {
      this.callBackTable({
        type: name,
      })
    },
    handleSizeChange(pageSize) {
      this.pageSize = pageSize
      this.callBackTable({
        type: 'pagination',
        page: this.page,
        pageSize: this.pageSize
      })
    },
    handleCurrentChange(page) {
      this.page=page
      this.callBackTable({
        type: 'pagination',
        page: this.page,
        pageSize: this.pageSize
      })
    },
    callBackTable(params) {
      this.$emit('callBackTable', params)
    }
  }
}

</script>

<style scoped>
.data-table {
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  padding: 10px;
}

.data-table .title {
  margin: 5px 0;
}

.btn {
  width: 45%;
  margin: 3px;
}


.pagination {
  width: 100%;
  position: relative;
  bottom: 0;
  right: 0;
  padding: 5px 5px 5px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.icon {
  width: 30px;
  text-align: center;
  position: absolute;
  cursor: pointer;
  left: 0;
}

.icon .item {
  margin-right: 5px;
}

.icon .iconfont {
  font-size: 20px;
}

.total {
  width: 100px;
  text-align: center;
  font-size: 13px;
}

::v-deep .el-table .el-table__fixed-right {
  border-left: 1px solid #ebeef5;
}

::v-deep .el-table .el-table__fixed-right .el-table__fixed-body-wrapper::after {
  background-color: #ebeef5;
}
</style>
