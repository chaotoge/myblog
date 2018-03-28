/**
 * Created by @chaotoge on 2018/1/18.
 */
import Vue from 'vue';

var postUrl = "/api"

var  Request  =  {
  post:function(url,body,callback){
    Vue.http.post( postUrl + url, body,callback).then(res => {callback(res);console.log(res)},err => {});
  },
  get:function(url,callback){
    Vue.http.get( postUrl + url,callback).then(res => {console.log(456);callback(res.data)},err => {});
  }
}

export default {
  //token
  token(callback){
    return Request.get('/token',callback);
  },
  //登录
  login(body,callback){
    return Request.post('/login',body,callback);
  }
}
