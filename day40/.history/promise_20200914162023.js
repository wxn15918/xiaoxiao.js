const fs = require('fs');
function readFile(){
    fs.readFile('xxx','utf8',(err,result)=>{
        if(err === null)
    })
};

module.exports = {
    readFile : readFile
}