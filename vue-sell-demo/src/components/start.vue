<template>
	<div id="star">
		<div :class="starType">
			<span v-if='itemClasses' v-for="itemClass in itemClasses" class="star-item" :class="itemClass"></span>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return {
				starLen:5
			}
		},
		props:{
			size:{
				type:Number,
				default:24
			},
			score:{
				type:Number
			}
		},
		computed:{
			starType(){
				return "start-"+this.size;
			},
			itemClasses(){
				const arr=[];
				const temp1 = Math.floor(this.score);
				const temp2 = Math.ceil(this.score);
				const temp3 = Math.round(this.score);
				if(this.score==(temp1+temp2)/2){
					for(let i=0;i<temp1;i++){
						arr.push('on');
					}
					arr.push('half');
					for(let i=0;i<this.starLen-temp1-1;i++){
						arr.push('off');
					}
				}else if(this.score<(temp1+temp2)/2){
					for(let i=0;i<temp1;i++){
						arr.push('on');
					}
					for(let i=0;i<this.starLen-temp1;i++){
						arr.push('off');
					}
				}else if(this.score>(temp1+temp2)/2){
					for(let i=0;i<temp2;i++){
						arr.push('on');
					}
					for(let i=0;i<this.starLen-temp2;i++){
						arr.push('off');
					}
				}else{
					for(let i=0;i<this.starLen;i++){
						arr.push('off');
					}
				}
				return arr;
			}
		}
	}
</script>
<style scoped>
	#star{
		display: inline-block;
	}
	.start-48{
		display: inline-block;
		height:1.6rem;
	}
	.start-48 .star-item{
		width:1.6rem;
	}
	.start-48 .on{
		background:url(../resource/img/star48_on@2x.png) no-repeat  left center;
		background-size: cover;
	}
	.start-48 .off{
		background:url(../resource/img/star48_off@2x.png) no-repeat  left center;
		background-size: cover;
	}
	.start-48 .half{
		background:url(../resource/img/star48_half@2x.png) no-repeat  left center;
		background-size: cover;
	}
	.start-36{
		display: inline-block;
		height:1.2rem;
	}
	.start-36 .star-item{
		width:1.2rem;
	}
	.start-36 .on{
		background:url(../resource/img/star36_on@2x.png) no-repeat left center;
		background-size: cover;
	}
	.start-36 .off{
		background:url(../resource/img/star36_off@2x.png) no-repeat left center;
		background-size: cover;
	}
	.start-36 .half{
		background:url(../resource/img/star36_half@2x.png) no-repeat left center;
		background-size: cover;
	}
	.start-24{
		display: inline-block;
		height:0.8rem;
	}
	.start-24 .star-item{
		width:0.8rem;
	}
	.start-24 .on{
		background:url(../resource/img/star24_on@2x.png) no-repeat left center;
		background-size: cover;
	}
	.start-24 .off{
		background:url(../resource/img/star24_off@2x.png) no-repeat left center;
		background-size: cover;
	}
	.start-24 .half{
		background:url(../resource/img/star24_half@2x.png) no-repeat left center;
		background-size: cover;
	}
	.star-item{
		height:100%;
		display: inline-block;
	}
</style>