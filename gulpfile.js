'use strict';

const path = require('path');
const gulp = require('gulp');
const eslint = require('gulp-eslint');
const excludeGitignore = require('gulp-exclude-gitignore');
const mocha = require('gulp-mocha');
const istanbul = require('gulp-istanbul');
const nsp = require('gulp-nsp');
const plumber = require('gulp-plumber');

gulp.task('nsp', nodeSecurityProtocol);
gulp.task('watch', watch);
gulp.task('static', eslintCheck);
gulp.task('pre-test', istanbulCover);
gulp.task('test', gulp.series('pre-test', mochaTest));

gulp.task('prepublish', gulp.series('nsp'));
gulp.task('default', gulp.series('static', 'test'));

function nodeSecurityProtocol(cb) {
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
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire());
}

function mochaTest() {
  return gulp.src('test/**/*.js')
    .pipe(plumber())
    .pipe(mocha({reporter: 'spec'}))
    .once('error', () => {
      process.exit(1);
    })
    .pipe(istanbul.writeReports());
}

function watch() {
  gulp.watch('**/*.js', ['test']);
}
