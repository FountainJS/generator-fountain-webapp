const path = require('path');
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const excludeGitignore = require('gulp-exclude-gitignore');
const istanbul = require('gulp-istanbul');
const mocha = require('gulp-mocha');
const nsp = require('gulp-nsp');
const plumber = require('gulp-plumber');
const gutil = require('gulp-util');

gulp.task('linter', eslintCheck);
gulp.task('prepublish', nodeSecurityProject);
gulp.task('default', gulp.series('linter', gulp.series(istanbulCover, mochaTest)));

function nodeSecurityProject(cb) {
  nsp({package: path.resolve('package.json')}, cb);
}

function eslintCheck() {
  return gulp.src(['**/*.js', '!**/templates/**'])
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
}

function istanbulCover() {
  return gulp.src(['**/*.js', '!**/templates/**'])
    .pipe(excludeGitignore())
    .pipe(istanbul({includeUntested: true}))
    .pipe(istanbul.hookRequire());
}

function mochaTest() {
  return gulp.src('test/**/*.js')
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec'}))
    .once('error', err => {
      gutil.log(gutil.colors.red('[Mocha]'), err.toString());
      process.exit(1);
    })
    .pipe(istanbul.writeReports());
}
