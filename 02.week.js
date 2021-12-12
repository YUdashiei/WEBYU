// 创建函数getSum，传递任意一个数字，计算1~n之间所有整数的和
function getSsum(a){
 for (var i=1,b=0;i<=a;i++){
     b+=i;
 }
 console.log(b);
}getSsum(200);

// 创建函数getCount，传递任意两个年份，统计两者之间所有闰年的数量
function getCount(a,b){
   for(var i=a,ka=0;i<=b;i++){
     if(i%4===0 && i%100!=0 || i%400===0){
        ka++;
     }
   }
   console.log(ka);

}getCount(2000,2100);

// 创建函数getMax2，传递任意三个数字，返回最大值
function getMax2(a,b,c){
    if(a>b && a>c){
     return a;
   }else if(b>c){
     return b;  
   } else{
     return c;
   }
//    return a>b && a>c ? a :(b>c ? b :c); 三目运算符做法
} var o=getMax2(935,965,1067);
console.log(o);

// 创建函数getStatus，传递订单的状态，返回对应的汉字状态    使用switch-case
//   1-等待付款  2-等待发货  3-运输中  4-已签收  5-已取消  其它-无法追踪
function getStatus(a){
   switch(a){
       case 1:
           return '等待付款'
       case 2:
           return '等待发货'
       case 3:
           return '运输中'
       case 4:
           return '以签收'
       case 5:
           return '已取消'
       default:
           return '无法追踪'
   } 
} var nb=getStatus(3);
 console.log(nb);

// 创建函数isRun，传递任意一个年份，查看是否为闰年，返回布尔型的值
function isRun(a){
   if(a%4===0 && a%4!=0 || a%4===0){
      return 'true';
   }else{
    return 'false';
   }
} var m=isRun(2021);
console.log(m);

// 创建函数isPrime，传递任意一个数字，查看是否为素数，返回布尔型的值
function isPrime(a){
   for(var i=2;i<=a;i++){
      if(a%2===0){
       return 'false'
      } return 'true'
   }
}var b=isPrime(6);
console.log(b);

// 计算1~100之间所有整数的和，一旦总和超过4000结束循环，并打印出总和
for(var i=1,b=0;i<=4000;i++){
    b+=i;
    if(b>4000){
     console.log(b);
     break;
    }
}

// 打印2000~2100之间的前10个闰年
for(var i=2000,h=0;i<=2100;i++){
   if(i%4===0 && i%100!=0 || i%400===0){
    //    console.log(i);
     h++;
   if(h===10){
    break;
 }
 }
}
console.log(h);

// 打印输出九九乘法表
for(var j=1;j<=9;j++){
    for(var i=1,str='';i<=j;i++){
       str+=i+'x'+j+'='+(i*j)+'\t';
    }
    console.log(str);
}
