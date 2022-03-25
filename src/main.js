import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入仓库
import store from '@/store'
//引入路由
import router from '@/router'
//按需引入elementui
import {Row,Col,Menu,Submenu,MenuItem,Table,TableColumn,MenuItemGroup,Main,Form,
  FormItem,Input,Button,Option,Select,InputNumber,Upload,Dialog,Popover,Tag,Pagination,Image,Message} from 'element-ui'
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
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
Vue.prototype.$message = Message;
new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')

