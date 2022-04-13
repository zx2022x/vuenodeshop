<template>
  <div>
    <div class="w">
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

      <div class="userInFo">
        <div class="Info">
          <div class="title">
            登录手机
            <div class="f1">
              <el-descriptions
                class="margin-top"
                :column="2"
                :size="size"
                border
              >
                <template slot="extra">
                    <el-button type="info" size="small">选择</el-button>
                  </template>
               <template slot="extra">
                    <el-button type="warning" size="small">编辑</el-button>
                  </template>
                
         
                  <template slot="extra">
                    <el-button type="danger" size="small">删除</el-button>
                  </template>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-user"></i>
                    用户名
                  </template>
                  kooriookami
                </el-descriptions-item>
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-mobile-phone"></i>
                    手机号
                  </template>
                  18100000000
                </el-descriptions-item>
               
                 
               
                <el-descriptions-item>
                  <template slot="label">
                    <i class="el-icon-office-building"></i>
                    联系地址
                  </template>
                  江苏省苏州市吴中区吴中大道 1188 号
                </el-descriptions-item>
              </el-descriptions>
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
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const { ruleForm } = this;

          const password = ruleForm.pass;

          await this.$store.dispatch("changeMyPd", { password });

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
    getData(){
      this.$store.dispatch('getAccrptInFo')
    }
  },
  computed: {
    getUsername() {
      return this.$route.params.user_name;
    },
  },
  mounted(){
     this.getData()
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
    padding-top: 15px;
  }
}
</style>