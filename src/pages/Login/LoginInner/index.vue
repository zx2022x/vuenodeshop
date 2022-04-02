<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-form-item label="用户名" prop="user_name">
      <el-input v-model.number="ruleForm.user_name"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input
        type="password"
        v-model="ruleForm.pass"
        autocomplete="off"
      ></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
      <el-button @click="resetForm('ruleForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    var checkName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      callback();
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      }

      callback();
    };

    return {
      ruleForm: {
        pass: "",

        user_name: "",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],

        user_name: [{ validator: checkName, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const { pass, user_name } = this.ruleForm;

          const  code  = await this.$store.dispatch("userLogin", {user_name,password: pass});

          if (code == 0) {
            this.$router.push("/home");
          }

        } else {
          console.log("参数错误");
          return false;
        }
      });
    },

    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  mounted(){
       
       const {user_name,password}=this.$route.params
       this.ruleForm.user_name=user_name
       this.ruleForm.pass=password


  }
  
};
</script>

<style scoped lang='less'>
// .el-form {
 
// }
</style>