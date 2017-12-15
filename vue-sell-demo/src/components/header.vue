<template>
	<div id="header" v-if="sellerData">
		<div class="header-title">
			<img class="header-title-pic" :src="sellerData.avatar">
			<div class="header-title-main">
				<p class="main-title">
					<img src="../resource/img/brand@2x.png">
					<span>{{sellerData.name}}
					</span>
				</p>
				<p class="main-text1">
					{{sellerData.description}}/{{sellerData.deliveryTime}}分钟送达
				</p>
				<p class="main-text2" v-if="sellerData.supports">
					<img :src="'src/resource/img/'+classMap1[sellerData.supports[0].type]">
					<span>
						{{sellerData.supports[0].description}}
					</span>
				</p>
				<a class="num" href="#" @click="showDetail()">
					5个
					<img class="header-notice-arrow" src="../resource/SVG/arrow_lift.svg">
				</a>
			</div>
		</div>		
		<div class="header-notice"  @click="showDetail()">
			<img class="header-notice-icon" src="../resource/img/bulletin@2x.png">
			<span class="header-notice-content">
				{{sellerData.bulletin}}
			</span>
			<img class="header-notice-arrow" src="../resource/SVG/arrow_lift.svg">
		</div>
		<div id="detail-msg" v-if="detailShow">
			<div class="notice_and_discount_msg1"></div>	
			<div class="notice_and_discount_msg2">
				<div class="nadm_title">
					<p>{{sellerData.name}}</p>
					<app-star :size='size' :score='sellerData.score'></app-star>
				</div>
				<div class="title_line">
					<p class="line1"></p>
					<p class="text">优惠信息</p>
					<p class="line2"></p>
				</div>
				<ul class="discount_msg" v-if="sellerData.supports">
					<li v-for="item of sellerData.supports" :class="[classMap2[item.type]]">{{item.description}}</li>
				</ul>
				<div class="title_line">
					<p class="line1"></p>
					<p class="text">商家公告</p>
					<p class="line2"></p>
				</div>
				<p class="notice_msg">
					{{sellerData.bulletin}}
				</p>
				<img class="close" src="../resource/SVG/close.svg" @click="hideDetail">
				<div class="clear"></div>
			</div>	
		</div>
		<div class="header-background">
			<img :src="sellerData.avatar">
		</div>
	</div>
</template>
<script>
	import appStar from './start.vue'
	export default{
		data(){
			return{
				size:36,
				detailShow:false,
				classMap1:['decrease_1@2x.png','discount_1@2x.png','guarantee_1@2x.png','invoice_1@2x.png','special_1@2x.png'],
				classMap2:['decrease','discount','guarantee','invoice','special']
			}
		},
		props:{
			sellerData:{
				type:Object
			}
		},
		methods:{
			showDetail(){
				this.detailShow=true;
			},
			hideDetail(){
				this.detailShow=false;
			}
		},
		components:{
			appStar
		}
	}
