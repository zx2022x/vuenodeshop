import VueRouter from "vue-router"
import Vue from "vue"
//引入路由配置
import routes from '@/router/routes'
//引入 store 
import store from '@/store'
import {getID } from '@/utils/token'
Vue.use(VueRouter);

let router = new VueRouter({
    routes,
})
router.beforeEach((to,from,next)=>{
     const token=getID()
     console.log("上课就上课"+token)
    const toPath=to.path
     if(!token){
          if(toPath.indexOf('/shopcartlist')!=-1){
              console.log("购物车·看")
              next('/home')
          
          }else{
              next()
          }
     }
     else{
         next()
     }
})

export default router;
