/**
 * Created by @chaotoge on 2018/1/18.
 */
var express = require('express');
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var keys = require('./key');
var crypto = require('crypto');
// var JSEncrypt = require('jsencrypt')
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json();

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var db;
app.use(express.static('assets'));

var sendData = {
  "code":0,
  "data":'',
  "massage":''
}

MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
  db = client.db('mydb');
});

//生成token
var creatToken = (cert) => {
  return jwt.sign({ foo: 'bar' }, cert );
}

//获取token 和 公私（publicKey）
app.get('/token',function(req,res){
    sendData.token = creatToken(keys.privKey);
    sendData.publickey = keys.pubKey;
    res.status(200).send(sendData);
})

//前/后台登录接口
app.post('/login',jsonParser,function(req,res){
    var decrypted  = crypto.privateDecrypt(keys.privKey,Buffer.from(req.body.passward));
    //连接表
    var collection = db.collection('user');
    //查询数据
    collection.find({"name":req.body.name,"password":decrypted}).toArray(function(err,result){
      if(err){
        console.log('Error'+err);
        return;
      }
      console.log(result)
      if(result.length == 1){
        sendData.code = 0;
        sendData.massage = "等录成功！";
        res.status(200).send(sendData);
      }else{
        sendData.code = 20;
        sendData.massage = "用户名或者密码错误";
        res.status(201).send(sendData);
      }
    })
})

//前台注册
app.post('/web/register',jsonParser,function(req,res){
    console.log(Buffer.from(req.body.password,'hex'),req.body.password)
    var decrypted  = crypto.privateDecrypt(keys.privKey,Buffer.from(req.body.passward,'hex'));
  console.log(decrypted);
    //连接表
    var collection = db.collection('user');
    //查询数据
    collection.find({"name":req.body.name}).toArray(function(err,result){
      if(err){
        console.log('Error'+err);
        return;
      }
      if(result.length == 0){
        req.body.password = decrypted;
        collection.insert(req.body,function (err,result) {
          if(err){
            console.log('Error'+err);
            return;
          }
        });
      }else{
        sendData.code = 98;
        sendData.massage = "改账号已存在！"
      }
    })
    res.status(200).send(sendData);
})

module.exports = app;
