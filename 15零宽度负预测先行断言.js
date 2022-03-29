var str = 'nodejs'
var reg = /node(?!js)/
var str1=reg.test(str)   // false
console.log('str1=',str1)