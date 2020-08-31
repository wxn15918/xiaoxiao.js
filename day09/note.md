1，Number、String、Boolean、Null、undefined、Object、Function
2:typeOf instanceOf constructor
3: 基本数据类型的数据存储在栈内存上，而引用数据类型的数据存储在堆内存中，返回一个地址给栈内存来存储
4：arguments、形参
5：setInterval() 、setTimeout()
document.getElementById、document.getElementsByClassName
document.body.appendChild(document.createElement('p'))
previousSibling
slice()、subStr()、subString()
replace(n,m)
push()、ary[ary.length] = 'xxx'、ary.splice(ary.length,0,xxx)
pop()、splice(length-1)
forEach、map
sort(function(){return a-b})
slice(n-1,m)
Math.round(Math.random()*(m-n)+n)
Math.max() \  Math.min()
true  
true
'ok'
  写一个sum方法来实现任意数求和功能（说明：任意数求和指的是，在方法执行的时候，不管传多少个数字，都可以进行累加求和；对于传递进来的是非有效数字要进行屏蔽；最后把求出的和返回到函数的外面；）
 <script>
        let num = null;
        function fn(){
            for(var i = 0;i<arguments.length;i++){
                let item = Number(arguments[i]);
                if(!isNaN(item)){
                   num += item ;
                }
            }
            return num
        }

        console.log(fn(13,12,true,undefined,'33',null));
    </script>
   面试题：获取1~100之间，所有即能被五整除，也能被三整除的数字，相加的和
      使用FOR循环处理的，只能获取8分，使用递归处理的，可以获取15分
 <script>
      function fn(num) {
      if (num > 100) {
        return 0;
      };
      if (num % 3 === 0 && num % 5 === 0) {
        return num + fn(num + 1);
      }
     return fn(num + 1);

    }
    console.log(fn(1));
 </script>

 做一个产生随机验证码的效果，产生四位验证码，验证码由数字，小写字母，大写字母组成；每点击一次，就会产生一个新的验证码；并且保证验证码中的字符是不重复的；
<script>
    let input = document.getElementById('input');
    let btn = document.getElementById('button');
    // 封装一个用来产生随机码的函数
    function change(str,num = 4){
        let value = '';
        str = str || '0123456789qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM';
        for(var i = 0;i<str.length;i++){;
            let index = Math.round(Math.radom()*(str.length-1-0)+0);
            let char = str[index];
            if(value.indexOf(char) === -1){
                value += char;
            }else{
                i--;
            }
        }
        input.innerText = value;
    }
    change();
    btn.onclick = function(){
        change();
    }
</script>

<body>
<ul id=’ul1’>
<li></li>   <li></li>   <li></li>   <li></li>
      </ul>
</body>
按照上述HTML结构编写对应的JS代码，实现如下的需求：(能写出的都写出来，这样根据编写情况会酌情给分)
->获取#ul1下的所有li,实现奇数行和偶数行的隔行变色 (奇数行红色|偶数行绿色)  
->鼠标滑过每一个li让当前行的背景颜色变为粉色(pink)，鼠标离开恢复开始的颜色
->鼠标点击每一个li弹出“我是第N个li” (n是每一个li的索引+1)
 <script>
            var main = document.getElementById('ul1');
            var list = document.getElementsByTagName('li');
            for (var i = 0; i < list.length; i++) {
            if (i % 2 === 0) {
                list[i].style.backgroundColor = 'red';
            } else {
                list[i].style.backgroundColor = 'green';
            }

            list[i].color = list[i].style.backgroundColor;
            list[i].onmouseover = function(){
                this.style.backgroundColor = 'pink';
            }
            list[i].onmouseout = function(){
                this.style.backgroundColor = this.color;
            }         

     }   
     for(var i=0;i<list.length;i++){
       list[i].index = i;
            list[i].onclick = function(){
              var N = this.index + 1;
                alert(`我是第${N}个li`);     
            }
     }


        </script>