<template>
  <div>
      <form action="/">
  <van-search
    v-model="value"
    show-action
    placeholder="请输入搜索关键词"
    @search="onSearch"
    @cancel="onCancel"
    
  >
  <template #left>
      <van-icon name="arrow-left" />
  </template></van-search>
</form>
    <van-cell-group>
     <van-cell title="历史搜索"  >
      <template #default>
         <van-icon name="delete" @click="del" />
      </template>
  </van-cell>
</van-cell-group>
    <van-tag plain type="primary" v-for="(item,index) in history" v-if="index<3" :key="index" style="margin-left:5px">{{item}}</van-tag>
  </div>
</template>

<script>
export default {
    data(){
        return{
            value:'',
            // alist:[],
            history:[],
        }
    },
    mounted() {
        // this.$axios.get('http://api.kudesoft.cn/tdk/goods').then(res=>{
        //     console.log(res.data.data);
        //     this.alist=res.data.data.data
        // })

        let history=localStorage.history;
        if(history){
            this.history=JSON.parse(history);
        }
    },
    methods:{
    onSearch() {
    //   Toast(val);
        //  this.history=[];
        this.history.unshift(this.value);
        localStorage.history=JSON.stringify(this.history)
        this.$router.push({
            path:'/list',
            query:{
                value:this.value
            }
        })
    },
    onCancel() {
      Toast('取消');
    },
    del(){
        this.history=[];
        localStorage.history=[]
    }
   
    }
}
</script>

<style>

</style>