</script>
<style scoped>
	.decrease{
		background: url(../resource/img/decrease_1@2x.png) no-repeat 0rem 0.14rem;
	}
	.discount{
		background: url(../resource/img/discount_1@2x.png) no-repeat 0rem 0.14rem;
	}
	.guarantee{
		background: url(../resource/img/guarantee_1@2x.png) no-repeat 0rem 0.14rem;
	}
	.invoice{
		background: url(../resource/img/invoice_1@2x.png) no-repeat 0rem 0.14rem;
	}
	.special{
		background: url(../resource/img/special_1@2x.png) no-repeat 0rem 0.14rem;
	}
	#header{
		width:100%;
		background: rgba(7,17,27,0.2);
		overflow: hidden;
		position: relative;
	}
	.header-notice{
		width:100%;
	    height: 0.66rem;
	    padding: 0.3rem 0rem;
		background: rgba(7,17,27,0.2);
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.header-notice .header-notice-icon{
		width:0.88rem;
		height:0.48rem;
	}
	.header-notice .header-notice-content{
		display: inline-block;
		font-size: 0.35rem;
		height:0.56rem;
		line-height: 0.6rem;
		width:10.9rem;
		font-weight:200;
		color:rgb(255,255,255);
		overflow-x: scroll;
		overflow-y: hidden;
		white-space: nowrap;
	}
	.header-notice .header-notice-arrow{
		display: inline-block;
		width:0.5rem;
		height:0.5rem;
		transform: rotateY(180deg) translateY(-0.2rem);
		-webkit-transform: rotateY(180deg) translateY(-0.2rem);
		position: relative;
		top:0.2rem;
	}
	.header-title{
		position: relative;
		padding:0.96rem 0.6rem 0.6rem 0.96rem;
	}
	.header-title .header-title-pic{
		float: left;
		width:4rem;
		height:4rem;
		border-radius: 0.2rem;
		margin-right:0.4rem;
	}
	.header-title .header-title-main{
		padding-bottom: 0.16rem ;
		padding-left: 4.05rem;
		height:4.4rem;
	}
	.header-title .header-title-main .main-title {
		font-size: 0.8rem;
		line-height: 1rem;
		color:rgb(255,255,255);
		font-weight: bold;
	}
	.header-title .header-title-main .main-title img{
		position: relative;
		top:0.14rem;
		width:1.6rem;
		height: 0.96rem;
	}
	.header-title .header-title-main .main-text1{
		width:100%;
		line-height: 0.7rem;
		font-size: 0.7rem;
		font-weight: 8.0rem;
		color:white;
		margin-top:0.6rem;
	}
	.header-title .header-title-main .main-text2{
		width:100%;
		height: 1.2rem;
		line-height:1.2rem;
		font-size: 0.6rem;
		color:white;
		margin-top:0.5rem;
	}
	.header-title .header-title-main .main-text2 img{
		width:0.96rem;
		height:0.96rem;
		position: relative;
		top:0.15rem;
	}
	.header-title .header-title-main .num{
		display: inline-block;
		position: absolute;
		right:0.6rem;
		bottom:0.5rem;
		font-size: 0.7rem;
		font-weight: lighter;
		color:rgb(255,255,255);
		width:2.2rem;
		height: 1.2rem;
		line-height: 1.2rem;
		background: rgba(0,0,0,0.2);
		border-radius: 0.6rem;
		padding-left:0.6rem;
	}
	.header-title .header-title-main .num img{
		display: inline-block;
		width:0.4rem;
		height:0.4rem;
		transform: rotateY(180deg);
		-webkit-transform: rotateY(180deg);
	}
	.header-background{
		position: absolute;
		top:0;
		bottom:0;
		left:0;
		right:0;
		z-index: -1;
	}
	.header-background img{
		width:100%;
		filter: blur(0.24rem);
		-webkit-filter: blur(0.24rem);
	}
	#header .notice_and_discount_msg1{
		position:fixed;
		top:0rem;
		left:0rem;
		width:100%;
		height:100%;
		filter: blur(0.2rem);
		background: rgba(7,17,27,0.8);
	}
	.notice_and_discount_msg2{
		overflow-y: scroll;
	}
	#header .notice_and_discount_msg2{
		position:fixed;
		top:0rem;
		left:0rem;
		width:100%;
		height:100%;
		text-align: center;
	}
	#header .notice_and_discount_msg2 .nadm_title{
		margin-top:2.56rem;
		margin-bottom:1.12rem;
		font-size: 0.64rem;
		font-weight: 700;
		line-height: 0.64rem;
		color:rgb(255,255,255);
	}
	#header .notice_and_discount_msg2 .nadm_title #star{
		margin-top:0.96rem;
	}
	#header .notice_and_discount_msg2 .nadm_title p{
		text-align: center;
	}
	#header .notice_and_discount_msg2 .title_line{
		margin:0rem 1.44rem 0rem 1.44rem;
		font-size: 0.55rem;
		font-weight: 700;
		height: 0.64rem;
		line-height: 0.64rem;
		color:rgb(255,255,255);
		display: flex;
		justify-content: space-around;
	}
	.title_line .line1{
		margin-right:0.48rem;
		margin-top:0.32rem; 
		width:4.48rem;
		height:0.04rem;
		background: rgba(255,255,255,0.2);
	}
	.title_line .line2{
		margin-left:0.48rem;
		margin-top:0.32rem; 
		width:4.48rem;
		height:0.04rem;
		background: rgba(255,255,255,0.2);
	}
	.discount_msg{
		margin:0rem 1.44rem 0rem 1.44rem;
		padding:0.96rem 0.48rem 1.12rem 0.48rem;
		list-style: none;
	}
	.discount_msg li{
		height:1.28rem;
		line-height:1.32rem;
		margin-bottom:0.48rem;
		padding-left:1.44rem;
		font-size: 0.48rem;
		font-weight: 200;
		color:rgb(255,255,255);
		text-align: left;
	}
	.notice_msg{
		margin:0rem 1.92rem 2rem 1.92rem;
		padding-top:0.96rem;
		font-size: 0.45rem;
		font-weight: 200;
		line-height:0.96rem;
		color: rgb(255,255,255);
		text-align: left;
		word-break: break-all;
	}
	.close{
		width:2rem;
		height:2rem;
		font-size: 2.56rem;
		background: rgba(255,255,255,0.5);
		border-radius: 50%;
	}
	.clear{
		margin-bottom:2.56rem;
	}
</style>