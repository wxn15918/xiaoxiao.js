const fs = require('fs');
function readFile(pathname){
    // 如果读取的事fumwiti
   return new Promise((resolve,reject)=>{
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
console.log('此处成功后执行的事');
})
module.exports = {
    readFile : readFile
}