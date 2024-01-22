<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        if (!function_exists('generateDefaultProfilePicture')) {
            function generateDefaultProfilePicture($name)
            {
                $initials = strtoupper(substr($name, 0, 2));

                $image = Image::canvas(100, 100, '#3498db');
                $image->text($initials, 50, 50, function ($font) {
                    $font->file(public_path('path-to-your-font.ttf'));
                    $font->size(40);
                    $font->color('#ffffff');
                    $font->align('center');
                    $font->valign('middle');
                });

                $filename = 'profile_' . Str::random(10) . '.png';
                $image->save(public_path("storage/profile_pictures/{$filename}"));

                return $filename;
            }
        }
    }
}
