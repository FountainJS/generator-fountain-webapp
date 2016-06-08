<p align="center">
  <a href="http://fountainjs.io/">
    <img alt="FountainJS" src="http://fountainjs.io/assets/imgs/fountain.png" width="200">
  </a>
</p>

# Fountain Webapp Generator
[![Build Status](https://travis-ci.org/FountainJS/fountain.svg?branch=master)](https://travis-ci.org/FountainJS/fountain)
[![Slack](http://fountainjs.io/assets/imgs/slack_badge.png)](https://fountain-slack.herokuapp.com/)

> This Yeoman generator allows you to start any Webapp with the best Developer Experience out of the box!

> No matter what framework or module management you want to use, we got you covered with a cutting edge working configuration.

> We use [Gulp 4](http://gulpjs.com/) as a task manager but we'll ask you questions about:
- Framework: React, Angular 2, Angular 1
- Modules management: Webpack, SystemJS, none
- JS preprocessor: Babel, TypeScript, none
- CSS preprocessor: Sass, Stylus, Less, none

This generator is the entry point of the Yeoman Fountain generators for webapps. It can be considered as the v2 of [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular).

## Generator Fountain Webapp structure

To take profit of the best of the Yeoman infrastructure, we heavily relies on the composability natures of the generators.

Thereby, each needs of your future application will be addressed by a dedicated Yeoman generator (each will be used depending of the options you selected or not).

More informations in [DESIGN.md](http://fountainjs.io/doc/design).


### Web framework layer
This generators can be used directly to bypass the framework question.

[![React](http://fountainjs.io/assets/imgs/react.png)](https://github.com/FountainJS/generator-fountain-react)
[![Angular 1](http://fountainjs.io/assets/imgs/angular1.png)](https://github.com/FountainJS/generator-fountain-angular1)
[![Angular 2](http://fountainjs.io/assets/imgs/angular2.png)](https://github.com/FountainJS/generator-fountain-angular2)

### Web tooling layer
[![Gulp](http://fountainjs.io/assets/imgs/gulp.png)](https://github.com/FountainJS/generator-fountain-gulp)
[![ESLint](http://fountainjs.io/assets/imgs/eslint.png)](https://github.com/FountainJS/generator-fountain-eslint)
[![BrowserSync](http://fountainjs.io/assets/imgs/browsersync.png)](https://github.com/FountainJS/generator-fountain-browsersync)
[![Karma](http://fountainjs.io/assets/imgs/karma.png)](https://github.com/FountainJS/generator-fountain-karma)

### Module management layer
[![Webpack](http://fountainjs.io/assets/imgs/webpack.png)](https://github.com/FountainJS/generator-fountain-webpack)
[![SystemJS](http://fountainjs.io/assets/imgs/systemjs.png)](https://github.com/FountainJS/generator-fountain-systemjs)
[![Bower](http://fountainjs.io/assets/imgs/bower.png)](https://github.com/FountainJS/generator-fountain-inject)


### Usage

### Requirement Node 4+ && NPM 3+
This generator is targeted to be used with Node >= 4.0.0 and NPM => 3.0.0. You can check your version number with the command
```
node --version && npm --version
```

### Install

##### Install required tools `yo`:
```
npm install -g yo
```

##### Install `generator-fountain-webapp`:
```
npm install -g generator-fountain-webapp
```


### Run

##### Create a new directory, and go into:
```
mkdir my-new-project && cd my-new-project
```

##### Run `yo fountain-webapp`, and select desired technologies:
```
yo fountain-webapp
```

### [Start development](http://fountainjs.io/doc/usage/#use-npm-scripts)


## [Changelog](https://github.com/FountainJS/generator-fountain-webapp/releases)


## [Contributing](http://fountainjs.io/doc/contributing)
