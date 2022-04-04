<template>
  <div class="item">
    <h1>肉类</h1>
    <div class="itemlist">
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li>
               <ul class='sks'>
                   <li></li>
                   <li></li>
               </ul>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped lang="less">
.clearfix {
  &::before,
  &::after {
    content: "";
    display: table;
  }
  &::after {
    clear: both;
  }
  & {
    *zoom: 1;
  }
}
.item {
  margin-top: 20px;
  width: 100%;

  h1{
      font-size:25px;
      font-family: "SimSun";
      font-weight:normal;

  }

  .itemlist {
    .clearfix;
    margin-top:15px;
    width: 100%;
    
    background-color: aqua;
    li{
        list-style:none;
        float:left;
        width: 246px;
        height: 285.5px;
        margin-left:15px;
        margin-bottom:15px;
        background-color: antiquewhite;

    }
    li:nth-child(1){
        margin-left:0;
    }
    li:nth-child(6){
        margin-left:0;
    }
    .sks{

        list-style: none;
         width: 100%;
         height: 100%;
        li{
            margin-left:0;
            width: 100%;
            height: 135.75px;
            margin-bottom:15px;
            background-color: rgb(200, 208, 123);
        }
        li:last-child{
           
            margin-bottom:0;
        }
    }
   


  }
}
</style>