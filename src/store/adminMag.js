import {reqSpImgUpload,reqSpUpload} from '@/api'
const state={
    
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
       

    }


}
const mutations={

}
const getters={

}

export default{
    state,
    actions,
    mutations,
    getters,
}