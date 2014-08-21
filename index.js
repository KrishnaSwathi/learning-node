'use strict';

var httpServer = require('./lib/http-server');
var dnsServer = require('./lib/dns-server');

var port = +(process.env.PORT || 8080);
var dPort = +(process.env.DPORT || 9090);

httpServer(port, function () {
  console.log('server started in %s', port);
});

dnsServer(dPort, function () {
  console.log('server started in %s', dPort);
});

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
// learn how to install a module uuid
// learn how to use it
//
//  learn about git ignore module
//  modules
//
//  npm config set spin false
//  npm config set loglevel info
//
//  git status
//  git diff <<file>>
//  git commit -m
//  git push origin
//
// learn how to code a server        v
//
//   use a env variable to define port
//   respond with headers
//   send a hello message
//   learn about json stringify
//
//  bonus: log request               v
//    - everytime a request comes
//      we log the method, timestamp
//      and path
//
//  learn about nd
//
//   $ nd
//
//   Available modules:
//   learning-node@0.0.0 /Users/swathi/Work/learning-node
//   └── node-uuid@1.4.1
//   
//   k ~/Work/learning-node ♯master* ⬢ 0.10.29
//   $ nd node-uuid
//
// 
//   learned about readme, docs
//   and how nd can read them
//
//  bonus: make it so it does dns    v
//
//    dnsd module
//    refactored http to lib
//    learned about jshintrc. 
//      node:true
//
//    refactor failed
//    we dont have feedback
//    what do we do?
//
//    learn: about node debug
//
//      to do explore node instector
//      webstorm node debugger
//
//      node debug index.js
//
//      help list commands
//      we can write debugger on code to breakpoints
//
//      c to continue to next bk
//      s to step by step
//      o when we are in place we
//        we dont care about
//      repl evaluate code
// 
//      found problem, we found 8080
//      was passed an opts instead of
//      {port: 8080}
//
//      exercise: fix this in http
//      server
//
//      you can fix by not providing
//      option and make it a number
//      
//      change api of the module
//
//      if(typeof opts === 'function') {
//        done = opts;
//        opts = {
//          port: 8080
//        };
//      }
//    
//      if(typeof opts === 'number') {
//        opts = {
//          port: opts
//        };
//      }
//
//      dns
//      dig @localhost -p 9090 google.com A
//
//      found a bug in dns
//      send a pull request to fix it
//      
//      configure github
//        picture
//        ssh keys
//        optional: two phase auth
//
//        generated ssh keys
//        pbcopy
//        cat ~/.ssh/id_rsa.pub | pbcopy
//
//     updated to use the patched dnsd
//     using github as the package
//     repository for it
// 
//     "dnsd": "git://github.com/KrishnaSwathi/dnsd.git#master",
//
//     console.log(arguments)
//     console.trace
//
//     error in defining port via env
//     var, not being cast to number
//
//     solution var a = +opts.a
//
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