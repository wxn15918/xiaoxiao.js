const {readdir,readFile,writeFile} = require('./promiseFs');
readFile('./css').then(result=>{
    result = result.filter(item=>{
        /\.css$/i.test
    })
})