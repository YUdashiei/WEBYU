1.函数作用域
全局函数：在全局作用域下创建的函数，可以在任意的作用域下调用
局部函数：在函数作用域下创建的函数，只能在当前的作用域下调用
作用域链：作用域之间嵌套形成的一种结构，在查找变量的时候首先会在当前作用域寻找，如果没有会一直往上一级作用域寻找

2.函数提升
函数会整体提升到所在作用域的最前边，所以fool还是在最后面，跟正常执行一样
fool();
function foo(){
console.log('ok');
} 

3.递归
（1）在函数内部调用自身这个函数，就成了无限调用循环体，但每个函数都是有内存的直到循环体把内存存满（内存陷漏）才会停止调用。
（2）递归默认是一个死循环，解决的问题是循环相关问题
（3）递归会造成内存陷漏（内存空间被占满，无法再分配空间）
（4）使用递归就两点：找边界条件（不在是死循环）找规律
function say(){
 console.log('从前有座山');
  say();
}say();
示例// 创建函数，传递任意一数字，返会这个数字的阶乘
function getJC(n){
// 找边界条件（循环结束的条件）
 if（n===1）{
//当n为1时，结束递归   
   return 1;
 }
// 找规律  
// n的阶乘 = n * (n-1)阶乘;
 return n*getJC(n-1);
}console.log(getJC(5));

4.匿名函数
（1）匿名函数创建-函数表达式
var fun=function(){
  console.log(1);
}
fun();变量名称fun就是函数名称
（2）函数声明
function fn(){
}
（3）对比函数名称和函数名称()
函数名称：本质上就是一个变量，保存了一个函数
函数名称():调用一个函数，执行函数体中的代码，得到返回值
（4）对比函数声明和函数表达式的区别
函数声明：创建的函数存在函数的整体提升
函数表达式：创建的函数只是存在声明的提升，必须先创建再调用
注意:变量名和函数名相同时，会先提升函数
其实就是函数名称换成了变量名，其他和普通函数没有区别
示例：var ba=function(n1,n2){
   for(var i=n1,sum=0;i<=n2;i++){
    sum+=i;
  }
   return sum;
}
console.log(ba(1,100));

6.匿名函数自调用
全局污染：全局变量(函数)的出现带来的影响在任何作用域下都可以访问
function(){
   var n=1;//在函数作用域下，变量都是局部变量，可以防止全局污染
  console.log(n);
})();

7.回调函数
在调用一个函数的时候，传递的参数还是函数形式
function tao(madai){
 console.log('涛哥开始跑第一棒');
 console.log('涛哥到达第一棒终点');
// madai=xin
//madai=function(){}
//调用传递的函数参数，通过参数madai
  madai(); //xin(); //(function(){})
} 
function xin(){
 console.log('新哥');
 console.log('终点');
}
//回调函数：把另一个的函数作为参数传递
tao(xin);//有函数名称的回调函数
tao(function(){//匿名函数是回调函数
  console.log('陌生人');
});
8.系统函数
(1)isNaN()检测一个字符串是否含有非数字，先把值隐式转换位数值，在查看是否为NaN
var str='1';
//会隐式转换为数值，查看是否为NaN
console.log( Number(str) );
console.log( isNaN(str) );
(2)执行字符串中的表达式，也可以用来在输入框相加求和
var str='parseInt(5.5)';
console.log(str);
console.log(eval(str));

9.对象
是一组属性和方法的集合：比如一部手机：属性有颜色、品牌、尺寸、产地... 方法有打电话、上网、游戏、看视频、听音乐...
（1）js中对象
自定义对象：用户自己创建的对象
内置对象：js提供的对象
宿主对象：根据不同执行环境划分
（2）自定义对象的创建方式
对象字面量 内置构造函数 自定义构造函数
（3）使用对象字面量创建对象
{属性：属性值，属性值：属性名}
 如果属性名中含有特殊字符必须添加引号，其它情况可以省略引号
实例：字面量创建对象
var yuangong = {
	id:11,
	name:'大蹦',
   'sex-in':'男',//属性名存在特殊字符用引号包括
    'salary':67888
}
（4）访问属性
对象.属性名
对象.['属性名']
如果属性不存在结果为undefined
console.log(yuangong.id,yuangong.name);//访问正常属性名
console.log(yuangong['sex-in'],yuangong['salary']);//访问有特殊符号的属性名
yuangong.dname='养殖部';//增加属性
yuangong.salary=90000;//修改属性
console.log(yuangong);
（5）内置构造函数
var laptop = new Object();
创建一个空对象需要单独的添加属性
laptop.lid=1;
laptop.title='苹果13';
laptop.price=5699;
console.log(laptop);
（5）遍历 枚举
for(var k in 对象){
 k 属性名
对象[k] 属性名对应的值
} 
示例：
//遍历   键名  键值对
for(var k in user){
  //k 属性名   user[k]  属性值
  console.log(k,user[k]);
}










