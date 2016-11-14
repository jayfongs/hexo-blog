---
title: Markdown常用语法
date: 2016-10-18 11:14:58
categories: Markdown
---

<style>
    body{
        padding-right: 0 !important;
    }
    .sidebar-toggle{
        display: none;
    }
    .sidebar{
        display: none !important;
        width: 0 !important;
    }
</style>


Markdown 的目标是实现「易读易写」。

Markdown 的语法全由一些符号所组成，这些符号经过精挑细选，其作用一目了然。比如：在文字两旁加上星号，看起来就像&#8727;强调&#8727;。Markdown 的列表看起来，嗯，就是列表。Markdown 的区块引用看起来就真的像是引用一段文字，就像你曾在电子邮件中见过的那样。

<!-- more -->

# 目录
+ <a href="#title">标题</a>
+ <a href="#list">列表</a>
    + <a href="#unordered-list">无序列表</a>
    + <a href="#ordered-list">有序列表</a>
+ <a href="#link">链接</a>
+ <a href="#picture">图片</a>
+ <a href="#text-format">文字格式</a>
+ <a href="#reference">引用</a>
+ <a href="#dividing-line">分割线</a>
+ <a href="#table">表格</a>

<h2 id="title">标题</h2>

```markdown
这是 H1 一级标题
===
这是 H2 二级标题
---

# 这是 H1 一级标题
## 这是 H2 二级标题
### 这是 H3 三级标题
#### 这是 H4 四级标题
##### 这是 H5 五级标题
###### 这是 H6 六级标题
```

效果如下：
这是 H1 一级标题
===

这是 H2 二级标题
---

# 这是 H1 一级标题
## 这是 H2 二级标题
### 这是 H3 三级标题
#### 这是 H4 四级标题
##### 这是 H5 五级标题
###### 这是 H6 六级标题

<h2 id="list">列表</h2>

<h3 id="unordered-list">无序列表</h3>

注： 写无序列表有三种方式，使用 `*`、 `+`、`-`，最终展示的出来的效果都是一样的，选一个自己喜欢的就好了

``` markdown
* 项目1
  * 子项目1.1
  * 子项目1.2
    * 子项目1.2.1
* 项目2
* 项目3

+ 项目1
  + 子项目1.1
  + 子项目1.2
    + 子项目1.2.1
+ 项目2
+ 项目3

- 项目1
  - 子项目1.1
  - 子项目1.2
    - 子项目1.2.1
- 项目2
- 项目3
```

效果如下：
* 项目1
  * 子项目1.1
  * 子项目1.2
    * 子项目1.2.1
* 项目2
* 项目3

<h3 id="ordered-list">有序列表</h3>

``` markdown
1. 项目1
2. 项目2
3. 项目3
    1. 项目3.1
    2. 项目3.2
```

效果如下：
1. 项目1
2. 项目2
3. 项目3
    1. 项目3.1
    2. 项目3.2

<h2 id="link">链接</h2>

```markdown
[链接名称](链接地址)
如：[JayFong](/articles/markdown-grammar.html)
```

效果如下：
[点我刷新本页](/articles/markdown-grammar.html)

<h2 id="picture">图片</h2>

注： 图片和链接是一样的，就是图片前面多了一个`!`号

``` markdown
![名称](链接地址)
如：![JayFong](/images/assets/jayfong.jpg)
```
效果如下：
<img src="/images/assets/jayfong.jpg" width="200" />

<h2 id="text-format">文字格式</h2>

注：粗体和斜体格式，效果一样，任选一种

```markdown
**这是文字粗体格式**
__这是文字粗体格式__

*这是文字斜体格式*
_这是文字斜体格式_

~~在文字上添加删除线~~

->居中显示的文字<-
```

效果如下：

**这是文字粗体格式**

__这是文字粗体格式__

*这是文字斜体格式*

_这是文字斜体格式_

~~在文字上添加删除线~~

<h2 id="reference">引用</h2>

```markdown
> 第一行引用文字
> 第二行引用文字

> 引用文字
引用文字
引用文字
引用文字引用文字

> 这是1级引用
这是1级引用
    >> 这是2级引用
    这是2级引用

> 这是1级引用
这是1级引用
    >> 这是2级引用
    这是2级引用
        >>> 这是3级引用
        这是3级引用
```

效果如下：
> 第一行引用文字
> 第二行引用文字

<br>

> 引用文字
引用文字
引用文字
引用文字引用文字

<br>

> 这是1级引用
这是1级引用
    >> 这是2级引用
    这是2级引用

<br>

> 这是1级引用
这是1级引用
    >> 这是2级引用
    这是2级引用
        >>> 这是3级引用
        这是3级引用


<h2 id="dividing-line">分割线</h2>

```markdown
***
---
```

效果如下：
***

---

<h2 id="table">表格</h2>

markdown的语法写表格真的是太累了

```markdown
| Name    | Job   | Age      |
| ------- | :---: | ---:     |
| JayFong | Web   | 18       |
| 向左对齐 | 居中   | 向右对齐  |
```

效果如下：

| Name    | Job   | Age      |
| ------- | :---: | ---:     |
| JayFong | Web   | 18       |
| 向左对齐 | 居中   | 向右对齐  |
