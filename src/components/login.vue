<template>
  <div class="container">
    <div class="content">
      <img src="../assets/login.jpg" class="loginImg"/>
      <div class="loginForm">
        <el-form  ref="loginForm" :model="formData" status-icon :rules="rules" label-width="60px">
          <div class="loginFormTitle">用户登录</div>
          <el-form-item label="账号" prop="userName">
            <el-input v-model="formData.userName"  placeholder="花铛猫/花铛"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="formData.password" placeholder="123456/123"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" class="loginBtn" @click.native="submitForm('loginForm')">登录</el-button>
          </el-form-item>
          <el-form-item style="text-align:right">
            <img src="../assets/forgetPassword.png" class="passwordImg"/>
            <el-button type="text"  @click="handleForgetPassword">忘记密码</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>

    <!--忘记密码弹框-->
    <el-dialog title="忘记密码" :visible.sync="dialogPasswordVisible" width="400px">
      <el-form :model="passwordForm" label-width="80px">
        <el-form-item label="当前账号">
          <el-input v-model="passwordForm.account" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="验证码" class="pn-re">
          <el-input v-model="passwordForm.verifyCode" autocomplete="off" type="text" style="width:160px;"></el-input>
          <el-button type="primary" style="width:100px;float:right;" @click="getVerifyCode">获取验证码</el-button>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="passwordForm.newPassword" autocomplete="off" type="password"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="passwordForm.confirmPassword" autocomplete="off" type="password"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogPasswordVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogPasswordVisible = false">确 定</el-button>
      </div>
    </el-dialog>
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
          },
          dialogPasswordVisible:false,
          passwordForm:{}
        }
      },
      methods: {
        handleForgetPassword:function(){
          var _this = this;
          _this.dialogPasswordVisible = true;
        },
        getVerifyCode:function(){

        },
        submitForm:function(formName) {
          var _this=this;
          this.$refs[formName].validate((valid) => {
            if (valid) {
              _this.query('post','/login',_this.formData,function(res){
                if(res.data.errCode == 0){
                  _this.$router.push('/home');
                }else{
                  _this.$message({
                    message:res.data.msg ,
                    center: true,
                    offset:200
                  });
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
  .passwordImg{
    width:20px;
    height:16px;
    margin-right:42px;
  }
</style>
