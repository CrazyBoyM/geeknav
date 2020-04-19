<?php

use Encore\James\Http\Controllers\JamesController;

Route::get('auth/login', JamesController::class.'@login');
Route::post('auth/login', JamesController::class.'@postLogin');