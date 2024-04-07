<template>
    <el-dialog :top="top" :title="title" :width="width" :visible.sync="visible" @close="cancel">
        <el-form :model="formData">
            <el-form-item v-for="(item, index) in formItem" :label="item.label" :label-width="item.labelWidth">
                <el-input v-model="formData[item.type]" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="cancel">取 消</el-button>
            <el-button type="primary" @click="verify">确 定</el-button>
        </div>
    </el-dialog>
</template>

<script>
export default {
    data() {
        return {
            visible: this.dialogFormVisible,
            formData:{}
        }
    },
    props: {
        dialogFormVisible: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        form: {
            type: Object,
            default: () => ({})
        },
        formItem: {
            type: Array,
            default: () => ([])
        },
        width: {
            type: String,
            default: '40%'
        },
        top: {
            type: String,
            default: '80px'
        }
    },
    watch: {
        dialogFormVisible(val) {
            this.visible = this.dialogFormVisible
        },
        form(val){
            this.formData=JSON.parse(JSON.stringify(val))
        }
    },
    mounted() {

    },
    methods: {
        cancel() {
            this.callBackDialog({
                type: 'cancel',
                dialogFormVisible: false
            })
        },
        verify() {
            this.callBackDialog({
                type: 'verify',
                data: this.formData
            })
        },
        callBackDialog(params) {
            this.$emit('callBackDialog', params)
        }
    }
}

</script>

<style scoped></style>
