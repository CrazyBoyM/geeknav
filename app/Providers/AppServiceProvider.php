<?php

namespace App\Providers;

use App\Observers\SiteObserver;
use App\Site;
use Encore\Admin\Config\Config;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Site::observe(SiteObserver::class);

        $table = config('admin.extensions.config.table', 'admin_config');
        if (Schema::hasTable($table)) {
            Config::load();
        }
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }
}
