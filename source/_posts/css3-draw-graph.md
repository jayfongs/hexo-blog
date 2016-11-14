---
title: CSS3绘制各种图形
date: 2016-10-26 14:58:54
categories: CSS3
tags:
	- CSS
	- CSS3
---

<style>
.circular{
    width: 150px;
    height: 150px;
    background: #A52A2A;
    border-radius: 50%;
}
.oval{
    width: 200px;
    height: 100px;
    background: #A52A2A;
    border-radius: 50%;
}
.triangle-top{
    width: 0;
    height: 0;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    border-bottom: 150px solid #A52A2A;
}
.triangle-bottom{
    width: 0;
    height: 0;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    border-top: 150px solid #A52A2A;
}
.triangle-left{
    width: 0;
    height: 0;
    border-top: 75px solid transparent;
    border-right: 150px solid #A52A2A;
    border-bottom: 75px solid transparent;
}
.triangle-right{
    width: 0;
    height: 0;
    border-top: 75px solid transparent;
    border-left: 150px solid #A52A2A;
    border-bottom: 75px solid transparent;
}
.triangle-top-left{
    width: 0;
    height: 0;
    border-top: 150px solid #A52A2A;
    border-right: 150px solid transparent;
}
.triangle-top-right{
    width: 0;
    height: 0;
    border-top: 150px solid #A52A2A;
    border-left: 150px solid transparent;
}
.triangle-lower-left{
    width: 0;
    height: 0;
    border-bottom: 150px solid #A52A2A;
    border-right: 150px solid transparent;
}
.triangle-lower-right{
    width: 0;
    height: 0;
    border-bottom: 150px solid #A52A2A;
    border-left: 150px solid transparent;
}
.parallelogram{
    width: 200px;
    height: 150px;
    background: #A52A2A;
    -webkit-transform: skew(20deg);
    -moz-transform: skew(20deg);
    -o-transform: skew(20deg);
    transform: skew(20deg);
    margin-left: 30px;
}
.top-trapezoid{
    width: 150px;
    height: 0;
    border-bottom: 150px solid #A52A2A;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
}
.bottom-trapezoid{
    width: 150px;
    height: 0;
    border-top: 150px solid #A52A2A;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
}
.left-trapezoid{
    width: 0;
    height: 150px;
    border-right: 150px solid #A52A2A;
    border-top: 75px solid transparent;
    border-bottom: 75px solid transparent;
}
.right-trapezoid{
    width: 0;
    height: 150px;
    border-left: 150px solid #A52A2A;
    border-top: 75px solid transparent;
    border-bottom: 75px solid transparent;
}
.top-angle-trapezoid{
    width: 150px;
    height: 0;
    border-bottom: 150px solid #A52A2A;
    border-left: 75px solid transparent;
}
.bottom-angle-trapezoid{
    width: 150px;
    height: 0;
    border-top: 150px solid #A52A2A;
    border-left: 75px solid transparent;
}
.left-angle-trapezoid{
    width: 0;
    height: 150px;
    border-right: 150px solid #A52A2A;
    border-bottom: 75px solid transparent;
}
.right-angle-trapezoid{
    width: 0;
    height: 150px;
    border-left: 150px solid #A52A2A;
    border-bottom: 75px solid transparent;
}
.hexagonal-star{
    width: 0;
    height: 0;
    position: relative;
    border-bottom: 150px solid #A52A2A;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    margin-bottom: 80px;
}
.hexagonal-star:after{
    width: 0;
    height: 0;
    content: '';
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    border-top: 150px solid #A52A2A;
    position: absolute;
    top: 50px;
    left: -75px;
}
.five-star{
    width: 0;
    height: 0;
    display: block;
    margin: 50px 0;
    position: relative;
    border-right: 100px solid transparent;
    border-bottom: 70px solid #A52A2A;
    border-left: 100px solid transparent;
    transform: rotate(35deg);
    -moz-transform: rotate(35deg);
    -webkit-transform: rotate(35deg);
    -ms-transform: rotate(35deg);
    -o-transform: rotate(35deg);
}
.five-star:before{
    width: 0;
    heigth: 0;
    display: block;
    content: '';
    border-bottom: 80px solid #A52A2A;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    transform: rotate(35deg);
    -webkit-transform: rotate(-35deg);
    -moz-transform: rotate(-35deg);
    -ms-transform: rotate(-35deg);
    -o-transform: rotate(-35deg);
    position: absolute;
    top: -45px;
    left: -65px;
}
.five-star:after{
    width: 0;
    heigth: 0;
    content: '';
    display: block;
    border-right: 100px solid transparent;
    border-bottom: 70px solid #A52A2A;
    border-left: 100px solid transparent;
    transform: rotate(35deg);
    -webkit-transform: rotate(-70deg);
    -moz-transform: rotate(-70deg);
    -ms-transform: rotate(-70deg);
    -o-transform: rotate(-70deg);
    position: absolute;
    top: 3px;
    left: -105px;
}
.hexagon{
    width: 150px;
    height: 75px;
    background: #A52A2A;
    position: relative;
    margin-bottom: 60px;
}
.hexagon:before{
    width: 0;
    height: 0;
    content: '';
    border-bottom: 37px solid #A52A2A;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    position: absolute;
    top: -37px;
    left: 0;
}
.hexagon:after{
    width: 0;
    height: 0;
    content: '';
    border-top: 37px solid #A52A2A;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    position: absolute;
    bottom: -37px;
    left: 0;
}
.octagon{
    width: 150px;
    height: 150px;
    background: #A52A2A;
    position: relative;
}
.octagon:before{
    width: 76px;
    height: 0;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 42px solid #A52A2A;
    border-left: 37px solid #fff;
    border-right: 37px solid #fff;
}
.octagon:after{
    width: 76px;
    height: 0;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 42px solid #A52A2A;
    border-left: 37px solid #fff;
    border-right: 37px solid #fff;
}
.heart-shaped{
    width: 150px;
    height: 150px;
    position: relative;
}
.heart-shaped:before,
.heart-shaped:after{
    width: 75px;
    height: 130px;
    content: '';
    background: #A52A2A;
    position: absolute;
    top: 0;
    left: 75px;
    border-radius: 75px 75px 0 0;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
    -moz-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    -o-transform-origin: 0 100%;
    transform-origin: 0 100%;
}
.heart-shaped:after{
    left: 0;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    -o-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
}
.egg{
    width: 150px;
    height: 200px;
    background: #A52A2A;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
.beans-top{
    width: 0;
    height: 0;
    border: 80px solid #A52A2A;
    border-top-color: transparent;
    border-radius: 80px;
}
.diamond{
    width: 80px;
    height: 0;
    border-width: 0 40px 40px 40px;
    border-color: transparent transparent #A52A2A transparent;
    border-style: solid;
    position: relative;
    margin-bottom: 120px;
}
.diamond:after{
    width: 0;
    height: 0;
    content: '';
    position: absolute;
    top: 40px;
    left: -40px;
    border-style: solid;
    border-color: #A52A2A transparent transparent transparent;
    border-width: 110px 80px 0 80px;
}
.gossip{
    width: 96px;
    height: 48px;
    background: #fff;
    border-style: solid;
    border-color: #A52A2A;
    border-width: 2px 2px 50px 2px;
    border-radius: 100%;
    position: relative;
}
.gossip:before{
    width: 12px;
    height: 12px;
    content: '';
    background: #fff;
    border: 18px solid #A52A2A;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 0;
}
.gossip:after{
    width: 12px;
    height: 12px;
    content: '';
    background: #A52A2A;
    border: 18px solid #fff;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
}
.endless{
    width: 212px;
    height: 100px;
    position: relative;
}
.endless:before,
.endless:after{
    width: 60px;
    height: 60px;
    content: '';
    border: 20px solid #A52A2A;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50px 50px 0 50px;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
}
.endless:after{
    right: 0;
    left: auto;
    border-radius: 50px 50px 50px 0;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}
.bialog-box-top,
.bialog-box-bottom,
.bialog-box-left,
.bialog-box-right{
    width: 150px;
    height: 100px;
    background: #A52A2A;
    position: relative;
    border-radius: 10px;
}
.bialog-box-top:before{
    width: 0;
    height: 0;
    content: '';
    border-width: 12px;
    border-style: solid;
    border-color: transparent;
    border-bottom-width: 12px;
    border-bottom-color: #A52A2A;
    position: absolute;
    bottom: 100%;
    left: 24px;
}
.bialog-box-bottom:before{
    width: 0;
    height: 0;
    content: '';
    border-width: 12px;
    border-style: solid;
    border-color: transparent;
    border-top-width: 12px;
    border-top-color: #A52A2A;
    position: absolute;
    top: 100%;
    left: 24px;
}
.bialog-box-left:before{
    width: 0;
    height: 0;
    content: '';
    border-width: 12px;
    border-style: solid;
    border-color: transparent;
    border-right-width: 12px;
    border-right-color: #A52A2A;
    position: absolute;
    right: 100%;
    top: 24px;
}
.bialog-box-right:before{
    width: 0;
    height: 0;
    content: '';
    border-width: 12px;
    border-style: solid;
    border-color: transparent;
    border-left-width: 12px;
    border-left-color: #A52A2A;
    position: absolute;
    left: 100%;
    top: 24px;
}
.hollow-top,
.hollow-bottom,
.hollow-left,
.hollow-right,
.transfrom-bubble-hollow{
    width: 150px;
    height: 100px;
    border: 1px solid #A52A2A;
    position: relative;
    border-radius: 10px;
}
.hollow-top:before,
.hollow-top:after{
    width: 0;
    height: 0;
    content: '';
    border-width: 12px;
    border-style: solid;
    border-color: transparent;
    border-bottom-width: 12px;
    border-bottom-color: #A52A2A;
    position: absolute;
    bottom: 100%;
    left: 24px;
}
.hollow-top:after{
    bottom: 99px;
    border-color: #fff transparent;
}
.hollow-bottom:before,
.hollow-bottom:after{
    width: 0;
    height: 0;
    content: '';
    border-width: 12px;
    border-style: solid;
    border-color: transparent;
    border-top-width: 12px;
    border-top-color: #A52A2A;
    position: absolute;
    top: 100%;
    left: 24px;
}
.hollow-bottom:after{
    top: 99px;
    border-color: #fff transparent;
}
.hollow-left:before,
.hollow-left:after{
    width: 0;
    height: 0;
    content: '';
    border-width: 12px;
    border-style: solid;
    border-color: transparent;
    border-right-width: 12px;
    border-right-color: #A52A2A;
    position: absolute;
    right: 100%;
    top: 24px;
}
.hollow-left:after{
    right: 149px;
    border-color: transparent #fff;
}
.hollow-right:before,
.hollow-right:after{
    width: 0;
    height: 0;
    content: '';
    border-width: 12px;
    border-style: solid;
    border-color: transparent;
    border-left-width: 12px;
    border-left-color: #A52A2A;
    position: absolute;
    left: 100%;
    top: 24px;
}
.hollow-right:after{
    left: 149px;
    border-color: transparent #fff;
}
.transfrom-bubble-hollow:after{
    width: 12px;
    height: 12px;
    content: '';
    display: block;
    background: #fff;
    border-bottom: 1px solid #A52A2A;
    border-right: 1px solid #A52A2A;
    position: absolute;
    left: 24px;
    bottom: -7px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}
.transfrom-bubble-solid{
    width: 150px;
    height: 100px;
    background: #A52A2A;
    position: relative;
    border-radius: 10px;
}
.transfrom-bubble-solid:after{
    width: 12px;
    height: 12px;
    content: '';
    display: block;
    background: #A52A2A;
    position: absolute;
    left: 24px;
    bottom: -6px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}
.circular-hollow{
    width: 150px;
    height: 150px;
    border: 20px solid #A52A2A;
    border-radius: 50%;
}
.upper-semicircle{
    width: 150px;
    border-top: 150px solid #A52A2A;
    border-right: 150px solid #A52A2A;
    border-radius: 150px 150px 0 0;
}
.lower-semicircle{
    width: 150px;
    border-bottom: 150px solid #A52A2A;
    border-left: 150px solid #A52A2A;
    border-radius: 0 0 150px 150px;
}
.left-semicircle{
    width: 150px;
    border-bottom: 150px solid #A52A2A;
    border-top: 150px solid #A52A2A;
    border-radius: 150px 0 0 150px;
}
.right-semicircle{
    width: 150px;
    border-bottom: 150px solid #A52A2A;
    border-top: 150px solid #A52A2A;
    border-radius: 0 150px 150px 0;
}
.top-left-circle{
    width: 150px;
    border-top: 150px solid #A52A2A;
    border-radius: 150px 0 0 0;
}
.top-right-circle{
    width: 150px;
    border-top: 150px solid #A52A2A;
    border-radius: 0 150px 0 0;
}
.lower-left-circle{
    width: 150px;
    border-bottom: 150px solid #A52A2A;
    border-radius: 0 0 0 150px;
}
.lower-right-circle{
    width: 150px;
    border-bottom: 150px solid #A52A2A;
    border-radius: 0 0 150px 0;
}
#diamond{
    width: 150px;
    height: 150px;
    background: #A52A2A;
    -webkit-transform-origin: 0 100%;
    -moz-transform-origin: 0 100%;
    -o-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform:rotate(-45deg);
    -moz-transform:rotate(-45deg);
    -o-transform:rotate(-45deg);
    -ms-transform:rotate(-45deg);
    transform:rotate(-45deg);
    margin: 75px 0 0 120px;
}
.beans-bottom{
    width: 0;
    height: 0;
    border: 80px solid #A52A2A;
    border-bottom-color: transparent;border-radius: 80px;
}
.beans-left{
    width: 0;
    height: 0;
    border: 80px solid #A52A2A;
    border-left-color: transparent;border-radius: 80px;
}
.beans-right{
    width: 0;
    height: 0;
    border: 80px solid #A52A2A;
    border-right-color: transparent;border-radius: 80px;
}
.ribbon{
    width: 0;
    height: 100px;
    border-left: 50px solid #A52A2A;
    border-right: 50px solid #A52A2A;
    border-bottom: 35px solid transparent;
}
.octagonal-star{
    width: 150px;
    height: 150px;
    background: #A52A2A;
    position: relative;
    text-align: center;
    -webkit-transform: rotate(20deg);
    -moz-transform: rotate(20deg);
    -ms-transform: rotate(20deg);
    -o-transform: rotate(20eg);
    transform: rotate(20deg);
}
.octagonal-star:before{
    width: 150px;
    height: 150px;
    content: "";
    background: #A52A2A;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
}
.badge{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #A52A2A;
    position: relative;
}
.badge::before,
.badge::after{
    content: '';
    border-bottom: 70px solid #A52A2A;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    -webkit-transform: rotate(-140deg);
    -moz-transform: rotate(-140deg);
    -ms-transform: rotate(-140deg);
    -o-transform: rotate(-140deg);
    position: absolute;
    top: 70px;
    left: -10px;
}
.badge::after{
    left: auto;
    right: -10px;
    -webkit-transform: rotate(140deg);
    -moz-transform: rotate(140deg);
    -ms-transform: rotate(140deg);
    -o-transform: rotate(140deg);
}
.chevron{
    width: 200px;
    height: 60px;
    position: relative;
    text-align: center;
    padding: 12px;
    margin-bottom: 6px;
}
.chevron::before{
    width: 51%;
    height: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: #A52A2A;
    -webkit-transform: skew(0deg, 6deg);
    -moz-transform: skew(0deg, 6deg);
    -ms-transform: skew(0deg, 6deg);
    -o-transform: skew(0deg, 6deg);
    transform: skew(0deg, 6deg);
}
.chevron::after{
    height: 100%;
    width: 50%;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    background: #A52A2A;
    -webkit-transform: skew(0deg, -6deg);
    -moz-transform: skew(0deg, -6deg);
    -ms-transform: skew(0deg, -6deg);
    -o-transform: skew(0deg, -6deg);
    transform: skew(0deg, -6deg);
}
.cone{
    width: 0;
    height: 0;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    border-top: 110px solid #A52A2A;
    border-radius: 50%;
}
.magnifier{
    width: 64px;
    height: 64px;
    display: inline-block;
    border: 15px solid #A52A2A;
    position: relative;
    border-radius: 50%;
	font-size: 10em;
}
.magnifier::before{
	width: 55px;
	height: 15px;
	content: '';
	display: inline-block;
	background: #A52A2A;
	position: absolute;
	right: -45px;
	bottom: -20px;
	-webkit-transform: rotate(45deg);
	-moz-transform: rotate(45deg);
	-ms-transform: rotate(45deg);
	-o-transform: rotate(45deg);
	transform: rotate(45deg);
}
.moon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  box-shadow: 15px 15px 0 0 #A52A2A;
}
</style>

