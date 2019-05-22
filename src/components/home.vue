<template>
  <div class="container">
    <div class="header">
      <img src="../assets/ic_head_big.png" class="header-img"/>
      <span>
        <span class="header-title">欢迎来到 管理后台!</span>
        <span class="header-content">很高兴见到你!</span>
      </span>

    </div>

    <div class="content">
      <span>平台概览</span>
      <!--响应式布局-->
      <el-row style="margin-top:20px;" :gutter="20">
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <div class="content-col">
            <span>
              <p>区块链</p>
              <p class="middle-font">已部署区块链</p>
              <p><span class="footer-font">{{viewData.blockChainNum}}</span>条</p>
            </span>
            <i class="icon iconfont icon-icon-1 content-img"></i>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" >
          <div class="content-col">
            <span>
              <p>节点数</p>
              <p class="middle-font">区块链节点</p>
              <p><span class="footer-font">{{viewData.peerNum}}</span>个</p>
            </span>
            <i class="icon iconfont icon-jiedian content-img"></i>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <div class="content-col">
            <span>
              <p>智能合约</p>
              <p class="middle-font">链上已部署合约</p>
              <p><span class="footer-font">{{viewData.ChaincodeNum}}</span>个</p>
            </span>
            <i class="icon iconfont icon-icon- content-img"></i>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <div class="content-col">
            <span>
              <p>当前区块高度</p>
              <p style="margin-top:20px;"><span class="footer-font">{{viewData.BlockHeightNum}}</span>个</p>
            </span>
            <i class="icon iconfont icon-gaodu content-img"></i>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8" >
          <div class="content-col">
            <span>
              <p>用户总数</p>
              <p style="margin-top:20px;"><span class="footer-font">{{viewData.UserNum}}</span>个</p>
            </span>
            <i class="icon iconfont icon-yonghu content-img"></i>
          </div>
        </el-col>
        <el-col :xs="24" :sm="12" :md="8" :lg="8" :xl="8">
          <div class="content-col">
            <span>
              <p>24小时交易笔数</p>
              <p style="margin-top:20px;"><span class="footer-font">{{viewData.BlockTxNum}}</span>笔</p>
            </span>
            <i class="icon iconfont icon-jiaoyijilu content-img"></i>
          </div>
        </el-col>
      </el-row>
    </div>

  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return {
      viewData:{},
    }
  },
  created(){
    //解决this指向的问题
    var _this=this;
    _this.query('get','/home/viewData',{},function(res){
      _this.viewData=res.data.data;
    })
  }
}
</script>

<style scoped>
  .container{
    position: absolute;
    top: 50px ;
    left: 0 ;
    right:0;
    bottom: 0;
    padding:20px;
    background-color: #F5F5F5;
    display:flex;
    flex-direction: column;
  }
  .header{
    height:100px;
    background-color: #fff;
    padding:20px 0 20px 20px;
    box-shadow:0px 2px 4px 0px rgba(100,78,155,0.1);
    display:flex;
    align-items: center;
  }
  .header-img{
    width:72px;
    height:72px;
    margin-right:20px;
  }
  .header-title{
    display:block;
    color:#333;
    font-size:22px;
  }
  .header-content{
    color:#999;
    font-size:14px;
    margin-top:5px;
  }

  .content{
    flex:1;
    background-color: #fff;
    padding:20px 0 20px 20px;
    box-shadow:0px 2px 4px 0px rgba(100,78,155,0.1);
    margin-top:30px;
  }
  .content-col{
    border:2px solid #eee;
    border-radius:2px;
    height:140px;
    margin-top:20px;
    display:flex;
    align-items: center;
    position:relative;
    padding-left:20px;
  }
  .content-img{
    position:absolute;
    top:20px;
    right:20px;
    /*字体图标可是使用字体相关的属性设置css*/
    font-size:70px;
    color: #8e8e8e;
  }
  .middle-font{
    color: #999;
    font-size:12px;
    margin:5px 0 10px 0;
  }
  .footer-font{
    font-weight:700;
    font-size:24px;
  }

  .footer{
    background-color: #fff;
    padding:20px 0 20px 20px;
    box-shadow:0px 2px 4px 0px rgba(100,78,155,0.1);
    margin-top:20px;
  }
</style>
