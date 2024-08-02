import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';

const app = express();
const port = process.env.PORT || 8081;

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// 代理 API 请求到 JSON Server
app.use('/api', createProxyMiddleware({
  target: 'http://localhost:3000',
  changeOrigin: true,
  logLevel: 'debug'
}));

// 提供静态文件
app.use(express.static(path.join(path.dirname('.'), 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(path.dirname('.'), 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
