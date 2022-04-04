<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="total"
    :page-size="pageSize"
    @current-change="changePage"
  >
  </el-pagination>
</template>

<script>
export default {
  name:'pagination',
  props: ['total','pageSize'],

  
  methods: {
    // async getdata(pageNum = 1, pageSize = 100) {

     
    //   try {
    //     const message = await this.$store.dispatch(this.target, {
    //       pageNum,
    //       pageSize,
    //     });
    //     // this.$message({
    //     //   message: message,
    //     //   type: "success",
    //     // });
    //   } catch (error) {
    //     this.$message.error(error.message);
    //   }
    // },
    changePage(val) {
       
    this.$emit('changePnum',val)
    console.log('total值是')
      console.log(this.total)

    },
  },
};
</script>

<style scoped lang='less'>

</style>