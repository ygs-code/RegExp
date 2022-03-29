let str = `I spent ￥100 RMB to buy this book`
let str1 =/(?<=￥)\d+/.exec(str)
console.log('str1=', str1)