<template>
  <div class="home">
    <div class="home-data">
      <div class="home-tab">
        <el-radio-group @input="changeType" v-model="type">
          <el-radio-button label="在线人数"></el-radio-button>
          <el-radio-button label="访问历史"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="home-table">
        <DataTable :tableColumn="tableColumn" :tableData="tableData" />
      </div>
    </div>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable/DataTable.vue'
import { reqOnLines, reqVisits } from '@/api/index'
import { timestampToTime } from '@/utils/time'
export default {
  data() {
    return {
      type: '访问历史',
      tableColumn: [
        {
          label: '会话编号',
          prop: 'id',
          minWidth: '80'
        },
        {
          label: '登录名称',
          prop: 'loginName',
          minWidth: '80'
        },
        {
          label: '主机',
          prop: 'host',
          minWidth: '80'
        },
        {
          label: '登陆地点',
          prop: 'place',
          minWidth: '80'
        },
        {
          label: '浏览器',
          prop: 'browser',
          minWidth: '80'
        },
        {
          label: '操作系统',
          prop: 'os',
          minWidth: '80'
        },
        {
          label: '登录时间',
          prop: 'date',
          minWidth: '80'
        }
      ],
      tableData: [],
      params:{
        page:1,
        pageSize:10
      }
    }
  },
  components: {
    DataTable
  },
  mounted() {
    this.getVisits()
  },
  methods: {
    changeType(type) {
      this.type = type
      switch (type) {
        case '在线人数':
          this.tableData = []
          break
        case '访问历史':
          this.getVisits()
          break
      }
    },
    async getVisits() {
      try {
        const res = await reqVisits(this.params)
        if (res.code === 200) {
          const data=[]
          res.data.list.forEach((visit) => {
            visit.date = timestampToTime(visit.date)
            data.push(visit)
          })
          this.tableData = data
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
}

</script>

<style scoped>
.home {
  width: 100%;
  /* height: 800px; */
  display: flex;
  padding: 10px;
  flex-direction: column;
}

.home .home-data .home-tab {
  margin-bottom: 10px;
}
</style>
