<template>
  <div class="container">
    <el-breadcrumb separator="/" class="header">
      <el-breadcrumb-item>系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>交易监控</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <div class="dealTitle">交易信息</div>
      <el-row class="dealContent">
        <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
          <el-row class="dealRowTitle">
            <el-col :span="24">交易时间：</el-col>
          </el-row>
          <el-row class="dealRowContent">
            <el-col :span="24">{{startDate}} 到 {{endDate}}</el-col>
          </el-row>
          <el-row class="dealRowTitle">
            <el-col :span="24">交易数：</el-col>
          </el-row>
          <el-row class="dealRowContent">
            <el-col :span="24">{{totalNumber}}</el-col>
          </el-row>
        </el-col>
        <el-col :xs="24" :sm="24" :md="12" :lg="18" :xl="18"><div id="chartContent" style="width:100%;height:300px;"></div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "dealMonitor",
        data(){
          return {
            startDate:"2019-05-22",
            endDate:"2019-05-29",
            totalNumber:"22220",
            chart:null
          }
        },
      mounted(){
          var _this=this;
          _this.chart=_this.echarts.init(document.getElementById('chartContent'));
          var option={
            xAxis: {
              type: 'category',
              data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
              type: 'value'
            },
            series: [{
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: 'line',
              itemStyle: {
                normal: {
                  color: "#0E3C6C",
                    lineStyle: {
                    color: "#0E3C6C"
                  }
                }
              }
            }]
          }
        _this.chart.setOption(option);
        window.onresize =function(){
          _this.chart.resize();
        }
      }
    }
</script>

<style scoped>
  .container{
    padding:30px;
  }
  .header{
    margin-bottom:30px;
  }
  .content{
    background-color: #f1f1f1;
    padding:30px;
    border-radius:8px;
  }
  .dealTitle{
    font-size:20px;
    margin-bottom:30px;
  }
  .dealContent{
    background-color: #fff;
    padding:20px;
    border-radius:5px;
  }
  .dealRowTitle{
    color:#999;
    font-size:16px;
    margin-bottom:20px;
  }
  .dealRowContent{
    font-size:20px;
    font-weight:500;
    margin-bottom:30px;
  }
</style>
