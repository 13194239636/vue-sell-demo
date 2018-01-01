<template>
	<div id="goods" v-if="goodsData">
		<ul class="goods_nav">
			<li v-for="(item,key) in goodsData"  :class="{'selected':selectIndex==key}" @click='selected(key)'>
				<img v-if="item.type>=0" :src="'src/resource/img/'+imgMap[item.type]">
				{{item.name}}
			</li>
		</ul>
		<div id="food_wrapper">
			<div class="foods" v-for="(item,index) in goodsData">
				<p class="foods_title">{{item.name}}</p>
				<div v-for="(food,key) in item.foods">
					<div class="foods_message">
						<img class="foods_pic" :src="food.image">
						<div class="foods_detail">
							<router-link  class="foods_name" v-if="food.name" tag="p" :to="'/detail/'+index+'/good/'+key">{{food.name}}</router-link>
							<p class="foods_type" v-if="food.description">{{food.description}}</p>
							<p class="foods_sellnum"><span v-if="food.sellCount">月售{{food.sellCount}}份</span v-if="food.rating">好评率{{food.rating}}%</p>
							<div class="price_and_num" v-if="food.price">
								
								<span>￥</span>{{food.price}}
								<span id="oldPrice" v-if="food.oldPrice">￥{{food.oldPrice}}
								<div class="line" v-if="food.oldPrice"></div>
								</span>

								<car-control :food="food"></car-control>
								
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Vue from 'vue'
	import carControl from './carcontrol.vue'
	export default{
		data(){
			return {
				perpareBuy:[],
				selectIndex:0,
				oFW:{},
				oGN:{},
				foodsTop:0,
				navTop:0,
				imgMap:['decrease_1@2x.png','discount_1@2x.png','guarantee_1@2x.png','invoice_1@2x.png','special_1@2x.png'],
				navHeight:[],
				foodHeight:[]
			}
		},
		watch:{
			foodsTop:function(){
						this.initArray();
						for(let i=0;i<this.navHeight.length;i++){
							if(i==this.navHeight.length-1||this.foodsTop<this.navHeight[i+1]){
								this.selectIndex = i;
								this.oGN.scrollTop = this.foodHeight[this.selectIndex];
								break;
							}
						}
					}
		},
		mounted () {
			this.initArray();
			this.oFW = document.getElementById("food_wrapper");
			this.oGN = document.getElementsByClassName("goods_nav")[0];

		 	this.oFW.addEventListener('scroll', this.handleScroll1);
		 	this.oGN.addEventListener('scroll', this.handleScroll2);
		 	
		},
		methods:{
			handleScroll1(){
				this.foodsTop = this.oFW.scrollTop;
			},
			handleScroll2(){
				this.navTop = this.oGN.scrollTop;
			},
			selected(key){
				this.initArray();
				this.selectIndex = key;
				this.oFW.scrollTop = this.navHeight[this.selectIndex];
			},
			initArray(){
				let wrap = document.getElementById("food_wrapper");
			 	let title = wrap.getElementsByClassName("foods_title");
			 	let nav = document.getElementsByClassName("goods_nav")[0];
			 	let navLi = nav.getElementsByTagName("li");
			 	for(let i=0;i<title.length;i++){
			 		this.navHeight.push(title[i].offsetTop-wrap.offsetTop);
			 	}

				for(let i=0;i<navLi.length;i++){
					this.foodHeight.push(navLi[i].offsetTop-nav.offsetTop);
				}
			},
		},
		components:{
			carControl
		},
		props:{
			goodsData:{
				type:Array
			}
		}
	}
</script>
<style scoped>
	#goods{
		position: absolute;
		width:100%;
		overflow: hidden;
		z-index:-1;
		height:16rem;
		padding-bottom:2rem;
	}
	#food_wrapper{
		padding-bottom:1.4rem;
	}
	.goods_nav{
		float: left;
		width:3.2rem;
		height:16rem;
		background: #f3f5f7;
		overflow-y: scroll;

	}
	.goods_nav li img{
		width:0.7rem;
		height: auto;
	}
	.goods_nav_fixed{
		position: fixed;
		top:0rem;
		left:0rem;
	}
	.goods_nav li{
		display: flex;
		justify-content: center;
		align-items: center;
		height:1.6rem;
		font-size: 0.48rem;
		color:black;
		font-weight: 200;
		line-height: 0.56rem;
		padding:0.56rem 0.2rem;
	}
	.goods_nav li.selected{
		font-weight: normal;
		background: white;
	}
	#food_wrapper{
		display: block;
		height: 16rem;
		overflow-y:scroll;
		overflow-x: hidden;
	}
	.foods{
		display:block;
	}
	.foods .foods_title{
		width: 100%;
		height:1.04rem;
		font-size: 0.48rem;
		line-height: 1.04rem;
		color:rgb(147,153,159);
		border-left:0.16rem solid #d9dde1;
		background: #f3f5f7;
		padding-left:0.48rem;
	}
	.foods .foods_message{
		height:3.52rem;
		padding:0.72rem;
	}
	.foods .foods_message .foods_pic{
		float: left;
		display: inline-block;
		width:2rem;
		height:2rem;
		margin-right:0.4rem;
	}
	.foods .foods_message .foods_detail{
		display: inline-block;
		width:76%;
		margin-top:0.08rem;
	}
	.foods .foods_message .foods_detail .foods_name{
		width: 100%;
		height: 0.4rem;
		line-height:0.56rem;
		font-size: 0.56rem;
		color:rgb(7,17,27);
		margin-bottom: 0.32rem;
	}
	.foods .foods_message .foods_detail .foods_type{
		width:100%;
		font-size: 0.4rem;
		line-height: 0.4rem;
		color:rgb(147,153,159);
		margin-bottom: 0.32rem;
	}
	.foods .foods_message .foods_detail .foods_sellnum{
		width:100%;
		font-size: 0.4rem;
		line-height: 0.4rem;
		color:rgb(147,153,159);
		margin-bottom: 0.32rem;
	}
	.foods .foods_message .foods_detail .foods_sellnum span{
		margin-right:0.48rem;
	}
	.foods .foods_message .foods_detail .price_and_num{
		width: 100%;
		font-size:0.56rem;
		font-weight: 700;
		line-height: 0.96rem;
		color:rgb(240,20,20);
	}
	#oldPrice{
		position: relative;
	}
	.foods .foods_message .foods_detail .price_and_num span{
		font-size: 0.4rem;
		font-weight: normal;
		line-height: 0.96rem;
		color:rgb(147,153,159);
	}
	#oldPrice .line{
		width:0.6rem;
		height:0.04rem;
		position: absolute;
		top:0.26rem;
		left:0.2rem;
		background: rgb(147,153,159);
	}
</style>
