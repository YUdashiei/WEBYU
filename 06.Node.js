一.mysql模块      
 专门用于操作mysql数据库的模块
 下载安装    npm   install   mysql
  insert  into  表名称  values(...);
  delete  from  表名称  where  条件;
  update  表名称  set  列名称=值,列名称=值  where 条件;
  select * from 表名称 ...;
                            
  createConnection()   创建连接对象
  createPool()   创建连接池对象
  query(SQL命令, [要过滤的值] , 回调函数)   执行SQL命令，通过回调函数获取结果
  select * from emp where "1";
  SQL注入：往SQL命令加入新的命令，会破坏已有SQL命令

  占位

json格式化：https://tool.oschina.net/codeformat/json/
http://www.codeboy.com:9999/

二.接口
 后端为前端提供的动态资源
 RESTful接口
  REST: 表述性状态转移，它是分布式超媒体的架构风格
  
  1.接口地址
    http://127.0.0.1:8080/v1/emps
                    版本号  资源名称(复数形式)
    http://127.0.0.1:8080/v1/emps/3
                               单个资源(路由传参)  
    http://127.0.0.1:8080/v1/users/login
                                 对资源的特殊的操作
  2.请求方法
   对资源的操作的方式，分为增删改查
   get    获取资源
   post   新建资源(插入数据)
   put    修改资源
   delete  删除资源
新建资源和修改资源，都使用post传参
 3.过滤数据
  分页过滤
  http://127.0.0.1:8080/v1/emps?pno=2
                               传递页码过滤
  http://127.0.0.1:8080/v1/emps?s1=8000&s2=10000
                               传递工资过滤
使用get传递过滤数据
 4.返回格式    
  格式为json，是一种字符串对象，里边通常是数组或者对象
  包含状态码、消息、数据
  {"code":200,"msg":"登录成功" }
  {"code":200,"msg":"查找成功","data": 数据}

 ApiPost：接口测试工具
 www.apipost.cn

 练习：创建WEB服务器，编写添加员工路由(post  /v1/emps)，响应{code:200,msg:'员工添加成功'}一.mysql模块      
const express=require('express');
const app=express();
const mysql=require("mysql");
const pool=mysql.createPool({
      host:'127.0.0.1',
	  port:'3306',
	  user:'root',
	  password:'',
	  database:'tedu',
  //默认15个连接(往数据库执行命令的时候连接)
   connectionLimit:15
});
app.listen(8080);
app.use(express.urlencoded({
  extended:false
}));

//路由（接口）
app.post('/v1/emps',(req,res)=>{
	console.log(req.body);
    pool.query('insert into emp set?',[req.body],(err,result)=>{
	if(err)throw err;
	});
 res.send({code:200,msg:'添加员工成功'});

});
