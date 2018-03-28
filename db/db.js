/**
 * Created by @chaotoge on 2018/1/4.
 */
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var db;

//插入数据
var insertData = function(db,callback){
    //连接到表
    var collection = db.collection('site');
    //插入数据
    var data = [{"name":"菜鸟教程","url":"www.runoob.com"},{"name":"菜鸟工具","url":"c.runoob.com"}];
    collection.insert(data,function (err,result) {
        if(err){
            console.log('Error'+err);
            return;
        }
        callback(result);
    });
}


//查找数据
var selectData = function(db,callback){
    //连接表
    var collection = db.collection('site');
    //查询数据
    var whereStr = {"name":"菜鸟教程"};
    collection.find(whereStr).toArray(function(err,result){
        if(err){
            console.log('Error'+err);
            return;
        }
        callback(result);
    })
}

//更新数据
var updateData = function (db,callback) {
  //连接到表
  var collection = db.collection('site');
  //更新数据
  var whereStr = {"name":'菜鸟教程'};
  var updateStr = {$set: { "url" : "https://www.runoob.com" }};
  collection.update(whereStr,updateStr,function(err,result){
    if(err){
      console.log('Error'+err);
      return;
    }
    callback(result);
  })
}

//删除数据
var delData = function (db,callback) {
    //连接到表
    var collection = db.collection('site');
    //删除数据
    var whereStr = {"name":'菜鸟工具'};
    collection.remove(whereStr,function(err,result){
        if(err){
            console.log('Error'+err);
            return
        }
        callback(result);
    })
}

MongoClient.connect(url, function(err, client) {
  console.log("Connected successfully to server");
  db = client.db('mydb');
});

module.exports = db;

/*MongoClient.connect(url,function(err,clinet){
  if(err) throw err;
  console.log(clinet)
  module.exports = clinet;
    //创建表
    // db.createCollection("runoob",function(err,res){
    //     if(err) throw err;
    //     console.log("数据库创建！");
    //     db.close();
    // })
  console.log("连接成功");

    //插入数据
    // insertData(db,function(result){
    //     console.log(result);
    //     db.close();
    // })

    //查找数据
    // selectData(db,function (result) {
    //     console.log(result);
    //     db.close();
    // })

    //更新数据
    // updateData(db,function(result){
    //     console.log(result);
    //     db.close();
    // })

    //删除数据
    // delData(db,function (result) {
    //     console.log(result);
    //     db.close();
    // })

})*/

