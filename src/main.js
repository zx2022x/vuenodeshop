import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入仓库
import store from '@/store'
//引入路由
import router from '@/router'
//按需引入elementui
import {Row,Col,Menu,Submenu,MenuItem,Table,TableColumn} from 'element-ui'
Vue.use(Row)
Vue.use(Col)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(Table)
Vue.use(TableColumn)

new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')

