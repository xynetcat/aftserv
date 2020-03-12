<template>
  <div class="home">
      <!-- <div class="left"></div> -->
      <div class="home-title">主页</div>
        <div>
            <el-row>
                <el-col :span="3">
                    <el-card :body-style="{ padding: '1px' }">
                    <div class="card-info">
                        <div class="user-info-bc"></div>
                        <i class="el-icon-user-solid" ></i>
                        <div>当前用户数量:{{curUserNum}}</div>
                    </div>
                    
                    <div style="padding: 14px;">
                        <span class="card-word">当前用户数量</span>
                        <div class="bottom clearfix">
                        <time class="num">{{ curUserNum }}</time>
                        <el-button type="text" class="button">刷新</el-button>
                        </div>
                    </div>
                    </el-card>
                </el-col>
                <el-col :span="3">
                    <el-card :body-style="{ padding: '1px' }">
                    <i class="el-icon-user-solid"></i>
                    <div style="padding: 14px;">
                        <span>当前出售数量</span>
                        <div class="bottom clearfix">
                        <time class="num">{{ curSaleNum }}</time>
                        <el-button type="text" class="button">刷新</el-button>
                        </div>
                    </div>
                    </el-card>
                </el-col>
                <el-col :span="3">
                    <el-card :body-style="{ padding: '1px' }">
                    <i class="el-icon-user-solid"></i>
                    <div style="padding: 14px;">
                        <span>当前预约数量</span>
                        <div class="bottom clearfix">
                        <time class="num">{{ curOrderNum }}</time>
                        <el-button type="text" class="button">刷新</el-button>
                        </div>
                    </div>
                    </el-card>
                </el-col>
                <el-col :span="3">
                    <el-card :body-style="{ padding: '1px' }">
                    <i class="el-icon-user-solid"></i>
                    <div style="padding: 14px;">
                        <span>当前用户数量</span>
                        <div class="bottom clearfix">
                        <time class="num">{{ curOrderNum }}</time>
                        <el-button type="text" class="button">刷新</el-button>
                        </div>
                    </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
      </div>
</template>

<script>
export default {
    data(){
        return{
            curOrderNum: 100,
            curSaleNum:50,
            curUserNum:100
        }
    },
    components:{

    }
}
</script>

<style>
    .home{
        width:100%;
        height:100%;
    }
    .num{
        display: flex;
        height:100%;
    }
    .home-header{
        width:100%;
    }
    .home-title {
        height: 34px;
        line-height: 34px;
    }
    .card-word {
        height: 34px;
        line-height: 34px;
    }
    .card-info{
        height: 100px;
        padding:1px 10px;
        text-align:center;
        position: relative;
    }
</style>