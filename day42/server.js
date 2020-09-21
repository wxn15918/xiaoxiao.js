let express = require('express');


// 创建一个web服务
let app = express();
app.listen(8080, () => {
  console.log('当前8080端口已经启动成功');
});

app.get('/list',(req,res)=>{
  let {callback} = req.query;
  let re = `${callback}({code:0,codeText:'ok})`;
  res.send(re);
})

// 静态资源文件的请求处理
// app.use(express.static('./client'));
app.use((req, res, next) => {
  res.status(404);
  res.send(`很抱歉，您请求的资源文件${req.path}不存在`)
});
