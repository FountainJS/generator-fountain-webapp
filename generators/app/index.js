const fountain = require('fountain-generator');

module.exports = fountain.Base.extend({
  prompting: function () {
    this.fountainPrompting();
  },

  composing: function () {
    this.composeWith(`fountain-${this.props.framework}`, { options: this.props }, {
      local: require.resolve(`generator-fountain-${this.props.framework}/generators/app`)
    });
  }
});
