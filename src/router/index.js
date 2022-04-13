import VueRouter from "vue-router"
import Vue from "vue"
//引入路由配置
import routes from '@/router/routes'
//引入 store 
import store from '@/store'
Vue.use(VueRouter);
let router = new VueRouter({
    routes,
})
//重写push


// router.beforeEach((to, from, next) => {
//     let token = store.state.user.token
//     // console.log('测试' + to.path)
//     // console.log('测试' + token)
    
//     if (token) {
//         console.log('路由token' + to.path)
//         if (to.path == '/userlogin/1' || to.path == '/userlogin/2') {

//             next('/home')

//         }

//         else {
//             next();
//         }

//     }
//     next();
// }

// )
export default router;
