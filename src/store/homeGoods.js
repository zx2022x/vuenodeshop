import {
    reqGetSearchInfo
  } from '@/api/index'


const state={
    searchInfo:{}
}
const mutations={
    //获取搜索得到商品列表
    GETSEARCHINFO(state,searchInfo){
        state.searchInfo=searchInfo
    }
}
const actions={
      //获取搜索得到商品列表

     async getSearchInfo({commit},{pageNum,pageSize,goods_name}){
       
       
         const res= await reqGetSearchInfo(pageNum,pageSize,goods_name)

         if(res.code==0){

              commit('GETSEARCHINFO',res.result)
         }
      
       
     }
    

}
const getters={

    getSearchTotal(state){
        return state.searchInfo.total
    },

    getSearchList(state){
        return state.searchInfo.list
    }
}

export default{
    state,
    mutations,
    actions,
    getters,
}