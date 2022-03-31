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
//管理员修改用户名密码
export const reqChangeUserPw=(data)=>requests({url:`/users/adpa`,data,method:'patch'})
//修改自己密码接口
export const reqChangeMyselfPw=(data)=>requests({url:`/users`,data,method:'patch'})

//获取软删除列表
export const reqGetRuGoodsList=(pageNum,pageSize)=>requests({url:`/goods/ru?pageNum=${pageNum}&pageSize=${pageSize}`,method:'get'})
//上架商品
export const reqSangJia=(id)=>requests({url:`/goods/${id}/on`,method:'post'})
//用户注册
export const reqRegister=(data)=>requests({url:`/users/register`,data,method:'post'})