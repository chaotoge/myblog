<template>
  <transition name="el-zoom-in-center" appear = "true">
    <div class="login">
      <div class = "logo">
        <img src="../../assets/timg.jpg" alt=""><span>@chaotoge blog 管理</span>
      </div>
      <el-form :model="ruleForm2" status-icon :rules="rules2" ref="ruleForm2" label-width="60px" class="login-ruleForm">
        <el-form-item label="用户名" prop="pass">
          <el-input type="text" v-model="ruleForm2.user" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button class = "login-button" type="primary" @click="submitForm('ruleForm2')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </transition>
</template>

<script>
  export default {
    data(){
      var validateUser = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入用户名'));
        } else {
          if (this.ruleForm2.user !== '') {
            this.$refs.ruleForm2.validateField('user');
          }
          callback();
        }
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        } else {
          callback();
        }
      };
      return {
        ruleForm2:{
          "user":'',
          "pass":''
        },
        rules2: {
          pass: [
            { validator: validateUser, trigger: 'blur' }
          ],
          checkPass: [
            { validator: validatePass, trigger: 'blur' }
          ]
        }
      }
    },
    methods:{
      submitForm(){

      }
    }
  }
</script>

<style lang="scss">
  .login{
    height:230px;
    width:400px;
    padding: 20px;
    text-align: center;
    background-color: #ffffff;
    position: absolute;
    top:50%;
    left:50%;
    margin-left:-200px;
    margin-top:-115px;
  }
  .login-ruleForm{

  }
  .logo{
    font-size: 1.5rem;
    margin-bottom:22px;
  }
  .logo img{
    width:40px;
    height:40px;
    vertical-align: middle;
  }
  .login-button{
    width:100%;
  }
</style>
