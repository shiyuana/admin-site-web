<!--页面整体分为左侧导航栏和右侧内容部分-->
<!--整个页面设置width和height都为100%，设置display:flex-->
<!--设置左侧导航的display为inline-block,左侧导航不论展开还是收起都将按默认的宽度显示，如果不设置的话，每一个菜单都将会作为块级元素一行显示一条-->
<!--设置右侧内容的width:100%，这样的话，不论展开还是收起，它都将占据左侧导航剩下的全部空间，右侧内容部分根据左侧导航的宽度实现了动态的宽度-->
<template>
  <el-container class="appContainer" >

    <!--左侧导航菜单不是用el-aside的原因是，el-aside默认width为300px-->
    <!--左侧导航 START-->
    <!--根据$route.meta在登录页面隐藏导航-->
    <div class="aside-nav" v-show="$route.meta.navShow">
      <div class="aside-nav-log">
        <img src="./assets/ic_logo_pages.png" class="logo-show-img" v-if="!isCollapse"/>
        <img src="./assets/ic_logo_sel.png" class="logo-hide-img" v-if="isCollapse"/>
      </div>
      <!--router：是否使用 vue-router 的模式，启用该模式会在激活导航时以 index 作为 path 进行路由跳转-->
      <el-menu  class="el-menu-vertical-demo"  :collapse="isCollapse" :default-active="currentMenu" router unique-opened @select="changeNavMenu">
        <template v-for="item in menu">
          <template v-if="item.children.length == 0">
            <el-menu-item  :index="item.path">
              <i class="icon iconfont" :class="item.icon"></i>
              <span slot="title">{{item.title}}</span>
            </el-menu-item>
          </template>
          <template v-else>
            <!--避免使用v-if和v-for来做判断遍历，因为v-for的优先级比v-if高，可以使用计算属性来返回过滤后的结果-->
            <el-submenu  :index="item.path" >
              <template slot="title">
                <i class="icon iconfont" :class="item.icon"></i>
                <span slot="title">{{item.title}}</span>
              </template>
              <el-menu-item v-for="subItem in item.children" :index="subItem.path">
                <span slot="title">{{subItem.title}}</span>
              </el-menu-item>
            </el-submenu>
          </template>
        </template>
      </el-menu>
    </div>
    <!--左侧导航 END-->

    <div class="appContent">
      <!--上方导航 START-->
      <el-header class="header-nav" v-show="$route.meta.navShow">
        <img src="./assets/ic_navigation_left.png"   @click="toggle" class="toggle"/>
        <el-dropdown class="header-nav-dropdown" @command="handleCommand">
          <span class="el-dropdown-link header-nav-dropdown-title">
            <img src="./assets/ic_head_small.png" class="user-img"/>
            <span class="user-name">阿铛猫</span>
            <i class="el-icon-arrow-down el-icon--right" ></i>
          </span>
          <el-dropdown-menu slot="dropdown" class="header-nav-dropdown-content">
            <el-dropdown-item  command="changePassword">修改密码</el-dropdown-item>
            <el-dropdown-item  command="logout">安全退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <!--上方导航 END-->

      <transition name="slide-fade">
        <!--router-view用来渲染页面-->
        <router-view></router-view>
      </transition>

    </div>

    <!--修改密码弹框-->
    <el-dialog title="修改密码" :visible.sync="dialogPasswordVisible" width="500px">
      <el-form :model="passwordForm" label-width="80px">
        <el-form-item label="旧密码">
          <el-input v-model="passwordForm.oldPassword" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="新密码" class="pn-re" v-show="isShowNewPassword">
          <el-input v-model="passwordForm.newPassword" autocomplete="off" type="text"></el-input>
          <img src="./assets/showPassword.png" class="passwordImg"  @click="handleIsShowNewPassword"/>
        </el-form-item>
        <el-form-item label="新密码" class="pn-re" v-show="!isShowNewPassword">
          <el-input v-model="passwordForm.newPassword" autocomplete="off" type="password"></el-input>
          <img src="./assets/hidePassword.png" class="passwordImg" @click="handleIsShowNewPassword"/>
        </el-form-item>
        <el-form-item label="确认密码" class="pn-re" v-show="isShowComfirePassword">
          <el-input v-model="passwordForm.confirmPassword" autocomplete="off" type="text"></el-input>
          <img src="./assets/showPassword.png" class="passwordImg"  @click="handleIsShowComfirePassword"/>
        </el-form-item>
        <el-form-item label="确认密码" class="pn-re" v-show="!isShowComfirePassword">
          <el-input v-model="passwordForm.confirmPassword" autocomplete="off" type="password"></el-input>
          <img src="./assets/hidePassword.png" class="passwordImg"  @click="handleIsShowComfirePassword"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogPasswordVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogPasswordVisible = false">确 定</el-button>
      </div>
    </el-dialog>

  </el-container>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        isCollapse: false,//默认左侧导航菜单是展开状态
        currentMenu:"",//当前选中的导航菜单项
        menu:[],//导航菜单
        dialogPasswordVisible:false,//是否显示修改密码弹框
        passwordForm:{
          oldPassword:'',
          newPassword:'',
          confirmPassword:''
        },
        isShowNewPassword:true,//是否显示新密码
        isShowComfirePassword:true,//是否显示确认密码
      };
    },
    methods: {
      toggle:function(){
        this.isCollapse=!this.isCollapse;
      },
      //点击选择了导航菜单重新渲染页面
      changeNavMenu:function(key){
        this.currentMenu=key;
        this.$router.push(key)
      },
      //右上角下拉菜单
      handleCommand:function(command){
        var _this=this;
        if(command == 'logout'){
          //退出登录
          this.$router.push('/login')
        }else{
          //修改密码
          _this.dialogPasswordVisible=true;
        }
      },
      handleIsShowNewPassword:function(){
        var _this=this;
        _this.isShowNewPassword = !_this.isShowNewPassword;
      },
      handleIsShowComfirePassword:function(){
        var _this=this;
        _this.isShowComfirePassword = !_this.isShowComfirePassword;
      }
    },
    mounted:function(){
      var _this=this;
      _this.query('get','/menu',{},function(res){
        _this.menu=res.data.data;
        //根据路径确定导航某项的选中状态
        var index=window.location.href.lastIndexOf("/");
        _this.currentMenu=window.location.href.slice(index);
      })
    }
  }
