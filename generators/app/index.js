const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  prompting() {
    this.fountainPrompting();
  },

  composing() {
    this.composeWith(`fountain-${this.props.framework}`, {
      options: {
        framework: this.props.framework,
        modules: this.props.modules,
        js: this.props.js,
        css: this.props.css
      }
    }, {
      local: require.resolve(`generator-fountain-${this.props.framework}/generators/app`)
    });
  }
});
