let reg1=/(?:js|golang) is good/
let reg2= /(js|golang) is good/
let str1 = reg1.exec('js is good, golang is good')
// js这个词虽然有（）进行处理，但是不会被匹配到，而是整体输出`js is good`
// ["js is good", index: 0, input: "js is good, golang is good", groups: undefined]

let str2 = reg2.exec('js is good, golang is good')

// 去掉“?:”之后的结果
// ["js is good", "js", index: 0, input: "js is good, golang is good", groups: undefined]
console.log('str1=', str1)
console.log('str2=', str2)


// [
//     'js is good',
//     index: 0,
//     input: 'js is good, golang is good',
//     groups: undefined
//   ]
console.log('js is good, golang is good'.match(str1))



console.log('js is good, golang is good'.match(str2))
// null