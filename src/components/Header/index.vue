<template>
  <div class="header">
    <div class="w">
      <div class="rightBox" v-show="leftbox">
        <el-dropdown>
          <span class="el-dropdown-link">
            用户管理<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人信息</el-dropdown-item>
            <el-dropdown-item>收货信息</el-dropdown-item>
             <el-dropdown-item @click.native="exitLogin">退出登录</el-dropdown-item>
           
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="leftBox">
        <ul>
          
          <li v-show="rightbox">
            <router-link
              class="link"
              :to="{ name: 'userlogin', params: { mark: 1 } }"
              >登录</router-link
            >
          </li>
          <li class="shu" v-show="rightbox"></li>
          <li v-show="rightbox">
            <router-link
              class="link"
              :to="{ name: 'userlogin', params: { mark: 2 } }"
              >注册</router-link
            >
          </li>
          <li class="shu" v-show="rightbox"></li>
       


          <li>
            <router-link class="link" to="/adminLogin">后台管理</router-link>
          </li>
          <li>
            <router-link class="link" to="/">购物车</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import {clearToken} from '@/utils/token'
export default {
 data(){
     return{

        leftbox:false,
        rightbox:true,
     }

 },
//  activated(){
// 	this.changeDisplay()
// 	},
mounted(){
     this.changeDisplay()
},
// updated(){
//      this.changeDisplay()
// },
 methods:{
     //退出登录
     exitLogin(){
     
          clearToken();
          this.$store.state.user.token='';
          
          if(!this.$store.state.user.token){

             this.leftbox=false
             this.rightbox=true
         }
         
     },
     changeDisplay(){
         const token =this.$store.state.user.token
        
         if(token){
             this.leftbox=true
             this.rightbox=false
              console.log('执行了'+token)
         }
     }
 },
 
 watch:{

      $route(to,form){
          console.log("当前路由"+to.path)
           
        
        
          this.changeDisplay()
      }
 }
}


</script>

<style lang='less' scoped>
.header {
  width: 100%;
  height: 50px;
  background-color: #333333;
  .w {
    position: relative;
    width: 1290px;
    height: 100%;

    margin: 0 auto;
    .rightBox {
      position: absolute;
      left:0;
      top:14px;
      
      .el-dropdown-link {
        cursor: pointer;
        color:  #b0b0b0;
      }
      .el-icon-arrow-down {
        font-size: 17px;
      }
    }
    .leftBox {

      position: absolute;
      right: 0;
      width: 343px;
      height: 100%;

      li {
        list-style: none;
        height: 50px;

        float: left;
      }
      .shu {
        height: 16px;
        width: 1px;
        background-color: #3c423f;
        margin: 18px 7px 7px 7px;
      }
      .link {
        color: #b0b0b0;
        line-height: 50px;
      }
      li:nth-child(1) {
        width: 33px;
      }
      li:nth-child(3) {
        width: 33px;
      }
      li:nth-child(5) {
        margin-right: 31px;
      }
      li:nth-child(6) {
        width: 152px;
        background-color: #424242;
        padding-left: 40px;
      }
      
    }
  }
}
</style>