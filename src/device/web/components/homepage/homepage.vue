<template>
  <div class="home-page" ref="homePage">
    <Link-login></Link-login>
    <div class="entrance" :class = "{'unfold':!rotate}">
      <div class="title">
        <p @click = "changeBackgroud">@chaotge 网站</p>
        <p>@chaotge's Personal Website</p>
        <i class = "icon iconfont icon-xiangxiazhankai" :class = "{'rotate':rotate}"  @click = "close"></i>
      </div>
      <div class="container">
        <p><router-link to="MyBlog" tag = "span">>> 个人博客</router-link></p>
        <p><router-link to="Note" tag = "span">>> 云笔记</router-link></p>
      </div>
    </div>
    <login v-if = "showLogin"></login>
  </div>
</template>

<script>
  import Login from '../login/login.vue';
  import LinkLogin from '../public/link.vue';
  import commonApi from '../../../../commonApi/api';
  import {setItem} from '../../assets/js/common';
  export default {
    name: 'homepage',
    data () {
      return {
        rotate: true,
        //登录页面
        showLogin:false
      }
    },
    methods:{
      //登录
      login(){
        this.showLogin = true;
      },
      changeBackgroud(){
        let pub_img_path='http://www.ruanyifeng.com/images_pub/';
        let pub_img_num = 355;
        let pub_img_current_no = Math.floor(Math.random()*pub_img_num+1);
        let pub_img_url = pub_img_path+'pub_'+ pub_img_current_no +'.jpg';
        this.$refs.homePage.style.backgroundImage = 'url('+ pub_img_url +')';
      },
      close(){
        this.rotate = !this.rotate;
      }
    },
    components:{
      login:Login,
      LinkLogin:LinkLogin
    },
    created(){
      console.log(121)
      commonApi.token(function (res) {
        console.log(res);
        setItem('token',res.token);
        setItem('pulickey',res.publickey);
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang = "scss" scoped>
  .home-page{
    width:100%;
    height:100%;
    position: relative;
    background: url(http://www.ruanyifeng.com/images_pub/pub_116.jpg) no-repeat center;
    background-size: cover;
    -webkit-transition: All 2s ease;
    -moz-transition: All 2s ease;
    -o-transition: All 2s ease;
    -ms-transition: All 2s ease;
    transition: All 2s ease;
  }
  .login{
    width:53px;
    height:20px;
    float: right;
    background: #000;
    color: #fff;
    margin:20px 20px 0 0;
    text-align: right;
    cursor: pointer;
  }
  .entrance{
    width:40%;
    height:25%;
    max-height: 80%;
    background-color: rgba(0,0,0,.3);
    margin:0 auto;
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%, -50%);
    -webkit-border-radius: 1.5rem;
    -moz-border-radius: 1.5rem;
    border-radius: 1.5rem;
    padding:10px 20px;
    user-select: none;
    transition: height 1s ease-in,top 1s ease-in;
    -webkit-transition: height 1s ease-in,top 1s ease-in;
    overflow: hidden;
    color: #ffffff;
  }
  .unfold{
    height:40px;
    top:40px;
  }
  .title{
    height:5rem;
    border-bottom: 1px solid #ffffff;
    position: relative;
    p:first-child{
      font-size: 1.4rem;
      text-decoration:underline;
      cursor:pointer;
      padding-bottom:10px;
    }
    i{
      position:absolute;
      right:0;
      top:0;
    }
    i.rotate{
      transform: rotate(180deg);
    }
  }
  p{
    font-size: 1rem;
    line-height: 2.4rem;
  }
  .container{
    text-align: left;
    p{
      background-color: rgba(0,0,0,.5);
      border-radius: 1rem;
      margin-top:1rem;
      padding-left:1rem;
      cursor:pointer;
    }
    p:hover{
      background: rgb(255,255,255);
      color: #000;
    }
  }
</style>
