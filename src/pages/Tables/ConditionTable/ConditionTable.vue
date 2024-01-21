<template>
  <div class="condition-table">
    <div class="condition-serch">
      <el-form :inline="true" label-width="80px" :model="formSerch" ref="formSerch" class="demo-form-inline serch-form">
        <el-form-item label="日期:">
          <el-input v-model="formSerch.date" placeholder="请填写内容"></el-input>
        </el-form-item>
        <el-form-item label="姓名:">
          <el-input v-model="formSerch.name" placeholder="请填写内容"></el-input>
        </el-form-item>
        <el-form-item label="省份:">
          <el-input v-model="formSerch.province" placeholder="请填写内容"></el-input>
        </el-form-item>
        <el-form-item label="市区:">
          <el-input v-model="formSerch.city" placeholder="请填写内容"></el-input>
        </el-form-item>
        <el-form-item label="地址:">
          <el-input v-model="formSerch.address" placeholder="请填写内容"></el-input>
        </el-form-item>
        <el-form-item label="邮编:">
          <el-input v-model="formSerch.zip" placeholder="请填写内容"></el-input>
        </el-form-item>
        <el-form-item class="query-btn">
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button @click="resetForm('formSerch')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column prop="date" label="日期">
        </el-table-column>
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
          :current-page.sync="currentPage" :page-sizes="[10, 20, 30, 40]" :page-size="10"
          layout="sizes, prev, pager, next" :total="100">
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
        date: "",
        name: "",
        province: "",
        city: "",
        address: "",
        zip: ""
      },
      formLabelWidth: '120px',
      formSerch: {
        date: "",
        name: "",
        province: "",
        city: "",
        address: "",
        zip: ""
      }
    }
  },
  mounted() {
  },
  methods: {
    onSubmit() {
      console.log('submit!')
    },
    resetForm(formName){
      this.$refs[formName].resetFields()
    },
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
.condition-table {
  width: 100%;
  height: 100%;
  border-radius: 6px;
  padding: 10px;
}

.condition-serch {
  width: 100%;
  margin-bottom: 10px;
  border: 1px solid #e6e6e6;
  /* padding: 5px; */
  border-radius: 6px;
}

.condition-serch .serch-form {
  padding: 10px 10px 0 10px;
}

.condition-serch .query-btn {
  left: 38px;
  position: relative;
}

::v-deep .el-form-item {
  margin-bottom: 10px;
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



/* ------------------- */



.el-row {
  margin-bottom: 20px;

  &:last-child {
    margin-bottom: 0;
  }
}

.el-col {
  border-radius: 4px;
}

.bg-purple-dark {
  background: #99a9bf;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
