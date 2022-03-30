<template>
 <div class="header">
  <div class="w">
      <div class="leftBox">
         <ul>
             <li>
            <router-link class="link" to="/">登录</router-link>
             </li>
             <li class="shu"></li>
             <li>
             <router-link class="link" to="/">注册</router-link>
             </li>
             <li class="shu"></li>
             <li>
              <router-link class="link" to="/" >后台管理</router-link>
             </li>
             <li>
              <router-link class="link" to="/" >购物车</router-link>
             </li>
         </ul>
      </div>
  </div>
 </div>
</template>

<script>
export default {

}
</script>

<style lang='less' scoped>
.header{
    width: 100%;
    height:50px;
    background-color: #333333;
    .w{ 
         position:relative;
         width: 1290px;
         height: 100%;
        
         margin:0 auto;
         .leftBox{
               position:absolute;
               right:0;
               width: 343px;
               height: 100%;
           
               li{
               
                   list-style:none;
                   height: 50px;
                  
                   float:left;
                   
                 

               }
               .shu{
                   height: 16px;
                   width: 1px;
                   background-color: #3c423f;
                   margin:18px 7px 7px 7px;
               }
               .link{
                   color:#b0b0b0;
                   line-height:50px;

               }
               li:nth-child(1){
                   width: 33px;
               }
                li:nth-child(3){
                   width: 33px;
               }
                li:nth-child(5){
                   margin-right:31px;
               }
                li:nth-child(6){
                  width: 152px;
                  background-color: #424242;
                  padding-left:40px;
               }

         }
    }
}
</style>