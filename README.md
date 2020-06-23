# 极客导航
一个开源的导航，具备很酷的界面和完备的管理功能
## 说明

没有整理，直接从生产环境把代码拉了过来  
完全在laravel-webstack上直接改过来的

如需图片里的黑色主题请自行改css加载路径 css3->css  
![index](https://github.com/CrazyBoyM/geeknav/blob/master/index.PNG)
主页

![sites](https://github.com/CrazyBoyM/geeknav/blob/master/sites.PNG)
导航页

![sites](https://github.com/CrazyBoyM/geeknav/blob/master/music.PNG)
音乐窗(第三方网站,自行设置) 
![sites](https://github.com/CrazyBoyM/geeknav/blob/master/admin-home.PNG)
![sites](https://github.com/CrazyBoyM/geeknav/blob/master/admin-categories.PNG)
![sites](https://github.com/CrazyBoyM/geeknav/blob/master/admin-sites.PNG)
后台管理

### 优秀项目展示
|名称|网址|
|-----|-----|
|极客导航|http://open985.com|
|||

如果你部署了该导航,欢迎issues留言列入本表

本导航遵守MIT协议开源,先给我个star并在issues留言你的网址,然后你可以免费获得授权并自由修改部署

二次开发(无论是做主题还是模板等)禁止直接售卖或有偿下载

## 安装教程
环境要求:
PHP7+  
mysql5.7+

首先克隆本项目到本地
```
mkdir geeknav
cd geeknav
git clone https://github.com/CrazyBoyM/geeknav.git
```
安装
```
composer install
```
如果有报错,自行取消相关函数的禁用
```
cp .env.example .env
```
配置.env,重点是正确配置数据库信息

生成 KEY
```
php artisan key:generate 
```
迁移数据
```
php artisan migrate:refresh --seed
```
测试运行
```
php artisan serve --port=3560 --host=0.0.0.0
```
访问127.0.0.1:3560/admin管理后台

admin/admin

内置了一些来自webstack的网站


基于以下开源项目,表示感谢:

BluePrint

webstack-laravel

webstack

laravel-admin

laravel

如有任何相关问题,欢迎提issue

安装有困难的朋友也可以issue里留言帮忙安装(请自备vps)

## 联系

我的邮箱ai-lab@foxmail.com,可以来联系

GeekNav开源QQ群1057251914
