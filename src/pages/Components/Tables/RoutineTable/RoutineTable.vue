<template>
  <div class="routine-table set-scroll">
    <div class="routine-search">
      <SearchTable :table-search="tableSearch" :table-search-btn="tableSearchBtn" @callBackTable="callBackTable" />
    </div>
    <div class="routine-data">
      <DataTable :table-title-btn="tableTitleBtn" :table-data="tableData" :table-column="tableColumn"
        :bottom-btn="bottomBtn" :pagination="pagination" @callBackTable="callBackTable" />
    </div>
    <Dialog @callBackDialog="callBackDialog" :title="title" :dialogFormVisible="dialogFormVisible" :form="form"
      :formItem="formItem" />
  </div>
</template>

<script>
import SearchTable from '@/components/SearchTable/SearchTable.vue'
import DataTable from '@/components/DataTable/DataTable.vue'
import Dialog from '@/components/Dialog/Dialog.vue'
import { reqTableData, reqAddTable } from '@/api'
export default {
  data() {
    return {
      dialogFormVisible: false,
      title: '',
      form: {},
      formItem: [
        { type: 'date', label: '日期', labelWidth: '50px' },
        { type: 'name', label: '姓名', labelWidth: '50px' },
        { type: 'province', label: '省份', labelWidth: '50px' },
        { type: 'city', label: '市区', labelWidth: '50px' },
        { type: 'address', label: '地址', labelWidth: '50px' },
        { type: 'zip', label: '邮编', labelWidth: '50px' }
      ],
      tableSearch: [
        {
          label: '姓名',
          name: 'name',
          type: 'input',
          placeholder: '请填写内容'

        },
        {
          label: '省份',
          name: 'province',
          type: 'input',
          placeholder: '请填写内容'
        },
        {
          label: '市区',
          name: 'city',
          type: 'input',
          placeholder: '请填写内容'
        },
        {
          label: '地址',
          name: 'address',
          type: 'input',
          placeholder: '请填写内容'
        },
        {
          label: '邮编',
          name: 'zip',
          type: 'input',
          placeholder: '请填写内容'
        },
        {
          label: '下拉选项',
          name: 'select',
          type: 'select',
          options: [
            {
              value: '选项1',
              label: '黄金糕'
            }, {
              value: '选项2',
              label: '双皮奶'
            }, {
              value: '选项3',
              label: '蚵仔煎'
            }
          ],
          placeholder: '请选择'
        },
        {
          label: '日期',
          name: 'date',
          type: 'date',
          placeholder: '选择日期'
        }
      ],
      tableSearchBtn: [
        {
          label: '查询',
          name: 'query',
          type: 'primary',
          plain: false,
          icon: ''
        },
        {
          label: '重置',
          name: 'reset',
          plain: true,
          icon: ''
        }
      ],
      tableData: [],
      tableColumn: [
        {
          label: '日期',
          prop: 'date',
          minWidth: '100'
        },
        {
          label: '姓名',
          prop: 'name',
          minWidth: '80'
        },
        {
          label: '省份',
          prop: 'province',
          minWidth: '80'
        },
        {
          label: '市区',
          prop: 'city',
          minWidth: '80'
        },
        {
          label: '地址',
          prop: 'address',
          minWidth: '150',
          showTooltip: true
        },
        {
          label: '邮编',
          prop: 'zip',
          minWidth: '80'
        },
        {
          label: '操作',
          prop: 'btn',
          minWidth: '150',
          fixed: 'right',
          btns: [
            {
              label: '编辑',
              name: 'edit',
              type: 'primary',
              size: 'mini',
              plain: false,
              icon: ''
            },
            {
              label: '删除',
              name: 'delete',
              type: 'danger',
              size: 'mini',
              plain: false,
              icon: ''
            }
          ]
        }
      ],
      tableTitleBtn: [
        {
          label: '新增',
          name: 'add',
          type: 'primary',
          size: 'small',
          plain: false,
          icon: ''
        }
      ],
      bottomBtn: [
        {
          content: '导出',
          name: 'export',
          icon: 'icon-daochu'
        }
      ],
      pagination: {
        pageSize: 10,
        pageSizes: [10, 20, 30, 40],
        total: 100
      },
      params: {
        page: 1,
        pageSize: 10
      }
    }
  },
  components: {
    SearchTable,
    DataTable,
    Dialog
  },
  mounted() {
    this.getTableData()
  },
  methods: {
    callBackTable(params) {
      console.log(params)
      switch (params.type) {
        case 'pagination':
          this.params.page = params.page || 1
          this.params.pageSize = params.pageSize || 10
          this.getTableData()
          break
        case 'edit':
          this.dialogFormVisible = true
          this.title = '编辑'
          this.form = JSON.parse(JSON.stringify(params.data))
          break
        case 'add':
          this.dialogFormVisible = true
          this.title = '新增'
          this.form = {}
          break
        case 'delete':
          this.$confirm('确认删除？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          }).catch(() => { })
          break
      }
    },
    callBackDialog(params) {
      switch (params.type) {
        case 'close':
        case 'cancel':
          this.dialogFormVisible = params.dialogFormVisible
          break
        case 'verify':
          console.log(this.form)
          this.dialogFormVisible = false
          break
      }
    },
    async getTableData() {
      try {
        const res = await reqTableData(this.params)
        this.tableData = res.data.list
        this.pagination.total = res.data.total
      } catch (error) {
        console.log(error)
        this.$message.error('获取数据失败')
      }
    }
  }
}


</script>

<style scoped>
.routine-table {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  padding: 10px;
  overflow-y: scroll;
}

.routine-search {
  margin-bottom: 10px;
}
</style>
