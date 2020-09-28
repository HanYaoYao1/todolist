<template>
  <div>
      <van-nav-bar
        title="分类"
        left-arrow
      />
      <van-search
  placeholder="搜索"
  input-align="center"
/>
<van-tabs type="line" v-model="value">
  <van-tab  v-for="item in navlist" :key="item.cid"  :title="item.cname" :name="item.cid" ></van-tab>
  
</van-tabs>

<van-card
v-for="item in list"
:key="item.id"
  :num="item.monthSales"
  :price="item.actualPrice"
  :title="item.title"
  :thumb="item.mainPic"
  @click="todetail(item.id)"
/>

      <van-tabbar v-model="active">
  <van-tabbar-item icon="wap-home-o">商城</van-tabbar-item>
  <van-tabbar-item icon="apps-o">分类</van-tabbar-item>
  <van-tabbar-item icon="shopping-cart-o">购物车</van-tabbar-item>
  <van-tabbar-item icon="user-o">用户中心</van-tabbar-item>
</van-tabbar>
  </div>
</template>

<script>
export default {
    data(){
        return{
           
            active:1,
            navlist:[],
            value:0,
            list:[],
        }
    },
    mounted() {
        this.$axios.get('http://api.kudesoft.cn/tdk/category').then(res=>{
            console.log(res);
            this.navlist=res.data.data.data;
        })
    },
    watch: {
        
        value(newVal,old){
            console.log(111);
            console.log(newVal,old);
            this.$axios.get('http://api.kudesoft.cn/tdk/goods',{
                params:{
                    cids:newVal,
                    pageId:1,
                }
            }).then(res=>{
                console.log(res);
                this.list=res.data.data.data.list
            })
        }
    },
    methods:{
        todetail(id){
            this.$router.push({
                path:'/details',
                query:{
                    id:id
                }
            })
        }
    }
}
</script>

<style>

</style>