<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import { reqLogOut } from '@/api'
import { decrypt } from '@/utils/crypto'
export default {
  name: 'App',
  components: {
  },
  mounted() {
    // window.addEventListener('beforeunload', this.logOut())
  },
  methods: {
    async logOut() {
      const id = localStorage.getItem('conversation') || sessionStorage.getItem('conversation')
      if(!id) return
      const res =await reqLogOut({ id: decrypt(id) })
      if (res.code === 200) {
        localStorage.clear()
        sessionStorage.clear()
      }
    }
  },
  beforeDestroy() {
    // window.removeEventListener('beforeunload', this.logOut())
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  height: 100%;
  min-height: 700px;
  min-width: 1200px;
}

.set-scroll::-webkit-scrollbar {
  width: 3px;
}

.set-scroll::-webkit-scrollbar-thumb {
  background-color: rgb(221, 222, 224);
  border-radius: 6px;
}
</style>
