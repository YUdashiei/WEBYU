一.数组API
reverse()翻转数组元素
sort()对数组进行排序，默认按照编码排列
sort(function(a,b){
  return a-b;//按照数字从小到大排列
  //return b-a;//按照数字从大到小排列
})
 concat()  拼接多个数组
如何学习一个API：作用、参数、返回值
数组API还需要查看原数组是否会发生变化sort()
 slice(start,end)截取数组元素，start开始的下标，end结束的下标，不包含结束的这项，如果end为空截取到最后，下标为负数表示倒数，返回截取到的元素；原数组不会发生变化
 练习：创建数组，包含a~h，每个字母是一个元素，分别截取cd和f，拼接截取的两部分   ['c', 'd', 'f']
 var arr=['a','b','c','d','e','f','g','h'];
 var arr1= arr.slice(2,4);
 var arr2=arr.slice(-3,-2);
 console.log(arr1.concat(arr2));

 splice(start, count, v1,v2...)删除数组元素，start开始的下标，count要删除的长度，count为空删除到最后，下标是负数表示倒数，v1,v2删除后补充的元素，返回删除的元素，原数组会发生变化
 练习：创建数组，包含a~h，每个字母是一个元素，删除de，替换f为m，在下标为1的位置插入z
var arr=['a','b','c','d','e','f','g','h'];
var arr1=arr.splice(3,2);
var arr2=arr.splice(-3,1,'m');
var arr3=arr.splice(1,0,'z');
console.log(arr);

 push()在数组的末尾添加一个或者多个元素，返回数组的长度，原数组会发生变化
 pop()删除数组末尾的一个元素，返回删除的元素，原数组会发生变化
 unshift()在数组的开头添加一个或者多个元素，返回数组的长度，原数组会发生变化
 shift()删除数组开头的一个元素，返回删除的元素，原数组会发生变化
 indexOf()查找数组中是否含有某个元素，找到返回下标，找不到返回-1
  练习：创建数组包含爱国福、和谐福，如果数组中不含有敬业福，则把该福字添加到数组中
  var arr=['爱国福','和谐福'];
  if(arr.indexOf('敬业福')===-1){
	arr.push('敬业福');
  }

console.log(arr);
API查找
https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference
https://www.w3school.com.cn/js/index.asp

二. 二维数组
 用于对一组数据进行二次分类
 [  [元素1,元素2], [元素3, 元素4]..  ]
 访问
   数组[下标][下标]

三.字符串对象
 包装对象：目的是为了让原始类型的数据像引用类型数据一样，具有属性和方法，JS提供了三种包装对象，String、Number、Boolean
  new String()   将字符串包装为对象
  String()   将一个值强制转换为字符串
 1.转义字符 —— \
   改变字符本身意义
   \'   将具有特殊意义的引号转为普通的引号
   \n  将字符n转义为换行符
   \t   将字符t转义为制表符(tab键，多个连续的空格)
   练习：打印输出 ‘C:\Users\web’
   var arr='C:\\Users\\web';
   console.log(arr);

 2.字符串API
  length  获取字符串的长度
  charAt(下标)   获取下标对应的字符，可以用数组写法  字符串[下标]
  练习：遍历字符串javascript，获取字符串中a字符出现的次数
  var arr='javascript';
 for(var i=0,sum=0;i<=arr.length;i++){
   if(arr[i]==='a'){
     sum++;
   }
}
console.log(sum);

  indexOf()   查找字符串中的某个字符（串）第一次出现的位置，返回下标，找不到返回-1
  lastIndexOf()    查找字符串中某个字符(串)最后一次出现的位置，返回下标，找不到返回-1
  练习：声明变量保存用户输入的邮箱，判断是否有@字符，如果没有打印‘非法的邮箱’
var arr='yu789@dhak.cn';
if(arr.indexOf('@')===-1){
   console.log('非法邮箱');
}

  slice(start, end)  截取字符串，start开始的下标，end结束的下标，end为空截取到最后，不包含end本身，下标为负数表示倒数
  练习：声明变量保存用户输入的邮箱，分别截取出邮箱的用户名和域名 tao111@163.com
  var arr='yu68758@896mai.cn';
  var n=arr.indexOf('@');
  console.log(arr.slice(0,n),arr.slice(n+1));

  toUpperCase()  英文字母转大写
  toLowerCase()  英文字母转小写
所有的字符串下的API都不会对原来的字符串产生影响
  split(str)   将字符串转为数组，可以指定按照哪个字符串分隔
  
  
  
  
  
  
  
  
  
