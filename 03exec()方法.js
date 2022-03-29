var testStr = "now test001 test002";
    var re = /test(\d+)/; //只匹配一次
    var r = "";
    var r = re.exec(testStr)
    console.log(r);// test001  001 返回匹配结果，以及子项
    console.log(r.length); //2   返回内容的长度
    console.log(r.input); //now test001 test002    代表每次匹配成功的字符串
    console.log(r[0]);   //test001
    console.log(r[1]);  //001    代表每次匹配成功字符串中的第一个子项 (\d+)
    console.log(r.index );   //  4   每次匹配成功的字符串中的第一个字符的位置