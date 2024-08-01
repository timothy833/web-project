const express = require('express'); // 引入 Express 模組
const path = require('path'); // 引入 Path 模組，用於處理文件和目錄路徑
const jsonServer = require('json-server'); // 引入 JSON Server 模組

const app = express(); // 創建一個 Express 應用實例
const apiServer = jsonServer.create(); // 創建一個 JSON Server 實例
const router = jsonServer.router('db.json'); // 設置 JSON Server 路由，指向 'db.json' 文件
const middlewares = jsonServer.defaults(); // 使用 JSON Server 的默認中間件

const PORT = process.env.PORT || 3000; // 設置服務器端口，優先使用環境變量中的 PORT，否則默認為 3000

// 提供 dist 目錄中的靜態文件
app.use(express.static(path.join(__dirname, 'dist')));

// 設置 API 路由，使用 JSON Server 中間件和路由
apiServer.use(middlewares);
apiServer.use(router);
app.use('/api', apiServer);

// 處理所有其他路由，返回 index.html 文件
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// 啟動服務器，監聽指定的端口
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
