var str = '￥998$888';
var reg = /(?<!\$)\d+/;
console.log(reg.exec(str)) //998