> 部分兼容IE8版本以下的，如果要兼容IE8以下的朋友谨慎使用

## 圆形

### 正圆

``` css
.circular{
    width: 150px;
    height: 150px;
    background: #A52A2A;
    border-radius: 50%;
}
```

<!-- more -->

效果：
<div class="circular"></div>

### 空心圆

``` css
.circular-hollow{
    width: 150px;
    height: 150px;
    border: 20px solid #A52A2A;
    border-radius: 50%;
}
```

效果：
<div class="circular-hollow"></div>

### 上半圆形

``` css
.upper-semicircle{
    width: 150px;
    border-top: 150px solid #A52A2A;
    border-right: 150px solid #A52A2A;
    border-radius: 150px 150px 0 0;
}
```

效果：
<div class="upper-semicircle"></div>

### 下半圆形

``` css
.lower-semicircle{
    width: 150px;
    border-bottom: 150px solid #A52A2A;
    border-left: 150px solid #A52A2A;
    border-radius: 0 0 150px 150px;
}
```

效果：
<div class="lower-semicircle"></div>

### 左半圆形

``` css
.left-semicircle{
    width: 150px;
    border-bottom: 150px solid #A52A2A;
    border-top: 150px solid #A52A2A;
    border-radius: 100px 0 0 100px;
}
```

