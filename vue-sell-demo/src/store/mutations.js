
import getters from './getters.js'

const state = {
	headerShow:true,
	footerShow:true
}

const mutations = {
	hiddenHeader(state){
		state.headerShow = false;
	},
	showHeader(state){
		state.headerShow =  true;
	},
	hiddenFooter(state){
		state.footerShow = false;
	},
	showFooter(state){
		state.footerShow =  true;
	}
}
export default{
	state,
	mutations,
	getters
}