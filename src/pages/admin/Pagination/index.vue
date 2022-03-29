<template>
  <el-pagination
    background
    layout="prev, pager, next"
    :total="total"
    @current-change="changePage"
  >
  </el-pagination>
</template>

<script>
export default {
  name:'pagination',
  props: ['total'],
  
  methods: {
    async getdata(pageNum = 1, pageSize = 6) {
      try {
        const message = await this.$store.dispatch("getSpListInfo", {
          pageNum,
          pageSize,
        });
        this.$message({
          message: message,
          type: "success",
        });
      } catch (error) {
        this.$message.error(error.message);
      }
    },
    changePage(val) {

      this.getdata(val);
    },
  },
};
</script>

<style scoped lang='less'>

</style>