效果：
<div class="left-semicircle"></div>

### 右半圆形

``` css
.right-semicircle{
    width: 150px;
    border-bottom: 150px solid #A52A2A;
    border-top: 150px solid #A52A2A;
    border-radius: 0 150px 150px 0;
}
```

效果：
<div class="right-semicircle"></div>

### 左上四分之一圆形

``` css
.top-left-circle{
    width: 150px;
    border-top: 150px solid #A52A2A;
    border-radius: 150px 0 0 0;
}
```

效果：
<div class="top-left-circle"></div>

### 右上四分之一圆形

``` css
.top-right-circle{
    width: 150px;
    border-top: 150px solid #A52A2A;
    border-radius: 0 150px 0 0;
}
```

效果：
<div class="top-right-circle"></div>

### 左下四分之一圆形

``` css
.lower-left-circle{
    width: 150px;
    border-bottom: 150px solid #A52A2A;
    border-radius: 0 0 0 150px;
}
```

效果：
<div class="lower-left-circle"></div>

### 右下四分之一圆形

``` css
.lower-right-circle{
    width: 150px;
    border-bottom: 150px solid #A52A2A;
    border-radius: 0 0 150px 0;
}
```

效果：
<div class="lower-right-circle"></div>

### 椭圆

``` css
.oval{
    width: 200px;
    height: 100px;
    background: #A52A2A;
    border-radius: 50%;
}
```

