<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
    <!-- <van-tabbar v-model="active">
  <van-tabbar-item to="/demo" icon="wap-home-o">首页</van-tabbar-item>
  <van-tabbar-item to="/classify" icon="qr">分类</van-tabbar-item>
  <van-tabbar-item to="/shopcar" icon="shopping-cart-o">购物车</van-tabbar-item>
  <van-tabbar-item to="person" icon="user-o">用户</van-tabbar-item>
</van-tabbar> -->


  </div>
</template>
<script>
export default {
  data(){
    return{
      active:0
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
