<!-- HardenDown.vue -->

<template>  
  <div id="app" class="hello">
    <img src="../assets/index.png">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HardenDown',
  data () {
    return {
      msg: 'This is SiteFooter'
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