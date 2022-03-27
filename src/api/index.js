import requests from './ajax'
//登录接口
export const reqUserLogin=(data)=>requests({url:`/users/login/`,data, method:'post'})
//商品图片上传
export const reqSpImgUpload=(data)=>requests({url:"/goods/upload",data,headers:{'Content-Type':'multipart/form-data'},method:'post'})
//商品上传
export const reqSpUpload=(data)=>requests({url:`/goods/`,data,method:'post'})
//获取商品列表
export const reqSpListInfo=(pageNum,pageSize)=>requests({url:`goods?pageNum=${pageNum}&pageSize=${pageSize}`,method:'get'})
//下架商品列表
export const reqSpXiaJia=(id)=>requests({url:`/goods/${id}/off`,method:'post'})
//删除商品
export const reqSpDelete=(id)=>requests({url:`/goods/${id}`,method:'delete'})
//获取用户列表
export const reqGetUserList=(pageNum,pageSize)=>requests({url:`/users?pageNum=${pageNum}&pageSize=${pageSize}`,method:'get'})

