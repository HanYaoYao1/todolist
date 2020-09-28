<template>
  <div>
     <van-search
  
  shape="round"
  background="red"
  placeholder="请输入搜索关键词"
  @focus="search"
/>
  </div>
</template>

<script>
export default {
  methods:{
    search(){
      this.$router.push({
        path:'/search',
       
      })
    }
  }
}
</script>

<style>

</style>
