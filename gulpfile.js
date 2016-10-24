const gulp = require('gulp');
const mocha = require('gulp-mocha');
const babel = require('gulp-babel');
const clean = require('gulp-clean');
const spawn = require('child_process').spawn;

gulp.task('default', ['start']);

gulp.task('build', ['clean'], function() {
  return gulp.src('src/**/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('build'));
});

gulp.task('clean', function () {
  gulp.src('build/**', {read: false})
    .pipe(clean());
});

gulp.task('test', function() {
  gulp.src('test/*.js')
    .pipe(mocha())
    .once('error', () => {
      process.exit(1);
    })
    .once('end', () => {
      process.exit();
    });

});

gulp.task('test2', function() {
  console.log('test');
});

gulp.task('start', function () {
  server =  spawn('node',['build/']);
  server.stdout.on('data', function (data) {
    console.log('stdout: ' + data.toString());
  });

  server.stderr.on('data', function (data) {
    console.log('stderr: ' + data.toString());
  });

  server.on('exit', function (code) {
    console.log('child process exited with code ' + code.toString());
  });
  return server;
});

gulp.task('start-debug', ['build'], function () {
  server =  spawn('node',['--debug-brk', 'build/']);
  server.stdout.on('data', function (data) {
    console.log('stdout: ' + data.toString());
  });

  server.stderr.on('data', function (data) {
    console.log('stderr: ' + data.toString());
  });

  server.on('exit', function (code) {
    console.log('child process exited with code ' + code.toString());
  });
  return server;
});

