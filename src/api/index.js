import requests from './ajax'
//登录接口
export const reqUserLogin=(user_name, password)=>requests({url:`/users/login/${user_name}/${password}`, method:'post'})
