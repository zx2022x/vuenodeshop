import {
    reqSpImgUpload,
    reqSpUpload,
    reqSpListInfo,
    reqSpXiaJia,
    reqSpDelete,
    reqGetUserList,
    reqGetRuGoodsList,
    reqSangJia,
    reqChangeUserPw,
    
    reqGetItemList
} from '@/api'
const state = {
    //商品列表信息
    SpListInfo: {},
    UserInfo: {},
    rugoodslist: {},
    //分类过后的商品信息
    itemInfo1: {},

    //分类过后的商品信息  肉类
    itemInfo2: {},

    //分类过后的商品信息  粗粮
    itemInfo3: {}

}
const actions = {
    //商品图片上传

    async SpImgUpload({ commit }, data) {
        try {
            console.log("data")
            console.log(data)
            let res = await reqSpImgUpload(data)
            if (res.code == 0) return 'ok'
            else {
                return Promise.reject(new Error('图片上传失败'))
            }

        } catch (error) {
            console.log("store图片")
            console.log(error)
        }

    },
    //商品上传
    async SpUpload({ commit }, data) {
        try {

            let res = await reqSpUpload(data)

            if (res.code == 0) {

                return res.message
            }
            else {
                return Promise.reject(new Error(res.message))
            }


        } catch (error) {
            console.log("商品上传actions")
            console.log(error)
        }


    },
    //获取商品列表
    async getSpListInfo({ commit }, { pageNum, pageSize }) {

        let res = await reqSpListInfo(pageNum, pageSize)

        if (res.code == 0) {
            commit("GETSPLISTINFO", res.result)
            // this.$message({
            //     message:message,
            //     type: 'success'
            //   });
            return res.message
        }
        else {
            return Promise.reject(new Error(res.message))
        }

    },

    //获取软删除商品列表
    async getRuGoodsList({ commit }, { pageNum, pageSize }) {
        const res = await reqGetRuGoodsList(pageNum, pageSize)
        if (res.code == 0) {
            commit('GETRUGOODSLIST', res.result)
            return res.message
        }
        else {
            return Promise.reject(new Error(res.message))
        }

    },
    //商品下架
    async spXiaJia({ commit }, id) {
        const res = await reqSpXiaJia(id)
        if (res.code == 0) {
            return res.message
        }
        else {
            return Promise.reject(new Error(res.message))
        }

    },
    //删除商品
    async SpDelete({ commit }, id) {
        let res = await reqSpDelete(id)
        if (res.code == 0) {
            return res.message
        }
        else {

            return Promise.reject(new Error(res.message))

        }

    },
    //上架商品
    async sangJia({ commit }, id) {
        const res = await reqSangJia(id)
        if (res.code == 0) {
            return res.message
        }
        else {
            return Promise.reject(new Error(res.message))
        }
    },
    //获取用户列表
    async getUserList({ commit }, { pageNum, pageSize }) {
        const res = await reqGetUserList(pageNum, pageSize)
        if (res.code == 0) {
            commit('GETUSERLIST', res.result)
            return res.message
        }
        else {
            return Promise(new Error(res.message))
        }
    },
    //管理员更改用户密码
    async changeUserPw({ commit }, { id, password }) {

        try {
            const res = await reqChangeUserPw({ id, password })
            if (res.code == 0) {
                return res.message
            }
            else {
                return Promise.reject(new Error(res.message))
            }
        } catch (error) {
            console.log(error)
        }

    },
    //修改自己的密码
    async changeMyselfPw({ commit }, { user_name, password }) {
        const res = await reqChangeMyselfPw(user_name, password)
        if (res.code == 0) {
            return res.message
        }
        else {
            return Promise.reject(new Error(res.message))
        }
    },
    //获取分类过后的用户列表  水果
    async getItemList1({ commit }, { pageNum, pageSize, goods_fm }) {
        //  console.log('页码尺寸'+pageSize)
        const res = await reqGetItemList(pageNum, pageSize, goods_fm)
        if (res.code == 0) {
            commit('GETITEMLIST1', res.result)
        }

    },
    //获取分类过后的用户列表 肉类
    async getItemList2({ commit }, { pageNum, pageSize, goods_fm }) {

        const res = await reqGetItemList(pageNum, pageSize, goods_fm)
        if (res.code == 0) {
            commit('GETITEMLIST2', res.result)
        }

    },

    //获取分类过后的用户列表 粗粮
    async getItemList3({ commit }, { pageNum, pageSize, goods_fm }) {

        const res = await reqGetItemList(pageNum, pageSize, goods_fm)
        if (res.code == 0) {
            commit('GETITEMLIST3', res.result)
        }

    }



}
const mutations = {
    //获取商品列表
    GETSPLISTINFO(state, result) {
        state.SpListInfo = result
    },
    //获取用户列表
    GETUSERLIST(state, result) {
        state.UserInfo = result
    },
    GETRUGOODSLIST(state, result) {
        state.rugoodslist = result
    },
    //获取分类过后的用商品列表 水果
    GETITEMLIST1(state, result) {

        state.itemInfo1 = result

    },

    //获取分类过后的用商品列表 肉类
    GETITEMLIST2(state, result) {

        state.itemInfo2 = result

    },

    //获取分类过后的用商品列表 粗粮
    GETITEMLIST3(state, result) {
         
        state.itemInfo3 = result

    }


}
const getters = {
    //获取商品信息
    SpListInfo(state) {
        return state.SpListInfo || {}
    },
    //获取商品列表
    SpList() {
        return state.SpListInfo.list
    },
    UnSpList(state) {

        return state.SpListInfo.list


    },
    //获取用户信息
    getUser(state) {
        return state.UserInfo
    },
    //获取用户列表
    getUserList(state) {
        return state.UserInfo.list
    },
    //获取软删除列表
    getRuGoodsList(state) {
        return state.rugoodslist.list
    },
    //获取软删除列表总数
    getRuGoodsInfo(state) {
        return state.rugoodslist.total
    },
    //获取分类过后的用户列表总数
    getItemListTotal(state) {

        return state.itemInfo1.total

    },
    //获取分类过后的用户列表
    getItemList1(state) {
        return state.itemInfo1.list
    },

     //获取分类过后的用商品列表 肉类
     getItemList2(state) {
        return state.itemInfo2.list
    },

     //获取分类过后的用商品列表 粗粮
     getItemList3(state) {

        return state.itemInfo3.list
    
    }


}

export default {
    state,
    actions,
    mutations,
    getters,
}