一.VCS系统
  版本控制系统，用于项目中存储、共享、合并、历史回退、代码追踪等功能
  常用的VCS软件
  CVS    2000之前
  SVN    2010之前
  Git     2010之后
二.Git中常见的概念
 工作目录：是一个目录，用于保存项目中所有的文件
 暂存区：是内存中的一块区域，用于临时保存文件的修改
 Git仓库：是一个特殊的目录，保存项目所有的文件以及每次的修改记录
 
三.Git常用管理命令
 1.第一次使用Git前，告诉Git系统你是谁
  git  config  --global   user.name  "自定义用户名"
  git  config  --global   user.email  "用户邮箱"
 2.创建Git仓库来管理当前的项目
  git  init
 3.查看当前Git系统的状态
  git  status
 4.将文件添加到暂存区
  git  add  文件名称
  git  add  .    将工作目录中所有的变化的文件添加到暂存区
 5.将暂存区中所有的文件提交到Git仓库  
  git  commit  -m  "提交说明"
 6.查看Git仓库中所有的提交日志
  git  log
  git  reflog    查看所有的提交日志、回退记录等...
 7.忽略文件
  有些文件或者目录不需要提交到仓库，可以设置忽略
  使用任意的编辑器创建文件 .gitignore，把要忽略的文件写入进去
 8.历史回退
  git  reset  --hard   提交的ID

四.分支
 从主线中分离出来，不影响其它线程的开发，从而实现并行开发
  Git下默认只有一个主分支master
  1.创建新的分支
   git  branch  分支名称
  2.查看所有的分支
   git  branch
  3.切换分支
   git  checkout  分支名称
  4.合并分支
   git  merge  分支名称
  5.删除分支
   git  branch  -d  分支名称   删除已经合并的分支
   git  branch  -D  分支名称   强制删除分支
 
五.远程仓库
 GitHub：全世界最大的代码托管平台
 码云：国内最大的
 
 先创建远程仓库
   推送到远程仓库
   git  push  远程仓库地址  分支名称
删除windows记录的账号
控制面板 -> 凭据管理器 -> Windows凭据
  下载远程仓库代码到本地（第1次没有仓库）
   git  clone  远程仓库      
  拉取到本地仓库(有仓库)
   git  pull  远程仓库  分支名称
