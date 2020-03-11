<template>
  <div class="header">
    <div class="tp">
      <img src="../assets/logo.png" />
    </div>
    <span class="ht">后台管理系统</span>
    <div class="logout">
      <el-button type="primary" size="small" @click="logout()">退出</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{
      
    }
  },
  methods: {
      logout(){
          sessionStorage.removeItem("username")
          this.$router.push({path:"/login"})
      }
  }
};
</script>

<style>
.header {
  /* width:100%; */
  height: 40px;
  line-height: 40px;
  padding: 10px 30px;
  background-color: #29282e;
  color: #fff;
}
.header .tp img {
  height: 40px;
  width: 100px;
}
.header .tp {
  display: inline-block;
  width: 170px;
}
.logout {
  display: inline-block;
  position: relative;
  top: -54px;
  margin-left: calc(100% - 100px);
}
.ht {
  position: relative;
  top: -13px;
  font-size: 16px;
  margin-left: 20px;
}
.logout .el-button {
  width: 100px !important;
}
</style>