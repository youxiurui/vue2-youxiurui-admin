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
    // navigator.geolocation.getCurrentPosition(position => {
    //   const latitude = position.coords.latitude; // 纬度
    //   const longitude = position.coords.longitude; // 经度
    //   console.log(`Latitude: ${latitude}, Longitude: ${longitude}`);
    // }, err => {
    //   console.log(err)
    // }, {
    //   maximumAge: 600000, // 接受的最大缓存时间（毫秒）
    //   timeout: 10000, // 最长等待时间（毫秒）
    //   enableHighAccuracy: true // 是否需要高精度位置信息
    // });

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
  min-width: 1200px;
}

</style>
