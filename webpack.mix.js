let mix = require('laravel-mix');

mix
  .setPublicPath('public')
  .react('frontend/src/app.js', 'public/js/app.js');
