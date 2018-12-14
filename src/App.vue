<template>
  <div id="app">
    <!-- vue logo -->
    <img src="./assets/logo.png" id="logo">
    <!-- 導覽列 -->
    <nav>
      <router-link to="/">首頁</router-link>
      <router-link to="/down">連結二</router-link>
    </nav>
    <!-- 路由匹配到的组件將會渲染在這 -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#logo{
  max-width: 60px;
}
</style>
