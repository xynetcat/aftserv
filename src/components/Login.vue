<template>
  <div class="login">
    <div class="form">
      <div class="title">后台管理系统</div>
      <div class="content">
        <div>
          <label>用户名：</label>
          <input type="text" name="name" placeholder="请输入用户名" v-model="username" />
        </div>
        <div class="password">
          <label>密码：</label>
          <input type="password" name="password" placeholder="请输入密码" v-model="password" />
        </div>
        <div>
          <button @click="login()">登录</button>
        </div>
        <div class="login-error">{{error}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      error: ""
    };
  },
  methods: {
    login() {
      const that = this;
      //   that.$router.push({path:"/main/user"});
      if (!that.username) {
        that.error = "请输入用户名";
        return;
      }
      if (!that.password) {
        that.error = "请输入密码";
        return;
      }

      that.$axios
        .post("/api/coupon/adminlogin", {
          phonenum: that.username,
          password: that.password
        })
        .then(function(response) {
          console.log(response);
          const data = JSON.parse(response.data);
          console.log(data);
          if (data.errno === 0) {
            sessionStorage.setItem("username", that.username);
            that.$router.push({ path: "/main/user" });
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.login {
  width: 100%;
  height: 100%;
  background: url("../assets/login.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.form {
  width: 430px;
  height: 260px;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -130px;
  margin-left: -215px;
  /* border:1px solid #efefef; */
  /* border-radius: 10px 10px */
}
.title {
  height: 50px;
  background-color: #d2e2f2;
  color: #11559a;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
  /* border-radius: 10px 10px; */
  /* border */
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  /* border: 1px solid #efefef */
}
.content {
  /* border:1px solid #efefef; */
  background-color: #c7d7e7;
  padding: 40px 35px 15px;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  text-align: center;
  font-size: 14px;
}
label {
  display: inline-block;
  width: 60px;
  text-align: left;
}
input {
  height: 26px;
  width: 270px;
  line-height: 26px;
  padding-left: 6px;
}
.password {
  margin-top: 20px;
}
button {
  margin-top: 20px;
  margin-left: 60px;
  width: 280px;
  background-color: #00306e;
  height: 32px;
  color: #fff;
  border: none;
}
.login-error{
    color: #f24;
    margin:10px 0px 0px 70px;
    text-align: left;
    height: 20px;
    line-height: 20px;
}
</style>
