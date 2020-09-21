const fs = require('fs');
function readFile(){
    fs.readFile('xxx','utf8',(err,result))
};

module.exports = {
    readFile : readFile
}