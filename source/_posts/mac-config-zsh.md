---
title: mac终端配置zsh
date: 2016-10-31 13:17:02
categories: Shell
tags: Mac
---

mac自身安装了zsh，然而zsh不是很好用，需要配合模板插件：[oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh)

#### 1. 克隆仓库：

	git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh
	
<!--more-->
	
#### 2. 备份现有的.zshrc文件：（可选，一般不需要）
	
	cp ~/.zshrc ~/.zshrc.orig
	
#### 3. 替换.zshrc文件：

	cp ~/.oh-my-zsh/templates/zshrc.zsh-template ~/.zshrc	
#### 4. 更改默认的shell	：

	chsh -s /bin/zsh
	
#### 5. 重启终端

效果图：
![shell](/images/assets/shell.png)

#### 如果要切换回bash：

	chsh -s /bin/bash