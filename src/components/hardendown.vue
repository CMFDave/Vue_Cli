<!-- HardenDown.vue -->

<template>
  <div class="hello">
    <img src="../assets/harden.jpg">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HardenDown',
  data () {
    return {
      msg: '這是首頁，所以 Harden 不動'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello img {
  transform: perspective(600px) rotateX(80deg);
}
</style>
