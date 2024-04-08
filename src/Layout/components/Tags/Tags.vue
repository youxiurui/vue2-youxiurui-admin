<template>
    <div style="width: 100%;">
        <el-tag class="tag-item" :class="{ 'active': active === tag.name }" v-for="tag in tags" :key="tag.name"
            :closable="!noRemove.includes(tag.name)" @click="click(tag.name, tag.path)"
            @close="close(tag.name)">
            {{ tag.name }}
        </el-tag>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tags: [
                { name: '首页', path: 'home' },
            ],
            active: '首页',
            noRemove: ['首页']
        }
    },
    props:{
        currentTag:{
            type:String,
            default:'home'
        }
    },
    watch: {
        '$route': {
            handler() {
                const { meta, name } = this.$route
                this.active = meta.pathName
                if (!this.tags.find(tag => tag.name === meta.pathName)) {
                    this.tags.push({
                        name: meta.pathName,
                        path: name
                    })
                }
            },
            immediate: true
        }
    },
    methods: {
        click(name, path) {
            this.active = name
            this.$emit('changeTag',path)
            this.$router.push({
                name: path
            })
        },
        close(name) {
            const index=this.tags.findIndex(tag => tag.name === name)
            this.tags = this.tags.filter(tag => {
                return tag.name !== name
            })
            if(this.tags.length>1&&this.active===name){
                const {name,path}=this.tags[index-1]
                this.click(name,path)
            }
            if (this.tags.length === 1) {
                const {name,path}=this.tags[0]
                this.click(name,path)
            }
        }
    }
}

</script>

<style scoped>
.tag-item {
    color: #333;
    border: 0;
    border-radius: 0;
    margin: 0 5px;
    cursor: pointer;
    transition: color 0.5s ease;
    background-color: #ffffff !important;
}

.tag-item:hover {
    color: #2e93f8;
}

.active {
    color: #2e93f8;
}

::v-deep .el-tag {
    height: 30px;
}

::v-deep .el-icon-close {
    color: inherit !important;
}

::v-deep .el-icon-close:hover {
    color: #2e93f8 !important;
    background-color: #f0f5fd !important;
}
</style>
