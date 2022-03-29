<template>
<div>
  <el-table
    :data="getUserList"
    stripe
    style="width: 100%">
    <el-table-column
      prop="id"
      label="ID"
      width="50">
    </el-table-column>
    <el-table-column
      prop="user_name"
      label="用户名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="password"
      label="密码"
       width="300"
      
      >
    </el-table-column>
     <el-table-column
      prop="createdAt"
      label="注册时间"
      width="250">
    </el-table-column>
     <el-table-column
      prop="updatedAt"
      label="更新时间"
      width="250">
    </el-table-column>
     <el-table-column align="left" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="warning"
            @click="handleChangepw(scope.$index, scope.row)"
            >修改密码</el-button
          >
        </template>
      </el-table-column> 
  </el-table>
   <div class="pa">
    <Pagination :total="getUser.total" />
    </div>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'
import Pagination from "@/pages/admin/Pagination"
  export default {


    data() {
      return {
      
      }
    },
    mounted(){
        this.$store.dispatch('getUserList',{pageNum:1,pageSize:10})
    },
    methods:{
       handleChangepw(index,row){
        const {id,user_name} =row
        
        this.$router.push({name:'changepw',params:{id,user_name,mark:0}})

       }
    },
    computed:{
        ...mapGetters(['getUser','getUserList'])
    },
    components:{
         Pagination
    }
  }
</script>
<style scoped lang='less'>
 .pa {


  margin-top:30px;
  margin-left:454px
  // transform: translateX(-50%);
  
}
</style>