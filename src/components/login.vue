<template>
  <div class="container">
    <div class="content">
      <img src="../assets/login.jpg" class="loginImg"/>
      <div class="loginForm">
        <el-form ref="loginForm" :model="formData" status-icon :rules="rules" label-width="60px" class="demo-ruleForm">
          <div class="loginFormTitle">用户登录</div>
          <el-form-item label="账号" prop="userName">
            <el-input v-model="formData.userName" ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="formData.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="loginBtn" @click.native="submitForm('loginForm')">登录</el-button>
          </el-form-item>
          <el-form-item>
            <el-button type="text" class="forgetBtn">忘记密码</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: "login",
      data() {
        return {
          formData: {},
          rules: {
            userName: [
              {required: true, message: '请输入账号', trigger: 'blur'},
            ],
            password:[
              {required: true, message: '请输入密码', trigger: 'blur'},
            ]
          }
        }
      },
      methods: {
        submitForm:function(formName) {
          var _this=this;
          this.$refs[formName].validate((valid) => {
            if (valid) {
              _this.query('post','/login',_this.formData,function(res){
                if(res.data.errCode == 0){
                  _this.$router.push('/home');
                }
              })
            } else {
              return false;
            }
          });
        }
      }
    }
</script>

<style scoped>
  .container{
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
  }
  .content{
    width:900px;
    height:500px;
    display:flex;
  }
  .loginImg{
    width:54%;
    height:100%;
  }
  .loginForm{
    width:46%;
    height:100%;
    background-color: #f1f1f1;
    padding:40px;
    box-sizing: border-box;
  }
  .loginFormTitle{
    font-size: 24px;
    margin-left:20px;
    padding:40px 0;
    color: #434343;
  }
  .loginBtn{
    width:100%;
    display:block;
    margin:20px 0;
  }
  .forgetBtn{
    float:right;
  }
</style>
