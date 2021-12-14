一.检测对象中是否含有某个属性
对象.属性名===undefined  true->不存在   false->存在
对象.hasOwnProperty('属性名')   true->存在  false->不存在
 '属性名' in 对象   true->存在  false->不存在
示例：创建一个商品对象，包含的属性有编号、标题、价格，如果产地属性不存在，则添加该属性；如果价格属性存在，则执行打9折；
var laptop={
  lid:1,
  title:'联想E480C',
  price:5200
}
//判断属性不存在
//laptop.madeIn===undefined    
if(!('madeIn' in laptop)){
  laptop.madeIn='中国';
}
//判断属性存在
if(laptop.hasOwnProperty('price')){
  laptop.price*=0.9;
}

console.log(laptop);
二.对象中的方法
方法对应的是一个函数
var person={
  play：functionO(){
  this 指调用方法的对象
  }
}
person.play()//调用方法
示例：创建一个圆的对象，包含的属性有半径和圆周率，添加方法计算面积并返回结果，添加方法计算周长并返回结果
var circle={
  r:5,
  pi:3.14,
  getArea:function(){
    return this.pi*this.r*this.r;
  },
  getLen:function(){
    return 2*this.pi*this.r;
  }
}
console.log( circle.getArea() );
console.log( circle.getLen() );

三.数据的储存
原始类型：存储在栈内存中，分配固定的空间大小
引用类型：存储在堆内存中，会自动生成一个地址，然后再把地址保存到栈内存中，动态分配空间大小
原始类型的值会被JS系统自动销毁
引用类型的值不会自动销毁，当不被任何的地址指向才会被销毁
null：空地址，如果要销毁引用类型的值只需要赋值为null 

四.数组
1.数组字面量
[元素1,元素2,..]
数组是一组数据的结合，每个数据称为元素
2.访问元素
数组[索引下标]下标是自动为每个元素添加编号,是>=0整数
如果元素不存在则返回undefined
3.数组长度
数组.length 获取数组元素的个数
在数组的末尾添加元素数组[数组.length]=值
4.内置构造函数创建数组 
new Array(元素1,元素2...)
new Array(n)创建数组，初始化数组长度为n，可以添加更多个元素
5.数组的分类
索引数组：以>=0的整数作为下标
关联数组：以字符串作为下标，需要单独添加元素，无法使用长度属性
6.对比对象和数组的区别
  两者都可以存储一组数据，对象通过属性，数组通过元素
  对象的数据是无序的，不分先后；数组的数据是有序排列
7.数组的遍历
  通过循环的方式，依次访问每个元素
for(var k  in  数组){
  k  下标
  数组[k]   元素
}
for(var i=0;i<数组.length;i++){
  i  下标
  数组[i]  元素
}
8.API
JS预定义好的函数和方法
toString()   将数组转为字符串，元素之间用逗号分隔
join()将数组转为字符串，可以指定元素之间的


