<template>
<div>
   <router-view/>
    <van-tabbar v-model="active">
  <van-tabbar-item to="/demo" icon="wap-home-o">首页</van-tabbar-item>
  <van-tabbar-item to="/classify" icon="qr">分类</van-tabbar-item>
  <van-tabbar-item to="/shopcar" icon="shopping-cart-o">购物车</van-tabbar-item>
  <van-tabbar-item to="person" icon="user-o">用户</van-tabbar-item>
</van-tabbar>
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

<style>

</style>
