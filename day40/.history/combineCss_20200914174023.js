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
    result = result.join('');// 把多个css内容合并成一个
    return result
}).then(result=>{
    // 把合并的内容进行压缩
    return result;
}).then(result=>{
    // 生成一个新的文件，把合并的内筒
})