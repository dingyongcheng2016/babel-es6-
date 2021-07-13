"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.string.includes.js");

require("core-js/modules/es.promise.js");

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _templateObject, _templateObject2;

// 创建基本的字符串
"This is a pretty little template string." // 多行字符串
(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2.default)(["In ES5 this is\n not legal."]))); // 插入变量绑定的值

var name = "Bob",
    time = "today";
"Hello ".concat(name, ", how are you ").concat(time, "?"); // Unescaped template strings

String.raw(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteral2.default)(["In ES5 \"\n\" is a line-feed."], ["In ES5 \"\\n\" is a line-feed."]))); // 箭头函数

const getString = () => {
  console.log("\u6211\u7684\u540D\u5B57\u662F".concat(name));
}; // string


"foobar".includes("foo"); // new Promise();

new Promise();

const f = () => {};

new Promise();

class Test {}

//# sourceMappingURL=compiled.js.map