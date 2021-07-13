// 创建基本的字符串
`This is a pretty little template string.`

// 多行字符串
`In ES5 this is
 not legal.`

// 插入变量绑定的值
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`

// Unescaped template strings
String.raw`In ES5 "\n" is a line-feed.`

// 箭头函数
const getString = ()=>{
    console.log(`我的名字是${name}`)
}

// string
"foobar".includes("foo")

// new Promise();
new Promise();


const f = () => {};

new Promise();

class Test {}
