---
title: css的一些实用技巧
date: 2016-11-10 15:47:55
categories: CSS3
tags:
    - CSS3
    - CSS
---

<style>
.single-row{
    width: 150px;
    border: 1px solid #A52A2A;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.multi-line{
    border: 1px solid #A52A2A;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.selection{
    border: 1px solid #A52A2A;
}
.selection::selection{
    background: #A52A2A;
    color: #fff;
}
.selection::-moz-selection{
    background: #A52A2A;
    color: #fff;
}
.placeholder::-webkit-input-placeholder{
    color: #A52A2A;
}
.placeholder::-moz-input-placeholder{
    color: #A52A2A;
}
.placeholder::-ms-input-placeholder{
    color: #A52A2A;
}
.larger{
    border: 1px solid #A52A2A;
}
.larger:first-letter{
    color:#A52A2A;
    font-size:30px;
}
</style>

双11又要到了，又要剁手了，但是想想；反正买了也是没钱，不买也是没钱，干脆买买买，反正都是没钱。好，就这么愉快的决定了。😁😁
CSS 这货，说难不难，说简单也不简单，用得多了自然就孰能生巧了。蓄力一发，一泄千里嘛，哈哈哈😁

<!-- more -->

## 清除浮动

1. 我最初清除浮动的时候，把 `clear: both` 放在全局，哪儿要清除，就放个 `div` 标签到同级的最后一个。这方法劳民伤财。

2. 然后使用伪类。这方法是大多数人的选择，像 [Bootstrap](http://www.bootcss.com) 也是用的这种方法。我想为啥清除一个浮动需要这么麻烦呢，这个方法成为了我的次选。
如：
```css
.clearfox{
  zoom: 1;
}
.clearfox:after{
  display: block;
  content: '';
  clear: both;
}
```
3. 现在优雅的使用 `overflow: hidden` 来清除，给清除浮动的父级加个 `overflow: hidden` 一段代码带走。`overflow: hidden` 是个很神奇的属性。
我想你们应该会问：“用 `overflow: hidden` 来清除浮动好吗”？这个又怎么说呢，各有优点吧。 网上说有弊端，它的弊端目前为止还没影响到我，重要的是 __结果__ 还是美好的。

## 移动端点击去除边框

当时做移动端的时候，点击链接，跳转的时候会出现一个蓝色的边框和浅蓝色的背景。哎哟~~~卧槽！我不是去掉图片边框了么，怎么又冒出来了？解决的方法：

    -webkit-tap-highlight-color: rgba(255,255,255,0);

## 文本溢出自动添加省略号

当文本超出了容器的时候，希望在末尾自动添加省略号

### 单行溢出自动添加省略号

```css
.single-row{
    width: 150px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
```

固定宽度溢出则添加省略号
效果：
<div class="single-row">自动添加省略号自动添加省略号</div>

### 多行溢出自动添加省略号

```css
.multi-line{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;      /*数字几，就从那行省略*/
    -webkit-box-orient: vertical;
}
```

这个方法还存在兼容性问题，目前只支持 `webkit` 内核浏览器
效果：
<div class="multi-line">自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自动添加省略号自</div>

## 文本选中样式

`::selection` 选择器匹配被用户选取的选取是部分
网页默认选中文字的时候是深蓝色背景

```css
::selection{
    background: #A52A2A;
    color: #fff;
}
::-moz-selection{
    background: #A52A2A;
    color: #fff;
}
```

效果：
<div class="selection">选中我背景是深红色，字体是白色</div>

## input占位符

input设置placeholder属性，修改其默认的样式

```css
input::-webkit-input-placeholder{
    color: #A52A2A;
}
input::-moz-input-placeholder{
    color: #A52A2A;
}
input::-ms-input-placeholder{
    color: #A52A2A;
}
```

也可以设置背景和字体大小等
效果：
<input class="placeholder" type="text" placeholder="体验一下" />

## 首字变大

``` css
.larger:first-letter{
    color: #A52A2A;
    font-size: 30px;
}
```

效果：
<div class="larger">变大了！！！！！</div>

## 改变按钮和其他控件的外观

`-webkit-appearance` 是`webkit`的私有属性

多数用于移动端

__注：`-webkit-appearance` 是一个 不规范的属性（unsupported WebKit property），它没有出现在 CSS 规范草案中。
此属性非标准且渲染效果在不同浏览器下不同，有些属性值甚至不支持，请慎用。__

## Flex布局

Flex是Flexible Box的缩写，意为“弹性布局”，用来为盒状模型提供最大的灵活性
[点我了解更多Flex布局](/articles/css3-flex-layout.html)
