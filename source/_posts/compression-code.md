---
title: 使用Gulp压缩Hexo代码
date: 2016-10-09 16:47:38
categories:
    - Hexo
    - Gulp
tags:
    - Hexo
    - Gulp
---

Hexo生成的代码太多空白处，多么浪费资源。然而Gulp来帮忙。当然本站也是使用了Gulp压缩的，可以右键显示网页源代码就可以看到效果了

<!-- more -->

![code](/images/assets/code.png)

### 使用的插件
  * gulp-cssmin     压缩css代码
  * gulp-uglify     压缩JS代码
  * gulp-htmlmin    压缩html代码
  * gulp-imagemin   压缩图片
  * gulp-cache      图片缓存，只有图片替换了才压缩

### 安装和使用
首先在根目录下创建gulpfile.js文件
打开Hexo根目录运行命令：

    $ cnpm install --save-dev gulp-cssmin gulp-uglify gulp-htmlmin gulp-imagemin gulp-cache

Hexo生成的文件都在 `public` 目录，因此直接压缩此文件，如果有xxx.min.css和xxx.min.js已压缩过的，我们就不在进行压缩了
这里我是直接读取 `public` 目录下的文件，然后自动覆盖
打开 `gulpfile.js`

#### 1. 引入插件
``` js
const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
```
把我们需要用到的插件require进去

#### 2. 压缩CSS
``` js
gulp.task('styles', () => {
    return gulp.src(['public/**/*.css', '!public/**/*.min.css'])
        .pipe(cssmin({
            advanced: false,                    //类型：Boolean 默认：true [是否开启高级优化（合并选择器等）]
            compatibility: 'ie8',               //保留ie7及以下兼容写法 类型：String 默认：''or'*' [启用兼容模式； 'ie7'：IE7兼容模式，'ie8'：IE8兼容模式，'*'：IE9+兼容模式]
            keepBreaks: false,                  //类型：Boolean 默认：false [是否保留换行]
            keepSpecialComments: '*'            //保留所有特殊前缀 当你用autoprefixer生成的浏览器前缀，如果不加这个参数，有可能将会删除你的部分前缀
        }))
        .pipe(gulp.dest('public/'));
});
```
读取 `public` 目录下的文件，然后再替换回去，所有的css文件都会压缩成一行

#### 3. 压缩js
``` js
gulp.task('scripts', () => {
    return gulp.src(['public/**/*.js', '!public/**/*.min.js'])
        .pipe(uglify())
        .pipe(gulp.dest('public/'));
});
```

#### 4. 压缩HTMl
``` js
gulp.task('html', () => {
    return gulp.src('public/**/*.html')
        .pipe(htmlmin({
            collapseWhitespace: true,       //压缩html
            minifyJS: true,                 //压缩页面js
            minifyCSS: true,                //压缩页面css
            removeComments: true            //清除html注释
        }))
        .pipe(gulp.dest('public/'));
});
```

#### 5. 压缩图片
```js
gulp.task('images', () => {
    return gulp.src('public/**/*.{png,jpg,gif,svg,ico,jpeg}')
        .pipe(cache(imagemin({
            progressive: true,                      //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true,                       //类型：Boolean 默认：false 隔行扫描gif进行渲染
            svgoPlugins: [{removeViewBox: false}]   //不要移除svg的viewbox属性
        })))
        .pipe(gulp.dest('public/'));
});
```
通过以上4个任务，我们已经把静态文件和图片都压缩完了

#### 6. 默认任务
```js
gulp.task('default', ['styles', 'scripts', 'images', 'html']);
```
默认执行所有任务

记得每发布一次运行一下gulp就好了，通通压缩！！！
