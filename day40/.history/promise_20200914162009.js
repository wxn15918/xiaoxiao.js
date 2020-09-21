const fs = require('fs');
function readFile(){
    fs.readFile('xxx','utf8',(err))
};

module.exports = {
    readFile : readFile
}