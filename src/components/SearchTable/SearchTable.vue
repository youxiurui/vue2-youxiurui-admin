<template>
    <div class="search-table">
        <el-form inline label-width="80px" class="serch-form">
            <el-form-item label-width="80px" :label="item.label" v-for="(item, index) in formSearch" :key="item.name">
                <el-input v-if="item.type === 'input'" v-model="formData[item.name]"
                    :placeholder="item.placeholder"></el-input>
                <el-select v-if="item.type === 'select'" v-model="formData[item.name]" :placeholder="item.placeholder">
                    <el-option v-for="option in item.options" :key="option.value" :label="option.label"
                        :value="option.value">
                    </el-option>
                </el-select>
                <el-date-picker v-if="item.type === 'date'" type="date" format="yyyy-MM-dd"
                    value-format="yyyy-MM-dd" :placeholder="item.placeholder"
                    v-model="formData[item.name]"></el-date-picker>
            </el-form-item>
            <el-form-item class="serch-btn">
                <el-button :icon="btn.icon" :plain="btn.plain" :type="btn.type" v-for="(btn, index) in formBtn"
                    @click="callBack(btn.name)">{{ btn.label }}</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {},
        }
    },
    props: {
        formSearch: {
            type: Array,
            default: () => []
        },
        formBtn: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        callBack(type) {
            if(type==='reset'){
                this.formData={}
            }
            this.$emit('callBack', { ...this.formData, type })
        }
    }
}

</script>

<style scoped>
.search-table {
    width: 100%;
    margin-bottom: 10px;
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
