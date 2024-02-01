<template>
  <div class="menu">
    <div class="menu-left">

    </div>
    <div style="flex-grow: 0.1;"></div>
    <div class="menu-right">

    </div>
  </div>
</template>
    
<script>
export default {
  data() {
    return {

    }
  },
  mounted() {

  },
  methods: {

  }
}

</script>
  
<style scoped>
.menu {
  width: 100%;
  height: 1400px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.menu .menu-left {
  flex-grow: 2;
  border-radius: 6px;
  border: 1px solid #e6e6e6
}
.menu .menu-right {
  flex-grow: 1.3;
  border-radius: 6px;
  border: 1px solid #e6e6e6
}
</style>
  