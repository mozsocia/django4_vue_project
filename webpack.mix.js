const mix = require('laravel-mix');

mix.js('templates/firstapp/assets/js/app.js', 'static/assets/js').vue().postCss('templates/firstapp/assets/css/app.css', 'static/assets/css', [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
]);
