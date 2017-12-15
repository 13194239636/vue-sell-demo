<template>
	<div id="footer" :addGoodstocar='addGoods' v-if="sellerData">
		<div class="shopping_car_detail" v-show="shoppingcarShow">
			<div class="shopping_car_detail_bg"></div>
			<div class="_detail">
				<p class="_detail_title">
					购物车
					<a href="#" @click="clearCar()">清空</a>
				</p>
				<ul>
					<li v-for="item in shoppingcar">
						<span class="goods_name">
							{{item.name}}
						</span>

						<car-control class="control_goods" :food="item"></car-control>
						
						<span class="goods_price">
							<span>￥</span>
							{{item.price*item.num}}
						</span>
					</li>
				</ul>
			</div>
		</div>
		<div class="shopping_message"  @click='showShoppingCar()'>
			<div class="shopping-car-background" >
				<div class="shopping-car-background-padding" :class='[shoppingcarstyle[0]]'></div>
			</div>
			<div class="shopping-car" :class='[shoppingcarstyle[1]]'></div>
			<p class="price">￥{{totalPrice}}</p>
			<p class="shopping_detail">另需要配送费￥{{sellerData.deliveryPrice}}</p>
		</div>
		<div class="to_shopping_no" v-if='!showToShopping'>￥{{sellerData.minPrice}}元起送</div>
		<div class="to_shopping"  v-if='showToShopping'>付款</div>
		<div class="totalNum" v-if="shoppingcar.length">{{shoppingcar.length}}</div>
	</div>
</template>
<script type="text/javascript">
	import Vue from 'vue'
	import carControl from './carcontrol.vue'
	export default{
		data(){
			return {
				shoppingcarShow:false,
				shoppingcarstyle:['bg1','shopping-car-normal','bg2','shopping-car-blue'],
				toShoppingShow:false
			}
		},
		computed:{
			shoppingcar(){
				var arr = [];
				for(let i=0;i<this.goodsData.length;i++){
					for(let j=0;j<this.goodsData[i].foods.length;j++){
						if(this.goodsData[i].foods[j].num){
							arr.push(this.goodsData[i].foods[j]);
						}
					}
				}
				return arr;
			},
			totalPrice(){
				var tp = 0;
				const temparr = this.shoppingcar;
				for(let i=0;i<temparr.length;i++){
					tp+=temparr[i].price*temparr[i].num;
				}
				return tp;
			},
			showToShopping(){
				return this.totalPrice>=this.sellerData.minPrice?true:false;
			}
		},
		props:{
			sellerData:{
				type:Object
			},
			goodsData:{
				type:Array
			}
		},
		components:{
			carControl
		},
		methods:{
			addGoods(goods){
				this.shoppingcar.push(goods);
			},
			showShoppingCar(){
				this.shoppingcarShow=!this.shoppingcarShow;
				const arr = [];
				arr.push(this.shoppingcarstyle.pop());
				arr.push(this.shoppingcarstyle.pop());
				const temp = arr.pop()
				this.shoppingcarstyle.unshift(arr.pop());
				this.shoppingcarstyle.unshift(temp);

			},
			clearCar(){
				for(let i=0;i<this.goodsData.length;i++){
					for(let j=0;j<this.goodsData[i].foods.length;j++){
						if(this.goodsData[i].foods[j].num){
							Vue.delete(this.goodsData[i].foods[j],'num');
						}
					}
				}
			}
		}
	}
