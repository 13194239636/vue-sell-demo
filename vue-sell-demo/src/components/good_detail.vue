<template>
	<div id="goods_detail" v-if="goodsData">
		<div class="back" @click="back()">
			<img src="../resource/SVG/arrow_lift.svg">
		</div>
		<div class="title">
			<img class="title_pic" :src="food.image">
			<div class="good_price">
				<p class="title_name">{{food.name}}</p>
				<p class="good_sellnum">月售<span>{{food.sellCount}}份</span>好评率{{food.rating}}}%</p>
				<p class="price_detail_addcar">
					￥
					<span class="currentPrice">{{food.price}}</span>
					<span class="oldPrice" v-if="food.oldPrice">￥{{food.oldPrice}}</span>
					<span class="addCar"  v-if="!food.num" @click="increaseNum()">加入购物车</span>
					<div class="control_goods" v-if="food.num">
						<a href="#" class="decrease" @click.prevent="decreaseNum()">
							<img src="../resource/SVG/remove_circle_outline.svg">
						</a>
						<span class="goods_number">{{food.num}}</span>
						<a href="#" class="increase" @click.prevent="increaseNum()">
							<img src="../resource/SVG/add_circle.svg">
						</a>
					</div>
				</p>
			</div>
		</div>
		<div class="introudce">
			<p class="name">商品介绍</p>
			<p class="content">{{food.info}}</p>
		</div>
		<div class="remark">
			<div class="remark_num">
				<ul>
					<li>全部<span>{{allRatingsNum}}</span></li>
					<li>推荐<span>{{likeRatingsNum}}</span></li>
					<li>吐槽<span>{{allRatingsNum-likeRatingsNum}}</span></li>
				</ul>
			</div>
			<div class="remark_select">
				<img :src="'src/resource/SVG/'+iconSelect[iconSelectIndex]" @click="changce()">
				只看有内容的评价
			</div>

			<ul class="remark_detail">
				<li v-for="item in filteRatings">
					<p class="name_time">
						<span class="name">
							{{item.username}}
							<img :src="item.avatar">
						</span>
						<span class="time">{{item.rateTime | formattingTime}}</span>
					</p>
					<p class="remark_content">
						<img :src="'src/resource/SVG/'+iconMap[item.rateType]">
						{{item.text}}
					</p>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import Vue from'vue'
	export default{
		data(){
			return {
				iconMap:['thumb_up.svg','thumb_down.svg'],
				iconSelect:['check_circle.svg','check_circle_blue.svg'],
				iconSelectIndex:0
			}
		},
		methods:{
			changce(){
				this.iconSelectIndex=this.iconSelectIndex==0?1:0;
			},
			increaseNum(){
				if(typeof this.food.num == "undefined"){
					Vue.set(this.food,"num",1);
				}else{
					this.food.num++;
				}
			},
			decreaseNum(){
				if(this.food.num){this.food.num--};
			},
			back(){
				history.back();
			}
		},
		computed:{
			food(){
				return this.goodsData[parseInt(this.$route.params.index)].foods[parseInt(this.$route.params.key)];
			},
			filteRatings(){
				return this.iconSelectIndex==1?this.hasContentRatings:this.food.ratings;;
			},
			hasContentRatings(){
				var arr=[];
				this.food.ratings.forEach(function(item){
					if(item.text)arr.push(item);
				})
				return arr;
			},
			allRatingsNum(){
				return this.food.ratings.length;
			},
			likeRatingsNum(){
				let i=0;
				this.food.ratings.forEach(function(item){
					if(item.rateType==0){
						i++;
					}
				})
				return i;
			}
		},
		props:{
			goodsData:{
				type:Array
			}
		}
	}
