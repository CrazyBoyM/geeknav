<?php

use Illuminate\Database\Seeder;

class AdminMenuTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('admin_menu')->delete();
        
        \DB::table('admin_menu')->insert(array (
            0 => 
            array (
                'id' => 1,
                'parent_id' => 0,
                'order' => 1,
                'title' => '首页',
                'icon' => 'fa-bar-chart',
                'uri' => '/',
                'permission' => NULL,
                'created_at' => NULL,
                'updated_at' => '2019-01-21 09:33:12',
            ),
            1 => 
            array (
                'id' => 2,
                'parent_id' => 0,
                'order' => 5,
                'title' => '后台管理',
                'icon' => 'fa-cogs',
                'uri' => NULL,
                'permission' => NULL,
                'created_at' => NULL,
                'updated_at' => '2019-08-23 03:29:07',
            ),
            2 => 
            array (
                'id' => 3,
                'parent_id' => 2,
                'order' => 6,
                'title' => '用户',
                'icon' => 'fa-users',
                'uri' => 'auth/users',
                'permission' => NULL,
                'created_at' => NULL,
                'updated_at' => '2019-08-23 03:29:07',
            ),
            3 => 
            array (
                'id' => 4,
                'parent_id' => 2,
                'order' => 7,
                'title' => '角色',
                'icon' => 'fa-user',
                'uri' => 'auth/roles',
                'permission' => NULL,
                'created_at' => NULL,
                'updated_at' => '2019-08-23 03:29:07',
            ),
            4 => 
            array (
                'id' => 5,
                'parent_id' => 2,
                'order' => 8,
                'title' => '权限',
                'icon' => 'fa-ban',
                'uri' => 'auth/permissions',
                'permission' => NULL,
                'created_at' => NULL,
                'updated_at' => '2019-08-23 03:29:07',
            ),
            5 => 
            array (
                'id' => 6,
                'parent_id' => 2,
                'order' => 9,
                'title' => '菜单',
                'icon' => 'fa-bars',
                'uri' => 'auth/menu',
                'permission' => NULL,
                'created_at' => NULL,
                'updated_at' => '2019-08-23 03:29:07',
            ),
            6 => 
            array (
                'id' => 7,
                'parent_id' => 2,
                'order' => 10,
                'title' => '操作日志',
                'icon' => 'fa-history',
                'uri' => 'auth/logs',
                'permission' => NULL,
                'created_at' => NULL,
                'updated_at' => '2019-08-23 03:29:07',
            ),
            7 => 
            array (
                'id' => 8,
                'parent_id' => 0,
                'order' => 2,
                'title' => '分类管理',
                'icon' => 'fa-archive',
                'uri' => 'categories',
                'permission' => NULL,
                'created_at' => '2019-01-21 12:07:46',
                'updated_at' => '2019-05-02 12:06:59',
            ),
            8 => 
            array (
                'id' => 9,
                'parent_id' => 0,
                'order' => 3,
                'title' => '网站管理',
                'icon' => 'fa-edge',
                'uri' => 'sites',
                'permission' => NULL,
                'created_at' => '2019-01-21 14:39:27',
                'updated_at' => '2019-05-02 12:07:54',
            ),
            9 => 
            array (
                'id' => 11,
                'parent_id' => 0,
                'order' => 4,
                'title' => '站点配置',
                'icon' => 'fa-connectdevelop',
                'uri' => 'setting',
                'permission' => NULL,
                'created_at' => '2019-08-23 03:28:35',
                'updated_at' => '2019-08-23 03:38:47',
            ),
        ));
        
        
    }
}