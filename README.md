<p align="center">
  <a href="http://fountainjs.io/">
    <img alt="FountainJS" src="http://fountainjs.io/assets/imgs/fountain.png" width="200">
  </a>
</p>

# Fountain Webapp Generator
[![Build Status](https://travis-ci.org/FountainJS/fountain.svg?branch=master)](https://travis-ci.org/FountainJS/fountain)
[![Slack](http://fountainjs.io/assets/imgs/slack_badge.png)](https://fountain-slack.herokuapp.com/)
[![OpenCollective](https://opencollective.com/fountainjs/backers/badge.svg)](#backers) 
[![OpenCollective](https://opencollective.com/fountainjs/sponsors/badge.svg)](#sponsors)


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


### Sub-generators

If you want to access sub-generators, you have to globally install one of the following generators:
- [generator-fountain-react](https://github.com/FountainJS/generator-fountain-react)
- [generator-fountain-angular2](https://github.com/FountainJS/generator-fountain-angular2)
- [generator-fountain-angular1](https://github.com/FountainJS/generator-fountain-angular1)


### [Start development](http://fountainjs.io/doc/usage/#use-npm-scripts)

##Backers

Support us with a monthly donation and help us continue our activities. [[Become a backer](https://opencollective.com/fountainjs#backer)]

<a href="https://opencollective.com/fountainjs/backer/0/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/0/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/1/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/1/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/2/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/2/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/3/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/3/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/4/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/4/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/5/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/5/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/6/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/6/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/7/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/7/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/8/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/8/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/9/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/9/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/10/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/10/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/11/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/11/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/12/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/12/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/13/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/13/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/14/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/14/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/15/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/15/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/16/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/16/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/17/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/17/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/18/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/18/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/19/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/19/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/20/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/20/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/21/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/21/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/22/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/22/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/23/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/23/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/24/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/24/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/25/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/25/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/26/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/26/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/27/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/27/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/28/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/28/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/backer/29/website" target="_blank"><img src="https://opencollective.com/fountainjs/backer/29/avatar.svg"></a>

## Sponsors

Become a sponsor and get your logo on our website fountainjs.io and on our README on Github with a link to your site. [[Become a sponsor](https://opencollective.com/fountainjs#sponsor)]

<a href="https://opencollective.com/fountainjs/sponsor/0/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/1/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/2/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/3/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/4/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/5/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/6/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/7/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/8/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/9/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/9/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/10/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/10/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/11/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/11/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/12/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/12/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/13/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/13/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/14/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/14/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/15/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/15/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/16/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/16/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/17/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/17/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/18/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/18/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/19/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/19/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/20/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/20/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/21/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/21/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/22/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/22/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/23/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/23/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/24/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/24/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/25/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/25/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/26/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/26/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/27/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/27/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/28/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/28/avatar.svg"></a>
<a href="https://opencollective.com/fountainjs/sponsor/29/website" target="_blank"><img src="https://opencollective.com/fountainjs/sponsor/29/avatar.svg"></a>

## [Changelog](https://github.com/FountainJS/generator-fountain-webapp/releases)


## [Contributing](http://fountainjs.io/doc/contributing)