效果：
<div class="oval"></div>

### 蛋型

``` css
.egg{
    width: 150px;
    height: 200px;
    background: #A52A2A;
    border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
}
```

效果：
<div class="egg"></div>

### 圆锥形

```css
.cone{
    width: 0;
    height: 0;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    border-top: 110px solid #A52A2A;
    border-radius: 50%;
}
```

效果：
<div class="cone"></div>

## 三角形

### 上三角

``` css
.triangle-top{
    width: 0;
    height: 0;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    border-bottom: 150px solid #A52A2A;
}
```

效果：
<div class="triangle-top"></div>

### 下三角

``` css
.triangle-bottom{
    width: 0;
    height: 0;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    border-bottom: 150px solid #A52A2A;
}
```

效果：
<div class="triangle-bottom"></div>

### 左三角

``` css
.triangle-left{
    width: 0;
    height: 0;
    border-top: 75px solid transparent;
    border-right: 150px solid #A52A2A;
    border-bottom: 75px solid transparent;
}
```

效果：
<div class="triangle-left"></div>

### 右三角

``` css
.triangle-right{
    width: 0;
    height: 0;
    border-top: 75px solid transparent;
    border-left: 150px solid #A52A2A;
    border-bottom: 75px solid transparent;
}
```

效果：
<div class="triangle-right"></div>