</script>
<style scoped>
	#footer{
		position:fixed;
		bottom:0.0rem;
		left:0.0rem;
		color: rgba(255,255,255,0.4);
		display: flex;
		justify-content: center;
		align-items: stretch;
	}
	#footer .shopping_message{
		padding:0rem 0.4rem 0rem 1.6rem;
		background: #141d27;
		display: flex;
		align-items: center;
	}
	#footer .shopping_message .shopping-car-background{
		display: inline-block;
		width:1.76rem;
		height:1.76rem;
		padding:0.24rem;
		margin-left:0.1rem;
		border:none;
		border-radius: 50%;
		background-color: #141d27;
		position: fixed;
		bottom:0.32rem;
		left:0.16rem;
		text-align: center;
		line-height: 1.76rem;
	}
	#footer .shopping_message .shopping-car-background .shopping-car-background-padding{
		display: inline-block;
		width:1.76rem;
		height:1.76rem;
		border:none;
		border-radius: 50%;
	}
	#footer .shopping_message .shopping-car-background .bg1{
		background-color: #51565c;
	}
	#footer .shopping_message .shopping-car-background .bg2{
		background-color: rgb(0,160,220);
	}
	#footer .shopping_message .shopping-car{
		display: inline-block;
		width:1.76rem;
		height:1.76rem;
		border:none;
		border-radius: 50%;
		position: fixed;
		bottom:0.55rem;
		left:0.5rem;
		z-index: 1;
	}
	#footer .shopping_message .shopping-car-normal{
		background: url(../resource/SVG/shopping_cart.svg) no-repeat center center;
		background-size: 1.2rem 1.2rem;
	}
	#footer .shopping_message .shopping-car-blue{
		background: url(../resource/SVG/shopping_cart_blue.svg) no-repeat center center;
		background-size: 1.2rem 1.2rem;
	}
	#footer .shopping_message .price{
		display: inline-block;
		font-weight: 350;
		font-size:0.8rem;
		text-align: center;
		width:3rem;
		height: 0.96rem;
		line-height:0.96rem;
		color:rgba(255,255,255,0.4);
		margin:0.48rem 0.4rem 0.48rem 0rem;
		padding:0rem 0.02rem 0rem 0.2rem;
		border-right:0.04rem solid rgba(255,255,255,0.1);
	}
	#footer .shopping_message .shopping_detail{
		display: inline-block;
		font-weight: 350;
		font-size: 0.64rem;
		height: 0.96rem;
		line-height:0.96rem;
		color:rgba(255,255,255,0.4);
		padding-left:0.3rem;
	}
	#footer .to_shopping_no{
		padding:0.48rem 0.32rem 0rem 0.32rem;
		line-height: 0.96rem;
		color:rgba(255,255,255,0.4);
		font-size: 0.64rem;
		font-weight: 350;
		width:3.54rem;
		text-align: center;
		background: #51565c;
	}
	#footer .to_shopping{
		padding:0.48rem 0.32rem 0rem 0.32rem;
		line-height: 0.96rem;
		color:rgba(255,255,255,0.8);
		font-size: 0.7rem;
		font-weight: 350;
		letter-spacing: 0.1rem;
		width:3.54rem;
		text-align: center;
		background:rgb(240,20,20);
	}
	.shopping_car_detail{
		width:100%;
		height:100%;
		position: fixed;
		top:0px;
		left:0px;
		z-index: -1;
	}
	.shopping_car_detail .shopping_car_detail_bg{
		width:100%;
		height:100%;
		background: rgba(7,17,27,0.6);
		filter: blur(0.4rem);
		position: fixed;
		top:0px;
		left:0px;
		z-index: -1;
	}
	.shopping_car_detail ._detail{
		position: fixed;
		width:100%;
		bottom:1.92rem;
		left:0rem;
	}
	.shopping_car_detail ._detail ._detail_title{
		padding:0rem 0.72rem;
		background: #f3f5f7;
		height:1.6rem;
		font-size:0.56rem;
		line-height: 1.6rem;
		font-weight: 200;
		color:rgb(7,17,27);
	}
	.shopping_car_detail ._detail ._detail_title::after{
		content: "";
		display: block;
		background: rgba(7,17,27,0.1);
		width:100%;
		height:0.04rem;
	}
	.shopping_car_detail ._detail ._detail_title a{
		float:right;
		font-size: 0.48rem;
		line-height: 1.6rem;
		color:rgb(0,160,200);
	}
	.shopping_car_detail ._detail ul{
		height:7.08rem;
		padding-bottom: 0.6rem;
		background: white;
		overflow-y: scroll;
	}
	.shopping_car_detail ._detail li{
		height:1.92rem;
		line-height:1.92rem;
		padding:0.48rem 0rem;
		margin:0rem 0.96rem;
		border-bottom:0.04rem solid rgba(7,17,27,0.1);
	}
	.shopping_car_detail ._detail li .goods_name{
		display: inline-block;
		font-size: 0.56rem;
		line-height: 0.8rem;
		color:rgb(7,17,27);
	}
	.shopping_car_detail ._detail li .goods_price{
		float: right;
		margin-top:0.56rem;
		line-height: 0.8rem;
		color:rgb(240,20,20);
		font-size: 1.12rem;
		font-weight: 700;
		margin-right:0.48rem;
	}
	.shopping_car_detail ._detail li .control_goods{
		float: right;
		padding-top:0.2rem;
	}
	.shopping_car_detail ._detail li .goods_price span{
		margin-right:-0.4rem;
		font-size: 0.8rem;
		font-weight: normal;
	}
	.totalNum{
		position:absolute;
		bottom:1.76rem;
		left:1.76rem;
		width:0.96rem;
		border-radius: 0.24rem;
		background:rgb(240,20,20);
		font-size: 0.36rem;
		text-align: center;
		line-height: 0.64rem;
		color:rgb(255,255,255);
		font-weight: 700;
		box-shadow:0rem 0.08rem 0.16rem 0rem rgba(0,0,0,0.4);
		z-index:10;
	}



	@media (min-device-pixel-ratio:1.5) and (-webkit-min-device-pixel-ratio:1.5){
		.shopping_car_detail ._detail ._detail_title::after{
			transform:scaleY(0.7);
			-webkit-transform:scaleY(0.7);
		}
	}
	@media (min-device-pixel-ratio:2) and (-webkit-min-device-pixel-ratio:2){
		.shopping_car_detail ._detail ._detail_title::after{
			transform:scaleY(0.5);
			-webkit-transform:scaleY(0.5);
		}
	}
</style>