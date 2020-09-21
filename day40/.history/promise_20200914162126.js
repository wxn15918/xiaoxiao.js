const fs = require('fs');
function readFile(){
    fs.readFile('xxx','utf8',(err,result)=>{
        if(err !== null){
            console.log(err);
            return;
        }
        console.log(result);
    })
};

module.exports = {
    readFile : readFile
}