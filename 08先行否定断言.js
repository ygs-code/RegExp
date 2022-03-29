let str = 'I have more than 100 books'
let str1 =str.match(/\d+(?!%)/g)
// ["100"]
str = 'I have more than 100 books, but only 20% is about software'
let str2 =str.match(/\d+(?!%)/g)
// 【注意】2也匹配到了,如果需要把20也过滤掉，需要额外加代码
// ["100", "2"] 
console.log('str1=', str1)
console.log('str2=', str2)