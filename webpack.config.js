const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  plugins: [
    new HTMLWebpackPlugin({
        title: 'Restaurant', // Title of the HTML document
        template: './src/index.html', // Path to your template file
        filename: 'index.html', // Output file name
        minify: {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          useShortDoctype: true
        }
      })
  ]
};