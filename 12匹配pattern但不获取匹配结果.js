var str = 'aaabbb'
var reg = /(a+)(?:b+)/
var str1 = str.match(reg)
// ["aaabbb", "aaa", index: 0, input: "aaabbb", groups: undefined]
console.log('str1=', str1)