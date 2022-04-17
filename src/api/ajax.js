// 对于axios进行二次封装
import axios from "axios";
import nprogress from "nprogress";
//在当前模块中引入store
// import store from '@/store';
//如果出现进度条没有显示：一定是你忘记了引入样式了
import "nprogress/nprogress.css";
// import {getToken} from '@/utils/token'
import store from '@/store';
//引入消息
import { Message } from 'element-ui'
// Vue.prototype.$message = Message;
//底下的代码也是创建axios实例
let requests = axios.create({
  //基础路径
  baseURL: "/api",
  //请求不能超过5S
  timeout: 5000,
});
import {getToken} from '@/utils/token'
//请求拦截器----在项目中发请求（请求没有发出去）可以做一些事情
requests.interceptors.request.use((config) => {
  //现在的问题是config是什么?配置对象
  //可以让进度条开始动
//   if(store.state.detail.uuid_token){
//     //请求头添加一个字段(userTempId):和后台老师商量好了
//     config.headers.userTempId = store.state.detail.uuid_token;
//   }
  //需要携带token带给服务器
  if(getToken()){
   
    config.headers.Authorization = getToken();
    // console.log('token是是是是是是')
    //  console.log('token'+store.state.user.token)
    // console.log('请求头token:')

    // console.log(config.headers.token)
    
  }
  nprogress.start();
  return config;
});

//响应拦截器----当服务器手动请求之后，做出响应（相应成功）会执行的
requests.interceptors.response.use(
  (res) => {
    //进度条结束
    nprogress.done();
    const a=res.data.message
    const a1=a.search("商品列表")
    const a2=a.search("更新购物车")

    if(!(a1!=-1 || a2!=-1)){
      Message({
        message:res.data.message,
        type: 'success',
      })
    }
   
    //相应成功做的事情
    return res.data;
  },
  (err) => {
   
    Message({
			message:err.response.data.message,
			type: 'error',
		})
    return err.response.data
  }

  );
//最终需要对外暴露（不对外暴露外面模块没办法使用）
//这里的代码是暴露一个axios实例
export default requests;
