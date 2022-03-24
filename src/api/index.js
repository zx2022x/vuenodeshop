import requests from './ajax'
//登录接口
export const reqUserLogin=(data)=>requests({url:`/users/login/`,data, method:'post'})
//商品图片上传
export const reqSpImgUpload=(data)=>requests({url:"/goods/upload",data,method:'post'})
//商品上传
export const reqSpUpload=(data)=>requests({url:'/goods/',data,method:'post'})
