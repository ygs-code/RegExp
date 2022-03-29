var str = '374829348791';
   var re = /\D/;      //  \D代表非数字
   if (re.test(str)) {   // 返回true,代表在字符串中找到了非数字。
       console.log('不全是数字');
   } else {
       console.log('全是数字');
   }