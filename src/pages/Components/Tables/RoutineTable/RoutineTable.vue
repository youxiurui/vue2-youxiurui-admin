<template>
  <div class="routine-table set-scroll">
    <div class="routine-search">
      <SearchTable :table-search="tableSearch" :table-search-btn="tableSearchBtn" @callBack="callBack" />
    </div>
    <div class="routine-data">
      <DataTable :table-title-btn="tableTitleBtn" :table-data="tableData" :table-column="tableColumn"
      :bottom-btn="bottomBtn" :pagination="pagination" @callBack="callBack" />
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
      tableData: [
        {
          "date": "2016-05-01",
          "name": "王小虎0",
          "province": "北京",
          "city": "东城区",
          "address": "北京市东城区东华门街道1号",
          "zip": "100010",
          "ceshi1": '1',
          "ceshi2": '2',
        },
        {
          "date": "2016-05-01",
          "name": "王小虎1",
          "province": "北京",
          "city": "东城区",
          "address": "北京市东城区东华门街道1号",
          "zip": "100010"
        },
        {
          "date": "2016-05-02",
          "name": "王小虎2",
          "province": "天津",
          "city": "和平区",
          "address": "天津市和平区和平道2号",
          "zip": "300041"
        },
        {
          "date": "2016-05-01",
          "name": "王小虎1",
          "province": "北京",
          "city": "东城区",
          "address": "北京市东城区东华门街道1号",
          "zip": "100010"
        },
        {
          "date": "2016-05-02",
          "name": "王小虎2",
          "province": "天津",
          "city": "和平区",
          "address": "天津市和平区和平道2号",
          "zip": "300041"
        },
        {
          "date": "2016-05-03",
          "name": "王小虎3",
          "province": "河北",
          "city": "石家庄市",
          "address": "河北省石家庄市长安区3号",
          "zip": "050011"
        },
        {
          "date": "2016-05-04",
          "name": "王小虎4",
          "province": "山西",
          "city": "太原市",
          "address": "山西省太原市迎泽区4号",
          "zip": "030024"
        },
        {
          "date": "2016-05-05",
          "name": "王小虎5",
          "province": "内蒙古",
          "city": "呼和浩特市",
          "address": "内蒙古自治区呼和浩特市回民区5号",
          "zip": "010030"
        },
        {
          "date": "2016-05-06",
          "name": "王小虎6",
          "province": "辽宁",
          "city": "沈阳市",
          "address": "辽宁省沈阳市沈河区6号",
          "zip": "110013"
        },
        {
          "date": "2016-05-07",
          "name": "王小虎7",
          "province": "吉林",
          "city": "长春市",
          "address": "吉林省长春市宽城区7号",
          "zip": "130051"
        },
        {
          "date": "2016-05-08",
          "name": "王小虎8",
          "province": "黑龙江",
          "city": "哈尔滨市",
          "address": "黑龙江省哈尔滨市道里区8号",
          "zip": "150010"
        },
        {
          "date": "2016-05-09",
          "name": "王小虎9",
          "province": "上海",
          "city": "黄浦区",
          "address": "上海市黄浦区南京东路9号",
          "zip": "200001"
        },
      ],
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
          label: '时区',
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
          label: '测试1',
          prop: 'ceshi1',
          minWidth: '100'
        },
        {
          label: '测试2',
          prop: 'ceshi2',
          minWidth: '100'
        },
        {
          label: '测试3',
          prop: 'ceshi3',
          minWidth: '100'
        },
        {
          label: '测试4',
          prop: 'ceshi4',
          minWidth: '100'
        },
        {
          label: '测试5',
          prop: 'ceshi5',
          minWidth: '100'
        },
        {
          label: '测试6',
          prop: 'ceshi6',
          minWidth: '100'
        },
        {
          label: '测试7',
          prop: 'ceshi7',
          minWidth: '100'
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
            },
            {
              label: '测试',
              name: 'ceshi',
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
          label: '编辑',
          name: 'edit',
          type: 'primary',
          size: 'small',
          plain: false,
          icon: ''
        },
        {
          label: '删除',
          name: 'delete',
          type: 'danger',
          size: 'small',
          plain: false,
          icon: ''
        },
        {
          label: '测试',
          name: 'ceshi',
          type: 'danger',
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
      }
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

.routine-search {
  margin-bottom: 10px;
}
</style>
