<template>
  <div class="routine-table set-scroll">
    <div class="routine-search">
      <SearchTable :form-search="formSearch" :form-btn="formBtn" @callBack="callBack" />
    </div>
    <div class="routine-data">
      <DataTable />
    </div>
    <!-- <div class="pool">
      <el-dialog top="80px" title="人员信息" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="日期" :label-width="formLabelWidth">
            <el-input v-model="form.date" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="姓名" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="省份" :label-width="formLabelWidth">
            <el-input v-model="form.province" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="市区" :label-width="formLabelWidth">
            <el-input v-model="form.city" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="地址" :label-width="formLabelWidth">
            <el-input v-model="form.address" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="邮编" :label-width="formLabelWidth">
            <el-input v-model="form.zip" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div> -->
  </div>
</template>

<script>
import SearchTable from '@/components/SearchTable/SearchTable.vue'
import DataTable from '@/components/DataTable/DataTable.vue'
export default {
  data() {
    return {
      currentPage: 1,
      gridData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        date: "",
        name: "",
        province: "",
        city: "",
        address: "",
        zip: ""
      },
      formLabelWidth: '120px',
      formSearch: [
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
        },
        {
          label: '测试1',
          name: 'ceshi1',
          type: 'input',
          placeholder: '选择日期'
        },
        {
          label: '测试2',
          name: 'ceshi2',
          type: 'input',
          placeholder: '选择日期'
        },
        {
          label: '测试3',
          name: 'ceshi3',
          type: 'input',
          placeholder: '选择日期'
        }
      ],
      formBtn: [
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
      ]
    }
  },
  components: {
    SearchTable,
    DataTable
  },
  mounted() {
  },
  methods: {
    callBack(data) {
      console.log(data)
    },
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
.routine-search{
    margin-bottom: 10px;
}
</style>
