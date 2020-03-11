<template>
  <div class="left">
      <div class="user-info">
          <div class="user-info-bc"></div>
          <i class="el-icon-s-custom"></i>
          <div>{{username}}/管理员</div>
      </div>
      <div class="manage" :class="{'color-4c4a55':menu=='user'}" @click="selectManage(1)"><i class="el-icon-user-solid"></i><span class="manage-span">用户管理</span></div>
      <div class="manage" :class="{'color-4c4a55':menu=='prod'}" @click="selectManage(2)"><i class="el-icon-s-cooperation"></i><span class="manage-span">商品管理</span></div>
      <div class="manage" :class="{'color-4c4a55':menu=='prod'}" @click="selectManage(3)"><i class="el-icon-s-cooperation"></i><span class="manage-span">申诉管理</span></div>
  </div>
</template>

<script>
export default {
    data(){
        return {
            menu:"user",
            username:""
        }
    },
    methods:{
        selectManage(id){
            // const self = this;
            if(id==1){
                this.menu = "user";
                this.$router.push("/main/user");
            }else if (id == 2){
                this.menu = "prod";
                this.$router.push("/main/prod");
            } else if (id==3) {
                this.menu = "appeal";
                this.$router.push("/main/appeal");
            }
            
        }
    },
    created(){
        this.username = sessionStorage.getItem("username");
    }

}
</script>

<style>
.left{
    /* height: 100%; */
    /* position: relative; */
    /* width:200px; */
    background-color: #34323d;
    color:#fff;
    height:100%;
    font-size:14px;
    /* padding:20px; */
}
.manage{
    padding:15px 30px;
    height:20px;
    line-height: 20px;
    /* background-color: #409eff; */
}
.color-4c4a55{
    background-color: #4c4a55;
}
.manage-span{
    margin-left:10px;
}
.user-info{
    padding:25px 30px;
    text-align:center;
    position: relative;
}
.user-info i{
    position: absolute;
    left: 86px;
    color:
    #34323d;
    top: 36px;
    font-size: 28px;
}
.user-info-bc{
    width:50px;
    height:50px;
    border-radius: 50px;
    background-color: #fff;
    margin-left:45px;
    margin-bottom: 10px;
}
</style>