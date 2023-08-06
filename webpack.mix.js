const mix = require('laravel-mix');

mix.js('templates/firstapp/assets/js/app.js', 'static/assets/js')
    .vue();
    // .sass('resources/sass/app.scss', 'public/css');
