var str = '111$222'
var reg = /(?<=\$)\d+/
var str1=str.match(reg) // ["222", index: 4, input: "111$222", groups: undefined]
console.log('str1=',str1)