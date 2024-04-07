<template>
    <div class="search-table">
        <el-form inline label-width="80px" class="serch-form">
            <el-form-item label-width="80px" :label="item.label" v-for="(item, index) in tableSearch" :key="item.name">
                <el-input v-if="item.type === 'input'" v-model="tableData[item.name]"
                    :placeholder="item.placeholder"></el-input>
                <el-select v-if="item.type === 'select'" v-model="tableData[item.name]" :placeholder="item.placeholder">
                    <el-option v-for="option in item.options" :key="option.value" :label="option.label"
                        :value="option.value">
                    </el-option>
                </el-select>
                <el-date-picker v-if="item.type === 'date'" type="date" format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd" :placeholder="item.placeholder"
                    v-model="tableData[item.name]"></el-date-picker>
            </el-form-item>
            <el-form-item class="serch-btn">
                <el-button v-for="(btn, index) in tableSearchBtn" :icon="btn.icon" :plain="btn.plain" :type="btn.type" :key="index"
                    @click="callBackTable(btn.name)">{{ btn.label }}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: {},
        }
    },
    props: {
        tableSearch: {
            type: Array,
            default: () => []
        },
        tableSearchBtn: {
            type: Array,
            default: () => []
        }
    },
    mounted(){
     
    },
    methods: {
        callBackTable(type) {
            if(type==='reset'){
                this.tableData={}
            }
            this.$emit('callBackTable', { ...this.tableData, type })
        }
    }
}

</script>

<style scoped>
.search-table {
    width: 100%;
    border: 1px solid #e6e6e6;
    border-radius: 6px;
}

.search-table .serch-form {
    padding: 10px 10px 0 10px;
}

.search-table .serch-btn {
    left: 38px;
    position: relative;
}

::v-deep .el-form-item {
    margin-bottom: 10px;
}
</style>
