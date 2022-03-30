<template>
 <div class="header">
  <div class="w">
      <div class="leftBox">
         <ul>
             <li>
            <router-link class="link">登录</router-link>
             </li>
             <li class="shu"></li>
             <li>
             <router-link class="link">注册</router-link>
             </li>
             <li class="shu"></li>
             <li>
              <router-link>购物车</router-link>
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
              background-color:rgb(31, 88, 88);
               li{
                   list-style:none;
                   height: 50px;
                   width: 30px;
                   float:left;
                   
                 

               }
               .shu{
                   height: 16px;
                   width: 1px;
                   background-color: #3c423f;
               }
               .link{
                   color:#b0b0b0;

               }
         }
    }
}
</style>