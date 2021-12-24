post传递	以流的形式，URL不可见
传递大的文件（数据）	通过事件获取
req.on('data', (c)=>{
   c获取的参数，格式为buffer
   c.toString()   转为字符串
   user=tao&pwd=123456 需要转为对象
})
 
网址：www.expressjs.com.cn

一.路由器
 路由器是用来管理路由，最终路由器被WEB服务器使用
 每个路由器是一个自定义模块
 
使用步骤
路由器
//引入express
const r=express.Router();//创建路由器对象
//往路由器添加路由
module.exports=r; //暴露(导出)路由器对象
WEB服务器
//使用路由器，添加前缀
app.use( 添加的前缀, 引入的路由器 )

二.中间件
 拦截对WEB服务器的请求
 分为应用级中间件、路由级中间件、内置中间件、第三方中间件、错误处理中间件
 1.应用级中间件
  也称为自定义中间件，一旦拦截到请求，自动调用函数
function  fn(req,res,next){
  next()  //往后执行下一个中间件或者路由
}
app.use( 要拦截的URL, fn )
  练习：添加路由(get /shopping)，用于将商品加入到购物车，传递商品的价格price，对传递的价格打九折，最后在路由中响应‘商品的价格：xxx’
const express=require('express');
//创建WEB服务器
const app=express();
app.listen(8080);
function fn(req,res,next){
  //console.log('拦截了对/list的请求');   
  //获取get传递的参数
  console.log(req.query);
  //验证用户是否为管理员root
  //如果用户名不是root
  if(req.query.user!=='root'){
    res.send('请提供管理员账号');
  }else{
    //否则是管理员，允许往后执行
    //往后执行可能是下一个中间件，或者是路由
    next();
  }
}
//添加中间件，拦截对/list的请求
app.use('/list',fn);
//路由(get /list)  响应‘这是所有的用户’
app.get('/list',(req,res)=>{
  res.send('这是所有的用户，只有管理员有权限查看');
});
//添加中间件，拦截对/delete的请求，验证用户身份
app.use('/delete',fn);
//删除用户路由(get  /delete)，响应‘删除成功’
app.get('/delete',(req,res)=>{
  res.send('删除成功');
});
function fn2(req,res,next){
  //获取get传递的参数
  console.log(req.query);
  //打折
  req.query.price*=0.9;
  //往后继续执行
  next();
}
//添加中间件，拦截对/shopping的请求
app.use('/shopping',fn2);
//添加到购物车路由(get /shopping)
app.get('/shopping',(req,res)=>{
  //获取get传递的参数
  console.log(req.query);
  res.send('商品的价格：'+req.query.price);
});
 2.路由级中间件
  路由器的使用
  app.use(要拦截的URL, 路由器)
 3.内置中间件
  静态资源：包括html，css，js，图形，视频，声音...
  托管静态资源：客户端请求静态资源，不需要通过路由响应，而是自动查找资源
  app.use( express.static(托管的目录) )
  练习：编写文件05_static.js，创建WEB服务器，托管静态资源到public目录，包含登录的文件login.html，点击提交向服务器请求(post  /mylogin)，获取post传递的参数，响应‘登录成功’
const app=express();
app.listen(8080);
//托管静态资源到public
app.use( express.static('./public') );
//将post传递的参数转为对象
app.use( express.urlencoded({
  //是否使用扩展的方法(qs)转为对象
  extended: false //false -> 不使用  true->使用
}) );
//路由(post /mylogin)
app.post('/mylogin',(req,res)=>{
  //获取post传递的参数
  console.log(req.body);
  /*
  req.on('data',(c)=>{
    var str=c.toString();
	//console.log(str);
	//转为对象
    var obj=querystring.parse(str);
	console.log(obj);
  });
  */
  res.send('登录成功');
});  
  将post传递的参数转为对象
app.use( express.urlencoded({
  extended: false
 //是否使用扩展的qs转为对象  true->使用  false->不适用
}) );
路由获取
req.body

练习：创建web服务器，托管静态资源到public目录，包含文件add.html，点击提交(post  /add)，获取post传递的参数，响应‘添加成功，员工姓名：xx’
const express=require('express');
const app=express();
app.listen(8080);
//托管静态资源到public目录
app.use( express.static('./public') );
//将post传递的参数转换为对象
app.use( express.urlencoded({
  extended:false
}) );
//路由(post /add)
app.post('/add',(req,res)=>{
  console.log(req.body);
  res.send('员工添加成功！ 姓名：'+req.body.ename);
});
