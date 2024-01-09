<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
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
body{
  width: 100%;
  height: 100%;
}
#app{
  height: 100%;
  min-width: 1200px;
}

</style>
