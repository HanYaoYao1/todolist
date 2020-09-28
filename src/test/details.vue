<template>
	<div>
		<van-nav-bar title="商品详情" left-arrow />
		<van-swipe
			style="width:100%;height:350px"
			class="my-swipe"
			:autoplay="3000"
			indicator-color="white"
		>
			<van-swipe-item v-for="(item,index) in swipe" :key="index">
				<img style="width:100%;height:350px" :src="item" alt />
			</van-swipe-item>
		</van-swipe>
		<div>
			<h4>{{detail.title}}</h4>
			<p style="display:flex;justify-content:space-between">
				<span style="color:red">￥{{detail.actualPrice}}</span>
				<span style="font-size:12px">
					<i class="iconfont icon-1024-27"></i>
					<br />分享
				</span>
			</p>
			<p style="display:flex;justify-content:space-between">
				<s>￥{{detail.originalPrice}}</s>
				<span>销量:{{detail.monthSales}}件</span>
			</p>
		</div>

		<van-goods-action>
			<van-goods-action-icon icon="chat-o" text="客服" color="#07c160" />
			<van-goods-action-icon icon="cart-o" text="购物车" />
			<van-goods-action-icon icon="star" text="已收藏" color="#ff5000" />
			<van-goods-action-button type="warning" text="加入购物车" @click="add(detail)" />
			<van-goods-action-button type="danger" text="立即购买" />
		</van-goods-action>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				detail: [],
				swipe: [],
				img: [],
				car: [],
			};
		},
		mounted() {
			this.$axios
				.get("http://api.kudesoft.cn/tdk/details", {
					params: {
						id: this.$route.query.id,
					},
				})
				.then((res) => {
					console.log(res.data.data.data);
					this.detail = res.data.data.data;
					this.swipe = this.detail.imgs.split(",");
				});
			let xq = localStorage.car;
			if (xq) {
				this.car = JSON.parse(xq);
			}
		},
		methods: {
			add(item) {
				this.car.push(item);
				localStorage.car = JSON.stringify(this.car);
			},
		},
	};
</script>

<style>
</style>
