/**
 * Created by @chaotoge on 2018/1/18.
 */
    var express = require('express');
    var bodyParser = require('body-parser');
    var path = require('path');
    var moment = require('moment');
    var ueditor = require("./ueditor.js");
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";

    var app = express();
    var urlencodedParser = bodyParser.urlencoded({ extended: false });
    var jsonParser = bodyParser.json();

/*
*返回数据
*/  
    var sendData = {
        "code":0,
        "data":'',
        "massage":''
    }

    MongoClient.connect(url, function(err, client) {
        console.log("Connected successfully to server");
        db = client.db('mydb');
        const collection = db.collection('article');
        //设置排序基础值
        collection.find({"textNo":"productid"}).toArray(function(err,result){
            if(err){
                return
            }
            if(result.length == 0){
                collection.insert({"textNo":"productid",sequence_value:10000});
            }           
        })
    });
    const indexCollection = function(db, callback) {
        db.collection('article').createIndex(
            { "textNo": 1 },
            null,
            function(err, results) {
                console.log(results);
                callback();
            }
        );
    };
    function getNextSequenceValue(sequenceName,callback){
        var sequenceDocument;
        const collection = db.collection('article');
        collection.findOneAndUpdate(           
                {textNo: sequenceName },
                {$inc:{sequence_value:1}},
                {returnNewDocument:true,sort:{sequence_value:1},returnNewDocument:true },
                function(err,result){
                    if(err){
                        console.log('Error'+err);
                        return
                    }
                    callback(err,result);                  
                });       
    }
    //在特定的环境下运行中间件 在开发环境运行中间件，mac NODE_ENV = dev   node api.js   win:set NODE_ENV = dev  node api.js
    // app.configure('dev',function(){
    //     app.use(express.logger('dev'))
    // })
    app.use(urlencodedParser);
    app.use(jsonParser);
    //静态文件根目录中间件 如果设置多个静态文件目录，只需多加几个组件即可
    app.use(express.static(path.join(__dirname, './')));
    app.use("/static/ueditor/ue", ueditor(path.join(__dirname, './'), function (req, res, next) {
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
      //客户端发起抓取远程图片请求
      else if(req.query.action === 'catchimage'){
            // console.log(req)
            // res.ue_up(file_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
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
    //新增文章
    app.post('/manager/addtext',jsonParser,function(req,res){
        var dateTime = moment().format("YYYY-MM-DD HH:mm:ss")
        //连接表
        var collection = db.collection('article');

        var body = req.body;
        getNextSequenceValue('productid',function(err,result){
            var insertData = {
                "textNo":result.value.sequence_value,
                "region":body.region,
                "title":body.title,
                "digest":body.digest,
                "content":body.content,
                "createTime":dateTime
            }
            //插入数据
            collection.insert(insertData,function(err){
                indexCollection(db, function() {
                    sendData.code = 200;
                    sendData.massage = "请求成功"
                    res.status(200).send(sendData);
                });            
            });
        })       
    })
    //获取文章列表
    app.post('/manager/textlist',jsonParser,function(req,res){
        //连接表
        var collection = db.collection('article');
        var body = req.body;
        var findData = {
            "region":body.region
        }
        //查找数据
        collection.find(findData).toArray(function(err,result){
            if(err){
                console.log('Error'+err);
                return;
              }
            sendData.code = 200;
            sendData.data = result;
            sendData.massage = "请求成功";
            res.status(200).send(sendData);
        });
    })
    //删除文章
    app.post('/manager/removeText',jsonParser,function(req,res){
        //连接表
        var collection = db.collection('article');
        var body = req.body;
        var removeData = {
            "textNo":body.textNo
        }
        console.log(removeData);
        collection.deleteOne(removeData,function(err, result){
            sendData.code = 200;
            sendData.data = result;
            sendData.massage = "请求成功";
            res.status(200).send(sendData);
        });
    })

    //修改文章
    app.post('/manager/updateText',jsonParser,function(req,res){
        //连接表
        var dateTime = moment().format("YYYY-MM-DD HH:mm:ss");
        var collection = db.collection('article');
        var body = req.body;
        console.log(body.textNo);
        collection.update({"textNo":body.textNo},
            {$set: {
                "title":body.title,
                "digest":body.digest,
                "content":body.content,
                "createTime":dateTime
            }
        },function(err,result){
            sendData.code = 200;
            sendData.data = result;
            sendData.massage = "请求成功";
            res.status(200).send(sendData);
        })
    })

    app.get('*',four_oh_four);
    function four_oh_four(req,res){
        // send_failure(res,404,invalid_resource);
    }
    module.exports = app;
