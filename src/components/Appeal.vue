<template>
  <div class="appeal">
    <div class="appeal-title">申诉管理</div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="phoneNum" label="申诉人" width="120"></el-table-column>
        <el-table-column prop="blockId" label="货单号"></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" type="danger" @click="handleDelete(scope.row.phoneNum)">确认处理</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="curPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        >
      </el-pagination>
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
    this.appealList()
  },
  methods: {
    appealList() {
      const that = this;
      that.$axios
        .post("/api/coupon/appeallist", {
          pageSize: 15,
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
    },
    handleSizeChange(val) {
      this.pageSize = val;
      console.log(val);
      this.appealList();
    },
    handleCurrentChange(val) {
      this.curPage = val
      this.appealList();
    },
    handleDelete(phoneNum) {
      const that = this;
      that.$axios
        .post("/api/coupon/delappeal", {
          phoneNum: phoneNum
        })
        .then(function(response) {
          console.log(response);
          const data = JSON.parse(response.data);
          if (data.errno === 0) {
            that.appealList();
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
.appeal {
  padding: 30px;
}
.appeal-title {
  height: 34px;
  line-height: 34px;
}
.el-table th{
    background-color: #f2f1f6 !important;
}
</style>