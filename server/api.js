/**
 * Created by user on 2018/1/17.
 */
var express = require('express');
var app = express();

const webApi = require('./webApi');
const managerApi = require('./managerApi');
app.use([webApi,managerApi]);

var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})


// const utils = require('./utils');
// const keys = require('./key');
//
// const plainText = '你好，我是程序猿小卡';
// const crypted = utils.encrypt(plainText, keys.pubKey); // 加密
// const decrypted = utils.decrypt(crypted, keys.privKey); // 解密
//
// console.log(decrypted.toString()); // 你好，我是程序猿小卡
