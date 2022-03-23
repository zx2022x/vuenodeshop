import requests from './ajax'
//登录接口
export const reqUserLogin=(data)=>requests({url:`/users/login/`,data, method:'post'})
