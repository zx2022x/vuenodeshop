<template>
  <div>
    <div class="w">
       <div class="userInFo">
        <div class="Info">
        <div class="title">
          登录手机
          <div class="f">
             <el-form :model="ruleForm1" status-icon :rules="rules1" ref="ruleForm1" label-width="100px" class="demo-ruleForm">
  
                  <el-form-item label="年龄" prop="age">
                    <el-input v-model.number="ruleForm1.age"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="submitFormNam('ruleForm1')">提交</el-button>
                    <el-button @click="resetForm('ruleForm1')">重置</el-button>
                  </el-form-item>
            </el-form>
          </div>
          
          </div>
        </div>

      <div class="userInFo">
        <div class="Info">
        <div class="title">
          登录手机
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

      
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    var checkAge = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('年龄不能为空'));
        }
    }
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
       ruleForm1: {
       
        age: '',
      },
       rules1:{
         age: [
            { validator: checkAge, trigger: 'blur' }
          ]
       },

      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
         
      },
    };
  },
  methods: {
     submitFormName(formName1) {
      this.$refs[formName1].validate(async (valid) => {

        if (valid) {
    
            

            this.$message({
              message: message,
              type: "success",
            });
           

            //
         
          
        } else {
          console.log("error submit!!");
          return false;
        }

      });
    },
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          try {
            const { ruleForm } = this;

            const password = ruleForm.pass;
            const { id, mark } = this.$route.params;
            
            const message = await this.$store.dispatch("changeUserPw", {
              id,
              password,
            });

            this.$message({
              message: message,
              type: "success",
            });
            if (mark == 0) {
              this.$router.push("/usermage");
            } else {
              this.$router.push("/");
            }

            //
          } catch (error) {
            this.$message.error(error.message);
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  computed: {
    getUsername() {
      return this.$route.params.user_name;
    },
  },
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
}
</style>