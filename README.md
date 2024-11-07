# qtail.js

<div align="center">

[![license](https://img.shields.io/badge/license-MPL--2.0-green/?style=flat-square)](https://mozilla.org/MPL/2.0/)
[![GitHub Repo stars](https://img.shields.io/github/stars/LateDream-awa/qtail-js?style=flat-square&logo=github&color=#ff0)](https://github.com/LateDream-awa/qtail-js/stargazers)
[![NPM Version](https://img.shields.io/npm/v/qtail-js?style=flat-square&logo=npm)](https://www.npmjs.com/package/qtail-js?activeTab=versions)
[![NPM Unpacked Size](https://img.shields.io/npm/unpacked-size/qtail-js?style=flat-square&logo=npm)](https://www.npmjs.com/package/qtail-js)
[![jsDelivr hits (npm)](https://img.shields.io/jsdelivr/npm/hd/qtail.js?style=flat-square&logo=jsdelivr&logoColor=white)](https://www.jsdelivr.com/package/npm/qtail-js)

一个用于生成带小尾巴的 qq 昵称的轻量 JavaScript 库
</div>

## 使用

#### 安装
```bash install
# npm
npm i qtail-js

# yarn
yarn add qtail-js
```

#### 导入模块
```js import
// cjs
const qtail = require('qtail-js');

// esm
import qtail from 'qtail-js';

// esm+cdn
import qtail from 'https://cdn.jsdelivr.net/npm/qtail-js@1.0.0/index.mjs';
```

#### 生成昵称
```js generate
const nickname = qtail.generate('迟梦', '喵~');
console.log(nickname); // 迟梦⁧~喵⁦
```

## TODO
- [x] 暂无