一.http模块
 req 请求的对象
 req.url   获取请求的URL 
 req.method   获取请求的方法
 res  响应的对象
 res.setHeader()  设置响应的头信息
 res.write()  设置响应的内容
 res.statusCode   设置响应的状态码
 res.end()   结束并发送响应
 练习：编写02_http.js，使用http模块创建web服务器并设置端口，根据请求的URL做出响应
  /index   响应    '这是首页'
  /study   跳转    'https://www.tmooc.cn'
  其它     响应    404   not found

 框架：是针对于项目的一整套解决方案，简化了已有的功能，添加了新的功能。
二.express框架
 基于Node.js平台，快速、开放、极简的WEB开发框架
 以第三方形式出现，需要先去下载安装
   npm  install  express
 1.路由
  用来处理特定的请求，路由包含三部分：请求的URL、请求的方法、回调函数
  res  响应的对象
   res.send()   设置响应的内容并发送
   res.redirect()   设置响应的重定向并发送
   res.sendFile()   设置响应的文件并发送，需要使用绝对路径__ dirname
  req  请求的对象
   req.url   获取请求的URL
   req.method  获取请求的方法
   req.query   获取get传递的参数
  练习：编写文件04_express.js，使用express创建WEB服务器并设置端口，添加路由(get  /search)，响应搜索的网页search.html
传参方式	格式	路由中获取
get传递	http://127.0.0.1:8080/mysearch?keyword=笔记本	req.query
{keyword:'笔记本'}
路由传参	http://127.0.0.1:8080/package/express	req.params
{pname:express}
