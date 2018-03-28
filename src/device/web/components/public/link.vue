<template>
  <div class="login-router">
    <div class="link">
      <router-link to="/loginlink/login" tag = "div" class="login">
        | <i class = "icon iconfont icon-denglu"></i> <span>登录</span>
      </router-link>
      <router-link to="/loginlink/register" tag = "div" class="login">
        | <i class = "icon iconfont icon-denglu"></i> <span>注册</span> &nbsp;
      </router-link>
      <router-link to="/" tag = "div" class="login">
        <i class = "icon iconfont icon-denglu"></i> <span>游客</span> &nbsp;
      </router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data(){
      return {

      }
    }
  }
</script>

<style lang="scss" scoped>
  .login-router{

  }
  .link{
    padding:20px 20px 0 0;
  }
  .login{
    float: right;
    background: rgba(0,0,0,.3);
    color: #fff;
    cursor: pointer;
  }
</style>
