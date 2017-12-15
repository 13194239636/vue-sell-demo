import Seller from './components/seller.vue'
import Remark from './components/remark.vue'
import Goods from './components/goods.vue'
import GoodsDetail from './components/good_detail.vue'

export default[
	{
		path:'/goods',
		component:Goods
	},
	{
		path:'/remark',
		component:Remark
	},
	{
		path:'/seller',
		component:Seller
	},
	{
		path:'/detail/:index/good/:key',
		component:GoodsDetail
	},	
	{
		path:'*',
		redirect:'/goods'
	}
]