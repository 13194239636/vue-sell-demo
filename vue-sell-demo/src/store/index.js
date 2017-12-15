import Vue from 'vue'
import VueX from 'vuex'
Vue.use(VueX);

import actions from './actions.js'
import mutations from './mutations.js'

export default new VueX.Store({
	actions,
	modules:{mutations}
})