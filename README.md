# radar
雷达图组件，包括提示文字等的雷达图。

<p align='center'><img src='./view.png'></p>

<p>
  <a href="https://hai2007.gitee.io/npm-downloads?interval=7&packages=@clunch/radar"><img src="https://img.shields.io/npm/dm/@clunch/radar.svg" alt="downloads"></a>
  <a href="https://www.npmjs.com/package/@clunch/radar"><img src="https://img.shields.io/npm/v/@clunch/radar.svg" alt="Version"></a>
  <a href="https://github.com/clunch-contrib/radar/graphs/commit-activity" target='_blank'><img alt="GitHub repo commit" src="https://img.shields.io/github/last-commit/clunch-contrib/radar"></a>
  <a href="https://github.com/clunch-contrib/radar/blob/master/LICENSE"><img src="https://img.shields.io/npm/l/@clunch/radar.svg" alt="License"></a>
  <a href="https://github.com/clunch-contrib/radar" target='_blank'><img alt="GitHub repo stars" src="https://img.shields.io/github/stars/clunch-contrib/radar?style=social"></a>
</p>

## 如何使用？

首先，需要安装npm包（目前我们仅支持npm方式管理）：

```
npm install --save clunch @clunch/radar
```

然后注册组件：

```js
import Clunch from 'clunch';
import radar from '@clunch/radar';

Clunch.series('ui-radar',radar);
```

然后，你就可以使用这个组件了：

```html
<ui-radar indicator="Array" data="Array"/>
```

- indicator:指示器，是一个数组（比如：``` [{name:"利润",max:320},...] ```）
- data:数据，是一个数组（比如：``` [{value:[10,5,3,...],name:"苹果"},...] ```）

除了上面的必输项外，还有下列可选项：

|属性|类型|描述|默认值|可选值|
|----|----|----|----|----|
|cx|number|图形中心位置横坐标|画布中心横坐标||
|cy|number|图形中心位置纵坐标|画布中心纵坐标||
|radius|number|图形半径|画布最小边的30%||

由于此组件是基于[Clunch](https://github.com/hai2007/clunch)开发的，我们默认你已经掌握了相关知识。

[<< 你可以点击此处学习Clunch.js如何使用](https://hai2007.gitee.io/clunch/#/course/introduce?fixed=top)

开源协议
---------------------------------------
[MIT](https://github.com/clunch-contrib/radar/blob/master/LICENSE)

Copyright (c) 2021 [hai2007](https://hai2007.gitee.io/sweethome/) 走一步，再走一步。
