import Vue from 'vue'
import App from './App.vue'
import vueResource from 'vue-resource'
import vueRouter from 'vue-router'
import vueX from 'vuex'
import routes from './router.config.js'
import formattingTime from './filter/'
import store from './store/'

Vue.use(vueX);
Vue.use(vueResource);
Vue.use(vueRouter);

const router = new vueRouter({
	routes
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
