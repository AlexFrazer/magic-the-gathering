/* eslint-disable import/no-extraneous-dependencies */
import { Configuration } from 'webpack';
import * as HtmlWebpackPlugin from 'html-webpack-plugin';
import { resolve } from 'path';

const context = __dirname;
const { NODE_ENV: mode = 'development' } = process.env;

const config: Configuration = {
  context,
  mode: mode as Configuration['mode'],
  entry: [
    '@babel/polyfill',
    'sanitize.css',
    'typeface-roboto',
    './src/index',
  ],
  output: {
    path: resolve(context, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      loader: 'babel-loader',
      include: resolve(context, 'src'),
    }, {
      test: /\.css$/,
      loaders: ['style-loader', 'css-loader'],
    }, {
      test: /\.woff2?$/,
      loader: 'file-loader',
    }],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      // Used for hot loader.
      'react-dom': '@hot-loader/react-dom',
      '~': resolve(context, 'src'),
      '~app': resolve(context, 'src/app'),
      '~elements': resolve(context, 'src/elements'),
      '~etc': resolve(context, 'src/etc'),
      '~util': resolve(context, 'src/util'),
      '~data': resolve(context, 'src/data'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Highspot',
      template: resolve(context, 'src/index.html'),
      inject: 'body',
    }),
  ],
  devServer: {
    historyApiFallback: {
      rewrites: [{ from: /./, to: '/index.html' }],
    },
  },
};

export default config;
