let swiper = (function () {
    let $outer = $('#outer'),
        $wrapper = $('#wrapper'),
        $pre = $('#pre'),
        $li;
        $left = $('#left'),
        $right = $('#right'),
        timer = null,
        step = 0,
        data = null;



    // 请求数据
    let send = () => {
        $.ajax({
            url: './banner.json', // 请求路径
            type: 'get', // 请求方式
            async: false, // 是否异步
            success: (result) => {
                data = result;
            }
        })
    }
    // 渲染页面
    let bindHtml = (data) => {
        // 是渲染数据的代码
        let imgs = ``;
        let lis = ``;
        $.each(data, (index, item) => {
            imgs += `<img src="${item.img}" alt="">`
            lis += `<li></li>`
        });
        $wrapper.html(imgs);
        $pre.html(lis);
        $li = $pre.find('li');
        $pre.css('width',(data.length + 1)*25)

    }
    
    // 自动轮播
    let autoMove = (n) => {
        typeof n === 'undefined' ? step++ : step = n;
      //  step++;
        step === data.length ? step = 0 : null;
        $('img').eq(step).fadeIn().siblings().fadeOut();
        autoFocus();
    }
    // 鼠标移入和划出
    let startAndStop = (value)=>{
        // $outer.hover(()=>{
        //   clearInterval(timer);
        // },()=>{
        //   timer = setInterval(autoMove,value);
        // })

        $outer.mouseenter(()=>{
            clearInterval(timer);
        }).mouseleave(()=>{
            timer = setInterval(autoMove,value);
        })
      }
      // 自动对焦
    let autoFocus = () => {

        $li.eq(step).addClass('active').siblings().removeClass('active');
    }
    // 点击焦点图片跟随
    let focus = () => {
        $li.click(function(){
            let index = $(this).index();
            autoMove(index);
        })
    }
    // 点击左右箭头
    let leftAddRight = ()=>{
        $right.click(function(){
            autoMove();
        })
        $left.click(function(){
            step--;
            if(step<0){
                step = data.length-1;
            }
            autoMove(step);
        })
    }

    return {
        init: (value = 2000) => {
            send();
            bindHtml(data);
            timer = setInterval(autoMove, value);
            startAndStop(value);
            autoFocus();
            focus();
            leftAddRight();
        }
    }
})()
swiper.init()