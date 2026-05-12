# 大卡鹰眼项目文档

基于 GitHub Pages 的项目文档中心。

## 访问地址

https://nickyang.github.io/dakaying-docs

## 文档结构

```
dakaying-docs/
├── index.html              # 项目首页
├── assets/
│   ├── css/
│   │   └── style.css       # 统一样式
│   └── js/
│       └── nav.js          # 导航交互
├── v0.2/                   # V0.2 版本文档
│   ├── iteration-plan.html     # 迭代计划
│   ├── promotion-plan.html     # 促销方案
│   ├── data-workshop.html      # 数据工坊产品功能方案
│   └── ui-design.html          # UI 设计文档
├── v0.1/                   # V0.1 版本文档
│   └── requirement-doc.html    # 需求文档
└── .github/workflows/
    └── pages.yml             # GitHub Pages 自动部署
```

## 更新方式

1. 修改 HTML 文件
2. git add + commit + push
3. GitHub Actions 自动部署到 Pages
4. 浏览器刷新即见最新

## 本地预览

```bash
python3 -m http.server 8000
```

访问 http://localhost:8000
