'use strict';

var dnsd = require('dnsd');
var uuid = require('node-uuid');

module.exports = function (opts, done) {
  if(typeof opts === 'function') {
    done = opts;
    opts = {
      port: 9090
    };
  }

  if(typeof opts === 'number') {
    opts = {
      port: opts
    };
  }

  var port = opts.port;

  var server = dnsd.createServer(function(req, res) {
    var toLog = {
      question: req.question[0],
      remoteIp: req.connection.remoteAddress,
      uuid: uuid.v4(),
      ts: new Date().toISOString()
    };
  
    console.log(JSON.stringify(toLog));

    if(~toLog.question.name.indexOf('apple')) {
      res.end('143.4.0.1');
    } else {
      res.end('127.0.0.1');
    }

    res.end('127.0.0.1');
  }).listen(port, done);

  return server;
};