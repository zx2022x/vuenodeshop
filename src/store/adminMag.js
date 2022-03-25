import {reqSpImgUpload,reqSpUpload,reqSpListInfo} from '@/api'
const state={
    //商品泪飙信息
    SpListInfo:{},
}
const actions={
    //商品图片上传
    async SpImgUpload({commit},data){
        let res=await reqSpImgUpload(data)
        if(res.code=0) return 'ok'
        else {
            return Promise.reject(new Error('图片上传失败'))
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
       return state.SpListInfo ||[]
    }
}

export default{
    state,
    actions,
    mutations,
    getters,
}