let str = `I spent $100 RMB to buy this book`;
let str1 =/(?<!￥)\d+/.exec(str)
// ["100", index: 9, input: "I spent $100 RMB to buy this book", groups: undefined]

console.log('str1=', str1)