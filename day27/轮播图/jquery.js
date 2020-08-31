let $wrapper = $('#wrapper');
let $pre = $('#pre');
let $li;
let $right = $('#right');
let $left = $('#left');

let data = null;
let timer = null;
let step = 0;
// 获取数据
let send = () => {
    $.ajax({
        url: './banner.json ',
        method: 'get',
        async: false,
        success: data => {
            // 获取数据成功会执行，并且已经转换为JSON格式的对象
            console.log(data);
            bindHtml(data);
        }
    });
}
send();
// 渲染数据
function bindHtml(data) {
    let items = ``;
    let focus = ``;
    $.each(data, (index, item) => {
        let { img } = item;
        items += `<li><img src="${img}" alt=""></li>`;
        focus += `<li></li>`;
    })
    items += `<li><img src="${data[0].img}" alt=""></li>`;
    $wrapper.html(items);
    $pre.html(focus);
    $li = $pre.find('li');
    console.log($li);
    $pre.css('width',(data.length+1)*25);
}
// 自动轮播
function autoMove(index) {

    //step++;
    typeof index === 'undefined' ? step++ : step = index;
    if (step >= 5) {
        $wrapper.css('left', 0);
        step = 1;
    }
    $wrapper.stop().animate({ left: -step * 800 }, 300);
    autoFocus();
}
timer = setInterval(autoMove, 1000);


// 自动对焦
function autoFocus() {
    $li.each((index, item) => {
        let $item = $(item);
        if (index === step) {
            $item.addClass('active');
            return;
        }
        $item.removeClass('active');
    })
    if (step === data.length) {
        $li.eq(0).addClass('active');
    }

}
autoFocus();

// 鼠标划入
$wrapper.on('mouseenter', () => {
    clearInterval(timer);
});
// 鼠标划出
$wrapper.on('mouseleave', () => {
    timer = setInterval(autoMove, 1000);
})

// 实现点击圆点图片跟随
function fn() {
    let index = $(this).index();
    clearInterval(timer);
    autoMove(index);
}

$li.click(utils.debounce(fn, 200));




  // 点击右箭头
//  $right.click(autoMove());
$right.click(utils.debounce(function(){
    clearInterval(timer);
    autoMove();
},300)
)

  // 点击左箭头
  $left.click(function(){
      clearInterval(timer);
      step--;
      if(step<0){
          $wrapper.css('left',-data.length*800);
          step = data.length-1;
      }
      $wrapper.stop().animate({
          left:-step*800
      },300)

      autoFocus();
  })


