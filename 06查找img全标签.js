const str = '<img class="latex" style="width:2.323ex; height:2.009ex; vertical-align: -0.171ex;" src="https://td.com/1.png" /><span>s</span>'
let str1 = str.match(/<img.*?\/?>/g)
// ["<img class="latex" style="width:2.323ex; height:2.…l-align: -0.171ex;" src="https://td.com/1.png" />"] 

// 下面把第一个"?"去掉，发现结果就是全部匹配了。
let str2 = str.match(/<img.*\/?>/g)
// ["<img class="latex" style="width:2.323ex; height:2.…1ex;" src="https://td.com/1.png" /><span>s</span>"]
console.log('str1=', str1)
console.log('str2=', str2)