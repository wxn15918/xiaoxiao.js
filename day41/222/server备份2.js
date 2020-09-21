let express = require('express');// 基于node开发的框架
let app = express();
//express.static('path')//到指定目录中找对应的静态资源文件并返回给客户端
app.use(express.static('./static'));

app.use((req,res,next)=>{
    // 没有找到对应的资源文件此函数执行,做页面的处理
    // res.status(404);
    // res.send('not found');
    // 如果页面错了，可以进行重定向
    // res.redirect(301,'http://www.zhufengpeixun.com')
})
app.listen(3000,()=>{
    console.log('当前3000端口的服务器已开！');
})

/* 
req对象
req.path:请求地址的路径名称
req.query:问号传参的信息（默认是对象）
req.body:在配合中间件body-parser使用，存储的是通过请求主体传递过来的内容
req.method:请求方式
req.get:请求头的信息


res对象
res.end(): 类似于原生的操作，结束当前响应并且返回内容
res.json():返回给客户端的内容，可以传JSON格式的对象（框架内部会帮我们把对象转化成JSON格式的字符串）
res.type():返回的content-type的类型值
res.send():返回给客户端信息的方法(对象 BUFFER PATH TXT),基于响应主体把信息返回给客户端
res.status():状态码
res.set():设置响应头 res.set('key','value') res.set({'key','value',....})
res.redirect():重定向
*/