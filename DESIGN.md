# Yeoman's Fountain JS generators design

This article is about to describe a bit the design choices made in the development of the Fountain JS generators and help potential new contributors to apprehend the project spread across several generators and GitHub repositories.

# Composition

We heavily rely on the [Yeoman generator composability](http://yeoman.io/authoring/composability.html). The purpose of the Fountain generators is to have a lots of "as small as possible" generators each focusing on the configuration of a single technology. Depending on the options of the user, we'll use some of the generators and not the others.

The isolation of each technology is an important focus. We want that all generators address a technology in isolation of the rest of the project. Thereby, each technology can be added or not depending on options but also evolution in time of the project.

Isolation is not always easy to come up. Adding a technology can imply changing a configuration file of another one. But we try to keep this principle even if it implies updating on the fly others configurations.

# Main options

Isolation is important but there is some options or choices that are so important that they have impact on every other generators. To deal with those, we chose to set up a short and fixed list of **meta** options which will be spread amongst all others generators. Each fountain generator can rely on having a value for these options.

The list, at this point is:
- **framework** the main Web framework (React, Angular 1, Angular 2)
- **modules** the module management (Webpack, SystemJS, Inject)
- **js** the JS preprocessor (none, Babel, TypeScript)
- **css** the CSS preprocessor (none, Sass, Less)
- **html** the HTML preprocessor

Each generator can ask for more choices like what component library you want with Angular or Flux implementation you want for React but these options will not be passed to the other fountain generator.

# Main workflow

```
ASCII!
                              -----------------------------
                                generator-fountain-webapp
                                    webapp entry point
                              -----------------------------
                                            |
            -------------------------------------------------------------------
            |                               |                                 |
---------------------------     ---------------------------     ------------------------
generator-fountain-angular1     generator-fountain-angular2     generator-fountain-react
    seed angular 1 app                seed angular 2 app              seed react app
---------------------------     ---------------------------     ------------------------
            |                               |                                 |
            -------------------------------------------------------------------
                                            |
                                -------------------------        --------------------------        --------------------------------        ---------------------------
                                 generator-fountain-gulp   ----   generator-fountain-karma    ---   generator-fountain-browsersync    ---   generator-fountain-eslint
                                     main gulp 4 code
                                -------------------------        --------------------------        --------------------------------        ---------------------------
                                            |
            -------------------------------------------------------------------
            |                               |                                 |
-----------------------------     ----------------------------     -----------------------------
 generator-fountain-inject         generator-fountain-webpack       generator-fountain-systemjs
no modules and script injects         modules with webpack             modules with systemjs
     deps with bower                    deps with npm                     deps with jspm
-----------------------------     ----------------------------     -----------------------------
```

# [fountain-generator](https://github.com/FountainJS/fountain-generator) Base

To implement the concept of main options and to have some common utility functions shared amongst all fountain generators, there is a fountain-generator module which contains a Base generator to be used by all fountain generators.

It uses the [prototypal inheritance proposed by Yeoman](http://yeoman.io/authoring/running-context.html) and depends on the [original yeoman generator](https://github.com/yeoman/generator).

The main purpose of the fountain generator base is to configure as options the main fountain options and offer an utility options for automatically prompting all questions not already answered by the options. This way, you can rely on always having a value for the main options by only inheriting from the right base.

# Node 4+

As an early design choice, we chose to force the minimum Node version to 4 for the whole FountainJS.

Thereby we have the freedom to use all ES6 features the new versions of Node allows.
