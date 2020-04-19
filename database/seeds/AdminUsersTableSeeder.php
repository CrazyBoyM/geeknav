<?php

use Illuminate\Database\Seeder;

class AdminUsersTableSeeder extends Seeder
{

    /**
     * Auto generated seed file
     *
     * @return void
     */
    public function run()
    {
        

        \DB::table('admin_users')->delete();
        
        \DB::table('admin_users')->insert(array (
            0 => 
            array (
                'id' => 1,
                'username' => 'admin',
                'password' => '$2y$10$.NSfFNoWomEOQPSde0qsSeL1unvJY81qo6XjPSJwexqriWqhMRrfK',
                'name' => 'Administrator',
                'avatar' => NULL,
                'remember_token' => NULL,
                'created_at' => '2019-01-21 09:24:58',
                'updated_at' => '2019-01-21 09:24:58',
            ),
        ));
        
        
    }
}