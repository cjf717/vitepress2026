---
title: git规范管理代码demo
date: 2023-09-07 13:50:45
categories: 
  - 编程
tags: 
  - git
---

## git 规范管理代码
### 提交规范

```bash
git add .
// git commit -m "first commit"
npm run commit
// git remote add origin git@gitee.com:jeff-chan/***.git
// git remote add origin https://gitee.com/jeff-chan/***/.git
git push -u origin "master"
```

### 分支操作

创建分支我们在计算机上只能访问本地分支，在将分支推送到远程仓库之前，需要先创建一个本地分支。
可以使用以下命令来创建分支

如果想将新建的本地分支推送到远程仓库，以在远程仓库添加这个分支。可以执行以下命令

```bash
git push -u origin <branch>
```

### 取消修改

取消修改有三种情况：

- 1）未使用 git add
  未将修改文件添加到暂存区，可以使用以下命令来撤销所有还没有加入到缓存区的修改：
  ```
  git checkout -- <filename>
  ```
  需要注意，此文件不会删除新建的文件，因为新建的文件还没加入到 Git 管理系统中，所以对 Git 来说事未知的，需要手动删除。
- 2）已使用 git add
  已将修改文件添加到暂存区，未使用 git commit 提交缓存这种情况下，相当于撤销了 git add 命令对于文件修改的缓存：
  `git reset HEAD <filename>`
  上面的命令可以撤销指定文件的缓存，要想放弃所有文件的缓存，可以执行以下命令：
  git reset HEAD
  需要注意，在使用此命令后，本地的修改并不会消失，而会回到第一种情况。要想撤销本地的修改，执行第一种情况中的命令即可。
  除此之外，还可以指定返回到 N 次提交之前的阶段，执行以下命令即可：
  ```
  git reset HEAD~N
  ```
  这样就能退回到 n 个版本之前，同样不会修改本地文件的内容，这些新的内容会变成未更新到缓存区的状态。
- 3）已使用 git commit
  已提交缓存这种情况下，可以使用以下命令来回退到上一次 commit 的状态：
  ```
  git reset --hard HEAD^
  ```
  也可以使用以下命令来回退到任意版本：
  `git reset --hard <commit_id>`
  注意，使用 git log 命令来查看 git 提交历史和 commit id。