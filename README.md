# Fountain Webapp Generator

## Project under heavy development

> This Yeoman generator allows you to start any Webapp with the best Developer Experience out of the box!

> No matter what framework or module management you want to use, we got you covered with a cutting edge working configuration.

> We use [Gulp 4](http://gulpjs.com/) as a task manager but we'll ask you questions about:
- Framework: React, Angular 1, Angular 2, none
- Modules management: Webpack, SystemJS, none
- JS preprocessor: Babel, TypeScript, none
- CSS preprocessor: Sass, Less, none

This generator is the entry point of the Yeoman Fountain generators for webapps. It can be considered as the v2 of [generator-gulp-angular](https://github.com/Swiip/generator-gulp-angular).

## Generator Fountain Webapp structure

To take profit of the best of the Yeoman infrastructure, we heavily relies on the composability natures of the generators.

Thereby, each needs of your future application will be addressed by a dedicated Yeoman generator (each will be used depending of the options you selected or not).

More informations in [DESIGN.md](DESIGN.md).

### Web framework layer
This generators can be used directly to bypass the framework question.

[![React](docs/assets/react.png)](https://github.com/FountainJS/generator-fountain-react)
[![Angular 1](docs/assets/angular1.png)](https://github.com/FountainJS/generator-fountain-angular1)
[![Angular 2](docs/assets/angular2.png)](https://github.com/FountainJS/generator-fountain-angular2)

### Web tooling layer
[![Gulp](docs/assets/gulp.png)](https://github.com/FountainJS/generator-fountain-gulp)
[![ESLint](docs/assets/eslint.png)](https://github.com/FountainJS/generator-fountain-eslint)
[![BrowserSync](docs/assets/browsersync.png)](https://github.com/FountainJS/generator-fountain-browsersync)
[![Karma](docs/assets/karma.png)](https://github.com/FountainJS/generator-fountain-karma)

### Module management layer
[![Webpack](docs/assets/webpack.png)](https://github.com/FountainJS/generator-fountain-webpack)
[![SystemJS](docs/assets/systemjs.png)](https://github.com/FountainJS/generator-fountain-systemjs)
[![Bower](docs/assets/bower.png)](https://github.com/FountainJS/generator-fountain-inject)


## Usage

### Requirement Node 4+
This generator is targeted to be used with Node >= 4.0.0. You can check your version number with the command
```
node --version
```
If you have a version 0.x, please update on [nodejs.org](https://nodejs.org/en/download/).

### Install

##### Install required tools `yo` and `gulp-cli`:
```
npm install -g yo gulp-cli
```

##### Install `generator-fountain-webapp`:
```
npm install -g generator-fountain-webapp
```


### Run

##### Create a new directory, and go into:
```
mkdir my-new-project && cd $_
```

##### Run `yo gulp-angular`, and select desired technologies:
```
yo fountain-webapp
```

## Changelog

[All changes listed in the GitHub releases](https://github.com/FountainJS/generator-fountain-webapp)

## Contributing

[Guidelines](CONTRIBUTING.md)
