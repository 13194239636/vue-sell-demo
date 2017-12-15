<template>
	<div id="seller_detail">
		<div class="seller_name">
			<span class="collect">
				<img :src='"src/resource/SVG/"+collectIcon[collectedIndex]' @click="collect()">
				<p>{{collectedText[collectedIndex]}}</p>
			</span>
			<p class="name">{{sellerData.name}}</p>
			<p class="star">
				<app-star :size='24' :score="sellerData.score"></app-star>
				<span class="text1">(661)</span>
				<span  class="text2">月售{{sellerData.sellCount}}单</span>
			</p>
		</div>
		<div class="seller_sell">
			<div>
				<p class="title">起送价</p>
				<p class="content">{{sellerData.minPrice}}<span>元</span></p>
			</div>
			<div>
				<p class="title">商家配送</p>
				<p class="content">{{sellerData.deliveryPrice}}<span>元</span></p>
			</div>
			<div>
				<p class="title">平均配送时间</p>
				<p class="content">{{sellerData.deliveryTime}}<span>分钟</span></p>
			</div>
		</div>
		<div class="seller_notice_action">
			<p class="name">公告与活动</p>
			<div>
				<p class="notice_main">
					{{sellerData.bulletin}}
				</p>
				<ul class="action_main">
					<li v-for="item in sellerData.supports">
						<img :src="'src/resource/img/'+iconMap[item.type]">
						<p>{{item.description}}</p>
					</li>
				</ul>
			</div>
		</div>
		<div class="seller_photo">
			<p class="name">商家实景</p>
			<ul>
				<li v-for="item in sellerData.pics"><img :src="item"></li>
			</ul>
		</div>
		<div class="seller_messages">
			<p class="name">商家信息</p>
			<ul>
				<li v-for="item in sellerData.infos">{{item}}</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import appStar from './start.vue'
	export default{
		data(){
			return {
				collectedText:['已收藏','收藏'],
				collectedIndex:1,
				iconMap:['decrease_1@2x.png','discount_1@2x.png','guarantee_1@2x.png','invoice_1@2x.png','special_1@2x.png'],
				collectIcon:['favorite_red.svg','favorite.svg'],//+collectIcon[collectedIndex]
			}
		},
		methods:{
			collect(){
				this.collectedIndex = this.collectedIndex==1?0:1;
			}
		},
		props:{
			sellerData:{
				type:Object
			}
		},
		components:{
			appStar
		}
	}
</script>
<style scoped>
	#seller_detail{
		width:100%;
		height:18rem;
		overflow-y: scroll;
		overflow-x: hidden;
	}
	.seller_name{
		margin:0rem 0.72rem;
		padding:0.72rem 0rem;
		border-bottom:0.04rem solid rgba(7,17,27,0.1);
	}
	.seller_name .collect{
		width:2rem;
		text-align: center;
		float: right;
	}
	.seller_name .collect img{
		width:0.96rem;
		height:0.96rem;
		margin-bottom:0.16rem;
	}
	.seller_name .collect p{
		font-size: 0.4rem;
		line-height:0.4rem;
		color:rgb(77,85,93);
	}
	.name{
		text-align: left;
		font-size: 0.56rem;
		line-height: 0.56rem;
		color:rgb(7,17,27);
		margin-bottom: 0.32rem;
	}
	.seller_name .star{
		line-height: 0.72rem;
		font-size: 0.4rem;
		line-height: 0.72rem;
		color:rgb(77,85,93);
		display: flex;
	    align-items: center;
	}
	.seller_name .star #star{
		margin-right:0.32rem;
	}
	.seller_name .star .text1{
		margin-right:0.48rem;
	}
	.seller_sell{
		display: flex;
		justify-content: space-around;
		align-items: center;
		border-bottom:0.72rem solid  rgba(147,153,159,0.1);
	}
	.seller_sell div{
		width:5rem;
		margin:0.72rem 0rem;
		border-right:0.04rem solid rgba(7,17,27,0.1);
		text-align: center;
	}
	.seller_sell .title{
		font-size: 0.4rem;
		line-height: 0.4rem;
		color:rgb(147,153,159);
		margin-bottom:0.16rem;
	}
	.seller_sell .content{
		font-size: 0.96rem;
		line-height: 0.96rem;
		font-weight: 200;
		color:rgb(7,17,27);
	}
	.seller_sell .content span{
		font-size: 0.4rem;
		line-height: 0.4rem;
		font-weight: normal;
		color:rgb(7,17,27);
		padding-left:0.1rem;
	}
	.seller_notice_action{
		padding:0.72rem 0.72rem 0rem 0.72rem;
		border-bottom:0.72rem solid rgba(147,153,159,0.1);
	}
	.seller_notice_action div{
		padding:0rem 0.48rem;
	}
	.seller_notice_action div .notice_main{
		font-size: 0.48rem;
		color:rgb(240,20,20);
		font-weight: 200;
		line-height: 0.96rem;
		word-break: break-all;
		padding-bottom:0.64rem;
		border-bottom: 0.04rem solid rgba(7,17,27,0.1);
	}
	.seller_notice_action div .action_main li{
		padding:0.64rem 0.48rem;
		line-height: 0.64rem;
		font-size: 0.48rem;
		font-weight: 200;
		color:rgb(7,17,27);
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		border-bottom:0.04rem solid rgba(7,17,27,0.1);
	}
	.seller_notice_action div .action_main li img{
		float:left;
		width:0.64rem;
		height:0.64rem;
	}
	.seller_notice_action div .action_main li p{
		padding-left:0.88rem;
	}
	.seller_photo{
		padding:0.72rem 0rem 0.72rem 0.72rem;
		overflow: hidden;
		border-bottom:0.72rem solid rgba(147,153,159,0.1);
	}
	.seller_photo ul{
		margin-top:0.48rem;
		height:3.6rem;
		overflow-x: scroll;
		overflow-y: hidden;
		white-space:nowrap
	}
	.seller_photo ul li{
		display: inline-block;
		margin-right:0.24rem;
	}
	.seller_photo ul li img{
		width:4.8rem;
		height:3.6rem;
	}
	.seller_messages{
		padding:0.72rem;
		margin-bottom:2rem;
	}
	.seller_messages ul{
		margin-top:0.48rem;
	}
	.seller_messages ul li{
		padding:0.64rem 0.48rem;
		line-height: 0.64rem;
		font-size: 0.48rem;
		font-weight: 200;
		color:rgb(7,17,27);
		border-top:0.04rem solid rgba(7,17,27,0.1);
		word-break: break-all;
	}
</style>