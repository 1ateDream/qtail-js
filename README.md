# qtail.js

<div align="center">

![GitHub License](https://img.shields.io/github/license/XiaozhiSans/qtail.js?style=flat-square&logo=github)
![GitHub Repo stars](https://img.shields.io/github/stars/XiaozhiSans/qtail.js?style=flat-square&logo=github&color=#ff0)
![NPM Version](https://img.shields.io/npm/v/qtail-js?style=flat-square&logo=npm)
![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/qtail-js?style=flat-square&logo=npm)
![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hw/qtail.js?style=flat-square&logo=jsdelivr&logoColor=white)

</div>

一个用于生成带小尾巴的 qq 昵称的轻量 JavaScript 库

## 使用

#### 安装
```bash install
# npm
npm i qtail-js

# pnpm
pnpm add qtail-js

# yarn
yarn add qtail-js
```

#### 导入模块
```js import
// cjs
const qtail = require('qtail-js');

// esm
import qtail from 'qtail-js';

// cdn
import qtail from 'https://cdn.jsdelivr.net/npm/qtail-js@latest/index.mjs';
```

#### 生成昵称
```js generate
const nickname = qtail.generate('XiaozhiSans', '喵~');
console.log(nickname); // XiaozhiSans⁧~喵⁦
```

## TODO
- [x] 暂无