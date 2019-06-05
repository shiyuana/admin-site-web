<template>
  <div class="container">
    <el-breadcrumb separator="/" class="header">
      <el-breadcrumb-item>我的E票</el-breadcrumb-item>
      <el-breadcrumb-item>E票管理</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <el-row :gutter="50">
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="colBottom">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>E票编号：23456122</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="handleFlow">流转轨迹</el-button>
            </div>
            <div  class="text item">
              <el-row class="rowSmallBottom">
                <el-col :span="24">E票金额：500000</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">开票方：虚拟金融机构A</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">开票日期：2019-02-12</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">转化日期：2019-05-12</el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="colBottom">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>E票编号：23456122</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="handleFlow">流转轨迹</el-button>
            </div>
            <div  class="text item">
              <el-row class="rowSmallBottom">
                <el-col :span="24">E票金额：500000</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">开票方：虚拟金融机构A</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">开票日期：2019-02-12</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">转化日期：2019-05-12</el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="colBottom">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>E票编号：23456122</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="handleFlow">流转轨迹</el-button>
            </div>
            <div  class="text item">
              <el-row class="rowSmallBottom">
                <el-col :span="24">E票金额：500000</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">开票方：虚拟金融机构A</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">开票日期：2019-02-12</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">转化日期：2019-05-12</el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="colBottom">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>E票编号：23456122</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="handleFlow">流转轨迹</el-button>
            </div>
            <div  class="text item">
              <el-row class="rowSmallBottom">
                <el-col :span="24">E票金额：500000</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">开票方：虚拟金融机构A</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">开票日期：2019-02-12</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">转化日期：2019-05-12</el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
      <el-row :gutter="50">
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="colBottom">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>E票编号：23456122</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="handleFlow">流转轨迹</el-button>
            </div>
            <div  class="text item">
              <el-row class="rowSmallBottom">
                <el-col :span="24">E票金额：500000</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">开票方：虚拟金融机构A</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">开票日期：2019-02-12</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">转化日期：2019-05-12</el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="colBottom">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>E票编号：23456122</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="handleFlow">流转轨迹</el-button>
            </div>
            <div  class="text item">
              <el-row class="rowSmallBottom">
                <el-col :span="24">E票金额：500000</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">开票方：虚拟金融机构A</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">开票日期：2019-02-12</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">转化日期：2019-05-12</el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="colBottom">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>E票编号：23456122</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="handleFlow">流转轨迹</el-button>
            </div>
            <div  class="text item">
              <el-row class="rowSmallBottom">
                <el-col :span="24">E票金额：500000</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">开票方：虚拟金融机构A</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">开票日期：2019-02-12</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">转化日期：2019-05-12</el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
        <el-col :xs="24" :sm="12" :md="6" :lg="6" :xl="6" class="colBottom">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>E票编号：23456122</span>
              <el-button style="float: right; padding: 3px 0" type="text" @click="handleFlow">流转轨迹</el-button>
            </div>
            <div  class="text item">
              <el-row class="rowSmallBottom">
                <el-col :span="24">E票金额：500000</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">开票方：虚拟金融机构A</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">开票日期：2019-02-12</el-col>
              </el-row>
              <el-row class="rowSmallBottom">
                <el-col :span="24">转化日期：2019-05-12</el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!--流转轨迹dialog-->
    <el-dialog title="流转轨迹" :visible.sync="dialogflowVisible" width="30%">
      <div style="padding:20px;">
        <el-timeline>
          <el-timeline-item
            v-for="(item, index) in flowList"
            :key="index"
            :color="item.color"
            :timestamp="item.timestamp">
            {{item.content}}
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-dialog>

  </div>
</template>

<script>
    export default {
      name: "billManage",
      data(){
          return {
            dialogflowVisible:false,
            flowList:[
              {
                content:'虚拟金融机构A开具商票',
                color:'#0fa7f3',
                timestamp:'2018-09-12'
              },
              {
                content:'商票转E票',
                color:'#0bbd87',
                timestamp:'2019-01-12'
              },
              {
                content:'E票支付给虚拟供应商A',
                color:'#434343',
                timestamp:'2019-03-12'
              },
            ]
          }
      },
      methods:{
        handleFlow:function(){
          var _this=this;
          _this.dialogflowVisible=true;
        }
      }
    }
</script>

<style scoped>
  .container{
    padding:20px;
  }
  .header{
    margin-bottom:30px;
  }
  .content{
    background-color: #f1f1f1;
    padding:30px;
    border-radius:8px;
  }
  .colBottom{
    margin-bottom:50px;
  }
  .rowSmallBottom{
    margin-bottom:10px;
  }
</style>
