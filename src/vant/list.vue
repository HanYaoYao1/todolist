<template>
  <div>
    <van-card
    v-for="(item,index) in list"
    :price="item.actualPrice"
    :desc="item.dtitle"
    :title="item.title"
    :thumb="item.mainPic"
/>
  </div>
</template>

<script>
export default {
    data(){
        return{
            list:[]
        }
    },
    mounted() {
        this.list=[];
         this.$axios.get('http://api.kudesoft.cn/tdk/goods',{
             params:{
                 
             }
         }).then(res=>{
            console.log(res.data.data.data);
            let lists=res.data.data.data.list;
              lists.map(item=>{
                if(item.title.includes(this.$route.query.value)){
                    this.list.push(item)
                }
            })
        })

    },
    methods:{

    }
}
</script>

<style>

</style>