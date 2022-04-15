<template>
  <div class="additem">
    <div class="i" @click="close">
      <i class="el-icon-circle-close"></i>
    </div>
    <el-form
      :model="numberValidateForm"
      ref="numberValidateForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <div class="conph">
        <el-form-item
          label="收件人"
          prop="consignee"
          :rules="[
            { required: true, message: '收件人不能为空' },
            { type: 'string' },
          ]"
        >
          <el-input
            type="phone"
            v-model="numberValidateForm.consignee"
            autocomplete="off"
          ></el-input>
        </el-form-item>

        <el-form-item
          label="手机号"
          prop="phone"
          :rules="[{ required: true, message: '手机号不能为空' }]"
        >
          <el-input
            type="phone"
            v-model="numberValidateForm.phone"
            autocomplete="off"
          ></el-input>
          <!-- {{item.phone}} -->
        </el-form-item>
      </div>

      <el-form-item
        label="地址"
        prop="address"
        :rules="[{ required: true, message: '地址不能为空' }]"
      >
        <el-input
          type="address"
          v-model="numberValidateForm.address"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('numberValidateForm')"
          >更改</el-button
        >
        <el-button @click="resetForm('numberValidateForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      numberValidateForm: {
        phone: "",
        consignee: "",
        address: "",
      },
      prs:'',
    };
  },
  props: ["item"],
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const { numberValidateForm,prs } = this;
          const { consignee, phone, address } = numberValidateForm;
          
          // const {id}=this.props.item
          // console.log("地址是" + consignee);

          await this.$store.dispatch("editItem",{
            id:prs,
            consignee,
            phone,
            address,
            
          });
        
          this.$emit("closeEIGetData");

        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    //自定义事件
    close() {
      this.$emit("closeEditItem");
    },
    //获取父组件传来的值props
  
  },
 
  watch: {
    item: {
      handler(nV, oV) {
        console.log("新的值"+nV)
        this.numberValidateForm.phone = nV.phone;
        this.numberValidateForm.consignee = nV.consignee;
        this.numberValidateForm.address = nV.address;
        this.prs=nV.id
      },
      deep: true,
      immediate: true,
    },
    // item:function(nV,oV){
    //   console.log('新的值是'+oV.phone)
    //   deep:true;
    // }
  },
};
</script>
<style scoped lang='less'>
.conph {
  width: 300px;
}
.additem {
  width: 100%;
  height: 284px;

  border: 1px solid #d4d4d4;
}
.i {
  margin-left: 623px;
}
</style>