### 左上三角

``` css
.triangle-top-left{
    width: 0;
    height: 0;
    border-top: 150px solid #A52A2A;
    border-right: 150px solid transparent;
}
```

效果：
<div class="triangle-top-left"></div>

### 右上三角

``` css
.triangle-top-right{
    width: 0;
    height: 0;
    border-top: 150px solid #A52A2A;
    border-left: 150px solid transparent;
}
```

效果：
<div class="triangle-top-right"></div>

### 左下三角

``` css
.triangle-lower-left{
    width: 0;
    height: 0;
    border-bottom: 150px solid #A52A2A;
    border-right: 150px solid transparent;
}
```

效果：
<div class="triangle-lower-left"></div>

### 右下三角

``` css
.triangle-lower-right{
    width: 0;
    height: 0;
    border-bottom: 150px solid #A52A2A;
    border-left: 150px solid transparent;
}
```

效果：
<div class="triangle-lower-right"></div>

## 平行四边形

``` css
.parallelogram{
    width: 200px;
    height: 150px;
    background: #A52A2A;
    margin-left: 30px;
    -webkit-transform: skew(20deg);		
    -moz-transform: skew(20deg);
    -o-transform: skew(20deg);
    transform: skew(20deg);

    /*
    设置为负值就是反方向
    -webkit-transform: skew(-20deg);
    -moz-transform: skew(-20deg);
    -o-transform: skew(-20deg);
    transform: skew(-20deg);
    */
}
```

效果：
<div class="parallelogram"></div>

## 菱形

```css
.diamond{
    width: 150px;
    height: 150px;
    background: #A52A2A;
    -webkit-transform-origin: 0 100%;
    -moz-transform-origin: 0 100%;
    -o-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    transform-origin: 0 100%;
    -webkit-transform:rotate(-45deg);
    -moz-transform:rotate(-45deg);
    -o-transform:rotate(-45deg);
    -ms-transform:rotate(-45deg);
    transform:rotate(-45deg);
    margin: 75px 0 0 100px;
}
```

效果：
<div id="diamond"></div>

## 梯形

### 上梯形

``` css
.top-trapezoid{
    width: 150px;
    height: 0;
    border-bottom: 150px solid #A52A2A;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
}
```

效果：
<div class="top-trapezoid"></div>

### 下梯形

``` css
.bottom-trapezoid{
    width: 150px;
    height: 0;
    border-top: 150px solid #A52A2A;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
}
```

效果：
<div class="bottom-trapezoid"></div>

### 左梯形

``` css
.left-trapezoid{
    width: 150px;
    height: 0;
    border-right: 150px solid #A52A2A;
    border-top: 75px solid transparent;
    border-bottom: 75px solid transparent;
}
```

效果：
<div class="left-trapezoid"></div>

### 右梯形

``` css
.right-trapezoid{
    width: 150px;
    height: 0;
    border-right: 150px solid #A52A2A;
    border-top: 75px solid transparent;
    border-bottom: 75px solid transparent;
}
```

效果：
<div class="right-trapezoid"></div>

### 上直角梯形

``` css
.top-angle-trapezoid{
    width: 150px;
    height: 0;
    border-bottom: 150px solid #A52A2A;
    border-left: 75px solid transparent;   /*border-right: 75px solid transparent; 尖角向右*/
}
```

效果：
<div class="top-angle-trapezoid"></div>

### 下直角梯形

``` css
.bottom-angle-trapezoid{
    width: 150px;
    height: 0;
    border-top: 150px solid #A52A2A;
    border-left: 75px solid transparent;   /*border-right: 75px solid transparent; 尖角向右*/
}
```

效果：
<div class="bottom-angle-trapezoid"></div>

### 左直角梯形

``` css
.left-angle-trapezoid{
    width: 0;
    height: 150px;
    border-right: 150px solid #A52A2A;
    border-bottom: 75px solid transparent;  /*border-top: 75px solid transparent; 尖角向上*/
}
```

效果：
<div class="left-angle-trapezoid"></div>

### 左直角梯形

``` css
.right-angle-trapezoid{
    width: 0;
    height: 150px;
    border-left: 150px solid #A52A2A;
    border-bottom: 75px solid transparent;   /*border-top: 75px solid transparent; 尖角向上*/
}
```

效果：
<div class="right-angle-trapezoid"></div>

## 五角星

