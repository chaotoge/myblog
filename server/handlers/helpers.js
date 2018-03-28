/**
 * Created by @chaotoge on 2018/1/23.
 */
export.version = '1.0.1';

export.make_error = function (err,msg) {
  var e = new Error(msg);
  return e;
}

export.send_success = function (res,data) {
  res.writeHead(200,{"Content-type":"application/json"});
  var output = {error:null,data:data};
  res.end(JSON.stringify(output)+"\n");
}

export.send_failure = function (res,code,err) {
  var code = (err.code) ? err.code : err.name;
  res.writeHead(code,{"Content-type":"application/json"})
  res.end(JSON.stringify({err:code,message:err.message}) + "\n");
}

export.invalid_resource = function () {
  return make_error("invalid_resource","the requested resource");
}
