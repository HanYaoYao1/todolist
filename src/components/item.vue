<template>
  <div>
<van-card
  :price="good.originalPrice"
  :title="good.title"
  :thumb="good.mainPic"
			/>
  </div>
</template>

<script>
export default {
props:["good"]
}
</script>

<style>

</style>