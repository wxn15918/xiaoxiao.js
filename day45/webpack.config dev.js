/* 
编写自定义的配置项，以后打包编译的时候是按照咱们自己配置的内容进行打包编译处理(webpack.config.js必须放到当前项目的根目录下)
webpack是基于node开发的，所以这个文件里的内容的遵循CommonJS规范，node里的方法咱也可以用

*/
const path= require('path');
console.log(path.resolve('dist'));
module.exports = {

    mode:'development',  // development production 开发模式和生产模式
    // 设置一个编译文件的入口
    entry:'./src/index.js',
  
    // 设置一个出口
    output:{
      // 编译后文件的名字
      filename:'bundle.js',
      // 这是编译文件所存放的路径，这里必须用绝对路径
      path: path.resolve(__dirname,'dist')
    }
  }