Turn your grid into a lightbox & gallery
======

This is an extension to integrates [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/) into laravel-admin.

DEMO [lightbox](http://demo.laravel-admin.org/lightbox/lightbox) & [gallery](http://demo.laravel-admin.org/lightbox/gallery)

Login using `admin/admin`

## Installation 

```bash
composer require laravel-admin-ext/grid-lightbox

php artisan vendor:publish --tag=laravel-admin-grid-lightbox
```

## Configurations

Open `config/admin.php`, add configurations that belong to this extension at `extensions` section.
```php

    'extensions' => [

        'grid-lightbox' => [
        
            // Set to `false` if you want to disable this extension
            'enable' => true,
        ]
    ]

```

## Usage

Use it in the grid:
```php
// simple lightbox
$grid->picture()->lightbox();

//gallery
$grid->picture()->gallery();

//zoom effect
$grid->picture()->lightbox(['zooming' => true]);
$grid->picture()->gallery(['zooming' => true]);

//width & height properties
$grid->picture()->lightbox(['width' => 50, 'height' => 50]);
$grid->picture()->gallery(['width' => 50, 'height' => 50]);
```

## Donate

> Help keeping the project development going, by donating a little. Thanks in advance.

[![PayPal Me](https://img.shields.io/badge/Donate-PayPal-green.svg)](https://www.paypal.me/zousong)

![-1](https://cloud.githubusercontent.com/assets/1479100/23287423/45c68202-fa78-11e6-8125-3e365101a313.jpg)

License
------------
Licensed under [The MIT License (MIT)](LICENSE).

