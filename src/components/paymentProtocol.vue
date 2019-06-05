<template>
  <div class="container">
    <el-breadcrumb separator="/" class="header">
      <el-breadcrumb-item>系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>支付协议</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <script id="editor" type="text/plain" style="width:800px;height:600px;margin:0 auto;"></script>
    </div>
  </div>
</template>

<script>
    export default {
      name: "paymentProtocol",
      mounted() {
        var _this = this;
        UE.delEditor('editor');//vue中第一次加载ueditor正常，第二次加载不显示，在在每次加载前删除即可解决这一问题
        _this.editor = UE.getEditor('editor'); //初始化UE
      },
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
</style>
