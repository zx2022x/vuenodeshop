import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
//引入仓库
import store from '@/store'
//引入路由
import router from '@/router'
new Vue({
  render: h => h(App),
  store,
  router,
}).$mount('#app')

