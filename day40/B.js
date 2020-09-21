//const A = require('./A.js');
// let fs = require('fs');
// let jq = require('jquery');
// console.log(jq);
// console.log(fs);
// console.log(A);
// console.log(100);
// A.fn();
// let a = 300;
const A = require('./A.js');
let {sum} = A;
function avg(...arg){
arg = arg.sort((a,b)=> a-b).slice(1,arg.length-1);
return sum(...arg)/arg.length;
};
module.exports = {
    avg:avg
}
avg(1,2,3,4);