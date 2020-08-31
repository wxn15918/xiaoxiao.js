sort（function(){ return b-a}）
ary.pop()  ary.length-1  ary.splice(length-1) 
slice(n-1,m)
从索引n开始，删除m个，用x替换
父级.appendChild(子级)  insetBefore innerHtml
previousElementSibling
Math.round(Math.random()*(m-n)+n)
replace(n,m)
getElementById_ getElementsByClassName[0]  getElementsByTagName[0]
true true
undefined undefined
39行 '珠峰' 5000    41行 undefined 5000
49行 '300'     52行 '100'
65=>9 66=>16 67=>36 68=>64
59=>4 5     63=>14 22
76=>true  77=>20 undefined  78=>NaN  79=>Object原型
实现不了 因为当循环结束之后执行点击事件，此时的索引i值是2，无论点击哪个，body的背景都是orange

解决方案一
 var inpList = document.getElementsByTagName('input')
        var ary = ['red','green','orange'];
        for(let i =0;i<inpList.length;i++){
            var cur = inpList[i];
            cur.onclick =function(){
                document.body.style.background = ary[i];
            }
        }

解决方案二
  var inpList = document.getElementsByTagName('input')
        var ary = ['red', 'green', 'orange'];
        for (var i = 0; i < inpList.length; i++) {

            var cur = inpList[i];
            // cur.setAttribute('index',i);
            cur.index = i;
            cur.onclick = function () {
              
                document.body.style.background = ary[this.index];
            }
        }        