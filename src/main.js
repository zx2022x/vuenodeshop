import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入仓库
import store from '@/store'
//引入路由
import router from '@/router'
//按需引入elementui
import {Row,Col,Menu,Submenu,MenuItem,Table,TableColumn,MenuItemGroup,Main,Form,
FormItem,Input,Button,Option,Select,InputNumber,Upload,Dialog,Popover,
Tag,Pagination,Image,Message,Tabs,TabPane,Carousel,
CarouselItem,Dropdown,DropdownMenu,DropdownItem,
Descriptions,DescriptionsItem,Checkbox,
} from 'element-ui'

Vue.use(Row); Vue.use(Carousel);Vue.use(CarouselItem);Vue.use(Dropdown);Vue.use(DropdownMenu)
Vue.use(Col);Vue.use(DropdownItem);Vue.use(Descriptions);Vue.use(DescriptionsItem)
Vue.use(Menu);Vue.use(Checkbox)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(MenuItemGroup)
Vue.use(MenuItemGroup)
Vue.use(Main)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input);
Vue.use(Option)
Vue.use(Select)
Vue.use(Button)
Vue.use(InputNumber)
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(Popover),
Vue.use(Tag),
Vue.use(Pagination)
Vue.use(Image)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.prototype.$message = Message;
//引入swiper


new Vue({
  beforeCreate() {
    //此处的this就是这个new Vue()对象
    //网络有很多bus通信总结，原理相同，换汤不换药
    Vue.prototype.$bus = this
  },
  render: h => h(App),
  

  store,
  router,
}).$mount('#app')

