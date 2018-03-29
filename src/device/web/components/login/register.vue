<template>
  <div class="login">
    <div class = "login-name">注册</div>
    <div class="user">
      <input type="text" placeholder="手机号码/邮箱" v-model="user.name">
    </div>
    <div class="password">
      <input type="password" placeholder="密码" v-model="user.password">
    </div>
    <div class="login-botton">
      <button @click = "register">注册</button>
    </div>
  </div>
</template>

<script>
  import {publicEncrypt} from '../../../../../key/crypto';
  import api from '../../api/api';
  import crypto from 'crypto';
  import {JSEncrypt} from 'jsencrypt';
  import {getItem} from '../../assets/js/common'
  export default {
    data(){
      return {
        user:{
          name:'',
          password:''
        }
      }
    },
    methods:{
      register(){
        let regMobile = /^1[3,5,7,8]\d{9}|([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\-|\.]?)*[a-zA-Z0-9]+(\.[a-zA-Z]{2,3})+ $/;
        let regPassword = /^[\w\d]{6,12}$/;
        if(!regMobile.test(this.user.name)){
          alert('请输入正确的手机号或邮箱');
          return; 
        }else if(!regPassword.test(this.user.password)){
          alert('请输入正确密码(密码必须是6-10的字母或者数字)');
          return;
        }
        var pulickey = getItem('pulickey');  
        //crypto 加密后返回Buffer ，将buffer转成字符串     
        var encrypted = crypto.publicEncrypt(pulickey, Buffer.from(this.user.password)).toString('hex');
        this.$store.dispatch('register',{"name":this.user.name,"password":encrypted});
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
    width:240px;
    border:1px solid #ccc;
    padding-left:10px;
    margin:0 auto 10px;
  }
  .login-botton {
    button {
      width: 252px;
      height: 40px;
      border: none;
      background-color: #461542;
      color: #fff;
      font-size: 14px;
    }
  }
</style>