``` css
.five-star{
    width: 0;
    height: 0;
    display: block;
    margin: 50px 0;
    position: relative;
    border-right: 100px solid transparent;
    border-bottom: 70px solid #A52A2A;
    border-left: 100px solid transparent;
    transform: rotate(35deg);
    -moz-transform: rotate(35deg);
    -webkit-transform: rotate(35deg);
    -ms-transform: rotate(35deg);
    -o-transform: rotate(35deg);
}
.five-star:before{
    width: 0;
    heigth: 0;
    display: block;
    content: '';
    border-bottom: 80px solid #A52A2A;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    transform: rotate(35deg);
    -webkit-transform: rotate(-35deg);
    -moz-transform: rotate(-35deg);
    -ms-transform: rotate(-35deg);
    -o-transform: rotate(-35deg);
    position: absolute;
    top: -45px;
    left: -65px;
}
.five-star:after{
    width: 0;
    heigth: 0;
    content: '';
    display: block;
    border-right: 100px solid transparent;
    border-bottom: 70px solid #A52A2A;
    border-left: 100px solid transparent;
    transform: rotate(35deg);
    -webkit-transform: rotate(-70deg);
    -moz-transform: rotate(-70deg);
    -ms-transform: rotate(-70deg);
    -o-transform: rotate(-70deg);
    position: absolute;
    top: 3px;
    left: -105px;
}
```

效果：
<div class="five-star"></div>

## 六角星

``` css
.hexagonal-star{
    width: 0;
    height: 0;
    position: relative;
    border-bottom: 150px solid #A52A2A;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
}
.hexagonal-star:after{
    width: 0;
    height: 0;
    content: '';
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    border-top: 150px solid #A52A2A;
    position: absolute;
    top: 50px;
    left: -75px;
}
```

效果：
<div class="hexagonal-star"></div>

## 八角星

``` css
.octagonal-star{
    width: 150px;
    height: 150px;
    background: #A52A2A;
    position: relative;
    text-align: center;
    -webkit-transform: rotate(20deg);
    -moz-transform: rotate(20deg);
    -ms-transform: rotate(20deg);
    -o-transform: rotate(20eg);
    transform: rotate(20deg);
}
.octagonal-star:before{
    width: 150px;
    height: 150px;
    content: "";
    background: #A52A2A;
    position: absolute;
    top: 0;
    left: 0;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg);
}
```

效果：
<div class="octagonal-star"></div>

## 六边形

``` css
.hexagon{
    width: 150px;
    height: 75px;
    background: #A52A2A;
    position: relative;
}
.hexagon:before{
    width: 0;
    height: 0;
    content: '';
    border-bottom: 37px solid #A52A2A;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    position: absolute;
    top: -37px;
    left: 0;
}
.hexagon:after{
    width: 0;
    height: 0;
    content: '';
    border-top: 37px solid #A52A2A;
    border-left: 75px solid transparent;
    border-right: 75px solid transparent;
    position: absolute;
    bottom: -37px;
    left: 0;
}
```

效果：
<div class="hexagon"></div>

## 八边形

``` css
.octagon{
    width: 150px;
    height: 150px;
    background: #A52A2A;
    position: relative;
}
.octagon:before{
    width: 76px;
    height: 0;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 42px solid #A52A2A;
    border-left: 37px solid #fff;
    border-right: 37px solid #fff;
}
.octagon:after {
    width: 76px;
    height: 0;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 42px solid #A52A2A;
    border-left: 37px solid #fff;
    border-right: 37px solid #fff;
}
```

效果：
<div class="octagon"></div>

## 心形

``` css
.heart-shaped{
    width: 150px;
    height: 140px;
    position: relative;
}
.heart-shaped:before,
.heart-shaped:after{
    width: 75px;
    height: 130px;
    content: '';
    background: #A52A2A;
    position: absolute;
    top: 0;
    left: 75px;
    border-radius: 75px 75px 0 0;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
    -moz-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    -o-transform-origin: 0 100%;
    transform-origin: 0 100%;
}
.heart-shaped:after{
    left: 0;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    -o-transform-origin: 100% 100%;
    transform-origin: 100% 100%;
}
```

效果：
<div class="heart-shaped"></div>

## 食逗人

### 上食逗人
``` css
.beans-top{
    width: 0;
    height: 0;
    border: 80px solid #A52A2A;
    border-top-color: transparent;border-radius: 80px;
}
```

效果：
<div class="beans-top"></div>

### 下食逗人

``` css
.beans-bottom{
    width: 0;
    height: 0;
    border: 80px solid #A52A2A;
    border-bottom-color: transparent;border-radius: 80px;
}
```

效果：
<div class="beans-bottom"></div>

### 左食逗人

``` css
.beans-left{
    width: 0;
    height: 0;
    border: 80px solid #A52A2A;
    border-left-color: transparent;border-radius: 80px;
}
```

效果：
<div class="beans-left"></div>

### 右食逗人

``` css
.beans-right{
    width: 0;
    height: 0;
    border: 80px solid #A52A2A;
    border-right-color: transparent;border-radius: 80px;
}
```

效果：
<div class="beans-right"></div>

## 钻石

