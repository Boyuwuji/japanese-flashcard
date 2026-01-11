# 日语单词记忆卡片 - 部署说明

基于SM-2间隔重复算法的日语单词学习应用,支持《新日本语教程 初级1》第3-20课的533个单词。

## 功能特点

- 🎴 **间隔重复算法**: 使用SM-2算法,与Anki相同的科学记忆方法
- 📱 **响应式设计**: 支持电脑和手机访问
- 🌙 **深色模式**: 保护眼睛
- 📊 **学习统计**: 追踪每日学习进度和各课掌握情况
- 💾 **数据持久化**: LocalStorage存储学习进度
- 📤 **数据导出/导入**: 备份和恢复学习记录
- ⌨️ **键盘快捷键**: 空格翻转卡片,1-4评分

## 部署到 Cloudflare Pages

### 方法1: 通过Git仓库部署

1. 将 `flashcard-app` 文件夹推送到GitHub/GitLab仓库

2. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)

3. 进入 **Pages** > **Create a project** > **Connect to Git**

4. 选择你的仓库

5. 配置构建设置:
   - **Project name**: japanese-flashcards (或自定义)
   - **Production branch**: main
   - **Build command**: (留空,无需构建)
   - **Build output directory**: flashcard-app (如果整个仓库只有这个文件夹,则留空)

6. 点击 **Save and Deploy**

### 方法2: 直接上传部署

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com/)

2. 进入 **Pages** > **Create a project** > **Direct Upload**

3. 将 `flashcard-app` 文件夹内的所有文件拖拽上传

4. 点击 **Deploy site**

### 部署完成后

- 你会获得一个类似 `xxx.pages.dev` 的域名
- 可以在 **Custom domains** 中绑定自己的域名

## 本地运行

```bash
cd flashcard-app
python3 -m http.server 8080
# 访问 http://localhost:8080
```

## 文件结构

```
flashcard-app/
├── index.html          # 主页面
├── css/
│   └── style.css       # 样式文件
├── js/
│   ├── app.js          # 主应用逻辑
│   ├── sm2.js          # SM-2间隔重复算法
│   ├── storage.js      # LocalStorage管理
│   └── vocabulary.js   # 533个日语单词数据
└── _headers            # Cloudflare缓存配置
```

## 使用说明

1. **首次使用**: 在设置中选择要学习的课程(默认3-6课)
2. **每日学习**: 点击"学习新单词"学习当日新卡片
3. **复习**: 点击"开始复习"复习到期卡片
4. **评分**: 
   - 忘记(1): 完全忘记,稍后重新学习
   - 困难(2): 勉强想起,缩短复习间隔
   - 良好(3): 正确回忆,标准间隔
   - 简单(4): 太简单,延长复习间隔
