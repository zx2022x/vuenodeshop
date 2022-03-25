import { reqUserLogin } from '@/api'
import {setToken,getToken} from '@/utils/token'
const state = {
    token:getToken(),
    
}
const mutations = {
    //用户登录

    ADMINUSERLOGIN(state, adminInfo) {
         
        setToken(adminInfo.token)
       
        
        
    }
}
const actions = {
    
    //用户登录
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
}
const getters = {}
export default {
    state,
    mutations,
    actions,
    getters,

}

