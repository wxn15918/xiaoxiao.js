const fs = require('fs');
function readFile(){
    fs.readFile('xxx','utf8')
};

module.exports = {
    readFile : readFile
}