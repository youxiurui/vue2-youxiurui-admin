<template>
  <div class="data-table set-scroll">
    <div class="title">
      <el-button type="primary">新增</el-button>
      <el-button type="primary">新增</el-button>
    </div>
    <div class="table">
      <el-table :data="tableData" border>
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
            <el-button type="text">编辑</el-button>
            <el-button type="text">删除</el-button>
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
      <el-pagination :page-sizes="[10, 20, 30, 40]" :page-size="10" layout="sizes, prev, pager, next" :total="100">
      </el-pagination>
      <div class="total">
        <span>共100条记录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          "date": "2016-05-01",
          "name": "王小虎0",
          "province": "北京",
          "city": "东城区",
          "address": "北京市东城区东华门街道1号",
          "zip": "100010"
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
    }
  }
}

</script>

<style scoped>
.data-table {
  /* height: 100%; */
  border: 1px solid #e6e6e6;
  border-radius: 6px;
  padding: 10px;
  /* overflow-y: scroll; */
}

.data-table .title {
  margin: 5px 0;
}

.table {
  /* height: 100%; */
}

.set-scroll::-webkit-scrollbar {
  width: 3px;
}

.set-scroll::-webkit-scrollbar-thumb {
  background-color: rgb(221, 222, 224);
  border-radius: 6px;
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

.icon .iconfont {
  font-size: 20px;
}

.total {
  width: 100px;
  text-align: center;
  font-size: 13px;
}
</style>
