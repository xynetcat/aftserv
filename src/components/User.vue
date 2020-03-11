<template>
  <div class="user">
    <div class="user-title">用户管理</div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="phoneNum" label="账户" width="120"></el-table-column>
        <el-table-column prop="material" label="当前单量" width="120"></el-table-column>
        <el-table-column prop="recommendProfit" label="推荐收益" width="120"></el-table-column>
        <el-table-column prop="splitReward" label="拆分收益" width="120"></el-table-column>
        <el-table-column prop="totalReward" label="总收益" width="120"></el-table-column>
        <el-table-column prop="totalCapital" label="总资产" width="120"></el-table-column>
        <el-table-column prop="recommender" label="推荐人" width="120"></el-table-column>
        <el-table-column prop="level" label="等级" width="120"></el-table-column>
        <el-table-column prop="status" label="账号状态"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
    };
  },
  mounted () {
    this.userList()
  },
  methods: {
    userList() {
      const that = this;
      that.$axios
        .post("/api/coupon/userlist", {
          pageSize: 20,
          curPage: 1
        })
        .then(function(response) {
          console.log(response);
          const data = JSON.parse(response.data);
          if (data.errno === 0) {
            that.tableData = data.data.list;
            sessionStorage.setItem("tableData", data.data.list);
            that.reload();
            console.log(data);
          } else {
            that.error = data.errmsg;
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>

<style>
.user {
  padding: 30px;
}
.user-title {
  height: 34px;
  line-height: 34px;
}
.el-table th{
    background-color: #f2f1f6 !important;
}
</style>