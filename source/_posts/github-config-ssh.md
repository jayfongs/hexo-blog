---
title: Github添加SSH
date: 2016-11-14 15:52:32
categories: SSH
tags:
    - Github
    - SSH
---

双11后的第一篇文章，小伙伴们你们有木有剁手，反正我是没忍住，省略一万字.....

### 1. 检查本机是否有ssh key

运行代码：

``` shell
$ cd ~/.ssh
$ ls
```

这两个命令就是检查是否已经存在 `id_rsa` 和 `id_rsa.pub` 文件，如果文件已经存在，说明配置过SSH，那么可以跳过步骤2，直接进入步骤3。<!-- more -->
如图：
![ssh](/images/assets/github-ssh.png)


### 2. 创建一个SSH key

    ssh-keygen -t rsa -C "xxxxx@xxx.com"

代码参数含义：
+ `-t`： 指定密钥类型，默认是 `rsa` ，可以省略。
+ `-C`： 设置注释文字，比如邮箱。
+ `-f`： 指定密钥文件存储文件名。

#### 以上代码省略了 `-f` 参数，因此，运行上面那条命令后会让你输入一个文件名，用于保存刚才生成的 SSH key 代码

    Generating public/private rsa key pair.
    Enter file in which to save the key (/c/Users/xxxx/.ssh/id_rsa):

当然，也可以不输入文件名，使用默认文件名（推荐），那么就会生成 `id_rsa` 和 `id_rsa.pub` 两个秘钥文件


#### 接着会提示输入密码（该密码是你 `push` 文件的时候要输入的密码，而不是 `github` 管理者的密码）
也是可选的，直接回车（推荐）

    Enter passphrase (empty for no passphrase):

#### 接着又会提示确认密码，直接回车

    Enter same passphrase again:

#### 最后会提示：

    Your identification has been saved in /c/Users/you/.ssh/id_rsa.
    Your public key has been saved in /c/Users/you/.ssh/id_rsa.pub.
    The key fingerprint is:
    SHA256:xxxxxxxxxxxxxxx xxxxx@xxx.com

如图：
![last](/images/assets/ssh-atlast.png)
当你看到上面这段代码是时候，那就说明，你的 SSH key 已经创建成功，你只需要添加到 Github 的 SSH key 上就可以了

### 3. 添加SSH key到 github

首先复制 `id_rsa.pub` 这个文件内容，也可以用编辑器打开复制

    cat ~/.ssh/id_rsa.pub

然后会把 `id_rsa.pub` 文件内容给打印出来，选中复制就好了

接着登录 [Github](https://github.com) 点击头像后面的倒三角&rarr;`点击settings`&rarr;`点击SSH and GPG keys`
![github-ssh-settings](/images/assets/github-ssh-settings.png)
然后点击New SSH key
![github-ssh-add](/images/assets/github-ssh-add.png)
最后点击Add SSH key按钮生成

### 4. 测试SSH key

    ssh -T git@github.com

然后会提示：

    The authenticity of host 'github.com (192.30.253.112)' can't be established.
    RSA key fingerprint is SHA256:nThbg6kXUpJWGl7E1IGOCspRomTxdCARLviKw6E5SY8.
    Are you sure you want to continue connecting (yes/no)?

输入 `yes` 回车即可

接着就会提示你输入密码（创建 SSH key 的时候设置了密码）：

    Enter passphrase for key '/c/Users/Administrator/.ssh/id_rsa':

最后：

    Hi xxx! You've successfully authenticated, but GitHub does not
    provide shell access.

恭喜你！你已经成功设置SSH key
