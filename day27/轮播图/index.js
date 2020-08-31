let outer = document.getElementById('outer');
let wrapper = document.getElementById('wrapper');
let pre = document.getElementById('pre');
let left = document.getElementById('left');
let right = document.getElementById('right');

let data = null;

function send(){
    let xhr = new XMLHttpRequest;
    xhr.open('get','./banner.json',false)
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && /^2\d{2}$/.test(xhr.status)){
            data = JSON.parse(xhr.responseText);
        }
       
    }
    xhr.send();
}
send();

// 进项数据绑定
bindHtml();
function bindHtml(){
    let items = ``;
    let focus = ``;
    data.forEach(item => {
        let {img} = item;
        items += `<li><img src="${img}" alt=""></li>`;
        focus += `<li></li>`;
    });
    items += `<li><img src="${data[0].img}" alt=""></li>`; 
    wrapper.innerHTML = items;
    pre.innerHTML = focus;
}

// 实现自动轮播
let step = 0;
let autoMove = (n)=>{
   
    typeof n === 'undefined'? step++ : step =n;
    if(step === data.length+1){
        wrapper.style.left = 0 + 'px';
        step = 1;
    }
    changeTip();
    utils.animate(wrapper,{left:-step*800},300);
    
}
let timer = setInterval(autoMove,1000)

// 鼠标移入
outer.onmouseenter =function() {
    clearInterval(timer);
}
// 鼠标划出
outer.onmouseleave =function() {
  timer =  setInterval(autoMove,1000);
}

// 焦点跟随

let list = pre.getElementsByTagName('li');
let changeTip = () => {
    // 循环所有的焦点，拿每一个焦点索引和当前的step进行比较，如果相等，那就把当前索引对应的焦点加上active类名，把其余的焦点的类名active清除
    for(let i=0;i<list.length;i++){
        if(i === step){
            list[i].classList.add('active')
        }else{
            list[i].classList.remove('active');
        }

    }
      // 如果step等于4，说明页面显示的是第五章图片，第五章和第一张是一样的，就让第一个焦点高亮
    if(step === 4){
        list[0].classList.add('active');
    }
}
changeTip();// 当页面初始化的时候，为了让第一个图片的焦点高亮

// 点击焦点图片跟随
let focus = ()=>{
    for(let i=0;i<list.length;i++){
        function fn(){
            
                //console.log(i);
                // 当点击焦点时把i给到step就可以显示对应的图片
                autoMove(i);
             }
        let lazyFunc = utils.debounce(fn,200)
         list[i].onclick = lazyFunc;
    }
}
focus();

// 点击向右按钮
right.onclick = function(){
    autoMove();
}
// 点击向左按钮
left.onclick = function(){
    step--;
    if(step<0){
        wrapper.style.left = -4*800 + 'px';
        step = 3;
    }
    utils.animate(wrapper,{left:-step*800},300);
    changeTip();
}