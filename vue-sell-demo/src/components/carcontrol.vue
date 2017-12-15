<template>
	<div class="control_goods">
		<transition-group name="fade">
			<a href="#" class="decrease" @click="decreaseNum()" v-if="food.num" key="food.num">
				<img src="../resource/SVG/remove_circle_outline.svg">
			</a>
			<span class="goods_number" v-if="food.num" key="food.num+1">{{food.num}}</span>
		</transition-group>
		<a href="#" class="increase" @click="increaseNum()">
			<img src="../resource/SVG/add_circle.svg">
		</a>
		<!-- <transition name="move">
			<a href="#" v-if="move" class="increase-move" @click="increaseNum()">
				<img src="../resource/SVG/add_circle.svg">
			</a>
		</transition> -->
	</div>
</template>
<script>
	import Vue from 'vue'

	export default{
		data(){
			return {
				move:false
			}
		},
		props:{
			food:{
				type:Object
			}
		},
		methods:{
			increaseNum(){
				// this.move=true;
				if(typeof this.food.num == "undefined"){
					Vue.set(this.food,"num",1);
				}else{
					this.food.num++;
				}
			},
			decreaseNum(){
				if(this.food.num){this.food.num--}
					// else{this.move=false}
			}
		}
	}
</script>
<style scoped>
	.control_goods{
		display: flex;
		justify-content: center;
		align-items: center;
		float: right;
	}
	.control_goods .goods_number{
		position: relative;
		top:-0.34rem;
		font-size: 0.4rem;
		line-height: 0.96rem;
		color:rgb(147,153,169);
		font-weight: normal;
	}
	.control_goods img{
		display: inline-block;
		width:1rem;
		font-size: 0.96rem;
		line-height: 0.96rem;
	}
	.control_goods .increase{
		padding-left:0.48rem;
	}
	.control_goods .decrease{
		padding-right:0.48rem;
	}
	.control_goods .increase-move{
		position:absolute;
		right:0rem;
		top:0rem;
		opacity: 0;
	}
	/* .move-enter-active{
		animation: incremove 5s;
	}
	.move-leave-active{
		animation:return 5s;
	}
	@keyframes incremove{
		0%{right:0rem;top:0rem; opacity:1}
		20%{right:1rem;top:-2rem; opacity:1}
		40%{right:2rem;top:-3rem; opacity:1}
		60%{right:3rem;top:0rem; opacity:1}
		80%{right:5rem;top:3rem; opacity:1}
		100%{right:9rem;top:6rem; opacity:1}
	}
	@keyframes return{
		100%{opacity: 0;right:0rem;top:0rem;}
	} */
	.fade-enter-active,.fade-leave-active{
		transition:all 0.4s linear;
	}
	.fade-enter,.fade-leave-to{
		opacity: 0;
	}
</style>