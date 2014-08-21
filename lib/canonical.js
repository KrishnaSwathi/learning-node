var http = require('http');
var server = http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(1337, console.log);
//server.on('error', console.log)
console.log('Server running at http://127.0.0.1:1337/');