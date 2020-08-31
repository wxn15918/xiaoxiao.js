(function(){
    /* 进行ajax请求 */
    let imgs = document.getElementsByClassName('bg');

    let data = null;
    let xhr = new XMLHttpRequest;
    xhr.open('get','data.txt',false);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)){
            data = JSON.parse(xhr.responseText);
        }
    }
    xhr.send();
  //  console.log(data);

    /* 渲染数据 */
    let uls = utils.toArray(document.getElementsByTagName('ul'));
    readerHtml();
    function readerHtml(){
      
      for(let i=0;i<50;i++){
          // 1、通过random随机获取一个索引，通过索引去data里取值
          let index = Math.round(Math.random()*(9-0)+0);// 获取0-9随机整数
          let curImg = data[index];// 通过索引去data里取值
  
          // 动态创建img元素和p元素
          let img = document.createElement('img');
          let p = document.createElement('p');
          let li = document.createElement('li');
  
  
          p.innerText = curImg.title;// 给p增加内容
          img.setAttribute('true-img',curImg.src);
          img.className = 'bg';
          img.style.height = Math.round(Math.random()*(250-180)+180) + 'px';
         // img.style.height = curImg.height;
          li.appendChild(img);
          li.appendChild(p);
        uls.sort((a,b)=>{
            // 按照内容的真实高度来排序
            return a.scrollHeight - b.scrollHeight;
        })
        uls[0].appendChild(li);
      }

      
      function delay(){

          for(let i = 0;i<imgs.length;i++){
            delayImg(imgs[i]);
          }
      }

      function delayImg(img){

        if(img.flag){
            return;
        }
        let imgH = img.offsetHeight,
            imgT = utils.offset(img).top,
            screenH = utils.win('clientHeight'),
            screenT = utils.win('scrollTop');

            if(screenH+screenT>=imgH+imgT){
                let address = img.getAttribute('true-img');
                img.src = address;
                img.flag=true;
               // img.className='';//// 当图片加载完成之后，把当前img的类名bg去掉，防止以后再去加载这个图片(因为imgs是通过类名获取的，把类名去掉，imgs会自动更新，这样imgs里面只剩下没有加载的图片了)
                img.onerror=function(){
                    img.src='./img/default.jpg';
                }
            }

      }
      delay();

      window.onscroll=function(){
          let bodyH = utils.win('scrollHeight');
          let screenH = utils.win('clientHeight');
          let screenT = utils.win('scrollTop');
          if(screenH+screenT+100>= bodyH){
             readerHtml();
          }
          delay();
      }


    }
})()