``` css
.diamond{
    width: 80px;
    height: 0;
    border-width: 0 40px 40px 40px;
    border-color: transparent transparent #A52A2A transparent;
    border-style: solid;
    position: relative;
}
.diamond:after{
    width: 0;
    height: 0;
    content: '';
    position: absolute;
    top: 40px;
    left: -40px;
    border-style: solid;
    border-color: #A52A2A transparent transparent transparent;
    border-width: 110px 80px 0 80px;
}
```

效果：
<div class="diamond"></div>

## 无穷符号

``` css
.endless{
    width: 212px;
    height: 100px;
    position: relative;
}
.endless:before,
.endless:after{
    width: 60px;
    height: 60px;
    content: '';
    border: 20px solid #A52A2A;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 50px 50px 0 50px;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);}
.endless:after{
    right: 0;
    left: auto;
    border-radius: 50px 50px 50px 0;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}
```

效果：
<div class="endless"></div>

## border实心气泡框

### 上实心气泡框

``` css
.bialog-box-top{
    width: 150px;
    height: 100px;
    background: #A52A2A;
    position: relative;
    border-radius: 10px;
}
.bialog-box-top:before{
    width: 0;
    height: 0;
    content: '';
    border-width: 12px;
    border-style: solid;
    border-color: transparent;
    border-bottom-width: 12px;
    border-bottom-color: #A52A2A;
    position: absolute;
    bottom: 100%;
    left: 24px;
}
```

效果：
<div class="bialog-box-top"></div>

### 下实心气泡框

``` css
.bialog-box-bottom{
    width: 150px;
    height: 100px;
    background: #A52A2A;
    position: relative;
    border-radius: 10px;
}
.bialog-box-bottom:before{
    width: 0;
    height: 0;
    content: '';
    border-width: 12px;
    border-style: solid;
    border-color: transparent;
    border-top-width: 12px;
    border-top-color: #A52A2A;
    position: absolute;
    top: 100%;
    left: 24px;
}
```

效果：
<div class="bialog-box-bottom"></div>

### 左实心气泡框

``` css
.bialog-box-left{
    width: 150px;
    height: 100px;
    background: #A52A2A;
    position: relative;
    border-radius: 10px;
}
.bialog-box-left:before{
    width: 0;
    height: 0;
    content: '';
    border-width: 12px;
    border-style: solid;
    border-color: transparent;
    border-right-width: 12px;
    border-right-color: #A52A2A;
    position: absolute;
    right: 100%;
    top: 24px;
}
```

效果：
<div class="bialog-box-left"></div>

### 右实心气泡框

``` css
.bialog-box-right{
    width: 150px;
    height: 100px;
    background: #A52A2A;
    position: relative;
    border-radius: 10px;
}
.bialog-box-right:before{
    width: 0;
    height: 0;
    content: '';
    border-width: 12px;
    border-style: solid;
    border-color: transparent;
    border-left-width: 12px;
    border-left-color: #A52A2A;
    position: absolute;
    left: 100%;
    top: 24px;
}
```

效果：
<div class="bialog-box-right"></div>

## border空心气泡框

### 上空心气泡框

``` css
.hollow-top{
    width: 150px;
    height: 100px;
    border: 1px solid #A52A2A;
    position: relative;
    border-radius: 10px;
}
.hollow-top:before,
.hollow-top:after{
    width: 0;
    height: 0;
    content: '';
    border-width: 12px;
    border-style: solid;
    border-color: transparent;
    border-bottom-width: 12px;
    border-bottom-color: #A52A2A;
    position: absolute;
    bottom: 100%;
    left: 24px;
}
.hollow-top:after{
    bottom: 99px;
    border-color: #fff transparent;
}
```

效果：
<div class="hollow-top"></div>

### 下空心气泡框

``` css
.hollow-bottom{
    width: 150px;
    height: 100px;
    border: 1px solid #A52A2A;
    position: relative;
    border-radius: 10px;
}
.hollow-bottom:before,
.hollow-bottom:after{
    width: 0;
    height: 0;
    content: '';
    border-width: 12px;
    border-style: solid;
    border-color: transparent;
    border-top-width: 12px;
    border-top-color: #A52A2A;
    position: absolute;
    top: 100%;
    left: 24px;
}
.hollow-bottom:after{
    top: 99px;
    border-color: #fff transparent;
}
```

效果：
<div class="hollow-bottom"></div>

### 左空心气泡框

``` css
.hollow-left{
    width: 150px;
    height: 100px;
    border: 1px solid #A52A2A;
    position: relative;
    border-radius: 10px;
}
.hollow-left:before,
.hollow-left:after{
    width: 0;
    height: 0;
    content: '';
    border-width: 12px;
    border-style: solid;
    border-color: transparent;
    border-right-width: 12px;
    border-right-color: #A52A2A;
    position: absolute;
    right: 100%;
    top: 24px;
}
.hollow-left:after{
    right: 99px;
    border-color: transparent #fff;
}
```

效果：
<div class="hollow-left"></div>

### 右空心气泡框

