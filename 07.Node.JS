用户路由
//引入express模块 
const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//console.log(pool);
//创建路由器对象
const r=express.Router();
//1.用户注册接口(post /reg)
//接口地址：http://127.0.0.1:8080/v1/users/reg
//请求方式：post
r.post('/reg',(req,res,next)=>{
  //1.1获取post传递的参数
  var obj=req.body;
  console.log(obj);
  //1.2验证传递的参数是否为空
  if(!obj.uname){
    res.send({code:401,msg:'uname不能为空'});
	//阻止往后执行
	return;
  }
  if(!obj.upwd){
    res.send({code:402,msg:'upwd不能为空'});
	return;
  }
  if(!obj.email){
    res.send({code:403,msg:'email不能为空'});
	return;
  }
  if(!obj.phone){
    res.send({code:404,msg:'phone不能为空'});
	return;
  }
  //验证手机号码格式
  if(!/^1[3-9]\d{9}$/.test(obj.phone)){
    res.send({code:405,msg:'手机号码格式错误'});
	return;
  }
  //执行SQL命令
  pool.query('insert into xz_user set?',[obj],(err,result)=>{
    //err 可能是SQL命令错误，可能是连接错误
	if(err){
	  //一旦出现错误，交给下一个错误处理的中间件
	  next(err);
      //阻止往后执行
	  return;
	}
	console.log(result);
	res.send({code:200,msg:'注册成功'});
  });

});
//暴露(导出)路由器对象
module.exports=r;


web服务器
//引入express模块
const express=require('express');
//引入用户路由器对象
const userRouter=require('./routes/user.js');
//console.log(userRouter);
//创建WEB服务器
const app=express();
//设置端口
app.listen(8080);
//将post传递的参数转为对象
app.use(express.urlencoded({
  extended:false
}));
//使用路由器，添加前缀/v1/users
//http://127.0.0.1:8080/v1/users/reg
app.use( '/v1/users',userRouter );
//添加错误处理中间件，拦截所有路由传递过来的错误
app.use( (err,req,res,next)=>{
  //err 收到的传递过来的错误
  console.log(err);
  //响应服务器端错误
  res.send({code:500,msg:'服务器端错误'});
} );

mysql数据库模块
//引入mysql模块
const mysql=require('mysql');
//创建连接池对象
const pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'xz',
  connectionLimit:15
});
//暴露对象
module.exports=pool;
