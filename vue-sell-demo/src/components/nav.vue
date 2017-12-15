<template>
	<div id="nav">
		<ul class="nav-list">
			<li><router-link to="/goods">商品</router-link></li>
			<li><router-link to="/remark">评价</router-link></li>
			<li><router-link to="/seller">商家</router-link></li>
		</ul>		
	</div>
</template>
<script>
	export default{
		props:{
			goodsData:{
				type:Array
			}
		}
	}
</script>
<style scoped>
	#nav{
		width:100%;
		height:1.6rem;
		font-size:0.5rem;
	}
	#nav .nav-list{
		height:1.6rem;
		line-height: 1.6rem;
		list-style: none;
		display: flex;
		justify-content: space-around;
	}
	#nav .nav-list li a{
		display: inline-block;
		width:100%;
		height:100%;
		color:rgb(77,85,93);
	}
	#nav .nav-list li a:hover{
		color:rgb(240,20,20);
	}
	#nav::after{
		display: block;
		content:'';
		width: 100%;
		height:0.04rem;
		background: rgba(7,17,27,0.1);
	}
	@media (min-device-pixel-ratio:1.5) and (-webkit-min-device-pixel-ratio:1.5){
		#nav::after{
			transform:scaleY(0.7);
			-webkit-transform:scaleY(0.7);
		}
	}
	@media (min-device-pixel-ratio:2) and (-webkit-min-device-pixel-ratio:2){
		#nav::after{
			transform:scaleY(0.5);
			-webkit-transform:scaleY(0.5);
		}
	}
</style>