</script>
<style scoped>
#goods_detail{
	width:100%;
	margin-bottom: 3rem;
}
.back{
	width:100%;
	height:0.8rem;
	background: rgba(147,153,159,0.4);
	padding:0.24rem 0rem;
}
.back img{
	float:left;
	width:0.8rem;
	height:0.8rem;
	padding-left:0.4rem;
	opacity: 0.6;
}
.title{
	width:100%;
	border-bottom:0.64rem solid #f3f5f7;
}
.title .title_pic{
	width:100%;
	height:15.0rem;
}
.title .good_price{
	padding:0.72rem;
	position:relative;
}
.title .good_price .title_name{
	font-size:0.56rem;
	font-weight: 700;
	color:rgb(7,17,27);
	line-height: 0.56rem;
	margin-bottom: 0.32rem
}
.title .good_price .good_sellnum{
	font-size:0.4rem;
	line-height: 0.4rem;
	color:rgb(147,153,159);
	margin-bottom: 0.72rem;
}
.title .good_price .good_sellnum span{
	margin-right: 0.48rem;
	margin-bottom: 0.72rem;
}
.title .good_price .price_detail_addcar{
	font-size: 0.4rem;
	color:rgb(240,20,20);
	font-weight: normal;
	line-height: 0.96rem;
}
.title .good_price .control_goods{
	display: flex;
	justify-content: center;
	align-items: center;
	position:absolute;
	right:0.72rem;
	bottom:0.6rem;
}
.title .good_price .control_goods .goods_number{
	position: relative;
	top:-0.08rem;
	font-size: 0.4rem;
	line-height: 0.96rem;
	color:rgb(147,153,169);
	font-weight: normal;
}
.title .good_price img{
	display: inline-block;
	width:1rem;
	font-size: 0.96rem;
	line-height: 0.96rem;
}
.title .good_price .increase{
	padding-left:0.48rem;
}
.title .good_price .decrease{
	padding-right:0.48rem;
}
.title .good_price .price_detail_addcar .currentPrice{
	font-size:0.56rem;
	font-weight: 700;
	margin-right:0.1rem;
}
.title .good_price .price_detail_addcar .oldPrice{
	color:rgb(147,153,157);
}
.title .good_price .price_detail_addcar  .addCar{
	float: right;
	padding:0.24rem 0.48rem;
	width:2.96rem;
	line-height:0.48rem;
	color:white;
	font-size: 0.4rem;
	text-align: center;
	border-radius: 0.96rem;
	background:rgb(0,160,220);
	position: relative;
	top:-0.24rem;
}
.introudce{
	padding:0.72rem;
	border-bottom:0.64rem solid #f3f5f7;
}
.name{
	text-align: left;
	font-size: 0.56rem;
	line-height: 0.56rem;
	color:rgb(7,17,27);
	margin-bottom: 0.24rem;
}
.introudce .content{
	padding:0.32rem;
	font-size: 0.48rem;
	line-height: 0.96rem;
	font-weight: 200;
	color:rgb(77,85,93);
	word-break: break-all;
}
.remark{
	width:100%;
}
.remark .remark_num{
	padding:0.72rem 0rem;
	margin:0rem 0.72rem;
	border-bottom:0.04rem solid rgba(147,153,159,0.4);

}
.remark .remark_num ul{
	width:100%;
	height:100%;
}
.remark .remark_num li{
	display: inline-block;
	padding: 0.32rem;
	margin-right:0.32rem;
	font-size: 0.48rem;
	text-align: center;
}
.remark .remark_num li span{
	display: inline-block;
	padding-left:0.1rem;
	transform:scaleX(0.7) scaleY(0.7);
	-webkit-transform:scaleX(0.7) scaleY(0.7);
	position: relative;
	top:0.05rem;
}
.remark .remark_num li:nth-child(1){
	background: #00a0dc;
	color:#f9fdff;
}
.remark .remark_num li:nth-child(2){
	background: #ccecf7;
	color:#4c535d;
}
.remark .remark_num li:nth-child(3){
	background: #eaebed;
	color:#465059;
}
.remark .remark_select{
	padding:0.72rem;
	font-size: 0.48rem;
	color:rgb(147,153,159);
	line-height: 0.48rem;
	display: flex;
	align-items: center;
	border-bottom:0.04rem solid rgba(147,153,159,0.4);
}
.remark .remark_select img{
	display: inline-block;
	width:1rem;
	height:1rem;
	padding-right:0.2rem;
}
.remark .remark_detail {
	padding:0rem 0.72rem;
}
.remark .remark_detail li{
	padding:0.64rem 0rem;
	border-bottom: 0.04rem solid rgba(7,17,27,0.1)
}
.remark .remark_detail li .name_time{
	font-size: 0.4rem;
	line-height: 0.48rem;
	color:rgb(147,153,159);
	margin-bottom: 0.24rem;
}
.remark .remark_detail li .name_time .name{
	float: right;
}
.remark .remark_detail li .name_time .name img{
	width:0.48rem;
	height:0.48rem;
	margin-left:0.24rem;
	border-radius: 50%;
}
.remark .remark_detail li .remark_content{
	display:flex;
	align-items: center;
	font-size: 0.48rem;
	line-height: 0.64rem;
	color:rgb(7,17,27);
}
.remark .remark_detail li .remark_content img{
	width:0.48rem;
	height:0.48rem;
	padding-right:0.16rem;
	float: left;
}
</style>