var path = require('path');
module.exports = {
  entry: {
    'fixPerspectiveElement': './index'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'fix-perspective-element.js',
    libraryTarget: 'umd',
    library: 'fixPerspectiveElement'
  }
};
