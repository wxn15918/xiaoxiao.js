let $inputs = $('.form').eq(2).find('input').get(); // 把得到的jq实例变成原生的元素集合
let $submit = $('.submit');

$submit.click(function(){
  let str = '';
  $inputs.forEach((item)=>{
      if($(item).prop('checked')){
        str+=`|${item.id}`
      }
  });
  str = str.substring(1)
  console.log(str);


})

