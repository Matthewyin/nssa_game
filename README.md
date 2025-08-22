# NSSA Games

NSSA Games 是一个集合了多个在线游戏的平台，目前包含五子棋和哈吉喵两款游戏。

## 🎮 游戏列表

### 五子棋 (Gomoku)
- **游戏类型**: 策略棋类游戏
- **支持模式**: 
  - 人机对战 (AI对战)
  - 双人对战
- **特色功能**:
  - 多种AI难度等级 (新手/中级/高级/地狱)
  - 玩家可选择执黑或执白
  - 悔棋功能
  - 胜负统计和成就系统
  - 支持游客模式和登录保存

### 哈吉喵 (MLG)
- **游戏类型**: 策略消除游戏
- **特色功能**:
  - 多关卡系统 (初始8关)
  - 道具系统 (洗牌、撤销、扩容)
  - 难度递增 (每3关提升难度)
  - 存档功能
  - 主题切换 (亮色/暗色/系统主题)

## 🚀 部署信息

- **访问地址**: https://nssa-game-matthew.web.app
- **部署平台**: Firebase Hosting
- **技术栈**: HTML5, JavaScript, Tailwind CSS, Firebase
- **项目控制台**: https://console.firebase.google.com/project/nssa-game-matthew/overview

## 📁 项目结构

```
nssa_game/
├── index.html              # 游戏选择主页
├── firebase.json           # Firebase 配置文件
├── apphosting.yaml         # App Hosting 配置
├── package.json           # 项目配置
├── firebase-config.js     # Firebase 初始化配置
├── js/
│   └── user-storage.js    # 用户数据存储工具
├── Gomoku/                # 五子棋游戏
│   ├── index.html         # 游戏主页面
│   ├── css/               # 样式文件
│   └── js/                # 游戏逻辑
└── mlg/                   # 哈吉喵游戏
    ├── index.html         # 游戏主页面
    ├── css/               # 样式文件
    │   ├── style.css      # 主样式
    │   └── theme.css      # 主题样式
    ├── js/                # 游戏逻辑
    │   ├── game.js        # 游戏核心逻辑
    │   └── theme.js       # 主题切换逻辑
    └── debug-mobile.html  # 移动端调试页面
```

## 🔧 技术特性

### 前端技术
- **HTML5 Canvas**: 游戏渲染
- **Tailwind CSS**: 现代化样式框架
- **响应式设计**: 支持桌面和移动设备
- **Material Symbols**: 图标系统

### 后端服务
- **Firebase Authentication**: 用户认证系统
- **Firebase Hosting**: 静态网站托管
- **本地存储**: 游戏数据保存

### 游戏特性
- **离线支持**: 大部分功能可在离线状态下使用
- **数据持久化**: 游戏进度和统计数据保存
- **用户认证**: 支持邮箱登录和游客模式
- **跨平台**: 支持所有现代浏览器

## 🎯 游戏玩法

### 五子棋
1. 选择游戏模式 (人机对战/双人对战)
2. 选择AI难度 (人机模式)
3. 选择执子颜色 (人机模式)
4. 点击棋盘落子
5. 先连成五子者获胜
6. 可使用悔棋功能

### 哈吉喵
1. 点击相同图案进行消除
2. 完成关卡目标进入下一关
3. 使用道具帮助通关
4. 随着关卡提升难度增加

## 🛠️ 开发和部署

### 本地开发
```bash
# 克隆项目
git clone https://github.com/Matthewyin/nssa_game.git
cd nssa_game

# 使用本地服务器运行
python -m http.server 8000
# 或使用其他静态服务器
```

### Firebase 部署
```bash
# 安装 Firebase CLI
npm install -g firebase-tools

# 登录 Firebase
firebase login

# 部署到 Firebase
firebase deploy
```

## 📝 更新日志

### v1.0.0 (2025-08-22)
- ✅ 从 nssa_tools 迁移五子棋游戏
- ✅ 从 nssa_tools 迁移哈吉喵游戏
- ✅ 创建统一的游戏选择主页
- ✅ 配置 Firebase 托管
- ✅ 添加用户认证系统
- ✅ 部署到 Firebase App Hosting
- ✅ 清理原 nssa_tools 中的游戏文件

### v1.0.1 (2025-08-22)
- ✅ 创建专用的 Firebase 项目 (nssa-game-matthew)
- ✅ 更新部署地址为 https://nssa-game-matthew.web.app
- ✅ 分离项目配置，避免与其他 Firebase 应用冲突

## 🤝 贡献

欢迎提交 Issue 和 Pull Request 来改进游戏体验！

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🔗 相关链接

- **GitHub 仓库**: https://github.com/Matthewyin/nssa_game
- **在线体验**: https://nssa-game-matthew.web.app
- **Firebase 控制台**: https://console.firebase.google.com/project/nssa-game-matthew/overview
- **原项目**: https://github.com/Matthewyin/nssa_tools

---

**注意**: 本项目仅供娱乐和学习用途，所有游戏功能均为原创或基于开源游戏改进。