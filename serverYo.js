var http = require('http');
var fs = require('fs');
var url = require('url');

var app = http.createServer(function(request, response){
  var queryPath = url.parse(request.url, true);
  console.log(queryPath);
  fs.readFile(path.join('.',queryPath.pathname),'utf8',function(err,contents){
    if (err){
      response.statusCode = 404;
      response.end('404');
      return;
    } else {
      response.statusCode = 200;
      response.end();
    }
  });
});


app.listen(8080, function(){
  console.log('server listening');
})
