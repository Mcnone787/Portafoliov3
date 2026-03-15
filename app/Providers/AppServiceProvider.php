<?php

namespace App\Providers;

use Illuminate\Support\Facades\URL;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        if (config('app.env') === 'production') {
            URL::forceScheme('https');
        }

        Vite::prefetch(concurrency: 3);

        // PHP 8.4+: evitar 500 por el aviso de tempnam() en directorio temporal del sistema
        set_error_handler(function ($severity, $message, $file, $line) {
            if ($severity === E_WARNING && strpos($message, 'tempnam(): file created in the system') !== false) {
                return true;
            }
            return false;
        }, E_WARNING);
    }
}
