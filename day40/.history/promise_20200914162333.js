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

read
module.exports = {
    readFile : readFile
}