<template>
	<div>
		<van-nav-bar title="商品详情" left-arrow />
		<van-swipe :autoplay="3000" style="width:100%;height:400px">
			<van-swipe-item v-for="(item,index) in imgs" :key="index">
				<img style="height:400px;width:100%" :src="item" alt />
			</van-swipe-item>
		</van-swipe>
		<van-cell class="van-ellipsis" :key="item" :title="detail.dtitle" :label="detail.title">
			<template #default>
				<!-- sdfghjk -->
				<span style="display:inline-block;text-align:center;font-size:12px">
					<i class="iconfont icon-1024-27"></i>
					<br />分享
				</span>
			</template>
		</van-cell>

		<ul style="width:100%;display:flex;justify-content:space-around;color:grey;font-size:14px">
			<li>
				<span style="color:red;font-size:18px;font-weight:bolder">￥{{detail.actualPrice}}</span>
				<s style="font-size:12px">￥{{detail.originalPrice}}</s>
			</li>
			<li>邮费:包邮</li>
			<li>已售:{{detail.monthSales}}</li>
		</ul>
		<van-divider style="color:#000;">·商品详情·</van-divider>
		<img style="width:100%;height:400px" v-for="(item,index) in src" :key="index" :src="item.img" alt />
		<!-- {{this.$route.query.id}} -->
		<van-goods-action>
			<van-goods-action-icon icon="wap-home-o" text="商铺" />
			<van-goods-action-icon icon="cart-o" text="购物车" />
            <van-goods-action-icon icon="service-o" text="客服" />
			<van-goods-action-button type="warning" text="加入购物车" />
			<van-goods-action-button type="danger" text="立即购买" />
		</van-goods-action>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				detail: [],
				imgs: [],
				src: [],
			};
		},
		mounted() {
			this.$axios
				.get("http://api.kudesoft.cn/tdk/details", {
					params: { id: this.$route.query.id },
				})
				.then((res) => {
					console.log(res.data.data.data);
					this.detail = res.data.data.data;
					this.imgs = this.detail.imgs.split(",");
					this.src = JSON.parse(this.detail.detailPics);
				});
		},
	};
</script>

<style lang="scss">
	// .van-cell {
	// 	.van-cell__title {
	// 		width: 200px;
	// 	}
	// }
</style>