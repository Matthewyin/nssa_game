const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 8080;

// 静态文件服务
app.use(express.static(__dirname));

// 路由处理
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/Gomoku', (req, res) => {
    res.sendFile(path.join(__dirname, 'Gomoku', 'index.html'));
});

app.get('/mlg', (req, res) => {
    res.sendFile(path.join(__dirname, 'mlg', 'index.html'));
});

// 处理所有其他路由，返回 index.html (SPA 支持)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});