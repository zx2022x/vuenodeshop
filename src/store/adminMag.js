import {reqSpImgUpload} from '@/api'
const state={

}
const actions={
    async SpImgUpload(data){
        let res=await reqSpImgUpload(data)
        if(res.code=0) return 'ok'
        else return Promise.reject(new Error('图片上传失败'))
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