const fs = require('fs');
function readFile(pathname){
   return new fs.promises((resolve,reject)=>{
    fs.readFile(pathname,'utf8',(err,result)=>{
        if(err !== null){
            reject(err)
            return;
        }
        resolve(result);
    })
   })
};

readFile('./A.js').then(result=>{
    console.log(result,18);
    return result;
}).then(result)
module.exports = {
    readFile : readFile
}