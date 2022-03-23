import VueRouter from "vue-router"
import Vue from "vue"
//引入路由配置
import routes from '@/router/routes'

Vue.use(VueRouter);
export default new VueRouter({
    routes,
})
