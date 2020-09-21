// let a = 100;
// function fn(){
//     console.log(200);
// };
// console.log(800);
// module.exports = {
//     fn:fn,
//     a
// }

/* 
需求：创建A B C三个模块
A模块中有一个任意数求和的方法 sum
B模块里有一个方法可以实现求平均数(这里的求和要用A模块里的方法) avg
C模块里去调用B模块里写好的求平均数的方法，然后输出结果

*/
function sum(...arg){
    return eval(arg.join('+'));
};

module.exports = {
  sum
}

// function sum(...arg){
//    let num = null;

//     for(let i = 0;i<arg.length;i++){
//         let item = Number(arg[i]);
//         if(!isNaN(item)){
//            num += item ;
//         }
//     }
//     return {
//         num

//     }
// }
// module.exports = {
//     sum:sum
// }



