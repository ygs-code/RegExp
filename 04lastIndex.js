//它们都以 lastIndex 属性所指的位置作为下次检索的起始点。这样，就可以通过反复调用这两个方法来遍历一个字符串中的所有匹配文本。
var reg = /\d/g
var s = '1ss1s'

var i = reg.test(s)
console.log(i, reg.lastIndex)

i = reg.test(s)
console.log(i, reg.lastIndex)
// reg.lastIndex = 0
var i = reg.test(s)
console.log(i, reg.lastIndex)