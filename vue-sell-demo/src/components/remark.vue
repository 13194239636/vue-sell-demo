<template>
	<div id="remark">
		<div class="score">
			<div class="score_num">
				<p class="score_num1">{{sellerData.score}}</p>
				<p class="score_num2">综合评分</p>
				<p class="score_num3">高于周边商家{{sellerData.rankRate}}%</p>
			</div>
			<div class="score_star">
				<ul>
					<li>
						<span class="score_star_name">服务态度</span>
						<app-start :size=24 :score='sellerData.serviceScore'></app-start>
						<span class="score_star_score">{{sellerData.serviceScore}}</span></li>
					<li>
						<span class="score_star_name">服务态度</span>
						<app-start :size=24 :score='sellerData.serviceScore'></app-start>
						<span class="score_star_score">{{sellerData.serviceScore}}</span></li>
				</ul>
				<p class="delivery_time"><span class="delivery_time_name">送达时间</span><span class="delivery_time_detail">{{sellerData.deliveryTime}}分钟</span></p>
			</div>
		</div>
		<div class="remark">
			<div class="remark_num">
				<ul>
					<li>全部<span>{{ratingsData.length}}</span></li>
					<li>满意<span>{{satifyNum}}</span></li>
					<li>不满意<span>{{ratingsData.length-satifyNum}}</span></li>
				</ul>
			</div>
			<div class="remark_select">
				<img :src="'src/resource/SVG/'+iconselect[iconselectIndex]" @click="onlyLookContent()">
				只看有内容的评价
			</div>
			<ul class="remark_detail">
				<li v-for="item in computedRatingsData">
					<img class="headpic" :src="item.avatar">
					<div class="remark_content">
						<p class="remarker_name">
							{{item.username}}
							<span class="time">{{item.rateTime | formattingTime}}</span>
						</p>
						<p class="remark_star">
							<app-start :size=24 :score='item.score'></app-start>
							<span>{{item.deliveryTime}}分钟送达</span>
						</p>
						<p class="remark_main">{{item.text}}</p>
						<p class="remark_remarks">
							<img src="../resource/SVG/thumb_up.svg">
							<p class="span_group">
								<span v-for="itemRecommend in item.recommend">{{itemRecommend}}</span>
							</p>
						</p>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import appStart from './start.vue'
	export default{
		data(){
			return {
				icon:['thumb_up.svg','thumb_down.svg'],
				iconselect:['check_circle.svg','check_circle_blue.svg'],
				iconselectIndex:0
			}
		},
		methods:{
			onlyLookContent(){
				this.iconselectIndex=this.iconselectIndex==0?1:0;
			}
		},
		computed:{
			computedRatingsData(){
				if(!this.iconselectIndex)return this.ratingsData;
				let arr=[];
				this.ratingsData.forEach(function(item){
					if(item.text!=""){
						arr.push(item);
					}
				})
				return arr;
			},
			satifyNum(){
				let i=0;
				this.ratingsData.forEach(function(item){
					if(item.rateType==0){
						i++
					}
				})
				return i;
			},
			/*starSize(){
				let oHTML = document.html||document.documentElement;
				return oHTML.getBoundingClientRect().width>=768?36:24;
			}*/
		},
		props:{
			sellerData:{
				type:Object
			},
			ratingsData:{
				type:Array
			}
		},
		components:{
			appStart
		}
	}
</script>
<style scoped>
#remark{
	width:100%;
	height:18rem;
	overflow-y: scroll;
	overflow-x: hidden;
}
.score{
	width:100%;
	padding-top:0.72rem;
}
.score::after{
	display: block;
	content: "";
	width:100%;
	height:0.72rem;
	background: rgba(147,153,159,0.2);
}
.score .score_num{
	display: inline-block;
	float: left;
	width:5.5rem;
	border-right:1px solid rgba(147,153,159,0.4);
}

