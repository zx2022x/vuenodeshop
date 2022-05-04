<template>
  <div class="footer">
      <div class="footer_inside">
            <div class="footer_top">
                <ul>
                    <li>
                        <h5></h5>
                        <div class="service_txt">
                            <h4>正品保障</h4>
                            <p>正品保障，提供发票</p>
                        </div>
                    </li>
                    <li>
                        <h5></h5>
                        <div class="service_txt">
                            <h4>急速物流</h4>
                            <p>急速物流，急速送达</p>

                        </div>

                    </li>
                    <li>
                        <h5></h5>
                        <div class="service_txt">
                            <h4>无忧售后</h4>
                            <p>七天无理由退换货</p>
                        </div>
                    </li>
                    <li>
                        <h5> </h5>
                        <div class="service_txt">
                            <h4>特色服务</h4>
                            <p>私人定制家电套餐</p>
                        </div>
                    </li>
                    <li>
                        <h5></h5>
                        <div class="service_txt">
                            <h4>帮助中心</h4>
                            <p>您的购物指南</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="footer_center">
              <ul>
                  <li class="fcen">帮助中心</li>
                  <li>购物指南</li>
                  <li>账户管理</li>
                  <li>订单操作</li>
                 
              </ul>

               <ul >
                  <li class="fcen">服务支持</li>
                  <li>售后政策</li>
                  <li>自助服务</li>
                  <li>相关下载</li>
                 
              </ul>

               <ul >
                  <li class="fcen">关注我们</li>
                  <li>新浪微博</li>
                  <li>官方微信</li>
                  <li>联系我们</li>
                 
              </ul>

                  <ul >
                  <li class="fcen">特色服务</li>
                  <li>F码通道</li>
                  <li>礼物码</li>
                  <li>防伪查询</li>
                 
              </ul>

               <ul >
                  <li class="fcen">关于我们</li>
                  <li>了解我们</li>
                  <li>加入我们</li>
                  <li>廉洁举报</li>
                 
              </ul>


            </div>
            <div class="footer_bottom">

            </div>
        </div>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.footer{
   
   height: 417px;
   background-color: #f5f5f5;
   margin-top:30px;
   .footer_inside{
      
     
 
      .footer_top{
        height: 110px;
        
        border-bottom:1px solid #ededed;
        padding-top:31px ;
        li{

          list-style:none;
          height: 50px;
          float:left;
          
          padding:0 35px 0 104px;

          h5{
            float:left;
            width: 50px;
            height: 50px;
            margin-right:7px;
            background: url(@/assets/icons.png) no-repeat -252px -2px;
            
          }

          .service_txt{
            margin-top:8px;
            float:left;
             .h4{
                font-size:14px;
                font-weight:700;
             }
             p{
               font-size:12px;
             }
          }

        }
      }
   }
   .footer_center{
       ul{
           float:left;
           list-style:none;
           margin:0 32px 0 187px;
           
       }
       .fcen{
           margin: 50px 0 40px 0;
           font-weight:700;
       }
       li{
           margin:5px 0; 
       }

   }

}
</style>