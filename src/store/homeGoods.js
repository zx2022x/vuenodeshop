import {
    reqGetSearchInfo,
    reqGetAddShopCart,
    reqUpdateShopCart,
    reqSingeDeleSCL
  } from '@/api/index'


const state={

    searchInfo:{},
    shopcartlist:{},
    shopcartlisttotal:'',
    shopcartInfo:{},
}
const mutations={
    //获取搜索得到商品列表
    GETSEARCHINFO(state,searchInfo){
        state.searchInfo=searchInfo
    },
    GETADDSHOPCART(state,shopcartInfo){
        state.shopcartlist=shopcartInfo.list
        state.shopcartlisttotal=shopcartInfo.total
        state.shopcartInfo=shopcartInfo
    }
    
}
const actions={
      //获取搜索得到商品列表

     async getSearchInfo({commit},{pageNum,pageSize,goods_name}){
       
       
         const res= await reqGetSearchInfo(pageNum,pageSize,goods_name)

         if(res.code==0){

              commit('GETSEARCHINFO',res.result)
         }
      
       
     },
     //获取购物车列表
     async getAddShopCart({commit},{pageNum,pageSize,user_id}){
       const res= await reqGetAddShopCart(pageNum,pageSize,user_id)
       if(res.code==0){
           commit('GETADDSHOPCART',res.result)
       }
     },
     //更新购物车数量
     async updateShopCart({commit},{number,id,selected}){
       
         const data={id,selected}
         await reqUpdateShopCart(id,data)
     },
     //删除单个购物车列表
     async singeDeleSCL({commit},ids){
       try {
        await reqSingeDeleSCL(ids)
       } catch (error) {
           console.log('smsms')
           console.log(error)
       }
         
     }
    

}
const getters={

    getSearchTotal(state){
        return state.searchInfo.total
    },

    getSearchList(state){
        return state.searchInfo.list
    },
    getShopCartList(state){
        return state.shopcartlist
    },
    getShopCartListTotal(state){
        return state.shopcartlisttotal
    },
     getShopCartInfo(state){
      return  state.shopcartInfo
  }
}

export default{
    state,
    mutations,
    actions,
    getters,
}