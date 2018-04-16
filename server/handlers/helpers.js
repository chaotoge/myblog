/**
 * Created by @chaotoge on 2018/1/23.
 */
exports = {
  //版本号
  version = '1.0.1',
  //错误处理
  make_error = function (err,msg) {
    var e = new Error(msg);
    return e;
  },
  //返回成功
  send_success = function (res,data) {
    res.writeHead(200,{"Content-type":"application/json"});
    var output = {error:null,data:data};
    res.end(JSON.stringify(output)+"\n");
  },
  //返回失败
  send_failure = function (res,code,err) {
    var code = (err.code) ? err.code : err.name;
    res.writeHead(code,{"Content-type":"application/json"})
    res.end(JSON.stringify({err:code,message:err.message}) + "\n");
  },
  //未获取到资源
  invalid_resource = function () {
    return make_error("invalid_resource","the requested resource");
  }
}