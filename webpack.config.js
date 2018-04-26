const path = require('path');

module.exports = {
  entry: './src/index.js',

  output: {
    filename: 'script.js',
    path: path.resolve(__dirname, 'public'),
  },

  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader',
          }, {
            loader: 'css-loader',
          }, {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.js/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            name: 'images/[hash]-[name].[ext]',
          },
        }],
      },
    ],
  },

  devtool: 'source-map',

  devServer: {
    contentBase: path.join(__dirname, 'public'),
    host: '0.0.0.0',
    port: 3000,
  },
};