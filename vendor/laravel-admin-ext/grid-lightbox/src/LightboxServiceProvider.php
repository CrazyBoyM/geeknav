<?php

namespace Encore\Grid\Lightbox;

use Encore\Admin\Admin;
use Encore\Admin\Grid\Column;
use Illuminate\Support\ServiceProvider;

class LightboxServiceProvider extends ServiceProvider
{
    /**
     * {@inheritdoc}
     */
    public function boot(Lightbox $extension)
    {
        if (! Lightbox::boot()) {
            return ;
        }

        if ($this->app->runningInConsole() && $assets = $extension->assets()) {
            $this->publishes(
                [$assets => public_path('vendor/laravel-admin-ext/grid-lightbox')],
                'laravel-admin-grid-lightbox'
            );
        }

        Admin::booting(function () {

            Admin::css('vendor/laravel-admin-ext/grid-lightbox/magnific-popup.css');
            Admin::js('vendor/laravel-admin-ext/grid-lightbox/jquery.magnific-popup.min.js');

            Column::extend('lightbox', LightboxDisplayer::class);
            Column::extend('gallery', GalleryDisplayer::class);
        });
    }
}