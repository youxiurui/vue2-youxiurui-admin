<template>
  <div class="routine-table" ref="routineTable">
    <div class="table set-scroll">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="name" label="姓名">
        </el-table-column>
        <el-table-column prop="province" label="省份">
        </el-table-column>
        <el-table-column prop="city" label="市区">
        </el-table-column>
        <el-table-column prop="address" show-overflow-tooltip label="地址">
        </el-table-column>
        <el-table-column prop="zip" label="邮编">
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button @click="handleChange(scope.row)" type="text">编辑</el-button>
            <el-button @click="delChange(scope.row)" type="text">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="pagination">
      <div class="icon">
        <el-tooltip class="item" effect="dark" content="导出" placement="top">
          <i class="iconfont icon-daochu"></i>
        </el-tooltip>
      </div>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
        :current-page.sync="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="sizes, prev, pager, next"
        :total="100">
      </el-pagination>
      <div class="total">
        <span>共100条记录</span>
      </div>
    </div>
    <div class="pool">
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
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentPage: 1,
      tableData: [
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
        {
          "date": "2016-05-10",
          "name": "王小虎10",
          "province": "江苏",
          "city": "南京市",
          "address": "江苏省南京市玄武区10号",
          "zip": "210018"
        }
      ],
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
        "date": "",
        "name": "",
        "province": "",
        "city": "",
        "address": "",
        "zip": ""
      },
      formLabelWidth: '120px'
    }
  },
  mounted() {
  },
  methods: {
    handleChange(row) {
      this.dialogFormVisible = true
      this.form = row
      console.log(row);
    },
    delChange(row) {
      this.$confirm('确认删除吗?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        });
      });
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
}

.table{
  height: 94%;
  border-radius: 6px;
  overflow-y: scroll;
}

.pagination {
  width: 100%;
  position: absolute;
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
  left: 10px;
}

.icon .iconfont {
  font-size: 20px;
}

.total {
  width: 100px;
  text-align: center;
  font-size: 13px;
}

.set-scroll::-webkit-scrollbar {
    width: 3px;
}

.set-scroll::-webkit-scrollbar-thumb {
    background-color: rgb(221, 222, 224);
    border-radius: 6px;
}
::v-deep .el-form-item {
  padding-right: 22px;
}

::v-deep .el-form-item__label {
  width: 80px !important;
}

::v-deep .el-form-item__content {
  margin-left: 80px !important;
}
</style>
