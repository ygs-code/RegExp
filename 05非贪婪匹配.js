const str = 'sd2345s423987sd2342'
let str1=str.match(/\d{3,5}?/g)
// 因为增加了"?"符合，导致只要有符合3个连续数字的就返回。
// ["234", "423", "987", "234"]

let str2=str.match(/\d{3,5}/g)
// 去掉"?"后，变成了默认模式，就是贪婪匹配
// ["2345", "42398", "2342"]

console.log('str1=',str1)
console.log('str2=',str2)