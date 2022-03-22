//引入Vuex -----相当于咱们最大的仓库
import Vuex from "vuex";
//引入Vue
import Vue from "vue";
import user from '@/store/user'
//使用插件
Vue.use(Vuex);
export default new Vuex.Store({
  modules:{
      user,
  }
    

})

