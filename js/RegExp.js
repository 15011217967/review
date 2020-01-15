let reg = [
  // 1./[a-h]/g
  "let str = 'Is0 this1 all2 there3 is4?';使用match方法，匹配出str中所有字母a-字母h之间的值，赋值给arr并打印？",
  // 2./[ah]/g
  "let str = 'Is0 this1 all2 there3 is4?';使用match方法，匹配出str中为字母a和字母h的值，赋值给arr并打印？",
  // 3./[^ah]/g
  "let str = 'Is0 this1 all2 there3 is4?';使用match方法，匹配出str中除了为字母a和字母h的值，赋值给arr并打印？",
  // 4./[^a-h]/g;
  "let str = 'Is0 this1 all2 there3 is4?';使用match方法，匹配出str中除了字母a-字母h之间的值，赋值给arr并打印？",
  // 5./[0-9]/g
  "let str = 'Is0 this1 all2 there3 is4?';使用match方法，匹配出str中除了字母a-字母h之间的值，赋值给arr并打印？",
  // 6./[^0-9]/g
  "let str = 'Is0 this1 all2 there3 is4?';使用match方法，匹配出str中除了字母a-字母h之间的值，赋值给arr并打印？",

  
  // 7.i表示可以匹配出任意值
  "let str = 'Is0 th_is1 all2 the_re3 is4?';使用match方法，匹配出第一位是i，第二位任意字符的值，赋值给arr并打印？",
  // 8.\w 匹配出单词字符；
  "let str = 'Is0 thi_s1 all2 there3 is4?';使用match方法，匹配出第一位是i，第二位为单词字符的值，赋值给arr并打印？",
  // 9.匹配出非单词字符
  "let str = 'Is0 this1 all2 there3 is4?';使用match方法，匹配出str中非单词字符，赋值给arr并打印？",
  // 10.匹配出数字
  "let str = 'Is0 this1 all2 there3 is4?';使用match方法，匹配出第一位是s，第二位为数字的值，赋值给arr并打印？",
  // 11.匹配出非数字
  "let str = 'Is0 this1 all2 there3 is4?';使用match方法，匹配出str中非数字字符的值，赋值给arr并打印？",
  // 12.匹配出空格
  "let str = 'Is0 this1 all2 there3 is4?';使用match方法，匹配出str中的所有空格，赋值给arr并打印？",
  // 13.匹配出非空格
  "let str = 'Is0 this1 all2 there3 is4?';使用match方法，匹配出str中的所有非空格，赋值给arr并打印？",
  // 14.匹配出单词边界是否存在某个值
  "let str = 'Is0 this1 all2 there3 is4?';使用match方法，匹配出str中单词的开头和结尾是否含有大写I字符的值，赋值给arr并打印？",
  // 15.匹配出非单词边界是否存在某个值
  "let str = 'Is0 this1 all2 there3 is4?';使用match方法，匹配出str中单词的中间位置是否含有i字符的值，赋值给arr并打印？",

  // 16.+ 量词，匹配出至少一个符合表达式的字符;
  "let str = 'zh_sdfd521sdfg6zdzhhhhhh09wer@126.com';使用match方法，匹配出str中，至少一位单词字符的值，赋值给arr并打印？",
  // 17.*量词，匹配出零个或多个符合表达式的字符
  "let str = 'zh_sdfd521sdfg6zdzhhhhhh09wer@126.com';使用match方法，匹配出str中，第一个字母是z，后面紧跟零个h或多个h的值，赋值给arr并打印？",
  // 18.? 量词, 匹配出零个或一个符合表达式的字符
  "let str = 'zh_sdfd521sdfg6zdzhhhhhh09wer@126.com';使用match方法，匹配出str中，第一个字母是z，后面紧跟零个h或一个h的值，赋值给arr并打印？",
  // 19.{x} 量词，匹配出到x个符合表达式的字符；
  "let str = 'zh_sdfd521sdfg6zdzhhhhhh09wer@126.com';使用match方法，匹配出str中，第一个字母是z，后面紧跟2个h的值，赋值给arr并打印？",
  // 20.{x,y} 量词，匹配出到x个至y个符合表达式的值；
  "let str = 'zh_sdfd521sdfg6zdzhhhhhh09wer@126.com';使用match方法，匹配出str中，第一个字母是z，后面紧跟3个到5个之间h的值，赋值给arr并打印？",
  // 21.{x,} 量词，匹配出到x个至n个符合表达式的值；
  "let str = 'zh_sdfd521sdfg6zdzhhhhhh09wer@126.com';使用match方法，匹配出str中，第一个字母是z，后面紧跟3个以上h的值，赋值给arr并打印？",
  // 22.n$ 量词，匹配出任何以n结尾的字符串；
  "let str = 'zh_sdfd521sdfg6zdzhhhhhh09wer@126.com';使用match方法，匹配出str中，以com结尾的值，赋值给arr并打印？",
  // 23.^n 量词，匹配出开头为n的字符；
  "let str = 'zh_sdfd521sdfg6zdzhhhhhh09wer@126.com';使用match方法，匹配出str中，以zh开头的值，赋值给arr并打印？",
  // 24.(?=n) 量词，匹配出任何其后紧跟指定字符串n的字符串；
  "let str = 'http://wap.dev.gomegj.com/yf/repairsubmit.html';使用match方法，匹配出str中的字符，后面紧跟着是.html的值，赋值给arr并打印？",
  // 25.?!n 量词，匹配出任何其后没有紧跟指定字符串n的字符串；
  "let str = 'http://wap.dev.gomegj.com/yf/repairsubmit.html';使用match方法，匹配出str中的字符，后面没有紧跟着是.html的值，赋值给arr并打印？",
  // 26./1[3-9]\d{9}$/g 匹配手机号
  "let str = 'zheNg ze 1881080aaaa da shi 15011217967 N n 11012123656n?';使用match方法，匹配出正确的手机号，赋值给arr并打印？",
  // 27./^\w+([-+.]\w+)+@\w+([-+.]\w+)+/g 匹配邮箱
  "let str = 'zkht-zhangmeng_kjhaskdjh.asdjh@gis_gome+inc-com.cn';使用match方法，匹配出正确的邮箱，赋值给arr并打印？",
  // 28./\w+([-+]*\w+)*(?=.html)/g; 匹配html名称
  "let str = 'http://wap.dev.gomegj.com/yf/repair_su+b-mit.html';使用match方法，匹配出html的名称repair_su+b-mit，这一坨，赋值给arr并打印？",
  // 29./^\s*|\s*$/g 去除首尾空格
  "let str = '  qu diao qian hou kongge ?   ';使用正则表达式，去除str的首尾空格？",
  // 30./[\u4e00-\u9fa5]+/g 匹配汉字
  "let str = '123!!@#三尺sdsdf&*@!长剑 斩不断345相思情缠！123123fyf%';使用match方法，匹配出str中的所有汉字，赋值给arr并打印？",
  // 31./(^[1-9](\.\d)?$)|(^[0]\.\d$)/ 匹配正确的折扣
  "写一个input输入框，输入框中匹配正确的折扣，如3.2折，如果输入不正确的折扣，input边框变成红色，值正确时红色边框消失？",
  // 32./^\d+(\.\d{1,2})?$/g; 匹配正确的金额
  "写一个input输入框，输入框中匹配数字或保留小数点后两位的数字；如：232.32，17.3，7858，如果输入不正确，input边框变成红色，值正确时红色边框消失？",
  // 33./^[a-zA-Z\u4e00-\u9fa5]+(\s+[a-zA-Z\u4e00-\u9fa5]+)*$/g; 注册名称校验
  "写一个input输入框，输入框中匹配汉字和字母，中间可以有空格；；如：zh 张三 com，如果输入不正确，input边框变成红色，值正确时红色边框消失？",
];