一.ES6
 ECMAScript6   JS的第6套标准规范
 ES2015 ..  ES2021 
 1.块级作用域
let声明的变量不允许重复声明，进入到一个暂时性的死区(会提升，只是不允许访问)
大括号{ }之间的语句块就是块级作用域，例如：if、else、for...块级作用域下let和const声明的都是局部的，不允许外部访问

练习：计算1~100之间所有整数的和，变量声明使用let
let arr=0; //let 声明变量即使在全局作用域下声明它也局部变量
for(let i=1;i<=100;i++){
   arr+=i;
}
console.log(arr);

❤对比var,let,const的区别
var声明的变量存在声明提升，允许重复声明，只有在函数下才是局部变量
let声明的变量进入暂时性的死区，不允许重复声明，存在块级作用域
const声明常量进入暂时性的死区，声明后必须赋值，不允许重新赋值，存在块级作用域
let和const在全局作用域下声明的也不是全局的
var在全局作用域下声明的是全局的

 2.参数增强
  可以给参数设置默认值
function fn(a,b,c=0){
  b=b||0;  //ES6之前的设置方式
}
 3.箭头函数
  ()=>{  }
  简化了匿名函数的写法，不等价于匿名函数
sort( (a,b)=>{
  return a-b;
} )
  如果箭头函数的函数体中只有一行并且是return形式，可以继续简化    sort( (a,b)=>a-b )

  练习：使用箭头函数创建函数getAvg，传递任意两个数字，返回平均值
  var getAvg=((a,b)=>(a+b)/2);
//console.log(getAvg(3,9));

 4.模板字符串
  简化了字符串的拼接
` 模板字符串 ${JS表达式} ` 
  
二.Node.js概述
 Node.js是一种JS解释器，运行在服务器端
 1.对比JS
  (1)JS运行在浏览器，存在多款浏览器，有代码兼容性问题；Node.js运行在服务器端，只有一种解释器，不存在代码兼容性问题
  (2)都有共同的内置的对象、自定义对象，不同的宿主对象
  (3)JS用于开发浏览器端交互效果，Node.js用于服务器端开发，例如操作数据库、调用其它服务器
 2.网址
  www.nodejs.org   官网
  www.nodejs.cn  中文版
 3.运行
  (1)脚本模式
    node  拖拽文件     回车
  (2)交互模式
    node    回车  进入交互模式
    两次ctrl+c  或者  一次ctrl+d     退出交互模式
 4.特点
  单线程处理逻辑，支持数万个并发连接

三.全局对象
 1.global
  检测变量或者函数是否为全局的
  
  练习：编写脚本文件03_global.js，声明变量，创建函数，检测是否为全局
var a=1;
function fn(){
  return 2;
}
//不是全局作用域
console.log( global.a );
console.log( global.fn() );

在Node.js下，每个js文件不是全局作用域，可以防止全局污染
  浏览器下全局对象名称：window
 2.console
  控制台对象，用于输出到控制台
  console.log(1);   //日志
  console.info(2);   //消息
  console.warn(3);   //警告
  console.error(4);   //错误
  console.time()   //开始计时
  console.timeEnd()   //结束计时
  开始计时和结束计时的值要保持一致
  
  练习：使用for、while、do-while各循环100000次，查看耗时
  console.time('tao');
for(var i=1;i<=100000;i++){
}
console.timeEnd('tao');

console.time('奔');
var i=1;
do{
//    console.time('奔'); 
	i++;
}while(i<=100000);
console.timeEnd('奔');

console.time('会');
while(i<=100000){
  i++;
}
console.timeEnd('会');

 3.process
  进程对象，计算机上任何的应用程序都是有对应的进程，会占用一定的资源
  process.arch   查看CPU的架构
  process.platform   查看服务器端操作系统
  process.version   查看服务器端Node.js版本号 
  process.pid   查看当前Node.js的进程编号
  process.kill()    结束指定编号的进程
 4.Buffer
  缓冲、缓存
  缓冲区：是内存中一块区域，用于临时存储数据
var buf = Buffer.alloc(5,'abcde')   //创建Buffer，分配大小为5个字节，每个汉字占3个字节
buf.toString()  //将Buffer数据转为字符串
 
四.模块系统
 模块：就是一个独立的功能体，每个文件就是一个模块
 module.exports    是模块暴露的对象，默认是一个空对象
 require()   是一个函数，用于引入其它模块，得到暴露的对象
