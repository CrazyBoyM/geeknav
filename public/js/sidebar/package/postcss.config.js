const postcss = require('postcss');

const borderBox = postcss.plugin('postcss-border-box', () => root => {
  root.walkRules(rule => {
    rule.prepend(postcss.decl({
      prop: 'box-sizing',
      value: 'border-box'
    }));
  });
});

module.exports = () => ({
  plugins: {
    'postcss-import': {},
    'postcss-mixins': {},
    'postcss-simple-vars': {},
    'postcss-write-svg': {
      // For IE support
      encoding: 'base64'
    },
    'postcss-nested': {},
    'postcss-css-variables': {},
    'postcss-calc': {},
    'postcss-plugin-context': {
      'border-box': borderBox
    },
    'autoprefixer': {},
    'csswring': {},
    'postcss-reporter': {}
  }
});
