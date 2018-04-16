/**
 * Created by user on 2018/1/17.
 */
var express = require('express');
const webApi = require('./webApi');
const managerApi = require('./managerApi');

var app = express();
app.use([webApi,managerApi]);



// app.use('/', function (req, res) {
//   console.log(456123)
//   res.status(200).send({"data":123});
// });

app.use(function(err,req,res,next){
    res.status(500).send(err);
})

var server = app.listen(8086, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

