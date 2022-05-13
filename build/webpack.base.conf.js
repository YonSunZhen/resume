'use strict'
const path = require("path");
const isDev = /^dev/.test(process.env.npm_lifecycle_event);
const config = require('./config');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader')

module.exports = {
  mode: isDev ? "development" : "production", // 开发模式
  entry: {
    app: "./src/main.ts"
  },
  output: {
    publicPath: isDev ? config.dev.publicPath : config.prod.publicPath, // 打包后资源文件的引用会基于此路径
    path: path.resolve(__dirname, "..", "dist"), // 打包后的输出目录
    filename: isDev ? config.dev.filename : config.prod.filename,// 在development模式下,id为name
    chunkFilename: isDev ? config.dev.chunkFilename : config.prod.chunkFilename
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [
      new TsConfigPathsPlugin() // 编译ts config文件定义的别名
    ]
  },
  module: {
    rules: [
      { test: /\.(ttf|eot|svg|woff|woff2)$/, use: 'url-loader' },
      {
        test: /\.(jpg|png|gif|bmp|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // size <= 8KB
              name: '[name].[hash:8].[ext]', // 属于file-loader的属性
              publicPath: "imgs/",  // 属于file-loader的属性
              outputPath: "imgs/"  // 属于file-loader的属性
            }
          }
        ]
      },
      {
        test: /\.art$/,
        loader: "art-template-loader",
        options: {
          // art-template options (if necessary)
          // @see https://github.com/aui/art-template
        }
      },
      {
        test: /\.ts?$/,
        loader: ['babel-loader', 'awesome-typescript-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ // 自动生成html,并且自动导入所有依赖同步包
      filename: "index.html",
      template: path.resolve(__dirname, "../src", "index.html"),
      minify: {
        collapseWhitespace: true // 压缩
      }
    }),
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../src/static'),
      to: path.resolve(__dirname, '../dist/static'),
      ignore: ['.*']
    }]),
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '../'),   //根目录
    })
  ]
};
