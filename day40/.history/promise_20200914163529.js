const fs = require('fs');
function readFile(pathname) {
    // 如果读取的文件是富媒体，那不能设置utf8编码格式
    // './index.jpg'
    let suffixReg = /\.([0-9a-zA-Z]+)$/;
    let suffix = suffixReg.exec(pathname) && suffixReg.exec(pathname)[1];
    console.log(suffix);
    let encoding = 'utf8';
    /^(JPG|PNG|JPEG|MP3|MP4|GIF)$/i.test(suffix) ? encoding = null:null
  
    return new Promise((resolve, reject) => {
      fs.readFile(pathname, encoding, (err, result) => {
        if (err !== null) {
          // console.log(err);
          reject(err)
          return;
        }
        // console.log(result);
        resolve(result)
      });
    })
  };

readFile('./A.js').then(result=>{
    console.log(result,18);
    return result;
}).then(result=>{
// console.log('此处成功后执行的事');
})
module.exports = {
    readFile : readFile
}