.score .score_num .score_num1{
	font-size: 0.96rem;
	line-height: 1.12rem;
	color:rgb(255,153,0);
	margin-bottom:0.24rem;
	text-align: center;
}
.score .score_num .score_num2{
	font-size: 0.48rem;
	line-height: 0.48rem;
	color:rgb(7,17,27);
	margin-bottom: 0.32rem;
	text-align: center;
}
.score .score_num .score_num3{
	font-size: 0.4rem;
	line-height: 0.4rem;
	color: rgb(147,153,159);
	margin-bottom:0.24rem;
	text-align: center;
}
.score_star{
	padding-left:6.46rem;
	padding-right:0.96rem;
	padding-bottom:0.4rem;
}
.score_star ul li{
	display: flex;
	align-items: center;
}
.score_star ul li #star{
	position: relative;
	top:0.14rem;
}
.score_star ul li,.score_star .delivery_time{
	font-size: 0.48rem;
	line-height: 0.72rem;
	color:rgb(7,17,27);
	margin-bottom: 0.32rem;
}
.score_star ul li .score_star_name,.score_star .delivery_time .delivery_time_name{
	margin-right:0.48rem;
}
.score_star ul li .score_star_score{
	font-size: 0.48rem;
	line-height:0.72rem;
	color:rgb(255,153,0);
	margin-left:0.32rem;
}
.score_star .delivery_time span{
	font-size: 0.48rem;
	line-height: 0.72rem;
	color:rgb(7,17,27);
	margin-bottom: 0.32rem;
}
.score_star .delivery_time .delivery_time_detail{
	font-size: 0.48rem;
	line-height: 0.72rem;
	color:rgb(147,153,159);
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
.remark .remark_detail{
	margin-bottom: 1.2rem;
}
.remark .remark_detail li{
	padding:0.72rem;
	border-bottom:0.04rem solid rgba(147,153,159,0.4);
}
.remark .remark_detail li .headpic{
	float: left;
	display: inline-block;
	width:1.12rem;
	height:1.12rem;
	border-radius:50%;
}
.remark .remark_detail li  .remark_content {
	padding-left:1.6rem;
}
.remark .remark_detail li  .remark_content .remarker_name{
	font-size:0.4rem;
	line-height: 0.48rem;
	color:rgb(7,17,27);
	margin-bottom:0.16rem;
}
.remark .remark_detail li  .remark_content .remarker_name .time{
	float: right;
	font-size:0.4rem;
	line-height: 0.48rem;
	color:rgb(147,153,159);
	font-weight: 200;
}
.remark .remark_detail li  .remark_content .remark_star{
	display: flex;
	align-items: center;
	margin-bottom:0.24rem;
}
.remark .remark_detail li  .remark_content .remark_star span{
	display: inline-block;
	font-size:0.4rem;
	line-height:1rem;
	color:rgb(147,153,159);
	font-weight: 200;
	margin-left:0.2rem;
}
.remark .remark_detail li  .remark_content .remark_main{
	font-size: 0.48rem;
	line-height: 0.72rem;
	margin-bottom:0.32rem;
	word-break: break-all;
}
.remark .remark_detail li  .remark_content .span_group{
	width:11rem;
}
.remark .remark_detail li  .remark_content .remark_remarks,.remark .remark_detail li  .remark_content .span_group{
	display: inline-block;
}
.remark .remark_detail li  .remark_content .remark_remarks img{
	width:0.64rem;
	height:0.64rem;
	padding-right:0.32rem;
	padding-top:0.35rem;
}

.remark .remark_detail li  .remark_content .span_group{
	overflow-y: hidden;
	overflow-x: scroll;
}
.remark .remark_detail li  .remark_content .span_group span{
	width:3rem;
	overflow-x: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	font-size:0.36rem;
	line-height: 0.72rem;
	color:rgb(147,153,159);
	padding:0rem 0.24rem;
	margin-right:0.32rem;
	border:0.04rem solid rgba(7,17,27,0.1);
	border-radius: 0.08rem;
}
</style>