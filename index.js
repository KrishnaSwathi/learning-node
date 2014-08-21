var http = require('http');
var uuid = require('node-uuid');

var port = process.env.PORT || 8080;

http.createServer(function (req, res) {
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
}).listen(port);

console.log('server started in %s', port);

// console.trace('foo');

// set iterm2                        v
// set sublime proper                v
// changed your dot files            v
// installed jshint                  v
// discussed jshint default cfgs     v
// run jshint from editor            v
// discussed jshint hook for git     v
//
//  $ npm config set save true
//  vs
//  $ npm install --save
//
//
//  learn about git ignore module
//  modules
//
//  git status
//  git diff <<file>>
//  git commit -m
//  git push origin
//
// learn how to code a server        v
//  bonus: log request               v
//    - everytime a request comes
//      we log the method, timestamp
//      and path
//  bonus: make it so it does dns    x
//  bonus: connecter to gitter       x
// learn how to code an http client  x
// learn how to do tests             x
//   unit                            x  
//   integration                     x
// learn how to use npm efficiently  x
//   npm link                        x
//   npm scripts                     x
//   npm start                       x
//   npm test                        x
// learn how to launch our programs  x
// deal with configs                 x
// learn how to manage sessions etc  x