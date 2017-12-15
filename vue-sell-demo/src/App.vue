<template>
  <div id="app">
    <app-header v-if="headerShow" :sellerData='sellerData'></app-header>
    <app-nav  v-if="headerShow" ></app-nav>
    <router-view :sellerData="sellerData" :ratingsData="ratingsData" :goodsData="goodsData"></router-view>
    <app-footer v-if="footerShow" :sellerData='sellerData' :goodsData="goodsData"></app-footer>
  </div>
</template>

<script>
import {mapGetters } from 'vuex'
import appHeader from './components/header.vue'
import appNav from './components/nav.vue'
import appFooter from './components/footer.vue'

export default {
  name: 'app',
  data () {
    return {
      sellerData:{},
      goodsData:[],
      ratingsData:[]
    }
  },
  computed:mapGetters ([
      'headerShow',
      'footerShow'
    ]),
  watch:{
    $route(to,from){
      console.log(to);
      let pattern = '/detail/'
      if(to.path.startsWith(pattern)){
        this.$store.dispatch('hiddenHeader');
      }else{
        this.$store.dispatch('showHeader');
      }
      if(to.path=="/seller"||to.path=='/remark'){
        this.$store.dispatch('hiddenFooter');
      }else{
        this.$store.dispatch('showFooter');
      }
    }
  },
  mounted(){
    this.fetchdata();
  },
  methods:{
    fetchdata(){
      var _this = this;
      this.$http.get('../../data.json').then((res)=>{
        _this.sellerData = res.body.seller;
        _this.goodsData = res.body.goods;
        _this.ratingsData = res.body.ratings;
      },(err)=>{});
    }
  },
  components:{
    appHeader,
    appNav,
    appFooter
  }
}
</script>

<style>

</style>
