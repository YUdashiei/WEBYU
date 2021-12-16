一.Math 对象
 是一个特殊的对象，不需要使用new创建可以直接调用API
 PI   获取圆周率
 abs()   获取绝对值
 ceil()  向上取整
 floor()  向下取整
 round()  四舍五入取整
 pow(x,y)  获取x的y次方
 max()   获取一组数字最大值
 min()   获取一组数字最小值
 random()  获取随机数，范围>=0  <1

二.Date对象
 用于日期时间的存储和计算
 1.创建
  new Date('2021/12/16 11:48:30')
  new Date(2021,11,16,11,48,30)  //月份0~11代表1~12月份
  new Date()    //当前操作系统的日期时间
  new Date(1500000000000)  //存储的是距离计算机元年的毫秒数
 2.获取
  getFullYear()/getMonth()/getDate()
   月份范围  0~11  代表1~12月
  getHours()/getMinutes()/getSeconds()/getMilliseconds()
     时          分            秒              毫秒
  getDay()   星期，范围0~6 代表日~六
  getTime()   获取时间戳
  练习：创建Date对象，保存当前操作系统的时间，获取日期时间，打印以下格式    今天是xxxx年xx月xx日   星期x
var d=new Date();
var year=d.getFullYear();
var month=d.getMonth()+1;
//判断是否小于10
if(month<10){
  month='0'+month;
}
var date=d.getDate();
var day=d.getDay();//0~6
var arr=['日','一','二','三','四','五','六'];
//console.log(arr[day]);
console.log('今天是'+year+'年'+month+'月'+date+'日 星期'+arr[day]);

 3.转为本地字符串
  用于调试，存在兼容性问题
  toLocaleString()     获取完整字符串形式
  toLocaleDateString()    获取日期部分
  toLocaleTimeString()   获取时间部分
 4.设置
  setFullYear()/setMonth()/setDate()
  setHours()/setMinutes()/setSeconds()/setMilliseconds()
  setTime()  设置时间戳，产生一个新的日期时间
  练习：创建Date对象，保存员工的入职时间2021/12/20，合同期为3年，打印出两组日期时间的字符串形式
var d1=new Date('2021/12/20');
//拷贝一份入职时间作为到期时间
var d2=new Date(d1);
//到期时间设置为3年后
d2.setFullYear( d2.getFullYear()+3 );
console.log( d1.toLocaleDateString() );
console.log( d2.toLocaleDateString() );
   入职时间： 
   到期时间：
   
 5.拷贝Date对象
  为了不影响之前的对象
var d1=new Date();
var d2=new Date(d1);  //拷贝Date对象，之间把要拷贝的对象作为参数传递

三.Number对象
  new Number()   将数字包装为对象
  Number()   将一个值强制转换为数值
  toFixed(n)   保留小数点后n位

四.Boolean对象
  new Boolean()   将布尔值包装为对象
  Boolean()   将一个值强制转换为布尔值
  !!值     将一个值隐式转换为布尔值

五.错误处理
 1.常见的错误
  SyntaxError：语法错误，代码书写格式不符合语法规范，例如出现了中文符号，缺少半块括号...
  ReferenceError：引用错误，使用了未声明的变量
  TypeError：类型错误，当前调用的函数(方法)不是一个函数类型
  自定义错误：程序员自己指定的错误
                throw  '错误内容'
 2.错误处理
try{
  尝试执行，可能产生错误，不会阻止往后执行
}catch(err){
  捕获产生的错误到err中
  执行错误处理
}
