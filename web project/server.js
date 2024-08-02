const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express();
const port = process.env.PORT || 3000;

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'dist')));

// 启动 json-server
const apiServer = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'src/db/db.json'));
const middlewares = jsonServer.defaults();

apiServer.use(middlewares);
apiServer.use(router);

app.use('/api', apiServer);

// 对于所有其他请求，返回 index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
