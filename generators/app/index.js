const fountain = require('fountain-generator');
const yosay = require('yosay');
const chalk = require('chalk');

module.exports = fountain.Base.extend({
  initializing() {
    if (!this.options['skip-welcome-message']) {
      this.log(yosay());
      this.log(
        chalk.white(`Out of the box I include by default ${chalk.red.bold('Gulp 4')}, ${chalk.blue.bold('ESLint')}, ${chalk.bgWhite.black.bold('Browsersync')} and ${chalk.green.bold('Karma')}.\n`)
      );
    }
  },
  prompting() {
    return this.fountainPrompting();
  },

  composing() {
    this.composeWith(require.resolve(`generator-fountain-${this.props.framework}/generators/app`), {
      framework: this.props.framework,
      modules: this.props.modules,
      js: this.props.js,
      ci: this.props.ci,
      css: this.props.css,
      skipInstall: this.props.skipInstall,
      skipCache: this.props.skipCache
    });
  }
});
