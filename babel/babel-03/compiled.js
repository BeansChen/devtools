"use strict";

require("core-js/modules/es.array.map.js");

require("core-js/modules/es.symbol.js");

require("core-js/modules/es.symbol.description.js");

require("core-js/modules/es.object.to-string.js");

// 箭头函数
[1, 2, 3, 4, 5].map(function (n) {
  return n + 1;
}); // const 声明

var fn = function fn() {
  return 1;
}; // 新的API


var m = Symbol('1');
