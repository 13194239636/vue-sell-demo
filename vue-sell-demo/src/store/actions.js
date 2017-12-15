export default{
	hiddenHeader({commit}){
		commit('hiddenHeader');
	},
	showHeader({commit}){
		commit('showHeader');
	},
	hiddenFooter({commit}){
		commit('hiddenFooter');
	},
	showFooter({commit}){
		commit('showFooter');
	}
}