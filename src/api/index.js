import requests from './ajax'
//登录接口

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
// //修改自己密码接口
// export const reqChangeMyselfPw=(data)=>requests({url:`/users`,data,method:'patch'})

//获取软删除列表
export const reqGetRuGoodsList=(pageNum,pageSize)=>requests({url:`/goods/ru?pageNum=${pageNum}&pageSize=${pageSize}`,method:'get'})
//上架商品
export const reqSangJia=(id)=>requests({url:`/goods/${id}/on`,method:'post'})
//用户注册
export const reqRegister=(data)=>requests({url:`/users/register`,data,method:'post'})
//用户登录
export const reqUserLogin=(data)=>requests({url:`/users/login/`,data, method:'post'})

//获取分类过后的商品列表
export const reqGetItemList=(pageNum,pageSize,goods_fm)=>requests({url:`/goods/item?pageNum=${pageNum}&pageSize=${pageSize}&goods_fm=${goods_fm}`,method:'get'})
//获取搜索商品列表
export const reqGetSearchInfo=(pageNum,pageSize,goods_name)=>requests({url:`/goods/search?pageNum=${pageNum}&pageSize=${pageSize}&goods_name=${goods_name}`,method:'get'})
//修改用户密码
export const reqChangeMyPd=(password)=>requests({url:`/users`,password,method:'patch'})
//拿到收件人信息
export const reqGetAccrptInFo=()=>requests({url:`/address`,method:'get'})

//更改收件人状态
export const reqChangeTai=(id)=>requests({url:`/address/${id}`,method:'patch'})

//增加收件人
export const reqAddShJianInFo=(data)=>requests({url:'/address',data,method:'post'})
//删除收件人信息
export const reqDeleteShouJ=(id)=>requests({url:`/address/${id}`,method:'delete'})
//编辑收件人信息
export const reqEditItem=(id,data)=>requests({url:`/address/${id}`,data,method:'put'})

//加入购物车
export const reqAddShopCart=(data)=>requests({url:`/carts`,data,method:'post'})