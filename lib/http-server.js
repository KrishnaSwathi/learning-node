'use strict';

var http = require('http');
var uuid = require('node-uuid');

module.exports = function (opts, done) {
  if(typeof opts === 'function') {
    done = opts;
    opts = {
      port: 8080
    };
  }

  if(typeof opts === 'number') {
    opts = {
      port: opts
    };
  }

  var port = opts.port;
  
  var server = http.createServer(function (req, res) {
    // log
    // new Date().toISOString()
    var toLog = {
      method: req.method,
      path: req.url,
      uuid: uuid.v4(),
      ts: new Date().toISOString()
    };
  
    console.log(JSON.stringify(toLog));
  
    res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
  
    res.end('Hello\n');
  }).listen(port, done);

  return server;
};