``` css
.hollow-right{
    width: 150px;
    height: 100px;
    border: 1px solid #A52A2A;
    position: relative;
    border-radius: 10px;
}
.hollow-right:before,
.hollow-right:after{
    width: 0;
    height: 0;
    content: '';
    border-width: 12px;
    border-style: solid;
    border-color: transparent;
    border-left-width: 12px;
    border-left-color: #A52A2A;
    position: absolute;
    left: 100%;
    top: 24px;
}
.hollow-right:after{
    left: 149px;
    border-color: transparent #fff;
}
```

效果：
<div class="hollow-right"></div>

## transfrom 气泡框

### 空心气泡框

``` css
.transfrom-bubble-hollow{
    width: 150px;
    height: 100px;
    border: 1px solid #A52A2A;
    position: relative;
    border-radius: 10px;
}
.transfrom-bubble-hollow:after{
    width: 12px;
    height: 12px;
    content: '';
    display: block;
    background: #fff;
    border-bottom: 1px solid #A52A2A;
    border-rigght: 1px solid #A52A2A;
    position: absolute;
    left: 24px;
    bottom: -7px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}
```

效果：
<div class="transfrom-bubble-hollow"></div>

### 实心气泡框
``` css
.transfrom-bubble-solid{
    width: 150px;
    height: 100px;
    background: #A52A2A;
    position: relative;
    border-radius: 10px;
}
.transfrom-bubble-solid:after{
    width: 12px;
    height: 12px;
    content: '';
    display: block;
    background: #fff;
    border-bottom: 1px solid #A52A2A;
    border-rigght: 1px solid #A52A2A;
    position: absolute;
    left: 24px;
    bottom: -7px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}
```

效果：
<div class="transfrom-bubble-solid"></div>

## &diams; 字符气泡框

> 这个方法我个人不喜欢用，还要去设置字体大小，很不精准，虽说可以兼容IE，我只想说一句，高版本IE不用，自己用个低版本找刺激，怪我咯！如果有感兴趣的朋友可以自行百度一下

## 八卦

``` css
.gossip{
    width: 96px;
    height: 48px;
    background: #fff;
    border-style: solid;
    border-color: #A52A2A;
    border-width: 2px 2px 50px 2px;
    border-radius: 100%;
    position: relative;
}
.gossip:before{
    width: 12px;
    height: 12px;
    content: '';
    background: #fff;
    border: 18px solid #A52A2A;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 0;
}
.gossip:after{
    width: 12px;
    height: 12px;
    content: '';
    background: #A52A2A;
    border: 18px solid #fff;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
}
```

效果：
<div class="gossip"></div>

## 彩带

``` css
.ribbon{
    width: 0;
    height: 100px;
    border-left: 50px solid #A52A2A;
    border-right: 50px solid #A52A2A;
    border-bottom: 35px solid transparent;
}
```

效果：
<div class="ribbon"></div>

## 徽章

``` css
.badge{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: #A52A2A;
    position: relative;
}
.badge::before,
.badge::after{
    content: '';
    border-bottom: 70px solid #A52A2A;
    border-left: 40px solid transparent;
    border-right: 40px solid transparent;
    -webkit-transform: rotate(-140deg);
    -moz-transform: rotate(-140deg);
    -ms-transform: rotate(-140deg);
    -o-transform: rotate(-140deg);
    position: absolute;
    top: 70px;
    left: -10px;
}
.badge::after{
    left: auto;
    right: -10px;
    -webkit-transform: rotate(140deg);
    -moz-transform: rotate(140deg);
    -ms-transform: rotate(140deg);
    -o-transform: rotate(140deg);
}
```

效果：
<div class="badge"></div>

<br />

## Chevron

``` css
.chevron {
    width: 200px;
    height: 60px;
    position: relative;
    text-align: center;
    padding: 12px;
    margin-bottom: 6px;
}

.chevron::before {
    width: 51%;
    height: 100%;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    background: #A52A2A;
    -webkit-transform: skew(0deg, 6deg);
    -moz-transform: skew(0deg, 6deg);
    -ms-transform: skew(0deg, 6deg);
    -o-transform: skew(0deg, 6deg);
    transform: skew(0deg, 6deg);
}
.chevron::after {
    height: 100%;
    width: 50%;
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    background: #A52A2A;
    -webkit-transform: skew(0deg, -6deg);
    -moz-transform: skew(0deg, -6deg);
    -ms-transform: skew(0deg, -6deg);
    -o-transform: skew(0deg, -6deg);
    transform: skew(0deg, -6deg);
}​
```

效果：
<div class="chevron"></div>

## 放大镜

``` css
.magnifier{
    width: 64px;
    height: 64px;
    display: inline-block;
    border: 15px solid #A52A2A;
    position: relative;
    border-radius: 50%;
    font-size: 10em;
}
.magnifier::before{
    width: 55px;
    height: 15px;
    content: '';
    display: inline-block;
    background: #A52A2A;
    position: absolute;
    right: -45px;
    bottom: -20px;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
}
```

效果：
<div class="magnifier"></div>

<br />

## 月亮

```css
.moon {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    box-shadow: 15px 15px 0 0 #A52A2A;
}
```

效果：
<div class="moon"></div>

<br>
不定期更新中......
