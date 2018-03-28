<template>
  <div class="login">
    <div class = "login-name">登录</div>
    <div class="user">
      <i class = "icon iconfont icon-icon"></i> <input type="text" v-model="user.userName">
    </div>
    <div class="password">
      <i class = "icon iconfont icon-14"></i> <input type="password" v-model="user.userPassword">
    </div>
    <div class="login-botton">
      <button @click = "submitUser">登录</button>
    </div>
  </div>
</template>

<script>
  import crypto from 'crypto';
  import {getItem} from '../../assets/js/common'
  export default {
    data(){
      return {
        user:{
          "userName":"",
          "userPassword":''
        }
      }
    },
    methods:{
      //登录验证
      submitUser(){
        var pulickey = getItem('pulickey');
        var encrypted = crypto.publicEncrypt(pulickey, Buffer.from(this.user.userPassword)).toString('hex');
        this.$store.dispatch('login',{"name":this.user.userName,"password":encrypted});
      }
    }
  }
</script>

<style lang = "scss" scoped>
  .login{
     width: 400px;
     height:200px;
     padding:20px;
     position: absolute;
     top:0;
     bottom: 0;
     left:0;
     right:0;
     margin:auto;
   }
  .login-name{
    font-weight: 500;
    font-size: 30px;
    margin-bottom: 20px;
  }
  i{
    font-size: 28px;
    vertical-align: middle;
  }
  input{
    height:38px;
    width:240px;
    margin-left: 8px;
    text-indent: 8px;
    border:none;
    background-color: transparent;
  }
  .user,.password{
    width:281px;
    border:1px solid #ccc;
    padding-left:10px;
    margin:0 auto 10px;
  }
  .login-botton{
    button{
      width:293px;
      height:40px;
      border: none;
      background-color: #461542;
      color: #fff;
      font-size:14px;
    }
  }
</style>
