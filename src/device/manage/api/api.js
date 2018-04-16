import Vue from 'vue';

var postUrl = "/api"

var  Request  = {
  post:function(url,body,callback){
      Vue.http.post(postUrl+url, body,callback).then(res => {
        callback(res.data);
      },err => {});
  },
  get:function(url){
    Vue.http.get(url).then(res => {},err => {});
  }
}

export default {
  //新增文章
  addText(body,callback){
    return Request.post('/manager/addtext',body,callback);
  },

  //获取文章列表
  textlist(body,callback){
    return Request.post('/manager/textlist',body,callback);
  },
  //删除文章
  removeText(body,callback){
    return Request.post('/manager/removeText',body,callback);
  },
  //更新文章 /manager/updateText
  updateText(body,callback){
    return Request.post('/manager/updateText',body,callback);
  },

}