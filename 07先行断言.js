const str = 'The best way to achieve a goal is to devote 100% of your time and energy to it.'
let str1 = str.match(/\d+(?=%)/g)

console.log('str1=', str1)