<?php

use App\Http\Controllers\AkademikController;
use Illuminate\Support\Facades\Route;


Route::get('/', [AkademikController::class, 'home'])->name('home');


Route::prefix('dashboard')->group(function () {
    Route::get('/', [AkademikController::class, 'dashboard'])->name('dashboard.home');
    

    Route::get('/mahasiswa/{nrp}', [AkademikController::class, 'mahasiswaDetail'])
        ->where('nrp', '[0-9]{10}')
        ->name('mahasiswa.detail');


    Route::get('/agent/{tema?}', [AkademikController::class, 'agentIdea'])
        ->name('agent.idea');


    Route::get('/hitung-ipk/{ip1}/{ip2}', [AkademikController::class, 'hitungIpk'])
        ->where(['ip1' => '[0-9]+(\.[0-9]+)?', 'ip2' => '[0-9]+(\.[0-9]+)?'])
        ->name('kalkulator.ipk');
});

Route::fallback([AkademikController::class, 'fallback'])->name('fallback');