一.立即执行定时器
开启
var timer=setImmediate(回调函数)
清除
clearImmediate(timer)
开启
process.nextTick(回调函数)
 
二.同步和异步
  同步：在主程序中执行，会阻止后续代码的执行，通过返回值获取结果
  异步：在一个独立的线程执行，不会阻止主程序后续代码执行，通过回调函数获取结果

三.文件系统模块(fs)     
文件包含文件形式和目录形式
 1.查看文件状态
  statSync(文件的路径)/stat(文件的路径, 回调函数)
    isFile()  查看是否为文件
    isDirectory()  查看是否为目录
 2.创建目录
  mkdirSync(目录的路径) / mkdir(目录的路径, 回调函数)
 3.移除目录
  rmdirSync(目录的路径) / rmdir(目录的路径, 回调函数)
  不允许移除有文件的目录
 4.读取目录
  readdirSync(目录的路径)/readdir(目录的路径, 回调函数)
 5.清空写入文件
  writeFileSync(文件的路径, 写入的数据) / writeFile(文件的路径, 写入的数据, 回调函数)
  如果文件不存在，先创建文件然后写入数据
  如果文件已经存在，先清空文件内容然后写入数据
 6.追加写入
  appendFileSync(文件的路径, 写入的数据) / appendFile(文件的路径, 写入的数据, 回调函数)
  如果文件不存在，先创建文件然后写入数据
  如果文件已经存在，会在文件的末尾追加写入数据
 7.读取文件
  readFileSync(文件的路径)/readFile(文件的路径, 回调函数)
  读取的文件格式为Buffer
 8.删除文件
  unlinkSync(文件的路径)/unlink(文件的路径, 回调函数)

四.流(stream)
  文件流：将一个文件分成多段
  createReadStream()   将一个文件按照流的方式读取，会分成多段 
  createWriteStream()   创建可写入的流，可以分段写入
  pipe()    管道，可以将读取的流添加到写入的流
  on(事件名称, 回调函数)    当监听的某个事件，自动执行回调函数，事件名称是固定形式的字符串

五.http协议
 超文本传输协议，是客户端浏览器和WEB服务器之间的通信协议
 1.通用头信息
   Request URL：请求的URL，要请求的服务器上的资源
   Request Method：请求的方法，对以上资源的操作方式(增删改查)
   Status Code：响应的状态码
      1**：接收到了请求，还没结束
      2**：成功的响应
      3**：响应的重定向，发生跳转       
      4**：客户端错误
      5**：服务器端错误
 2.响应头信息(response)
  Location：要跳转的URL
  Content-Type：响应的内容类型， 解决中文乱码
             text/html; charset=utf-8
 3.请求头信息(request)

六.http模块
 可以用来创建WEB服务器，为客户端提供资源(数据、html、css..)
 createServer()   创建WEB服务器
 listen()   设置端口
 通过事件接收请求，做出响应
 on('request', (req,res)=>{   
    res 响应的对象
    res.setHeader()  设置响应的头信息
    res.write()  设置响应的内容
    res.end()  结束并发送响应
 })
