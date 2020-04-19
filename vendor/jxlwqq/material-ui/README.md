# Material-UI extension for laravel-admin

[中文文档](README-CN.md)

Material-UI is a Material Design extension for [laravel-admin](https://github.com/z-song/laravel-admin), using Bootstrap Material Design.

## Screenshot

![screenshot](https://user-images.githubusercontent.com/2421068/46601090-b7541b00-cb1e-11e8-8cc3-f1a14589ff68.png)

## Requirements

* laravel-admin >= 1.6.1

## Installation

```bash
composer require jxlwqq/material-ui
php artisan vendor:publish --tag=laravel-admin-material-ui
```

## Update

```bash
composer update jxlwqq/material-ui
php artisan vendor:publish --tag=laravel-admin-material-ui --force
```

## Configurations

Add `extensions` option in your `config/admin.php` configuration file:

```php
'extensions' => [
    'material-ui' => [
        // If the value is set to false, this extension will be disabled
        'enable' => true
    ]
]
```

## Use

Just **Refresh** your browser.

## More resources

[Awesome Laravel-admin](https://github.com/jxlwqq/awesome-laravel-admin)

## Special thanks

* [DucThanhNguyen/MaterialAdminLTE](https://github.com/DucThanhNguyen/MaterialAdminLTE)
* [FezVrasta/bootstrap-material-design](https://github.com/FezVrasta/bootstrap-material-design)

## License

Licensed under [The MIT License (MIT)](LICENSE).

