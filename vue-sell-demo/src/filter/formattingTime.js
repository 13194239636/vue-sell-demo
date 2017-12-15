import Vue from 'vue'

Vue.filter('formattingTime',function(value){
	if(!value)return;
	let oDate = new Date(value);
	let y = oDate.getFullYear();
	let m = oDate.getMonth()+1;
	let d = oDate.getDate();
	let h = oDate.getHours();
	let min = oDate.getMinutes();
	let s = oDate.getSeconds();

	return `${y}-${m}-${d} ${h}:${min}:${s}`
});