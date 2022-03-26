import {reqSpImgUpload,reqSpUpload,reqSpListInfo,reqSpXiaJia, reqSpDelete} from '@/api'
const state={
    //商品泪飙信息
    SpListInfo:{},
}
const actions={
    //商品图片上传
  
    async SpImgUpload({commit},data){
        try {
            console.log("data")
           console.log(data)
            let res=await reqSpImgUpload(data)
            if(res.code==0) return 'ok'
            else {
                return Promise.reject(new Error('图片上传失败'))
            }

        } catch (error) {
            console.log("store图片")
            console.log(error)
        }
        
    },
    //商品上传
     async SpUpload({commit},data){
         try {
             
            let res =await reqSpUpload(data)

            if(res.code==0){
    
               return res.message
            }
            else{
                return Promise.reject(new Error(res.message))
            }
       

         } catch (error) {
            console.log("商品上传actions")
            console.log(error)
         }
       

    },
    //获取商品列表
    async getSpListInfo({commit},{pageNum,pageSize}){

        let res=await reqSpListInfo(pageNum,pageSize)
        
        if(res.code==0){
            commit("GETSPLISTINFO",res.result)
            // this.$message({
            //     message:message,
            //     type: 'success'
            //   });
            return res.message
        }
        else{
            return Promise.reject(new Error(res.message))
        }

    },
    //商品下架
    async spXiaJia({commit},id){
         const res=await reqSpXiaJia(id)
         if(res.code==0){
             return res.message
         }
         else{
            return Promise.reject(new Error(res.message))
         }
         
    },
    //删除商品
    async SpDelete({commit},id){
       let res=await reqSpDelete(id)
       if(res.code==0){
           return res.message
       }
       else{
            
         return Promise.reject(new Error(res.message))

       }

    }



}
const mutations={
       //获取商品列表
       GETSPLISTINFO(state,result){
           state.SpListInfo=result
       }

}
const getters={
    SpListInfo(state){
       return state.SpListInfo || {}
    },
    UnSpList(state){

      return state.SpListInfo.list
    //  const b=[]
    //  for(let i=0;i<a.length;i++){
    //      if(!a[i].deletedAt){
    //          b.push=a[i]
    //      }
    //  }
    //  return b;
    
    }
}

export default{
    state,
    actions,
    mutations,
    getters,
}