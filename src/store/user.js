    import { reqUserLogin,
            reqRegister,
            reqChangeMyPd,
            reqGetAccrptInFo,
            reqChangeTai,
            reqAddShJianInFo,
            reqDeleteShouJ,
            reqEditItem} from '@/api'
import {setToken,getToken} from '@/utils/token'
const state = {
    token:getToken(),
    acceptInfo:[],
}
const mutations = {
    //管理员登录

    ADMINUSERLOGIN(state, adminInfo) {
         
        setToken(adminInfo.token)
       
        
        
    },
     //用户登录
    USERLOGIN(state,userInfo){
        setToken(userInfo.token)
    },
    //收件人信息
    GETACCRPTINFO(state,acceptInfo){
        state.acceptInfo=acceptInfo
    },
    //收件人
   
}
const actions = {
    
    //管理员登录
    async adminUserLogin({commit},data) {
        try {
           
            let res = await reqUserLogin(data)
            console.log(res)
            if (res.code == 0) {
                commit('ADMINUSERLOGIN', res.result)
                return 'ok'

            } else {
                return Promise.reject(new Error('获取数据失败'))
            }


        } catch (error) {
            console.log(error)
        }

    },
    //用户名注册
    async userRegister({commit},{user_name,password}){
      
          
                const res= await reqRegister({user_name,password})
               
                return res.code  
    },
    //用户登录
    async userLogin({commit},{user_name,password}){
        const res=await reqUserLogin({user_name,password})
        if(res.code==0){
            commit('USERLOGIN',res.result)
        }
        return res.code
    },
    //修改用户自己的密码
    async changeMyPd({commit},{password}){
         try {
              
            console.log('错误是'+password)
           await reqChangeMyPd(password)

         } catch (error) {
             console.log('错误是')
             console.log(error)
         }
      

      

    },
    //获取用户收件人信息
    async getAccrptInFo({commit}){
         const res =await reqGetAccrptInFo()
         if(res.code==0){
             commit('GETACCRPTINFO',res.result)
         }
    },
    //改变收件人状态
    async ChangeTai({commit},id){
         const res = await reqChangeTai(id)
        
    },
    async addShJianInFo({commit},{consignee,phone,address}){
        const res=await reqAddShJianInFo({consignee,phone,address})

    },
    //删除收件人
    async deleteShouJ({commit},id){
         await reqDeleteShouJ(id)
    },
    //修改收件人信息
   
    async editItem({commit},{id,consignee,phone,address}){
       
        // console.log("dsjds"+{consignee,phone,address})
        await reqEditItem(id,{consignee,phone,address})
        

    },

}
const getters = {
    //
    getAInFo(state){
         return state.acceptInfo || []
    }
}
export default {
    state,
    mutations,
    actions,
    getters,

}

