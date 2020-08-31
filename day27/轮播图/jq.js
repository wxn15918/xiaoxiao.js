let swiper = (function(){
    let $outer = $('#outer'),
        $wrapper = $('#wrapper'),
        $pre = $('#pre'),
        // $list = $pre.find('li'),
        $left = $('#left'),
        $right = $('#right'),
        timer = null,
        step = 0,
        data = null;

    // 获取数据
let send = () => {
    $.ajax({
        url: './banner.json ',
        method: 'get',
        async: false,
        success: result => {
            // 获取数据成功会执行，并且已经转换为JSON格式的对象
            data = result;
            console.log(data);
           // bindHtml(data);
        }
    });
}

let bindHtml = (data) => {
    let items = ``;
    let list = ``;
    $.each(data, (index, item) => {
      items += `<li><img src="${item.img}" alt=""></li>`;
      list += `<li></li>`
    });
    items += `<li><img src="${data[0].img}" alt=""></li>`;
    $wrapper.html(items);
    $pre.html(list);
    $pre.css('width', (data.length + 1) * 25);
  }

let autoMove = (n) => {
    typeof n === 'undefined' ? step++ : step = n;
    if(step === data.length+1){
      $wrapper.css('left', 0);
      step = 1;
    }
    changeTip();
    $wrapper.stop(true).animate({left:step*-800},300)
  }

  let startAndStop = (value)=>{
    $outer.hover(()=>{
      clearInterval(timer);
    },()=>{
      timer = setInterval(autoMove,value);
    })
  }

  let changeTip = ()=>{
    // eq是通过索引获取当前的对应的jq元素
    // 假设当前step是2，说明页面显示的是第三章图片，这时候让第三个焦点去高亮，第三个焦点的索引是2
    let index = step;
    if(step === data.length){
      // 如果当前的step等于data.length，那就说明页面的图片已经显示的是复制的哪一张图片了，然后让第一个焦点高亮就可以
      index = 0;
    }
    $('#pre li').eq(index).addClass('active').siblings().removeClass('active');
    // 通过step获取当前需要高亮的焦点加上active类名，然后在获取高亮焦点的兄弟姐妹元素，清除他们的active类名
  }

  let focus = ()=>{
      $('#pre li').click(function(){
          let index = $(this).index();
          autoMove();
      })
  }

 
  let leftAndRight = ()=>{
    $left.click(function(){
      step-=1;
      if(step<0){
        $wrapper.css('left',data.length*-800);
        step = data.length-1;
      }
      autoMove(step);
    })
    $right.click(function(){
      autoMove()
    })
  }




  return {
    init: (value = 2000) => {
      send();
      bindHtml(data);
      timer = setInterval(autoMove,value);
      startAndStop(value);
      changeTip();
      focus();
      leftAndRight();
    }
  }
})();
swiper.init();