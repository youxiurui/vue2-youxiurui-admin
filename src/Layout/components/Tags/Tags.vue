<template>
    <div style="width: 100%;">
        <!-- <el-tag class="tag-item" :class="{ 'active': active === tag.name }" v-for="(tag, index) in tags" :key="tag.name"
            :closable="!noRemove.includes(tag.name)" @contextmenu.prevent.native="showMenu($event, index)"
            @click="click(tag.name, tag.path, index)" @close="close(tag.name)">
            {{ tag.name }}
        </el-tag> -->
        <TransitionGroup tag="ul" name="slide">
            <el-tag class="tag-item" :class="{ 'tag-active': active === tag.name }" v-for="(tag, index) in tags"
                :key="tag.name" :closable="!noRemove.includes(tag.name)"
                @contextmenu.prevent.native="showMenu($event, index)" @click="click(tag.name, tag.path, index)"
                @close="close(tag.name)">
                {{ tag.name }}
            </el-tag>
        </TransitionGroup>
        <div class="context-menu" ref="contextMenu" v-if="showContextMenu">
            <ul>
                <li @click="clickContextMenu('refresh')">
                    <i class="iconfont icon-shuaxin"></i>
                    <span>刷新</span>
                </li>
                <li v-if="!noRemove.includes(clickContext)" @click="clickContextMenu('close')">
                    <i class="iconfont icon-guanbi1"></i>
                    <span>关闭</span>
                </li>
                <li @click="clickContextMenu('closeOther')">
                    <i class="iconfont icon-guanbi"></i>
                    <span>关闭其他</span>
                </li>
                <li @click="clickContextMenu('closeAll')">
                    <i class="iconfont icon-quanbuguanbi"></i>
                    <span>关闭全部</span>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import {encrypt,decrypt} from '@/utils/crypto'
import { getRouters } from '@/router'

export default {
    data() {
        return {
            tags: [
                { name: '首页', path: 'home' },
            ],
            active: this.currentTag,
            noRemove: ['首页'],
            activeIndex: 0,
            clickContext: '',
            showContextMenu: false
        }
    },
    props: {
        currentTag: {
            type: String,
            default: 'home'
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
        },
        active: {
            handler(val) {
                sessionStorage.setItem('activeTag', JSON.stringify(encrypt(val)))
            }
        },
        tags: {
            handler(val) {
                sessionStorage.setItem('tags', JSON.stringify(encrypt(JSON.stringify(val))))
            }
        }
    },
    mounted() {
        document.addEventListener('click', this.hideMenu)
        const tags = sessionStorage.getItem('tags')
        const activeTag = sessionStorage.getItem('activeTag')
        if (tags) {
            this.tags = JSON.parse(decrypt(JSON.parse(tags)))
        }
        if (activeTag) {
            this.active = decrypt(JSON.parse(activeTag))
            const tag = this.tags.find(tag => tag.name === this.active)
            this.$emit('changeTag', tag.path)
        }
    },
    methods: {
        clickContextMenu(type) {
            switch (type) {
                case 'refresh':
                    const { fullPath } = this.$route
                    this.$router.replace({ path: '/empty' }).then(() => {
                        this.$router.replace(fullPath)
                    })
                    break
                case 'close':
                    this.close(this.tags[this.activeIndex].name)
                    break
                case 'closeOther':
                    const currentTag = this.tags[this.activeIndex]
                    this.tags = this.tags.filter(item => {
                        return item.name === currentTag.name || this.noRemove.includes(item.name)
                    })
                    this.click(currentTag.name, currentTag.path)
                    break
                case 'closeAll':
                    const residueTag = this.tags.filter(item => {
                        return this.noRemove.includes(item.name)
                    })
                    this.tags = residueTag
                    this.click(residueTag[0].name, residueTag[0].path)
                    break
            }
            this.showContextMenu = false
        },
        showMenu(e, index) {
            const target = e.target
            const rect = target.getBoundingClientRect()
            this.showContextMenu = true
            this.activeIndex = index
            this.clickContext = target.innerText.trim()
            this.$nextTick(() => {
                const contextMenu = this.$refs.contextMenu
                contextMenu.style.left = `${rect.left + rect.width / 2}px`
                contextMenu.style.top = `${rect.bottom}px`
            })
        },
        hideMenu(e) {
            const contextMenu = this.$refs.contextMenu
            if (!contextMenu) return
            if (!contextMenu.contains(e.target)) {
                this.showContextMenu = false
            }
        },
        click(name, path) {
            this.active = name
            this.$emit('changeTag', path)
            this.$router.push({
                name: path
            })
        },
        close(name) {
            const index = this.tags.findIndex(tag => tag.name === name)
            this.tags = this.tags.filter(tag => {
                return tag.name !== name
            })
            if (this.tags.length > 1 && this.active === name) {
                const { name, path } = this.tags[index - 1]
                this.click(name, path)
            }
            if (this.tags.length === 1) {
                const { name, path } = this.tags[0]
                this.click(name, path)
            }
        },
        beforeDestroy() {
            document.removeEventListener('click', this.hideMenu)
        },
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

.tag-active {
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

.context-menu {
    z-index: 9999;
    position: fixed;
    transform: translateX(-50%);
    border-radius: 4px;
    border: 1px solid rgb(228, 231, 237);
    filter: drop-shadow(0 0 12px rgba(0, 0, 0, .12));
}

.context-menu::before {
    content: '';
    position: absolute;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 8.66px solid #ffffff;
}

.context-menu ul {
    list-style: none;
    padding: 5px 0;
    border-radius: 4px;
    background-color: #ffffff;
}

.context-menu ul li {
    padding: 5px 16px;
    font-size: 12px;
    background-color: #ffffff;
    transition: background-color 0.5s ease;
}

.context-menu ul li:hover {
    background-color: rgb(240, 245, 253);
}

.context-menu ul li .iconfont {
    margin-right: 5px;
    font-size: 12px;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.5s;
}
.slide-enter, .slide-leave-to {
  opacity: 0;
}

</style>
