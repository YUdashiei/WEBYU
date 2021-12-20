 一.模块系统
 __dirname   当前模块的绝对路径
 __filename   当前模块的绝对路径+模块名称
 1.模块的分类
  分为自定义模块、核心模块、第三方模块
	以路径开头	不以路径开头
  文件形式	require('./circle.js')
  用于引入自定义模块	
  目录形式	require('./02_tao')
  首先会到目录下寻找package.json中main对应的文件，如果找不到会自动查找index.js	require('mysql')
  首先会到当前目录的node_modules目录中寻找，如果找不到会一直往上一级的node_modules目录中寻找；用于引入第三方模块
 练习：在03_1.js中引入同一级的目录模块03_2，包含文件index.js，创建函数，返回任意3个数字的平均值，暴露该函数；最后在03_1.js调用暴露的函数。
 2.包和npm
  包(package)：指的是第三方模块，需要下载安装才能使用
  npm：用于管理包的工具，例如：下载安装、上传、更新、卸载...
  npm在Node.js安装的时候会附带安装
  CommonJS：是一套模块化规范，Node.js的引入，暴露都会基于这个模块规范。
 3.npm命令
  npm  init  -y    初始化生成package.json文件，作为项目说明文件，可以记录安装的包
  npm  install  包名称     下载安装指定的包，将包下载到当前的node_modules目录，如果目录不存在会自动创建；同时会在package.json中记录安装的包；还会在package-lock.json中记录所有的包的版本号
  npm  install     自动下载安装package.json和package-lock.json中记录的包
 
二.查询字符串模块(querystring)
  查询字符串：是客户端向服务器端传递参数的一种方式，每一组传递的值分为参数名和参数值两部分          
  参数名1=参数值1&参数名2=参数值2
  keyword=耳机&enc=utf-8
  查询字符串模块用于操作查询字符串的工具
  parse()  将查询字符串转为对象，获取传递的值
  练习：获取上边查询字符串传递的值，打印以下格式
    ‘您搜索的关键字： xxx’

三.URL模块 
  URL：统一资源定位(网址)，互联网上的任何资源都对应的URL，用来访问该资源。
  http://www.codeboy.com:9999/1.html?lid=1#one
  协议       域名/IP地址     端口  资源的路径  查询字符串  锚点链接
  new URL(网址)    将一个网址转为对象，为了获取各个部分
var str='http://www.codeboy.com:9999/1.html?a=1&b=2#one';
var obj=new URL(str); //转换为对象
console.log(obj.searchParams); //获取查询字符串部分
console.log(obj.searchParams.get('a'));//获取传递参数
  练习：获取以下URL中传递的参数，打印以下效果
     班级编号：xxxx   课程名称：xxx
  https://www.tmooc.cn:443/web.html?cid=2111&course=nodejs

四.定时器模块(timer)
 1.一次性定时器
开启
var timer=setTimeout(回调函数, 间隔时间)
当间隔时间到了，调用一次回调函数
清除
clearTimeout(timer);
 2.周期性定时器
开启
var timer=setInterval(回调函数, 间隔时间);
每隔一段时间，调用一次回调函数
清除
clearInterval(timer)
