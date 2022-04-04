<template>
  <div>
    <el-table :data="getUserList" stripe style="width: 100%">
      <el-table-column prop="id" label="ID" width="50"> </el-table-column>
      <el-table-column prop="user_name" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="password" label="密码" width="300">
      </el-table-column>

      <el-table-column label="注册时间" width="250">
        <template slot-scope="scope">
          <span>{{ handelReTime(scope.$index, scope.row) }}</span>
        </template>
      </el-table-column>

      <el-table-column prop="updatedAt" label="更新时间" width="250">
        <template slot-scope="scope">
          <span>{{ handelUaTime(scope.$index, scope.row) }}</span>
        </template>
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
      <Pagination
        :total="getUser.total"
        @changePnum="changePnum"
        :pageSize="8"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Pagination from "@/pages/admin/Pagination";
export default {
  data() {
    return {};
  },
  mounted() {
    this.getdata();
  },
  methods: {
    getdata(pageNum = 1, pageSize = 8) {
      this.$store.dispatch("getUserList", { pageNum, pageSize });
    },

    handleChangepw(index, row) {
      const { id, user_name } = row;

      this.$router.push({
        name: "changepw",
        params: { id, user_name, mark: 0 },
      });
    },

    changePnum(val) {
      this.getdata(val);
    },
    //处理注册时间
    handelReTime(index, row) {
      const { createdAt } = row;
      const regTime = createdAt.replace("T", " ").replace(".000Z", "");

      return regTime;
    },
    //处理更新时间
    handelUaTime(index, row) {
      const { updatedAt } = row;
      const upTime = updatedAt.replace("T", " ").replace(".000Z", "");

      return upTime;
    },
  },
  computed: {
    ...mapGetters(["getUser", "getUserList"]),
  },
  components: {
    Pagination,
  },
};
</script>
<style scoped lang='less'>
 .pa {


  margin-top:30px;
  margin-left:454px
  // transform: translateX(-50%);
  
}
</style>