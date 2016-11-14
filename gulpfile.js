const gulp = require('gulp');
const cssmin = require('gulp-cssmin');
const uglify = require('gulp-uglify');
const htmlmin = require('gulp-htmlmin');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');

/**
 * 压缩css
 */
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

/**
 * 压缩js
 */
gulp.task('scripts', () => {
    return gulp.src(['public/**/*.js', '!public/**/*.min.js'])
        .pipe(uglify())
        .pipe(gulp.dest('public/'));
});

/**
 * 压缩html
 */
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

/**
 * 压缩images
 */
gulp.task('images', () => {
    return gulp.src('public/**/*.{png,jpg,gif,svg,ico,jpeg}')
        .pipe(cache(imagemin({
            progressive: true,                      //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true,                       //类型：Boolean 默认：false 隔行扫描gif进行渲染
            svgoPlugins: [{removeViewBox: false}]   //不要移除svg的viewbox属性
        })))
        .pipe(gulp.dest('public/'));
});

/**
 * 默认执行
 */
gulp.task('default', ['styles', 'scripts', 'images', 'html']);
