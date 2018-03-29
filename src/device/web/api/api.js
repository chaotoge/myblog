/**
 * Created by @chaotoge on 2018/1/18.
 */
import Vue from 'vue';

var postUrl = "/api"

var  Request  = {
  post:function(url,body,callback){
      Vue.http.post(postUrl+url, body,callback).then(res => {
        console.log(res,res.data);
        callback(res.data);
      },err => {});
  },
  get:function(url){
    Vue.http.get(url).then(res => {},err => {});
  }
}

export default {
  //注册
  register(body,callback){
    return Request.post('/web/register',body,callback);
  }
}
