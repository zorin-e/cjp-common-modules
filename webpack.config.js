const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const mode = process.env.NODE_ENV;
const isDev = mode === 'development';

const config = {
  entry: isDev ? './src/demo.ts' : './src/app.ts',
  output: {
    filename: isDev ? 'bundle.[hash].js' : 'app.js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, isDev ? 'built' : 'dist')
  },
  devServer: {
    port: 3001,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.js', '.ts']
  },
  mode
}

if (!isDev) {
  config.output.libraryTarget = 'commonjs2';
} else {
  config.plugins.push(
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  )
}

module.exports = config;
