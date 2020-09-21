function dataHandle(str){
    let ary = JSON.parse(str);
   ary = ary.filter((item,index)=>{
       if(parseFloat(item.state )=== 0){
        return true;
       };
   })
}