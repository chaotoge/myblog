/**
 * Created by user on 2018/1/17.
 */
var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var keys = require('./key');
var crypto = require('crypto');
var path = require('path');
var ueditor = require("./ueditor.js");
const webApi = require('./webApi');
const managerApi = require('./managerApi');

var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var db;

app.use(urlencodedParser);
app.use(jsonParser);
app.use(express.static(path.join(__dirname, './')));
// app.use([webApi,managerApi]);


app.use("/static/ueditor/ue", ueditor(path.join(__dirname, './'), function (req, res, next) {
    console.log(123456)
  //客户端上传文件设置
  var imgDir = '/img/ueditor/'
   var ActionType = req.query.action;
  if (ActionType === 'uploadimage' || ActionType === 'uploadfile' || ActionType === 'uploadvideo') {
      var file_url = imgDir;//默认图片上传地址
      /*其他上传格式的地址*/
      if (ActionType === 'uploadfile') {
          file_url = '/file/ueditor/'; //附件
      }
      if (ActionType === 'uploadvideo') {
          file_url = '/video/ueditor/'; //视频
      }
      res.ue_up(file_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
      res.setHeader('Content-Type', 'text/html');
  }
  //  客户端发起图片列表请求
  else if (req.query.action === 'listimage') {
      var dir_url = imgDir;
      res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
  }
  // 客户端发起其它请求
  else {
      res.setHeader('Content-Type', 'application/json');
      res.redirect('/api/public/config.json');
  }
}));

// app.use('/', function (req, res) {
//   console.log(456123)
//   res.status(200).send({"data":123});
// });



var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

