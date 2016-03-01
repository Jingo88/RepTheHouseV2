var gulp = require('gulp')
var source = require('vinyl-source-stream')
var browserify = require('browserify')
var babelify = require('babelify')
var rename = require('gulp-rename')
var path = require('path')

gulp.task('browserify', ()=>{
  var bundleStream = browserify(path.join(__dirname, '/src/jsx/', 'main.jsx'), {extensions: ['.jsx']})
  .transform(babelify, {presets: ['es2015', 'react'], ignore: "bower_components"})
  .bundle()

  bundleStream
  .pipe(source('main.jsx'))
  .pipe(rename('bundle.js'))
  .pipe(gulp.dest(path.join(__dirname, '/public/js')))
});

gulp.task('watch', ()=>{
  gulp.watch(path.join(__dirname, '/src/jsx/*.jsx'), ["browserify"])
})

gulp.task('default', ['browserify','watch'])
