<template>
  <div>
    <h1>点击数字：{{num}}</h1>
    <button @click="add">加</button>&nbsp;&nbsp;
    <button @click="jian">减</button>
    <ul>
      <li v-for="i in 10" :key="i" @click="change(i)" :class="kw==i ? active :''"  >{{i}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return{
      num:0,
      list:[],
     
      kw:1,
      active:"red"
    }
  },
  methods:{
    add(){
      this.num++;
    },
    jian(){
      if(this.num<=0){
       return this.num=0
      }else{
        this.num--; 
    }
      },
      change(i){
        this.kw=i
       if(i%2==0){
         this.active='red'
       }else{
         this.active='blue'
       }
      }
   

      
  }
}
</script>

<style>

.active{
  background:grey;
}
.red{
  background: red;
}
.blue{
  background: blue;
}
</style>