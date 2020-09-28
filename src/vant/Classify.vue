<template>
	<div>
		<van-nav-bar title="喵咪食物" left-arrow />
		<van-tabs v-model="active">
			<van-tab v-for="item in list" :key="item.cid" :title="item.cname" :name="item.cid"></van-tab>
		</van-tabs>

		<van-grid direction="horizontal">
			<van-grid-item text="销量" />
			<van-grid-item text="品牌" />
			<van-grid-item text="筛选" />
			<van-grid-item text="排序">
				<template #icon>
					<span style="display:flex;flex-direction:column;">
						<i @click="up" class="iconfont icon-shengxu" style="font-size:10px"></i>
						<i @click="down" class="iconfont icon-jiangxu" style="font-size:10px"></i>
					</span>
				</template>
			</van-grid-item>
        </van-grid>
		<item v-for="i in goods" :key="i.id" :good="i"  @click.native="todetail(i.id)"></item>
	</div>
</template>

<script>
	import item from "../components/item.vue";
	export default {
		components: {
			item,
		},
		data() {
			return {
				active: 1,
				list: [],
				goods: [],
			};
		},
		mounted() {
			this.$axios.get("http://api.kudesoft.cn/tdk/category").then((res) => {
				console.log(res.data.data.data);
				this.list = res.data.data.data;
			});
		},
		watch: {
			active(newVal, old) {
				console.log(newVal, old);
				this.$axios
					.get("http://api.kudesoft.cn/tdk/goods", {
						params: {
						pageId: 1,
                        cids:newVal,
						},
					})
					.then((res) => {
						console.log(res.data.data.data.list);
						this.goods = res.data.data.data.list;
					});
			},
		},methods:{
      up(){
        this.goods.sort((a,b)=>{
          return a.originalPrice-b.originalPrice;
        })
	  },
	   down(){
        this.goods.sort((a,b)=>{
          return b.originalPrice-a.originalPrice;
        })
	  },
	  todetail(id){
		  this.$router.push({
			  path:'/detail',
			  query:{id:id}
		  })
	  }
    }
	};
</script>

<style>
</style>