<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  },
  mounted() {
  },
  methods: {
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
