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

// 健康检查端点
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

// 处理所有其他路由，返回 index.html (SPA 支持)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`Health check available at: http://0.0.0.0:${PORT}/health`);
});

// 优雅关闭
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    server.close(() => {
        console.log('Server closed');
        process.exit(0);
    });
});