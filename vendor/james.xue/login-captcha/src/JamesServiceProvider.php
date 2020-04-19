<?php

namespace Encore\James;

use Illuminate\Support\ServiceProvider;

class JamesServiceProvider extends ServiceProvider
{
    /**
     * {@inheritdoc}
     */
    public function boot(James $extension)
    {
        if (! James::boot()) {
            return ;
        }

        if ($views = $extension->views()) {
            $this->loadViewsFrom($views, 'login-captcha');
        }

        $this->publishes([
            __DIR__.'/../resources/lang/zh-CN/validation.php' => resource_path('lang/zh-CN/validation.php'),
            __DIR__.'/../resources/lang/zh-CN/auth.php' => resource_path('lang/zh-CN/auth.php'),
        ], 'lang');

        $this->app->booted(function () {
            James::routes(__DIR__.'/../routes/web.php');
        });
    }
}