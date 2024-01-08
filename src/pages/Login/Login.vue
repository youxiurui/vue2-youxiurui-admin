<template>
  <div id="login">
    <div class="form">

    </div>
  </div>
</template>

<script>
export default {
}

</script>

<style scoped>
#login{
    width: 100%;
    height: 100%;
    text-align: center;
    position: relative;
    background-image: url('@/assets/images/background.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center center;
    overflow: hidden;
}
.form{
    position: absolute;
    top: 30%;
    right: 15%;
    width: 400px;
    height: 300px;
    border-radius: 10px;
    background-color: rgba(255,255,255);
    box-shadow: 0 0 10px rgba()
}
</style>
