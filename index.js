// old:
// require('babel/register');
// require('./server.js');

// new:
require('babel-register')({
  presets: ['es2015']
});
require("./server.js");