</script>

<style>
  /*scoped表示样式作用于当下的模块，实现了样式私有化的目的*/
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  html,body{
    width:100%;
    height:100%;
  }
  .appContainer{
    display:flex;
    display: -webkit-flex;
    width:100%;
    height:100%;
  }

  .slide-fade-enter-active {
    transition: all .1s ease;
  }
  .slide-fade-leave-active {
    transition: all .1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave {
    opacity: 0;
  }

  /*左侧导航*/
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  .el-submenu .el-menu-item:focus, .el-submenu .el-menu-item:hover{
    background-color: rgba(14,60,108,0.1);
  }
  .el-menu-item.is-active{
    background-color: rgba(14,60,108,0.1);
  }
  .aside-nav{
    /*不设置的话导航菜单将作为块级元素一行显示一个*/
    display:inline-block;
    box-shadow: #e1e1e1 6px 0px 8px 0px;
  }
  .aside-nav-log{
    height:50px;
    position:relative;
    background-color: #0E3C6C;
  }
  .logo-show-img{
    width:97px;
    height:30px;
    position:absolute;
    top:50%;
    margin-top:-15px;
    left:50%;
    margin-left:-48.5px;
  }
  .logo-hide-img{
    width:25px;
    height:25px;
    position:absolute;
    top:50%;
    margin-top:-12.5px;
    left:50%;
    margin-left:-12.5px;
  }


  .appContent{
    position:relative;
    width:100%;
  }


  /*上方导航*/
  .header-nav{
    background-color: #0E3C6C;
    /*el-header的默认高度是60px*/
    height:50px !important;
    display:flex;
    align-items: center;
  }
  .toggle{
    width:20px;
    height:20px;
    margin-left:20px;
  }
  .header-nav-dropdown{
    position:fixed;
    top:0;
    right:20px;
    color:#fff;
    line-height:50px;
  }
  .header-nav-dropdown-title{
    display:flex;
    align-items: center;
  }
  .el-dropdown-link {
    cursor: pointer;
  }
  .header-nav-dropdown-content{
    padding:5px 20px;
  }
  .user-img{
    width:20px;
    height:20px;
  }
  .user-name{
    margin:0 10px 0 15px;
  }

  .passwordImg{
    position: absolute;
    right:20px;
    top:12px;
    width:28px;
    height:16px;
  }
</style>

