<template>
  <div id="main" class="main">
      <!-- <div class="left"></div> -->
      <div class="main-header"><Header></Header></div>
      <div class="main-body">
        <div class="main-left"><Left></Left></div>
        <div class="main-right">
            <router-view></router-view>
        </div>
      </div>
      
</div>
</template>

<script>
import Header from "./Header.vue"
import Left from "./Left.vue"
export default {
    data(){
        return{

        }
    },
    components:{
        Header,
        Left
    }
}
</script>

<style>
    .main{
        width:100%;
        height:100%;
    }
    .main-body{
        display: flex;
        height:100%;
    }
    .main-header{
        width:100%;
    }
    .main-left{
        width:200px;
        height:100%;
        
    }
    .main-right{
        flex:1;
    }
</style>