'use strict';

var gulp         = require('gulp');
var babel       = require('gulp-babel');
var run         = require('gulp-run');
var rename      = require('gulp-rename');
var replace     = require('gulp-replace');
var packageInfo = require('./package.json');

gulp.task('transpile', function(){
  return gulp.src('src/es6/index.js')
    .pipe(babel())
    .pipe(gulp.dest('src'));
})

gulp.task('run', ['default', 'jspm_bundle','jspm_pack', 'render_index', 'open'])

gulp.task('open', function(){
  return run('electron .').exec();
})

gulp.task('jspm_bundle', function(){
  return run(['jspm bundle', packageInfo.bundle, packageInfo.paths.dist + '/' + packageInfo.bundle_out, '--inject'].join(' ')).exec();
})

gulp.task('jspm_pack', function(){
  return run(['jspm bundle-sfx', packageInfo.bundle, packageInfo.paths.dist + '/' + packageInfo.name + '.js'].join(' ')).exec();
})

gulp.task('render_index', function(){
    gulp.src(['build/index.html'])
      .pipe(replace('<!--@@scripts-->','<script src="dist/' + packageInfo.name + '.js" type="text/javascript"></script>'))
      .pipe(gulp.dest('public'));
})

gulp.task('default', ['transpile']);
