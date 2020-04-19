# Material-UI extension for laravel-admin


这是一个`laravel-admin`扩展，用来将`laravel-admin`风格切换成 [Material Design](https://material.io/)。


## 依赖

laravel-admin >= 1.6.1

## 截图

![screenshot](https://user-images.githubusercontent.com/2421068/46601090-b7541b00-cb1e-11e8-8cc3-f1a14589ff68.png)

## 安装

```bash
composer require jxlwqq/material-ui
php artisan vendor:publish --tag=laravel-admin-material-ui
```

## 更新

```bash
composer update jxlwqq/material-ui
php artisan vendor:publish --tag=laravel-admin-material-ui --force
```

## 配置

在`config/admin.php`文件的`extensions`，加上属于这个扩展的一些配置
```php
'extensions' => [
    'material-ui' => [
        // 如果要关掉这个扩展，设置为false
        'enable' => true
    ]
]
```

## 使用

**刷新**后台页面即可。

## 更多精选资源

[Awesome Laravel-admin](https://github.com/jxlwqq/awesome-laravel-admin)

## 鸣谢

* [DucThanhNguyen/MaterialAdminLTE](https://github.com/DucThanhNguyen/MaterialAdminLTE)
* [FezVrasta/bootstrap-material-design](https://github.com/FezVrasta/bootstrap-material-design)

License
------------
Licensed under [The MIT License (MIT)](LICENSE).

