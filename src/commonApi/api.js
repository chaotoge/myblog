/**
 * Created by @chaotoge on 2018/1/18.
 */
import Vue from 'vue';

var postUrl = "/api"

const  Request  =  {
  post:function(url,body,callback){
    Vue.http.post( postUrl + url, body,callback).then(res => {
      callback(res.data);
    },err => {});
  },
  get:function(url,callback){
    Vue.http.get( postUrl + url,callback).then(res => {
      callback(res.data)
    },err => {});
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
