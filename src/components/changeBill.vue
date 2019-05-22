<template>
  <div class="container">
    <el-breadcrumb separator="/" class="header">
      <el-breadcrumb-item>我的E票</el-breadcrumb-item>
      <el-breadcrumb-item>商转E</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="content">
      <el-row>
        <el-col :span="8">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="上传商票">
              <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </el-form-item>
            <el-form-item label="开票方">
              <el-select v-model="form.option" placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="商票编号">
              <el-input  v-model="form.num"></el-input>
            </el-form-item>
            <el-form-item label="商票金额">
              <el-input  v-model="form.sum"></el-input>
            </el-form-item>
            <el-form-item label="开票日期">
              <el-col :span="11">
                <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
              </el-col>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit">开始匹配</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
    export default {
        name: "changeBill",
        data() {
          return {
            options: [
              {
                value:'virtual',
                label:'虚拟企业'
              }
            ],
            form: {
              imageUrl: '',
              option:'',
              num:'',
              sum:'',
              date:''
            }
          }
        },
        methods: {
          handleAvatarSuccess(res, file){
            this.form.imageUrl = URL.createObjectURL(file.raw);
          },
          beforeAvatarUpload(file){
            var isJPG = file.type === 'image/jpeg';
            var isLt2M = file.size / 1024 / 1024 < 2;

            if (!isJPG) {
              this.$message.error('图片只能是 JPG 格式!');
            }
            if (!isLt2M) {
              this.$message.error('图片大小不能超过 2MB!');
            }
            return isJPG && isLt2M;
          },
          onSubmit() {
            console.log('submit!');
          }
        }
    }
</script>

<style>
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
  /*上传图片*/
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #0E3C6C;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
</style>
