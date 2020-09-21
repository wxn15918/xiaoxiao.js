const {readdir,readFile,writeFile} = require('./promiseFs');
readFile('./css').then(result=>{
    result = result.filter(item=>{
        /\.css$/i.test(item);
    })
    result = result.map(item=>{
        return readFile(`./css/${item}`);
    })
    return Promise.all(result);
}).then(result=>{
    result = result.join
})