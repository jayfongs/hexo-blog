---
title: Hexo部署到VPS服务器
date: 2016-10-09 11:04:20
categories: Hexo
tags:
    - Hexo
    - Nginx
---

## 准备工作
  * VPS服务器一台
  * 已安装Nginx

## Hexo部署VPS服务器

> 本站便是采取此方法部署的

<!-- more -->

### 使用Rsync部署VPS
首先在Hexo根目录安装rsync

    $ cnpm install hexo-deployer-rsync --save

这里我使用的是淘宝的NPM镜像
淘宝NPM镜像安装方法：

    $ npm install -g cnpm --registry=https://registry.npm.taobao.org

然后就可以使用cnpm来安装了，速度超快，妥妥的！！！

    $ cnpm install <packageName>

而后打开Hexo根目录下的 `_config.yml` 中配置deploy，根据[Hexo rsync部署](http://hexo.io/zh-cn/docs/deployment.html#Rsync)：

```
deploy
  type: rsync
  host: 服务器的IP地址
  user: root (使用者名称)
  root: 远程主机的根目录 服务器指定的目录
  port: 服务器端口号  默认22    [选填]
  delete: 删除远程主机上的旧文件 默认true    [选填]
  verbose: 显示调试信息 默认true    [选填]
  ignore_errors: 忽略错误 默认false   [选填]
```

> **注意 ：rsync不能创建不存在的远程主机目录，必须先创建好远程主机的目录**

如果在部署的时候rsync一直报错，那应该就是你的服务器没有安装rsync服务，查看是否安装：

    $ dpkg -s rsync

安装如下：

    $ sudo apt-get install rsync

### 使用FTPSync部署虚拟主机
如果没有服务器，则可以部署到自己的主机，也是比较简单的
同上面一样还是打开Hexo根目录下的 `_config.yml` 中配置deploy

首先还是江湖规矩，安装hexo-deployer-ftpsync这个NPM包：

    $ cnpm install hexo-deployer-ftpsync --save

根据[Hexo FTPSync部署](http://hexo.io/zh-cn/docs/deployment.html#FTPSync)：

```
deploy:
  type: ftpsync
  host: 主机的IP地址
  user: 主机名称
  pass: 主机密码
  remote: 主机的根目录 默认是 /htdocs 或者 /www 根据自己的配置指定
  port: 主机端口号   默认21    [选填]
  ignore: 忽略的文件或目录	[选填]
  connections: 使用的连接数   默认1   [选填]
  verbose: 显示调试信息	默认false   [选填]
```

我之前使用阿里云主机部署的时候，超级慢，不造为啥，不造你们部署的时候是不是也一样。
