<template>
  <div>
    <div class="w">
      <div class="userInFo">
        <div class="Info">
          <div class="title">
            修改密码
            <div class="f">
              <el-form
                :model="ruleForm"
                status-icon
                :rules="rules"
                ref="ruleForm"
                label-width="100px"
                class="demo-ruleForm"
              >
                <el-form-item label="新密码" prop="pass">
                  <el-input
                    type="password"
                    v-model="ruleForm.pass"
                    autocomplete="off"
                  >
                  </el-input>
                </el-form-item>
                <el-form-item label="确认密码" prop="checkPass">
                  <el-input
                    type="password"
                    v-model="ruleForm.checkPass"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>

                <el-form-item>
                  <el-button type="primary" @click="submitForm('ruleForm')"
                    >提交</el-button
                  >
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </el-form-item>
              </el-form>
            </div>
            
          </div>
        </div>
      </div>

      <div class="userInFo">

        <div class="Info">
          <div class="title">
            收货人信息
            <div class="f1" v-for="(item, index) in getAInFo" :key="item.id">
              <el-descriptions
                class="margin-top"
                :column="2"
                :size="size"
                border
              >
                <template slot="extra">
                  <el-button :type="item.is_default ? 'success': 'info' " :class="{}" size="small" @click="changeChoice(item.id,item.is_default)">选择</el-button>
                </template>

                <template slot="extra">
                  <el-button type="warning" size="small" @click="editItem(item.id)">编辑</el-button>
                </template>

                <template slot="extra">
                  <el-button type="danger" size="small" @click="deleteShouJ(item.id)">删除</el-button>
                </template>

                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-user"></i>
                    收件人
                  </template>
                  {{ item.consignee }}
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-mobile-phone"></i>
                    手机号
                  </template>
                  {{ item.phone }}
                </el-descriptions-item>

                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-office-building"></i>
                    联系地址
                  </template>
                  {{ item.address }}
                </el-descriptions-item>
              </el-descriptions>
              <!-- 这里 -->
              <EditItem  v-if="editId==item.id ? true : false" 
              @closeEditItem="closeEditItem(item.id)" :item="item"
              @closeEIGetData="closeEIGetData"/>


            </div>
            <div class="add" @click="additem">
              <i class="el-icon-caret-bottom"></i>
            </div>
            <div class="additem">
             
              
              <AddItem v-if="addjude" @close="closeAddItem"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex"
import AddItem from "@/pages/Home/changeUserInFo/addItem"
import EditItem from "@/pages/Home/changeUserInFo/editItem"
import {clearToken} from "@/utils/token"
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
      },
      size: "",

      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
      },
     activeId:1,
     addjude:false,
     editId:'',
     mark:true,
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const { ruleForm } = this;

          const password = ruleForm.pass;

          await this.$store.dispatch("changeMyPd", { password });
          clearToken()
          this.$router.push({name:'userlogin',params:{mark:1}})
          //
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    getData() {
      this.$store.dispatch("getAccrptInFo");
    },
    changeChoice(id,is_default){
       console.log("is_default值"+is_default)
           if(!is_default){
              
               this.$store.dispatch('ChangeTai',id)
             
                this.getData()
              
             

           }
         
    },
    //关闭增加收件人
    closeAddItem(){
     
        this.addjude=false
    },
    //增加收件人
    additem(){
      
      // this.$router.push('/userinfo/additem')
      this.addjude=true
    },
    //删除搜索
    deleteShouJ(id){
       this.$store.dispatch('deleteShouJ',id)
       this.getData()
    },
    //编辑收件人信息
    editItem(id){
        this.editId=id
    },
    //关闭编辑页面
    closeEditItem(){
        this.editId=-1
    },
 //关闭编辑页面并请求数据
    closeEIGetData(){
         this.editId=-1
         this.getData()
            
    }

  },
  computed: {
    ...mapGetters(["getAInFo"]),
    getUsername() {
      return this.$route.params.user_name;
    },
  
  },
  mounted() {
    this.getData();
    this.$bus.$on('getData',(a)=>{
      console.log(a)
       this.addjude=a
       this.getData();

    })
  },
  components:{
     AddItem,
     EditItem,
  },
  watch:{

    //  getAInFo:{
    //         handler(oV,nV){
                
    //         },
    //         deep:true,
    //   }
    mark(nV,oV){
       this.getData()
    }
  }

};
</script>

<style lang='less' scoped>
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
.w {
  width: 1290px;

  margin: 0 auto;
}
.userInFo {
  .clearfix;
  margin-left: 356px;
  margin-bottom: 74px;

  //   transform:translateX(-50%)
  .Info {

  }

  .title {
    line-height: 40px;
    height: 40px;
    width: 70%;
    border-bottom: 2px solid #d4d4d4;
  }
  .f {
    margin-top: 15px;
    width: 300px;
  }
  .f1 {
    // height: 300px;
    // width: 100%;
    padding-top: 15px;
  
   
  }
  .add{
    margin-left:262px;
     font-size:68px;
     
  }
        
 
  
}
</style>