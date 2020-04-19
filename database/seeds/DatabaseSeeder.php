<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UsersTableSeeder::class);
        $this->call(AdminMenuTableSeeder::class);
        $this->call(AdminPermissionsTableSeeder::class);
        $this->call(AdminRolesTableSeeder::class);
        $this->call(AdminRoleMenuTableSeeder::class);
        $this->call(AdminRolePermissionsTableSeeder::class);
        $this->call(AdminRoleUsersTableSeeder::class);
        $this->call(AdminUsersTableSeeder::class);
        $this->call(AdminUserPermissionsTableSeeder::class);
        $this->call(CategoriesTableSeeder::class);
        $this->call(SitesTableSeeder::class);
        $this->call(AdminConfigTableSeeder::class);
    }
}
