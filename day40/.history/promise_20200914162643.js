const fs = require('fs');
function readFile(pathname){
   return new fs.promises((resolve,reject)=>{
    fs.readFile(pathname,'utf8',(err,result)=>{
        if(err !== null){
            reject(err);
            return;
        }
        resolve(result);
    })
   })
};

readFile('./A.js').then(result=>{
    console.log(result,18);
    return result;
}).then(result=>{
console.log('此处成功后执行的shi');
})
module.exports = {
    readFile : readFile
}