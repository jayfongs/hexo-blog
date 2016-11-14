---
title: Flex布局
date: 2016-11-08 10:16:43
categories: CSS3
tags:
    - CSS3
    - CSS
---

<style>
.flex-direction-row{
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
.flex-direction-row-reverse{
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
}
.flex-direction-column{
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}
.flex-direction-column-reverse{
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
}
.flex-wrap-nowrap{
    width: 400px;
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
}
.flex-wrap-wrap{
    width: 400px;
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.flex-wrap-wrap-reverse{
    width: 400px;
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap-reverse;
    -ms-flex-wrap: wrap-reverse;
    flex-wrap: wrap-reverse;
}
.flex-flow{
    width: 400px;
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row wrap;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
}
.justify-content-flex-start{
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}
.justify-content-flex-end{
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}
.justify-content-center{
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.justify-content-space-between{
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.justify-content-space-around{
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
}
.align-items-flex-start{
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
}
.align-items-flex-end{
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
}
.align-items-center{
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.align-items-baseline{
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: baseline;
    -webkit-align-items: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
}
.align-items-stretch{
    height: 300px;
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
}
.align-content-flex-start{
    width: 400px;
    height: 300px;
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: wrap;
    -ms-flex-direction: wrap;
    flex-direction: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-content: flex-start;
    -ms-flex-line-pack: start;
    align-content: flex-start;
}
.align-content-flex-end{
    width: 400px;
    height: 300px;
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: wrap;
    -ms-flex-direction: wrap;
    flex-direction: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-content: flex-end;
    -ms-flex-line-pack: end;
    align-content: flex-end;
}
.align-content-center{
    width: 400px;
    height: 300px;
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: wrap;
    -ms-flex-direction: wrap;
    flex-direction: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
}
.align-content-space-between{
    width: 400px;
    height: 300px;
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: wrap;
    -ms-flex-direction: wrap;
    flex-direction: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-content: space-between;
    -ms-flex-line-pack: justify;
    align-content: space-between;
}
.align-content-space-around{
    width: 400px;
    height: 300px;
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: wrap;
    -ms-flex-direction: wrap;
    flex-direction: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-content: space-around;
    -ms-flex-line-pack: distribute;
    align-content: space-around;
}
.align-content-stretch{
    width: 400px;
    height: 300px;
    border: 1px solid #A52A2A;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: wrap;
    -ms-flex-direction: wrap;
    flex-direction: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
}
.order{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    border: 1px solid #A52A2A;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
</style>

Flex是Flexible Box的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性。现如今用于移动端的居多，可谓是写移动端的神器。Flex布局将成为未来布局的首选方案。

移动端的低版本浏览器不兼容最新的Flex布局，所以我们得使用旧语法（Flexbox）来兼容，移动端的各大浏览器都是支持Flexbox的旧版语法的，但不包含Flex的`wrap`属性，如果要兼容低版本Android就慎用了。

<!-- more -->

## 一、如何使用Flex布局

任何容器都可以指定Flex布局：
``` css
.box{
    display: flex;
    display: inline-flex;   /*行内元素使用Flex*/
}
```

兼容写法：

``` css
.box{
    display: -webkit-box;       /*这是-webkit-flex的旧写法，兼容低版本Android和Safari*/
    display: -webkit-flex;      /*Webkit内核的浏览器*/
    display: -ms-flexbox;       /*IE 内核*/
    display: flex;              /*标准写法*/
}
```
__注：设为Flex布局以后，子元素的`float`、`clear`和`vertical-align`属性将失效__

### 使用autoprefixer插件

[autoprefixer](https://github.com/postcss/autoprefixer)是[PostCss](https://github.com/postcss/postcss)的一个插件，使用[caniuse](http://caniuse.com)的数据来决定哪些前缀是需要的。使用她我们可以很潇洒地写代码，不必考虑各浏览器兼容前缀。使用Flex布局移动端是非常爽的（就这个feel倍儿爽）。

我个人是用[Gulp](http://www.gulpjs.com.cn)来构建的项目，使用的是Gulp的[gulp-autoprefixer](https://github.com/sindresorhus/gulp-autoprefixer)插件

我们在写css的时候，只需要写标准语法就行了，如下如图：
![standard](/images/assets/standard.png)
__再次强调`flex-wrap`这个属性是唯一一个不兼容旧版本（Flexbox）的属性__

我们优雅的使用了autoprefixer，来看看她最终的成果，如下图：
![after-generation](/images/assets/after-generation.png)
哎哟~~~ 卧槽！很牛逼是不是，哈哈哈！！！

如果还不知道autoprefixer的朋友，建议多去了解下。

## 二、父容器的属性
六个属性设置在box父容器上，来控制子元素的显示方式。注：这些属性只基于Flex才有效

1. `flex-direction`：     设置主轴对齐方式
2. `flex-wrap`：          子元素换行的方式
3. `flex-flow`：          `flex-direction`和`flex-wrap`的简写
4. `justify-content`：    子元素的对齐方式
5. `align-items`：        交叉轴上对齐
6. `align-content`：      属性定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用

__下面我都以兼容模式的语法来介绍，由于我是用markdown编写的，可能样式有些不一样，请大家不要在意这个，主要看布局。__

### No.1、flex-direction属性
它的4个值：
- `row`（默认值）：主轴为水平方向，起点在左端。
- `row-reverse`：主轴为水平方向，起点在右端。
- `column`：主轴为垂直方向，起点在上沿。
- `column-reverse`：主轴为垂直方向，起点在下沿。

#### flex-direction: row属性，（默认值）：主轴为水平方向，起点在左端：
```css
.flex-direction-row{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -webkit-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```
<div class="flex-direction-row">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>

#### flex-direction: row-reverse属性，主轴为水平方向，起点在右端：

```css
.flex-direction-row-reverse{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: row-reverse;
    -ms-flex-direction: row-reverse;
    flex-direction: row-reverse;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```

<div class="flex-direction-row-reverse">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>

#### flex-direction: column属性，主轴为垂直方向，起点在上沿：

``` css
.flex-direction-column{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```

<div class="flex-direction-column">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>

#### flex-direction: column-reverse属性，主轴为垂直方向，起点在下沿：
```css
.flex-direction-column-reverse{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: reverse;
    -webkit-flex-direction: column-reverse;
    -ms-flex-direction: column-reverse;
    flex-direction: column-reverse;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```
<div class="flex-direction-column-reverse">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>

### No.2、flex-wrap属性
它的3个值：
__再三强调，移动端低版本浏览器不兼容这个属性__

- `nowrap`：（默认值）不换行
- `wrap`：换行，第一行在上方
- `wrap-reverse`：换行，第一行在下方

#### flex-wrap: nowrap属性，（默认值）不换行：
``` css
.flex-wrap-nowrap{
    width: 400px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: nowrap;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```
<div class="flex-wrap-nowrap">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
</div>

#### flex-wrap: wrap属性，换行，第一行在上方：
``` css
.flex-wrap-wrap{
    width: 400px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```
<div class="flex-wrap-wrap">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
</div>

#### flex-wrap: wrap-reverse属性，换行，第一行在下方：
```css
.flex-wrap-wrap-reverse{
    width: 400px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap-reverse;
    -ms-flex-wrap: wrap-reverse;
    flex-wrap: wrap-reverse;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```

<div class="flex-wrap-wrap-reverse">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
</div>

### No.3、flex-flow属性
`flex-flow`属性是`flex-direction`属性值和`flex-wrap`属性值的简写形式，默认值为`row nowrap`。

flex-flow: &#60;flex-direction&#62; || &#60;flex-wrap&#62;

``` css
.flex-flow{
    width: 400px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-flow: row wrap;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```

<div class="flex-flow">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
    <div class="item">6</div>
    <div class="item">7</div>
    <div class="item">8</div>
</div>


### No.4、justify-content属性
它的值：
- `flex-start`：（默认值）：左对齐
- `flex-end`：右对齐
- `center`： 居中
- `space-between`：两端对齐，项目之间的间隔都相等
- `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍

#### justify-content: flex-start属性、（默认值）左对齐：

``` css
.justify-content-flex-start{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -ms-flex-pack: start;
    justify-content: flex-start;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```
<div class="justify-content-flex-start">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>

#### justify-content: flex-end属性、右对齐：

``` css
.justify-content-flex-end{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: end;
    -webkit-justify-content: flex-end;
    -ms-flex-pack: end;
    justify-content: flex-end;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```
<div class="justify-content-flex-end">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>

#### justify-content: center属性、居中：

``` css
.justify-content-center{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```
<div class="justify-content-center">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>

#### justify-content: space-between属性、两端对齐，项目之间的间隔都相等：

``` css
.justify-content-space-between{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    -ms-flex-pack: justify;
    justify-content: space-between;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```
<div class="justify-content-space-between">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>

#### justify-content: space-around属性、每个项目两侧的间隔相等，项目之间的间隔比项目与边框的间隔大一倍：

``` css
.justify-content-space-around{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-justify-content: space-around;
    -ms-flex-pack: distribute;
    justify-content: space-around;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```
<div class="justify-content-space-around">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
</div>

### No.5、align-items属性
它的值：
- `flex-start`：交叉轴的起点对齐。
- `flex-end`：交叉轴的终点对齐。
- `center`：交叉轴的中点对齐。
- `baseline`: 项目的第一行文字的基线对齐。
- `stretch`：（默认值）如果项目未设置高度或设为auto，将占满整个容器的高度。

如果`flex-direction: row`和`row-reverse`那么交叉轴就是y轴，如果是`column`和`column-reverse`那么交叉轴是x轴

#### align-items: flex-start属性，交叉轴的起点对齐：
``` css
.align-items-flex-start{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
.item:nth-child(1){
    height: 200px;
}
.item:nth-child(3){
    height: 400px;
}
```

<div class="align-items-flex-start">
    <div class="item" style="height: 200px">1</div>
    <div class="item">2</div>
    <div class="item" style="height: 400px">3</div>
</div>

#### align-items: flex-end属性，交叉轴的终点对齐：
``` css
.align-items-flex-end{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: end;
    -webkit-align-items: flex-end;
    -ms-flex-align: end;
    align-items: flex-end;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
.item:nth-child(1){
    height: 200px;
}
.item:nth-child(3){
    height: 400px;
}
```

<div class="align-items-flex-end">
    <div class="item" style="height: 200px">1</div>
    <div class="item">2</div>
    <div class="item" style="height: 400px">3</div>
</div>

#### align-items: center属性，交叉轴的中点对齐：

``` css
.align-items-center{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
.item:nth-child(1){
    height: 200px;
}
.item:nth-child(3){
    height: 400px;
}
```

<div class="align-items-center">
    <div class="item" style="height: 200px">1</div>
    <div class="item">2</div>
    <div class="item" style="height: 400px">3</div>
</div>

#### align-items: baseline属性，第一行文字的基线对齐：

``` css
.align-items-baseline{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: baseline;
    -webkit-align-items: baseline;
    -ms-flex-align: baseline;
    align-items: baseline;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
.item:nth-child(1){
    height: 200px;
    padding-top: 20px;
}
.item:nth-child(3){
    height: 400px;
}
```

<div class="align-items-baseline">
    <div class="item" style="height: 200px; padding-top: 20px;">1</div>
    <div class="item">2</div>
    <div class="item" style="height: 400px">3</div>
</div>

#### align-items: stretch属性，（默认值）如果子元素未设置高度或设为auto，将占满整个容器的高度：

``` css
.align-items-stretch{
    height: 300px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: stretch;
    -webkit-align-items: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
}
.item{
    width: 100px;
    height: auto;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```

<div class="align-items-stretch">
    <div class="item" style="height: auto;">1</div>
    <div class="item" style="height: auto;">2</div>
    <div class="item" style="height: auto;">3</div>
</div>

### No.6、align-content属性
它的6个值：
- `flex-start`：与交叉轴的起点对齐。
- `flex-end`：与交叉轴的终点对齐。
- `center`：与交叉轴的中点对齐。
- `space-between`：与交叉轴两端对齐，轴线之间的间隔平均分布。
- `space-around`：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍。
- `stretch`：（默认值）如果项目未设置高度或设为auto，轴线占满整个交叉轴。

#### align-content: flex-start属性，与交叉轴的起点对齐：

``` css
.align-content-flex-start{
    width: 400px;
    height: 300px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: wrap;
    -ms-flex-direction: wrap;
    flex-direction: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-content: flex-start;
    -ms-flex-line-pack: start;
    align-content: flex-start;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```

<div class="align-content-flex-start">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
</div>

#### align-content: flex-end属性，与交叉轴的终点对齐：

``` css
.align-content-flex-end{
    width: 400px;
    height: 300px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: wrap;
    -ms-flex-direction: wrap;
    flex-direction: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-content: flex-end;
    -ms-flex-line-pack: end;
    align-content: flex-end;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```

<div class="align-content-flex-end">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
</div>

#### align-content: center属性，与交叉轴的中点对齐：

``` css
.align-content-center{
    width: 400px;
    height: 300px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: wrap;
    -ms-flex-direction: wrap;
    flex-direction: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-content: center;
    -ms-flex-line-pack: center;
    align-content: center;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```

<div class="align-content-center">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
</div>

#### align-content: space-between属性，与交叉轴两端对齐，轴线之间的间隔平均分布：

``` css
.align-content-space-between{
    width: 400px;
    height: 300px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: wrap;
    -ms-flex-direction: wrap;
    flex-direction: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-content: space-between;
    -ms-flex-line-pack: justify;
    align-content: space-between;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```

<div class="align-content-space-between">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
</div>

#### align-content: space-around属性，每根轴线两侧的间隔都相等，轴线之间的间隔比轴线与边框的间隔大一倍：

``` css
.align-content-space-around{
    width: 400px;
    height: 300px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: wrap;
    -ms-flex-direction: wrap;
    flex-direction: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-content: space-around;
    -ms-flex-line-pack: distribute;
    align-content: space-around;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```

<div class="align-content-space-around">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
</div>

#### align-content: stretch属性，（默认值）轴线占满整个交叉轴：

``` css
.align-content-stretch{
    width: 400px;
    height: 300px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: wrap;
    -ms-flex-direction: wrap;
    flex-direction: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-align-content: stretch;
    -ms-flex-line-pack: stretch;
    align-content: stretch;
}
.item{
    width: 100px;
    height: auto;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
```

<div class="align-content-stretch">
    <div class="item" style="height: auto">1</div>
    <div class="item" style="height: auto">2</div>
    <div class="item" style="height: auto">3</div>
    <div class="item" style="height: auto">4</div>
    <div class="item" style="height: auto">5</div>
</div>

## 三、子元素的属性
它有6个子元素：
1. `order`：排列顺序。数值越小，排列越靠前，默认为0
2. `flex-grow`：放大比例，默认为0，即如果存在剩余空间，也不放大
3. `flex-shrink`：缩小比例，默认为1，即如果空间不足，该项目将缩小
4. `flex-basis`：属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小
5. `flex`：属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选
6. `align-self`：属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。默认值为`auto`，表示继承父元素的`align-items`属性，如果没有父元素，则等同于`stretch`

### No.1、order属性
它的值：&#60;integer&#62;
```css
.box{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
.item:nth-child(3){
    -webkit-box-ordinal-group: 0;
    -webkit-order: -1;
    -ms-flex-order: -1;
    order: -1;     /*如果是正数则排最右边*/
}
```
排列顺序。数值越小，排列越靠前，默认为0。所以第三个 `div` 的 `order` 的值是-1，排到了最前面
<div class="order">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item" style="-webkit-box-ordinal-group: 0;-webkit-order: -1;-ms-flex-order: -1;order: -1;">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
</div>

### No.2、flex-grow属性
它的值：&#60;number&#62;
```css
.box{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
.item:nth-child(3){
    -webkit-box-flex: 1;
    -webkit-flex-grow: 1;
    -ms-flex-positive: 1;
    flex-grow: 1;
}
```

当有放大空间的时候，值越大，放大的比例越大，默认为0。

如果所有项目的`flex-grow`的值都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的`flex-grow`属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。

So. 第三个 `div` 的 `flex-grow` 的值是1，其它都是默认值0，则当前元素将占据剩余空间
<div class="order">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item" style="-webkit-box-flex: 1;-webkit-flex-grow: 1;-ms-flex-positive: 1;flex-grow: 1;">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
</div>

### No.3、flex-shrink属性
它的值：&#60;number&#62;
```css
.box{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
.item:nth-child(3){
    -webkit-flex-shrink: 2;
    -ms-flex-negative: 2;
    flex-shrink: 2;
}
```

缩小比例，值越大，缩小的时候比例越小，默认是1

如果所有项目的 `flex-shrink` 属性都为1，当空间不足时，都将等比例缩小。如果一个项目的 `flex-shrink` 属性为0，其他项目都为默认值1，则空间不足时，前者不缩小。

__注：负值无效__

请缩放屏幕查看效果：
<div class="order">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item" style="-webkit-flex-shrink: 2;-ms-flex-negative: 2;flex-shrink: 2;">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
</div>

### No.4、flex-basis属性
它的值：&#60;length&#62;
```css
.box{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
.item:nth-child(3){
    -webkit-flex-basis: 300px;
    -ms-flex-preferred-size: 300px;
    flex-basis: 300px;
}
```

`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为`auto`，即项目的本来大小

如果项目有多余的空间，设置为300px。那么会放大到300的宽度

<div class="order">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item" style="-webkit-flex-basis: 300px;-ms-flex-preferred-size: 300px;flex-basis: 300px;">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
</div>

### No.5、flex属性
它的值：&#60;`flex-grow`&#62; [&#60;`flex-shrink`&#62; || &#60;`flex-basis`&#62;]
```css
.box{
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
}
.item{
    width: 100px;
    height: 100px;
    margin: 10px 10px;
    background: #A52A2A;
    color: #fff;
    font-size: 2em;
}
.item:nth-child(3){
    -webkit-box-flex: 1;
    -webkit-flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
}
```

`flex`：属性是`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`。后两个属性可选

__该属性有两个快捷值：`auto` (`1 1 auto`) 和 `none` (`0 0 auto`)__

建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值

<div class="order">
    <div class="item">1</div>
    <div class="item">2</div>
    <div class="item" style="-webkit-box-flex: 1;-webkit-flex: 1 1 auto;-ms-flex: 1 1 auto;flex: 1 1 auto;">3</div>
    <div class="item">4</div>
    <div class="item">5</div>
</div>

### No.6、align-self属性
它的值：
- `auto`
- `flex-start`
- `flex-end`
- `center`
- `baseline`
- `stretch`

`align-self` 属性允许单个项目有与其他项目不一样的对齐方式，可覆盖 `align-items` 属性。默认值为 `auto` ，表示继承父元素的 `align-items` 属性，如果没有父元素，则等同于 `stretch`

除了`auto`是表示继承父元素，其他的跟`align-items`是一样的
